import React from 'react'

import { FaBackward } from 'react-icons/fa'

import { IPreviousProps } from '../@types/IPreviousProps'

export const Previous: React.FC<IPreviousProps> = props => {
  const { onClick } = props

  const buttonClickHandler = () => {
    if (onClick) onClick()
  }

  return (
    <div className='command' onClick={buttonClickHandler}>
      <FaBackward />
    </div>
  )
}
