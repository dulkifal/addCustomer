import React from 'react';

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';

import Contact from '../assets/images/contact.svg';
import editIcon from '../assets/images/editIcon.svg';
import fluentPerson from '../assets/images/fluentPerson.svg';
import square_root from '../assets/images/square_root.svg';

const addVarible = (count) => {

  let arr = [];


  for (let i = 0; i < count; i++) {
    
    arr.push(
      <>
        <Field name={'variableValues.['+i+']key'} placeholder={'Variable' + (i + 1) + ' key'} />
        <Field name={'variableValues.[' + i +']value' } placeholder='value' />

      </>
    )

  }
  return arr;
}

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
              <Field name={contactName + '.title'} placeholder='Mr' />
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


const Dashboard = () => {

  const [count, setCount] = useState(1);
  const [totalContact, setTotalContact] = useState(1);


  return (
    <div>
      <Formik
        initialValues={{
          id: 0,
          account: {
            name: "",
            type: "",
            contactNo: "",
            emailId: ""
          },
          contacts: [
            {
              title: "",
              name: "",
              email: "",
              contactNo: "",
              tgUsername: "",
              designation: ""
            }
          ],
          variableValues: {},
          internName: "sample"

        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          
          let arr = values.variableValues;
          let size = Object.keys(arr).length
          console.log(arr)
          let obj ={}
          for(let i =0 ; i<size; i++){
            obj[arr[i].key] = arr[i].value
          }
          values.variableValues = obj

          fetch("clients/customers/add", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
          }).then(res => res.json())
            .then(data => {
              // console.log(data);

              resetForm();
              setSubmitting(false);
            }).catch(err => {
              console.log(err);
            }).finally(() => {
              setSubmitting(false);
            }
            )
        }
        }

      >

        <Form className='dashboard' >

          <div className="addcustomer">
            <h1>Add Customer</h1>
            <button type='submit'>ADD CUSTOMER</button>
          </div>
          <div className="formdiv">
            <div className="business">
              <div className="businesshead">

                <img src={Contact} alt="" />
                <h2>BUSINESS ACCOUNT DETAILS</h2>
              </div>
              <div className="businessinputs">
                <Field name='account.name' placeholder='Accounts Name' />
                <Field name='account.type' placeholder='Account Type' />
                <Field name='account.constctNo' placeholder='Contact Name' />
                <Field name='account.emailId' placeholder='Email ID' />
              </div>
            </div>
            <div className="var_contacts">

              <div className="variables">
                <div className="varhead">

                  <img src={square_root} alt="" />
                  <h2>VARIABLES</h2>
                  <div className="divgrow">

                  </div>
                  <button onClick={() => { setCount(count + 1) }}>ADD VARIABLE</button>

                </div>
                <div className="varinputs">
                  {/* map */}

                  {addVarible(count,)}
                </div>

              </div>
              <div className="contact variables">
                <div className="varhead">

                  <img src={Contact} alt="" />
                  <h2>CONTACT PERSON</h2>
                  <div className="divgrow">

                  </div>
                  <button onClick={() => { setTotalContact(totalContact + 1) }} >ADD NEW</button>

                </div>
                {addContact(totalContact)}


              </div>
            </div>




          </div>

        </Form>
      </Formik>
    </div>
  )
}

export default Dashboard;