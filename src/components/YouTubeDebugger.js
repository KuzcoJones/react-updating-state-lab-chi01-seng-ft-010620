// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends React.Component {
    constructor(){
        super()
        this.state = {
            errors: [], 
            user: null, 
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

        handleClick = () => {
            this.setState({
                settings: {
                    ...this.state.settings,
                    video: {
                    ...this.state.settings.video, resolution: '720p'
                    }
                }
            })
        }

        handleBitrate = () => {
            this.setState({
                settings: {
                    ...this.state.settings, bitrate: 12
                }
            })
        }

    render(){
        return(
            <div>
               <button className='resolution' onClick={this.handleClick}> {this.state.settings.video.resolution}
               </button>

               <button onClick={this.handleBitrate}className='bitrate'>{this.state.settings.bitrate}</button>
            </div>
        )
    }

}

export default YouTubeDebugger
