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
        <h2 className="text-xl font-semibold">Colors</h2>
        <button
          onClick={toggleSort}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Sort by {sortKey === 'name' ? 'Hex Code' : 'Name'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colors.map((color) => (
          <div
            key={color.hexCode}
            className="p-4 rounded-lg shadow-md"
            style={{ backgroundColor: color.hexCode }}
          >
            <div className="bg-white bg-opacity-90 p-2 rounded">
              <p className="font-semibold text-gray-900">{color.name}</p>
              <p className="text-sm text-gray-900">{color.hexCode}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
