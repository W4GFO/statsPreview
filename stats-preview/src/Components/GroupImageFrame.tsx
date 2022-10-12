
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
				<img src={mobileImage} alt='people' />

				{/* <picture>
					<source srcSet={desktopImage} media="(min-width:701px)"/>
					<img src={mobileImage} alt="product advertisement" />
				</picture> */}
				<div className='color-overlay'></div>
				</div>
			</div>
		</>
	)
}