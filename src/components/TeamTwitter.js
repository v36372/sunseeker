import React, { Component } from 'react'
import PropTypes from 'prop-types'

const twitterBaseUrl = "http://twitter.com/dotastats_/lists/"

const styleEmbed = {
	visibility: 'hidden'
};

const twitterContainer = {
	maxHeight: '700px',
	overflowY: 'scroll'
};

class TeamTwitter extends Component {

	static propTypes = {
		slug: PropTypes.string.isRequired
	}

	componentDidUpdate() {
		if (window.twttr) {
			window.twttr.widgets.load()
		}
	}
	render () {

		const { slug } = this.props;

		return (
			<div className="Twitter" style={twitterContainer}>
				{
				slug !== ""
				?
				<a style={styleEmbed}
					className="twitter-timeline"
					href={twitterBaseUrl + slug.toLowerCase()}>
					Tweets from {slug}
				</a>
				: ""
				}
			</div>
			)
	}
}

export default TeamTwitter
