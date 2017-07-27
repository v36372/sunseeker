import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import {lightGreenA700, red700,grey600, grey50, transparent} from 'material-ui/styles/colors'
import Divider from 'material-ui/Divider'
import {List, ListItem} from 'material-ui/List'
import Moment from 'react-moment'

const groupStyle = {
	marginBottom: 12,
	borderBottom: 'solid 1px black'
};

class ResultList extends Component {

	static propTypes = {
		f10kHistory: PropTypes.array,
		teamName: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		getData: PropTypes.func.isRequired
	}

	matchScore = (match) => {
		if(typeof match.scorea !== 'undefined' && match.scoreb !== 'undefined')
			return `${match.scorea} - ${match.scoreb}`;
		else {
			return 'No Info';
		}
	};

	render () {
		const { resultList } = this.props || [];
		const { teamName, title, getData } = this.props;

		return (
			<Card
				style={{
				marginTop: '10px',
				margin: '0 auto',
				}}
			>
				<CardHeader
					actAsExpander
					title={title}
					onClick={getData || null}
					style={{ backgroundColor: grey600 }}
					titleColor={grey50}
					showExpandableButton={true}
				/>
				<CardText expandable={true}>
					<List>
						{
						resultList ?
						resultList.map(groupMatch =>
						<div className="groupMatch" key={groupMatch.series_id} style={groupStyle}>
							{
							groupMatch ?
							groupMatch.matches.map(match =>
							<div key={match.id} >
								<ListItem
									primaryText={match.matchname}
									leftAvatar={
									match.winner
									?
									<Avatar
										color={
										match.winner.toLowerCase() === teamName
										? lightGreenA700 : red700
										}
										backgroundColor={transparent}
										style={{left: 8}}
									>
										{
										match.winner.toLowerCase() === teamName
										? "W" : "L"
										}
									</Avatar>
									: <Avatar/>
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

export default ResultList
