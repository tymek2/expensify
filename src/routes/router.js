import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Dashboard from '../components/dashboard'
import AddExpense from '../components/add-expense'
import EditExpense from '../components/edit-expense'
import Help from '../components/help'
import Header from '../components/header'
import Footer from '../components/footer'
import NotFound from '../components/404' 

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Route path="/" component={Header}/>
        <Switch>
            <Route path="/" component={Dashboard} exact={true}/>
            <Route path="/add" component={AddExpense}/>
            <Route path="/edit" component={EditExpense}/>
            <Route path="/help" component={Help}/>
            <Route path="/" component={NotFound} status={404}/>        
        </Switch>
    <Route path="/" component={Footer}/>
    </div>
    </BrowserRouter>
)
    
export default AppRouter