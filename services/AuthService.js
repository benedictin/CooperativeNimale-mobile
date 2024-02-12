import BaseService from "./BaseService";

export const apiSignIn = async (data) => {
    const url = "/login"
    return await BaseService.post(url, data)
}