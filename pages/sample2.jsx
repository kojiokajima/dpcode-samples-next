import React from 'react'
import {Hero, Header} from '../components/index'
import {Cards} from '../components/index'
import {MyContainer, MyContentContainer, MyContentTitle} from '../components/UIkit/index'

const SamplePage2 = () => {

  return (
    <MyContainer>
      <Hero />
      <MyContentContainer>
        <MyContentTitle title={"Courses"} />
        <Cards />
    </MyContentContainer>
    </MyContainer>
  )
}

export default SamplePage2
