import LargeSectionHeader from '@/components/shared/large-section-header';
import SectionHeader from '@/components/shared/section-header';
import React from 'react'

export const ProductsSection = () => {
  return (
    <div>
            <div className="pt-12  pb-6 flex justify-center">
                <SectionHeader title='| Our Products' />
            </div>

            <div className="pb-12 flex justify-center">
                <LargeSectionHeader title='Buy Homeopathy Medicine' />
            </div>
            
        </div>
  );
}


export default ProductsSection;
