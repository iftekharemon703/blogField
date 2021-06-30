import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import BlogDetails from './Components/Pages/BlogDetails/BlogDetails';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import AddBlog from './Components/DashBoard/AddBlog/AddBlog';
import ManageBlog from './Components/DashBoard/ManageBlog/ManageBlog';

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

        <PrivateRoute path="/dashboard">
          <DashBoard></DashBoard>
        </PrivateRoute>
        <PrivateRoute path="/add-Blog">
          <AddBlog></AddBlog>
        </PrivateRoute>
        <PrivateRoute path="/manage-blog">
          <ManageBlog></ManageBlog>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
