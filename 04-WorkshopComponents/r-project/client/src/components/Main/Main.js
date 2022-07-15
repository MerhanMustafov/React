import { useEffect, useState } from 'react'
import * as api from '../../services/api.js'

import { Search } from './Search.js'
import { Table } from './Table/Table.js'
import { Details } from './Details.js'
import { Create } from './Create.js'
import { Pagination } from './Pagination'

export const Main = () => {
  let [usersData, setUsersData] = useState([])
  let [addNewUserBtn, setAddNewUserBtn] = useState(false)
  const [userData, setUserData] = useState(null)
  // console.log("Initial STATE: ", usersData);
  //With async/await
  useEffect(() => {
    ;(async () => {
      const users = await api.getUsers('/users')
      const newUserData = users
      setUsersData((old) => (old = newUserData))
    })()
  }, [usersData])

  async function getUser(e) {
    const id = e.target.parentElement.id
    const endPoint = `/users/${id}`
    const user = await api.getUserById(endPoint)
    console.log(user.user)
    setUserData((old) => (old = user.user))
  }

  async function addNewUser(e) {
    e.preventDefault()
    const form = document.querySelector('.add_editForm')
    const data = new FormData(form)
    const newUser = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      imageUrl: data.get('imageUrl'),
      phoneNumber: data.get('phoneNumber'),
      address: {
        country: data.get('country'),
        city: data.get('city'),
        street: data.get('street'),
        streetNumber: Number(data.get('streetNumber')),
      },
    }
    await api.postUser(newUser, '/users')
    setAddNewUserBtn(false)
  }

  return (
    <main className="main">
      <section className="card users-container">
        <Search></Search>
        <Table listOfUsers={usersData} infoBtnClick={getUser}></Table>
        {/* <!-- New user button  --> */}
        <button className="btn-add btn" onClick={() => setAddNewUserBtn(true)}>
          Add new user
        </button>
        <Pagination></Pagination>
      </section>

      {/* <!-- User details component  --> */}
      {userData && <Details user={userData} close={setUserData}></Details>}

      {/* <!-- Create/Edit Form component  --> */}
      {addNewUserBtn && <Create onSave={addNewUser}></Create>}
    </main>
  )
}

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
