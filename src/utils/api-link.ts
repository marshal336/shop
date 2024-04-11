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
    async getBestData(url: string) {
        try {
            const { data } = await axios.get(`${this.BASE_URL}?${url}`)
            return data as CardDto[]
        } catch (error) {

        }
    }
}

export const getData = new Data