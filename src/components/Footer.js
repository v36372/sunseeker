import React, { Component } from 'react'
import Logo from './images/Logo.png'

class Footer extends Component {
	render () {
		return (
			<div className="container Footer">
				<div className="row">
					<hr/>
					<div className="Footer-item col-md-1">
						<a href="https://f10k.herokuapp.com">About</a>
					</div>
					<div className="Footer-item col-md-1">
						<a href="https://f10k.herokuapp.com/donate">Donate</a>
					</div>
					<div className="Footer-item col-md-8">
						<a href="https://f10k.herokuapp.com">
							<img src={Logo} alt="logo"/>
						</a>
					</div>
					<div className="Footer-item col-md-1">
						<a href="https://github.com/v36372/sunseeker">Sunseeker</a>
					</div>
					<div className="Footer-item col-md-1">
						<a href="https://github.com/sonhnguyen/dotastats">Dotastats</a>
					</div>
				</div>
			</div>
			)
	}
}

export default Footer
