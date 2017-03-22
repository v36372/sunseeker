import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import {Link} from 'react-router';
import {Card} from 'material-ui/Card';
import NavigationBar from '../components/NavigationBar'
import { fetchMatch } from '../actions'

class MatchDetail extends Component {

    componentDidMount () {
        this.props.dispatch(fetchMatch(this.props.params.id));
    }

    render () {
        const { match } = this.props;

        return (
            <div>
                <NavigationBar />
            <div className="container">
            <Card className="TableRow row u-position--relative">
                <div className="TableRow-head row">
                    <div className="col-md-8">
                        {match.tournament} - {match.mode_name}
                    </div>
                    <div className="col-md-4 text-right">
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
                <div className="TableRow-body container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="TableRow-body-name">
                                <Link to={"/team/"+match.teama}>
                                    {match.teama}
                                </Link>
                                <div>{match.ratioa}</div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="TableRow-body-image text-center">
                                <Link to={"/team/"+match.teama}>
                                    <img src={match.logo_a} alt={match.teama}/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-2 text-center">
                            {
                                match.status === "Settled"
                                    ?
                                    <div className="TableRow-body-score">
                                        <span>{match.scorea} </span><span> {match.scoreb}</span>
                                    </div>
                                    : ""
                            }
                            {match.bestof}
                        </div>
                        <div className="col-md-2">
                            <div className="TableRow-body-image text-center">
                                <Link to={"/team/"+match.teamb}>
                                    <img src={match.logo_b} alt={match.teamb}/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="TableRow-body-name text-right">
                                <Link to={"/team/"+match.teamb}>
                                    {match.teamb}
                                </Link>
                                <div>{match.ratiob}</div>
                            </div>
                        </div>
                    </div>
                    {
                        match.status === "Settled"
                            ? 	<div>
                            <div className="row">
                                <div className="TableRow-body-result">
                                    <div className="col-md-10 text-center">{match.winner} won</div>
                                </div>
                            </div>
                        </div>
                            :	''
                    }
                </div>
                <div className="TableRow-background">
                    <img src={match.tournament_logo} alt={match.tournament} />
                </div>
            </Card>
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