import React from "react"
import GoogleMapReact from "google-map-react"

const defaultProps = {
  center: {
    lat: 53.92,
    lng: 27.59,
  },
  zoom: 15,
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
        lat={53.9221908384047}
        lng={27.59860115102201}
        text={'Independence Avenue, 77, office 53'}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap