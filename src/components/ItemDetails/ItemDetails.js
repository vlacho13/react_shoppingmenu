import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <div>
                <Button
                    className="item-details-button"
                    bsStyle="link"
                    onClick={() => this.setState({ open: !this.state.open })}
                >
                { this.state.open === false ? `See ` : `Hide` } item details
                { this.state.open === false ? ` +`: ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            <Media>
                                <Media.Left>
                                    <img 
                                    width={130} height={120}
                                    alt="thumbnail"
                                    src="https://i5.walmartimages.com/asr/eb8ffb4a-5591-4862-8b85-701c9be8e478_2.71daa24a7579ab34cdd6851c9476d5e3.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                                    />
                                </Media.Left>
                                <Media.Body>
                                    <p>Nintendo Switch Console with Neon Blue & Red Joy-Con</p>
                                    <Row className="show-grid">
                                        <Col md={6}>
                                            <strong> { `$${this.props.price}` } </strong>
                                            <br />
                                            <strong className="price-strike"> { `$${this.props.price}` } </strong>
                                        </Col> 
                                        <Col md={6}> Qty: 1 </Col>
                                    </Row>
                                </Media.Body>
                            </Media>
                        </Well>
                    </div>
                </Collapse>
            </div>
        )
    }
}
