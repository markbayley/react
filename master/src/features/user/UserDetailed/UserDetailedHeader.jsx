import React from 'react';
import { Segment, Item, Header, Grid } from 'semantic-ui-react';
import differenceInYears from 'date-fns/differenceInYears';
import LazyLoad from 'react-lazyload';

const UserDetailedHeader = ({ profile }) => {
  let age;
  if (profile.dateOfBirth) {
    age = differenceInYears(Date.now(), profile.dateOfBirth.toDate());
  }
  return (
    <Grid.Column width={16}>
      <Segment>
        <Item.Group>
          <Item>
            <LazyLoad
              height={150}
              placeholder={<Item.Image avatar size='small' src="/assets/user.png" />}>
              <Item.Image
                avatar
                size='small'
                src={profile.photoURL || '/assets/user.png'}
              />
            </LazyLoad>

            <Item.Content horizontalalign='left'>
              <Header as='h1'>{profile.displayName}</Header>
              <br />
              <Header as='h3'>{profile.occupation}, {age || '38 years'}</Header>
              <br />
              <Header as='h3'>             
                 {' '}
                {profile.city || 'unknown city'} 
              </Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedHeader;