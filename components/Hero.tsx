import Hero from "./ui/neural-network-hero";

export default function DemoOne() {
  return (
    <Hero 
      title="We craft intelligent digital experiences"
      description="Our flagship product, the Webcomposition Architecture Model (WAM) empowers teams to visually model, describe, and refine system architectures through an intuitive AI-assisted platform"
      badgeText="AI-Powered Modeling"
      badgeLabel="Beta"
      ctaButtons={[
        { text: "Start Building", href: "#get-started", primary: true },
        { text: "Watch Demo", href: "#showcase" }
      ]}
      microDetails={["AI assistance", "Realtime Validation", "Cost Modeling"]}
    />
  );
}
