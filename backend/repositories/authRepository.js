const AuthRepository = (user) => ({
  findByEmail: async ({email}) => {
    return await user.findOne({email});
  },
  createUser: async (userData) => {
    return await user.create(userData);
  },
});

module.exports = AuthRepository;
