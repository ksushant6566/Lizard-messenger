import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Join from './components/join/Join';
import Chat from './components/chat/Chat';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Join} />
                <Route path="/" component={Chat} />
            </Switch>
        </Router>

    )
}

export default App;