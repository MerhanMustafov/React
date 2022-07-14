import { useEffect, useState } from "react";
import * as api from "../../services/api.js";

import { Search } from "./Search.js";
import { Table } from "./Table/Table.js";
import { Details } from "./Details.js";
import { Create } from "./Create.js";
import { Delete } from "./Delete.js";
import { Pagination } from "./Pagination";

export const Main = () => {
	let [usersData, setUsersData] = useState([]);
	console.log("Initial STATE: ", usersData);
	// with THEN
	// useEffect(() => {
	// 	api.getUsers("/users")
	// 		.then((res) => res)
	// 		.then((data) => {
	// 			console.log("useEffect 2nd then: ", data);
	// 			const newUserData = data;
	// 			setUsersData((old) => (old = newUserData));
	// 		});
	// }, []);

	//With async/await
	useEffect(() => {
		(async () => {
			const users = await api.getUsers("/users");
			const newUserData = users;
			setUsersData((old) => (old = newUserData));
		})();
	}, []);
	return (
		<main className="main">
			<section className="card users-container">
				<Search></Search>
				<Table listOfUsers={usersData}></Table>
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
