import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
	return (
		<ThemeProvider>
			<Router>
				<ScrollToTop />
				<div className='min-h-screen'>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contacts" element={<Contacts />} />
					</Routes>
					<Footer />
					<ScrollToTopButton />
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;