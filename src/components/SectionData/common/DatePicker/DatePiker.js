import React from 'react';
import s from './DatePicker.module.css';

import DateView from "react-datepicker"; 
import { registerLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = (props) => {
    registerLocale('ru', ru);
    return (
        <>
            <DateView 
                  locale="ru" 
                  className={`form-control ${s.w100p}`}
                  dateFormat="dd/MM/yyyy"
                  selected={props.startDate}
                  onChange={date => props.setStartDate(date)}
                />
        </>
    );
}

export default DatePicker;