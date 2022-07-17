export { getUsers, postUser, deleteUser, getUserById, update }

const baseUrl = 'http://localhost:3005/api'
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
  const url = baseUrl + endPoint

  const response = await fetch(url)
  const { users } = await response.json()
  return users
}

async function postUser(user, endPoint) {
  const url = baseUrl + endPoint
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
}

async function deleteUser(endPoint) {
  const url = baseUrl + endPoint
  await fetch(url, { method: 'DELETE' })
}
async function getUserById(endPoint, id) {
  const url = baseUrl + endPoint + `/${id}`
  const res = await fetch(url)
  const user = await res.json()
  return user
}

async function update(endPoint, id, user) {
  const url = baseUrl + endPoint + `/${id}`
  const res = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
  const u = await res.json()
  return u
}
