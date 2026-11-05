import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  schemaJson?: string;
}

export function SEOHead({ 
  title, 
  description, 
  canonical, 
  ogImage = 'https://vibe.filesafe.space/1778622835347500334/assets/c5a27022-768d-4c36-93c5-8ca7cc3a6481.png', 
  noIndex = false,
  schemaJson
}: SEOHeadProps) {
  const siteName = "Sowa Marketing Agency";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@SowaMarketing" />
      <meta name="twitter:creator" content="@SowaMarketing" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {canonical && <link rel="canonical" href={canonical} />}

      {/* Structured Data (Schema.org) */}
      {schemaJson && <script type="application/ld+json">{schemaJson}</script>}
    </Helmet>
  );
}
