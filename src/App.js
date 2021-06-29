import Login from './components/Login';
import Home from './components/Home';
import NewUser from './components/NewUser';
import Profile from './components/Profile';
import HeartrateTracker from './components/HeartrateTracker';
import GotStress from './components/GotStress';
import NoStress from './components/NoStress';
import Activity1 from './components/Activity1';
import Activity2 from './components/Activity2';
import Activity3 from './components/Activity3';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {    

  return (
    <Router>
      <div className="app">
       <Switch>         
         <Route path="/home">
          <Home />
         </Route>

         <Route exact path="/user">
          <NewUser />
         </Route>

         <Route exact path="/hr-tracker">
          <HeartrateTracker />
         </Route>

         <Route exact path="/profile">
          <Profile />
         </Route>

         <Route exact path="/stress">
          <GotStress />
         </Route>

         <Route exact path="/no-stress">
          <NoStress />
         </Route>

         <Route exact path="/activity1">
          <Activity1 />
         </Route>

         <Route exact path="/activity2">
          <Activity2 />
         </Route>

         <Route exact path="/activity3">
          <Activity3 />
         </Route>
         
         <Route exact path="/">
          <Login />
         </Route>
         
        </Switch>
      </div>  
    </Router>
  );
}

export default App;
