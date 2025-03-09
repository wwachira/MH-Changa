import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const WorldMap = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center">Global Mental Health Statistics</h2>
      <ComposableMap>
        <Geographies geography="/path/to/world-map.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ComposableMap>
      <div className="mt-6 text-center">
        <p>25% of people worldwide experience mental health issues.</p>
      </div>
    </div>
  );
};

export default WorldMap;