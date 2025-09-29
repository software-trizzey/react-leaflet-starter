# Mapping Project Checklist

Use this as your tracker. Check off as you go. Each project includes core goals and stretch goals.

- [ ] **1. Neighborhood boundaries viewer**
  - [ ] Load city neighborhood/ward polygons (GeoJSON)
  - [ ] Hover tooltip (name)
  - [ ] Fit map to bounds
  - [ ] Search/zoom to neighborhood (stretch)

- [ ] **2. Property assessment choropleth**
  - [ ] Join assessment CSV → GeoJSON by neighborhood id
  - [ ] Choropleth styling + legend
  - [ ] Year switcher / time slider (stretch)

- [ ] **3. Tree inventory clusters**
  - [ ] Load points (species/DBH)
  - [ ] Marker clustering + filters
  - [ ] Heatmap layer (stretch)

- [ ] **4. Parks & amenities locator**
  - [ ] Layer toggles (parks, washrooms, playgrounds)
  - [ ] Custom icons
  - [ ] "Within X meters" filters with Turf buffers (stretch)

- [ ] **5. Snow & parking ban zones**
  - [ ] Polygons with conditional badges
  - [ ] Address → point-in-polygon (Turf) checker
  - [ ] "Is my address affected?" UI (stretch)

- [ ] **6. Road & trail status map**
  - [ ] LineString styling by status
  - [ ] Segment click → sidebar details
  - [ ] Animate highlight on hover (stretch)

- [ ] **7. Crime/incident density**
  - [ ] Load incidents by date/type
  - [ ] Time filtering
  - [ ] Heatmap (leaflet.heat); histogram linking (stretch)

- [ ] **8. Waste collection zones**
  - [ ] Join schedule CSV → polygons
  - [ ] Custom legend
  - [ ] Address search → show pickup day (stretch)

- [ ] **9. Transit stops & routes (GTFS)**
  - [ ] Convert GTFS shapes/stops → GeoJSON
  - [ ] Route picker
  - [ ] Live frequency coloring (stretch)

- [ ] **10. Census choropleth**
  - [ ] Load census boundaries + indicator CSV
  - [ ] Quantile-based color breaks
  - [ ] Side-by-side compare (stretch)

- [ ] **11. Public art walking tour**
  - [ ] Points with images/links
  - [ ] "Nearest N" route order (greedy)
  - [ ] Export/share tour (stretch)

- [ ] **12. Playground accessibility (10-min walksheds)**
  - [ ] Approximate buffers with Turf
  - [ ] Intersect with neighborhoods
  - [ ] Replace with network isochrones later (stretch)

---

## Reusable tasks (copy/paste into issues)

- [ ] Data reprojected to WGS84 (EPSG:4326)
- [ ] GeoJSON simplified as needed
- [ ] Legend & attribution present
- [ ] Layer toggles added
- [ ] Performance: clustering/lazy loading
- [ ] Accessibility pass (color + labels)
