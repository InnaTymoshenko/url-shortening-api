import React from 'react'
import hero from '../../images/illustration-working.svg'
import Button from '../Button/Button'
import styles from './Hero.module.css'

const Hero = () => {
	return (
		<section>
			<div className={styles.container}>
				<div className={styles.info}>
					<h1> More than just shorter links</h1>
					<p> Build your brand’s recognition and get detailed insights on how your links are performing.</p>
					<Button text={'Get Started'} />
				</div>
				<div className={styles.hero}>
					<img src={hero} alt={hero} />
				</div>
			</div>
		</section>
	)
}

export default Hero
