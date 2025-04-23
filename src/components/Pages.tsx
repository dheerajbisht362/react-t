const Pages = ({ data }) => (
  <div className="p-4 bg-purple-50 rounded-xl shadow">
    <h2 className="text-xl font-semibold">User Pages</h2>
    {data.map((page, i) => (
      <p key={i}>{page.page}</p>
    ))}
  </div>
);

export default Pages;
