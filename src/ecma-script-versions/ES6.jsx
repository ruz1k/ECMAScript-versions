import React from 'react'

export const ES6 = () => {

    /// Generator
    /// function* || function *funcName()
    function* generateSequence() {
        yield 1;
        yield 2;
        return 3;
    }

    const generator = generateSequence();

    const generator1 = generator.next();
    const generator2 = generator.next();
    const generator3 = generator.next();
    console.log('Generator', generator1, generator2, generator3)

    return (
        <div style={{display: 'flex'}}>
            <p>ES6:</p>
            <p>Generator</p>
        </div>
    )
}