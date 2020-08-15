import React, { useState, Fragment } from 'react';
import YouTube from 'react-youtube';

import CancelButton from '../UI/CancelButton/CancelButton';
import Backdrop from '../UI/BackdropModal/BackdropModal';
import './EventModal.css';

const EventModal = props => {

    let modal = null;

    switch (props.event.contentType) {
        case "video":                
            modal = (
                <div className="EventModal__video">
                    <p className="EventModal__title">{props.event.title}</p>
                    <iframe className="EventModal__videoFrame" src={props.event.content}></iframe>
                    <CancelButton buttonClicked={props.onCloseModal} type="button">Cancel</CancelButton>
                </div>
            )
            break;
        
        case "letter":
            modal = (
                <div className="EventModal__video">
                    <p className="EventModal__title">{props.event.title}</p>
                    <iframe className="EventModal__letterFrame" src={props.event.content} type="application/pdf" frameborder="0"></iframe>
                    <CancelButton buttonClicked={props.onCloseModal} type="button">Cancel</CancelButton>
                </div>
            )
            break;
    
        default:
            modal = (
                <div className="EventModal__video">
                    <p>Source not found</p>
                    <CancelButton buttonClicked={props.onCloseModal} type="button">Cancel</CancelButton>
                </div>
            )            
            break;
    }

    return (
        <Fragment>
            {modal}
            <Backdrop backdropClicked={props.onCloseModal}/>
        </Fragment>
    );
}

export default EventModal;
