import React from "react"
import GoogleMapReact from "google-map-react"
import LocationPin from "../elements/LocationPin"

const Map = ({ location, zoomLevel }) => {
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS,
          }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          options={{
            styles: require(`../../assets/blackMap.json`),
          }}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map
