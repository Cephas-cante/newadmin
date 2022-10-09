import { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password:undefined,
    });

    const {loading, error, dispatch} = useContext(AuthContext);
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev)=>({...prev, [e.target.id]: e.target.value}));
    }
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try {
            const res = await axios.post("/login_user", credentials);
            if (res.data.isAdmin){
                dispatch({type: "LOGIN_SUCCESS", payload: res.data.details});
                navigate("/");
            }else{
              dispatch({type:"LOGIN_FAILURE", payload: {message: "You are not allowed!"}});
            }
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE", payload: error.response.data})
        }
    }
  return (
    <div className="l-form">
        <form action="" className="form">
            <h1 className="form__title">Sign In</h1>
            <div className="form__div">
                <input type="text" id="username" 
                onChange={handleChange} className="form__input" placeholder="  "/>
                <label htmlFor="" className="form__label">Username</label>
                </div>
            <div className="form__div">
                <input type="password" id="password" 
                onChange={handleChange} className="form__input" placeholder="  "/>
                <label htmlFor="" className="form__label">Password</label>
            </div>
            
            <button disabled={loading} onClick={handleClick} type="submit" className="form__button">
                Login
            </button>
            {error && <span>{error.message}</span>}
        </form>
    </div>
  )
}

export default Login