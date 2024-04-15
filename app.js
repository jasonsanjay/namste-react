import React, { Component } from "react";
import  ReactDOM  from "react-dom/client";

const heading= React.createElement('h1',{id:'heading'},'Namste react');

// using jsx

const jsxHeading = (<h1 id="heading">namste react in JSX</h1>)

const root = ReactDOM.createRoot(document.getElementById('root'));


// functional Component

// const Heading = () => {
//     return <h1>this is functional compoennt</h1>
// }

// const Heading1 = () => <h1>this is a functional compoentn</h1>

// const Heading2 = () => (
//     <h1 className="heading">This is also a functional component</h1>
// )

const Title = () =>(
    <h1>this is title functional compoentn</h1>
)

const elem = <h1>this is react element</h1>

const number= 1000
const Heading = () => {
 return   (
    <div className="container">
        {number}
        {elem}
        <Title/>
        <Title></Title>
        {Title()}
        <h1>this is functional compoentn11</h1>
    </div>
)
}
root.render(<Heading/>);
