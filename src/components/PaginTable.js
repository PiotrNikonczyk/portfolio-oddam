import React from "react";



export function PaginTable({data}){



    return <>
        <table className={"pagin_table"}>
            {data.map((event, index) => {
                   return (<tr key={index} className={`row${index+1} table_row`}>

                    <td className={"first_column "}>
                        <div className={"foundation_name"}>{event[0]}</div>
                        <div className={"purpose_foundation"}>{event[2]}</div>
                    </td>
                    <td className={"second_column"}>{event[1]}</td>
                </tr>)

            })
            }


        </table>

    </>


}