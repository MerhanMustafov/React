import { useEffect, useState } from 'react'
import * as api from '../../services/api.js'

import { Search } from './Search.js'
import { Table } from './Table/Table.js'
import { Details } from './Details.js'
import { Create } from './Create.js'
import { Edit } from './Edit'
import { Pagination } from './Pagination'

export const Main = () => {
  const [usersData, setUsersData] = useState([])
  const [infoUserD, setInfoUserD] = useState(null)
  const [editUserD, setEditUserD] = useState(null)
  const [addNewUserBtn, setAddNewUserBtn] = useState(false)
  //   console.log('Running... ', usersData)
  useEffect(() => {
    async function getAllUsers() {
      setUsersData(await api.getUsers('/users'))
    }
    getAllUsers()
  }, [])

  return (
    <main className="main">
      <section className="card users-container">
        <Search></Search>
        <Table
          listOfUsers={usersData}
          setInfoUserD={setInfoUserD}
          setEditUserD={setEditUserD}
          setUsersData={setUsersData}
        ></Table>
        <button className="btn-add btn" onClick={() => setAddNewUserBtn(true)}>
          Add new user
        </button>
        <Pagination></Pagination>
      </section>
      {infoUserD && (
        <Details close={setInfoUserD} user={infoUserD.user}></Details>
      )}
      {addNewUserBtn && (
        <Create close={setAddNewUserBtn} setUsersData={setUsersData}></Create>
      )}
      {editUserD && (
        <Edit
          user={editUserD.user}
          close={setEditUserD}
          setUsersData={setUsersData}
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
