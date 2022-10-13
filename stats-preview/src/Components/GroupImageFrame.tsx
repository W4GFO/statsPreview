import './GroupImageFrame.scss'

import mobileImage from '../Images/imagemobile.jpg'
import desktopImage from '../Images/imagedesktop.jpg'

type GroupImageFrameProps = {
	className:string
}

export const GroupImageFrame = ({className}: GroupImageFrameProps) => {
	return (
		<>
			<div className={className}>
				<div className='relativewrap'>

					<picture>
						<source srcSet={desktopImage} media="(min-width:701px)"/>
						<img src={mobileImage} alt='Smiling Office Workers' />
					</picture>

					<div className='color-overlay'></div>

				</div>
			</div>
		</>
	)
}