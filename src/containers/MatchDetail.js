import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import {Link} from 'react-router';
import NavigationBar from '../components/NavigationBar'
import ResultList from '../components/ResultList'
import { fetchMatch } from '../actions'
import Tick from '../components/images/Tick.png'

class MatchDetail extends Component {

	static propTypes = {
		params: PropTypes.object.isRequired,
		match: PropTypes.object.isRequired,
		matchHistoryA: PropTypes.object,
		matchHistoryB: PropTypes.object,
		mutualHistory: PropTypes.object,
		isLoadingHistoryA: PropTypes.bool.isRequired,
		isLoadingHistoryB: PropTypes.bool.isRequired,
		isLoadingMutualHistory: PropTypes.bool.isRequired,
		dispatch: PropTypes.func.isRequired,
	}

	componentDidMount () {
		this.props.dispatch(fetchMatch(this.props.params.id));
	}

	render () {
		const {
			match,
			matchHistoryA,
			matchHistoryB,
			mutualHistory,
			isLoadingHistoryA,
			isLoadingHistoryB,
			isLoadingMutualHistory,
		} = this.props;

		return (
			<div className="MatchDetail">
				<NavigationBar />
				<div className="container">
					<div className="Match col-md-12">

						<div className="Match-title row">
							<div className="col-md-6">
								{
								match.game ?
								`${match.game.toUpperCase()}  - ${match.tournament} - ${match.mode_name}`
								: `Game - ${match.tournament} - ${match.mode_name}`
								}
							</div>
							<div className="col-md-6 text-right">
								{
								match.status === "Live"
								?
								<span>Live</span>
								:
								<div className="TableRow-time">
									<Moment fromNow>{match.time}</Moment>
								</div>
								}
							</div>
						</div>

						<hr/>

						<div className="row">
							<div className="col-md-4">
								<div className="row text-center u-position--relative">
									<Link to={`/team/${match.teama}?game=${match.game}`}>
										<img className="Match-team-logo" src={match.logo_a} alt={match.teama}/>
										{ match.winner === match.teama
										? <img src={Tick} alt="winner" className="Match-tick"/> : ""
										}
									</Link>
								</div>
								<div className="row text-center">
									<Link to={`/team/${match.teama}?game=${match.game}`} className="Match-team-title">
										{match.teama}
									</Link>
								</div>
								<div className="Match-ratio row text-center">
									{match.ratioa}
								</div>
							</div>
							<div className="col-md-4 text-center">
								<div className="Match-score">
									{ match.status === "Settled" ? match.scorea + ' - ' + match.scoreb : '0 - 0' }
								</div>
							</div>
							<div className="col-md-4">
								<div className="row text-center u-position--relative">
									<Link to={`/team/${match.teamb}?game=${match.game}`}>
										{ match.winner === match.teamb
										? <img src={Tick} alt="winner" className="Match-tick Match-tick--right"/> : ""
										}
										<img className="Match-team-logo" src={match.logo_b} alt={match.teamb}/>
									</Link>
								</div>
								<div className="row text-center">
									<Link to={`/team/${match.teamb}?game=${match.game}`} className="Match-team-title">
										{match.teamb}
									</Link>
								</div>
								<div className="Match-ratio row text-center">
									{match.ratiob}
								</div>
							</div>
						</div>
						<div className="ScoreGroup">
							<div className="col-sm-12">
								<h4>Versus history</h4>
								<table className="table table-striped">
									<thead>
										<tr>
											<th>Games</th>
											<th>Winner</th>
										</tr>
									</thead>
									<tbody>
										{
										Array.isArray(mutualHistory) && mutualHistory.length
										? mutualHistory.slice(0, 10).map(game =>
										<tr key={game.id}>
											<td>{game.tournament}</td>
											<td>{game.matchname}</td>
											<td>{game.winner}</td>
										</tr>
										)
										: isLoadingMutualHistory
										? <p>Loading</p> : <p>No mutual match</p>
										}
									</tbody>
								</table>
							</div>
						</div>
						<div className="ScoreGroup">
							<div className="Score col-sm-6">
								{
								Array.isArray(matchHistoryA) && matchHistoryA.length
								? <ResultList
									teamName={match.teama.toLowerCase()}
									title={`${match.teama} matches history`}
									resultList={matchHistoryA}
								/>
								: isLoadingHistoryA
								? <p>Loading</p> : <p>No {match.teama} match</p>
								}
							</div>
							<div className="Score col-sm-6">
								{
								Array.isArray(matchHistoryB) && matchHistoryB.length
								? <ResultList
									teamName={match.teamb.toLowerCase()}
									title={`${match.teamb} matches history`}
									resultList={matchHistoryB}
								/>
								: isLoadingHistoryB
								? <p>Loading</p> : <p>No match</p>
								}
							</div>
						</div>

					</div>
				</div>
			</div>
			)
}
}

const mapStateToProps = state => {
	return {
		match: state.match.matchDetail,
		mutualHistory: state.match.mutualHistory,
		matchHistoryA: state.match.teamMatchHistoryA,
		matchHistoryB: state.match.teamMatchHistoryB,
		isLoadingHistoryA: state.match.isLoadingHistoryA,
		isLoadingHistoryB: state.match.isLoadingHistoryB,
		isLoadingMutualHistory: state.match.isLoadingMutualHistory,
	}
};

export default connect(mapStateToProps)(MatchDetail)
