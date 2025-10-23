import type { Route } from "./+types/page3";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page 3 - PWA App" },
    { name: "description", content: "This is page 3 of the PWA application" },
  ];
}

export default function Page3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Page 3</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-lg text-gray-600 mb-4">
            Page 3 showcases the purple theme with interactive elements.
          </p>
          <div className="space-y-4">
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
              <h3 className="font-semibold text-purple-800 mb-2">
                Purple Theme
              </h3>
              <p className="text-purple-700">
                This page uses a purple color scheme for visual variety.
              </p>
            </div>
            <div className="bg-violet-50 border-l-4 border-violet-400 p-4">
              <h3 className="font-semibold text-violet-800 mb-2">
                Violet Accent
              </h3>
              <p className="text-violet-700">
                Each page has its own unique color palette and layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
