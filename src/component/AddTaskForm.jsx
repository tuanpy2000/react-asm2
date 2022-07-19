import React, { Component } from 'react'

export default class AddTaskForm extends Component {
    render() {
        return (

            <div className='form-container'>
                <h1>New Task</h1>
                <div className='form-input'>
                    <div className='form-text'>
                        <label>Name</label>
                        <input className='name' onChange={this.props.taskName}>
                        </input>
                    </div>
                    <div className='form-date'>
                        <label>Deadline</label>
                        <input type='date' className='date' onChange={this.props.taskDeadline}>
                        </input>
                    </div>
                </div>
                <div className='form-check'>
                    <div className='check-list'>
                        <label>Priority:</label>
                        <div>
                            <input type='radio' name='priority-check' id='high-check' onChange={this.props.taskPriority} value='high'></input>
                            <label>High</label>
                        </div>
                        <div>
                            <input type='radio' name='priority-check' id='medium-check' onChange={this.props.taskPriority} value='medium'></input>
                            <label>Medium</label>
                        </div>
                        <div>
                            <input type='radio' name='priority-check' id='low-check' onChange={this.props.taskPriority} value='low'></input>
                            <label>Low</label>
                        </div>
                    </div>
                    <button onClick={this.props.onSubmit}>Submit
                    </button>
                </div>
            </div>

        )
    }
}