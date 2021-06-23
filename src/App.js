import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Order from './pages/Order/Order';


const navbarConfig = [
    {title: 'home', url:'/'},
    {title: 'order', url: '/order'},
    {title: 'about', url: '/about'}
]

const App = () => {
    return ( 

        <div>
            <Navbar config={navbarConfig}/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/order' component={Order}/>
                <Route path='/about' component={About}/>
                <Redirect to = '/'/>

            </Switch>

        </div>

     );
}
 
export default App;
