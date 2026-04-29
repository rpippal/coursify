"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function PaymentSuccessPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    if (session) {
      redirect("/dashboard");
    } else {
      redirect("/login");
    }
  }, [status, session]);

  return <p className="text-center mt-10">Finalizing your purchase...</p>;
}
