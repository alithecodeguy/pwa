import type { Route } from "./+types/page6";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page 6 - PWA App" },
    { name: "description", content: "This is page 6 of the PWA application" },
  ];
}

export default function Page6() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Page 6</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-lg text-gray-600 mb-4">
            Page 6 features a pink and rose gradient with elegant styling.
          </p>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-6 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-3">
                Gradient Card
              </h3>
              <p className="text-pink-700">
                This card uses a gradient background for visual appeal.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-medium text-pink-800 mb-2">Left Column</h4>
                <p className="text-pink-700 text-sm">
                  Content in the left column with pink theme.
                </p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg">
                <h4 className="font-medium text-rose-800 mb-2">Right Column</h4>
                <p className="text-rose-700 text-sm">
                  Content in the right column with rose theme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
