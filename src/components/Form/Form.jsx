import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button/Button'
import { createShortLink, selectLoading, addLink } from '../../store/slice/linkSlice'
import shorten from '../../images/bg-shorten-desktop.svg'
import styles from './Form.module.css'

const Form = () => {
	const loading = useSelector(selectLoading)
	const dispath = useDispatch()

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm({
		mode: 'onSubmit'
	})

	const onSubmit = ({ Url }) => {
		dispath(createShortLink(Url))
		dispath(addLink(Url))
		reset()
		// try {
		// 	fetch(`${API_BASE_URL}?apikey=${API_KEY_URL}&url=${Url}=shrlc`)
		// 		.then(response => response.json())
		// 		.then(data => setLink(data))
		// 	// return response.json()
		// } catch (error) {
		// 	console.log(error)
		// }
		// // dispath(addLink(createShortenLink(createShortLink(Url), Url)))
		// reset()
		// dispath(addLink(createShortenLink(link, Url)))
	}

	return (
		<section className={styles.sectionForm}>
			<div style={{ backgroundImage: `url(${shorten})` }} className={styles.container}>
				<form className={styles.form} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
					<input
						type="url"
						placeholder="Shorten a link here..."
						className={styles.input}
						style={{ outlineColor: errors.Url ? 'red' : 'currentColor', outlineWidth: errors.Url ? '4px' : '1px' }}
						{...register('Url', {
							required: 'Please add a link',
							pattern: {
								value:
									/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
								message: 'Please enter a valid url'
							}
						})}
						disabled={loading === 'loading'}
					/>
					<Button type="submit" className={styles.formBtn} text={'Shorten it!'} disabled={loading === 'loading'} />
				</form>
				{errors.Url && <span className={styles.error}>{errors.Url.message}</span>}
			</div>
		</section>
	)
}

export default Form
