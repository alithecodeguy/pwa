import type { Route } from "./+types/page4";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page 4 - PWA App" },
    { name: "description", content: "This is page 4 of the PWA application" },
  ];
}

export default function Page4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Page 4</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-lg text-gray-600 mb-4">
            Page 4 features an orange and red gradient background.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px] bg-orange-100 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-2">
                Orange Card
              </h3>
              <p className="text-orange-700 text-sm">
                Flexible layout with orange theme
              </p>
            </div>
            <div className="flex-1 min-w-[200px] bg-red-100 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">Red Card</h3>
              <p className="text-red-700 text-sm">
                Responsive design with red accents
              </p>
            </div>
            <div className="flex-1 min-w-[200px] bg-yellow-100 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">
                Yellow Card
              </h3>
              <p className="text-yellow-700 text-sm">
                Warm color palette combination
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
