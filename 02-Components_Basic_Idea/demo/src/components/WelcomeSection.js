function Welcome(props) {
	return (
		<section
			id="tmWelcome"
			className="parallax-window"
			data-parallax="scroll"
			// data-image-src="img/mini-profile-bg-01.jpg"
			data-image-src="C:\Users\PC\Desktop\React\02-Components_Basic_Idea\demo\src\img\mini-profile-bg-01.jpg"
		>
			<div className="container-fluid tm-brand-container-outer">
				<div className="row">
					<div className="col-12">
						{/* <!-- Logo Area --> */}
						{/* <!-- Black transparent bg --> */}
						<div className="ml-auto mr-0 tm-bg-black-transparent text-white tm-brand-container-inner">
							<div className="tm-brand-container text-center">
								<h1 className="tm-brand-name">Mini Profile</h1>
								<p className="tm-brand-description mb-0">
									simple parallax template
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="tm-bg-white-transparent tm-welcome-container">
				<div className="container-fluid">
					<div className="row h-100">
						{/* <!-- Welcome Text --> */}
						{/* <!-- White transparent bg --> */}
						<div className="col-md-7 tm-welcome-left-col">
							<div className="tm-welcome-left">
								<h2 className="tm-welcome-title">
									Welcome to Mini Profile Page
								</h2>
								<p className="pb-0">
									This is Bootstrap v4.3.1 parallax layout for
									you. Credit goes to
									<a
										rel="nofollow"
										href="https://www.pexels.com"
									>
										Pexels
									</a>
									for 2 background images. In odio sapien,
									commodo id ullamcorper ac, dignissim at
									sapien. Nullam leo massa, vaius ac massa et,
									tincidunt imperdiet turpis.
								</p>
							</div>
						</div>
						{/* <!-- Brown bg --> */}
						<div className="col-md-5">
							<div className="tm-welcome-right">
								<i className="fas fa-4x fa-address-card p-3 tm-welcome-icon"></i>
								<p className="mb-0">
									Please spread a word about templatemo
									website. Anyone can download free Bootstrap
									CSS templates.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export { Welcome };
