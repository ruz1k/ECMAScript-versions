import React from "react";

export const ES10 = () => {

    /// Array.flat()
    const arr2 = [1, 2, [3, 4, [5, 6]]];

    console.log('Array.flat(): ',arr2.flat(Infinity));

    /// Array.flatMap()
    const arr = [1, 2, 3, 4];
    const flatMap = arr.flatMap(x => [x*2])
    const simpleMap = arr.map(x => [x*2])
    console.log('Array.flatMap(): ', flatMap)
    console.log('Same with simple Array.map(): ', simpleMap)

    /// Object.fromEntries()
    const entries = new Map([
        ['foo', 'bar'],
        ['baz', 42]
    ]);

    const obj = Object.fromEntries(entries);

    console.log('Object.fromEntries(): ', obj);

    return (
        <div style={{display: 'flex'}}>
            <p>ES10:</p>
            <p>Array.flat(), Array.flatMap(), Object.fromEntries()</p>
        </div>
    )
}