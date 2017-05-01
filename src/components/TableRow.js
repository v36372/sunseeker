import React, { Component } from 'react'
import Moment from 'react-moment'
import {Link} from 'react-router';
import {Card} from 'material-ui/Card';
import Tick from './images/Tick.png'

class TableRow extends Component {
    render () {
        const { match } = this.props;
        return (
            <div>
            {
                match.mode_name === "Match Winner" || match.expand === true
                ?
                <Link to={`/match/${match.id}`}>
                    <Card className="TableRow row u-position--relative">
                        <div className="TableRow-head row">
                            <div className="col-sm-8">
                                {match.tournament} - {match.mode_name}
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
                                        {match.teama}
                                        <div>{match.ratioa}</div>
                                    </div>
                                </div>
                                <div className="col-sm-2 text-right">
                                    <div className="TableRow-body-image">
                                        <img src={match.logo_a} alt={match.teama}/>
                                        {
                                            match.winner === match.teama
                                                ?
                                                    <img src={Tick} alt="winner" className="winner-tick"/>
                                                :
                                                    ""
                                        }
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
                                        <img src={match.logo_b} alt={match.teamb}/>
                                        {
                                            match.winner === match.teamb
                                            ?
                                                <img src={Tick} alt="winner" className="winner-tick winner-tick--right"/>
                                            :
                                                ""
                                        }
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <div className="TableRow-body-name text-right">
                                        {match.teamb}
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
                </Link>
                :
                    <Link to={`/match/${match.id}`}>
                        <Card className="TableRow-footer row u-position--relative">
                            <div className="row">
                                <div className="col-sm-8">
                                    {
                                        match.winner ?
                                        `${match.tournament} - ${match.mode_name} - ${match.winner} won`
                                        : `${match.tournament} - ${match.mode_name}`
                                    }
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
                        </Card>
                    </Link>
            }
            </div>
        )
    }
}

export default TableRow