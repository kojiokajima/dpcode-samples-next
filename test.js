// ----------PROPS----------
const google = {
  sub: '0be75875-aa2f-4695-884b-e858e44acfdd',
  email_verified: 'false',
  username: 'google_101670120447530563356',

  phone_number_verified: 'false',
  given_name: 'Koji',
  family_name: 'Okajima',
  email: 'okka01240110@gmail.com',
}
const google2 = {
  sub: '3e2dc8ca-1b27-4baa-9abe-8763b82aa527',
  email_verified: 'false',
  username: 'google_101670120447530563356',

  name: 'Koji Okajima',
  phone_number_verified: 'false',
  given_name: 'Koji',
  family_name: 'Okajima',
  email: 'okka01240110@gmail.com',
  picture: 'https://lh3.googleusercontent.com/a-/AOh14GjF4q547892lWJdyJMH8aOQyDTpn36leacu4xmV=s96-c',
}

const facebook = {
  sub: '6d13de0a-2c13-4759-8f14-c7cf074bee1d',
  email_verified: 'false',
  username: 'facebook_5492757347462813',

  given_name: 'Koji',
  family_name: 'Okajima',
  email: 'okka01240110@gmail.com',
}

const line = {
  sub: 'ceaaae17-b75e-4939-a99f-8a7fd99b5ddf',
  email_verified: 'false',
  username: 'line_u751e27524d2bd90373d97d7ad5a0b425',

  gender: 'https://access.line.me',
  name: '岡島康二',
  locale: 'https://profile.line-scdn.net/0hhbPBJ3rvN01tOxsoCk9IGlF-OSAaFTEFFVlxK0xsanUTXCIaUFgsLE5pbX5BXHRIVgkrex04bH8U',
}



// ----------PROPS----------
const session = {
  user: {
    name: 'google_101670120447530563356',
    email: 'okka01240110@gmail.com',
    image: null
  },
  expires: '2021-06-19T22:03:14.638Z',
  accessToken: 'ACCESSTOKEN',
  idToken: 'IDTOKEN'
}


// ---------------REQ - RES---------------
// 'https://dp-test.auth.us-east-2.amazoncognito.com/oauth2/userInfo'
// {
//   headers: {
//     Authorization: "Bearer " + session.accessToken
//   }
// }

// id --> Username
// birthday --> Birthdate
// email --> Email
// first_name --> Given Name
// last_name --> Family Name
const facebook2 = {
  sub: '43293591-92c6-420f-b88e-90c6a7b5a2dc',
  email_verified: 'false',
  given_name: 'Koji',
  family_name: 'Okajima',
  email: 'okka01240110@gmail.com',
  username: 'facebook_5460859367319278'
}

// birthdays --> Birthdate
// phoneNumber --> Phone Number
// email --> Email
// diven_name --> Givem Name
// family_name --> Family Name
// sub --> Username
const google3 = {
  sub: '0be75875-aa2f-4695-884b-e858e44acfdd',
  email_verified: 'false',
  phone_number_verified: 'false',
  given_name: 'Koji',
  family_name: 'Okajima',
  email: 'okka01240110@gmail.com',
  username: 'google_101670120447530563356'
}


const line2 = {
  sub: 'ceaaae17-b75e-4939-a99f-8a7fd99b5ddf',
  email_verified: 'false',
  username: 'line_u751e27524d2bd90373d97d7ad5a0b425'
}


const str = [1, 2, 3]
const func = (num) => {
  // for (i = 0; i < str.length; i++) {
  //   str[i] = str[i]+3
  // }
  const str2 = str.map(val => val+3)
  console.log(str2);
}

func(str)

console.log(str)