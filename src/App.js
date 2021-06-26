import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import Blog from './Components/Blog/Blog';
import BlogDetails from './Components/Pages/BlogDetails/BlogDetails';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Hero></Hero>
          <Home></Home>
        </Route>
        <Route path="/blog/:id">
          <BlogDetails></BlogDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
