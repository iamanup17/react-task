import React from 'react'

const Signup = () => {
    return (
        <>
        {/* <h1>sign up Page</h1> */}

           <section>
                <div className="login-form">
                    <form >
                    <center><h1>REGISTER </h1></center><br />
                        <input type="text" name="name" placeholder="Name" /> 
                        <br /><br />

                        <input type="Email" name="Email" placeholder="Email" />
                        <br /><br />
                        <input type="password" name="password" placeholder="Password" />
                        <br /><br />

                        <input type="submit" value="Sign Up" />
                    </form>
                </div>
            </section>
        </>
    )
}

export default Signup
