import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import routes from '../routes'
import {Router} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const Root = ({store, history}) => (
	<MuiThemeProvider muiTheme={getMuiTheme()}>
		<Provider store={store}>
			<div>
				<Router history={history} routes={routes}/>
			</div>
		</Provider>
	</MuiThemeProvider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

export default Root
