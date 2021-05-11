// import fs from 'fs'
import path from 'path'
import axios from 'axios'

export const getRandomCoffee = async () => {
  const response = await axios.get('https://random-data-api.com/api/coffee/random_coffee')
  // console.log("RESPONSE.DATA: ", response.data);
  return response.data
}