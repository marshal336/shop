import axios from "axios"
import { CardDto } from "~/types/card"


class Data {
    BASE_URL = 'https://216310856cf4b6ef.mokky.dev/sales'

    async getData(url: string) {
        try {
            const { data } = await axios.get(`${this.BASE_URL}?${url}`)
            return data.items as CardDto[]

        } catch (error) {

        }
    }

    async getDataById(id:number){
        try {
            const {data} = await axios.get(`${this.BASE_URL}/${id}`)
            return data
        } catch (error) {
            console.log(error)
        }
    }
    async getBestData(url: string) {
        try {
            const { data } = await axios.get(`${this.BASE_URL}?${url}`)
            return data as CardDto[]
        } catch (error) {

        }
    }
    async getAllData(url: string) {
        try {
            const { data } = await axios.get(`${this.BASE_URL}?${url}`)
            return url && url.includes('limit') ? data.items as CardDto[] : data as CardDto[]
        } catch (error) {

        }
    }
}

export const getData = new Data