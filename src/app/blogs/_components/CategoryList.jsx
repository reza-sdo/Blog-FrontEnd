import Link from 'next/link';

const CategoryList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();

  return (
    <ul className="space-y-4">
      <Link href="/blogs">همه</Link>
      {categories.map((cate) => (
        <li>
          <Link href={`/blogs/category/${cate.slug}`}>{cate.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
