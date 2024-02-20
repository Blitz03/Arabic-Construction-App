"use client";

import { useState } from "react";
import { categories, works } from "@/constants";
import WorkCard from "@/components/cards/WorkCard";
import Subheader from "@/components/shared/Subheader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PaginationComponent from "@/components/shared/PaginationComponent";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  function handleTabChange() {
    setCurrentPage(1);
  }

  function filterWorksByCategory(category) {
    if (category === "all") {
      return works;
    } else {
      return works.filter((work) => work.category === category);
    }
  }

  const renderWorkCards = (category) => {
    const filteredWorks = filterWorksByCategory(category);

    // Sort works by isFeatured property, placing featured works first
    filteredWorks.sort((a, b) =>
      a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1
    );

    const startIndex = (currentPage - 1) * itemsPerPage;

    const endIndex = startIndex + itemsPerPage;

    return filteredWorks
      .slice(startIndex, endIndex)
      .map((work, index) => <WorkCard key={index} work={work} />);
  };

  const renderPagination = (category) => {
    const filteredWorks = filterWorksByCategory(category);

    return (
      <PaginationComponent
        totalItems={filteredWorks.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    );
  };

  return (
    <div className="min-h-screen">
      <div className="container">
        <Subheader text="أعمالنا" />

        {/* Tabs */}
        <Tabs
          dir="rtl"
          defaultValue="all"
          className="w-full flex flex-col items-center gap-10">
          <TabsList className="rounded-full py-8 sm:py-10 px-2 w-full xs:w-auto justify-start xs:justify-center bg-gray-200 text-gray-600">
            {categories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                className="rounded-full p-3 sm:p-5"
                onClick={handleTabChange}>
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent
              key={category.value}
              value={category.value}
              className="w-full">
              <div className="flex-wrapper">
                {renderWorkCards(category.value)}
              </div>

              {renderWorkCards(category.value).length === 0 && (
                <p className="text-body-semibold text-center">
                  لم يتم العثور على أعمال
                </p>
              )}

              {renderPagination(category.value)}
            </TabsContent>
          ))}
        </Tabs>
        {/* Tabs */}
      </div>
    </div>
  );
}
