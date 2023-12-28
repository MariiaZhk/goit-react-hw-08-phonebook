import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../redux/auth/authOperations';
import {
  ButtonSign,
  Form,
  FormTitle,
  FormWrap,
  Input,
  LinkText,
} from './Pages.styled';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = newUser => {
    console.log(newUser);
    dispatch(registerThunk(newUser))
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
      <FormTitle>Sign Up </FormTitle>
      <div>
        <Form action="#" method="post" onSubmit={handleSubmit(submit)}>
          <Input
            {...register('name')}
            type="text"
            name="name"
            placeholder="Username"
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
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
            title="The password must contain at least 7 characters"
          />
          <ButtonSign type="submit">SIGN UP</ButtonSign>
          <div>
            <LinkText to="/login">
              You already have an account? SIGN IN
            </LinkText>
          </div>
        </Form>
      </div>
    </FormWrap>
  );
};
