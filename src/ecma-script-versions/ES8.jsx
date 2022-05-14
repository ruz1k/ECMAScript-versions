import React from "react";

export const ES8 = () => {

    /// PadStart/PadEnd
    const padStart = 'abs'.padStart(10, 'foo')
    const padEnd = 'abs'.padEnd(10, 'foo')
    console.log('PadStart', padStart)
    console.log('PadEnd', padEnd)

    /// Object.getOwnPropertyDescriptors();
    /// A property descriptor is a regular JavaScript object that describes attributes and property values.
    const object = {
        name: 'Foo'
    }

    const descriptors = Object.getOwnPropertyDescriptors(object)
    console.log('Object.getOwnPropertyDescriptors():', descriptors)

    /// SharedArrayBuffer
    ///? var sab = new SharedArrayBuffer(1024);
    ///  worker.postMessage(sab);


    return (
        <div style={{display: 'flex'}}>
            <p>ES8:</p>
            <p>String.PadStart/String.PadEnd, Object.getOwnPropertyDescriptors()</p>
        </div>
    )
}