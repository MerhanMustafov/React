export default function FeatureBox(props) {
	return (
		<div className="feature star">
			<i className={`fa-regular ${props.icon}`}></i>
			<h2 className="f-title">{props.name}</h2>
			<p className="info">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Nostrum repudiandae animi praesentium natus quasi molestias
				sapiente
			</p>
		</div>
	);
}
