import { Component } from "react"
import ReactDom from "react-dom"

class Portal extends Component{
    el = document.createElement('div');

    componentDidMount() {
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removendChild(this.el);
    }
}