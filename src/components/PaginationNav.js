import React from "react";

export function PaginationNav({infoPerPage, totalInfo, paginate}) {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalInfo / infoPerPage) ; i++) {
        pageNumber.push(i)

    }

    if(pageNumber.length>1) {
        return (
            <nav id={"pagination_nav"}>
                <ul>
                    {pageNumber.map(number => (
                        <li key={number}>
                            <a href={"/"} onClick={() => paginate(number)}>{number}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
    else{
        return (
            <nav id={"pagination_nav"}>
                <ul>
                    <li>
                    </li>
                </ul>
            </nav>
        )
    }


}