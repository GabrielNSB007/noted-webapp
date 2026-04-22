/* eslint-disable no-unused-vars */
import prisma from "../config/database";

const UserModel = {
    
    createUser : async (data) => {
        return await prisma.user.create({data: data})
    },

    listUser : async () => {
        return await prisma.user.findMany()
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