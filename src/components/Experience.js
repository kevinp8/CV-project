import React, { Component } from 'react'
import View from './View'

class Experience extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            editMode: true,
            company: '',
            position: '',
            tasks: '',
            date: '',
            dateEnd: ''
        }
        this.save = this.save.bind(this)
        this.edit = this.edit.bind(this)
    }

    save() {
        this.setState({
            company: document.querySelector('.name').value,
            position: document.querySelector('.position').value,
            tasks: document.querySelector('.tasks').value,
            date: document.querySelector('.date').value,
            dateEnd: document.querySelector('.dateEnd').value,
            editMode: false
        })
        
    }

    edit() {
        this.setState({
            editMode: true
        })
    }

    render() {
        if (this.state.editMode) {
            return (
                <form onSubmit={this.save}>
                    <h1>Education</h1>

                    <div>
                        <label>Company: </label>
                        <input type='textbox' className='name' defaultValue={this.state.company}/>
                    </div>

                    <div>
                        <label>Position: </label>
                        <input type='text' className='position' defaultValue={this.state.position}/>
                    </div>

                    <div>
                        <label>Tasks: </label>
                        <textarea className='tasks' defaultValue={this.state.tasks}/>
                    </div>

                    <div>
                        <label>Date: </label>
                        <input type='date' className='date' defaultValue={this.state.date}/>
                        <input type='date' className='dateEnd' defaultValue={this.state.dateEnd}/>
                    </div>

                    <div>
                        <button type='submit'>Save</button>
                    </div>

                </form>
            )
        } else return (
            <div>
                <h1>Education</h1>
                <View info={[this.state.company, this.state.position, this.state.tasks, this.state.date, this.state.dateEnd ]} view={this.edit}/>
            </div>
        )
        
    }
}

export default Experience