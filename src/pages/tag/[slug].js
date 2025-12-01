import React from 'react';
import Head from "next/head";
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import TagBlogs from '@/components/Blogs/TagBlogs';

export default function Tag_Blogs() {
    return (
        <SecondaryLayout>
            <TagBlogs />
        </SecondaryLayout>
    );
}