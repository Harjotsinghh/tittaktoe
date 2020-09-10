import React from 'react'
import Square from './Square'

export default class Board extends React.Component{
  
   changevalue=(i)=>{
       return(
           <Square value={this.props.square[i]} clicked={()=>this.props.onclick(i)}/>
       )
   }

    render(){
    return (
     <div className='board'>
        <div className=" frow">
         {this.changevalue(0)}
         {this.changevalue(1)}
         {this.changevalue(2)}
        </div>   
        <div className=" srow">
        {this.changevalue(3)}
        {this.changevalue(4)}
        {this.changevalue(5)}
    
        </div>   
        <div className=" lrow">
        {this.changevalue(6)}
        {this.changevalue(7)}
        {this.changevalue(8)}

        </div>  
     </div> 

    )
    }
}