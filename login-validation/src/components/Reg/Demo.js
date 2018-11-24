import React, { Component } from 'react';

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });
    }
    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        return (
            <div classname="App">

                    {items.map(item => (
                        <h5 key="{item.id}">
                            Name: {item.name} | Email: {item.email}
                        </h5>
                    ))}
            </div>
        );
    }
}
export default Demo;
