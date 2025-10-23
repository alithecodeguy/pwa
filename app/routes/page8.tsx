import type { Route } from "./+types/page8";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page 8 - PWA App" },
    { name: "description", content: "This is page 8 of the PWA application" },
  ];
}

export default function Page8() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Page 8</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-lg text-gray-600 mb-4">
            Page 8 features warm amber and yellow tones for a cheerful
            appearance.
          </p>
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-2">
                Amber Section
              </h3>
              <p className="text-amber-700">
                Warm and inviting amber color scheme
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Yellow</h4>
                <p className="text-yellow-700 text-sm">Bright and energetic</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-medium text-orange-800 mb-2">Orange</h4>
                <p className="text-orange-700 text-sm">Vibrant and warm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
