import React from 'react';
import { Segment, Header, Menu, Grid, Card, Image } from 'semantic-ui-react';

const UserDetailedEvents = () => {
  return (
    <Grid.Column width={16}>
      <Segment attached>
        <Header icon='calendar' content='Events' />
        <Menu secondary pointing style={{ padding: 0 }}>
          <Menu.Item name='All Events' active />
          <Menu.Item name='Past Events' />
       
          <Menu.Item name='Events Hosted' />
        </Menu>

        <Card.Group itemsPerRow={3} style={{ marginLeft: 0 }}>
          <Card style={{ marginRight: 10 }}>
            <Image src={'/assets/categoryImages/drinks.jpg'} />
            <Card.Content>
              <Card.Header textAlign='center'>Event Title</Card.Header>
              <Card.Meta textAlign='center'>
                28th March 2018 at 10:00 PM
              </Card.Meta>
            </Card.Content>
          </Card>

          <Card>
            <Image src={'/assets/categoryImages/drinks.jpg'} />
            <Card.Content>
              <Card.Header textAlign='center'>Event Title</Card.Header>
              <Card.Meta textAlign='center'>
                28th March 2018 at 10:00 PM
              </Card.Meta>
            </Card.Content>
          </Card>

          <Card style={{ marginLeft: 10 }}>
            <Image src={'/assets/categoryImages/drinks.jpg'} />
            <Card.Content>
              <Card.Header textAlign='center'>Event Title</Card.Header>
              <Card.Meta textAlign='center'>
                28th March 2018 at 10:00 PM
              </Card.Meta>
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedEvents;