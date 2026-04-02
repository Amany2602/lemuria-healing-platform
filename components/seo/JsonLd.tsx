export function JsonLd() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lemuria Healing",
    "image": "https://www.lemuriahealing.com.au/lemuria-assets/logo/logo.png",
    "@id": "https://www.lemuriahealing.com.au",
    "url": "https://www.lemuriahealing.com.au",
    "telephone": "+61 411 111 111", // Placeholder
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mornington Peninsula",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "postalCode": "3931",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -38.214,
      "longitude": 145.034
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/lemuriahealing",
      "https://www.instagram.com/lemuriahealing"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}
