import { Suspense } from 'react';
import { Spinner } from '@/ui/Spinner';
import PostList from '../_components/PostList';
import { cookies } from 'next/headers';
import setCookiesOnRequest from '@/utils/setCookiesOnRequest';
import { getPosts } from '@/services/postService';
// this is for next 14 , in next 15 data is no cached
// export const revalidate = 0
// because data is cached by default and we see out of date data
//or we can set revalidate in fetch
// this is opt-out

// export const experimental_ppr = true;

async function page() {
  const cookieStore = await cookies();
  const options = await setCookiesOnRequest(cookieStore);
  const data = await getPosts(options);
  return (
    <div>
      <PostList posts={data} />
    </div>
  );
}

export default page;
