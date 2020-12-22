import React from 'react'

export default class App extends React.Component {

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => data)
    }

    render(){
        return (
            <h1>data</h1>
        )
    }

}