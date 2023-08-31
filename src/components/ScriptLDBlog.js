import * as React from "react"

const ARTICLE_SCHEMA = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "--ссылка на текущую статью--"
    },
    "headline": "--заголовок статьи h1--",
    "description": "--первые 2-3 предложения со статьи, в районе 200-300 символов.",
    "image": "--ссылка на первую картинку в статье--",
    "publisher": {
      "@type": "Organization",
      "name": "BPM Cloud",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wp.bpm-c.com/wp-content/uploads/2022/08/logo.svg"
      }
    },
    "datePublished": "--дата публикации. Формат:2023-06-27T15:04:28+03:00--"
  });
  
  const ScriptLDBlog = () => {
      return (
        <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: ARTICLE_SCHEMA} } />
      )
  }

export default ScriptLDBlog;