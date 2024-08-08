import React, { memo } from 'react'

export default memo(function SimpleComponent({ user, printSomething }) {
    console.log("simple compinent render");
    return (
        <div>
            <h3>the user name is {user.firstName} and age is {user.age}</h3>
            <button onClick={printSomething}>print</button>
        </div>
    )
});
