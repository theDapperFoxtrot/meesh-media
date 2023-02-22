import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<a href="https://meeshmedia.com" target="_self">
					<img src="" className="logo" alt="Meesh Media logo" />
				</a>
			</div>
			<h1>Meesh Media</h1>
			<div className="card">
				<h2>This is a counter button!</h2>
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
			</div>
			<p>
				Made with{" "}
				<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
					React
					<img src={reactLogo} alt="React logo" />
				</a>{" "}
				using{" "}
				<a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
					Vite
					<img src="./vite.svg" alt="Vite logo" />
				</a>
			</p>
		</div>
	);
}

export default App;
