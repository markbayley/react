import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { firestoreConnect, isEmpty } from 'react-redux-firebase';
import { connect } from 'react-redux';
import UserDetailedHeader from './UserDetailedHeader';
import UserDetailedSidebar from './UserDetailedSidebar';
import UserDetailedPhotos from './UserDetailedPhotos';
import UserDetailedEvents from './UserDetailedEvents';
import UserDetailedDescription from './UserDetailedDescription';
import { userDetailedQuery } from '../userQueries';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { getUserEvents } from '../userActions';


const mapState = (state, ownProps) => {
  let userUid = null;
  let profile = {};

  if (ownProps.match.params.id === state.auth.uid) {
    profile = state.firebase.profile
  } else {
    profile = !isEmpty(state.firestore.ordered.profile) && state.firestore.ordered.profile[0];
    userUid = ownProps.match.params.id;
  }

  return {
  profile,
  userUid,
  auth: state.firebase.auth,
  photos: state.firestore.ordered.photos,
  requesting: state.firestore.status.requesting
  }
};

const actions = {
  getUserEvents
}

class UserDetailedPage extends Component {

  async componentDidMount() {
    let events = await this.props.getUserEvents(this.props.userUid, 1);
    console.log(events);
  }

  render() {
    const { profile, photos, auth, match, requesting } = this.props;
    const isCurrentuser = auth.uid === match.params.id;
    const loading = Object.values(requesting).some(a => a === true);
    if (loading) return <LoadingComponent />
    return (
      <Grid>
        <UserDetailedHeader profile={profile} />
        <UserDetailedDescription profile={profile} />
        <UserDetailedSidebar isCurrentuser={isCurrentuser}/>
        {photos &&
        <UserDetailedPhotos photos={photos} />}
        <UserDetailedEvents />
      </Grid>
    );
  }
}

export default connect(mapState, actions)(
  firestoreConnect((auth, userUid) => userDetailedQuery(auth, userUid))(
    UserDetailedPage
  )
);