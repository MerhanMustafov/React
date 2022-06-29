var htmlRootElement = document.getElementById("root");
var reactRoot = ReactDOM.createRoot(htmlRootElement);

var newJsxElement = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Hello world!!!"
	),
	React.createElement(
		"p",
		null,
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint repudiandae illum rem, nesciunt odit eum natus earum quod reiciendis ad temporibus perspiciatis fugiat, dignissimos maiores ab odio voluptatum, aspernatur numquam."
	)
);
// const newJsxElement1 = ;
// const newJsxElement = React.createElement("h1", null, "Hello world!!!");

reactRoot.render(newJsxElement);