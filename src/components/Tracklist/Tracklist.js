import React from 'react'
import './Tracklist.css'
import {Track} from '../Track/Track'

export class Tracklist extends React.Component{
    
  
    render(){
        //console.log(this.props.tracks)
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track=>{
                        return <Track track={track} key={track.id} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval} onRemove={this.props.onRemove}/>
                    })
                }
               
            </div>
        )
    }
}
//comment