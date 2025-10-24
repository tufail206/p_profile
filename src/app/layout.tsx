import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tufail Abbas - MERN Stack Developer",
  description:
    "Portfolio of Tufail Abbas, a MERN Stack Developer with expertise in Next.js, TypeScript, Tailwind CSS, and ShadCN Material UI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
        className="font-sans bg-white text-gray-900"
      >
        {children}
      </body>
    </html>
  );
}
