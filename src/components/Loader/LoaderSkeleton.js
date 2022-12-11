import ContentLoader from 'react-content-loader';

export const LoaderSkeleton = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#351040"
    foregroundColor="#351052"
  >
    <rect x="5" y="15" rx="2" ry="2" width="100" height="50" />
    <rect x="115" y="15" rx="2" ry="2" width="100" height="50" />
    <rect x="225" y="15" rx="2" ry="2" width="100" height="50" />
    <rect x="335" y="15" rx="2" ry="2" width="100" height="50" />
    <rect x="5" y="75" rx="2" ry="2" width="100" height="50" />
    <rect x="115" y="75" rx="2" ry="2" width="100" height="50" />
    <rect x="225" y="75" rx="2" ry="2" width="100" height="50" />
    <rect x="335" y="75" rx="2" ry="2" width="100" height="50" />
    <rect x="5" y="135" rx="2" ry="2" width="100" height="50" />
    <rect x="115" y="135" rx="2" ry="2" width="100" height="50" />
    <rect x="225" y="135" rx="2" ry="2" width="100" height="50" />
    <rect x="335" y="135" rx="2" ry="2" width="100" height="50" />
  </ContentLoader>
);
