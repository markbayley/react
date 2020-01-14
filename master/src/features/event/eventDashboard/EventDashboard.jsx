import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../eventList/EventList';
import {createEvent, updateEvent} from '../eventActions';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventActivity from '../EventActivity/EventActivity';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';

const mapState = (state) => ({
    events: state.firestore.ordered.events,
  })

const actions = {
    createEvent,
    updateEvent
}  

class EventDashboard extends Component {

    handleDeleteEvent = id => {
        this.props.deleteEvent(id);
    };

    render() {
        const {events} = this.props;
       
        return (
            <Grid>
                <Grid.Column width={16}>
                    <EventList events={events} 
                               deleteEvent={this.handleDeleteEvent}/>
                </Grid.Column>
                <Grid.Column width={16}>
                    <EventActivity />
                </Grid.Column>
            </Grid>       
        );
    }    
}

export default connect(mapState, actions)(firestoreConnect([{collection: 'events'}])(EventDashboard));
