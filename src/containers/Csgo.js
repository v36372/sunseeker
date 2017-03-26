import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchesFilter from './MatchesFilter'
import NavigationBar from '../components/NavigationBar'
import ListMatch from '../components/ListMatch'
import { fetchMatches } from '../actions'

class Csgo extends Component {

    componentDidMount () {
        this.props.dispatch(fetchMatches({
            limit: 20,
            game: 'csgo'
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

export default connect(mapStateToProps)(Csgo)

