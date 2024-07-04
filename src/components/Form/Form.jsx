import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Button from '../Button/Button'
import { createShortLink } from '../../store/slice/linkSlice'
import shorten from '../../images/bg-shorten-desktop.svg'
import styles from './Form.module.css'

const Form = () => {
	const dispath = useDispatch()

	const {
		register,
		formState: { errors },
		handleSubmit
		// reset
	} = useForm({
		mode: 'onSubmit'
	})

	const onSubmit = ({ Url }) => {
		// dispath(createShortLink(Url))

		const response = fetch(`https://tinyurl.com/api-create.php?url=-${encodeURIComponent(Url)}`)
		if (response.ok) {
			const data = response.text()
			console.log(data)
		} else {
			console.log(response)
		}

		// fetch('https://cleanuri.com/api/v1/shorten', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/x-www-form-urlencoded'
		// 	},
		// 	body: new URLSearchParams({
		// 		url: 'https://google.com/'
		// 	})
		// })
		// 	.then(response => {
		// 		if (!response.ok) {
		// 			throw new Error('Network response was not ok ' + response.statusText)
		// 		}
		// 		return response.json()
		// 	})
		// 	.then(data => console.log(data))
		// 	.catch(error => console.error('Error:', error))
	}

	return (
		<section className={styles.sectionForm}>
			<div style={{ backgroundImage: `url(${shorten})` }} className={styles.container}>
				<form className={styles.form} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
					<input
						type="url"
						placeholder="Shorten a link here..."
						className={styles.input}
						style={{ border: errors.Url ? '1px solid red' : '1px solid transparent' }}
						{...register('Url', {
							required: 'Please add a link',
							pattern: {
								value:
									/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
								message: 'Please enter a valid url'
							}
						})}
					/>
					<Button type="submit" className={styles.formBtn} text={'Shorten it!'} />
				</form>
				{errors.Url && <span className={styles.error}>{errors.Url.message}</span>}
			</div>
		</section>
	)
}

export default Form
