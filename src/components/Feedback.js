import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Feedback extends Component {

	static propTypes = {
		feedBack: PropTypes.object,
	}

	render () {
		const { feedBack } = this.props;

		return (
					<div className="row">
						<div className="col-md-4">
							{feedBack.name}
						</div>
						<div className="col-md-4">
							{feedBack.feedback}
						</div>
						<div className="col-md-4">
							{feedBack.time}
						</div>
					</div>
			)
	}
}

export default Feedback



