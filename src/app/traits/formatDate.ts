export function formatDate(date: Date) {
    let unSortDate = date
        .toLocaleDateString(undefined, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        })
        .split("/");
    let year = unSortDate.pop();
    unSortDate.unshift(year!);
    let sortedDate = unSortDate.join("-");
    return sortedDate;
}
