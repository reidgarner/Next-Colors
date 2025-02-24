'use client';

import { useState } from 'react';
import type { Color } from '@/types';

type SortKey = 'name' | 'hexCode';

interface ColorListProps {
  initialColors: Color[];
}

export const ColorList = ({ initialColors }: ColorListProps) => {
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [colors, setColors] = useState<Color[]>(initialColors);

  const toggleSort = () => {
    const newSortKey: SortKey = sortKey === 'name' ? 'hexCode' : 'name';
    setSortKey(newSortKey);

    const sortedColors = [...colors].sort((a, b) =>
      a[newSortKey].localeCompare(b[newSortKey])
    );
    setColors(sortedColors);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Colors sorted by {sortKey === 'name' ? 'name' : 'hex code'}</h2>
        <button
          onClick={toggleSort}
          className="relative px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition"
        >
          <span className={`${sortKey === 'name' ? 'hidden' : 'block'} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap`}>
            Sort by Name
          </span>
          <span
            className={sortKey === 'hexCode' ? 'invisible' : 'visible'}
            aria-hidden={sortKey === 'hexCode'}
          >
            Sort by Hex Code
          </span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colors.map((color) => (
          <div
            key={color.hexCode}
            className="p-4 rounded-lg shadow-md dark:shadow-gray-900"
            style={{ backgroundColor: color.hexCode }}
          >
            <div className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 p-2 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100">{color.name}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">{color.hexCode}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
