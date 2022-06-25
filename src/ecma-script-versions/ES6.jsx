import React from "react";

export const ES6 = () => {
  /// Symbol iterator
  let range = {
    from: 1,
    to: 5,
  };
  range[Symbol.iterator] = function () {
    let current = this.from;
    let last = this.to;
    return {
      next() {
        if (current <= last) {
          return {
            done: false,
            value: current++,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  };

  for (let num of range) {
    console.log(num);
  }

  /// Symbol iterator async
  const asyncIterator = {
    from: 1,
    to: 5,
    [Symbol.asyncIterator]() {
      return {
        current: this.from,
        last: this.to,

        async next() {
          await new Promise((resolve) => setTimeout(resolve, 1000));

          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        },
      };
    },
  };

  (async () => {
    for await (let value of asyncIterator) {
      console.log("asyncIterator value: ", value);
    }
  })();

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
  console.log("Generator", generator1, generator2, generator3);

  return (
    <div style={{ display: "flex" }}>
      <p>ES6:</p>
      <p>Generator</p>
    </div>
  );
};
