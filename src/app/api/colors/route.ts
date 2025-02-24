import { Color } from '@/types';
import { NextResponse } from 'next/server';

const colors: Color[] = [
  { name: 'Crimson', hexCode: '#DC143C' },
  { name: 'Forest Green', hexCode: '#228B22' },
  { name: 'Royal Blue', hexCode: '#4169E1' },
  { name: 'Purple', hexCode: '#800080' },
  { name: 'Orange', hexCode: '#FFA500' },
  { name: 'Turquoise', hexCode: '#40E0D0' },
];

export async function GET() {
  return NextResponse.json(colors);
} 
