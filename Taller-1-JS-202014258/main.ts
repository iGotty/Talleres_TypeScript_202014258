import { serie } from "./serie.js";
import { series } from './data.js';

let seriesTable: HTMLElement = document.getElementById("series")!;
let promedioTable: HTMLElement = document.getElementById("average")!;



mostrarDatosSeries(series);
mostrarPromedio(series);


function mostrarDatosSeries(series:serie[]):void{
    let tbodySeries = document.createElement("tbody");


    for (let s of series){
        let trElement:HTMLElement= document.createElement("tr")
        trElement.innerHTML= `<td> ${s.id} </td>  <td> ${s.titulo} </td> <td> ${s.plataforma} </td> <td> ${s.temporadas}</td>`
        tbodySeries.appendChild(trElement)
    }


    seriesTable.appendChild(tbodySeries);

}

function darPromedioTemps(series:serie[]):number{
        let promedio:number = 2;
        let total: number = 0
        for (let s of series){
            total = total + s.temporadas;

        }
        promedio =total/series.length;
        return promedio
    }  

function mostrarPromedio(series:serie[]):void{
        let avrg: number = darPromedioTemps(series);
        let trElement:HTMLElement= document.createElement("tr");
        trElement.innerHTML= `<td> <b> Promedio Temporadas </b></td>  <td> ${avrg} </td>`;
        promedioTable.appendChild(trElement);

    }

