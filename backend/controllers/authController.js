
const AuthController = (authService) => ({
    register: async(request, response) => {
        try {
            const user = await authService.register(request.body);
            response.status(201).json({
                success:true,
                message:'User registered successfully!',
                data:user
            })
        } catch (error) {
            return response.status(500).json({
                success:false,
                message:error.message
            })
        }
    },
    login: async(request, response) => {
        try {
            const user = await authService.login(request.body);
            response.status(200).json({
                success:true,
                data:user
            })
        } catch (error) {
            return response.status(500).json({
                success:false,
                message:error.message
            })
        }
    }
})

module.exports = AuthController;