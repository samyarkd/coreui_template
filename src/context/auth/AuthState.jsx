import axios from "axios";
import { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from './authReducer'

const AuthState  = (props) => {
    const initialState = {
        token: localStorage.getItem("token"),
        isAuthenticated: null,
        loading: false,
        user: null,
        error: null,
        loading_state: true,
      };
    
      const [state, dispatch] = useReducer(AuthReducer, initialState);
    
      // Load User
      const loadUser = async () => {
        
    
        try {
          const res = await axios.get(process.env.REACT_APP_API_URL + "/api/auth", {
            token: localStorage.token,
          });
    
          dispatch({
            type: USER_LOADED,
            payload: res.data,
          });
        } catch (err) {
          dispatch({ type: AUTH_ERROR });
        }
      };
    
      // Register User
      const register = async (formData) => {
        dispatch({ type: REGISTER_LOAD });
        const config = {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        };
    
        try {
          const res = await axios.post(
            process.env.REACT_APP_API_URL + "/api/users",
            formData,
            config
          );
    
          dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
          });
    
          loadUser();
        } catch (err) {
          dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data.msg,
          });
        }
      };
    
      // Login User
      const login = async (formData) => {
        dispatch({ type: LOGIN_LOAD });
        const config = {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        };
    
        try {
          const res = await axios.post(
            process.env.REACT_APP_API_URL + "/api/auth",
            formData,
            config
          );
    
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
          });
    
          loadUser();
        } catch (err) {
          dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.msg,
          });
        }
      };
    
      // Logout
    
      const logout = () => {
        dispatch({ type: LOGOUT });
      };
    
      // Clear Errors
      const clearErrors = () => {
        dispatch({ type: CLEAR_ERRORS });
      };

    return(
        <AuthContext.Provider
        value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            error: state.error,
            register,
            clearErrors,
            loadUser,
            login,
            logout,
            loading_state: state.loading_state,
        }}
        >
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState;
