import FeatureBox from "./Feature_box";
export default function Feature(props) {
	console.log(props);
	return (
		<div className="feature-section">
			<FeatureBox name="STAR" icon="fa-star" />
			<FeatureBox name="GEM" icon="fa-gem" />
			<FeatureBox name="ENVELOPE" icon="fa-envelope" />
		</div>
	);
}
