import Description from "./description";

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
      <Description />
    </div>
  );
}

export default LogIn;
