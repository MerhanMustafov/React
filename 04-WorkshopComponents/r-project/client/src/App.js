import { Header } from "./components/Header/Header.js";
import { Main } from "./components/Main/Main.js";
import { Footer } from "./components/Footer/Footer.js";

import "./components/Css/Global.css";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Main></Main>
			<Footer></Footer>
		</div>
	);
}

export default App;
