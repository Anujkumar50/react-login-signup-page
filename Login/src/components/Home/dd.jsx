import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";



const [,,removeCookie] = useCookies(["userid"])
  const navigate = useNavigate();

  const logout = ()=>{
    removeCookie("userid")
    navigate("/")
  }
  <div className="fs-4">
                    <button className="bi btn btn-light bi-cart4 position-relative">
                     <span className="badge position-absolute rounded rounded-circle bg-danger text-white">0</span>
                    </button>
                    <button className="bi btn btn-light bi bi-arrow-bar-right position-relative ms-4" onClick={logout}>
                     <span className="badge position-absolute rounded rounded-circle bg-danger text-white"></span>
                    </button>
          
                </div>