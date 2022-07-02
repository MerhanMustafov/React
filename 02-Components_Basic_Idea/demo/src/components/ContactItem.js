export { ContactItem };
function ContactItem(props) {
	return (
		<div className="tm-contact-item">
			<i className="fas fa-5x fa-briefcase tm-contact-item-icon"></i>
			<p className="mb-0">{props.text}</p>
		</div>
	);
}
