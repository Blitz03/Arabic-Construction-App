"use client";

import { useState } from "react";
import Works from "@/components/sections/Works";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeType, setActiveType] = useState("image");

  function handleCategoryChange(category) {
    setCurrentPage(1);
    setActiveCategory(category);
  }

  function handleTypeChange(type) {
    setCurrentPage(1);
    setActiveType(type);
  }

  return (
    <div className="min-h-screen">
      <Works
        activeCategory={activeCategory}
        activeType={activeType}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        handleCategoryChange={handleCategoryChange}
        handleTypeChange={handleTypeChange}
        isRoute
      />
    </div>
  );
}
