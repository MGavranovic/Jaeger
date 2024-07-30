function LogIn() {
  return (
    <div className="container">
      <div className="container-form-login">
        <h1 className="form-title">Jaeger</h1>
        <p className="form-motto">Track. Hunt. Find.</p>
        <form className="form-login">
          <label className="form-label">Email:</label>
          <input type="email" className="form-input"></input>

          <label className="form-label">Password:</label>
          <input type="password" className="form-input"></input>

          <button className="form-login-button">Log In</button>
        </form>
      </div>
      <div className="container-welcome">
        {/* TODO: add a catchy title */}
        {/* TODO: add a background image instead of just the color */}
        <h1>Hello</h1>
        <p>Trying to find a Job?</p>
        <p>Hunt for it and keep track of the applications.</p>
        <p>Keep an eye on potential future opportunities using Jaeger.</p>
      </div>
    </div>
  );
}

export default LogIn;
