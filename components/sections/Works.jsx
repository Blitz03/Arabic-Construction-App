import WorkCard from "../cards/WorkCard";
import ButtonComponent from "../shared/ButtonComponent";
import Subheader from "../shared/Subheader";
import { categories, works } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Works() {
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

    return filteredWorks
      .slice(0, 6)
      .map((work, index) => <WorkCard key={index} work={work} />);
  };

  return (
    <section id="works">
      <div className="container text-center">
        {/* Subheading */}
        <Subheader text="أعمالنا" className="mt-16" />
        {/* Subheading */}

        {/* Tabs */}
        <Tabs
          defaultValue="all"
          className="w-full flex flex-col items-center gap-10">
          <TabsList className="rounded-full py-8 sm:py-10 px-2 w-full xs:w-auto justify-start xs:justify-center bg-gray-200 text-gray-600">
            {categories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                className="rounded-full p-3 sm:p-5">
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent
              key={category.value}
              value={category.value}
              className="w-full">
              <div className="works-wrapper">
                {renderWorkCards(category.value)}
              </div>

              {renderWorkCards(category.value).length === 0 && (
                <p className="text-body-semibold text-center">
                  لم يتم العثور على أعمال
                </p>
              )}
            </TabsContent>
          ))}
        </Tabs>
        {/* Tabs */}

        <ButtonComponent className="mt-12" text="رؤية المزيد" href="/works" />
      </div>
    </section>
  );
}
