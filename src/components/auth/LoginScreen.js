import React from 'react';
import validator from 'validator';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeError, setError, startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );

    const { msError } = useSelector(state => state.auth);

    const [ formValues, handleInputChange ] = useForm({
        email: 'alejo@hotmail.com',
        password: 123456
    });

    const { email, password } =  formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        if(isFormValid()){
            dispatch( startLoginEmailPassword(email, password) );
        }
        
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    const isFormValid = () => {

        if( !validator.isEmail(email)){
            dispatch( setError('El formato del correo no es correcto'));
            return false;
        }

        dispatch( removeError());
        return true;
    }

    return (
        <div className="animate__animated animate__fadeIn">
            <h3 className="auth__title mb-5">
                Login
            </h3>

            {
                msError && 
                (
                    <div className="auth__alert-error">
                        { msError }
                    </div>
                )
            }

            <form onSubmit={ handleLogin }>
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading }
                >
                    Login
                </button>

                <div className="auth__social-networks">

                    <p>Login with social networks</p>

                    <div 
                        onClick={handleGoogleLogin}
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                </div>

                <Link 
                    className="link"
                    to="/auth/register">
                    Create new account
                </Link>

            </form>

        </div>
    )
}
