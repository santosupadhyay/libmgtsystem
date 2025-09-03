const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require('dotenv').config();

// const jwtSecret = process.env.JWT_SECRET;
// const jwtRefresh = process.env.JWT_REFRESH

const AuthService = (authRepo) => ({
  register: async ({ name, email, password, role }) => {
    const existingUser = await authRepo.findByEmail(email);

    if (existingUser) throw new Error("User already exists");
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      throw new Error(
        "Password must be at least 8 characters long, contain one uppercase, one lowercase, one number, and one special character"
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await authRepo.createUser({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      role: newUser.role,
      phone:newUser.phone,
      address:newUser.address
    };
  },

  login: async ({ email, password }) => {
    const user = await authRepo.findByEmail({email});

    if (!user) throw new Error(`User doesn't exists`);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Email or password wrong");

    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    const refresh = jwt.sign(
      { id: user._id, name: user.name, email: user.email, role: user.role },
      process.env.JWT_REFRESH,
      { expiresIn: "30d" }
    );

    return {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone:user.phone,
        address:user.address
      },
      token,
      refresh,
    };
  },
});

module.exports = AuthService;
