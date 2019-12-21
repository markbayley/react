import React from 'react';
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';

const HomePage = ({history}) => {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>

              <a  href="Portfolio/index.html#portfolio">
                <Button style={{ marginLeft: 70, marginBottom: 200 }} size='huge' inverted >
                <Icon style={{ marginLeft: 15 }} name='home' size='large' inverted/> 
                 
             </Button> </a>


                <Header as='h1' inverted>
                    <Image
                        size='massive'
                        src='/assets/logo.png'
                        alt='logo'
                        style={{ marginBottom: 12, marginLeft: 70 }}
                    />
                    Re-vents
             </Header>
             
             

                <Button style={{ marginLeft: 70 }} onClick={() => history.push('/events')} size='huge' inverted>
                    Get started
               <Icon name='right arrow' inverted />
                </Button>

                   
                
           

            </Container>
        </Segment>
    )
}

export default HomePage;
