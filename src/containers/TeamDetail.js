import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchTeam, fetchHistory, fetchTeamInfo } from '../actions'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import {grey600, grey50} from 'material-ui/styles/colors'
import F10KHistory from '../components/F10KHistory'
import TeamTwitter from '../components/TeamTwitter'
import ResultList from '../components/ResultList'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import slugify from '../helper/slugify'

class TeamDetail extends Component {

	static propTypes = {
		location: PropTypes.object.isRequired,
		teamDetail: PropTypes.object,
		teamHistory: PropTypes.object,
		teamInfo: PropTypes.object,
		params: PropTypes.object.isRequired,
		dispatch: PropTypes.func,
	}

	componentDidMount () {
		if (this.props.location.query.game === 'dota') {
			this.props.dispatch(fetchTeam(this.props.params.name));
		}
		this.props.dispatch(fetchTeamInfo(slugify(this.props.params.name), this.props.location.query.game));
	}

	getRecentMatches = () => {
		this.props.dispatch(fetchHistory(this.props.params.name))
	};

	render () {
		const { teamDetail, teamHistory, teamInfo, location } = this.props;
		let teamSlug =  "";
		if (teamInfo && teamInfo.slug) {
			teamSlug =  teamInfo.game + "-" + teamInfo.slug;
		}
		var teamName = this.props.params.name.toLowerCase();
		if (teamInfo.message === "not found" && teamDetail && teamDetail.name !== "") {
			this.props.dispatch(fetchTeamInfo(slugify(teamDetail.name), location.query.game))
			teamName = teamDetail.name.toLowerCase()
		}


		return (
			<div className="TeamDetail">
				<NavigationBar/>
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-12">
							<Card style={{ 'marginTop': '10px'}}>
								<CardHeader title={this.props.params.name} subtitle={teamInfo.game} avatar={teamInfo.logo}/>
								<CardText>
									{
									(teamDetail && Array.isArray(teamDetail.matches) && teamInfo.game === 'dota')
									?
									<div className="F10kInfo">
										<Card initiallyExpanded>
											<CardHeader title="Statistics" actAsExpander style={{ backgroundColor: grey600 }} titleColor={grey50} showExpandableButton={true}/>
											<CardText expandable={true}>
												<ul>
													<li>Average kill: {teamDetail.avgkill}</li>
													<li>Average death: {teamDetail.avgdeath}</li>
													<li>Ratio kill: {teamDetail.ratiokill}</li>
													<li>Total kill: {teamDetail.totalkill}</li>
													<li>Total death: {teamDetail.totaldeath}</li>
													<li>Winrate: {teamDetail.winrate}</li>
													<li>Average odds: {teamDetail.avgodds}</li>
												</ul>
											</CardText>
										</Card>
										<F10KHistory teamName={teamName} f10kHistory={teamDetail.matches} />
									</div>
									:
									""
									}
									<ResultList
										teamName={teamName}
										title="Matches History"
										resultList={teamHistory}
										getData={this.getRecentMatches}
									/>
								</CardText>
							</Card>
						</div>
						<div className="col-sm-6 col-12">
							<TeamTwitter slug={teamSlug}/>
						</div>
					</div>
				</div>
				<Footer />
			</div>
			)
}
}

const mapStateToProps = state => {
	return {
		teamDetail: state.team.teamDetail,
		teamHistory: state.team.teamHistory,
		teamInfo: state.team.teamInfo
	}
};

export default connect(mapStateToProps)(TeamDetail)
