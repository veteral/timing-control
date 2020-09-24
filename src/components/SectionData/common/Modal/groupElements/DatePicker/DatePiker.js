import React from 'react';
import s from './DatePicker.module.css';
import { Form } from 'react-bootstrap';
import { Field } from 'formik';

import DateView from "react-datepicker"; 
import { registerLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ( { name, label } ) => {  
    //const { name, ...rest } = props
    registerLocale('ru', ru);
    return (
      <>        
        <Field name={name} >
          {({ form, field }) => {          
            const { setFieldValue } = form
            const { value } = field

            return (
              <>
                <Form.Label>{label}</Form.Label>
                <DateView
                  locale="ru"
                  dateFormat="dd/MM/yyyy"
                  id={name}
                  {...field}                
                  selected={value}
                  onChange={val => setFieldValue(name, val)}
                  className={`form-control ${s.w100p}`}
                />
              </>
            )
          }}
        </Field>        
      </>
    )
  }


// const DatePicker = (props) => {
//     registerLocale('ru', ru);
//     return (
//         <>
//             <DateView 
//                   locale="ru" 
//                   className={`form-control ${s.w100p}`}
//                   dateFormat="dd/MM/yyyy"
//                   selected={props.startDate}
//                   onChange={date => props.setStartDate(date)}
//                 />
//         </>
//     );
// }

export default DatePicker;