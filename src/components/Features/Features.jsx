import React from 'react'
import Card from '../Card/Card'
import styles from './Features.module.css'

const Features = () => {
	return (
		<section className={styles.features}>
			<div className={styles.container}>
				<div className={styles.title}>
					<h3>Advanced Statistics</h3>
					<p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
				</div>
				<Card />
			</div>
		</section>
	)
}

export default Features
