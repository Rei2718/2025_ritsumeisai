import { NextResponse } from 'next/server';
import { createClient } from '@/supabase/server';

export async function GET() {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from('todos')
      .select('*');

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error('Failed to fetch todos:', error);

    const message =
      error instanceof Error
        ? error.message
        : 'An internal server error occurred.';

    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

// npm i supabase@">=1.8.1" --save-dev
// npx supabase login
// npx supabase init
// npx supabase gen types typescript --project-id "$PROJECT_REF" --schema public > database.types.ts