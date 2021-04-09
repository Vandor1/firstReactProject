/*REACT*/
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

/*Styling*/
import './App.css';

/*COMPONENTS*/
import Header from "./components/Header/header";
import Footer from "./components/footer/footer";

/*PAGES*/
import NewBlogPost from "./pages/NewBlogPost/NewBlogPost";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Home from "./pages/Home/home";
import BlogpostPage from "./pages/blogpostPage/BlogpostPage";


export default function App() {

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/about"> <About/> </Route>
                    <Route path={"/newPost"}> <NewBlogPost/> </Route>
                    <Route path="/contact"> <Contact/> </Route>
                    <Route path={"/post/:id"} component={BlogpostPage}/>
                    <Route path="/"> <Home/></Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}


{/*Resources:
https://www.kirupa.com/react/building_your_first_react_app.htm
https://getbootstrap.com/ -> CSS/HTML
https://reactrouter.com/web/api/NavLink -> React
https://startbootstrap.com/previews/clean-blog
TODO: Max number of blogposts per page?
TODO: Sticky header?
*/}