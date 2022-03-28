import React from 'react';
import {
    BrowserRouter as Router,
    Routes ,
    Route,
} from 'react-router-dom';
import TopBar from '../components/TopBar';
import DashboardPage from '../pages/DashboardPage';


export default (
    <Router>
        <TopBar />
        <Routes>
            <Route exact path="/" element={<DashboardPage/>}></Route>
        </Routes>
    </Router>
)