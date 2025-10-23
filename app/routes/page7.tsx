import type { Route } from "./+types/page7";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page 7 - PWA App" },
    { name: "description", content: "This is page 7 of the PWA application" },
  ];
}

export default function Page7() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Page 7</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-lg text-gray-600 mb-4">
            Page 7 uses a sophisticated slate and gray color scheme.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-100 p-4 rounded-lg">
              <div className="w-12 h-12 bg-slate-600 rounded-lg mb-3"></div>
              <h3 className="font-semibold text-slate-800 mb-2">Slate Theme</h3>
              <p className="text-slate-700 text-sm">
                Professional and modern design
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="w-12 h-12 bg-gray-600 rounded-lg mb-3"></div>
              <h3 className="font-semibold text-gray-800 mb-2">Gray Theme</h3>
              <p className="text-gray-700 text-sm">
                Neutral and versatile styling
              </p>
            </div>
            <div className="bg-zinc-100 p-4 rounded-lg">
              <div className="w-12 h-12 bg-zinc-600 rounded-lg mb-3"></div>
              <h3 className="font-semibold text-zinc-800 mb-2">Zinc Theme</h3>
              <p className="text-zinc-700 text-sm">
                Clean and minimalist approach
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
