import React from 'react'

import { FaPause, FaPlay } from 'react-icons/fa'

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
      {isPlaying ? <FaPause /> : <FaPlay />}
    </div>
  )
}
