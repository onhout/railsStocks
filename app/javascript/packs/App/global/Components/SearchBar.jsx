import React from "react";
import {
    Button,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    ListGroup,
    ListGroupItem,
    Row
} from 'reactstrap';
import {searchStock} from '../Utils/utils'

class SearchBar extends React.Component {


    onInputChange = (event) => {
        searchStock(event.target.value).then(data => {
            this.setState({
                search_list: data
            })
        });

        this.setState({
            market: event.target.value
        });
    };

    constructor(props) {
        super(props);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleSplit = this.toggleSplit.bind(this);
        this.changeTimeFrameState = this.changeTimeFrameState.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.getChart = this.getChart.bind(this);
        this.dropdownList = this.dropdownList.bind(this);
        this.state = {
            dropdownOpen: false,
            splitButtonOpen: false,
            timeFrame: "5min",
            timeFrameText: "5 Mins"
        };
    }

    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleSplit() {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }

    changeTimeFrameState(event) {
        this.setState({
            timeFrame: event.target.value,
            timeFrameText: event.target.innerText
        })
    }

    getSymbolOnInput(stock_id, market) {
        this.setState({
            stock_id,
            market,
            search_list: ""
        })
    }

    dropdownList() {
        if (this.state.search_list && !this.state.search_list.error) {
            return this.state.search_list.map((list) => {
                return (
                    <ListGroupItem key={list.id} tag="a" href="#" className="justify-content-between" onClick={() => {
                        this.getSymbolOnInput(list.id, list.symbol);
                    }}>
                        {list.symbol} - {list.name}
                    </ListGroupItem>
                )
            });
        } else {
            return (
                <p>Search for something...</p>
            )
        }
    }

    getChart(event) {
        this.props.onStockSymbolChange(this.state.stock_id, this.state.market, this.state.timeFrame);
    }

    render() {
        return (
            <Row>
                <InputGroup>
                    <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.dropdownOpen}
                                              toggle={this.toggleDropDown}>
                        <DropdownToggle caret outline>
                            {this.state.timeFrameText}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Time Frame</DropdownItem>
                            <DropdownItem value={"1min"} onClick={this.changeTimeFrameState}>1 Min</DropdownItem>
                            <DropdownItem value={"5min"} onClick={this.changeTimeFrameState}>5 Mins</DropdownItem>
                            <DropdownItem value={"15min"} onClick={this.changeTimeFrameState}>15 Mins</DropdownItem>
                            <DropdownItem value={"30min"} onClick={this.changeTimeFrameState}>30 Mins</DropdownItem>
                            <DropdownItem value={"60min"} onClick={this.changeTimeFrameState}>60 Mins</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>
                    <Input placeholder="Market..." onChange={this.onInputChange} value={this.state.market || ''}/>
                    <InputGroupAddon addonType="append">
                        <Button color="secondary" onClick={() => this.getChart()}>Get Chart</Button>
                    </InputGroupAddon>
                </InputGroup>
                <div>
                    <ListGroup>
                        {this.dropdownList()}
                    </ListGroup>
                </div>
            </Row>
        )
    }
}

export default SearchBar