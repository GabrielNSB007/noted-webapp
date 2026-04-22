/* eslint-disable no-unused-vars */
import prisma from "../config/database";

const UserModel = {
    
    createUser : async (id, username, email, password) => {
        return await prisma.user.create(
            {data: {
                id: id,
                username : username,
                email: email,
                password: password}})
    },

    getUserByEmail : async (email) => {
        return await prisma.user.findUnique({ where: {email : email}})
    },

    updateUser : async (id,data) => {
        return await prisma.update({
            where: { id: id},
            data: data
        })
    },

    deleteUser : async (id) => {
        const user = await prisma.user.delete({ where: { id : id } })
        return true
    }
}

export default UserModel