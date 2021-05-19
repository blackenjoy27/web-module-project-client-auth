
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';


import Login from "./components/Login";
import FriendList from "./components/FriendList";


function App() {
  return (
      <Router>
        <div className="App">
            <Link to="/login">Login</Link>
            
            {/* <Link onClick={logout}>Logout</Link> */}
            <Link to="/protected">Friends</Link>
            {/* {localStorage.getItem("token")?<Link to="/friends">Friends</Link>:<Link to="/protected">Friends</Link>} */}
         


          <Switch>
            <PrivateRoute exact path="/friends" component={FriendList} />
            {/* <Route path="/login" component={Login} /> */}
            <Route component={Login} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
