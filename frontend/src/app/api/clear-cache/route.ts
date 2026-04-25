import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    revalidatePath('/', 'layout');
    return NextResponse.json({ success: true, message: 'Cache cleared successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to clear cache' }, { status: 500 });
  }
}
