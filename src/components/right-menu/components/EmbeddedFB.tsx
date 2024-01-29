import React from 'react';
import { FBAppId, FBPageName } from 'src/common/constants';
import { useCurrentCountry } from 'src/hooks/current-country';

const EmbeddedFB = (): JSX.Element => {
  const currentCountry = useCurrentCountry();

  return (
    <div className="w-full 2xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden">
      <iframe
        src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${
          currentCountry?.FBPageName || FBPageName
        }&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=${
          currentCountry?.FBAppId || FBAppId
        }`}
        width="100%"
        height="900"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default EmbeddedFB;
