 /* global google */
import React, {Component} from 'react';
import loadJS from 'loadjs';

export default class EmbedMap extends Component {
  constructor(props){
    super(props);
  }
  loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
  }
  initMap() {
    const address = "79 Elizabeth St, New York, NY 10012";
    const location = {lat: 40.7180512, lng: -73.9985487}
    const zoom = 16;
    const g_map = new google.maps.Map(document.getElementById("g_map"), {center: location, zoom: zoom});
  }
  componentDidMount() {
    window.initMap = this.initMap;
    const key = "AIzaSyD-u97DVBBkrS1j2_Q654gfZ24xdGqcEl8";
    loadJS("https://maps.googleapis.com/maps/api/js?key="+ key +"&callback=initMap")
  }
  render() {
    return (<div className="embed-map">
      <div id="g_map"></div>
    </div>);
  }
}
