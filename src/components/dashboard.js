import React from 'react';

import { useState } from 'react';
import { Formik, Form, useField, Field } from 'formik';



import Contact from '../assets/images/contact.svg';
import editIcon from '../assets/images/editIcon.svg';
import fluentPerson from '../assets/images/fluentPerson.svg';
import square_root from '../assets/images/square_root.svg';

// scheme
// {
//   "id": 0,
//     "account": {
//     "name": "string",
//       "type": "string",
//         "contactNo": "string",
//           "emailId": "string"
//   },
//   "contacts": [
//     {
//       "title": "string",
//       "name": "string",
//       "email": "string",
//       "contactNo": "string",
//       "tgUsername": "string",
//       "designation": "string"
//     }
//   ],
//     "variableValues": {
//     "additionalProp1": "string",
//       "additionalProp2": "string",
//         "additionalProp3": "string"
//   },
//   "internName": "string"
// }
const MyTextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}> </label>

        <input {...field} {...props} />
     
      
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};


const  Dashboard = () =>{
  const [data, setData] = useState([]);
  
   
  return (
    <div>
    <Formik
        initialValues={{
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
          variableValues: {
            additionalProp1: "",
            additionalProp2: "",
            additionalProp3: ""
          },
          internName: ""
        
      }}
        onSubmit={values  => {
console.log(values);
        // setData(data => values);
        // alert( JSON.stringify(values));
          // await new Promise(r => setTimeout(r, 500));
      // setSubmitting(false);
      // resetForm({values: ''});
        
      
      }}
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
                <Field   name='account.name' placeholder='Accounts Name' />
                <Field   name='account.type' placeholder='Account Type' />
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
              <button>ADD VARIABLE</button>

            </div>
            <div className="varinputs">
                  <Field name=' ' placeholder='Variable 1 key' />
              <Field name= 'variableValues.additionalProp1' placeholder='value' />
              <Field name=' ' placeholder='Variable 2 key' />
                  <Field name= 'variableValues.additionalProp2' placeholder='value' />
              <Field name=' ' placeholder='Variable 3 key' />
                  <Field name= 'variableValues.additionalProp3' placeholder='value' />
             
            </div>
          </div>
          <div className="contact variables">
            <div className="varhead">

              <img src={Contact} alt="" />
              <h2>CONTACT PERSON</h2>
              <div className="divgrow">

              </div>
              <button >ADD NEW</button>

            </div>
            <table>
              <tr>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>Title</td>
                <td>Mr</td>
              </tr>
              <tr>
                <td>Title</td>
                <td>Mr</td>
              </tr>
              <tr>
                <td>Title</td>
                <td>Mr</td>
              </tr>
              <tr>
                <td>Title</td>
                <td>Mr</td>
              </tr>
              <tr>
                <td>Title</td>
                <td>Mr</td>
              </tr>
              <tr>
                <td>Title</td>
                <td>Mr</td>
              </tr>

            </table>

          </div>
        </div>




      </div>

    </Form>
    </Formik>
    </div>
  )
}
 export default Dashboard;