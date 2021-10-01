import React, { Component } from 'react'
import axios from 'axios'

class GetList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }

    componentDidMount() {
        axios.get('http://tanwj.link:8080/api/book')
        .then(res => {
            this.setState({
                list: res.data.data
            })
            console.log(res.data.data); 
        })
    }

    render() {
        const {list} = this.state
        return (
            <div>
                <h1>List of Password:</h1><hr></hr>{
                    list.map(post => <div key={post.name}>{post.name}<br/>{post.id}<br/> {post.pw} <br/><br/></div>)
                }
            </div>
        )
    }
}

export default GetList