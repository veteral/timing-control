import React from 'react'
import { Field } from 'formik'

function Select (props) {
  const { label, name, options, ...rest } = props
  console.log('Select', props)
  return (
    <>     
      <Field as='select' id={name} name={name} {...rest} className={`form-control`}>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </Field>      
    </>
  )
}

export default Select
