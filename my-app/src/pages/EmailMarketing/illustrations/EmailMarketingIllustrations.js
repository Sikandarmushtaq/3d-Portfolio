import MarketingServiceVisual from "../../../Components/MarketingPage/MarketingServiceVisual";

export function EmailMarketingIllustration() {
  return <MarketingServiceVisual service="email" mode="platform" label="Email Marketing visual" />;
}

export function EmailMarketingWhyIllustration() {
  return <MarketingServiceVisual service="email" mode="network" label="Email Marketing strategy visual" />;
}

export function EmailMarketingProcessIllustration() {
  return <MarketingServiceVisual service="email" mode="process" label="Email Marketing process visual" />;
}

export function EmailMarketingFaqIllustration() {
  return <MarketingServiceVisual service="email" mode="faq" label="Email Marketing FAQ visual" />;
}
