import React from "react"
import GoogleMapReact from "google-map-react"

const defaultProps = {
  center: {
    lat: 40.72,
    lng: -73.99,
  },
  zoom: 14,
}

const AnyReactComponent = ({ text }) => <div>{ text }</div>

const GoogleMap = () => (
  <div style={{ height: '480px', width: '100%', borderRadius: '20px' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyDAxxYoKa8lhMgXSMyUxFxcLUfPsjkb17c' }}
      defaultCenter={ defaultProps.center }
      defaultZoom={ defaultProps.zoom }
    >
      <AnyReactComponent
        lat={40.71671206494995}
        lng={-73.99896718930891}
        text={'New York, NY'}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap