import React from 'react'

import { FaStream } from 'react-icons/fa'

export const Queue: React.FC = props => {
  const {} = props

  return (
    <div className='queue'>
      <div className='next'>
        <b>Next:</b>She Saw The Future
      </div>
      <div className='horizontal-spacer' />
      <div className='playlist-button'>
        <FaStream />
      </div>
    </div>
  )
}
