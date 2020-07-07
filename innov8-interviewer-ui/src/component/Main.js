import React from 'react'
import { Switch, Route } from 'react-router-dom'
import InterviewersPage from './InterviewersPage';
import StaffingPage from './StaffingPage';
import Requirements from './Requirements';
import Contacts from './Contacts';
import '../css/Main.css'

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={InterviewersPage}/>
        <Route path='/staffing' component={StaffingPage}/>
        <Route path='/requirements' component={Requirements}/>
        <Route path='/contacts' component={Contacts}/>
      </Switch>
    </main>
  );
}

export default Main;