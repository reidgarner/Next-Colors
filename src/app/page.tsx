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
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Next.js Colors</h1>
      <ColorList initialColors={colors} />
    </main>
  );
}
