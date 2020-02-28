import React from "react"
import { connect } from "react-redux"
import ProfileUser from "../containers/ProfileUser"

class Profile extends React.Component{
    constructor(props){
        super(props)
    }
    render(props){
        return(
            <div>
                <ProfileUser/>}
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        favoriteMovie: state.favoriteMovie
    };
}
export default connect(mapStateToProps)(Profile);