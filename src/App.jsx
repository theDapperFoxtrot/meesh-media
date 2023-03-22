import { useState } from "react";
import meeshLogo from "./assets/svg/meesh-media-logo.svg";
import purpleKeyboard from "./assets/images/purple-keyboard.jpg";
import purpleSky from "./assets/images/purple-sky.jpg";
import reactLogo from "./assets/svg/react.svg";
import twitterLogo from "./assets/svg/twitter.svg";
import githubLogo from "./assets/svg/github.svg";
import youtubeLogo from "./assets/svg/youtube.svg";
import twitchLogo from "./assets/svg/twitch.svg";
import "./style/style.css";

function App() {
	const [count, setCount] = useState(0);

	const hamburger = document.querySelector("#hamburger");
	const menu = document.querySelector("#menu");

	const handleBurger = () => {
		hamburger.classList.toggle("hamburger-active");
		hamburger.classList.toggle("hamburger-background");
		menu.classList.toggle("menu-active");
	};

	const leadsApp = () => {
		const inputEl = document.getElementById("input-el");
		const inputBtn = document.getElementById("input-btn");
		const ulEl = document.getElementById("ul-el");

		let myLeads = [];

		inputBtn.addEventListener("click", () => {
			myLeads.push(inputEl.value);
			inputEl.value = "";
			renderLeads();
		});

		const renderLeads = () => {
			let listItems = "";
			for (let i = 0; i < myLeads.length; i++) {
				listItems += '<li><a target="_blank" href="' + myLeads[i] + '"> ' + myLeads[i] + "</a></li>";
				const li = document.createElement("li");
				li.textContent = myLeads[i];
				ulEl.append(li);
			}
			ulEl.innerHTML = listItems;
		};
	};

	leadsApp();

	return (
		<div className="App">
			<div className="body-container">
				<a href="https://meeshmedia.com" target="_self">
					<img src={meeshLogo} className="meesh-logo" alt="Meesh Media logo" />
				</a>
				<div id="menu" className="nav-container">
					<nav className="main-nav">
						<ul>
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
						</ul>
					</nav>
					<ul class="socials-container">
						<a href="https://twitter.com/MeeshMedia" target="_blank">
							<li class="social-icon">
								<img class="social-image" src={twitterLogo} alt="the dapper foxtrot twitter" />
							</li>
						</a>
						<a href="https://github.com/theDapperFoxtrot" target="_blank">
							<li class="social-icon">
								<img class="social-image" src={githubLogo} alt="the dapper foxtrot git hub" />
							</li>
						</a>
						<a href="https://www.youtube.com/@meeshmedia" target="_blank">
							<li class="social-icon">
								<img class="social-image" src={youtubeLogo} alt="the dapper foxtrot on YouTube" />
							</li>
						</a>
						<a href="https://www.twitch.tv/thedapperfoxtrot" target="_blank">
							<li class="social-icon">
								<img class="social-image" src={twitchLogo} alt="the dapper foxtrot on Twitch" />
							</li>
						</a>
					</ul>
				</div>
				<div onClick={handleBurger} id="hamburger" class="hamburger-container">
					<div class="hamburger-menu"></div>
				</div>

				<h1>Find everything you need to make your online presence stand out!</h1>
				<div className="purple-keyboard-container">
					<img className="purple-keyboard" src={purpleKeyboard} alt="purple keyboard" lazy />
				</div>

				<div className="card">
					<input type="text" id="input-el" />
					<button id="input-btn">Save</button>
					<ul id="ul-el"></ul>
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
					<p>© Copyright 2023 Meesh Media. All Rights Reserved.</p>
				</footer>
			</div>
		</div>
	);
}

export default App;
