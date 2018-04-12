import React from 'react'
import { Route } from 'react-router'
import Home from './Home'

import '../static/css/font.css'
import '../static/css/common.less'
class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Home}/>
            </div>

        )
    }
}
export default App
