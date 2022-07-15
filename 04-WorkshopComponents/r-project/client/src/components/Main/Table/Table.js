import { HeadRow } from './Head.js'
import { BodyRow } from './Body.js'

export const Table = ({ listOfUsers, infoBtnClick, editBtnClick }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <HeadRow></HeadRow>
        </thead>
        <tbody>
          {listOfUsers.map((user) => (
            <BodyRow
              key={user._id}
              user={user}
              infoBtnClick={(e, clicked) => infoBtnClick(e, clicked)}
              editBtnClick={(e, clicked) => editBtnClick(e, clicked)}
            ></BodyRow>
          ))}
        </tbody>
      </table>
    </div>
  )
}
