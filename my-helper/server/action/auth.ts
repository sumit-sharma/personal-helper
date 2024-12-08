"use server"

export async function login(email: string, password: string) {
    return await { "status": 200, "message": "login successful", "data": `${email} and ${password} data will be replaced later` };
}

