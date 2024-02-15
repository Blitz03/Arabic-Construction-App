export default function LocalBusinessMarkup({
  name,
  description,
  address,
  telephone,
  url,
  geo,
}) {
  const ldJson = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: name,
    description: description,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    telephone: telephone,
    url: url,
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
  };

  return <script type="application/ld+json">{JSON.stringify(ldJson)}</script>;
}
