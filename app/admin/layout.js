"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import AdminLayout from "@/client/layouts/AdminLayout";

export default function Layout({ children }) {
  const { data: session, status } = useSession();
  console.log(">>>>session",session,">>>>status",status);
  
  const [role, setRole] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      const userRole = session?.user?.role;
      setRole(userRole);

      if (userRole && userRole !== "admin") {
        router.push("/");
      }
    } else if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [session, status, router]);

  if (role === "admin") {
    return <AdminLayout>{children}</AdminLayout>;
  }

  return null;
}