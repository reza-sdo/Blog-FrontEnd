import { Suspense } from 'react';
import Spinner from '@/ui/Spinner';
import PostList from '../_components/PostList';
// this is for next 14 , in next 15 data is no cached 
// export const revalidate = 0
// because data is cached by default and we see out of date data 
//or we can set revalidate in fetch  
// this isi opt-out
async function page() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default page;
