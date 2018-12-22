import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
    </div>
)
const RequireAuthentication = (WrappedComp) => {
    return (props) => (
        <div>
        <p>Authentication required!</p>
        <Info/>
        </div>
    )
}
const AuthInfo = RequireAuthentication(Info)

ReactDOM.render(<AuthInfo/>, document.getElementById('app'))
