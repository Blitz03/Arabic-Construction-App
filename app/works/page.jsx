"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import WorkCard from "@/components/cards/WorkCard";
import Subheader from "@/components/shared/Subheader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { works } from "@/constants";

export default function Page() {
  const [items, setItems] = useState(works.slice(0, 6));
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [currentTab, setCurrentTab] = useState("all");

  const { ref, inView } = useInView();

  const blackframeWorks = works.filter((work) => work.type === "blackframe");
  const turnkeyWorks = works.filter((work) => work.type === "turnkey");
  const renovationsWorks = works.filter((work) => work.type === "renovations");
  // const fearuredWorks = works.filter((work) => work.isFeatured === true);

  const tabsContent = [
    { value: "all", title: "الكل", works: works },
    {
      value: "blackframe",
      title: "هيكل أسود",
      works: works.filter((work) => work.type === "blackframe"),
    },
    {
      value: "turnkey",
      title: "التشطيب",
      works: works.filter((work) => work.type === "turnkey"),
    },
    {
      value: "renovations",
      title: "الترميمات",
      works: works.filter((work) => work.type === "renovations"),
    },
  ];

  useEffect(() => {
    if (inView && hasMore) {
      const newPage = page + 1;
      showMoreItems(newPage);
      setPage(newPage);
    }
  }, [inView, currentTab]);

  const showMoreItems = (page) => {
    setTimeout(() => {
      const newItems = tabsContent
        .find((tab) => tab.value === currentTab)
        .works.slice((page - 1) * 6, page * 6);

      setItems([...items, ...newItems]);

      if (newItems.length === 0) {
        setHasMore(false); // No more data to load
      }
    }, 1000); // Simulated delay
  };

  const handleTabChange = (value) => {
    setCurrentTab(value);
    setItems(
      tabsContent.find((tab) => tab.value === currentTab).works.slice((0, 6))
    );
    setHasMore(true);
    setPage(1);
  };

  return (
    <div className="min-h-screen">
      <div className="container">
        <Subheader text="أعمالنا" />

        {/* Tabs */}
        <Tabs
          defaultValue="all"
          className="w-full flex flex-col items-center gap-10 pb-14">
          <TabsList className="rounded-full py-8 sm:py-10 px-2 w-full xs:w-auto justify-start xs:justify-center bg-gray-200 text-gray-600">
            {tabsContent.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-full p-3 sm:p-5"
                onClick={() => handleTabChange(tab.value)}>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabsContent.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="w-full">
              <div className="works-wrapper">
                {items.map((work, index) => (
                  <WorkCard key={index} work={work} />
                ))}
              </div>

              {tab.works.length === 0 && (
                <p className="text-body-semibold text-center">
                  لم يتم العثور على أعمال
                </p>
              )}

              {tab.works.length > 0 && hasMore && (
                <div className="loader" ref={ref} />
              )}
            </TabsContent>
          ))}
        </Tabs>
        {/* Tabs */}
      </div>
    </div>
  );
}
