import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";
import React from "react";

export default function Index() {
  const router = useRouter();
  React.useEffect(() => {
    router.push("/home");
  }, [router]);

  return <DefaultLayout></DefaultLayout>;
}
