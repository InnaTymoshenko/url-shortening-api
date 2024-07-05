import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { selectItems, createShorten, selectUrl, selectShorten } from '../../store/slice/linkSlice'
import Button from '../Button/Button'

import styles from './Shortens.module.css'
import { createShortenLink } from '../../utils/createShortenLinl'

const Shortens = () => {
	const [copiedLink, setCopiedLink] = useState(null)
	const url = useSelector(selectUrl)
	const shorten = useSelector(selectShorten)
	const items = useSelector(selectItems)
	const dispatch = useDispatch()

	useEffect(() => {
		if (url && shorten) {
			dispatch(createShorten(createShortenLink(shorten, url)))
		}
	}, [dispatch, shorten, url])

	const copyToClipboard = link => {
		navigator.clipboard.writeText(link).then(() => {
			setCopiedLink(link)
		})
	}

	if (!items?.length) return null

	return (
		<section className={styles.shorten}>
			<div className={styles.container}>
				<div className={styles.items}>
					{items.map((item, index) => (
						<AnimatePresence key={item.id}>
							<motion.div
								className={styles.link}
								data-active={copiedLink === item.shorten}
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: 'auto' }}
							>
								<div className={styles.linkBlock}>
									<span>{item.original}</span>
									<span>{item.shorten}</span>
								</div>
								<Button
									className={styles.shortenBtn}
									text={copiedLink === item.shorten ? 'Copied!' : 'Copy'}
									onClick={() => copyToClipboard(item.shorten)}
								/>
							</motion.div>
						</AnimatePresence>
					))}
				</div>
			</div>
		</section>
	)
}

export default Shortens
