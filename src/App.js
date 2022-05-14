import {useState} from "react";
import {ES6,ES7,ES8,ES9,ES10,ES11,ES12} from "./ecma-script-versions";
import './App.css';

const App = () => {
    const [activeVersion, setActiveVersion] = useState('ES6')
    const [es6Mode, setEs6Mode] = useState(true);
    const [es7Mode, setEs7Mode] = useState(false);
    const [es8Mode, setEs8Mode] = useState(false);
    const [es9Mode, setEs9Mode] = useState(false);
    const [es10Mode, setEs10Mode] = useState(false);
    const [es11Mode, setEs11Mode] = useState(false);
    const [es12Mode, setEs12Mode] = useState(false);


    const handleEs6 = () => {
        setActiveVersion('ES6')
        setEs6Mode(true);
        setEs7Mode(false);
        setEs8Mode(false);
        setEs9Mode(false);
        setEs10Mode(false);
        setEs11Mode(false);
        setEs12Mode(false);
    }

    const handleEs7 = () => {
        setActiveVersion('ES7')
        setEs6Mode(false);
        setEs7Mode(true);
        setEs8Mode(false);
        setEs9Mode(false);
        setEs10Mode(false);
        setEs11Mode(false);
        setEs12Mode(false);
    }

    const handleEs8 = () => {
        setActiveVersion('ES8')
        setEs6Mode(false);
        setEs7Mode(false);
        setEs8Mode(true);
        setEs9Mode(false);
        setEs10Mode(false);
        setEs11Mode(false);
        setEs12Mode(false);
    }


    const handleEs9 = () => {
        setActiveVersion('ES9')
        setEs6Mode(false);
        setEs7Mode(false);
        setEs8Mode(false);
        setEs9Mode(true);
        setEs10Mode(false);
        setEs11Mode(false);
        setEs12Mode(false);
    }

    const handleEs10 = () => {
        setActiveVersion('ES10')
        setEs6Mode(false);
        setEs7Mode(false);
        setEs8Mode(false);
        setEs9Mode(false);
        setEs10Mode(true);
        setEs11Mode(false);
        setEs12Mode(false);
    }

    const handleEs11 = () => {
        setActiveVersion('ES11')
        setEs6Mode(false);
        setEs7Mode(false);
        setEs8Mode(false);
        setEs9Mode(false);
        setEs10Mode(false);
        setEs11Mode(true);
        setEs12Mode(false);
    }


    const handleEs12 = () => {
        setActiveVersion('ES12')
        setEs6Mode(false);
        setEs7Mode(false);
        setEs8Mode(false);
        setEs9Mode(false);
        setEs10Mode(false);
        setEs11Mode(false);
        setEs12Mode(true);
    }

    return (
        <div className="App">
            <h1>
                ECMAScript version: {activeVersion}
            </h1>
            <button onClick={handleEs6}>ES6</button>
            <button onClick={handleEs7}>ES7</button>
            <button onClick={handleEs8}>ES8</button>
            <button onClick={handleEs9}>ES9</button>
            <button onClick={handleEs10}>ES10</button>
            <button onClick={handleEs11}>ES11</button>
            <button onClick={handleEs12}>ES12</button>
            {es6Mode && <ES6 />}
            {es7Mode && <ES7 />}
            {es8Mode && <ES8 />}
            {es9Mode && <ES9 />}
            {es10Mode && <ES10 />}
            {es11Mode && <ES11 />}
            {es12Mode && <ES12 />}
        </div>
  );
}

export default App;
