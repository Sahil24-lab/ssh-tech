import { services } from "./services";

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "Service",
    position: index + 1,
    name: service.title,
    provider: { "@type": "Organization", name: "SSH Tech" },
    description: service.description,
    serviceType: service.label.replace(/^\\d+\\s+—\\s+/, ""),
  })),
};

export default function AIServicesSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
    />
  );
}
