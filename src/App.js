import Login from './components/Login';
import Home from './components/Home';
import NewUser from './components/NewUser';
import Profile from './components/Profile';
import HeartrateTracker from './components/HeartrateTracker';
import GotStress from './components/GotStress';
import NegativeStress from './components/NegativeStress';
import StressRelief from './components/StressRelief';
import Activity1 from './components/Activity1';
import Activity2 from './components/Activity2';
import Activity3 from './components/Activity3';
import Breathing from './components/Breathing';
import FreeWriting from './components/FreeWriting';
import StressOptions from './components/StressOptions';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from './components/SignIn';

function App() {    

  return (
    <Router>
      <div className="app">
       <Switch>         
         <Route path="/home">
          <Home />
         </Route>

         <Route path="/user">
          <NewUser />
         </Route>

         <Route path="/hr-tracker">
          <HeartrateTracker />
         </Route>

         <Route path="/profile">
          <Profile />
         </Route>

         <Route path="/stress">
          <GotStress />
         </Route>

         <Route path="/no-stress">
          <NegativeStress />
         </Route>

         <Route path="/activity1">
          <Activity1 />
         </Route>

         <Route path="/activity2">
          <Activity2 />
         </Route>

         <Route path="/activity3">
          <Activity3 />
         </Route>

         <Route path="/options">
          <StressOptions />
         </Route>

         <Route path="/breathing">
          <Breathing />
         </Route>

         <Route path="/free-writing">
          <FreeWriting />
         </Route>

         <Route path="/stress-time">
          <StressRelief />
         </Route>

         <Route path="/sign-in">
          <SignIn />
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
