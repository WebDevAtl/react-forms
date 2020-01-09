import React, { Component } from 'react'

export default class Dropdown extends Component {
    state = {
        open: false
    }

    drop = () => {
        let previousState = {...this.state}
        previousState.open=!this.state.open
        this.setState({previousState})
    }

    render() {
        return (
            <div>
                {this.state.open? <div style='{margin: 0 auto; border: 1px solid black; border-radius: 5px}' onClick={this.drop}>Fruits</div>:
                <form>
                <select name='fruits' multiple>
                    <option>Apple</option>
                    <option>Bananas</option>
                    <option>Cantaloupe</option>
                    <option>Grapes</option>
                    <option>Lemons</option>
                    <option>Muscadines</option>
                    <option>Pears</option>
                </select>
                </form>
                }
            </div>
        )
    }
}


