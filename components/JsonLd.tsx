export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://911service.am/#business',
    name: '911 Service',
    alternateName: ['911 Սերվիս', '911 Сервис'],
    description:
      'Professional coffee machine and household appliance repair in Yerevan. We pick up from your home, repair in our workshop, and return with up to 6-month warranty.',
    url: 'https://911service.am',
    telephone: '+37455721777',
    priceRange: '$$',
    currenciesAccepted: 'AMD',
    paymentAccepted: 'Cash, Card',
    image: 'https://911service.am/logo.jpg',
    logo: {
      '@type': 'ImageObject',
      url: 'https://911service.am/logo.jpg',
      width: 1254,
      height: 1254,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Yerevan',
      addressRegion: 'Yerevan',
      addressCountry: 'AM',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.1872,
      longitude: 44.5152,
    },
    areaServed: {
      '@type': 'City',
      name: 'Yerevan',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+37455721777',
      contactType: 'customer service',
      availableLanguage: ['Armenian', 'Russian', 'English'],
      contactOption: 'TollFree',
    },
    sameAs: ['https://wa.me/37455721777'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Appliance Repair Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Coffee Machine Repair',
            url: 'https://911service.am/services/coffee-machine',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Robot Vacuum Repair',
            url: 'https://911service.am/services/robot-vacuum',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vacuum Cleaner Repair',
            url: 'https://911service.am/services/vacuum',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Microwave Repair',
            url: 'https://911service.am/services/microwave',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hair Dryer Repair',
            url: 'https://911service.am/services/hair-dryer',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Iron Repair',
            url: 'https://911service.am/services/iron',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Steam Iron Repair',
            url: 'https://911service.am/services/iron-air',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Car Charger Repair',
            url: 'https://911service.am/services/car-charger',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Electrical Repair',
            url: 'https://911service.am/services/home-electrical',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '250',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
