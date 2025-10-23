import Header from "~/components/Header";
import Footer from "~/components/Footer";
import type { Route } from "./+types/page1";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page 1 - PWA App" },
    { name: "description", content: "This is page 1 of the PWA application" },
  ];
}

interface Page1Props {
  showHeader?: boolean;
  showFooter?: boolean;
}

export default function Page1({
  showHeader = true,
  showFooter = true,
}: Page1Props) {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header showHeader={showHeader} />

      <main
        className={`${showHeader ? "pt-16" : "pt-0"} ${showFooter ? "pb-20" : "pb-0"} px-4`}
      >
        <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Page 1</h1>
          <p className="text-gray-600">
            Welcome to Page 1! This is a Progressive Web App built with React
            Router.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">PWA Features</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Offline functionality</li>
              <li>• Installable on devices</li>
              <li>• Service worker caching</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Navigation</h3>
            <p className="text-sm text-green-700">
              Use the navigation to explore other pages in this PWA.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Sample Content</h3>
            <p className="text-sm text-gray-700 mb-3">
              This page demonstrates the mobile app layout with proper spacing
              for the fixed header and footer.
            </p>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-4/5"></div>
              <div className="h-3 bg-gray-200 rounded w-3/5"></div>
            </div>
          </div>
        </div>
      </main>

      <Footer showFooter={showFooter} />
    </div>
  );
}
