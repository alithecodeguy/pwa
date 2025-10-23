import Header from "~/components/Header";
import Footer from "~/components/Footer";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PWA App - Home" },
    {
      name: "description",
      content: "Welcome to the PWA App with mobile app-like interface!",
    },
  ];
}

interface HomeProps {
  showHeader?: boolean;
  showFooter?: boolean;
}

export default function Home({
  showHeader = true,
  showFooter = true,
}: HomeProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header showHeader={showHeader} />

      {/* Main content with padding to account for fixed header and footer */}
      <main
        className={`${showHeader ? "pt-16" : "pt-0"} ${showFooter ? "pb-20" : "pb-0"} px-4`}
      >
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome to PWA App
          </h1>
          <p className="text-gray-600">Your mobile-first Progressive Web App</p>
        </div>

        {/* Sample Content Cards */}
        <div className="space-y-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Recent Activity
            </h2>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Quick Stats
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">42</div>
                <div className="text-sm text-gray-600">Items</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">128</div>
                <div className="text-sm text-gray-600">Points</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Featured Content
            </h2>
            <p className="text-gray-600 text-sm mb-3">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="bg-gray-100 rounded-lg p-3">
              <div className="text-sm text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Notifications
            </h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-2 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700">
                  New message received
                </span>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Update available</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Long Content Section
            </h2>
            <p className="text-gray-600 text-sm mb-3">
              This section contains longer content to test scrolling behavior
              and ensure the fixed header and footer don't interfere with the
              content.
            </p>
            <div className="space-y-3">
              <p className="text-sm text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p className="text-sm text-gray-700">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
              <p className="text-sm text-gray-700">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Additional Content
            </h2>
            <p className="text-gray-600 text-sm mb-3">
              More content to ensure proper scrolling and layout testing.
            </p>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-sm font-medium text-gray-800">Card 1</div>
                <div className="text-xs text-gray-600">
                  Description for card 1
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-sm font-medium text-gray-800">Card 2</div>
                <div className="text-xs text-gray-600">
                  Description for card 2
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-sm font-medium text-gray-800">Card 3</div>
                <div className="text-xs text-gray-600">
                  Description for card 3
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Final Section
            </h2>
            <p className="text-gray-600 text-sm">
              This is the final section to ensure there's enough content to test
              scrolling with the fixed header and footer.
            </p>
            <div className="mt-4 space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </main>

      <Footer showFooter={showFooter} />
    </div>
  );
}
