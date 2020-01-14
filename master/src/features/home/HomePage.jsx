import React from 'react';
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';

const HomePage = ({ history }) => {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>

                <a href="https://www.inblockdesign.com/index.html">
                    <Button style={{ marginLeft: 0, marginBottom: 200 }} size='huge' inverted >
                        <Icon style={{ marginLeft: 15 }} name='home' size='large' />

                    </Button> </a>


                    <Header as='h1' inverted style={{ marginBottom: 0}} >
                        <Image
                            size='massive'
                            src='/assets/logo3.png'
                            alt='logo'
                            style={{ marginBottom: 15 }}
                            
                        />
                        SocialCode
                    </Header>
                    <Header as='h2' inverted style={{ marginTop: 0, fontWeight: 50}}> 
                       Find friends who like to code
                       
                    </Header>
                          


                    <Button style={{ marginTop: 50 }} onClick={() => history.push('/events')} size='huge' inverted>
                        Get Started
                    <Icon name='right arrow' />
                    </Button>

            </Container>
        </Segment>
    )
}

export default HomePage;
