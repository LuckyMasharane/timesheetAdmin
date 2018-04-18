import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import img from '../../images/funny logo.png';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {Grid, Col, Row, Form, FormControl, FormGroup, Image, Label } from 'react-bootstrap';
import Button from '../../elements/CustomButton/CustomButton';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
     users: []
   }
    this.handleSubmit =this.handleSubmit.bind(this);
  }
async handleSubmit(e) {
  try{
  e.preventDefault();
  let obj = {
    "email": this.state.email,
    "password": this.state.password
  }
  let res = await fetch('/api/user/login', {
    credentials:'include',
      method: 'POST',
      headers:{
       "Accept":"application/json",
        "Content-Type":"application/json"
      },
    body: JSON.stringify(obj)
    });
    if (res.status == 200){
     window.location.href="/dashboard"
    }
  }catch(err){
    console.log(err.message)
  }
     
}

  render(){
    return(
        <Grid>
          <Row style={{paddingTop: 150}}>
            <Col md={5} mdOffset={3} lg={5} lgOffset={3}>
              <Image src={img} style={{height: 250, width: 'auto', margin: 'auto'}} responsive circle />
              <Form>
                <FormGroup>
                    <FormControl style={{borderRadius: 30}} placeholder='Email' type = 'email'  onChange={(e)=>{this.setState({email: e.target.value})}}   required/>
                </FormGroup>
                <FormGroup>
                    <FormControl style={{borderRadius: 30}} placeholder='Password' type = 'password' onChange={(e)=>{this.setState({password: e.target.value})}}  required />
                </FormGroup>
                <Button bsStyle="success" onClick={this.handleSubmit.bind(this)} block fill round><i className="pe-7s-unlock"></i> Login</Button>
              </Form>
            </Col>
          </Row>
        </Grid>
    )
  }
}

export default withRouter(connect(null,actions)(Login));