import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import FavouritesPage from './pages/FavouritesPage'
import HomePage from './pages/HomePage'

function App() {
	return (
		<div className='App font-bold'>
			<Navigation />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/fav' element={<FavouritesPage />} />
			</Routes>
		</div>
	)
}

export default App
