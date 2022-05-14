import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages';
import SigninPage from './pages/signin';
import Register from './components/Register';
import dashboardPages from './pages/dashboard';
import CreateTodo from './components/Todo/Create';

function App() {
  return (
   <Router>
     <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/todo" component={dashboardPages} exact />
        <Route path="/todo/create" component={CreateTodo} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/register" component={Register} exact />
     </Switch>
   </Router>
  );
};

export default App;
