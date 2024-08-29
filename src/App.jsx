import React from "react";
import "./css/index.css";
import "./css/font.css";
import {
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom";
import Heaader from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/pages/Home";
import Login from "./component/pages/Login";
import Movieinfo from "./component/pages/MovieInfo";
import Mypage from "./component/pages/MyPage";
import Signup from "./component/pages/Signup";
import Theater from "./component/pages/Theater";
import Ticketing from "./component/pages/Ticketing";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Heaader />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Login' element={<Login />} />
					<Route
						path='/Movieinfo'
						element={<Movieinfo />}
					/>
					<Route path='/Mypage' element={<Mypage />} />
					<Route path='/Signup' element={<Signup />} />
					<Route path='/Theater' element={<Theater />} />
					<Route
						path='/Ticketing'
						element={<Ticketing />}
					/>
					<Route path='/Login' element={<Login />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
