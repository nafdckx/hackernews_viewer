import React, { Component } from 'react'; 

class Row extends Component
{
    render(){
        
        const {listItem} = this.props;

        console.log("in row" + this.props);
    
        return (      
        <tr>
            <th>{listItem.title}</th>
            <th>{listItem.author}</th>
        </tr>
    
        )
    };
}

export default Row;