import React, { Component } from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import { adminLogin } from '../actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Link} from 'react-router';

class Admin extends Component {

	static propTypes = {
		dispatch: PropTypes.func,
		loginResult: PropTypes.object
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.loginResult.email !== undefined) {
			alert("login successfully! Redirecting to admin dashboard")
			this.context.router.push("/admin/dashboard");
		}
	}

	constructor(props, context) {
		super(props, context)

		this.state = {
			email: "",
			password: ""
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
		this.props.dispatch(adminLogin(this.state.email, this.state.password))
		this.setState({
			email: "",
			password: ""
		})
		event.preventDefault()
	}

	render () {
		const { email, password } = this.state
		const { loginResult } = this.props

		return (
			<div>
				<NavigationBar />
				<div className="container">
					<form onSubmit={this.handleSubmit}>
						<input placeholder="Email" type="text" name="email" onChange={this.handleChange} value={email}></input><br/>
						<input placeholder="Password" type="password" name="password" onChange={this.handleChange} value={password}></input><br/>
						<input type="submit" value="Submit" />
						<Link to={`/admin/register`}>
							Register
						</Link>
					</form>
					{
					loginResult ? 
					<span>{loginResult.message}</span>
					:
					""
					}
				</div>
				<Footer />
			</div>
			)
	}
}

Admin.contextTypes = {
	router: PropTypes.object.isRequired
}

const mapStateToProps = state => {
	return {
		loginResult: state.admin.loginResult
	}
};

export default connect(mapStateToProps)(Admin)

