import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons'

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
                    <iframe title="myFrame" className="EventModal__videoFrame" src={props.event.content} frameBorder="0" allowFullScreen />
                    <CancelButton buttonClicked={props.onCloseModal} type="button">Cancel</CancelButton>
                </div>
            )
            break;

        case "letter":
            modal = (
                <div className="EventModal__video">
                    <p className="EventModal__title">{props.event.title}</p>
                    <iframe title="myFrame" className="EventModal__letterFrame" src={props.event.content} type="application/pdf" frameBorder="0" />
                    <CancelButton buttonClicked={props.onCloseModal} type="button">Cancel</CancelButton>
                </div>
            )
            break;

        case "image":
            modal = (
                <div className="EventModal__video">
                    <p className="EventModal__title">{props.event.title}</p>
                    <div class="EventModal__polaroid">
                        <div class="EventModal__image">
                            <img src={props.event.content} alt="Img not found" />
                        </div>
                        <div class="container">
                            <p class="EventModal__imageDescription">{props.event.imageDescription}</p>
                        </div>
                    </div>
                    <CancelButton buttonClicked={props.onCloseModal} type="button">Cancel</CancelButton>
                </div>
            )
            break;

        case "audio":
            modal = (
                <div className="EventModal__video">
                    <p className="EventModal__title">{props.event.title}</p>
                    <iframe src={props.event.content} frameBorder="0" scrolling="no"></iframe>
                    <FontAwesomeIcon icon={faMusic} className="EventModal__musicIcon" />
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
            <Backdrop backdropClicked={props.onCloseModal} />
        </Fragment>
    );
}

export default EventModal;
