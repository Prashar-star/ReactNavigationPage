// import React from "react";
// import "./styles.css";
// import Login from "./Login"; //import the js file you want to link

// function Register() {
//   const [showForm, setShowForm] = React.useState(false);
//   const [registerSelected] = React.useState(false);
//   const [userName, setUserName] = React.useState("");
//   const [emailAddress, setUserEmail] = React.useState("");
//   const [userGender, setUserGender] = React.useState("");
//   const [mobileNumber, setUserMobile] = React.useState("");

//   const clickHandler = event => {
//     setShowForm(true);
//   };
//   const clickHandlerLogin = event => {
//     setShowForm(false);
//   };

//   // Display the results
//   const submit = () => {
//     console.log("Username: " + userName);
//     console.log("Email: " + emailAddress);
//     console.log("Gender: " + userGender);
//     console.log("Mobile: " + mobileNumber);
//   };
//   const changeHandler = event => {
//     // console.log(event.target.value);
//     switch (event.target.name) {
//       case "Username":
//         setUserName(event.target.value);
//         // console.log("UserName: " + userName);
//         break;

//       // case "Password":
//       //   setUserPassword(event.target.value);
//       //   // console.log("Password: " + passWord);
//       //   break;

//       case "Email":
//         setUserEmail(event.target.value);
//         //console.log("Email: " + emailAddress);

//         break;

//       case "Gender":
//         setUserGender(event.target.value);
//         // console.log("Gender: " + userGender);

//         break;

//       case "Mobile":
//         setUserMobile(event.target.value);
//         // console.log("Mobile: " + mobileNumber);

//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div>
//       {showForm === false && <Login />}
//       <p>
//         Not a Member yet?{" "}
//         <button type="Login" onClick={clickHandler}>
//           Register
//         </button>
//       </p>
//       {showForm === true && (
//         <div>
//           <label className="form-label">Username: </label>
//           <div className="form-content">
//             <input
//               type="text"
//               placeholder="Enter Username"
//               name="Username"
//               onChange={changeHandler}
//               //  value={userName}
//               required
//             />
//           </div>

//           {/* onChange={e => this.setState({ username: e.target.value })}
//         /> */}
//           <br />

//           <label className="form-label">Password: </label>
//           <div className="form-content">
//             <input
//               type="password"
//               placeholder="Enter Password"
//               name="Password"
//               onChange={changeHandler}
//               //  value={passWord}
//               required
//             />
//           </div>
//           {/* onChange={e => this.setState({ password: e.target.value })}
//         /> */}
//           <br />

//           <label className="form-label">Password: </label>
//           <div className="form-content">
//             <input
//               type="password"
//               placeholder="Re-enter Password"
//               name="Password1"
//               onChange={changeHandler}
//               required
//             />
//           </div>

//           <br />

//           <label className="form-label">Email: </label>
//           <div className="form-content">
//             <input
//               type="email"
//               placeholder="Email Address"
//               name="Email"
//               onChange={changeHandler}
//               // value={emailAddress}
//               required
//             />
//           </div>

//           <br />

//           <label className="form-label">Gender: </label>
//           <div className="form-content">
//             <select>
//               <option>Male</option>
//               <option>Female</option>
//             </select>
//           </div>

//           <br />

//           {/* Add country code etc using options and select tag */}

//           <label className="form-label">Mobile: </label>
//           <div className="form-content">
//             <input
//               type="number"
//               placeholder="Mobile number"
//               name="Mobile"
//               //  value={mobileNumber}
//               required
//             />
//           </div>

//           <br />

//           <center>
//             <button onClick={clickHandler}>Register</button>
//             {registerSelected && <div />}

//             {/* <button onClick={login}>Login</button>
//         {loginSelected && <div />} */}
//             {/* <p>
//               Already a Member? <button type="Login">Login</button>

//               <p> */}

//             <p>
//               Not a Member yet?{" "}
//               <button type="Login" onClick={clickHandlerLogin}>
//                 Login
//               </button>
//             </p>
//           </center>
//           {/* {showForm === true && <Login />} */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Register;
