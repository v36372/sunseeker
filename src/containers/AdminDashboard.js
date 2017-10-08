import React, { Component } from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import { fetchFeedback } from '../actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Feedback from '../components/Feedback'

class AdminDashboard extends Component {

	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		feedBackArr: PropTypes.object
	}

	componentDidMount () {
		this.props.dispatch(fetchFeedback());
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.feedBackArr.message !== undefined) {
			alert("unauthorized, you need to login to see this")
			this.context.router.push("/admin");
		}
	}

	renderFeedbackRows() {
		const { feedBackArr } = this.props;
		if (feedBackArr && feedBackArr.data) {
			return feedBackArr.data.map((i) => <Feedback feedBack={i} key={i.time}/>);
		}

		return ""
	}

	render () {
		const groupFeedBack = this.renderFeedbackRows()

		return (
			<div>
				<NavigationBar />
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							Name
						</div>
						<div className="col-md-4">
							Feedback
						</div>
						<div className="col-md-4">
							Time
						</div>
					</div>
					<hr/>
					{groupFeedBack}
				</div>
				<Footer />
			</div>
			)
	}
}

AdminDashboard.contextTypes = {
	router: PropTypes.object.isRequired
}

const mapStateToProps = state => {
	return {
		feedBackArr: state.admin.feedBackArr
	}
};

export default connect(mapStateToProps)(AdminDashboard)


