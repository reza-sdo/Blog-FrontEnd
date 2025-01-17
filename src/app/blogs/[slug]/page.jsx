import { getPostBySlug, getPosts } from '@/services/postService';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  //1- get all posts
  const data = await getPosts();
  //2- create data and return it
  const slugs = data.posts.map((post) => ({ slug: post.slug }));
  return slugs;
}

export async function generateMetadata({ params }) {
  const param = await params;
  const post = await getPostBySlug(param.slug);

  return {
    title: `پست - ${post.title}`,
  };
}

const SinglePost = async ({ params }) => {
  // await new Promise((res) => setTimeout(() => res(), 3000));
  const param = await params;
  const post = await getPostBySlug(param.slug);

  if (!post) notFound();
  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-video aspect-h-9 overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          fill
          src={post.coverImageUrl}
          alt={post.title}
        />
      </div>
      {/* {post.related.length > 0 ? <RelatedPost posts={post.related} /> : null} */}
      {/* <BlogComments post={post} /> */}
    </div>
  );
};

export default SinglePost;
