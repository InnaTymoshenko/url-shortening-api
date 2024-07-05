import React from 'react'
import BootomPage from '../components/BottomPage/BootomPage'
import Features from '../components/Features/Features'
import Hero from '../components/Hero/Hero'
import Form from '../components/Form/Form'
import Shortens from '../components/Shortens/Shortens'

const HomePage = () => {
	return (
		<>
			<Hero />
			<Form />
			<Shortens />
			<Features />
			<BootomPage />
		</>
	)
}

export default HomePage
