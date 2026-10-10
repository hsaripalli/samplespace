import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { qualities: [75, 80] },
  // Lets a phone on the same network load the dev server's scripts (192.168.x.x is a private LAN range).
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
};

export default nextConfig;
