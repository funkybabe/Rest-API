import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CardDetails from './Pages/CardDetails/CardDetails';
import Header from './Components/Header/Header';
import useLocalStorage from 'use-local-storage';
import useFetch from 'react-fetch-hook';

function App() {
	const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [theme, setTheme] = useLocalStorage(
		'theme',
		defaultDark ? 'dark' : 'light'
	);
	const switchTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
	};

	return (
		<div data-theme={theme} className="App">
			<BrowserRouter>
				<Header switchTheme={switchTheme} />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/CardDetails" element={<CardDetails />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
