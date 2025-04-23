const Analytics = ({ data }: { data: any }) => (
    <div className="p-4 bg-blue-50 rounded-xl shadow">
      <h2 className="text-xl font-semibold">User Analytics</h2>
      <p>Total Views: {data.views}</p>
    </div>
  );
  
  export default Analytics;
  