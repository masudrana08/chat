import './App.css';
import Home from './components/Home'
import Chatting from './components/Chatting'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact></Route>
        <Route path='/chatting' component={Chatting} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
