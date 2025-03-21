"use client"; // If using Next.js App Router

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const products = [
  { id: 14, name: "Samsung S25", description: "4.5/5", price: 210, image: "/img-18.jpg", brand: "Samsung", condition: "New" },
  { id: 15, name: "Redme 9 pro", description: "4.5/5", price: 180, image: "/img-19.jpg", brand: "Redmi", condition: "Used" },
  { id: 23, name: "Samsung A20", description: "4.5/5", price: 150, image: "/img-27.jpg", brand: "Samsung", condition: "New" },
  { id: 25, name: "Samsung A10", description: "4.5/5", price: 120, image: "/img-29.jpg", brand: "Samsung", condition: "Used" },
];

const FilterPage = () => {
  // Get min/max prices from product data
  const minPrice = Math.min(...products.map(p => p.price));
  const maxPrice = Math.max(...products.map(p => p.price));

  // State for price range
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // ✅ FIXED: Ensure newRange updates properly
  const handleSliderChange = (newRange: number[]) => {
    setPriceRange(newRange);
  };

  // ✅ FIXED: Ensure event `e` is handled correctly
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = parseInt(e.target.value) || minPrice;
    setPriceRange([Math.max(newMin, minPrice), priceRange[1]]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseInt(e.target.value) || maxPrice;
    setPriceRange([priceRange[0], Math.min(newMax, maxPrice)]);
  };

  // Apply filter
  const applyFilter = () => {
    const filtered = products.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    setFilteredProducts(filtered);
  };

  return (
    <div className="container w-[200px]">
      <h3 className="font-bold mb-2 text-lg">Price Range</h3>

      {/* Debugging Output */}
      <p className="text-sm text-gray-500 mb-2">Selected Range: ${priceRange[0]} - ${priceRange[1]}</p>

      {/* ✅ FIXED: Pass correct value & ensure updates */}
      <Slider 
        value={priceRange} 
        min={minPrice} 
        max={maxPrice} 
        step={10} 
        onValueChange={handleSliderChange} 
        className="bg-blue-300" 
      />

      {/* Min & Max Inputs */}
      <div className="flex gap-5 mt-3">
        <div>
          <p className="py-2">Min</p>
          <Input 
            type="number" 
            value={priceRange[0]} 
            min={minPrice} 
            max={maxPrice} 
            onChange={handleMinChange} 
          />
        </div>
        <div>
          <p className="py-2">Max</p>
          <Input 
            type="number" 
            value={priceRange[1]} 
            min={minPrice} 
            max={maxPrice} 
            onChange={handleMaxChange} 
          />
        </div>
      </div>

      {/* Apply Button */}
      <Button 
        onClick={applyFilter} 
        className="bg-blue-500 text-white w-full mt-4"
      >
        Apply Filter
      </Button>

      
  <div className="py-5">
      {/* Display Filtered Products */}
      <h3 className="font-bold text-lg mb-3">Filtered Products</h3>
      <ul className="space-y-2">
        {filteredProducts.map((product) => (
          <li key={product.id} className="border p-2 rounded-md hover:bg-blue-500 hover:text-white">
            <p className="font-medium">{product.name}</p>
          </li>
        ))}
      </ul>
      </div>

    </div>
  );
};

export default FilterPage;
