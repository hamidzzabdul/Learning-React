import useInput from "../hooks/newuser-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstNameValue,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    isValid: enteredFistNameIsValid,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLastNameValue,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    isValid: enteredlastNameNameIsValid,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmailValue,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isValid: enteredEmailIsValid,
    reset: resetEmail,
  } = useInput((value) => value.trim().includes("@"));

  let formIsValid = false;

  if (
    enteredFistNameIsValid ||
    enteredlastNameNameIsValid ||
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      !enteredFistNameIsValid ||
      !enteredEmailIsValid ||
      !enteredlastNameNameIsValid
    ) {
      return;
    }
    resetFirstName();
    resetLastName();
    resetEmail();
  };
  const firstNameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstNameValue}
          />
          {firstNameInputHasError && (
            <p className="error-text">first name cannot be empty</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastNameValue}
          />
          {lastNameInputHasError && (
            <p className="error-text">last name cannot be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmailValue}
        />
        {emailInputHasError && (
          <p className="error-text">Please provide a valid E-mail</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
