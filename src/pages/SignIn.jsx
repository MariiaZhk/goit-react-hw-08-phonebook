import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ButtonSign, Form, FormTitle, FormWrap, Input } from './Pages.styled';

export const SignIn = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const submit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => {
        navigate('/contacts');
        toast.success(`Welcome, ${res.user.name}`);
      })
      .catch(error => {
        toast.error('Something went wrong... Try again, please');
      });
  };

  return (
    <FormWrap>
      <FormTitle>Sign In</FormTitle>

      <div>
        <Form action="#" method="post" onSubmit={handleSubmit(submit)}>
          <Input
            {...register('email')}
            type="email"
            name="email"
            placeholder="Email"
            required
            pattern="[^@\s]+@[^@\s]+"
          />
          <Input
            {...register('password')}
            type="password"
            name="password"
            placeholder="Password"
            required
            pattern=".{7,}"
          />
          <ButtonSign type="submit">SIGN IN</ButtonSign>
        </Form>
      </div>
    </FormWrap>
  );
};
