import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Signup from './components/Signup';
import Login from './components/Login';
import CreateProject from './components/CreateProject';
import ProjectList from './components/ProjectList';
import InvestProject from './components/InvestProject';
import IssuePolicy from './components/IssuePolicy';
import ClaimPolicy from './components/ClaimPolicy';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/create-project" element={<CreateProject />} />
                    <Route path="/projects" element={<ProjectList />} />
                    <Route path="/invest-project" element={<InvestProject />} />
                    <Route path="/issue-policy" element={<IssuePolicy />} />
                    <Route path="/claim-policy" element={<ClaimPolicy />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
