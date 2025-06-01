import React from 'react'
import {TypeAnimation} from 'react-type-animation'
function Xianimation() {
  return (
    <TypeAnimation
    sequence={[
    'percentile',
    3000, // wait 1s before replacing "Mice" with "Hamsters"
    'คะเเนน',
    3000,
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: '2em', display: 'inline-block' }}
    repeat={Infinity}
    />
  )
}

export default Xianimation