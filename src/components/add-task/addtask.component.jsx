import React from 'react';

import './addtask.styles.css';

class AddTask extends React.Component {

    constructor() {
        super();

        this.state = {
            task: ''
        }
    }
    
    handleChange = e => {
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({task: ''})
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        name="task"
                        value={this.state.task}
                    />
                </form>
            </div>
        )
    }
}

export default AddTask;