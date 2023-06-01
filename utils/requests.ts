import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
})

export const getData = async (url: string) => {
  const res = await instance.get(url)
  return res.data
}
