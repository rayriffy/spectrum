import React from 'react'

import { IPlayProps } from '../@types/IPlayProps'

export const Play: React.FC<IPlayProps> = props => {
  const { isPlaying, onClick } = props

  const buttonClickHandler = () => {
    if (onClick) onClick()
  }

  return (
    <div
      className={isPlaying ? 'command active' : 'command'}
      onClick={buttonClickHandler}>
      {isPlaying ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24'
          viewBox='0 0 24 24'
          width='24'>
          <path
            className='fill'
            d='M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24'
          viewBox='0 0 24 24'
          width='24'>
          <path
            className='fill'
            d='M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z'
          />
        </svg>
      )}
    </div>
  )
}
