import React from 'react'
import {TypeAnimation} from 'react-type-animation'
function Point() {
  return (
    <TypeAnimation
    sequence={[
    'กดเพื่อดูคะเเนน',
    3000, // wait 1s before replacing "Mice" with "Hamsters"
    'ดูของคนอื่นได้นะ',
    3000,
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: '1em', display: 'inline-block' }}
    repeat={Infinity}
    />
  )
}

export default Point