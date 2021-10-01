import React, { Component } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

class Delete extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.delete('http://tanwj.link:8080/api/book/' + this.state.name)
        .then(res => {
            console.log(res)
        })
    }

    render() {
        const {name} = this.state
        return (
            <div>
                <h2>Delete a website</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name of Website: </label>
                        <input type='text' name='name' value={name} onChange= {this.handleChange}></input>
                        <br/><br/><br/>
                    </div>
                    <div>
                        <Button type='submit'>Delete</Button>
                    </div>
                </form>
            </div>
        )
    }

}

export default Delete