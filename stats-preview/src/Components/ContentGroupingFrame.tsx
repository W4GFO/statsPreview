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
					<li className='numdesc'>10k+</li> 
					<li className='subdesc'>companies</li>
					<li className='numdesc'>314</li> 
					<li className='subdesc'>templates</li>
					<li className='numdesc'>12m+</li> 
					<li>queries</li>
				</ul>
			</div>
		</>
	)
}