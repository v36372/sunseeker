import React, { Component } from 'react'
import {Link} from 'react-router';
import {Card} from 'material-ui/Card';

class TableRow extends Component {
    render () {
        const { match } = this.props;
        return (
            <Card>
                <div>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            {match.tournament} - {match.mode_name}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <Link to={"/team/"+match.teama}>
                                {match.teama}
                            </Link>
                        </div>
                        <div className="col-md-2">{match.bestof}</div>
                        <div className="col-md-2">
                            <Link to={"/team/"+match.teamb}>
                                {match.teamb}
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">{match.ratioa}</div>
                        <div className="col-md-3">{match.ratiob}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 text-center">{match.status}</div>
                    </div>
                    {
                        match.status === "Settled"
                            ? 	<div>
                                <div className="row">
                                    <div className="col-md-3">{match.scorea}</div>
                                    <div className="col-md-3">{match.scoreb}</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 text-center">{match.winner} won</div>
                                </div>
                            </div>
                            :	''
                    }
                    <hr/>
                </div>
            </Card>
        )
    }
}

export default TableRow