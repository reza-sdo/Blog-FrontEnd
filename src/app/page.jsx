import Button from '@/ui/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-primary-100">
      page تست فارسی
      <Button variant="primary">
        <Link href={'ggg'}>ssdsdsd</Link>
      </Button>
    </div>
  );
}
