import React from 'react'
import { Switch, Route } from 'react-router-dom'
import InterviewersPage from './InterviewersPage';
import Requirements from './Requirements';
import Contacts from './Contacts';
import LoginCallback from './LoginCallback';
import '../css/Main.css'

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={InterviewersPage}/>
        <Route path='/requirements' component={Requirements}/>
        <Route path='/contacts' component={Contacts}/>
        <Route path='/callback' component={LoginCallback}/>
      </Switch>
    </main>
  );
}

export default Main;