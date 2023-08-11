import React, { FC } from 'react'
import './Input.scss'

interface Props {
  label?: string
  placeholder?: string
  type?: string
  minLength?: number
  required?: boolean
  customClass?: string
  value: string
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<Props> = ({ label, value, ...args }) => {
  return (
    <label className='label'>
      {label}
      <input value={value} {...args} className='input' />
    </label>
  )
}
