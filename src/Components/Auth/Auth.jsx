import React, { useState } from 'react'
import axios from 'axios'

const Auth = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState()

    const handleSubmit = async e => {
        e.preventDefault()
    }

    if (user) {
        return <div>{user.name} is logged in</div>
    }


  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">UUsername:</label>
            <input type="text" 
            value={username}
            placeholder="Enter a username"
            onChange={({target}) => 
                setUsername(target.value)
            }
            />

            <label htmlFor="password">Password</label>
            <input type="password" 
            value={password}
            placeholder="Enter a Password"
            onChange={({target}) => 
                setPassword(target.value)
            }/>

            <button type='submit'>Login</button>

        </form>
    </>
  )
}

export default Auth