import React from "react";

const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>{props.greeting} {props.name}!</h1>;
};

export default FunctionalGreetingWithProps;