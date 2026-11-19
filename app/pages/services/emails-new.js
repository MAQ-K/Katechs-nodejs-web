import React from "react";
import ContentPage from "../../components/ContentNew/ContentPage";
import page from "../../data/content-new/emails";
import theme from "../../components/ContentNew/themes/emails";

export default function Page() {
  return <ContentPage page={page} theme={theme} />;
}
