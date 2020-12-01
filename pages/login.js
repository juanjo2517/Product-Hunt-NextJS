import React, { useState } from 'react';
import { css } from '@emotion/react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { Form, DivInput, InputSubmit, Error } from '../components/UI/Form';

import useValidation from '../hooks/useValidation';
import validateLogin   from '../validation/validateLogin';

import firebase from '../firebase';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const Login = () => {

  const [error, saveError] = useState('');


  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  } = useValidation(INITIAL_STATE, validateLogin, Login);

  const { email, password } = values;

  async function Login(){
    try {
      await firebase.login(email, password);
      Router.push('/');
    } catch (error) {
      console.log(error.message);
      saveError(error.message);
    }
  }

  return ( 
    <div>
    <Layout>
      <>
        <h1
          css={css`
            text-align: center;
            margin-top: 5rem; 
          `}
        >Inicio de Sesión</h1>

        <Form
          onSubmit={handleSubmit}
          noValidate
        >
          
          <DivInput>
            <label htmlFor="email">Correo Electronico: </label>
            <input
              type="text"
              id="email"
              placeholder="Tu Correo"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </DivInput>

          { errors.email && <Error>{errors.email}</Error> }
          
          <DivInput>
            <label htmlFor="password">Contraseña: </label>
            <input
              type="password"
              id="password"
              placeholder="Tu Contraseña"
              name="password"
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </DivInput>

          { errors.password && <Error>{errors.password}</Error> }

          {error && <Error>Correo o Contraseña Incorrectos.</Error>}
          
          <InputSubmit 
            type="submit"
            value="Iniciar Sesión"
          />

        </Form>
      </>
    </Layout>
  </div>
   );
}
 
export default Login; 
