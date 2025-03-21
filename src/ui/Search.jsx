'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const INPUT_NAME = 'search';
export default function Search() {
  const searchParams = useSearchParams();

  const path = usePathname();
  const router = useRouter();

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    const searchObj = event.target[INPUT_NAME];
    const searchValue = searchObj.value;

    const newParam = new URLSearchParams(searchParams.toString());

    if (searchValue) {
      newParam.set(INPUT_NAME, searchValue);
    } else {
      newParam.delete(INPUT_NAME);
    }

    router.push(`${path}?${newParam.toString()}`, { scroll: false });
  };

  return (
    <form className="relative" onSubmit={searchSubmitHandler}>
      <input
        // key={searchParams?.get('search')}
        type="text"
        name={INPUT_NAME}
        placeholder="جستجو ..."
        autoComplete="off"
        // defaultValue={searchParams?.get('search') || ''}
        className="textField__input py-3 text-xs bg-secondary-0"
      />
      <button
        type="submit"
        className="absolute left-0 top-0 ml-3 flex h-full items-center"
      >
        <MagnifyingGlassIcon className="h-4 text-secondary-400" />
      </button>
    </form>
  );
}
