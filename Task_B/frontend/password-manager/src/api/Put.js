import React, { Component } from 'react'
import axios from 'axios'

class Put extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            id: '',
            pw: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://tanwj.link:8080/api/book/' + this.state.name, this.state)
        .then(res => {
            console.log(res)
        })
    }

    render() {
        const {name, id, pw} = this.state
        return (
            <div>
                <h2>Editing a website</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name of Website: </label>
                        <input type='text' name='name' value={name} onChange= {this.handleChange}></input>
                        <br/>
                        <label>Id: </label>
                        <input type='text' name='id' value={id} onChange= {this.handleChange}></input>
                        <br/>
                        <label>Password </label>
                        <input type='text' name='pw' value={pw} onChange= {this.handleChange}></input>
                        <br/>
                    </div>
                    <div>
                        <button type='submit'>Edit</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default Put