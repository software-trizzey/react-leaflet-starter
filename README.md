# React Leaflet Starter (Next.js + Tailwind + Turf)

A minimal template for the projects we discussed: basemap tiles, GeoJSON overlays (polygons/markers), and Turf-powered geospatial operations.

## Quickstart

```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:3000
```

- Edit `/public/data/sample_polygons.geojson` to swap in your own data.
- Configure a production tile provider via `.env.local` using `NEXT_PUBLIC_TILE_URL` and `NEXT_PUBLIC_TILE_ATTRIBUTION`.

## Stack
- Next.js App Router
- TailwindCSS
- React Leaflet / Leaflet
- Turf.js

## Notes
- Leaflet is client-side only; components that import Leaflet must include `"use client"` and be dynamically imported from pages.
- Respect tile provider terms. For prototyping, OSM is OK; for production, use MapTiler/Mapbox/etc.
