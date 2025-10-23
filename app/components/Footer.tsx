import { Link, useLocation } from "react-router";

interface FooterProps {
  showFooter?: boolean;
}

export default function Footer({ showFooter = true }: FooterProps) {
  const location = useLocation();

  if (!showFooter) return null;

  const navItems = [
    { path: "/page1", icon: "🏠", label: "Home", page: 1 },
    { path: "/page2", icon: "📊", label: "Stats", page: 2 },
    { path: "/page3", icon: "💜", label: "Favorites", page: 3 },
    { path: "/page4", icon: "🔔", label: "Alerts", page: 4 },
    { path: "/page5", icon: "⚙️", label: "Settings", page: 5 },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              <span className="text-xl mb-1">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
