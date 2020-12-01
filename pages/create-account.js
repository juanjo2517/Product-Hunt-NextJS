import React, { useState } from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout/Layout';
import { Form, DivInput, InputSubmit, Error } from '../components/UI/Form';

import useValidation from '../hooks/useValidation';
import validateCreateAccount from '../validation/validateCreateAccount';

import firebase from '../firebase';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  password2: ''
};

const CreateAccount = () => {

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  } = useValidation(INITIAL_STATE, validateCreateAccount, CreateAccount);

  const { name, email, password, password2 } = values;

  async function CreateAccount(){
    try {      
      await firebase.register(name, email, password);
    } catch (error) {
      console.log('Error al crear el usuario',error);
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
        >Crear Cuenta</h1>

        <Form
          onSubmit={handleSubmit}
          noValidate
        >
          <DivInput>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              placeholder="Tu nombre"
              name="name"
              value={name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </DivInput>

          { errors.name && <Error>{errors.name}</Error> }
          
          <DivInput>
            <label htmlFor="email">Correo Electronico</label>
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
            <label htmlFor="password">Contraseña</label>
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
          
          <DivInput>
            <label htmlFor="password2">Repite Contraseña</label>
            <input
              type="password"
              id="password2"
              placeholder="Repite Contraseña"
              name="password2"
              value={password2}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </DivInput>

          { errors.password && <Error>{errors.password}</Error> }
          
          <InputSubmit 
            type="submit"
            value="Crear Cuenta"
          />

        </Form>
      </>
    </Layout>
  </div>
   );
}
 
export default CreateAccount;
