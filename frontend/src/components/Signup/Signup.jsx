import React, {useState, useEffect} from "react";
import "./Signup.css";
import Cookie from 'cookie-universal'
import {useNavigate} from "react-router-dom"
const cookies = Cookie()
const backendURL = process.env.REACT_APP_BACKEND_URI

const Signup = ()=>{
    const navigate = useNavigate()
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [password ,setPassword]  = useState("")
    const [email, setEmail] = useState("")
    const [passerr, setPasserr] = useState("")
    const [emailerr, setEmailerr] = useState("")
    const [nameerr , setNameerr]= useState("")
    const [cpassword ,setcPassword]  = useState("")

    useEffect(()=>{
        if(cpassword !== password){
            setPasserr("passwords do not match")
        }
        else{
            setPasserr("")
        }
        

    }, [cpassword])
    
    

    const submit = async (e)=>{
        e.preventDefault()



        let name = "";
        if(firstname || lastname){
             name = firstname + " " + lastname; 
        }
       
        
        try{
            const res = await fetch(`${backendURL}/signup`, {
                method: 'POST',
                body: JSON.stringify({email, password, name}),
                headers : {'Content-Type': 'application/json'}
            });
            const data = await res.json();
            console.log(data)
            if(data.errors){
                console.log(data.errors)
                setPasserr(data.errors.password);
                setEmailerr(data.errors.email)
                setNameerr(data.errors.name)
                
            }
            if(data.user){
                cookies.set('jwt', data.jwt)

            }

        }
        catch(err){
            console.log(err);
        }


    }




    return(
        
        <div className="signup">
            <h1>Register!</h1>
            <form method="POST">
                <div className="name">
                    <div className="firstname">
                        
                        <input className="inputbox" placeholder="First Name" type="text"  onChange={(e)=>{setFirstname(e.target.value)}}/>
                        <p className= "p">{nameerr}</p>
                    </div>
                    <div className="lastname">
                        
                        <input className="inputbox" placeholder="Last Name" type="text" onChange={(e)=>{setLastname(e.target.value)}}/>
                        
                    </div>
                </div>
                <div className="email">
                    
                    <input className="inputbox" placeholder="Email Address" type="email" onChange={(e)=>{setEmail(e.target.value)}} />
                    <p className= "p">{emailerr}</p>
                </div>
                <div className="password">
                    
                    <input className="inputbox" placeholder="Password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    <p className= "p">{passerr}</p>
                </div>
                <div className="password">
                    
                    <input className="inputbox" placeholder="Confirm Password" type="password" onChange={(e)=>{setcPassword(e.target.value)}}/>
                    
                </div>
                <div className="submit">
                    <input className="submitbtn" type="submit"  onClick={submit}/>
                </div>

            </form>
        </div>
        )
}

export default Signup;