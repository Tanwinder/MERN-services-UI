import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Posts extends Component {
    render() {
        return (
            <div>
                Hello Posts
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
