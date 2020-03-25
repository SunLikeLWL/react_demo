import React from 'react';



class MyTitle extends React.Component {
    constructor(props) {
        super()
        console.log(props)
        this.sayHello = this.sayHello.bind(this);
        this.getData = this.getData.bind(this);
        this.list = [3, 12, 312, 3123, 123]
    }

    componentDidMount() {
        this.getData();
    }

    sayHello = (id) => {
        console.log("nimei:" + id)
    }

    getData() {
        
    }



    render() {
        return (
            <div>
                <h1>Hello,{this.props.title}</h1>
                <button onClick={this.sayHello.bind(this, 1)}>onClick</button>
                <ul>
                    {
                        this.list.map(function (item) {
                            return (<li key={item}>{item}</li>)
                        })
                    }

                </ul>
            </div >
        )
    }
}
export default MyTitle;



