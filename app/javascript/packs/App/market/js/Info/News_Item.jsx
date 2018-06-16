import React from "react";
import {ListGroupItem,} from 'reactstrap';
import moment from 'moment';

class News_Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newsSentimentRetrieved: false,
            errorRetrieving: ''
        }
    }


    render() {
        return (
            <ListGroupItem className="nav-item">

                <a href={this.props.market_news.url} target="_blank">{this.props.market_news.headline}</a>
                <small>- {moment(this.props.market_news.datetime).fromNow()}</small>
                <br/>
                <small>{this.props.market_news.summary}</small>
            </ListGroupItem>
        )
    }
}

export default News_Item
