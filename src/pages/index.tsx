import React from 'react'

import { NextPage } from 'next'

import '../styles/index.styl'

const IndexPage: NextPage = props => {
  return (
    <React.Fragment>
      <div className='container'>
        <h1 className='title'>Now Playing</h1>
        <div className='cover-flex'>
          <img src='https://halozy.com/wp-content/uploads/hlzy-0029_jacket.jpg' />
        </div>
        <div className='now-playing'>
          <h3>(In)Sane</h3>
          <div>みぃ - ブチアゲ♂トウホウ 2</div>
        </div>
        <div className='controller'>
          <div className='command-center'>
            <div className='command'>
              <div />
            </div>
            <div className='command'>
              <div />
            </div>
            <div className='command'>
              <div />
            </div>
          </div>
          <div className='queue'>
            <div className='next'>
              <b>Next:</b>AAA
            </div>
            <div className='horizontal-spacer' />
            <div className='playlist-button' />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default IndexPage
