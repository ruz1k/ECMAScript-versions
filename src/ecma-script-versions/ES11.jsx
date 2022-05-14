import React from "react";

export const ES11 = () => {

    /// Promise.allSettled()
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 2000, 'foo'));
    const promises = [promise1, promise2];
    Promise.allSettled(promises).then((results) => results.forEach((result) => console.log('Promise.allSettled(): ', result.status)));

    return (
        <div style={{display: 'flex'}}>
            <p>ES11:</p>
            <p>Promise.allSettled(), <a href='https://blog.logrocket.com/what-is-globalthis-why-use-it/'>globalThis</a></p>
        </div>
    )
}