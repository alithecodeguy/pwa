import type { Route } from "./+types/page10";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page 10 - PWA App" },
    { name: "description", content: "This is page 10 of the PWA application" },
  ];
}

export default function Page10() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Page 10</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-lg text-gray-600 mb-4">
            Page 10 is the final page with an elegant indigo to purple gradient.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-4">
                Indigo Theme
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-indigo-700 text-sm">
                    Deep blue-purple
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                  <span className="text-indigo-700 text-sm">
                    Professional appearance
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-300 rounded-full"></div>
                  <span className="text-indigo-700 text-sm">Modern design</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-4">
                Purple Theme
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-purple-700 text-sm">
                    Rich purple tones
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-purple-700 text-sm">
                    Creative inspiration
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                  <span className="text-purple-700 text-sm">
                    Elegant finish
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
