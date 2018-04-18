import React, {Component} from 'react';
import { Container, Card, Input, Form, Button, Divider, Grid } from 'semantic-ui-react';
import { Tab, Row, Col, Nav, NavItem,Modal, ControlLabel, FormControl,} from 'react-bootstrap';
import {connect} from 'react-redux';
import ServiceDetails from '../serviceDetails/details';

class ServicesCenter extends Component {

    constructor(props, context) {
      super(props, context);

      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleSubmit =this.handleSubmit.bind(this);
      this.state = {
        show: false 
      };
     
    }

    async handleSubmit(e) {
      e.preventDefault();
      let obj = new FormData(); 
      obj.append("category", this.state.category);
      
      obj.append("name", this.state.name);
      obj.append("address", this.state.address);
      obj.append("suburb", this.state.suburb);
      obj.append("ward", this.state.ward);
      obj.append("municipality", this.state.municipality);
      obj.append("district", this.state.district);
      obj.append("province", this.state.province);
      obj.append("location", this.state.location);
      obj.append("email", this.state.email);
      obj.append("phone_no", this.state.phone_no);
      obj.append("fax", this.state.fax);
      obj.append("open", this.state.open);
      obj.append("close", this.state.close);
      obj.append("hotline", this.props.hotline);
      console.log("focus school", this.state.name);

      let response = await fetch('/api/service', {
        headers: {
          Accept: 
          'application/json',
          'Content-Type': 'application/json',
        },
          method: 'POST',               
          body: this.state
        });
  
        let result = await response.json();    
        if(result){
          this.setState({
            show: false
          });
          this.props.history.push('/servicesCenter');
        }
        
      }
      
  handleClose(){
    this.setState({ show: false });
  }

    handleShow() {
      this.setState({ show: true });
    }

  render(){
    const {services} = this.props;
    return(
      <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className="clearfix">
                <Col sm={4}>
                  {
                      (()=>{
                          if(services.length > 0){
                              return(
                              this.props.services.map((service, index)=>{
                              {
                              return(
                              
                                    <Nav key={index} bsStyle="pills" stacked>
                                        <NavItem eventKey={service.length}>{service.name}</NavItem>
                                    </Nav>
                                    
                                
                              )}})
                        )
                        }
                        })()
                  } 
                  </Col>


                  <Col sm={8}>
                  {
                      (()=>{
                          if(services.length > 0){
                              return(
                              this.props.services.map((service, index)=>{  
                              {
                              return(
                                
                                    
                                    <Tab.Content key={index}>
                                        <Tab.Pane eventKey={service.length}> <ServiceDetails/> </Tab.Pane>
                                      </Tab.Content>
                                    
                                
                              )}})
                        )
                        }
                        })()
                  }       
                </Col>
              </Row>
            </Tab.Container>
        
            <Button basic color='green'  onClick={this.handleShow} >Add Service Center</Button>
             <Divider hidden></Divider>
             <div>
              <Modal show={this.state.show} onHide={this.handleClose}>
              <Form onSubmit={this.handleSubmit}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Service Center</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Grid >
                    <Grid.Column width={10}>
                      <label >Service Center</label> 
                      <select placeholder="test"  id="serviceCenter" name="category" onChange={(e)=>{this.setState({category: e.target.value})}} >
                        <option>Select Service Center</option>
                        { (()=>{
                            if(services.length > 0){
                                return(
                            services.map((service,index)=>{
                              
                                return(
                                    <option id="serviceCenter" name="service center" value={service._id} key={index}>{service.name}</option>
                                    )

                                })
                            )
                            }
                            })()
                        } 
                      </select>
                    </Grid.Column>
                  </Grid >

                  <Grid divided="vertically" columns={2}>
                      <Grid.Column >
                          <Input
                          id="formControlsText"
                          type="text"
                          onChange={(e)=>{this.setState({name: e.target.value})}}
                          placeholder="Enter Service Name"
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Input
                          id="Address"
                          type="text"
                        
                          onChange={(e)=>{this.setState({address: e.target.value})}}
                          placeholder="Service Senter Address"
                        />
                      </Grid.Column>

                      <Grid.Column>
                        <Input
                          id="suburb"
                          type="text"
                          
                          onChange={(e)=>{this.setState({suburb: e.target.value})}}
                          placeholder="Suburb"
                        />
                      </Grid.Column>

                      <Grid.Column>
                      <Input
                        id="ward"
                        type="text"
                        
                        onChange={(e)=>{this.setState({ward: e.target.value})}}
                        placeholder="Enter Ward"
                      />
                      </Grid.Column>

                      <Grid.Column>
                      <Input
                        id="Municipality"
                        type="text"
                        onChange={(e)=>{this.setState({municipality: e.target.value})}}
                        placeholder="Enter Municipality"
                      />
                      </Grid.Column>

                      <Grid.Column>
                      <Input
                        id="District"
                        type="text"
                    
                        onChange={(e)=>{this.setState({province: e.target.value})}}
                        placeholder="Enter District"
                      />
                      </Grid.Column>

                      <Grid.Column>
                      <Input id="Province"
                        type="text"
                        
                        onChange={(e)=>{this.setState({location: e.target.value})}}
                        placeholder="Enter Province"
                      />
                      </Grid.Column>

                      <Grid.Column>
                      <Input
                        id="location"
                        type="text"
                      
                        onChange={(e)=>{this.setState({email: e.target.value})}}
                        placeholder="Enter Location"
                      />
                      </Grid.Column>

                      <Grid.Column>
                      <Input
                        id="formControlsEmail"
                        type="email"
                    
                        onChange={(e)=>{this.setState({productname: e.target.value})}}
                        placeholder="Enter Email Address"
                      />
                      </Grid.Column>

                      <Grid.Column>
                      <Input
                        id="contact"
                        type="number"
                      
                        onChange={(e)=>{this.setState({phone_no: e.target.value})}}
                        placeholder="Enter Phone Number"
                      />
                      </Grid.Column>

                      <Grid.Column>
                      <Input
                        id="fax"
                        type="number"
                      
                        onChange={(e)=>{this.setState({fax: e.target.value})}}
                        placeholder="Enter Fax Number"
                      />
                      </Grid.Column>

                      <Grid.Column>
                            <Input
                              id="Hotcontact"
                              type="number"
                            
                              onChange={(e)=>{this.setState({hotline: e.target.value})}}
                              placeholder="Enter Hot Line"
                            />
                      </Grid.Column>

                      <Grid.Column>
                      <Input
                        id="otime"
                        type="time"
                        onChange={(e)=>{this.setState({open: e.target.value})}}
                        label="Open"
                      />
                      </Grid.Column>

                      <Grid.Column>
                      <Input
                        id="ctime"
                        type="time"
                        onChange={(e)=>{this.setState({close: e.target.value})}}
                        label="Close"
                      />
                      </Grid.Column>

                  </Grid>
                </Modal.Body>

                  <Modal.Footer>
                    <Button type="submit" onSubmit={this.handleSubmit} >Submit</Button>
                    <Button onClick={this.handleClose}>Close</Button>
                  </Modal.Footer>
                </Form>
              </Modal>
              </div>
      </Container>
    )
  }
}

function matchStateToProps(state)
{
   return{
     services: state.service,
   }
} 



export default connect(matchStateToProps)(ServicesCenter);