export const metadata = {
  title: "React Leaflet Starter",
  description: "Next.js + Tailwind + React Leaflet + Turf",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-800">
        <div className="mx-auto max-w-6xl p-6 space-y-6">
          <header className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">React Leaflet Starter</h1>
            <nav className="text-sm text-gray-500">
              <a href="https://openstreetmap.org" target="_blank" className="hover:underline">OSM</a>
              <span className="mx-2">•</span>
              <a href="https://leafletjs.com" target="_blank" className="hover:underline">Leaflet</a>
              <span className="mx-2">•</span>
              <a href="https://turfjs.org" target="_blank" className="hover:underline">Turf</a>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
