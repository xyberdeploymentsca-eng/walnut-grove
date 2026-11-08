/** @format */

// Server only. Never import this (or sanity/lib/client) from a "use client" component:
// the value would be built into the JavaScript every visitor downloads.
// SANITY_API_TOKEN is the server-only name; the old public name is read until it is renamed in Vercel.
export const token =
  process.env.SANITY_API_TOKEN || process.env.NEXT_PUBLIC_SANITY_TOKEN;
