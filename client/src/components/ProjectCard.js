import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
	let classColor = 'danger'
	if (project.status === 'Not Started') {
		classColor = 'danger'
	} else if (project.status === 'In Progress') {
		classColor = 'primary'
	} else if (project.status === 'Completed') {
		classColor = 'success'
	}
	return (
		<div className='col-md-6'>
			<div className='card mb-3'>
				<div className='card-body'>
					<div className='d-flex justify-content-between align-items-center'>
						<h5 className='card-title'>{project.name}</h5>
						<Link
							className='btn btn-secondary'
							to={`/projects/${project.id}`}
						>
							View
						</Link>
					</div>
					<p>{project.description.replace(/(.{100})..+/, '$1…')}</p>

					<p className='small'>
						Status:{' '}
						<span className={`alert alert-${classColor}`}>
							{project.status}
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}
