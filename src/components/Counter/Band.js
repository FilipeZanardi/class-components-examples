import React, { Component } from 'react'

export default class Band extends Component {
    constructor(){
        super()

        this.state = {
            bandName: 'Avenged Sevenfold',

            bandMembers:[
                {
                id: 1,
                name: 'M. Shadows',
                instrument: "Vocal",           
               },         
               {
                id: 2,
                name: 'Synyster Gates',
                instrument: "Guitar",           
               },    
               {
                id: 3,
                name: 'Zacky',
                instrument: "Guitar",           
               },     
               {
                id: 4,
                name: 'The Rev',
                instrument: "Drums",           
               },             
            ]
        }
    }
    render() {
        const { bandName, bandMembers} = this.state

        return (
            <div>
            <h4>{bandName}</h4>
            <ul>

            {bandMembers.map(({ id, name, instrument}) => {
                return (
                <li key={id}>
                    {name} - {instrument}
                </li>
                )      
            })}
            </ul>
            </div>
        )
    }
}
