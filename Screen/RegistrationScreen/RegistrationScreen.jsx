import React from 'react';
import { Formik } from 'formik';
import { BtnSubmit, Form,Input,Title } from './RegistrationScreen.styled';
// import { Button } from 'react-native';

export const RegistrationScreen = props => (

  <Formik
    initialValues={{ login:'', email: '', password:'' }}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <Form>
        <Title>Реєстрація</Title>
        <Input
          style={{
            shadowOpacity: 0.75,
            shadowRadius: 5,
            shadowColor: 'red',
            shadowOffset: { height: 2, width: 2 },
          }}
         
          onChangeText={handleChange('login')}
          onBlur={handleBlur('login')}
          value={values.login}
        />
        <Input
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
        <Input
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
        />
        <BtnSubmit onPress={handleSubmit} title="Зареєструватися"/>
      </Form>
    )}
  </Formik>
);

export default RegistrationScreen;