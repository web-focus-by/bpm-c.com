import * as React from "react"

const ScriptLD = () => {
    return (
        <script type="application/ld+json">
            {
                `{
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
                }`
            }
        </script>
    )
}

export default ScriptLD;