import React from 'react'
import { Link } from 'react-router-dom'
import { Icons } from '../icons/Icons'
import Logo from '../Logo/Logo'

import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<Link to={'/'} className={styles.logo}>
					<Logo />
				</Link>
				<nav className={styles.nav}>
					<div className={styles.navItem}>
						<h4>Features</h4>
						<ul>
							<li>
								<Link to={'/features'}>Link Shortening</Link>
							</li>
							<li>
								<Link to={'/features'}>Branded Links</Link>
							</li>
							<li>
								<Link to={'/features'}>Analytics</Link>
							</li>
						</ul>
					</div>
					<div className={styles.navItem}>
						<h4>Resources</h4>
						<ul>
							<li>
								<Link to={'/resorces'}>Blog</Link>
							</li>
							<li>
								<Link to={'/resorces'}>Developers</Link>
							</li>
							<li>
								<Link to={'/resorces'}>Support</Link>
							</li>
						</ul>
					</div>
					<div className={styles.navItem}>
						<h4>Company</h4>
						<ul>
							<li>
								<Link to={'/company'}>About</Link>
							</li>
							<li>
								<Link to={'/company'}> Our Team</Link>
							</li>
							<li>
								<Link to={'/company'}>Careers</Link>
							</li>
							<li>
								<Link to={'/company'}>Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
				<div className={styles.icons}>
					<Icons.Facebook className={styles.icon} />
					<Icons.Twitter className={styles.icon} />
					<Icons.Pinterest className={styles.icon} />
					<Icons.Instagram className={styles.icon} />
				</div>
			</div>
		</footer>
	)
}

export default Footer
