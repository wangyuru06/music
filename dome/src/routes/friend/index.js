import React from "react"

class VideoPage extends React.PureComponent{
    render(){
        return<div>
            {this.props.match.path}
        </div>
    }
}

export default VideoPage