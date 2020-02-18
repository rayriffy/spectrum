import React, { useState } from 'react'

import { Next } from '../../next/components'
import { Play } from '../../play/components'
import { Previous } from '../../previous/components'
import { Queue } from '../../queue/components'

export const Controller: React.FC = props => {
  const {} = props

  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  return (
    <div className='controller'>
      <div className='command-center'>
        <Previous />
        <Play
          isPlaying={isPlaying}
          onClick={() => {
            setIsPlaying(o => !o)
          }}
        />
        <Next />
      </div>
      <Queue />
    </div>
  )
}
