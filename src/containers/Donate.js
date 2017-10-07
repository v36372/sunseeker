import React, { Component } from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import { postFeedback } from '../actions'

class Donate extends Component {

	constructor(props) {
		super(props)

		this.state = {
			name: "",
			feedback: ""
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange (event) {
		const target = event.target
		const value = target.value
		const name = target.name

		this.setState({
			[name]: value
		})

	}

	handleSubmit (event) {
		console.log(this.state)

		postFeedback(this.state.name, this.state.feedback)
		this.setState({
			name: "",
			feedback: ""
		})
		event.preventDefault()
	}

	render () {
		const { name, feedback } = this.state

		return (
			<div>
				<NavigationBar />
				<div className="container">
					<p>
						Hi guys, Welcome to F10K stats.
					</p>
					<p>
						This site was initially started just as a side project of me doing it in my free time, with no UI and functions as it is currently now.
					</p>
					<p>
						We have been spending a lot of time developing the web version for the program, integrating new features that we think will help you guys making easier choice in betting dota/csgo matches.
					</p>
					<p>
						Using information we provide by no means will secure your bets, but at least we do HOPE that it help.
					</p>
					<p>
						Please do come back again if you find the site helpful, share the site to your friends if you started winning bets, provide feedbacks so we can make it better.
					</p>
					<p>
						We also accepting donation in the form of items/ rolls. You can leave the roll information/ feedback for functions that you would LOVE to have in the below textbox.
					</p>
					<p>
						Thanks and good luck!
					</p>
					F10Kill Team
					</p>
					<br/>

					<form onSubmit={this.handleSubmit}>
						Our steamtrade link:
						<a href="https://steamcommunity.com/tradeoffer/new/?partner=104124469&token=jw5rh7lv">https://steamcommunity.com/tradeoffer/new/?partner=104124469&token=jw5rh7lv</a><br/>
						Your name: <input type="text" name="name" onChange={this.handleChange} value={name}></input><br/>
						Feedback or donation goes here: <br/>
						<textarea rows="4" cols="50" name="feedback" onChange={this.handleChange} value={feedback}></textarea><br/>
						<input type="submit" value="Submit" />
					</form>
				</div>
				<Footer />
			</div>
			)
	}
}

export default Donate
