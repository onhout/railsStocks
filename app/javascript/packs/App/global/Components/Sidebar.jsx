import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {market: ""}
    }

    getNavItems() {
        if (!this.props.company) {
            return;
        }
        return (
            <div>
                <li className="nav-item">
                    Symbol -
                    <br/>
                    <small>
                        {this.props.company["symbol"]}
                    </small>
                </li>
                <hr/>
                <li className="nav-item">
                    Company Name -
                    <br/>
                    <small>
                        {this.props.company["companyName"]}
                    </small>
                </li>
                <hr/>
                <li className="nav-item">
                    Description -
                    <br/>
                    <small>
                        {this.props.company["description"]}
                    </small>
                </li>
                <hr/>
                <li className="nav-item">
                    Exchange -
                    <br/>
                    <small>
                        {this.props.company["exchange"]}
                    </small>
                </li>
                <hr/>
                <li className="nav-item">
                    Industry -
                    <br/>
                    <small>
                        {this.props.company["industry"]}
                    </small>
                </li>
                <hr/>
                <li className="nav-item">
                    Issue Type -
                    <br/>
                    <small>
                        {this.props.company["issueType"]}
                    </small>
                </li>
                <hr/>
                <li className="nav-item">
                    Sector -
                    <br/>
                    <small>
                        {this.props.company["sector"]}
                    </small>
                </li>
                <hr/>
                <li className="nav-item">
                    CEO -
                    <br/>
                    <small>
                        {this.props.company["CEO"]}
                    </small>
                </li>
                <hr/>
                <li className="nav-item">
                    Website -
                    <br/>
                    <small>
                        <a href={this.props.company["website"]}>{this.props.company["website"]}</a>
                    </small>
                </li>
                <hr/>
            </div>
        )
    }

    render() {
        return (
            <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
                <ul className="nav nav-pills flex-column">
                    {this.getNavItems()}
                </ul>
            </nav>
        )
    }
}

export default Sidebar