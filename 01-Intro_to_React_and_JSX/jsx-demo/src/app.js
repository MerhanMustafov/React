const htmlRootElement = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(htmlRootElement);

const newJsxElement = (
	<div>
		<h1>Hello world!!!</h1>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
			repudiandae illum rem, nesciunt odit eum natus earum quod reiciendis
			ad temporibus perspiciatis fugiat, dignissimos maiores ab odio
			voluptatum, aspernatur numquam.
		</p>
	</div>
);
// const newJsxElement = React.createElement("h1", null, "Hello world!!!");

reactRoot.render(newJsxElement);
