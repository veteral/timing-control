import React, {
    useState,
    useEffect,
    useContext
} from 'react';
import TableBodyName from '../components/table/TableBodyName';
import TableHeader from '../components/table/TableHeader';
import HeaderData from '../components/HeaderData';
import Table from '../components/table/Table';
import { DBContext } from '../context/DBContext';
import Modal from '../components/Modal/Modal';
import ModalMessage from '../components/Modal/ModalMessage';
import ChangeNameForm from '../components/Modal/forms/ChangeNameForm';
import NameTemplate from './NameTemplate';


const Employee = () => {   
        
    return (
        <>  
            <NameTemplate property={'employee'} />
        </>
    );
}

export default Employee;