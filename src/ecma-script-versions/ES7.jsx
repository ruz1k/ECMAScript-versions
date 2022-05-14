import React from 'react'

export const ES7 = () => {

    /// Array.includes()
    const array = [1,2,3]
    console.log('Array.includes: ', array.includes(2))

    return (
        <div style={{display: 'flex'}}>
            <p>ES7:</p>
            <p>Array.includes()</p>
        </div>
    )
}