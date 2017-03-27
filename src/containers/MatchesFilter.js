import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMatches } from '../actions'

const style = {
    marginBottom: 12
};

class MatchesFilter extends Component {

    applyFilter = ev => this.props.dispatch(fetchMatches({
        limit: 20,
        game: this.props.game,
        status: ev.target.value
    }));

    render() {
        return (
            <div className="MatchesFilter" style={style}>
                <div className="btn-group" role="group" aria-label="...">
                    <button
                        type="button"
                        className={(this.props.status === 'all') ? 'btn btn-primary' : 'btn btn-default'}
                        value="all"
                        onClick={this.applyFilter}
                    >
                        All
                    </button>
                    <button
                        type="button"
                        className={(this.props.status === 'open') ? 'btn btn-primary' : 'btn btn-default'}
                        value="open"
                        onClick={this.applyFilter}
                    >
                        Upcoming
                    </button>
                    <button
                        type="button"
                        className={(this.props.status === 'live') ? 'btn btn-primary' : 'btn btn-default'}
                        value="live"
                        onClick={this.applyFilter}
                    >
                        Upcoming
                    </button>
                    <button
                        type="button"
                        className={(this.props.status === 'closed') ? 'btn btn-primary' : 'btn btn-default'}
                        value="closed"
                        onClick={this.applyFilter}
                    >
                        Settled
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        status: state.matches.requestParams.status || 'all',
        game: state.matches.requestParams.game || 'all'
    }
};

export default connect(mapStateToProps)(MatchesFilter)

