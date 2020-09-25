import React, { Component } from 'react';
import HeaderData from "../common/HeaderData/HeaderData";
import TableData from "../common/TableData/TableData";
import Modal from '../common/Modal/Modal';

import add from "../../../img/plus.svg";
import edit from "../../../img/edit.svg";
import trash from "../../../img/trash.svg";
import print from "../../../img/print.svg";
import check from "../../../img/mark.png";


class Control extends Component {

    state = {
        data: [],
        actionRow: null,                    //action elements                
        isModal: false,
        // startDate: new Date(),
        // endDate: null
    };    

    componentDidMount() {
        console.log('mount');
        fetch('http://localhost:5000/')
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data: response,
                    actionRow: response.control[0]                     
                })
                console.log('data', this.state.data);
                console.log('actionRow', this.state.actionRow);
            })
    }

    componentDidUpdate() {
        console.log('update');
    }

    /**
     * row - объект по которому кликнули
     */

    setStartDate = date => {
        this.setState (
            { startDate: date }
        )
    }

    clickRowTable = row => {        
        this.setState({ actionRow: row });
        console.log('click-row', this.state.actionRow);
    }

    showModal = () => {
        this.setState({ isModal: !this.state.isModal });
        console.log('isModal', this.state.isModal);
    }

    render() {
        
        const titleSection = 'Документы на контроле:';
        
        /**
         * подумать: как правильно сделать? 
         *  сделать по отдельно или через НОС
         */
        // console.log('date', new Date());


        // registerLocale('ru', ru)

        const blockOfButtons = [
            { name: check, title: 'исполнено', showModal: this.showModal },
            { name: add, title: 'добавить', showModal: this.showModal },
            { name: edit, title: 'изменить', showModal: this.showModal },
            { name: trash, title: 'удалить', showModal: this.showModal },
            { name: print, title: 'печать', showModal: this.showModal },
        ];

        return (
            <>
                       
        {/* {console.log('render', this.state.isModal)}
        {console.log('render-BlockBtn', blockOfButtons)} */}

                <HeaderData title={titleSection} blockOfButtons={blockOfButtons} />
                {/* <TableData
                    dataTable={this.state.data}
                    actionRow={this.state.actionRow}
                    clickRowTable={this.clickRowTable}
                /> */}
                { 
                    this.state.isModal 
                        && <Modal 
                            //data={this.state.idAction} 
                            // showModal={this.state.isModule}
                            showModal={this.showModal}
                            // startDate={this.state.startDate} 
                            // setStartDate={this.setStartDate}
                        />
                }                
            </>
        );
    }
}

export default Control;

