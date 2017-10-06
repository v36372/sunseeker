import React, { Component } from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import { adminRegister } from '../actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class AdminRegister extends Component {

	static propTypes = {
		registerResult: PropTypes.object,
		dispatch: PropTypes.func
	}


	constructor(props, context) {
		super(props, context)

		this.state = {
			name: "",
			email: "",
			password: "",
			key: ""
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		
		if (nextProps.registerResult.email !== undefined) {
			alert("register successfully! Redirecting to login page")
			this.context.router.push("/admin");
		}
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
		this.props.dispatch(adminRegister(this.state.name, this.state.email, this.state.password, this.state.key))
		this.setState({
			name: "",
			email: "",
			password: "",
			key: ""
		})
		event.preventDefault()
	}

	render () {
		const { name, email, password, key } = this.state
		const { registerResult } = this.props

		return (
			<div>
				<NavigationBar />
				<div className="container">
					<form onSubmit={this.handleSubmit}>
						<input placeholder="Name" type="text" name="name" onChange={this.handleChange} value={name}></input><br/>
						<input placeholder="Email" type="text" name="email" onChange={this.handleChange} value={email}></input><br/>
						<input placeholder="Password" type="password" name="password" onChange={this.handleChange} value={password}></input><br/>
						<input placeholder="Invitation Key" type="text" name="key" onChange={this.handleChange} value={key}></input><br/>
						<input type="submit" value="Register" />
						{
						registerResult ? 
						<span>{registerResult.message}</span>
						:
						""
						}
					</form>
				</div>
				<Footer />
			</div>
			)
	}
}

AdminRegister.contextTypes = {
	router: PropTypes.object.isRequired
}

const mapStateToProps = state => {
	return {
		registerResult: state.admin.registerResult
	}
};

export default connect(mapStateToProps)(AdminRegister)


