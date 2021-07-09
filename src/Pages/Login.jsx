import React , { useState } from 'react'

const Login = ({Login , error}) => {
    const [details , setDetails] = useState({name:""  , password: ""});

    const submitHandler = e=>{
        e.preventDefault();

        Login(details);

    }
    return (
        <>

        {/* <h1>LoginPage</h1> */}
            <section>
                <div className="login-form">
                    
                    {(error != '') ? ( <div className="error">{error}  </div> ) : ""}
                    <form onSubmit={submitHandler}>
                        <center><h1>LOGIN </h1></center><br />
                        <input type="text" name="username" placeholder="Username" 
                        onChange={e=>setDetails({...details , name:e.target.value})} value={details.name} />
                        <br /><br />
                        <input type="password" name="password" placeholder="Password" 
                         onChange={e=>setDetails({...details , password:e.target.value})} value={details.password}/>
                        <br /><br />
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login
