"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
function formatDate(date) {
    let unSortDate = date
        .toLocaleDateString(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    })
        .split("/");
    let year = unSortDate.pop();
    unSortDate.unshift(year);
    let sortedDate = unSortDate.join("-");
    return sortedDate;
}
exports.formatDate = formatDate;
