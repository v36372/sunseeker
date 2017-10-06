import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Dota from './containers/Dota'
import Csgo from './containers/Csgo'
import MatchDetail from './containers/MatchDetail'
import TeamDetail from './containers/TeamDetail'
import Donate from './containers/Donate'
import Admin from './containers/Admin'
import AdminRegister from './containers/AdminRegister'
import AdminDashboard from './containers/AdminDashboard'

export default <Route path="/">
	<IndexRoute component={App}/>
	<Route path="/dota" component={Dota} />
	<Route path="/csgo" component={Csgo} />
	<Route path="/match/:id" component={MatchDetail} />
	<Route path="/team/:name" component={TeamDetail}/>
	<Route path="/donate" component={Donate}/>
	<Route path="/admin" component={Admin}/>
	<Route path="/admin/register" component={AdminRegister}/>
	<Route path="/admin/dashboard" component={AdminDashboard}/>
</Route>
