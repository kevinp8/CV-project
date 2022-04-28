import React, { Component } from 'react'
import View from './View'

class General extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            editMode: true,
            name: '',
            email: '',
            number: '',
        }
        this.save = this.save.bind(this)
        this.edit = this.edit.bind(this)
    }

    save() {
        this.setState({
            name: document.querySelector('.name').value,
            email: document.querySelector('.email').value,
            number: document.querySelector('.number').value,
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
                    <label>Name: </label>
                    <input type='text' className='name' defaultValue={this.state.name}/>

                    <label>Email: </label>
                    <input type='text' className='email' defaultValue={this.state.email}/>

                    <label>Number: </label>
                    <input type='text' className='number' defaultValue={this.state.number}/>

                    <div>
                        <button type='submit'>Save</button>
                    </div>

                </form>
            )
        } else return (
        <View info={[this.state.name, this.state.email, this.state.number]} view={this.edit}/>
        )
        
    }
}

export default General