export default function NavBottom() {
	return (
		<nav className="bottom">
			<ul className="logo-name">
				<p className="page-name">New York Business</p>
				<p className="slogan">Just another WordPress site</p>
			</ul>
			<ul className="main-navigation">
				<div className="nav-container">
					<li>
						<a href="#/">Home</a>
					</li>
				</div>
				<div className="nav-container">
					<li>
						<a href="#/">My Account</a>
					</li>
				</div>
				<div className="nav-container">
					<li>
						<a href="#/">Cart</a>
					</li>
				</div>
				<div className="nav-container">
					<li>
						<a href="#/">Shop</a>
					</li>
				</div>
				<div className="nav-container">
					<li>
						<a href="#/">Service</a>
					</li>
				</div>
				<div className="nav-container">
					<li>
						<a href="#/">Contact</a>
					</li>
				</div>
				<div className="nav-container">
					<li>
						<a href="#/">About Us</a>
					</li>
				</div>
				<div className="nav-container">
					<li>
						<a href="#/">Blog</a>
					</li>
				</div>
				<button type="button" className="search-btn">
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
			</ul>
		</nav>
	);
}
