import React from 'react'
import brand from '../../images/icon-brand-recognition.svg'
import detailed from '../../images/icon-detailed-records.svg'
import fully from '../../images/icon-fully-customizable.svg'
import styles from './Card.module.css'

const Card = () => {
	return (
		<div className={styles.cardBox}>
			<div className={[styles.card, styles.brand].join(' ')}>
				<div className={styles.image}>
					<img src={brand} alt={brand} />
				</div>
				<h4>Brand Recognition</h4>
				<p>
					Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil
					confidence in your content.
				</p>
			</div>
			<div className={styles.line}></div>
			<div className={[styles.card, styles.detailed].join(' ')}>
				<div className={styles.image}>
					<img src={detailed} alt={detailed} />
				</div>

				<h4>Detailed Records</h4>
				<p>
					Gain insights into who is clicking your links. Knowing when and where people engage with your content helps
					inform better decisions.
				</p>
			</div>
			<div className={[styles.card, styles.fully].join(' ')}>
				<div className={styles.image}>
					<img src={fully} alt={fully} />
				</div>

				<h4>Fully Customizable</h4>
				<p>
					Improve brand awareness and content discoverability through customizable links, supercharging audience
					engagement.
				</p>
			</div>
		</div>
	)
}

export default Card
