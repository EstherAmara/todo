import React from 'react';

class AddTask extends React.Component {

    constructor() {
        super();

        this.state = {
            task: null
        }
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state)
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        name="task"
                    />
                    <button> Add task </button>
                </form>
            </div>
        )
    }
}

export default AddTask;