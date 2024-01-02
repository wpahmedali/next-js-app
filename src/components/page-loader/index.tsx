import { useState, useEffect } from 'react';
import { SpinnerIcon } from 'icons';

const PageLoader = ({ isLoading: initialLoading }: { isLoading: boolean }) => {
  const [isLoading, setIsLoading] = useState(initialLoading);

  useEffect(() => {
    setIsLoading(initialLoading);
  }, [initialLoading]);

  useEffect(() => {
    const handleScroll = () => {
      if (isLoading) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = 'auto';
      }
    };

    handleScroll();

    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [isLoading]);

  return (
    <div
      className={`fixed inset-0 bg-[#404040f2] flex items-center justify-center z-50 ${
        isLoading ? '' : 'hidden'
      }`}
    >
      <SpinnerIcon className="w-14 h-14 animate-spin text-primary" />
    </div>
  );
};

export default PageLoader;
