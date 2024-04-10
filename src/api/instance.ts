import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.SERVER_BASE_URL,
    withCredentials: true
})

