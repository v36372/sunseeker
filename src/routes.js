import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Dota from './containers/Dota'
import TeamDetail from './containers/TeamDetail'

export default <Route path="/">
    <IndexRoute component={App}/>
    <Route path="/dota" component={Dota} />
    <Route path="/team/:name" component={TeamDetail}/>
</Route>
