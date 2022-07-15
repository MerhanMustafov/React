export { getUsers, postUser, del };

const baseUrl = "http://localhost:3005/api";
// function getUsers(endPoint) {
// 	const url = baseUrl + endPoint;
// 	return fetch(url)
// 		.then((res) => (res = res.json()))
// 		.then(({ users }) => {
// 			// console.log(users);
// 			return users;
// 		});
// }
async function getUsers(endPoint) {
	const url = baseUrl + endPoint;

	const response = await fetch(url);
	const { users } = await response.json();
	return users;
}

async function postUser(user, endPoint) {
	const url = baseUrl + endPoint;
	const u = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(user),
	});
}

async function del(endPoint) {
	const url = baseUrl + endPoint;
	const res = await fetch(url, { method: "DELETE" });
	const user = await res.json();
}
