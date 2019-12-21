import React from 'react';
import { Grid, Segment, List, Image, Item } from 'semantic-ui-react';

const PeopleDashboard = () => {
    return (
        <Grid>
        <Grid.Column width={16}>
            <Segment>
            <List.Item>
                   <Image as='a' size='large' circular src='https://randomuser.me/api/portraits/men/20.jpg' />
               </List.Item>
               <Item.Content>
                  <Item.Header as='h3'>Bruce</Item.Header>
                </Item.Content>
           
            </Segment>
        </Grid.Column>
        <Grid.Column width={12}>
            <Segment>
            <h3>About Me</h3>
            </Segment>
        </Grid.Column>
        </Grid>          
    )
}

export default PeopleDashboard;
