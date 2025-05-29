'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/supabase/client';
import type { Database } from '@/database.types';

const supabase = createClient();
type DataType = Database['public']['Tables']['todos']['Row'];

export default function TodoList() {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    async function loadData() {
      const { data, error } = await supabase
        .from('todos')
        .select();
      if (error) {
        console.error('Error loading data:', error);
      } else {
        setData(data ?? []);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
            event: '*',
            schema: 'public',
            table: 'todos'
        },
        (payload) => console.log(payload)
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <ul>
      {data.map(data => (
        <li key={data.id}>{data.task}</li>
      ))}
    </ul>
  );
}