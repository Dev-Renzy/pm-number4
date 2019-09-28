import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            fname: " ", lname: " ", add: " ", email: " ", pnum: 0
        }
    }

    firstname(e){
        e.preventDefault();
        this.setState({fname: e.target.value})
    }

    lastname(e){
        e.preventDefault();
        this.setState({lname: e.target.value})
    }

    address(e){
        e.preventDefault();
        this.setState({add: e.target.value})
    }

    mail(e){
        e.preventDefault();
        this.setState({email: e.target.value})
    }

    number(e){
        e.preventDefault();
        this.setState({pnum: Number(e.target.value)})
    }

    btn(e){
        e.preventDefault();
        if(this.state.fname === " " ){
            alert("You must input your first name" );
        }
        else if(this.state.lname === " "){
            alert("You must input your last name");
        }
        else if(this.state.add === " "){
            alert("You must input your Address");
        }
        else if(this.state.email === " " ){
            alert("You must input your email");
        }
        else if(this.state.pnum === 0 ){
            alert("You must input you phone number");
        }else{
            alert("Successfully registered");
        }
    }

    render(){
        return(
            <div>
                <form>
                    <div>
                        <input type ="text" placeholder ="Firstname" onChange={(e) => this.firstname(e)}/>
                    </div>
                    <div>
                        <input type ="text" placeholder ="Lastname" onChange={(e) => this.lastname(e)}/>
                    </div>
                    <div>
                        <input type ="text" placeholder ="Address" onChange={(e) => this.address(e)}/>
                    </div>
                    <div>
                        <input type ="email" placeholder ="yourname@email.com" onChange={(e) => this.mail(e)}/>
                    </div>
                    <div>
                        <input type ="number" placeholder ="Phone number" onChange={(e) => this.number(e)}/>
                    </div>
                    <div>
                        <button onClick={(e) => this.btn(e)}>Register</button>
                        </div>
                </form>
            </div>
        )
    }
}

export default Form;