import React, { Component } from 'react'; 
import Row from './Row';

class Table extends Component
{
render(){

const {list} = this.props;    

return (
    <React.Fragment>
    <table>
        <tbody>
            {
                list.map(item => <Row listItem={item}/>)
            }
        </tbody>
    </table>
    </React.Fragment>
)
};
}

export default Table;