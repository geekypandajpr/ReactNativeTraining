import React, { Component } from "react";
import Header from "./Header";


export default class Index extends React.Component{
    render(){
        return(
            <Header title={this.props.title} />
        );
    }
}