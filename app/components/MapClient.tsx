"use client";

import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import { useEffect, useMemo, useState } from "react";
import Legend from "./Legend";
import { colorFromValue } from "../(maps)/color";

type Props = {
  dataUrl?: string;
};

export default function MapClient({ dataUrl = "/data/sample_polygons.geojson" }: Props) {
  const [data, setData] = useState<FeatureCollection<Geometry, any> | null>(null);

  useEffect(() => {
    fetch(dataUrl).then(r => r.json()).then(setData).catch(console.error);
  }, [dataUrl]);

  const styleFn = useMemo(() => (feature: Feature) => ({
    weight: 1,
    color: "#111827",
    fillOpacity: 0.6,
    fillColor: colorFromValue(feature.properties?.score ?? null),
  }), []);

  const tileUrl = process.env.NEXT_PUBLIC_TILE_URL || "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution = process.env.NEXT_PUBLIC_TILE_ATTRIBUTION || "© OpenStreetMap contributors";

  return (
    <div className="map-card h-[70vh] relative">
      <MapContainer center={[53.5461, -113.4938]} zoom={11} className="h-full w-full">
        <TileLayer url={tileUrl} attribution={attribution} />
        {data && (
          <GeoJSON
            data={data as any}
            style={styleFn as any}
            onEachFeature={(feature, layer) => {
              const name = feature.properties?.name ?? "Area";
              const value = feature.properties?.score ?? "n/a";
              layer.bindTooltip(`<div class='text-sm font-medium'>${name}</div><div class='text-xs text-gray-600'>score: ${value}</div>`, { sticky: true });
            }}
          />
        )}
      </MapContainer>
      <Legend />
    </div>
  );
}
