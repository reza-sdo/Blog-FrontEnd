'use client';
import useMoveBack from '@/hooks/useMoveBack';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-secondary-700 mb-8">
              پستی که دنبالش بودید، پیدا نشد
            </h1>
            <Link href="/blogs" className="text-secondary-500" replace>
              رفتن به صفحه پست ها؟
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
