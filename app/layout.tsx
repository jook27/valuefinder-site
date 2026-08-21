import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ValueFinder — 금융 사이트 길안내",
  description: "원하는 재무 정보가 있는 메뉴를 찾고, 없으면 대체 사이트까지 안내하는 Chrome 확장 프로그램.",
  openGraph: {
    title: "ValueFinder — 금융 사이트 길안내",
    description: "찾는 재무정보까지, 헤매지 말고 바로.",
    images: ["/og.png"],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ValueFinder — 금융 사이트 길안내",
    description: "찾는 재무정보까지, 헤매지 말고 바로.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
