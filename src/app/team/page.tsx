import type { Metadata } from "next";

import Index from "@/page/team/index";
import { Suspense } from "react";

function IndexPage() {
  return (
    <Suspense>
      <Index />
    </Suspense>
  );
}

export const metadata: Metadata = {
  title: "Equipo",
};

export default IndexPage;
