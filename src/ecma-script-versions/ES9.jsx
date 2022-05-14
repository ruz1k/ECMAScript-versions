import React from "react";

export const ES9 = () => {

    /// for-await-of
    /// Allows you to call asynchronous functions that return a promise (or an array with a bunch of promises) in a loop:
    const promises = [
        new Promise(resolve => resolve(1)),
        new Promise(resolve => resolve(2)),
        new Promise(resolve => resolve(3))
    ];
    async function testFunc() {
        for await (const obj of promises) {
            console.log(obj);
        }
    }
    console.log('for-await-of: ',testFunc());

    return (
        <div style={{display: 'flex'}}>
            <p>ES9:</p>
            <p>for-await-of</p>
        </div>
    )
}