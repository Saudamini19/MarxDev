import Hero from "./ui/neural-network-hero";

export default function DemoOne() {
  return (
    <Hero 
      title="We craft intelligent digital experiences"
      description="ArchiFlow, our flagship product, empowers teams to visually model, describe, and refine system architectures through an intuitive AI-assisted platform"
      badgeText="AI-Powered Modeling"
      badgeLabel="Beta"
      ctaButtons={[
        { text: "Start Building", href: "#get-started", primary: true },
        { text: "Watch Demo", href: "https://www.linkedin.com/feed/update/urn:li:activity:7419307752017051648" }
      ]}
      microDetails={["AI assistance", "Realtime Validation", "Cost Modeling"]}
    />
  );
}
 