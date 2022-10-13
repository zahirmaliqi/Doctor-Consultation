import React from "react";


function LogInForm(){
    return(
        <form>
            <div>
                <h2>LogIn</h2>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name"/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"/>
                </div>
            </div>
        </form>
    )
}

export default LogInForm;