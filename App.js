import React from 'react'

const parent = React.createElement('h1', { id: "parent" }, 
[React.createElement('h3', { id: "child" }, "hello I m react child"),
React.createElement('h4', {id: "child2"}, "hello i m brother")
]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
// react Dom acts as bridge for react nd Dom
root.render(parent);
// ReactDOM.render(heading, document.getElementById('root'))
// making react elements in js is so cumbersome thus we use jsx