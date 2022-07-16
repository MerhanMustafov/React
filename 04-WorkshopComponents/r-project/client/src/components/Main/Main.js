import { useEffect, useState } from 'react'
import * as api from '../../services/api.js'
import { statesObject } from '../../services/states.js'

import { Search } from './Search.js'
import { Table } from './Table/Table.js'
import { Details } from './Details.js'
import { Create } from './Create.js'
import { Edit } from './Edit'
import { Pagination } from './Pagination'

export const Main = () => {
  const [usersData, setUsersData] = useState([])
  const [infoUserD, setInfoUserD] = useState(null)
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
        <Table listOfUsers={usersData} setInfoUserD={setInfoUserD}></Table>
        <button className="btn-add btn">Add new user</button>
        <Pagination></Pagination>
      </section>
      {infoUserD && (
        <Details close={setInfoUserD} user={infoUserD.user}></Details>
      )}
      {/* <Create></Create> */}
      {/* <Edit></Edit> */}
    </main>
  )
}

function getUsers() {}

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
