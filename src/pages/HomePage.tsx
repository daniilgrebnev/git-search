import { useEffect, useState } from 'react'
import { useDebounce } from '../components/hooks/debounce'
import RepoCard from '../components/RepoCard'
import {
	useLazyGetUserReposQuery,
	useSearchUsersQuery,
} from '../store/github/github.api'

const HomePage = () => {
	const [search, setSearch] = useState('')
	const [dropdown, setDropdown] = useState(false)
	const debounced = useDebounce(search)
	const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
		skip: debounced.length < 3,
		refetchOnFocus: true,
	})

	const [fetchRepos, { isLoading: areReposLoading, data: repos }] =
		useLazyGetUserReposQuery()

	useEffect(() => {
		setDropdown(debounced.length > 2 && data?.length! > 0)
	}, [debounced, data])
	const clickHandler = (username: string) => {
		fetchRepos(username)
		setDropdown(false)
	}
	return (
		<div className='flex justify-center pt-10 mx-auto  w-screen'>
			{isError && (
				<p className='text-center text-white absolute top-14 left-5 bg-red-600 rounded py-2 px-4 text-2xl z-40'>
					Something went wrong...
				</p>
			)}
			<div className='relative w-[560px]'>
				<input
					type='text'
					className='border-2 py-2 px-4 w-full h-[50px] mb-2 rounded'
					placeholder='Search for GitHub username...'
					value={search}
					onChange={event => setSearch(event.target.value)}
				/>
				{dropdown && (
					<ul className='list-none mt-4 absolute top-[50px] rounded left-0 bg-slate-200 select-none overflow-y-auto right-0 max-h-[200px] shadow-xl'>
						{isLoading && <p className='text-center'>Loading...</p>}
						{data?.map(user => (
							<li
								onClick={() => clickHandler(user.login)}
								key={user.id}
								className='py-2 px-4 hover:bg-slate-900 hover:text-white transition-colors cursor-pointer'
							>
								{user.login}
							</li>
						))}
					</ul>
				)}
				<div className='container'>
					{areReposLoading && <p className='text-center'>Loading</p>}
					{repos?.map(repo => (
						<RepoCard repo={repo} key={repo.id} />
					))}
				</div>
			</div>
		</div>
	)
}

export default HomePage
