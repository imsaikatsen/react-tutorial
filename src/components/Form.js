import React from "react";

export default class Form extends React.Component {

    state = {
        title : 'Javascript',
        textarea : 'Javascript is Awesome',
        library : 'React',
        isAwesome:true,
    };


    handleChange = (e) => {
        if(e.target.type === 'text'){
            this.setState({
                title: e.target.value,
            })
        } else if(e.target.type === 'textarea'){
            this.setState({
                textarea: e.target.value,
            }) 
        }else if(e.target.type === 'select-one'){
            this.setState({
                library: e.target.value,
            }) 
        } else if(e.target.type === 'checkbox'){
            this.setState({
                isAwesome: e.target.checked,
            }) 
        }
        
        else{
            console.log("nothing here")
        }
    }

    submitHandeler = (e) => {
        const { title, textarea, library, isAwesome } = this.state
        e.preventDefault();
        console.log(title, textarea, library, isAwesome)

    }

    render() {
        
    const { title, textarea, library, isAwesome } = this.state
        return(

            <div>
                <form  onSubmit={this.submitHandeler}>
                    <input type="text" placeholder="Enter Title" value={title} onChange={this.handleChange}/>
                    <br />
                    <br />
                    <textarea type="textarea" value={textarea} onChange={this.handleChange}>JavaScript is Awesome</textarea>
                    <br />
                    <br />
                    <select value={library} onChange={this.handleChange} >
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" checked={isAwesome}  onChange={this.handleChange}/>
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}