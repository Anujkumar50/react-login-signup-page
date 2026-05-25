import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Register = () => {

  const navigation = useNavigate();

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
          "http://localhost:4000/register",
          values
        );

        console.log(res.data);
        alert("Register Successful");
        navigation('/home')
      } catch (error) {
        console.log(error);
        alert("Error");
      }
    }
    
    ,
  });

  return (
     <div className="d-flex justify-content-center" style={{ minHeight: "100vh",
    background: "linear-gradient(to right, #bc87ee, #591377)"}}>
   <div className="rounded-3" 
   style={{background:'0px ,0px ,0px ,0.4px', border:'2px solid black' , width:'350px',height:'400px',marginTop:'120px'}}
   
   >
    <form className="fw-bold p-4 " onSubmit={formik.handleSubmit}>
      <h1 className="text-center">Register  PAGE</h1>

      <dd className="fw-bold text-capitalize text-light">Name</dd>
      <dt>
        <input
        className="form-control"
        placeholder="Enter the name"
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

      <dd className="fw-bold text-capitalize text-light">Password</dd>
      <dt>
        <input
        className="form-control"
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

      <button type="submit" className="form-control btn btn-primary mt-0" >Register</button><p></p>
      <Link to="/" className="d-flex  justify-content-center" style={{color:'white'}} >Sign in </Link>
    </form>
    </div>
</div>    
  );
};

export default Register;