import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";



function Login() {
        const [state, dispatch] = useStateValue();

        const signIn = () => {
            // sign in...



                auth.signInWithPopup(provider).then((result) => {

                    dispatch ({

                        type: actionTypes.SET_USER, //EXTREMELY CASE SENSITIVE, DO NOT use EVEN a SINGLE Lower CASE 
                        user: result.user,
                    


                });

                        
                })                             
                
            .catch((error) => alert(error.message));
            
        };
                //Google Sign In Console Front Page (UP)

        return (
        
            <div className="login">
             <div className = "login__logo">

            <img src=" https://pbs.twimg.com/media/FYXe-EiXgAAFSDR?format=jpg&name=medium" alt = "" />      

            
            <img src="https://pbs.twimg.com/media/FYY0J1mXwAA9UkN?format=jpg&name=small" alt=""/>   

            <img src="https://cms.accuweather.com/wp-content/uploads/2022/07/FXApJSLXkAI0OJd.jpeg?w=632" alt=""/>        
            
            

        </div>

        <Button type="submit" onClick={signIn} >

            Sign In

        </Button>


  </div>
        );
}

export default Login;
