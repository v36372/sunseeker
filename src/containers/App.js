import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListMatch from '../components/ListMatch'
import { fetchMatches } from '../actions'

class App extends Component {

    componentDidMount () {
        this.props.dispatch(fetchMatches());
    }

    render() {
        const { listMatches } = this.props;
        return (
            <div className="container">
                <ListMatch listMatches={ listMatches } />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listMatches: state.matches.listMatches
    }
};

export default connect(mapStateToProps)(App)

