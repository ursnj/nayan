import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface Props {
  name?: string;
  type?: string;
  title?: string;
  description?: string;
  keywords?: string;
}

const Meta = (props: Props) => {
  const location = useLocation();
  const canonicalUrl = `https://www.nayanui.com${location.pathname}`;
  const {
    name = 'Nayan UI',
    type = 'article',
    title = 'React Component Library | React Reusable Components | React UI Library | Tailwind react Components',
    description = 'Nayan UI provides React component library based on Tailwind CSS and Radix UI. This library is a collection of pre-designed and pre-built React components that can be used to quickly and easily build beautiful and functional and fully accessible user interfaces for your web application.',
    keywords = 'React Component Library, React Reusable Components, React UI Library, react libraries, js react, Tailwind react Components, semantic ui react, Nayan UI'
  } = props;

  const finalTitle = 'Nayan UI - ' + title;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{finalTitle}</title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={description} />
      <meta property="keywords" content={keywords} />

      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content="https://www.nayanui.com/banner.png" />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:image" content="https://www.nayanui.com/banner.png" />
      {/* End Twitter tags */}
    </Helmet>
  );
};

export default Meta;
