import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { loginSuccess } from '../../store/actions/index'
import LoginModal from '../../Components/LoginModal/LoginModal'
import './LoginPage.css';

const LoginPage = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const isAuthenticated = useSelector(state => {
        return state.authReducer.isAuthenticated
    });

    if (isAuthenticated) {
        history.push('/');
    }

    return (
        <div className="LoginPage__mainDiv">
            <LoginModal onLoginSuccess={() => dispatch(loginSuccess())}/>
        </div>
    );
}

export default LoginPage;
