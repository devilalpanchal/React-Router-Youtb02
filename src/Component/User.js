import React from "react";
import { useParams } from "react-router-dom";
function User() {

    const params = useParams();
    const { name } = params
    return (
        <>
            <div>
                <h1>Hi devilal panchal</h1>
                <h2> This is User {name}'s Page</h2>
            </div>
        </>
    )
}

export default User;