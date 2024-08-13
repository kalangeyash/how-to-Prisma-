import { PrismaClient } from "@prisma/client";

const prisma  =  new PrismaClient()


async function insertUser (username: string , password: string , firstName:string ,lastName : string )
{
    const result  = await prisma.user.create(
        {
             data:{
                email : username,
                password,
                firstName,
                lastName
             }
        }
        
    )
    console.log(result)
}
// insertUser("yash@gmail.com" , "password" , "Yash" , "Kalange")


interface UpdateParams {
    firstName : string,
    lastName : string
}

async function updateUser(username:string , {firstName,lastName}:UpdateParams)
{
    const res = await prisma.user.update({
       where :{
        email :username
       },
       data:{
        firstName,
        lastName
       }
    })
}

// updateUser("yash@gmail.com", {
//     firstName: "Kamna",
//     lastName : "Bhadoriya"
// })

async function deleteUser (username :string)
{
    const res = await prisma.user.delete({
        where:{
            email : username
        }

    })
    console.log(res)
}

deleteUser("yash@gmail.com")