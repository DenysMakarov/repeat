import React from 'react';
import MyButton from "./UI/button/MyButton";

const TestForm = () => {
    const getUsers = (e) => {
        e.preventDefault()
        fetch('http://localhost:8080/users', {
            headers : {'Content-Type' : 'application/json'}
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }
    return (
        <form>
            <MyButton type="submit" onClick={getUsers}>Test</MyButton>
        </form>
    );
};

export default TestForm;