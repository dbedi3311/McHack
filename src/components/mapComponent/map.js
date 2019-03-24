import React, {Component} from 'react';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import Pin from './pin'
const TOKEN = 'pk.eyJ1IjoiMjAyMWx0aGlzdGxlIiwiYSI6ImNqdGxsbXY3bzBidGE0M3FsemVzbTlkNHUifQ.5Gpt0e9blw17It0Ex4qnZA';
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};
export default class Map extends Component {
constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 2.8,
        bearing: 0,
        pitch: 0,
        width: 900,
        height: 600,
      }
    };
  }
render() {
  const {viewport} = this.state;
  return (
    <div className="nav" style={{
        display: 'flex',
        alignItmes: 'center',
        justifyContent: 'center',
    }}>
    <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxApiAccessToken={TOKEN}>
        <Marker latitude={Math.random()*(50-25)+25} longitude={Math.random()*(-75+125)-125} offsetTop={0} offsetLeft={0}>
        <Pin />
        </Marker>
        <Marker longitude={Math.random()*(-75+125)-125} latitude={Math.random()*(50-25)+25} offsetTop={0} offsetLeft={0}>
        <Pin />
        </Marker>
        <Marker longitude={Math.random()*(-75+125)-125} latitude={Math.random()*(50-25)+25} offsetTop={0} offsetLeft={0}>
        <Pin />
        </Marker>
        <Marker longitude={Math.random()*(-75+125)-125} latitude={Math.random()*(50-25)+25} offsetTop={0} offsetLeft={0}>
        <Pin />
        </Marker>
        <Marker longitude={Math.random()*(-75+125)-125} latitude={Math.random()*(50-25)+25} offsetTop={0} offsetLeft={0}>
        <Pin />
        </Marker>
        <Marker longitude={Math.random()*(-75+125)-125} latitude={Math.random()*(50-25)+25} offsetTop={0} offsetLeft={0}>
        <Pin />
        </Marker>
        <Marker longitude={Math.random()*(-75+125)-125} latitude={Math.random()*(50-25)+25} offsetTop={0} offsetLeft={0}>
        <Pin />
        </Marker>
        <Marker longitude={Math.random()*(-75+125)-125} latitude={Math.random()*(50-25)+25} offsetTop={0} offsetLeft={0}>
        <Pin />
        </Marker>
        <Marker longitude={Math.random()*(-75+125)-125} latitude={Math.random()*(50-25)+25} offsetTop={0} offsetLeft={0}>
        <Pin />
        </Marker>
        <Marker longitude={Math.random()*(-75+125)-125} latitude={Math.random()*(50-25)+25} offsetTop={0} offsetLeft={0}>
        <Pin />
        </Marker>
        <Marker longitude={Math.random()*(-75+125)-125} latitude={Math.random()*(50-25)+25} offsetTop={0} offsetLeft={0}>
        <Pin />
        </Marker>
        <Marker longitude={Math.random()*(-75+125)-125} latitude={Math.random()*(50-25)+25} offsetTop={0} offsetLeft={0}>
        <Pin />
        </Marker>
        <Marker longitude={Math.random()*(-75+125)-125} latitude={Math.random()*(50-25)+25} offsetTop={0} offsetLeft={0}>
        <Pin />
        </Marker>
        <Marker longitude={Math.random()*(-75+125)-125} latitude={Math.random()*(50-25)+25} offsetTop={0} offsetLeft={0}>
        <Pin />
        </Marker>
        <Marker longitude={Math.random()*(-75+125)-125} latitude={Math.random()*(50-25)+25} offsetTop={0} offsetLeft={0}>
        <Pin />
        </Marker>
        <Marker longitude={Math.random()*(-75+125)-125} latitude={Math.random()*(50-25)+25} offsetTop={0} offsetLeft={0}>
        <Pin />
        </Marker>
        <Marker longitude={Math.random()*(-75+125)-125} latitude={Math.random()*(50-25)+25} offsetTop={0} offsetLeft={0}>
        <Pin />
        </Marker>
        <Marker longitude={Math.random()*(-75+125)-125} latitude={Math.random()*(50-25)+25} offsetTop={0} offsetLeft={0}>
        <Pin />
        </Marker>
          </MapGL>
        </div>

    );
  }
}
