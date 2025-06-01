'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/supabase/client';
import type { Database } from '@/database.types';

const supabase = createClient();
type DataType = Database['public']['Tables']["junior_1_details"]["Row"]

export default function Junior_1_details() {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    async function loadData() {
      const { data, error } = await supabase
        .from('junior_1_details')
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
            table: 'junior_1_details'
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
        <div key={data.id}>
          <li >{data.title}</li>
          <li >{data.subtitle}</li>
          <li >{data.description}</li>
          <li >{data.adimageurl}</li>
          <li >{data.venue}</li>
          <li >{data.starttime}</li>
          <li >{data.endtime}</li>
          <li >{data.state}</li>
        </div>
      ))}
    </ul>
  );
}