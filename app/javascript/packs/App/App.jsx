import React from "react";
import SearchBar from './global/Components/SearchBar';
import ChartComponent from './market/js/Chart/ChartComponent';
import Header from './market/js/Info/Header';
import Fundamentals from './market/js/Info/Fundamentals';
import News from './market/js/Info/News';
import Sidebar from './global/Components/Sidebar';
import {Container, Row} from 'reactstrap';
import {getCompanyInfo, getMarketNews, getStockData, getStockFundamentals} from "./global/Utils/utils";

require("./global/index.scss");

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.stockLookup = this.stockLookup.bind(this);
        this.state = {
            market: "AAPL",
            timeframe: "5min"
        };
    }

    componentDidMount() {
        this.stockLookup(13, "AAPL", "5min");
    }

    stockLookup(market_id, market, timeframe) {
        this.setState({market, timeframe});
        getStockData(market_id, timeframe).then(market_data => {
            this.setState({market_data})
        });
        getStockFundamentals(market).then(fundamentals => {
            this.setState({fundamentals})
        });
        getCompanyInfo(market).then(company => {
            this.setState({company})
        });
        getMarketNews(market).then(market_news => {
            this.setState({market_news})
        });
    }

    render() {
        return (
            <Container fluid>
                <Sidebar company={this.state.company}/>
                <div className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                    <Row>
                        <div className="col-md-12">
                            <SearchBar
                                onStockSymbolChange={(stock_id, market, timeframe) => this.stockLookup(stock_id, market, timeframe)}/>
                            <hr/>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-md-8">
                            <Header marketname={this.state.market} timeframe={this.state.timeframe}/>
                            <ChartComponent market_data={this.state.market_data}/>
                            <hr/>
                            <Fundamentals fundamentals={this.state.fundamentals}/>
                        </div>
                        <div className="col-md-4">
                            <News market_news={this.state.market_news}/>
                        </div>
                    </Row>
                </div>
            </Container>
        )
    }
}

export default Root