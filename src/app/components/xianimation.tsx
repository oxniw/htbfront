import React from 'react'
import {TypeAnimation} from 'react-type-animation'
function Xianimation() {
  return (
    <TypeAnimation
    sequence={[
    'Submit',
    3000, // wait 1s before replacing "Mice" with "Hamsters"
    'ยืนยัน',
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