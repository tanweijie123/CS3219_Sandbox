import React, { Component } from 'react'
import axios from 'axios'
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css'

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
                <h1>List of Password:</h1><hr></hr>
                <div className="d-flex flex-wrap">
                {
                    list.map(post => 
                        <div key={post.name}>
                            <Card style={{width: '18rem '}}>
                                <Card.Body>
                                    <Card.Title>{post.name}</Card.Title>
                                    <Card.Text> {post.id}<br/> {post.pw} <br/> </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>)
                }
                </div>
            </div>
        )
    }
}

export default GetList