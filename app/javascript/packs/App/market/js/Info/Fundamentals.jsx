import React from "react";
import {Badge, Card, CardSubtitle, CardTitle, ListGroup, ListGroupItem, Row} from 'reactstrap';
import numeral from 'numeral';

class Fundamentals extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.fundamentals == null) {
            return (
                <div> Loading fundamentals ... </div>
            )
        } else {
            return (
                <Row>
                    <Card body>
                        <CardTitle>{this.props.fundamentals.companyName} Fundamentals</CardTitle>
                        <CardSubtitle>
                            <small></small>
                        </CardSubtitle>

                        <ListGroup>
                            <Row>
                                <div className="col-md-6">

                                    <ListGroupItem>Cash <span className="float-right"> <Badge
                                        color="dark">{numeral(this.props.fundamentals.cash).format('$0.000a')}</Badge>
                                    </span>
                                    </ListGroupItem>
                                    <ListGroupItem>Debt <span className="float-right"> <Badge
                                        color="dark">{numeral(this.props.fundamentals.debt).format('$0.000a')}</Badge>
                                    </span>
                                    </ListGroupItem>
                                    <ListGroupItem>Gross Profit <span className="float-right"> <Badge
                                        color="dark">{numeral(this.props.fundamentals.grossProfit).format('$0.000a')}</Badge>
                                    </span>
                                    </ListGroupItem>
                                    <ListGroupItem>Revenue <span className="float-right"> <Badge
                                        color="dark">{numeral(this.props.fundamentals.revenue).format('$0.000a')}</Badge>
                                    </span>
                                    </ListGroupItem>
                                    <ListGroupItem>Market Cap <span className="float-right"> <Badge
                                        color="dark">{numeral(this.props.fundamentals.marketcap).format('$0.000a')}</Badge>
                                    </span>
                                    </ListGroupItem>
                                </div>
                                <div className="col-md-6">
                                    <ListGroupItem>Dividend Yield <span
                                        className="float-right"><Badge
                                        color="dark">{numeral(this.props.fundamentals.dividendYield).format('(0.00)')}</Badge></span></ListGroupItem>
                                    <ListGroupItem>Shares Outstanding<span
                                        className="float-right"><Badge
                                        color="dark">{numeral(this.props.fundamentals.sharesOutstanding).format('0.000a')}</Badge></span></ListGroupItem>
                                    <ListGroupItem>Institution Percent <span
                                        className="float-right"><Badge
                                        color="dark">{numeral(this.props.fundamentals.institutionPercent * 0.01).format('0.00%')}</Badge></span></ListGroupItem>
                                    <ListGroupItem>PE Ratio High <span
                                        className="float-right"><Badge
                                        color="dark">{numeral(this.props.fundamentals.peRatioHigh).format('0.00')}</Badge></span></ListGroupItem>
                                    <ListGroupItem>PE Ratio Low <span
                                        className="float-right"><Badge
                                        color="dark">{numeral(this.props.fundamentals.peRatioLow).format('0.00')}</Badge></span></ListGroupItem>
                                </div>
                            </Row>
                            <hr/>
                            <Row>
                                <div className="col-md-6">
                                    <ListGroupItem>High 52 Weeks <span
                                        className="float-right"><Badge
                                        color="dark">{numeral(this.props.fundamentals.week52high).format('$0.00')}</Badge></span></ListGroupItem>
                                    <ListGroupItem>Low 52 Weeks <span
                                        className="float-right"><Badge
                                        color="dark">{numeral(this.props.fundamentals.week52low).format('$0.00')}</Badge></span></ListGroupItem>
                                    <ListGroupItem>52 Weeks Changes<span
                                        className="float-right"><Badge
                                        color={this.props.fundamentals.week52change.toFixed(2) > 0 ? "success" : "danger"}>{numeral(this.props.fundamentals.week52change).format('$0.00')}</Badge></span></ListGroupItem>
                                </div>
                                <div className="col-md-6">
                                    <ListGroupItem>5 Day Change <span
                                        className="float-right"><Badge
                                        color={this.props.fundamentals.day5ChangePercent.toFixed(2) > 0 ? "success" : "danger"}>{numeral(this.props.fundamentals.day5ChangePercent).format('0.00%')}</Badge></span></ListGroupItem>
                                    <ListGroupItem>30 Day Change<span
                                        className="float-right"><Badge
                                        color={this.props.fundamentals.day30ChangePercent.toFixed(2) > 0 ? "success" : "danger"}>{numeral(this.props.fundamentals.day30ChangePercent).format('0.00%')}</Badge></span></ListGroupItem>
                                    <ListGroupItem>Year to Date Change<span
                                        className="float-right"><Badge
                                        color={this.props.fundamentals.ytdChangePercent.toFixed(2) > 0 ? "success" : "danger"}>{numeral(this.props.fundamentals.ytdChangePercent).format('0.00%')}</Badge></span></ListGroupItem>
                                </div>
                            </Row>
                            <hr/>
                            <Row>
                                <div className="col-md-6">
                                    <ListGroupItem>1 Month Change<span
                                        className="float-right"><Badge
                                        color={this.props.fundamentals.month1ChangePercent.toFixed(2) > 0 ? "success" : "danger"}>{numeral(this.props.fundamentals.month1ChangePercent).format('0.00%')}</Badge></span></ListGroupItem>
                                    <ListGroupItem>3 Months Change<span
                                        className="float-right"><Badge
                                        color={this.props.fundamentals.month3ChangePercent.toFixed(2) > 0 ? "success" : "danger"}>{numeral(this.props.fundamentals.month3ChangePercent).format('0.00%')}</Badge></span></ListGroupItem>
                                    <ListGroupItem>6 Months Change<span
                                        className="float-right"><Badge
                                        color={this.props.fundamentals.month6ChangePercent.toFixed(2) > 0 ? "success" : "danger"}>{numeral(this.props.fundamentals.month6ChangePercent).format('0.00%')}</Badge></span></ListGroupItem>
                                </div>
                                <div className="col-md-6">
                                    <ListGroupItem>1 Year Change <span
                                        className="float-right"><Badge
                                        color={this.props.fundamentals.year1ChangePercent.toFixed(2) > 0 ? "success" : "danger"}>{numeral(this.props.fundamentals.year1ChangePercent).format('0.00%')}</Badge></span></ListGroupItem>
                                    <ListGroupItem>2 Year Change <span
                                        className="float-right"><Badge
                                        color={this.props.fundamentals.year2ChangePercent.toFixed(2) > 0 ? "success" : "danger"}>{numeral(this.props.fundamentals.year2ChangePercent).format('0.00%')}</Badge></span></ListGroupItem>
                                    <ListGroupItem>5 Year Change <span
                                        className="float-right"><Badge
                                        color={this.props.fundamentals.year5ChangePercent.toFixed(2) > 0 ? "success" : "danger"}>{numeral(this.props.fundamentals.year5ChangePercent).format('0.00%')}</Badge></span></ListGroupItem>
                                </div>
                            </Row>
                        </ListGroup>
                    </Card>
                </Row>
            )
        }

    }
}

export default Fundamentals
