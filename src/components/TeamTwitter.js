import React, { Component } from 'react'

const twitterBaseUrl = "http://twitter.com/dotastats_/lists/t-"

class TeamTwitter extends Component {

	componentDidUpdate() {
		if (window.twttr) {
			window.twttr.widgets.load()
		}
	}

	render () {
		const { slug } = this.props

		return (
			<div>
				{ slug !== "" ?
					<a className="twitter-timeline" href={twitterBaseUrl + slug.toLowerCase()}>
						Tweets from {slug}
					</a>
					: ""
				}
			</div>
		)
	}
}

export default TeamTwitter
