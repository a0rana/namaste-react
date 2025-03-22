import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        console.log(props.name + " constructor called");
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        console.log(this.props.name + " render called");
        const {name, location} = this.props;
        return (
            <div className="UserClass">
                <h3>Count: {this.state.count}</h3>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    });
                }}>Increase Count
                </button>
                <h4>Name: {name}</h4>
                <h4>Location: {location}</h4>
            </div>
        );
    }

    componentDidMount() {
        /*        this.timer = setInterval(() => {
                    console.log("calling interval");
                }, 1000);*/
        console.log(this.props.name + " componentDidMount called");
    }

    componentDidUpdate() {
        console.log(this.props.name + " componentDidUpdate called");
    }

    componentWillUnmount() {
        //clearInterval(this.timer);
        console.log(this.props.name + " componentWillUnmount called");
    }
}

export default UserClass;