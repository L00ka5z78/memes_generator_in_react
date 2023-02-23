import React, { Component } from "react";
import { connect } from 'react-redux'


export class NewComp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: "buy me a cookie"
        }
    }

}