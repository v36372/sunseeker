import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchesFilter from './MatchesFilter'
import NavigationBar from '../components/NavigationBar'
import ListMatch from '../components/ListMatch'
import { fetchMatches } from '../actions'
import dayBefore from '../helper/date'

class Dota extends Component {

    componentDidMount () {
        this.props.dispatch(fetchMatches({
            time_from: dayBefore(),
            game: 'dota'
        }));
    }

    render() {
        const { listMatches } = this.props;
        return (
            <div>
                <NavigationBar />
                <div className="container">
                    <div className="row">
                        <MatchesFilter />
                    </div>
                    <ListMatch listMatches={ listMatches } />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listMatches: state.matches.listMatches
    }
};

export default connect(mapStateToProps)(Dota)

