// Use in ./app/user/[[...slug]]/page.tsx
import React from 'react';
import User from './User';
import Login from './Login';
import Manage from './Manage';
import Register from './Register';
import Close from './Close';
import { notFound } from 'next/navigation';
import Logout from './Logout';

export default function AuthRouter({ params, searchParams }: { params: { slug?: string[] }; searchParams: any }) {
  const { slug } = params;
  const pages = {
    login: <Login searchParams={searchParams} />,
    logout: <Logout />,
    manage: <Manage />,
    register: <Register services={{}} />,
    close: <Close />,
  };
  if (!slug) return <User />;
  else {
    if (slug[0] in pages) return pages[slug[0] as keyof typeof pages];
    else return notFound();
  }
}
