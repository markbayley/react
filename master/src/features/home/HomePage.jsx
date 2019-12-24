import React from 'react';
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';

const HomePage = ({history}) => {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>

              <a  href="Portfolio/index.html#portfolio">
                <Button style={{ marginLeft: 30, marginBottom: 200 }} size='huge' inverted >
                <Icon style={{ marginLeft: 15 }} name='home' size='large'/> 
                 
             </Button> </a>


                <Header as='h1' inverted>
                    <Image
                        size='massive'
                        src='/assets/logo.png'
                        alt='logo'
                        style={{ marginBottom: 12, marginLeft: 30 }}
                    />
                    Revents
             </Header>
             
             

                <Button style={{ marginLeft: 30 }} onClick={() => history.push('/events')} size='huge' inverted>
                    Get started
               <Icon name='right arrow' />
                </Button>

                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">First App</h1>
                    </header>
                    {/* would need differnt link for dev */}
                    <a
                        className="App-link"
                        
                        href=" https://markbayley.github.io/react/lottery-react"
                    >
                        <h4>BLOCK LOTTO</h4>
                    </a>
                </div>

                   
                
           

            </Container>
        </Segment>
    )
}

export default HomePage;
