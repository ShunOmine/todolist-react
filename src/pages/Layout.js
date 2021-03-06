import React from "react";
import { withRouter } from "react-router-dom";

import Footer from "../components/Footer"
import Nav from "../components/Nav"

class Layout extends  React.Component{
    render(){
        const { location } = this.props;
        const containerStyle = {
            marginTop: "60px"
        };
        return(
            <div>
                <Nav location={location}/>
                <div className="container" style={containerStyle}>
                    <div className="row">
                        <div className="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}
export default withRouter(Layout);