import React from 'react'
import styles from './Buttom.module.css'

const Button = ({ text, className, ...props }) => {
	return (
		<button {...props} className={className ? className : styles.btn}>
			{text}
		</button>
	)
}

export default Button
