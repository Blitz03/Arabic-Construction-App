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

  const { ref, inView } = useInView();

  const blackframeWorks = works.filter((work) => work.type === "blackframe");
  const turnkeyWorks = works.filter((work) => work.type === "turnkey");
  const renovationsWorks = works.filter((work) => work.type === "renovations");
  // const fearuredWorks = works.filter((work) => work.isFeatured === true);

  useEffect(() => {
    if (inView && hasMore) {
      const newPage = page + 1;
      showMoreItems(newPage);
      setPage(newPage);
    }
  }, [inView]);

  const showMoreItems = (page) => {
    setTimeout(() => {
      const newItems = works.slice((page - 1) * 6, page * 6);

      setItems([...items, ...newItems]);

      if (newItems.length === 0) {
        setHasMore(false); // No more data to load
      }
    }, 1000); // Simulated delay
  };

  return (
    <div className="min-h-screen">
      <div className="container">
        <Subheader text="أعمالنا" />

        {/* Tabs */}
        <Tabs
          defaultValue="all"
          className="w-full flex flex-col items-center gap-10">
          <TabsList className="rounded-full py-8 sm:py-10 px-2 w-full xs:w-auto justify-start xs:justify-center bg-gray-200 text-gray-600">
            <TabsTrigger value="all" className="rounded-full p-3 sm:p-5">
              الكل
            </TabsTrigger>

            <TabsTrigger value="blackframe" className="rounded-full p-3 sm:p-5">
              هيكل أسود
            </TabsTrigger>

            <TabsTrigger value="turnkey" className="rounded-full p-3 sm:p-5">
              التشطيب
            </TabsTrigger>

            <TabsTrigger
              value="renovations"
              className="rounded-full p-3 sm:p-5">
              الترميمات
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="w-full">
            <div className="flex flex-col flex-wrap justify-center sm:flex-row gap-10">
              {items.map((work, index) => (
                <WorkCard key={index} work={work} />
              ))}
            </div>
            {works.length === 0 && (
              <p className="text-body-semibold">لم يتم العثور على أعمال</p>
            )}
          </TabsContent>

          <TabsContent value="blackframe">
            <div className="flex flex-col flex-wrap justify-center sm:flex-row gap-10">
              {blackframeWorks.map((work, index) => (
                <WorkCard key={index} work={work} />
              ))}
            </div>

            {blackframeWorks.length === 0 && (
              <p className="text-body-semibold">لم يتم العثور على أعمال</p>
            )}
          </TabsContent>

          <TabsContent value="turnkey">
            <div className="flex flex-col flex-wrap justify-center sm:flex-row gap-10">
              {turnkeyWorks.map((work, index) => (
                <WorkCard key={index} work={work} />
              ))}
            </div>

            {turnkeyWorks.length === 0 && (
              <p className="text-body-semibold">لم يتم العثور على أعمال</p>
            )}
          </TabsContent>

          <TabsContent value="renovations">
            <div className="flex flex-col flex-wrap justify-center sm:flex-row gap-10">
              {renovationsWorks.map((work, index) => (
                <WorkCard key={index} work={work} />
              ))}
            </div>

            {renovationsWorks.length === 0 && (
              <p className="text-body-semibold">لم يتم العثور على أعمال</p>
            )}
          </TabsContent>
        </Tabs>
        {/* Tabs */}

        {/* Loading Spinner */}
        {hasMore && (
          <div className="lds-grid" ref={ref}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {/* Loading Spinner */}
      </div>
    </div>
  );
}
