import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import {lightGreenA700, red700,grey600, grey50, transparent} from 'material-ui/styles/colors'
import Divider from 'material-ui/Divider'
import {List, ListItem} from 'material-ui/List'
import Moment from 'react-moment'

class F10KHistory extends Component {

	render () {
		const { f10kHistory } = this.props 

		return (
			<Card style={{ 'marginTop': '10px'}}>
				<CardHeader title="F10K history" actAsExpander style={{ backgroundColor: grey600 }} titleColor={grey50} showExpandableButton={true}/>
				<CardText expandable={true}>
				<List>
				{
					f10kHistory ?
					f10kHistory.map(match =>
							<div key={f10kHistory.indexOf(match)} >
								<ListItem
									primaryText={match.name}
									leftAvatar={
										<Avatar color={ match.winner.toLowerCase() !== match.name.toLowerCase() ? lightGreenA700:red700}
										backgroundColor={transparent}
										style={{left: 8}}>
												{match.winner.toLowerCase() !== match.name.toLowerCase()? "W":"L"}
										</Avatar>
									}
									rightAvatar={
										<p>
											{match.kill + " - " + match.death}
										</p>
									}
									secondaryText={
										<p>
											<Moment fromNow ago>
												{match.time}
											</Moment> 
											ago
										</p>}
								/>

								<Divider inset={true} />
							</div>
					) 
					: ''
				}
				</List>
				</CardText>
			</Card>
		)
	}
}

export default F10KHistory
