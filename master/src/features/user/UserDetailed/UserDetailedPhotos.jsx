import React from 'react';
import { Segment, Grid, Header, Image } from 'semantic-ui-react';
import LazyLoad from 'react-lazyload';

const UserDetailedPhotos = ({ photos }) => {
  return (
    <Grid.Column width={16}>
      <Segment attached>
        <Header icon='image' content='Photos' />
        <Image.Group size='small' style={{ marginLeft: 20 }}>
            {photos && 
               photos.map((photo) => (
                 <LazyLoad key={photo.id} height={150} placeholder={<Image src="/assets/user.png" />}>
                <Image src={photo.url} style={{ padding: 0 }}/>
                </LazyLoad>
            ))}
        </Image.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedPhotos;