import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';

const AnyReactComponent = () => <Icon name='marker' size='big' color='red' />

class SimpleMap extends Component {
  static defaultProps = {
    zoom: 11
  };

  render() {
      const {latlng} = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDIpgc0n_n_YzK7f4S1wJqB3_Rk5CPhQIQ' }}
          defaultCenter={latlng}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={latlng.lat}
            lng={latlng.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;