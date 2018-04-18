import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';


class Setting extends Component {

  render(){
    return(
        <Container text>
            <Grid centered>
              <Grid.Row>
                <Grid.Column width ={10}>
                  Settings
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </Container>
    )
  }
}

export default Setting;