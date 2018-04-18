import React, {Component} from 'react';
import { Container,Card} from 'semantic-ui-react';


class Communityforum extends Component {

  render(){
    return(
        <Container>
            <br/><Card
                header='Elliot Baker'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            /><br/>
        </Container>
        
    )
  }
}

export default Communityforum;