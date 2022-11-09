import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <>
            <Rating value={0}/>
            <Rating value={1}/>
            <Accordion title={'Menu'} collapsed={true}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Rating value={6}/>
            <Accordion title={'Reviews'} collapsed={false}/>
        </>
    );
}

export default App;

