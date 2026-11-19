import React from "react";
import ContentPage from "../../components/ContentNew/ContentPage";
import page from "../../data/content-new/seo-v2-quote";
import theme from "../../components/ContentNew/themes/seo-v2";

export default function Page() {
  return <ContentPage page={page} theme={theme} />;
}
