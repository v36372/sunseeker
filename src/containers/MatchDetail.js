import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import {Link} from 'react-router';
import NavigationBar from '../components/NavigationBar'
import { fetchMatch } from '../actions'
import Tick from '../components/images/Tick.png'

class MatchDetail extends Component {

    componentDidMount () {
        this.props.dispatch(fetchMatch(this.props.params.id));
    }

    render () {
        const { match } = this.props;

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

                        <hr/>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        match: state.match.matchDetail
    }
};

export default connect(mapStateToProps)(MatchDetail)