import React, { Component } from 'react'

export default class Checkbox extends Component {
    render() {
        return (
            <label>
                Received?
                <input type="checkbox" name="received" id="received"/>
            </label>
        )
    }
}
