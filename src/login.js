import React from 'react'

export default class Login extends React.Component {
    render() {
        fetch("http://localhost:8080/user/account/login?username=jack&password=123", {
            credentials: "include"
        })
            .then(response => response.text())
            .then((responseText) => {
                console.log(responseText)
            })
        return (
            <div>Login</div>
        )
    }
}