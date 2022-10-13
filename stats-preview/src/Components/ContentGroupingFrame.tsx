import './ContentGroupingFrame.scss'

type ContentGroupingFrameProps = {
	className:string
}

export const ContentGroupingFrame = ({className}: ContentGroupingFrameProps) => {
	return (
		<>
			<div className={className}>
				<p className='top-title'>Get <span className='note-emphasis'>insights</span> that help your business grow.</p>

				<p className='center-message'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>

				<div className='stats-info'>
					<section className='stat-item'>
						<p>10k</p>
						<span>companies</span>
					</section>

					<section className='stat-item'>
						<p>314</p>
						<span>templates</span>
					</section>

					<section className='stat-item last-item'>
						<p>12M+</p>
						<span>queries</span>
					</section>
				</div>
			</div>
		</>
	)
}