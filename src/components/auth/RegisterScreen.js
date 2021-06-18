import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import validator from 'validator';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPassword } from '../../actions/auth';


export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msError } = useSelector( state => state.ui);


    const [ formValues, handleInputChange ] = useForm({
        name: 'Alejandro',
        email: 'alejo@hotmail.com',
        password: 123456,
        password2: 123456
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if( isFormValid() ) {
            dispatch(startRegisterWithEmailPassword(email, password, name));
        }
    }

    const isFormValid = () => {

        if( name.trim().length === 0 ){
            dispatch( setError('El nombre es vacio'));
            return false;
        } else if( !validator.isEmail(email)){
            dispatch( setError('El email no es correcto'));
            return false;
        }else if (password.length < 5 ){
            dispatch( setError('Password con menos de 5 caracteres'))
            return false;
        }else if(password !== password2){
            dispatch(setError('Los password no coinciden'));
            return false;
        }

        dispatch( removeError());
        return true;
    }
    
    return (
        <div className="animate__animated animate__fadeIn">
            <h3 className="auth__title mb-5">
                Register
            </h3>

            <form onSubmit={handleRegister}>
                
                {
                    msError &&
                    (
                    <div className="auth__alert-error">
                       {msError}
                    </div>
                    )
                }
                
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

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

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

                <Link 
                    className="link"
                    to="/auth/login"
                >
                    Already register
                </Link>

            </form>

        </div>
    )
}
