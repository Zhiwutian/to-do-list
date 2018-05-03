import React from "react";

export default props => {
    if(!props.data.length) {
        return <h1 className="center grey-text text-lighten-2">No current to do items</h1>
    }
    console.log("List Data:", props.data);

    const listElements = props.data.map((item, index) => {
        return <li  key={index} className="collection-item">{item.title} </li>
    });

    return (

            <ul className="collection">
                { listElements }
            </ul>

    )
}

