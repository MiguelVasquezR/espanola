import type { Metadata } from "next";

import Index from "@/page/inicio/index";

function IndexPage() {
  return <Index />;
}

export const metadata: Metadata = {
  title: "Inicio",
};

export default IndexPage;
