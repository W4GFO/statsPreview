import './ContentGroupingFrame.scss'

type ContentGroupingFrameProps = {
	className:string
}

export const ContentGroupingFrame = ({className}: ContentGroupingFrameProps) => {
	return (
		<>
			<div className={className}>
				<p>Get <span className='note-emphasis'>insights</span> that help your business grow.</p>

				<p className='center-message'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>

				<ul className='pointitems'>
					<li className='datapoint'>
						<p>10k</p>
						<span>companies</span>
					</li> 
					<li className='datapoint'>
						<p>314</p>
						<span>templates</span>
					</li>
					<li>
						<p>12M+</p>
						<span>queries</span>
					</li> 
				</ul>
			</div>
		</>
	)
}