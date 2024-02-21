import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleNextPage() {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <Pagination className="mt-10">
      <PaginationContent className="overflow-x-hidden">
        {pageNumbers.length > 1 && (
          <PaginationItem>
            <PaginationPrevious onClick={handlePrevPage} />
          </PaginationItem>
        )}

        <li className="overflow-x-auto overflow-y-hidden scroll-smooth pagination-numbers_wrapper flex gap-1">
          {pageNumbers.map((page, index) => (
            <PaginationLink
              key={index}
              className={
                currentPage === page ? "bg-neutral-100 rounded-md" : ""
              }
              onClick={() => setCurrentPage(page)}>
              {page}
            </PaginationLink>
          ))}
        </li>

        {pageNumbers.length > 1 && (
          <PaginationItem>
            <PaginationNext onClick={handleNextPage} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
