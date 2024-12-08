"use state";
import ShopPage from '@/components/Shop'
import React from 'react'
import ProductDetailsTabs from '@/components/shop2';

const Shop = () => {
  return (
    <div>
      <ShopPage/>
      <ProductDetailsTabs/>
    </div>
  )
}

export default Shop
