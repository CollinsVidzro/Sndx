// utils/schema.ts

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.sendexa.co/#organization",
  name: "Sendexa",
  url: "https://www.sendexa.co",
  logo: "https://static.sendexa.co/assets/sendexa-logo.png",
  sameAs: [
    "https://www.facebook.com/sendexahq",
    "https://x.com/sendexahq",
    "https://www.linkedin.com/company/sendexa",
    "https://www.instagram.com/sendexahq",
  ],
  founder: {
    "@id": "https://www.sendexa.co/#collins-vidzro",
  },
  employee: [
    {
      "@type": "Person",
      "@id": "https://www.sendexa.co/#collins-vidzro",
      name: "Collins Vidzro",
      jobTitle: "Chief Executive Officer",
      worksFor: { "@id": "https://www.sendexa.co/#organization" },
      image: "https://static.sendexa.co/team/collinsvidzro.jpg",
      sameAs: [
        "https://www.linkedin.com/in/collinsvidzro",
        "https://www.github.com/collinsvidzro",
        "https://x.com/collinsvidzro",
        "https://www.instagram.com/collinsvidzro",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.sendexa.co/#kane-vidzro",
      name: "Kane Vidzro",
      jobTitle: "Chief Technology Officer",
      worksFor: { "@id": "https://www.sendexa.co/#organization" },
      image: "https://static.sendexa.co/team/kanevidzro.jpg",
      sameAs: [
        "https://www.linkedin.com/in/kanevidzro",
        "https://www.github.com/kanevidzro",
        "https://x.com/kanevidzro",
        "https://www.instagram.com/kanevidzro",
      ],
    },
  ],
};
