import React, { useState } from 'react'

import { NextPage } from 'next'

import '../styles/index.styl'

import { Controller } from '../../module/controller/components'
import { Display } from '../../module/display/components'

const IndexPage: NextPage = props => {
  return (
    <div className='container'>
      <div className='flex'>
        <h1 className='title'>Now Playing</h1>
        <Display />
        <Controller />
      </div>
    </div>
  )
}

export default IndexPage
