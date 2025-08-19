import React from 'react'
import '../styles/Banner_coneeagri.scss'

import banner_coneeagri from '../assets/coneeagri2.webp'

export default function Banner_coneeagri() {
  return (
    <div className='Banner_coneeagri'>
        <h2>Inscrições abertas!</h2>
        <img src={banner_coneeagri} alt="" />
    </div>
  )
}
