import React from 'react';
import Head from "next/head";
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import CategoryBlogs from '@/components/Blogs/CategoryBlogs';

export default function Category_Blogs() {
    return (
        <SecondaryLayout>
            <CategoryBlogs />
        </SecondaryLayout>
    );
}