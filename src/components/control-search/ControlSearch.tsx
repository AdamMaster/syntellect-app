import { FC, useEffect, useRef, useState } from 'react'
import s from './style.module.css'
import { CountryInfo, getCountryByName } from '../../api/apiService'
import { Input } from '../input/Input'

interface Props {
	itemsLength: number
}

export const ControlSearch: FC<Props> = ({itemsLength}) => {
	const [value, setValue] = useState('')
	const [listItems, setListItems] = useState<CountryInfo[]>([])
	const [isOpen, setIsOpen] = useState(false)
	const wrapper = useRef(null)

	const handleChangeInput = async (value: string) => {
		setValue(value)
		const results = await getCountryByName(value)

		setListItems(results.slice(0, itemsLength))
	}

	const handleClickInput = () => {
		if(listItems.length > 0) {
			setIsOpen(!isOpen)
		}
	}

	const handleClickListItem = (value: string) => {
		setValue(value)
		setIsOpen(false)
	}

	useEffect(() => {
		if(listItems.length > 0) {
			setIsOpen(true)
		} else {
			setIsOpen(false)
		}
		console.log(listItems.length)
	}, [listItems])

	useEffect(() => {
		const onClick = (e: Event) => {
			if(wrapper.current) {
				if(!e.composedPath().includes(wrapper.current)) {
					setIsOpen(false)
				}
			}
		}

		document.addEventListener('click', (e) => {
			onClick(e)
		})

		return document.removeEventListener('click', onClick)
	}, [])

	return (
		<div className={s.wrapper} ref={wrapper}>
			<Input className={s.input} placeholder='Введите навзание страны' value={value} setValue={handleChangeInput} onClick={() => handleClickInput()} />
			<div className={`${s.list} ${isOpen ? s.active : ''}`}>
				{listItems.map((item, index) => (
					<div 
						className={s.listItem} 
						key={index} 
						onClick={() => handleClickListItem(`${item.name}`)}>
							{item.name} {item.fullName} <img src={item.flag} alt="flag" />
					</div>
					))
				}
			</div>
		
		</div>
	)
}