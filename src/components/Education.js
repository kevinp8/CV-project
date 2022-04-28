import React, { Component } from 'react'
import View from './View'

class Education extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            editMode: true,
            name: '',
            'Title of Study': '',
            'Date of Study': '',
        }
        this.save = this.save.bind(this)
        this.edit = this.edit.bind(this)
    }

    save() {
        this.setState({
            name: document.querySelector('.name').value,
            'Title of Study': document.querySelector('.title').value,
            'Date of Study': document.querySelector('.date').value,
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
                        <label>School Name: </label>
                        <input type='text' className='name' defaultValue={this.state.name}/>
                    </div>

                    <div>
                        <label>Title of Study: </label>
                        <input type='text' className='title' defaultValue={this.state['Title of Study']}/>
                    </div>

                    <div>
                        <label>Date of Study: </label>
                        <input type='text' className='date' defaultValue={this.state['Date of Study']}/>
                    </div>

                    <div>
                        <button type='submit'>Save</button>
                    </div>

                </form>
            )
        } else return (
            <div>
                <h1>Education</h1>
                <View info={[this.state.name, this.state['Title of Study'], this.state['Date of Study']]} view={this.edit}/>
            </div>
        )
        
    }
}

export default Education