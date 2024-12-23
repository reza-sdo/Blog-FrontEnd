import Link from 'next/link';

const CategoryList = async () => {
  const res = await fetch('http://localhost:5000/api/category/list');
  const {
    data: { categories },
  } = await res.json();
  console.log(categories);

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
