// import logo from "./logo.svg";
// import "../";

function App() {
	return (
		<div>
			<header className="tm-site-header">
				<h1 className="tm-mt-0 tm-mb-15">
					<span className="tm-color-primary">OCEAN</span>{" "}
					<span className="tm-color-gray-2">vibes</span>
				</h1>
				<em className="tm-tagline tm-color-light-gray">
					simple and effective design
				</em>
			</header>

			<div id="tm-video-container">
				<video autoPlay muted loop id="tm-video">
					<source
						src="video/ocean-sea-wave-video.mp4"
						type="video/mp4"
					/>
				</video>
				<i id="tm-video-control-button" className="fas fa-pause"></i>
			</div>
			<div className="tm-container">
				<nav className="tm-main-nav">
					<ul id="inline-popups">
						<li className="tm-nav-item">
							<a
								href="#intro"
								data-effect="mfp-move-from-top"
								className="tm-nav-link"
							>
								Introduction
								<i className="fas fa-3x fa-water"></i>
							</a>
						</li>
						<li className="tm-nav-item">
							<a
								href="#gallery"
								data-effect="mfp-move-from-top"
								className="tm-nav-link"
								id="tm-gallery-link"
							>
								Gallery
								<i className="far fa-3x fa-pictures"></i>
							</a>
						</li>
						<li className="tm-nav-item">
							<a
								href="#testimonials"
								data-effect="mfp-move-from-top"
								className="tm-nav-link"
							>
								Testimonials
								<i className="far fa-3x fa-smile"></i>
							</a>
						</li>
						<li className="tm-nav-item">
							<a
								href="#about"
								data-effect="mfp-move-from-top"
								className="tm-nav-link"
							>
								About
								<i className="fas fa-3x fa-tint"></i>
							</a>
						</li>
						<li className="tm-nav-item">
							<a
								href="#contact"
								data-effect="mfp-move-from-top"
								className="tm-nav-link"
							>
								Contact
								<i className="far fa-3x fa-comments"></i>
							</a>
						</li>
					</ul>
				</nav>

				<div
					id="intro"
					className="popup mfp-with-anim mfp-hide tm-bg-gray"
				>
					<a href="#" className="tm-close-popup">
						return home
						<i className="fas fa-times"></i>
					</a>
					<div className="tm-row tm-intro-row">
						<img
							src="img/intro.jpg"
							alt="IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII"
							className="tm-intro-img"
						/>
						<img
							src="img/intro.jpg"
							alt="picture"
							className="tm-intro-img"
						/>
						<div className="tm-col tm-bg-white tm-intro-pad">
							<h2 className="tm-color-primary tm-page-title">
								Introducing Ocean Vibes
							</h2>
							<div className="tm-row tm-content-row">
								<div className="tm-col-6 tm-intro-col-l">
									<p>
										This CSS template is 100% free provided
										by
										<a
											rel="nofollow"
											href="https://templatemo.com/page/1"
											target="_parent"
										>
											TemplateMo
										</a>
										website. You can use this template for
										any purpose. You can apply this as a CMS
										theme or a custom website builder
										template.{" "}
									</p>
									<p>
										You can support our website by
										contributing
										<a
											rel="nofollow"
											href="http://paypal.me/templatemo"
											target="_parent"
										>
											a little via <strong>PayPal</strong>
										</a>
										or spreading a word about TemplateMo to
										your friends. If you have any question,
										feel free to send us a message.{" "}
									</p>
									<p className="tm-mb-0">
										<strong>Credit</strong> goes to Pexels
										for the video banner and pictures used
										in this template. Some pictures are
										taken from Unsplash. Both Pexels and
										Unsplash are great websites for free
										photos.
									</p>
								</div>
								<div className="tm-col-6">
									<p>
										You are not allowed to re-distribute
										this template as a downloadable ZIP file
										on any template collection website.
									</p>
									<p>
										Top right corner is a return home with
										an icon that will close this pop-up
										page.
									</p>
									<p className="tm-mb-80">
										Next Page will bring you to the gallery
										page directly without going back to main
										menu.
									</p>
									<div className="tm-text-center">
										<a
											href="#"
											className="tm-btn tm-btn-primary mfp-prevent-close tm-btn-next"
										>
											Next Page
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					id="gallery"
					className="popup mfp-with-anim mfp-hide tm-bg-gray"
				>
					<a href="#" className="tm-close-popup">
						return home
						<i className="fas fa-times"></i>
					</a>
					<div className="tm-row tm-gallery-row">
						<div className="tm-gallery">
							<div className="tm-gallery-container">
								<figure className="effect-chico tm-gallery-item portrait">
									<img
										src="img/gallery/portrait-01.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item nature">
									<img
										src="img/gallery/nature-01.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											TemplateMo is the best website for
											free css templates.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item animal">
									<img
										src="img/gallery/animal-01.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item building">
									<img
										src="img/gallery/building-01.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											TemplateMo is the best free css
											website templates.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item portrait">
									<img
										src="img/gallery/portrait-02.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item nature">
									<img
										src="img/gallery/nature-02.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item animal">
									<img
										src="img/gallery/animal-02.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item building">
									<img
										src="img/gallery/building-02.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item portrait">
									<img
										src="img/gallery/portrait-03.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item animal">
									<img
										src="img/gallery/animal-03.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item building">
									<img
										src="img/gallery/building-03.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item portrait">
									<img
										src="img/gallery/portrait-04.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item animal">
									<img
										src="img/gallery/animal-04.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item building">
									<img
										src="img/gallery/building-04.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item portrait">
									<img
										src="img/gallery/portrait-05.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item animal">
									<img
										src="img/gallery/animal-05.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item building">
									<img
										src="img/gallery/building-05.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item portrait">
									<img
										src="img/gallery/portrait-06.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item animal">
									<img
										src="img/gallery/animal-06.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item building">
									<img
										src="img/gallery/building-06.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item portrait">
									<img
										src="img/gallery/portrait-07.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item animal">
									<img
										src="img/gallery/animal-07.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item building">
									<img
										src="img/gallery/building-07.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item portrait">
									<img
										src="img/gallery/portrait-08.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>

								<figure className="effect-chico tm-gallery-item nature">
									<img
										src="img/gallery/nature-03.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item nature">
									<img
										src="img/gallery/nature-04.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item nature">
									<img
										src="img/gallery/nature-05.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item nature">
									<img
										src="img/gallery/nature-06.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item nature">
									<img
										src="img/gallery/nature-07.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item nature">
									<img
										src="img/gallery/nature-08.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>

								<figure className="effect-chico tm-gallery-item animal">
									<img
										src="img/gallery/animal-08.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											Chico's main fear was missing the
											morning bus.
										</p>
									</figcaption>
								</figure>
								<figure className="effect-chico tm-gallery-item building">
									<img
										src="img/gallery/building-08.jpg"
										alt="picture"
									/>
									<figcaption>
										<p>
											TemplateMo is the best free website
											for html css templates.
										</p>
									</figcaption>
								</figure>
							</div>
						</div>
						<div className="tm-col tm-gallery-right">
							<h2 className="tm-color-primary tm-mt-35 tm-page-title">
								Gallery
							</h2>
							<div className="tm-gallery-right-inner">
								<ul className="tm-gallery-links">
									<li>
										<a
											href="#"
											className="active tm-gallery-link"
											data-filter="*"
										>
											<i className="fas fa-layer-group tm-gallery-link-icon"></i>
											All
										</a>
									</li>
									<li>
										<a
											href="#"
											className="tm-gallery-link"
											data-filter="portrait"
										>
											<i className="fas fa-portrait tm-gallery-link-icon"></i>
											Portraits
										</a>
									</li>
									<li>
										<a
											href="#"
											className="tm-gallery-link"
											data-filter="nature"
										>
											<i className="fas fa-leaf tm-gallery-link-icon"></i>
											Nature
										</a>
									</li>
									<li>
										<a
											href="#"
											className="tm-gallery-link"
											data-filter="animal"
										>
											<i className="fas fa-paw tm-gallery-link-icon"></i>
											Animals
										</a>
									</li>
									<li>
										<a
											href="#"
											className="tm-gallery-link"
											data-filter="building"
										>
											<i className="far fa-building tm-gallery-link-icon"></i>
											Buildings
										</a>
									</li>
								</ul>
								<p>
									Different icons are used for different
									categories. There are 4 or more pages of
									photos in this gallery. Each thumbnail has a
									nice hover effect.
								</p>
								<p>
									Proin lacus enim, finibus sed magna a,
									molestie lacinia est. Maecenas id dolor
									lorem. Donec sodales ex velit.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div
					id="testimonials"
					className="popup mfp-with-anim mfp-hide tm-bg-gray"
				>
					<a href="#" className="tm-close-popup">
						return home
						<i className="fas fa-times"></i>
					</a>
					<div className="tm-testimonials-inner">
						<h2 className="tm-color-gray tm-testimonial-col tm-page-title">
							Testimonials
						</h2>
						<div className="tm-row tm-testimonial-row">
							<div className="tm-col tm-testimonial-col">
								<p>
									OCEAN vibes is free website template from
									<a
										rel="nofollow"
										href="https://templatemo.com"
										className="tm-color-primary"
									>
										TemplateMo
									</a>
									website. You are allowed to use it for
									commercial purpose. You can convert this
									template as a CMS theme or a custom website
									builder template.
								</p>
								<em className="tm-mb-30 tm-color-light-gray">
									You may support us by telling your friends
									about our TemplateMo site. Feel free to
									contact us if you have anything to ask.
								</em>
								<p>
									You can make a little contribution via
									<a
										rel="nofollow"
										href="http://paypal.me/templatemo"
										target="_parent"
									>
										<strong>PayPal</strong>
									</a>
									or saying about TemplateMo to your friends.
									Duis egestas lorem eu nisi finibus, sit amet
									elementum lacus pretium.
								</p>
								<p>
									In tempor felis vitae nulla feugiat aliquam.
									Vivamus vitae congue mi. Sed maximus velit
									vestibulum nisl condimentum hendrerit.
								</p>
							</div>
							<div className="tm-col tm-testimonial-col tm-testimonial-col-2">
								<img
									src="src\img\testimonial-01.jpg"
									alt="picture"
									className="tm-mb-30"
								/>
								<blockquote>
									<p>
										"Suspendisse eu mollis diam, at
										ullamcorper diam. Ut sit amet arcu
										metus. Nullam mattis eros eget." by{" "}
										<span className="tm-color-primary">
											George, Chief Editor
										</span>
									</p>
								</blockquote>
								<blockquote className="tm-mb-50">
									<p>
										"Quisque et lorem accumsan, sollicitudin
										dolor vel, facilisis eros. Donec aliquet
										felis in mollis egestas." by{" "}
										<span className="tm-color-primary">
											Mary, CEO of Web
										</span>
									</p>
								</blockquote>
								<div className="tm-text-center">
									<a
										href="#"
										className="tm-btn tm-btn-primary mfp-prevent-close tm-btn-contact"
									>
										Contact Us
									</a>
								</div>
							</div>
							<div className="tm-col tm-testimonial-col tm-testimonial-col-2">
								<p>
									Duis sapien diam, eleifend eget vehicula
									sed, convallis sit amet elit. Aenean
									condimentum vulputate porta.
								</p>
								<p>
									Mauris accumsan erat ante, id sagittis felis
									gravida vitae. Sed iaculis tincidunt neque,
									a molestie magna vehicula at.
								</p>
								<p>
									Phasellus ornare magna nec nulla pharetra,
									nec tristique elit lobortis.
								</p>
								<img
									src="./img/testimonial-02.jpg"
									alt="picture"
									className="tm-mt-35"
								/>
							</div>
						</div>
					</div>
				</div>

				<div
					id="about"
					className="popup mfp-with-anim mfp-hide tm-bg-gray"
				>
					<a href="#" className="tm-close-popup">
						return home
						<i className="fas fa-times"></i>
					</a>
					<h2 className="tm-color-primary tm-about-col tm-mb-40 tm-page-title">
						About Ocean Vibes
					</h2>
					<div className="tm-row tm-about-row">
						<div className="tm-col tm-about-col tm-about-left">
							<img
								src="img/about.jpg"
								alt="picture"
								className="tm-mb-30"
							/>
							<p className="tm-mb-40">
								Suspendisse sit amet pellentesque nunc. Vivamus
								fringilla tellus finibus lacus blandit, siet
								amet aliquet augue sagittis. Duis nec auctor
								felis, nec ornare ex. In non ante ligula.
							</p>
							<p className="tm-mb-40">
								Curabitur non augue dignissim est pulvibar
								lobortis. Nunc vulputate, mi vel cursus mollis,
								justo mauris rutrum dui, id egestas ante ligula
								id nunc. Interdum et malesuada fames ac ante
								ipsum primis in faucibus.
							</p>
						</div>
						<div className="tm-col tm-about-col">
							<p className="tm-mb-40">
								You are NOT allowed to re-distribute this
								template ZIP file on any website that{" "}
								<span className="tm-color-primary">
									collects and reposts
								</span>{" "}
								free templates from many different websites.
							</p>
							<p className="tm-mb-40">
								Pellentesque vitae ipsum vel risus molestie
								cursus nec quis lectus. Duis egestas lorem eu
								nisi finibus, sit amet elementum lacus pretium.
								In tempor felis vitae nulla feugiat aliquam.
							</p>
							<p className="tm-mb-40">
								If you need a working HTML contact form, please
								visit our{" "}
								<a
									rel="nofollow"
									href="https://templatemo.com/contact"
									target="_parent"
								>
									contact page
								</a>
								.{" "}
							</p>
							<a
								href="#"
								className="tm-btn tm-btn-primary mfp-prevent-close tm-btn-contact tm-mb-40"
							>
								Contact Us
							</a>
						</div>
					</div>
				</div>

				<div
					id="contact"
					className="popup mfp-with-anim mfp-hide tm-bg-gray"
				>
					<a href="#" className="tm-close-popup">
						return home
						<i className="fas fa-times"></i>
					</a>
					<h2 className="tm-contact-col tm-color-primary tm-page-title tm-mb-40">
						Contact Us
					</h2>
					<div className="tm-row tm-contact-row">
						<div className="tm-col tm-contact-col">
							<form
								id="contact-form"
								action=""
								method="POST"
								className="tm-contact-form"
							>
								<div className="form-group">
									<input
										type="text"
										name="name"
										className="form-control rounded-0"
										placeholder="Full Name"
										required
									/>
								</div>
								<div className="form-group">
									<input
										type="email"
										name="email"
										className="form-control rounded-0"
										placeholder="Email"
										required
									/>
								</div>
								<div className="form-group">
									<select
										className="form-control"
										id="contact-select"
										name="inquiry"
									>
										<option value="-">Subject</option>
										<option value="sales">
											Sales &amp; Marketing
										</option>
										<option value="creative">
											Creative Design
										</option>
										<option value="uiux">UI / UX</option>
									</select>
								</div>
								<div className="form-group">
									<textarea
										rows="8"
										name="message"
										className="form-control rounded-0"
										placeholder="Message"
										required
									></textarea>
								</div>

								<div className="form-group tm-text-right">
									<button
										type="submit"
										className="tm-btn tm-btn-primary"
									>
										Send it now
									</button>
								</div>
							</form>
						</div>
						<div className="tm-col tm-contact-col tm-contact-col-r">
							<div className="mapouter tm-mb-40">
								<div className="gmap_canvas">
									<iframe
										width="100%"
										height="520"
										id="gmap_canvas"
										src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
										frameBorder="0"
										scrolling="no"
										marginHeight="0"
										marginWidth="0"
									></iframe>
								</div>
							</div>

							<address className="tm-mb-40"></address>

							<ul className="tm-contact-links">
								<li>
									<a href="tel:0100200340">
										<i className="fas fa-phone tm-contact-link-icon"></i>
										Tel: 010-020-0340
									</a>
								</li>
								<li>
									<a href="mailto:info@company.com">
										<i className="fas fa-at tm-contact-link-icon"></i>
										Email: info@company.com
									</a>
								</li>
								<li>
									<a href="https://www.company.com">
										<i className="fas fa-link tm-contact-link-icon"></i>
										URL: www.company.com
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
