import './ParentFrame.scss'
import {GroupImageFrame} from './GroupImageFrame'
import {ContentGroupingFrame} from './ContentGroupingFrame'

type ParentFrameProps = {}

export const ParentFrame = (props: ParentFrameProps) => {

	// let colorBG = getComputedStyle(document.getElementsByClassName.).getPropertyValue('min-height')
	// console.log(colorBG)

	return (
		<>
			<div className='parentframe'>
				<GroupImageFrame className='imgframe'/>
				<ContentGroupingFrame className='contentframe'/>
			</div>
		</>
	)
}