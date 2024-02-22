import WorkCard from "../cards/WorkCard";
import ButtonComponent from "../shared/ButtonComponent";
import Subheader from "../shared/Subheader";
import { categories, works } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PaginationComponent from "../shared/PaginationComponent";

export default function Works({
  activeCategory,
  activeType,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  handleCategoryChange,
  handleTypeChange,
  isRoute,
}) {
  function filterWorksByCategory(category, type) {
    if (isRoute) {
      if (category === "all") {
        return works.filter((work) => work.type === type);
      } else {
        return works.filter(
          (work) => work.category === category && work.type === type
        );
      }
    } else {
      if (category === "all") {
        return works;
      } else {
        return works.filter((work) => work.category === category);
      }
    }
  }

  function renderWorkCards(category) {
    if (isRoute) {
      const filteredWorks = filterWorksByCategory(activeCategory, activeType);

      filteredWorks.sort((a, b) =>
        a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1
      );

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      return filteredWorks
        .slice(startIndex, endIndex)
        .map((work, index) => <WorkCard key={index} work={work} />);
    } else {
      const filteredWorks = filterWorksByCategory(category);

      filteredWorks.sort((a, b) =>
        a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1
      );

      return filteredWorks
        .slice(0, 6)
        .map((work, index) => <WorkCard key={index} work={work} />);
    }
  }

  function renderPagination() {
    const filteredWorks = filterWorksByCategory(activeCategory, activeType);

    return (
      <PaginationComponent
        totalItems={filteredWorks.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    );
  }

  return (
    <section id={isRoute ? "" : "works"}>
      <div className="container text-center">
        {/* Subheading */}
        <Subheader text="أعمالنا" className="mt-16" />
        {/* Subheading */}

        {/* Tabs */}
        <Tabs
          dir="rtl"
          defaultValue="all"
          className="w-full flex flex-col items-center gap-10">
          <TabsList className="rounded-full py-8 sm:py-10 px-2 w-full xs:w-auto justify-start xs:justify-center bg-gray-200 text-gray-600">
            {categories.map((category) =>
              isRoute ? (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="rounded-full p-3 sm:p-5"
                  onClick={() => handleCategoryChange(category.value)}>
                  {category.title}
                </TabsTrigger>
              ) : (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="rounded-full p-3 sm:p-5">
                  {category.title}
                </TabsTrigger>
              )
            )}
          </TabsList>

          {/* Secondary Tabs for Type */}
          {isRoute && (
            <Tabs
              dir="rtl"
              defaultValue="image"
              className="w-full flex flex-col items-center gap-10">
              <TabsList className="rounded-full py-7 justify-start xs:justify-center bg-gray-200 text-gray-600">
                <TabsTrigger
                  className="p-3 rounded-full"
                  value="image"
                  onClick={() => handleTypeChange("image")}>
                  الصور
                </TabsTrigger>

                <TabsTrigger
                  className="p-3 rounded-full"
                  value="video"
                  onClick={() => handleTypeChange("video")}>
                  الفيديوهات
                </TabsTrigger>
              </TabsList>
            </Tabs>
          )}
          {/* Secondary Tabs for Type */}

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

              {isRoute ? (
                renderPagination()
              ) : (
                <ButtonComponent
                  className="mt-12"
                  text="رؤية المزيد"
                  href="/works"
                />
              )}
            </TabsContent>
          ))}
        </Tabs>
        {/* Tabs */}
      </div>
    </section>
  );
}
