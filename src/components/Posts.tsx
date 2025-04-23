const Posts = ({ data }) => (
  <div className="p-4 bg-green-50 rounded-xl shadow">
    <h2 className="text-xl font-semibold">Recent Posts</h2>
    {data.map((post, i) => (
      <p key={i}>{post.title}</p>
    ))}
  </div>
);

export default Posts;
