import React from "react";
class AboutClass extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render(){
        const {name,adress} = this.props;
        return (
            <div className="about">
                <h1>AboutClass</h1>
            </div>
        )
    }
}

export default AboutClass;