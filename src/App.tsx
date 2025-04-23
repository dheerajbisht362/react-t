import { Suspense, useEffect, useState } from "react";
import { getDashboardData } from "./lib/data";
import { Spinner } from "./components/Spinner";

import Analytics from "./components/Analytics";
import Posts from "./components/Posts";
import Pages from "./components/Pages";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadDashboardData = async () => {
      const fetched = await getDashboardData();
      setData(fetched);
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
        <Analytics data={data.useranalytics} />
        <Posts data={data.userpost} />
        <Pages data={data.userpages} />
      </Suspense>
    </div>
  );
}

export default App;
