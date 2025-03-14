import PostList from 'app/blogs/_components/PostList';
import React from 'react';

async function CategoryPage({ params }) {
  const { categorySlug } = await params;
  // get slug
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?categorySlug=${categorySlug}`
  );
  const { data } = (await res.json()) || {};
  return (
    <div>
      {data.posts.length === 0 ? (
        <p className="text-lg text-secondary-600">
          پستی در این دسته بندی پیدا نشد
        </p>
      ) : (
        <PostList posts={data} />
      )}
    </div>
  );
}

export default CategoryPage;
