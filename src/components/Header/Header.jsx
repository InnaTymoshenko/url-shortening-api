import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoReorderThree, IoClose } from 'react-icons/io5'
import Button from '../Button/Button'
// import logo from '../../images/logo.svg'

import styles from './header.module.css'
import Logo from '../Logo/Logo'

const Header = () => {
	const [mobile, setMobile] = useState(false)

	return (
		<header className="">
			<div className={styles.container}>
				<div className={styles.logo}>
					<NavLink to={'/'} className={styles.linkLogo}>
						<Logo />
						{/* <img src={logo} alt={logo} /> */}
					</NavLink>
				</div>
				<nav className={mobile ? [styles.headerNav, styles.activeNav].join(' ') : [styles.headerNav]}>
					<ul className={styles.nav}>
						{/* <li className={styles.navItem}></li> */}
						<li className={styles.navItem}>
							<NavLink to={'/features'} className={({ isActive }) => (isActive ? styles.active : styles.link)}>
								Features
							</NavLink>
						</li>
						<li className={styles.navItem}>
							<NavLink to={'/pricing'} className={({ isActive }) => (isActive ? styles.active : styles.link)}>
								Pricing
							</NavLink>
						</li>
						<li className={styles.navItem}>
							<NavLink to={'/resoueces'} className={({ isActive }) => (isActive ? styles.active : styles.link)}>
								Resources
							</NavLink>
						</li>
					</ul>
					<div className={styles.navBtn}>
						<button className={styles.login}>Login</button>
						<Button text={'Sign Up'} />
					</div>
				</nav>

				<div className={styles.mobile} onClick={() => setMobile(!mobile)}>
					{mobile ? <IoClose size={'50px'} /> : <IoReorderThree size={'50px'} />}
				</div>
			</div>
		</header>
	)
}

export default Header
