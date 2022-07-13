import { Search } from "./Search.js";
import { Table } from "./Table/Table.js";
import { Details } from "./Details.js";
import { Create } from "./Create.js";
import { Delete } from "./Delete.js";
import { Pagination } from "./Pagination";

export const Main = () => {
	return (
		<main className="main">
			<section className="card users-container">
				<Search></Search>
				<Table></Table>
				{/* <!-- New user button  --> */}
				<button className="btn-add btn">Add new user</button>
				<Pagination></Pagination>
			</section>

			{/* <!-- User details component  --> */}
			{/* <Details></Deta> */}
			{/* <!-- Create/Edit Form component  --> */}

			{/* <Create></Create> */}
			{/* {/* <!-- Delete user component  --> */}
			{/* <Delete></Delete> */}
		</main>
	);
};
