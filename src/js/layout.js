import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Contacts } from "./views/Contacts.js";
import { AddContact } from "./views/AddContact.js";

export const Layout = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Switch>
						<Route exact path="/index.html" component={Contacts} />
						<Route exact path="/" component={Contacts} />
						<Route exact path="/contacts" component={Contacts} />
						<Route exact path="/add" component={AddContact} />
						<Route exact path="/edit" component={AddContact} />
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import {Home} from "./views/home.js";
import { AddContact} from "./views/AddContact.js";


import injectContext from "./store/appContext";

import {    Navbar} from "./component/navbar";
import {   Footer} from "./component/footer";

//create your first component
const Layout = () => {
        //the basename is used when your project is published in a subdirectory and not in the root of the domain
        // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
        const basename = process.env.BASENAME || "";

        return ( <>
                <BrowserRouter basename = {basename} >
                <ScrollToTop >
                <Navbar / >
                <Routes >
                <Route exact path = "/index.html"component = {Contacts}/> 
				<Route exact path = "/"component = {Contacts}/>
				<Route exact path = "/contacts"component = { Contacts}/> 
				<Route exact path = "/add"component = {AddContact}/> 
				<Route exact path = "/edit"component = {AddContact}/> 
				<Route render = {() => < h1 className = "notfound" > Not found! < /h1>} / >
                    <Route path = "/"element = { <Home / >}/> 
		<Route path = "/AddContact"element = {<AddContact / >}/>
					<Route path = "/AddContact/:theid"element = {<AddContact / >}/> 
					<Route path = "*"element = {<h1 > Not found! </h1>} / >
                        </Routes>
						<Footer / >
                        </ScrollToTop>
						< /BrowserRouter >
						</>
                    );
                };

                export default injectContext(Layout);