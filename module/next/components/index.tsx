import React from 'react'

import { FaForward } from 'react-icons/fa'

import { INextProps } from '../@types/INextProps'

export const Next: React.FC<INextProps> = props => {
  const { onClick } = props

  const buttonClickHandler = () => {
    if (onClick) onClick()
  }

  return (
    <div className='command' onClick={buttonClickHandler}>
      <FaForward />
    </div>
  )
}
