import React, { Component } from "react";
import MainBody from "./MainBody";

class Header extends Component{
    constructor(props){
        super(props)
        this.state = { 
            count: 0, 
            theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light",
            name: ""
        }
    }
    render(){
        const { linkText, linkUrl } = this.props
        const name = this.state.name
        return(
            <header >
                <h1>THIS IS THE HEADER</h1>
                <MainBody />
            </header>
        )
    }
}

export default Header