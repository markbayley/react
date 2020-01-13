import React from 'react';
import { Segment, Grid, Header, List, Item, Icon } from 'semantic-ui-react';
import { format } from 'date-fns';

const UserDetailedDescription = ({ profile }) => {
  return (
    <Grid.Column width={16}>
      <Segment>
        <Grid columns={2}>
          <Grid.Column width={8}>
            <Header icon='smile' content='About' />
            <p>
              I am a: <strong>{profile.occupation || 'tbn'}</strong>
            </p>
            <p>
              Originally from <strong>{profile.origin || 'tbn'}</strong>
            </p>
            <p>
              Member Since:{' '}
              <strong>
                {profile.createdAt && format(profile.createdAt.toDate(), 'dd LLL yyyy')}
              </strong>
            </p>
            <p>{profile.description}</p>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header icon='heart outline' content='Interests' />
            <List>
              {profile.interests ? (
                profile.interests.map((interest, index) => (
                  <Item key={index}>
                    <Icon name='heart' style={{paddingLeft: 7}}/>
                    <Item.Content>{interest}</Item.Content>
                  </Item>
                ))
              ) : (
                  <p>No interests</p>
                )}
            </List>
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedDescription;