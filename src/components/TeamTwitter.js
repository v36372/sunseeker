import React, { Component } from 'react'

const twitterBaseUrl = "http://twitter.com/dotastats_/lists/t-"

const style = {
	visibility: "hidden",
}

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
					<a style={style} className="twitter-timeline" href={twitterBaseUrl + slug.toLowerCase()}>
						Tweets from {slug}
					</a>
					: ""
				}
			</div>
		)
	}
}

export default TeamTwitter
