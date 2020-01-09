import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}


