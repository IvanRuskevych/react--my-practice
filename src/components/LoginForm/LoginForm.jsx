import styled from '@emotion/styled';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

// // var 01 - as usiall
// export default function LoginForm() {
//   const handelSubmit = e => {
//     e.preventDefault();
//     const { login, password } = e.target.elements;
//     console.log(login.value, password.value);
//   };

//   return (
//     <form autoComplete="off" onSubmit={handelSubmit}>
//       <label htmlFor="login">
//         Login
//         <input name="login" type="text" />
//       </label>
//       <label htmlFor="password">
//         Password
//         <input name="password" type="text" />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// // ----------------------

// var 02 --> Formik

const initialValues = {
  login: '',
  password: '',
};

const Input = styled(Field)`
  margin-right: 10px;
  font-size: 20px;
  color: blue;
`;

const Button = styled.button`
  margin: 10px;
  cursor: pointer;
`;
let schema = Yup.object().shape({
  login: Yup.string().min(6).max(12).required(),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(24, 'Too Long!')
    .required('Required'),
});

export default function LoginForm() {
  const handelSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={handelSubmit}
      initialValues={initialValues}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Input name="login" type="text" />
          <ErrorMessage name="login" component="div"></ErrorMessage>
        </label>
        <label htmlFor="password">
          Password
          <Input name="password" type="text" />
          <ErrorMessage name="password" component="div"></ErrorMessage>
        </label>
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
}
