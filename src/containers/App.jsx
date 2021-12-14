import React, { Component } from "react";
import CardList from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import loading from '../load.svg'
import './App.css'
import ErrorBoundary from "../components/ErrorBoundary";
import Scroll from "../components/Scroll";
class App extends Component {
    constructor (){
        super();
        this.state = {
            robots:[],
            searchField:''
        }
        
    }

    onSearchChange = (event)=> {
        
        this.setState({searchField:event.target.value})

    }

    componentDidMount(){
         fetch('https://jsonplaceholder.typicode.com/users')
            .then( data => data.json())
            .then( users => {
                if(users.length >0){
                    this.setState({robots:users})
                }
            })
    }

    render(){
        const filteredRobots = this.state.robots.filter( robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLocaleLowerCase())
        })
 
        return (

            <div className="tc">
                <h1 className="header-title f1">RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                {
                    filteredRobots.length<1
                    ?
                    <img className="loading" src={loading} alt="loading"/>
                    :
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                  
                    </Scroll>

                }
            </div>
        )
    }
} 


export default App;