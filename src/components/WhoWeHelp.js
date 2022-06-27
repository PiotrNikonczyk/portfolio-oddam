import React, {useEffect, useState} from "react";
import {PaginTable} from "./PaginTable";
import imageSvg from '../assets/Decoration.svg'
import {PaginationNav} from "./PaginationNav";




export function  WhoWeHelp(){
    const foundation = [
        ["Fundacja “Dbam o Zdrowie”", "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", "ubrania, jedzenie, sprzęt AGD, meble, zabawki"],
        ["Fundacja “Dla dzieci”", "Cel i misja: Pomoc dzieciom z ubogich rodzin.", "ubrania, meble, zabawki"],
        ["Fundacja “Bez domu”", "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", "ubrania, jedzenie, ciepłe koce"],
        ["Fundacja “4”", "Cel i misja: Pomoc osobom niepełnosprawnym.", "ubrania, jedzenie, sprzęt AGD, meble"],
        ["Fundacja “5”", "Cel i misja: Pomoc osobom niewidomym i głuchoniemym", "ubrania, meble, zabawki"],
        ["Fundacja “6”", "Cel i misja: Pomoc zwierzętom ze schroniska", "ubrania, jedzenie, zabawki"],
        ["Fundacja “7”", "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", "jedzenie, sprzęt AGD, meble, zabawki"]

    ];

    const foundDesc = "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.";

    const [infoToShow, setInfoToShow] = useState( foundation);
    const [description, setDescription] = useState(foundDesc)
    const [currentPage, setCurrentPage] = useState(1);
    const [infoPerPage, setInfoPerPage] = useState(3);

    const organizations = [
        ["Organizacja “Lorem Ipsum 1”","Quis varius quam quisque id diam vel quam elementum pulvinar.","Egestas, sed, tempus"],
        ["Organizacja “Lorem Ipsum 2”","Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.","Ut, aliquam, purus, sit, amet"],
        ["Organizacja “Lorem Ipsum 3”","Scelerisque in dictum non consectetur a erat nam.","Mi, quis, hendrerit, dolor"],
    ];

    const orgDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";

    const collection = [
        ["Zbiórka “Lorem Ipsum 1”","Quis varius quam quisque id diam vel quam elementum pulvinar.","Egestas, sed, tempus"],
        ["Zbiórka “Lorem Ipsum 2”","Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.","Ut, aliquam, purus, sit, amet"],
        ["Zbiórka “Lorem Ipsum 3”","Scelerisque in dictum non consectetur a erat nam.","Mi, quis, hendrerit, dolor"],
        ["Zbiórka “Lorem Ipsum 4”","Quis varius quam quisque id diam vel quam evinar.","Egestas, tempus"],
        ["Zbiórka “Lorem Ipsum 5”","Hendrerit gravida rutrui ac auctor augue.","Ut, aliquam, sit, amet"],
        ["Zbiórka “Lorem Ipsum 6”","Scelerisque in  non consectetur a erat nam.","Mi, quis, dolor"]
    ]

    const collDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";



    const indexOfLast = currentPage * infoPerPage;
    const indexOfFirst = indexOfLast - infoPerPage;
    const currentInfo = infoToShow.slice(indexOfFirst, indexOfLast);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    const showCollection = (e, desc) => {


        setInfoToShow(e);
        setDescription(desc);
        setCurrentPage(1);
    }




    return <>
        <div className={"who_we_help_container"}>
            <h2 className={"wwh_title"}>Komu pomagamy?</h2>
            <img src={imageSvg} alt={"element dekoracyjny"}/>
            <div className={"wwh_links"}>
                <a className={"choose_who"} onClick={() => showCollection(foundation,foundDesc ) }>Fundacjom</a>
                <a className={"choose_who"} onClick={() => showCollection(organizations, orgDesc) }>Organizacjom pozarządowym</a>
                <a className={"choose_who"} onClick={() => showCollection(collection, collDesc) }>Lokalnym zbiórkom</a>
            </div>
            <div className={"who_we_help_container_description"}>
                <p className={"who_we_help_description"}> {description} </p>
            </div>
            <PaginTable data={currentInfo}/>
            <PaginationNav infoPerPage={infoPerPage}  totalInfo={infoToShow.length} paginate={paginate} />


        </div></>
}