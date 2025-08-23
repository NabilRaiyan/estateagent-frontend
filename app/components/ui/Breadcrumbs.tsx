'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { useEffect, useState } from 'react';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const pathParts = pathname?.split('/').filter(Boolean) || [];

  // Don't show breadcrumbs on homepage
  if (pathParts.length === 0) return null;

  const capitalize = (str: string): string => {
    return str
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <nav className="flex justify-center w-full px-4 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center text-sm text-gray-500">
        
        {/* Home Link */}
        <Link 
          href="/" 
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <Home className="h-4 w-4 mr-1" />
          Home
        </Link>
        
        {/* Breadcrumb Path */}
        {pathParts.map((part, index) => {
          const href = '/' + pathParts.slice(0, index + 1).join('/');
          const isLast = index === pathParts.length - 1;
          const capitalizedPart = capitalize(part);

          return (
            <div key={index} className="flex items-center">
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
              {isLast ? (
                <span className="text-gray-900 font-medium">
                  {capitalizedPart}
                </span>
              ) : (
                <Link
                  href={href}
                  className="hover:text-gray-900 transition-colors"
                >
                  {capitalizedPart}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;