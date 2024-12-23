async function page() {
  await new Promise((res) => setTimeout(() => res(), 5000));

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const { data } = await res.json();
  console.log(data);

  return (
    <div>
      {data.posts.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  );
}

export default page;
