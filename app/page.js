"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import MainLayout from "@/client/layouts/MainLayout";
import FAQs from "@/client/components/FAQs";
import Newsletter from "@/client/components/Newsletter";

export default function Home() {
  const router = useRouter();
  const { status } = useSession(); // 'loading' | 'authenticated' | 'unauthenticated'

  useEffect(() => {
    if (status === "loading") return; // wait until session status is known

    if (status === "unauthenticated") {
      const timer = setTimeout(() => {
        const currentUrl = window.location.href;
        router.push(`/auth?callbackUrl=${encodeURIComponent(currentUrl)}`);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status, router]);

  return (
    <MainLayout>
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <p>
          {status === "authenticated"
            ? "You are already signed in."
            : "You will be redirected to login in 5 seconds..."}
        </p>
      </div>
      <FAQs />
      <Newsletter />
    </MainLayout>
  );
}
