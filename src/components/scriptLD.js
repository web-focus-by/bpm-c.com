import * as React from "react"

const ORG_SCHEMA = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "url" : "https://bpm-c.com/",
    "logo": "https://wp.bpm-c.com/wp-content/uploads/2022/08/logo.svg",
    "name" : "BPM Cloud",
    "email": "hello@bpm-c.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Minsk, Belarus",
      "postalCode": "220013",
      "streetAddress": "Independence Avenue, 77"
      },
    "contactPoint" : [
      { "@type" : "ContactPoint",
        "telephone" : "+ 1 929 547 9159",
        "contactType" : "customer service",
        "areaServed" : "US"
      } , {
        "@type" : "ContactPoint",
        "telephone" : "+ 1 647 493 9093",
        "contactType" : "customer service",
        "areaServed" : "CA"
      }
    ]
  });

  const LOCAL_SCHEMA = JSON.stringify({
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	"name": "BPM Cloud",
	"pricerange": "$$$",
  "email": "hello@bpm-c.com",
	"contactPoint" : [
    { "@type" : "ContactPoint",
      "telephone" : "+ 1 929 547 9159",
      "contactType" : "customer service",
      "areaServed" : "US"
    } , {
      "@type" : "ContactPoint",
      "telephone" : "+ 1 647 493 9093",
      "contactType" : "customer service",
      "areaServed" : "CA"
    }
  ],
	"openingHours": "Mo,Tu,We,Th,Fr, 09:00-20:00",
	"openingHoursSpecification": [ {
		"@type": "OpeningHoursSpecification",
		"dayOfWeek": [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday"
		],
		"opens": "09:00",
		"closes": "20:00"
	} ],
	"geo": {
		"@type": "GeoCoordinates",
		"latitude": "53.922135",
		"longitude": "27.598635"
	},
	"image": "https://wp.bpm-c.com/wp-content/uploads/2022/08/logo.svg"
});
  
  const ScriptLD = () => {
      return (
        <>
        <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: ORG_SCHEMA} } />
        <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: LOCAL_SCHEMA} } />
        </>
      )
  }

export default ScriptLD;