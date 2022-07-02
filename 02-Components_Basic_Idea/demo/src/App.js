import { Welcome } from "./components/WelcomeSection";
import { Portfolio } from "./components/PortfolioSection";
import { Contact } from "./components/ContactSection";

function App() {
	return (
		<div className="App">
			<Welcome />
			<Portfolio />
			<Contact />
		</div>
	);
}

export default App;
