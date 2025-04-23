import React, { Suspense, useEffect, useState } from "react";
import { getDashboardData } from "./lib/data";
import { Spinner } from "./components/Spinner";

// Lazy-loaded components for optimized bundle size
const LazyAnalytics = React.lazy(() => import("./components/Analytics"));
const LazyPosts = React.lazy(() => import("./components/Posts"));
const LazyPages = React.lazy(() => import("./components/Pages"));

// Type definition for fetched dashboard data
interface DashboardData {
  useranalytics: any;
  userpost: any;
  userpages: any;
}

function App() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    
    const loadDashboardData = async () => {
      // Uncomment for basic client-side caching:
      // const cached = localStorage.getItem("dashboard-data");
      // if (cached) {
      //   setData(JSON.parse(cached));
      //   return;
      // }

      const fetched = await getDashboardData();
      setData(fetched);

      // localStorage.setItem("dashboard-data", JSON.stringify(fetched));
    };

    loadDashboardData();
  }, []);

  if (!data) {
    return (
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Optimized Dashboard</h1>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Optimized Dashboard</h1>
      <Suspense fallback={<Spinner />}>
        <LazyAnalytics data={data.useranalytics} />
        <LazyPosts data={data.userpost} />
        <LazyPages data={data.userpages} />
      </Suspense>
    </div>
  );
}

export default App;
