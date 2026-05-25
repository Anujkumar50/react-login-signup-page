
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";


const Login = () => {
    const [cookies, setCookie] = useCookies(["userid"]);
    

  const navigate = useNavigate()
  useEffect(() => {
  if (cookies.userid) {
    navigate("/home");
  }
}, []);




  const validationSchema = yup.object({
    name: yup
      .string()
      .min(4, "Four character is required")
      .max(12, "12 is maximum")
      .required("Name is required"),

    password: yup
      .string()
      .min(6, "Six characters required")
      .max(10, "10 is maximum")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },

    validationSchema,

   onSubmit: async (values) => {
  try {
    const res = await axios.post(
      "http://localhost:4000/login",
      values
    );

    console.log(res.data);

    if (res.data === "Login Successful") {
      alert("Login Successful");
       setCookie("userid", values.name, {
      path: "/",
      maxAge: 3600,
    });

    
      navigate("/home");
    } else {
      alert("User not found");
      navigate("/");
    }

  } catch (error) {
    console.log(error);
    alert("Error");
  }
},
  });

  return (
    <div className="d-flex justify-content-center" style={{ minHeight: "100vh",
    background: "linear-gradient(to right, #4facfe, #00f2fe)"}}>
   <div className="p-3 rounded-2" 
   style={{background:'linear-gradient(to right, #4facfe, #00f2fe)', border:'2px solid black' 
    , width:'350px',height:'400px',marginTop:'120px',
  
  }}
   
   >
     <form  onSubmit={formik.handleSubmit}>
      <h1 className="text-center">Login page</h1>

      <dd className="fw-bold text-capitalize">Name</dd>
      <dt>
        <input
        placeholder="Enter the name"
        className=" form-control"
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <p>{formik.errors.name}</p>
        )}
      </dt>

      <dd className="fw-bold text-capitalize">Password</dd>
      <dt>
        <input
        className=" form-control"
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <p>{formik.errors.password}</p>
        )}
      </dt><br></br>

      <button type="submit" className="form-control btn btn-primary" >Login</button><br></br><p></p>
      <Link to="/register" className="mt-4" style={{color:'black',textAlign:'center'}} >Create New Account</Link>
    </form>
   </div>
   </div>
  );
};

export default Login;