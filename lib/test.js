// import fs from 'fs'
import path from 'path'
import axios from 'axios'
import {getSession} from 'next-auth/client'

export const getRandomCoffee = async () => {
  const response = await axios.get('https://random-data-api.com/api/coffee/random_coffee')
  // console.log("RESPONSE.DATA: ", response.data);
  return response.data
}

export const getProfileInfo = async (context) => {
  // const [session, loading] = useSession()
  const session = await getSession(context)
  // console.log("WHAT IS COTEXT: ", context)
  // console.log("TEST.JS  SESSION: ", session);

  if(session){
    console.log("TEST.JS  IN IF");
    const response = await axios.get(
      'https://dp-test.auth.us-east-2.amazoncognito.com/oauth2/userInfo',
      {
        headers: {
          Authorization: "Bearer " + session.accessToken
        }
      }
    )
    console.log("TEST.JS  YOYOYO: " , response.data)
    return response.data
  }else{
    console.log("TEST.JS  IN ELSE");
    return null
  }
}