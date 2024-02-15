import WorkCard from "../cards/WorkCard";
import ButtonComponent from "../shared/ButtonComponent";
import Subheader from "../shared/Subheader";
import { works } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Works() {
  const blackframeWorks = works.filter((work) => work.type === "blackframe");
  const turnkeyWorks = works.filter((work) => work.type === "turnkey");
  const renovationsWorks = works.filter((work) => work.type === "renovations");

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
              {works.slice(0, 6).map((work, index) => (
                <WorkCard key={index} work={work} />
              ))}
            </div>
            {works.length === 0 && (
              <p className="text-body-semibold">لم يتم العثور على أعمال</p>
            )}
          </TabsContent>

          <TabsContent value="blackframe">
            <div className="flex flex-col flex-wrap justify-center sm:flex-row gap-10">
              {blackframeWorks.slice(0, 6).map((work, index) => (
                <WorkCard key={index} work={work} />
              ))}
            </div>

            {blackframeWorks.length === 0 && (
              <p className="text-body-semibold">لم يتم العثور على أعمال</p>
            )}
          </TabsContent>

          <TabsContent value="turnkey">
            <div className="flex flex-col flex-wrap justify-center sm:flex-row gap-10">
              {turnkeyWorks.slice(0, 6).map((work, index) => (
                <WorkCard key={index} work={work} />
              ))}
            </div>

            {turnkeyWorks.length === 0 && (
              <p className="text-body-semibold">لم يتم العثور على أعمال</p>
            )}
          </TabsContent>

          <TabsContent value="renovations">
            <div className="flex flex-col flex-wrap justify-center sm:flex-row gap-10">
              {renovationsWorks.slice(0, 6).map((work, index) => (
                <WorkCard key={index} work={work} />
              ))}
            </div>

            {renovationsWorks.length === 0 && (
              <p className="text-body-semibold">لم يتم العثور على أعمال</p>
            )}
          </TabsContent>
        </Tabs>
        {/* Tabs */}

        {works.length > 0 && (
          <ButtonComponent
            className="mt-12"
            content="رؤية المزيد"
            type="button-secondary"
          />
        )}
      </div>
    </section>
  );
}
