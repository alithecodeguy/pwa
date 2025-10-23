import type { Route } from "./+types/page9";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page 9 - PWA App" },
    { name: "description", content: "This is page 9 of the PWA application" },
  ];
}

export default function Page9() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Page 9</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-lg text-gray-600 mb-4">
            Page 9 showcases teal and cyan colors for a refreshing look.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-teal-50 p-4 rounded-lg">
              <h3 className="font-semibold text-teal-800 mb-3">Teal Section</h3>
              <div className="space-y-2">
                <div className="w-full h-2 bg-teal-200 rounded"></div>
                <div className="w-3/4 h-2 bg-teal-300 rounded"></div>
                <div className="w-1/2 h-2 bg-teal-400 rounded"></div>
              </div>
            </div>
            <div className="flex-1 bg-cyan-50 p-4 rounded-lg">
              <h3 className="font-semibold text-cyan-800 mb-3">Cyan Section</h3>
              <div className="space-y-2">
                <div className="w-full h-2 bg-cyan-200 rounded"></div>
                <div className="w-3/4 h-2 bg-cyan-300 rounded"></div>
                <div className="w-1/2 h-2 bg-cyan-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
