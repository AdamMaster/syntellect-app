import { FC } from 'react'
import s from './style.module.css'

interface Props {
	value: string
	setValue: (value: string) => void
	onClick?: () => void
	placeholder?: string
	className?: string
}

export const Input:FC<Props> = ({value, setValue, onClick, className, placeholder}) => {
	return (
		<input
			className={`${s.input} ${className ? className : ''}`}
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			onClick={onClick}
		/>
	)
}