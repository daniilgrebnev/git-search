import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-slate-900 text-white'>
			<h3 className='font-bold'>Github Search</h3>
			<span>
				<Link className='mr-2' to='/'>
					Home
				</Link>
				<Link to='/fav'>Favorites</Link>
			</span>
		</nav>
	)
}

export default Navigation
