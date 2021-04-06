import {useState} from "react"
import './App.css';
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Home from './components/Home'
import Help from './components/Help'

import {Route , Switch} from 'react-router-dom'

import Admin from './components/Admin';
import Users from './components/Users'
import Profile from './components/Profile'
function App() {


  const [isConnected , setIsConnected] = useState(false)

  return (
    <div className="App">
    
    <Navbar isConnected={isConnected} setIsConnected={setIsConnected} />

  <Switch>
  
  <Route exact path="/" component={Home} />
  <Route path="/contact/:info" render={(props)=> <Contact text="no contact yet" {...props}/>}/>
  <Route path="/help" component={Help} />
  <Route path="/admin"  render={(props) => <Admin  isConnected={isConnected}  {...props} /> } />
  <Route path="/users"    component={Users} />
  <Route path="/profile/:x"  component={Profile} />
  </Switch>



    
    </div>
  );
}

export default App;
