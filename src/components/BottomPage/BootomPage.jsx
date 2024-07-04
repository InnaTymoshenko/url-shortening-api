import React from 'react'
import Button from '../Button/Button'
import styles from './Bottom.module.css'
import boost from '../../images/bg-boost-desktop.svg'

const BootomPage = () => {
	return (
		<section>
			<div className={styles.bottom} style={{ backgroundImage: `url(${boost})` }}>
				<h3 className={styles.title}>Boost your links today</h3>
				<Button text={'Get Started'} />
			</div>
		</section>
	)
}

export default BootomPage
