import React from 'react';
import ProductCard from './ProductCard';

const ProductContainer = ({ products }) => {
    console.log(products, 's')
    return (
        <section className="max-w-main mx-auto px-4 py-12">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                    Our Products
                </h2>
                <p className="mt-2 text-gray-500">
                    Discover our latest collection
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductContainer;