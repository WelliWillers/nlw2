
import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import SingIn from './pages/SingIn';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import SingUp from './pages/SingUp';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/singin" exact component={SingIn}/>
            <Route path="/" exact component={Landing}/>
            <Route path="/singup" exact component={SingUp}/>
            <Route path="/study" component={TeacherList}/>
            <Route path="/give-classes" component={TeacherForm}/>
        </BrowserRouter>
    );
}

export default Routes;