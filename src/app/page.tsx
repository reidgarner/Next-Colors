import { ColorList } from '@/components';
import type { Color } from '@/types';

async function getColors(): Promise<Color[]> {
  const response = await fetch('http://localhost:3000/api/colors', {
    cache: 'no-store'
  });
  return response.json();
}

export default async function Home() {
  const colors = await getColors();

  return (
    <main className="container mx-auto px-4 pt-8 pb-16 relative min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Next.js Colors
      </h1>
      <ColorList initialColors={colors} />
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
        Thank you for your consideration.
      </span>
    </main>
  );
}
