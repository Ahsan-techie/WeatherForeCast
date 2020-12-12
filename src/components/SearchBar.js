import React, { Component } from 'react'
import {connect} from "react-redux"
import {FetchWeather} from '../actions'

class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             term:''
        }
    }
    onInputChange=event=>{
        this.setState({term:event.target.value})
      
    }
    onInputSubmit =(event)=>{
        event.preventDefault()
        this.props.FetchWeather(this.state.term)
        this.setState({term:""})
    }
    
    render() {

        return (
            
             <form style={{margin:'15px 30px 10px 30px'}} onSubmit={this.onInputSubmit} className="input-group">
                 <input
                   placeholder="Search a City"
                   className="form-control"
                   value = {this.state.term}
                   onChange={this.onInputChange}

                  />
                 <span className="input-group-btn">
                     <button  type="submit" className="btn btn-secondary">Submit</button>
                 </span>
             </form>
                
            
        )
    }
}
 

export default connect(null,{
    FetchWeather
})(SearchBar)
