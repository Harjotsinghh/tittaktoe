import React from 'react'
import Board from './Board'

export default class Game extends React.Component
{
    constructor(props){
        super(props)

        this.state={
            flag:true,
            count:0,
            previous:[
                {boxes:Array(9).fill(null)}
            ],

        }
     

    }

    handleclick=(i)=>{
        const temp=this.state.previous
        const arr=temp[temp.length-1].boxes
       if(arr[i])
         return
        arr[i]=(this.state.flag)?'X':'O'
        this.setState({
            temp: temp.concat({
                boxes:arr
            }),
            flag : !this.state.flag,
           count: temp.length,
        })
        const winner=iswinner(arr)
        if( winner)
         {
            
            this.setState({
                previous: [{boxes:Array(9).fill(null)}] 
            })
            alert("Player "+winner+" Wins")
             return
         }
         
         let check=checkk(arr)
         if(check)
         {
             
             this.setState({
                previous: [{boxes:Array(9).fill(null)}] 
            })
            alert("Game ties")
             return
         }
         
        // this.setState({
        //     temp: temp.concat({
        //         boxes:arr
        //     }),
        //     flag : !this.state.flag,
        //    count: temp.length,
        // })
       
    }
    render(){
        const temp =this.state.previous
    
    return(
        <Board onclick={(i)=>this.handleclick(i)} square={temp[temp.length-1].boxes} />
    )
    
    }

}
function checkk(arr)
{
    for(let i=0;i<9;i++)
    {
        if(arr[i]==null)
         return false
    }
    return true
}
function iswinner(arr)
{
    const possibilities=[
     [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ]

    for(let i=0;i<possibilities.length;i++)
    {
        const [a,b,c]=possibilities[i]
        if(arr[a]&&arr[a]===arr[b]&&arr[b]===arr[c])
        {
            return arr[a]
        }
    }
    return null
}