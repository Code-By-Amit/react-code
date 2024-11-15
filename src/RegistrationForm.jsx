import React, { useState } from 'react'
// import './Form.css'

export const RegistrationForm = () => {
    const [user , setUser] = useState({
        fullName: "",
        userName: "",
        email : "",
        password: "",
        phoneNumber: "",
        confPassword: ""
    });

    const handleFormInput = (event) =>{
        const {name , value} = event.target;
        setUser((prev)=> ({...prev, [name] : value }))
    }
    return (
        <div class="wrapper">
            <form action="">
                <h1>Registration</h1>

                <div class="input-box">
                    <div class="input-field">
                        <input type="text" placeholder="Full Name" required name='fullName' value={user.fullName} onChange={handleFormInput} />
                            <ion-icon name="person"></ion-icon>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Username" required name='userName' value={user.userName} onChange={handleFormInput} />
                            <ion-icon name="person"></ion-icon>
                    </div>
                </div>

                <div class="input-box">
                    <div class="input-field">
                        <input type="email" placeholder="Email" required name='email' value={user.email} onChange={handleFormInput} />
                            <ion-icon name="mail"></ion-icon>
                    </div>
                    <div class="input-field">
                        <input type="number" placeholder="Phone Number" required name='phoneNumber' value={user.phoneNumber} onChange={handleFormInput} />
                            <ion-icon name="call"></ion-icon>
                    </div>
                </div>

                <div class="input-box">
                    <div class="input-field">
                        <input type="password" placeholder="Password" required name='password' value={user.password} onChange={handleFormInput} />
                            <ion-icon name="lock"></ion-icon>
                    </div>
                    <div class="input-field">
                        <input type="password" placeholder="Confirm Password" required  name='confPassword' value={user.confPassword} onChange={handleFormInput} />
                            <ion-icon name="lock"></ion-icon>
                    </div>
                </div>
                <label><input type="checkbox" />I hereby declare that the above information provided is true and correct</label>

                <button type="submit" class="btn">Register</button>

                <p>Source: <a href="https://www.youtube.com/watch?v=pLBVrqS63vw&list=WL&index=1" target="_blank">Codehal</a></p>
            </form>
        </div>
    )
}
