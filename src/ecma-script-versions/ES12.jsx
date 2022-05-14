import React from "react";

export const ES12 = () => {

    /// Promise.any()
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, "Hello");
    });
    const promise2 = new Promise((resolve) => {
        setTimeout(resolve, 5000, "World");
    });
    const promises = [promise1, promise2];
    Promise.any(promises).then(value => console.log('Promise.any(): ',value))

    /// Boolean assignment operator
    let x = 1;
    let y = 2;
    let z;
    console.log('vars for boolean assignment operator: ', x, y, z)
    console.log('&&=: ', x &&= y);
    console.log('||=: ', x ||= y);
    console.log('??=: ',  z ??= y);

    return (
        <div style={{display: 'flex'}}>
            <p>ES12:</p>
            <p><a href='https://blog.logrocket.com/what-is-globalthis-why-use-it/'>WeakRef</a>, Promise.any(), Boolean assignment operator,</p>
        </div>
    )
}