"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbItems: { label: string; path: string }[] = [];
  let currentPath = "";

  for (const segment of segments) {
    currentPath += `/${segment}`;
    // Si no tiene traducción (ID, slug, etc.)
    breadcrumbItems.push({
      label: segment,
      path: currentPath,
    });
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl font-semibold font-mono tracking-tight text-balance capitalize">
        {segments[0]}
      </h1>
      <div className="inline-flex mt-8 text-lg font-medium font-sans text-pretty text-gray-500">
        <Link href="/" className="text-indigo-400">
          Home
        </Link>
        {breadcrumbItems.map((item, index) => (
          <div key={index}>
            <span className="mx-2">&gt;</span>
            {index === breadcrumbItems.length - 1 ? (
              <span className="capitalize">{item.label}</span>
            ) : (
              <Link href={item.path} className="text-indigo-400 capitalize">
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
