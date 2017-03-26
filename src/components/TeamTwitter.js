import React, { Component } from 'react'

const twitterBaseUrl = "https://twitter.com/v36372/lists/"

class TeamTwitter extends Component {

    render () {
		const { twitter } = this.props

        return (
            <div>
				<a className="twitter-timeline" href={twitterBaseUrl + twitter.shortName}>
					Tweets from {twitter.shortName}
				</a>
            </div>
        )
    }
}

export default TeamTwitter
