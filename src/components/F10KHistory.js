import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import {lightGreenA700, red700,grey600, grey50, transparent} from 'material-ui/styles/colors'
import Divider from 'material-ui/Divider'
import {List, ListItem} from 'material-ui/List'
import Moment from 'react-moment'

class F10KHistory extends Component {

	static propTypes = {
		f10kHistory: PropTypes.array,
		teamName: PropTypes.string.isRequired,
	}

	matchScore = (match) => {
		if(typeof match.scorea !== 'undefined' && match.scoreb !== 'undefined')
			return `${match.scorea} - ${match.scoreb}`;
		else {
			return 'No Info';
		}
	};

	winOrLose = (match, teamName) => {
		if (match.scorea > match.scoreb) {
			return match.teama.toLowerCase() === teamName || match.teama_short.toLowerCase() === teamName
		}
		return match.teamb.toLowerCase() === teamName || match.teamb_short.toLowerCase() === teamName
	}

	render () {
		const { f10kHistory, teamName  } = this.props;

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
								primaryText={match.matchname}
								leftAvatar={
								<Avatar color={ this.winOrLose(match, teamName) ? lightGreenA700:red700}
									backgroundColor={transparent}
									style={{left: 8}}>
									{ this.winOrLose(match, teamName) ? "W":"L"}
								</Avatar>
								}
								rightAvatar={
								<p>
									{this.matchScore(match)}
								</p>
								}
								secondaryText={
								<div>
									<Moment fromNow>
										{match.time}
									</Moment>
								</div>
								}
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
