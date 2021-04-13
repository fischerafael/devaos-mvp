import axios from 'axios'

const PRODUCTION = 'https://devaos-mvp.herokuapp.com'
const DEV = 'http://localhost:1337'

export const httpClient = axios.create({
    baseURL: 'https://devaos-mvp.herokuapp.com'
})
