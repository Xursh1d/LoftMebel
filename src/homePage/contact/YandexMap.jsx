import React, { Component } from "react";
import "./contact.css";
import placemarkIcon from "../../LoftMebelPhoto/armchair.png";

import { YMaps, Map, Placemark } from "react-yandex-maps";

export default class YMap extends Component {
  render() {
    return (
      <div>
        <YMaps>
          <Map
            defaultState={{
              center: [44.898022, 37.354399],
              zoom: 17,
            }}
            className="map"
          >
            <Placemark
              className="placemark"
              options={{
                iconLayout: "default#image",
                // iconImageHref: placemarkIcon,
                iconColor: '#3caa3c',
                preset: 'islands#circleIcon',
                iconImageSize: [32, 32],
                iconImageOffset: [-5, -38],
              }}
              geometry={[44.898022, 37.354399]}
            />
            <Placemark />
          </Map>
        </YMaps>
      </div>
    );
  }
}
