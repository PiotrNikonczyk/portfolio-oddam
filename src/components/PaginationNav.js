import React from "react";

export function PaginationNav({infoPerPage, totalInfo, paginate}) {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalInfo / infoPerPage) ; i++) {
        pageNumber.push(i)

    }

    return (
        <nav>
            <ul>
                {pageNumber.map( number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )


}