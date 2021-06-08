import React from 'react'
import {Hero} from "../components/index"
import {Plans} from '../components/index'
import {MyContainer, MyContentContainer, MyContentTitle} from '../components/UIkit/index'

const SamplePage3 = () => {
// for test
  return (
    <MyContainer>
      <Hero />
      <MyContentContainer>
        <MyContentTitle title={"INTRO TO COMPUTER SCIENCE (DPCS 100)"} />
        <Plans />
      </MyContentContainer>
    </MyContainer>
  )
}

export default SamplePage3
