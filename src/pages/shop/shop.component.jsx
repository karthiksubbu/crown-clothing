import { useState } from 'react';
import SHOP_DATA from './shop.data';
import ColletionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <ColletionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
