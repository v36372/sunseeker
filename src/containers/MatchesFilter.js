import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMatches } from '../actions'
import { RaisedButton } from 'material-ui'

const style = {
    marginRight: 24,
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
            <div className="MatchesFilter">
                <RaisedButton label="All" value="all" primary={true} style={style} onTouchTap={this.applyFilter} />
                <RaisedButton label="Upcoming" value="upcoming" primary={true} style={style} onTouchTap={this.applyFilter} />
                <RaisedButton label="Settled" value="settled" primary={true} style={style} onTouchTap={this.applyFilter} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        status: state.matches.status,
        game: state.matches.requestParams.game || 'all'
    }
};

export default connect(mapStateToProps)(MatchesFilter)

