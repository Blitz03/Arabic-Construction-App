import {
  Pagination,
  PaginationContent,
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
      <PaginationContent>
        {pageNumbers.length > 1 && (
          <PaginationItem>
            <PaginationPrevious onClick={handlePrevPage} />
          </PaginationItem>
        )}

        {pageNumbers.map((page, idx) => (
          <PaginationItem
            key={idx}
            className={currentPage === page ? "bg-neutral-100 rounded-md" : ""}>
            <PaginationLink onClick={() => setCurrentPage(page)}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {pageNumbers.length > 1 && (
          <PaginationItem>
            <PaginationNext onClick={handleNextPage} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
