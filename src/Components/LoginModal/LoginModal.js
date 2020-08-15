import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import SubmitButton from '../UI/SubmitButton/SubmitButton';
import CancelButton from '../UI/CancelButton/CancelButton';
import FormInput from '../UI/FormInput/FormInput';
import { checkValidity } from '../../utilityFunctions/modalUtility';

import './LoginModal.css';

const LoginModal = props => {

    // Component State
    const [loginForm, setLoginForm] = useState({
        username: {
            elementType: 'input',
            elementConfig: {
                type: 'username',
                placeholder: 'Username',
                userhelp: 'Enter the secret username'
            },
            value: '',
            validity: {
                isValid: false,
                shouldValidate: true,
                touched: false,
                required: true,
            }
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password',
                userhelp: 'Enter the secret password'
            },
            value: '',
            validity: {
                isValid: false,
                shouldValidate: true,
                touched: false,
                required: true,
            }
        }
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [isSubmitError, setIsSubmitError] = useState(false);

    const loginInputChangedHandler = (event, formElementID) => {

        const updatedForm = {
            ...loginForm
        };

        const updatedFormElement = {
            ...updatedForm[formElementID]
        };

        const updatedFormElementValidity = {
            ...updatedFormElement.validity
        }

        updatedFormElement.value = event.target.value;
        updatedFormElementValidity.isValid = checkValidity(updatedFormElement.value, updatedFormElementValidity);
        updatedFormElementValidity.touched = true;
        updatedFormElement.validity = updatedFormElementValidity;
        updatedForm[formElementID] = updatedFormElement;


        let isFormValid = true;
        for (let formIdentifier in updatedForm) {
            isFormValid = updatedForm[formIdentifier].validity.isValid && isFormValid;
        }

        setLoginForm(updatedForm);
        setIsFormValid(isFormValid);
    }

    const history = useHistory();

    const onloginHandler = (event) => {
        event.preventDefault();

        if (loginForm.username.value === "Little_JuJuBe" && loginForm.password.value === "Imissmyboyfriendtoday") {
            props.onLoginSuccess();
        } else {
            setIsSubmitError(true);
        }
    }

    const loginFormElements = [];
    for (let key in loginForm) {
        loginFormElements.push({
            id: key,
            config: loginForm[key]
        })
    }

    let loginFormDisplayed = (<form className="LoginModal__formDiv" onSubmit={onloginHandler}>
        {loginFormElements.map(element => {
            return (
                <FormInput
                    key={element.id}
                    elementType={element.config.elementType}
                    elementConfig={element.config.elementConfig}
                    value={element.value}
                    valid={element.config.validity.isValid}
                    shouldValidate={element.config.validity.shouldValidate}
                    touched={element.config.validity.touched}
                    changed={(event) => loginInputChangedHandler(event, element.id)} />
            )
        })}
        <div className="LoginModal__formButtons">
            <SubmitButton disabled={!isFormValid} >Login!</SubmitButton>
        </div>
    </form>);

    const isError = isSubmitError ?
        <div className="LoginModal__errorMessage"><p>Try again</p></div>
        : null

    return (
        <div className="LoginModal__mainDiv">
            <p className="LoginModal__title">Login</p>
            {isError}
            {loginFormDisplayed}
        </div>
    );
}

export default LoginModal;
