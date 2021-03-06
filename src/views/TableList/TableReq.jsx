import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';
import {thArray} from 'variables/Variables.jsx';

class TableReq extends Component {
    constructor(props){
        super(props)
  
        this.state = {
          requests : [],
          reqNr:0
        }
        this.fetchData();
      }
  
       fetchData(){
        fetch("http://school.itthynkonline.com:5000/api/request/query/q/?type=Request")
        .then(data => {
          return data.json()})
        .then(body => {
          this.setState({
            requests: body
          });
        });
      }

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Request"
                                category="All Requests"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {
                                                    thArray.map((prop, key) => {
                                                        return (
                                                        <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.requests.map((request,index) =>(
                                            <tr key ={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{request.title}</td>
                                            <td>{request.address}</td>
                                            <td>{request.description}</td>
                                            <td>{request.owner.lastname}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>

                    </Row>
                </Grid>
            </div>
        );
    }
}

export default TableReq;
