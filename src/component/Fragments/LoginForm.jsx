
import LabeledInput from "../elements/LabeledInput";
import Button from "../elements/button";

const LoginForm = () => {
  return (
    <form action="">

      <div className="mb-6">
        {"Form Sign In/Login"}
      </div>

      <div className="mb-6">
        <LabeledInput
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
        />
      </div>
      <Button variant="bg-[#299D91] w-full text-white" type="submit">
        Login
      </Button>

     
    </form>
  );
};

export default LoginForm;
