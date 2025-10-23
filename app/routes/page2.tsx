import type { Route } from "./+types/page2";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page 2 - PWA App" },
    { name: "description", content: "This is page 2 of the PWA application" },
  ];
}

export default function Page2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Page 2</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-lg text-gray-600 mb-4">
            This is Page 2 with a different color scheme and content.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-100 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-green-800 mb-2">Feature A</h3>
              <p className="text-sm text-green-700">Interactive components</p>
            </div>
            <div className="bg-emerald-100 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-emerald-800 mb-2">Feature B</h3>
              <p className="text-sm text-emerald-700">Responsive design</p>
            </div>
            <div className="bg-teal-100 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-teal-800 mb-2">Feature C</h3>
              <p className="text-sm text-teal-700">Modern UI/UX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
