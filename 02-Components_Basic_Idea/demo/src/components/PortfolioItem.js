export { PortfolioItem };

function PortfolioItem(props) {
	return (
		<div className="tm-portfolio-item">
			<div className={`tm-portfolio-name text-white ${props.class}`}>
				{props.name}
			</div>
			<div className="tm-portfolio-description">
				<h3 className={`${props.classText}`}>
					{props.description}
					<span className="tm-title-small">{props.small}</span>
				</h3>
				<p className="mb-0">{props.text}</p>
			</div>
		</div>
	);
}
