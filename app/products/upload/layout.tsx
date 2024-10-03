import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "E-SHOP - Upload",
    description: "Upload your products easily using E-SHOP",
    openGraph: {
        images: [`/assets/share-image.png`]
    },
    alternates: {
        canonical: `/products/upload`,
    }

};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>{children}</>
    )
}
