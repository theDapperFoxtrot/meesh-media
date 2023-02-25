import { useState } from "react";
import meeshLogo from "./assets/svg/meesh-media-logo.svg";
import purpleKeyboard from "./assets/images/purple-keyboard.jpg";
import purpleSky from "./assets/images/purple-sky.jpg";
import reactLogo from "./assets/svg/react.svg";
import "./style/style.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div className="body-container">
				<div className="nav-container">
					<a href="https://meeshmedia.com" target="_self">
						<img src={meeshLogo} className="meesh-logo" alt="Meesh Media logo" />
					</a>
					<nav className="main-nav">
						<a href="#">Home</a>
						<a href="#">About</a>
						<a href="#">Contact</a>
					</nav>
				</div>
				<h1>Find everything you need to make your online presence stand out!</h1>
				<div className="purple-keyboard-container">
					<img className="purple-keyboard" src={purpleKeyboard} alt="purple keyboard" lazy />
				</div>
				<div className="card">
					<h2>Digital Strategy Consultation</h2>
					<p>Advice on all the ways that you can grow your audience, harness the value of the customer advocate, and empower your business to achieve a well-known reputation.</p>
					<h2>Web Development</h2>
					<p>Everything from the inception of the design, to setting up the online hosting, arranging the domain name, updating the information, and tracking the interactions from visitors. It will all be taken care of, so you can focus on what you do best.</p>
					<h2>Social Media Management</h2>
					<p>There's too many social platforms out there. Leave it to an expert to manage it all on your behalf, and ensure your voice is being heard in all the crucial corners of the web.</p>
					<h2>This is a counter button!</h2>
					<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				</div>
				<footer>
					<div className="purple-sky-container">
						<img className="purple-sky" src={purpleSky} alt="purple sky" lazy />
					</div>
					<p>
						Made with{" "}
						<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
							React
							<img className="logo" src={reactLogo} alt="React logo" />
						</a>{" "}
						using{" "}
						<a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
							Vite
							<img className="vite-logo" src="./vite.svg" alt="Vite logo" />
						</a>
					</p>
				</footer>
			</div>
		</div>
	);
}

export default App;
