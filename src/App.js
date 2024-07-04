import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import FeaturesPage from './pages/FeaturesPage'
import PricingPage from './pages/PricingPage'
import ResourcesPage from './pages/ResourcesPage'
import CompanyPage from './pages/CompanyPage'

function App() {
	return (
		<React.Fragment>
			<Header />
			<main>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route path="/features" element={<FeaturesPage />} />
					<Route path="/pricing" element={<PricingPage />} />
					<Route path="/resources" element={<ResourcesPage />} />
					<Route path="/company" element={<CompanyPage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</React.Fragment>
	)
}

export default App
