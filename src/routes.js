import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import TeamDetail from './containers/TeamDetail'

export default <Route path="/">
    <IndexRoute component={App}/>
    <Route path="/team/:name"
           component={TeamDetail}/>
</Route>
