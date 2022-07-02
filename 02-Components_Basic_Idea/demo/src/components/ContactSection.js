import { ContactItem } from "./ContactItem";

function Contact(props) {
	return (
		<div
			id="tmContact"
			className="parallax-window"
			data-parallax="scroll"
			data-image-src="img/mini-profile-bg-02.jpg"
		>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="tm-contact-items-container">
							<ContactItem
								text="Quisque venenatis viverra ultrices. Lorem
									ipsum dolor sit amet. Nullam sit amet tempor
									nisl."
								iconClass="fa-briefcase"
							/>
							<ContactItem
								text="You can absolutely feel free to use Mini
								Profile for your web page or any usage for
								your website."
								iconClass="fa-building"
							/>
							<ContactItem
								text="You are NOT allowed to re-distribute this
								template in any download website. Else, it
								is illegal action."
								iconClass="fa-balance-scale"
							/>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<form
							action="index.html"
							method="POST"
							id="tmContactForm"
							className="tm-bg-white-transparent"
						>
							<div className="form-group">
								<input
									type="text"
									id="contact_name"
									name="contact_name"
									className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
									placeholder="Name"
									required
								/>
							</div>
							<div className="form-group">
								<input
									type="email"
									id="contact_email"
									name="contact_email"
									className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
									placeholder="Email"
									required
								/>
							</div>
							<div className="form-group">
								<textarea
									rows="4"
									id="contact_message"
									name="contact_message"
									className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
									placeholder="Message"
									required
								></textarea>
							</div>
							<div className="text-center">
								<button
									type="submit"
									className="btn tm-btn-submit rounded-0 text-white"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
				{/* <!-- row --> */}
				<div className="row">
					<footer className="col-12">
						<p className="text-center tm-copyright-text">
							Copyright 2020 Mini Profile Page - Design: Template
							Mo
						</p>
					</footer>
				</div>
			</div>
			{/* <!-- container --> */}
		</div>
	);
}

export { Contact };
