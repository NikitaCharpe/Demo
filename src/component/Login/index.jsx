import "./index.css";

const Login = () => {
  const fetchuserDetails = async() => {
    const userDetails = {

      Username: "rahul",
      password: "rahul@2021"
    }
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response);
  }
  fetchuserDetails();




  return (
    <div className='login-cont'>
      {/* <div className='login-card'> 
        <img className='web-logo'src='https://assets.ccbp.in/frontend/react-js/logo-img.png' alt='website logo'></img>
        </div> */}
      <form className='form-cont'>

        <img className='web-logo' src='https://assets.ccbp.in/frontend/react-js/logo-img.png' alt='website logo'></img>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />

        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}


export default Login;
