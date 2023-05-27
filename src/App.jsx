import React from "react";
import Home from "../Home";
// import Counter from "./Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "../Create";
import Update from "./Redux/Update";

const App = () => {
	return (
		<div>
			{/* <Counter /> */}
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create" element={<Create />} />
					<Route path="/update/:id" element={<Update />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
