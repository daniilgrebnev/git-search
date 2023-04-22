import { IRepo } from '../models/models'

const RepoCard = ({ repo }: { repo: IRepo }) => {
	return (
		<div className='border select-none py-3 px-5 rounded mb-2 hover:shadow-2xl hover:bg-slate-400 transition-all cursor-pointer	'>
			<a href={repo.html_url} target='_blank'>
				<h2 className='text-lg font-bold'>{repo.full_name}</h2>
				<p className='text-sm'>
					Forks:
					<span className='font-bold'> {repo.forks}</span>
				</p>
				<p className='text-sm'>
					Watchers:
					<span className='font-bold'> {repo.watchers}</span>
				</p>
				<p className='text-sm font-thin'> {repo?.description}</p>
			</a>
		</div>
	)
}

export default RepoCard
