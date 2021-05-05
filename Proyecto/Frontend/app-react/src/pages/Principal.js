import React, { Component } from 'react';
import Cookie from "universal-cookie";

const cookie = new Cookie();

export default class Principal extends Component {
    render() {
        console.log(cookie.get("nombre"));
        let nombre = cookie.get("nombre");
        return (
            <div>
                Bienvenido {nombre}. Este es el menu principal.
            </div>
        )
    }
}
