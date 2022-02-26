import React from "react"




class Logout extends React.Component {
    constructor(props){
        super(props)
    }
    
    
    render(props){
        
        return(
            <div>
                <form className="formLogout" action="/logout" method="POST">
            <h3>¿estas seguro que quieres salir?</h3>
            <button  className="btn btn-primary btnYes" type="submit">SI</button>
            <form className="formButton" action="/movies">
                <button className="btn btn-primary btnNo" type="submit">NO</button>
            </form>
        </form>
                 
            </div>
        )
    }
}
export default Logout;