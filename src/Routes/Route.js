import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LifeCycleComponent from '../Component/LifeCycleComponent'
import DataComp from '../Component/DataComp'
import Main from '../Component/Main'
import Snippet from '../Component/Snippet'

function Routess(){
    return (
        <Switch>
            <Route path='/snippet' component={Snippet}/>
            <Route path='/main' component={Main}/>
            <Route path='/data' component={DataComp}/>
            <Route path='/lc' component={LifeCycleComponent}/>
        </Switch>
    )
}

export default Routess