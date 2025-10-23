import type { Route } from "./+types/page5";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page 5 - PWA App" },
    { name: "description", content: "This is page 5 of the PWA application" },
  ];
}

export default function Page5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Page 5</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-lg text-gray-600 mb-4">
            Page 5 uses a cyan to blue gradient for a fresh, modern look.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-cyan-50 p-3 rounded-lg text-center">
              <div className="w-8 h-8 bg-cyan-500 rounded-full mx-auto mb-2"></div>
              <p className="text-xs text-cyan-700">Cyan</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
              <p className="text-xs text-blue-700">Blue</p>
            </div>
            <div className="bg-sky-50 p-3 rounded-lg text-center">
              <div className="w-8 h-8 bg-sky-500 rounded-full mx-auto mb-2"></div>
              <p className="text-xs text-sky-700">Sky</p>
            </div>
            <div className="bg-indigo-50 p-3 rounded-lg text-center">
              <div className="w-8 h-8 bg-indigo-500 rounded-full mx-auto mb-2"></div>
              <p className="text-xs text-indigo-700">Indigo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
