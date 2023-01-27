const SignUpToggle = ({ signUp, setSignUp }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={(e) => {
          e.preventDefault();
          setSignUp(false);
        }}
        className={` ${
          signUp
            ? 'bg-neutral text-neutral-content hover:bg-neutral/80 hover:text-neutral-content/80'
            : 'bg-primary text-primary-content hover:text-primary-content/80 hover:bg-primary/90'
        } mt-8  rounded-l-full w-36 py-4 mb-6`}
      >
        Login
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setSignUp(true);
        }}
        className={` ${
          !signUp
            ? 'bg-neutral text-neutral-content hover:bg-neutral/80 hover:text-neutral-content/80'
            : 'bg-primary text-primary-content hover:text-primary-content/80  hover:bg-primary/90'
        } mt-8  rounded-r-full w-36 py-4 mb-6`}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUpToggle;
