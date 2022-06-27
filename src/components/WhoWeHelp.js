import React, {useEffect, useState} from "react";
import {PaginTable} from "./PaginTable";
import imageSvg from '../assets/Decoration.svg'
import {PaginationNav} from "./PaginationNav";




export function  WhoWeHelp(){
    const [infoToShow, setInfoToShow] = useState( null)

    useEffect(() => setInfoToShow(fundacje), []);

    const [fundacje, setFundacje] = useState([
        ["Fundacja “Dbam o Zdrowie”", "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", "ubrania, jedzenie, sprzęt AGD, meble, zabawki"],
        ["Fundacja “Dla dzieci”", "Cel i misja: Pomoc dzieciom z ubogich rodzin.", "ubrania, meble, zabawki"],
        ["Fundacja “Bez domu”", "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", "ubrania, jedzenie, ciepłe koce"],
        ["Fundacja “4”", "Cel i misja: Pomoc osobom niepełnosprawnym.", "ubrania, jedzenie, sprzęt AGD, meble"],
        ["Fundacja “5”", "Cel i misja: Pomoc osobom niewidomym i głuchoniemym", "ubrania, meble, zabawki"],
        ["Fundacja “6”", "Cel i misja: Pomoc zwierzętom ze schroniska", "ubrania, jedzenie, zabawki"],
        ["Fundacja “7”", "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", "jedzenie, sprzęt AGD, meble, zabawki"]

    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [infoPerPage, setFundPerPage] = useState(3)

    const indexOfLast = currentPage * infoPerPage;
    const indexOfFirst = indexOfLast - infoPerPage;
    const currentInfo = fundacje.slice(indexOfFirst, indexOfLast);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return <>
        <div className={"who_we_help_container"}>
            <h2 className={"wwh_title"}>Komu pomagamy?</h2>
            <img src={imageSvg} alt={"element dekoracyjny"}/>
            <div className={"wwh_buttons"}>
                <button>Fundacjom</button>
                <button>Organizacjom pozarządowym</button>
                <button>Lokalnym zbiórkom</button>
            </div>
            <PaginTable data={currentInfo}/>
            <PaginationNav infoPerPage={infoPerPage}  totalInfo={fundacje.length} paginate={paginate} />


        </div></>
}