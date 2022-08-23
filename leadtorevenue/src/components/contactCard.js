import { Field } from 'formik';
import editIcon from '../assets/images/editIcon.svg';

const addContact = (totalContact) => {
  let arr = [];
  for (let i = 0; i < totalContact; i++) {
    let contactName = `contacts[${i}]`
    arr.push(
      <>
        <div className="editContact">
          <img src={editIcon} className="editIcon" alt="" />
          <div className="contacttable">
            <div className="tablerow">

              <h3>Title</h3>
              <Field name={contactName + '.title'} placeholder='Mr' className="tablerow1" />
            </div>
            <div className="tablerow">

              <h3>Name</h3>
              <Field name={contactName + '.name'} placeholder='Mrfsf' />
            </div>
            <div className="tablerow">

              <h3>Phome Number</h3>
              <Field name={contactName + '.email'} placeholder='Mrfdsf@gmail.com' />
            </div>
            <div className="tablerow">

              <h3>Email</h3>
              <Field name={contactName + '.contactNo'} placeholder='Mrfds' />
            </div><div className="tablerow">

              <h3>Designation</h3>
              <Field name={contactName + '.designation'} placeholder='Mrds' />
            </div><div className="tablerow">

              <h3>Telegram Username</h3>
              <Field name={contactName + '.tgUsername'} placeholder='Mr  dff' />
            </div>
          </div>
        </div>
      </>
    )
  }
  return arr;
}

export default addContact