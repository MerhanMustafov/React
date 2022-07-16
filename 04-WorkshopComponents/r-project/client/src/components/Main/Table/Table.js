import { HeadRow } from './Head.js'
import { BodyRow } from './Body.js'

export const Table = ({ listOfUsers, setInfoUserD }) => {
  //   console.log('Table: ', listOfUsers)
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <HeadRow></HeadRow>
        </thead>
        <tbody>
          {listOfUsers.map((user) => (
            <BodyRow key={user._id} user={user} setInfoUserD={setInfoUserD} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
