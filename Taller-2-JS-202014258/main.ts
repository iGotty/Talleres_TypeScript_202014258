import { serie } from "./serie.js";
import { series } from './data.js';
    

let seriesTable: HTMLElement = document.getElementById("series")!;
let promedioTable: HTMLElement = document.getElementById("average")!;



mostrarDatosSeries(series);
mostrarPromedio(series);
mostrarCarta(series);


function mostrarDatosSeries(series:serie[]):void{
    let tbodySeries = document.createElement("tbody");


    for (let s of series){
        let trElement:HTMLElement= document.createElement("tr")
        trElement.setAttribute('class', 'filaSerie');
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

function mostrarCarta(series:serie[]):void{
    const trs: NodeList = document.querySelectorAll('tr.filaSerie');
    const col: HTMLElement = document.getElementById('columnaCarta')!;


    const html: string = `
        <div class="card" style="width: 30rem;">
        <img src=${series[0].imagen} referrerpolicy="no-referrer">
        <div class="card-body">
        <h5 class="card-title">${series[0].titulo}</h5>
        <p class="card-text">
                    ${series[0].resumen}<br><br>
                    <a href="${series[0].link}" class="btn btn-primary">${series[0].link}</a>
                    <br><br>
                </p>
            </div>
        </div>`
    col.innerHTML = html;


    for(let i: number = 0; i < trs.length; i++) {
        trs[i].addEventListener('click', function() {
            const html: string = `
                <div class="card" style="width: 30rem;">
                    <img src=${series[i].imagen} referrerpolicy="no-referrer">
                    <div class="card-body">
                        <h5 class="card-title">${series[i].titulo}</h5>
                        <p class="card-text">
                            ${series[i].resumen}<br><br>
                            <a href="${series[0].link}" class="btn btn-primary">${series[i].link}</a>
                            <br><br>
                        </p>
                    </div>
                </div>`
            col.innerHTML = html;
        });
    }
}

