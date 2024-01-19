import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
            <li>
              <Link to="/profileUpdate">Profile Update</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/registration"> 
          <registration />
          </Route>
          <Route path="/details">
            <details />
          </Route>
          <Route path="/profile-update">
            <profileUpdate />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}
export default App;