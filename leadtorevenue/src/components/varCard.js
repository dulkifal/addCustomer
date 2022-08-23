import {  Field } from 'formik';


const addVarible = (count) => {

  let arr = [];


  for (let i = 0; i < count; i++) {

    arr.push(
      <>
        <Field name={'variableValues.[' + i + ']key'} placeholder={'Variable' + (i + 1) + ' key'} />
        <Field name={'variableValues.[' + i + ']value'} placeholder='value' />

      </>
    )

  }
  return arr;
}

export default addVarible