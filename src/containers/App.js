import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MatchesFilter from './MatchesFilter'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import ListMatch from '../components/ListMatch'
import { fetchMatches } from '../actions'
import dayBefore from '../helper/date'

class App extends Component {

	static propTypes = {
		listMatches: PropTypes.array.isRequired,
		dispatch: PropTypes.func.isRequired
	}

	componentDidMount () {
		this.props.dispatch(fetchMatches({
			limit: 30,
			time_from: dayBefore(),
			game: 'all',
			status: 'all'
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
				<Footer />
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

