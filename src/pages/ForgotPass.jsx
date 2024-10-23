import FormLupaPassword from "../component/Fragments/FormLupaPassword";
import AuthLayout from "../component/layout/AuthLayout";

const ForgotPass = () => {
    return (
      <AuthLayout type="forgot">
        <FormLupaPassword/>
      </AuthLayout>
    );
  };

  export default ForgotPass;