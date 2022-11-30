import React from "react";

export default function Header(props:any) {
    return (
        <header className="header">
            <h2>{props.title}</h2>
        </header>
    )
}