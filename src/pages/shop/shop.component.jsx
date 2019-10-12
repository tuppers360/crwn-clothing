import React from "react";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionOverview key={id} {...otherProps} />
    ))}
  </div>
);

export default ShopPage;
