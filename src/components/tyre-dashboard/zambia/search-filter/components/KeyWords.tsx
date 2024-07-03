import SearchIcon from 'components/common/Searchicon';
import { NextRouter, useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';

const KeyWords = ({
  getKeyword,
  resetToggle,
}: {
  getKeyword: (val: string) => void;
  resetToggle: boolean;
}) => {
  const {
    query: { keyword },
  }: NextRouter = useRouter();

  const [keywordText, setKeywordText] = useState<string>(
    keyword && !Array.isArray(keyword) ? keyword : ''
  );

  const handleKeyword = (e: FormEvent<HTMLInputElement>) => {
    setKeywordText(e.currentTarget.value);
    getKeyword(e.currentTarget.value);
  };

  useEffect(() => {
    if (resetToggle) {
      setKeywordText('');
    }
  }, [resetToggle]);

  return (
    <div className="pt-2 2xl:w-1/3 lg:w-1/3 sm:w-full xs:w-full xxs:w-full px-2 place-items-center 2xl:mb-0 lg:mb-2 md:mb-2 sm:mb-2 xs:mb-2 xxs:mb-2">
      <div className="flex w-full h-8 focus-within:shadow-lg bg-white overflow-hidden ">
        <div className="grid place-items-center h-full w-* ml-2">
          <SearchIcon />
        </div>

        <input
          className="peer h-full w-full outline-none text-xs text-black pr-2"
          type="text"
          value={keywordText}
          onChange={handleKeyword}
          placeholder="Keyword"
        />
      </div>
    </div>
  );
};

export default KeyWords;
