import React, { PureComponent } from 'react'

export default class TaskList extends PureComponent {
    render() {
        console.log(`task name ${this.props.data.name}`)
        return (
            <div className='item-container' key={this.props.data.name}>
                <div className={this.props.data.priority === 'high' ? 'red' : (this.props.data.priority === 'medium' ? 'yellow' : 'green')}></div>
                <p>Name Task:</p> <span>{`${this.props.data.name}`}</span> <p>Deadline: </p> <span>{`${this.props.data.date}`}</span>
                <button onClick={() => this.props.deleteItem(this.props.data.name)}>Delete</button>
            </div>

        )
    }
}