import React, { Component } from 'react'

class AppContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            gender: '',
            age: '',
            characterArray: []

        }
        this.componentDidMount = () => {
            
            this.loadData();
        }


    }
    handleSubmission = async (event) => {
        event.preventDefault()
        let response = await fetch('/api', {
            method: 'post',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/jsom'
            },
            body: JSON.stringify({
                name: this.state.name,
                gender: this.state.gender,
                age: this.state.age
            })

        })
        let json = await response.json();

        console.log(this.state)
    }
    loadData = async () => {
        let response = await fetch('/api')
        console.log(response);
        let json = await response.json();
        // console.table(json)
        this.setState({ CharacterArray: json });
    }

    handleChange = (event) => {
        if (event.target.name == 'name') {
            this.setState({ name: event.target.value })

        } else if (event.target.name == 'gender') {
            this.setState({ gender: event.target.value })
        }
        else if (event.target.name == 'age') {
            this.setState({ age: event.target.value })
        }
    }
    render() {
        return (
            <div>
                <h1>rendered</h1>
                <form action="">
                    <label htmlFor="name">Character Name</label>
                    <input type="text" name='name' nalue={this.state.name} onChange={this.handleChange} />
                    <label htmlFor="gender">Character Gender</label>
                    <input type="text" name=' gender' value={this.state.gender} onChange={this.handleChange} />
                    <label htmlFor="age">Character age</label>
                    <input type="number" name='age' value={this.state.age} onChange={this.handleChange} />
                    <button onClick={this.handleSubmission}>submit</button>
                </form>
                <div>
                    {
                        this.state.CharacterArray.map((character, index) => {
                            return (
                                <div key={character._id}>
                                    {character.name}
                                    <br />
                                    {character.gender}
                                    <br/>
                                    {character.age}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default AppContainer