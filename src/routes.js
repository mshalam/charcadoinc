import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './components/home.js'
import { Bootcamp } from './components/bootcamp.js'
import { ContactUs } from './components/contactUs.js'
import { Tutoring } from './components/tutoring.js'
import AboutUs from './components/aboutUs.js'
import Store from './components/store.js'

/**
 * COMPONENT
 */
class Routes extends Component {
    render() {

        return (
            <Switch>
                <Route path="/tutoring" component={Tutoring} />
                <Route path="/bootcamp" component={Bootcamp} />
                {/* <Route path="/about" component={AboutUs} /> */}
                <Route path="/store" component={Store} />
                <Route path="/contact" component={ContactUs} />
                <Route component={Home} />
            </Switch>
        )
    }
}

export default Routes