import React, { Component } from 'react'
import Moment from 'react-moment'
import {Link} from 'react-router';
import {Card} from 'material-ui/Card';

class TableRow extends Component {
    render () {
        const { match } = this.props;
        return (
            <Card className="TableRow row u-position--relative">
                <div className="TableRow-head row">
                    <div className="col-sm-8">
                        <Link to={`/match/${match.id}`}>
                            {match.tournament} - {match.mode_name}
                        </Link>
                    </div>
                    <div className="col-sm-4 text-right">
                        {
                            match.status === "Live"
                                ?
                                    <span>Live</span>
                                :
                                    <div className="TableRow-time">
                                        <span>{match.status} </span><Moment fromNow>{match.time}</Moment>
                                    </div>
                        }
                    </div>
                </div>
                <div className="TableRow-body container">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="TableRow-body-name">
                                <Link to={"/team/"+match.teama}>
                                    {match.teama}
                                </Link>
                                <div>{match.ratioa}</div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="TableRow-body-image text-center">
                                <Link to={"/team/"+match.teama}>
                                    <img src={match.logo_a} alt={match.teama}/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-2 text-center">
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
                        <div className="col-sm-2">
                            <div className="TableRow-body-image text-center">
                                <Link to={"/team/"+match.teamb}>
                                    <img src={match.logo_b} alt={match.teamb}/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-2">
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
                                        <div className="col-sm-10 text-center">{match.winner} won</div>
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
        )
    }
}

export default TableRow