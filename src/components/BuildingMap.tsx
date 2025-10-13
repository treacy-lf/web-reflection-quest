import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface BuildingMapProps {
  address: string;
  buildingName: string;
  longitude?: number;
  latitude?: number;
}

const BuildingMap = ({ address, buildingName, longitude = 121.398, latitude = 31.198 }: BuildingMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map - Note: Users will need to add their Mapbox token
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbTR0bjh1eTcwYnpsMmpzOGJyeGhkOGl3In0.S8NUFJukTCYyLHHmMr3kfw';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [longitude, latitude],
      zoom: 15,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add marker
    new mapboxgl.Marker({ color: '#2563eb' })
      .setLngLat([longitude, latitude])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<div style="padding: 8px;"><h3 style="font-weight: bold; margin-bottom: 4px;">${buildingName}</h3><p style="font-size: 14px; color: #666;">${address}</p></div>`)
      )
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [address, buildingName, longitude, latitude]);

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-border">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default BuildingMap;