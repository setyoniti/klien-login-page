
import LoginForm from '../component/Fragments/LoginForm';

import AuthLayout from "../component/layout/AuthLayout";

const SignIn = () => {
  return (
    <AuthLayout type="sign in">
      <LoginForm />
    </AuthLayout>
  );
};

export default SignIn;
