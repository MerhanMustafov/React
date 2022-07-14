export { getUsers };

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
