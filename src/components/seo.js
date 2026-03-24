import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, siteName }) => (
  <Helmet>
    <html lang="pl" />
    <title>{title} | {siteName}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
  </Helmet>
);

export default SEO;
