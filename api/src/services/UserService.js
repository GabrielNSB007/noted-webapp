/* eslint-disable no-unused-vars */
import UserModel from "../models/UserModel";
//lacking jwt to improve security

const UserService = {

    authenticateUser : async(email, password) => {

        let dbUser = await UserModel.getUserByEmail(email)
        
        if (!dbUser || dbUser.password != password)
            throw new Error("CREDENCIAIS INVALDIAS")
    },
    
    
    registerUser : async(username, email, password) => {

        let dbUser = await UserModel.getUserByEmail(email)
        if (dbUser) throw new Error("EMAIL JA REGISTRADO")
        
        const user = await UserModel.createUser(username, email, password) //user is here for jwt token (security)
    },

    profileData : async(email) => {
        
        let user = await UserModel.getUserByEmail(email)

        if (!user) throw new Error("USUARIO NAO ENCONTRADO")
        
        return user
    }
}

export default UserService