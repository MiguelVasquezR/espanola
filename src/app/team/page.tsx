import type { Metadata } from "next";

import Index from "@/page/team/index";

function IndexPage() {
  return <Index />;
}

export const metadata: Metadata = {
  title: "Equipo",
};

export default IndexPage;
