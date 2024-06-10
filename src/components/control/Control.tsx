import React, { useState, useRef, FC } from 'react'
import s from './style.module.css'
import { Input } from '../input/Input'

export interface ButtonProps {
  text: string
  callback: () => void
}

interface Props {
  value: string
  setValue: (value: string) => void
  leftButtons: ButtonProps[] | []
  rightButtons: ButtonProps[] | []
}

export const Control: FC<Props> = ({ value, setValue, leftButtons, rightButtons }) => {

  return (
    <div className={s.wrapper}>
      {leftButtons.map((button, index) => (
        <button className={s.button} key={index} onClick={button.callback}>
          {button.text}
        </button>
      ))}
     <Input value={value} setValue={setValue} />
      {rightButtons.map((button, index) => (
        <button className={s.button} key={index} onClick={button.callback}>
          {button.text}
        </button>
      ))}
    </div>
  )
}