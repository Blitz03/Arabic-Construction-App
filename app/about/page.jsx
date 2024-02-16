import ButtonComponent from "@/components/shared/ButtonComponent";
import Subheader from "@/components/shared/Subheader";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="container">
        <Subheader text="من نحن؟" />

        <div className="flex flex-col items-center text-center">
          <h2 className="text-h2-mobile-bold sm:text-h2-bold sm:text-secondary-950 max-w-[500px]">
            <span className="text-h1-mobile-bold sm:text-h1-bold text-primary-500">
              شركة
            </span>{" "}
            مؤسسة النهضة للتجارة والمقاولات العامة في الكويت
          </h2>

          <h3 className="text-h3-semibold mt-10 sm:text-gray-700 max-w-[500px]">
            نبذة مختصرة عن <strong className="text-primary-500">الشركة</strong>:
          </h3>

          <p className="paragraph mt-8">
            تأسست شركة مؤسسة النهضة للتجارة والمقاولات العامة ذ ذ م في
            <strong> 04/30/1963</strong> وهي شركة كويتية مملوكة لشركاء كويتيين
            وقد بدأت اول مشروعها ببناء قسائم السكن الخاص والسكن الاستثماري وحصلت
            الشركة على تصنيف بلدية الكويت الفئة <strong>(أ)</strong> كما حصلت
            الشركة على تصنيف لجنة المناقصات المركزية وهي:
          </p>

          {/* Table */}
          <Table className="mt-20 overflow-hidden">
            <TableBody>
              <TableRow>
                <TableCell>الأعمال المدنية والإنشائية</TableCell>
                <TableCell>
                  <strong>الفئة الثانية</strong>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>أعمال الطرق</TableCell>
                <TableCell>
                  <strong>الفئة الثانية</strong>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>أعمال المجاري</TableCell>
                <TableCell>
                  <strong>الفئة الثانية</strong>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>أعمال التكييف</TableCell>
                <TableCell>
                  <strong>الفئة الثانية</strong>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>أعمال الكهرباء</TableCell>
                <TableCell>
                  <strong>الفئة الثانية</strong>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          {/* Table */}

          <p className="paragraph mt-20">
            حيث ان الشركة تضم نخبة من المهندسين والعاملين المميزين في
            <strong>
              {" "}
              مجال الاعمال المدنية والانشائية واعمال الطرق واعمال التكييف واعمال
              الكهرباء
            </strong>
          </p>

          <p className="paragraph mt-5">
            كما أن العاملين بالشركة حاصلين على مؤهلات علمية وخبرات عملية تمكنهم
            من تنفيذ الاعمال الموكلة إليهم بدقة وكفاءة عالية
          </p>

          <p className="paragraph mt-5">
            إن أهم المعايير التي تتبعها الشركة هي الالتزام بالمواعيد مع مراعاة
            أفضل المواد المطابقة للمواصفات والمعايير والالتزام الكامل بالمخططات
            وذلك للوصول الى الغاية الأساسية التي تسعى إليها الشركة وهي إرضاء
            العميل.
          </p>

          <p className="paragraph mt-5">
            للمزيد من التفاصيل أضغط هنا:{" "}
            <a
              className="text-primary-500 hover:text-primary-500/90"
              href="/Al-Nahda_company_profile.pdf"
              target="_blank">
              <strong>رؤية المزيد</strong>
            </a>
          </p>

          <ButtonComponent
            text="تواصل معنا"
            className="z-1 mt-8"
            href="/#contact"
          />
        </div>
      </div>
    </div>
  );
}
