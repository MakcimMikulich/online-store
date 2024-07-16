import { useEffect } from "react";
import "./App.scss";
import { Footer } from "./components";
import { Outlet, useLocation } from "react-router-dom";

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

function App() {
	return (
		<div className="app">
			<main>
				<ScrollToTop />
				<Outlet />
				{/* <ScrollRestoration /> */}
			</main>
			<Footer />
		</div>
	);
}

export default App;
