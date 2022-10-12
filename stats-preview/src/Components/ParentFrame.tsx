import './ParentFrame.scss'
import {GroupImageFrame} from './GroupImageFrame'
import {ContentGroupingFrame} from './ContentGroupingFrame'

type ParentFrameProps = {}

export const ParentFrame = (props: ParentFrameProps) => {
	return (
		<>
			<div className='parentframe'>
				<GroupImageFrame className='imgframe'/>
				<ContentGroupingFrame className='contentframe'/>
			</div>
		</>
	)
}