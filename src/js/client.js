import React from "react";
import ReactDom from "react-dom";

class Layout extends React.component {
    render() {
        return (
            <h1>It works!</h1>
        );
    }
}

const app = document.getElementById('app');
ReactDom.render(<Layout/>, app);
