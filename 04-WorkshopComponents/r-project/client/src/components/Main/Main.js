import { useEffect, useState } from 'react'
import * as api from '../../services/api.js'

import { Search } from './Search.js'
import { Table } from './Table/Table.js'
import { Details } from './Details.js'
import { Create } from './Create.js'
import { Edit } from './Edit'
import { Pagination } from './Pagination'

export const Main = () => {
  let [usersData, setUsersData] = useState([])
  let [addNewUserBtn, setAddNewUserBtn] = useState(false)
  let [editBtn, setEditBtn] = useState([false, null])
  const [editUserData, setEditUserData] = useState(null)

  let [infoBtn, setInfoBtn] = useState([false, null])
  const [infoUserData, setInfoUserData] = useState(null)
  //With async/await
  console.log('MAIN')
  useEffect(() => {
    ;(async () => {
      const users = await api.getUsers('/users')
      const newUserData = users
      setUsersData((old) => (old = newUserData))
    })()
  }, [])

  useEffect(() => {
    if (infoBtn[1] || editBtn[1]) {
      async function getUser() {
        const infoId =
          infoBtn[1].target.parentElement.id ||
          infoBtn[1].target.parentElement.parentElement.id

        const id = infoId
        // e.target.parentElement.id || e.target.parentElement.parentElement.id
        const endPoint = `/users/${id}`
        const user = await api.getUserById(endPoint)
        setInfoUserData((old) => (old = user.user))
      }
      getUser()
    }
  }, [infoBtn[0]])

  //   async function addNewUser(e, type) {
  //     e.preventDefault()

  //     const form = document.querySelector(type)
  //     const newUser = generateNewUser(form)
  //     await api.postUser(newUser, '/users')
  //     setAddNewUserBtn(false)
  //   }

  return (
    <main className="main">
      <section className="card users-container">
        <Search></Search>
        <Table
          listOfUsers={usersData}
          infoBtnClick={setInfoBtn}
          editBtnClick={setEditBtn}
        ></Table>
        <button className="btn-add btn" onClick={() => setAddNewUserBtn(true)}>
          Add new user
        </button>
        <Pagination></Pagination>
      </section>

      {infoBtn[0] && <Details></Details>}

      {addNewUserBtn && (
        // onSave={addNewUser}
        <Create onClose={setAddNewUserBtn}></Create>
      )}
      {editBtn[0] && (
        <Edit
          //   user={editUserData}
          //   onSave={addNewUser}
          onClose={setEditBtn}
        ></Edit>
      )}
    </main>
  )
}

function generateNewUser(form) {
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
  return newUser
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
