// import fs from 'fs'
import path from 'path'
import axios from 'axios'
import {getSession} from 'next-auth/client'

// export const getRandomCoffee = async () => {
//   const response = await axios.get('https://random-data-api.com/api/coffee/random_coffee')
//   // console.log("RESPONSE.DATA: ", response.data);
//   return response.data
// }

export const getProfileInfo = async (context) => {
  const session = await getSession(context)

  if(session){
    const response = await axios.get(
      'https://dp-test2.auth.us-east-2.amazoncognito.com/oauth2/userInfo',
      {
        headers: {
          Authorization: "Bearer " + session.accessToken
        }
      }
    )
    console.log("TEST.JS  RESPONSE.DATA: " , response.data)
    return response.data
  }else{
    console.log("TEST.JS  IN ELSE");
    return null
  }
}