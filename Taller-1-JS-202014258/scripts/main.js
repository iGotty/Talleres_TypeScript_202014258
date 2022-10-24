import { series } from './data.js';
var seriesTable = document.getElementById("series");
var promedioTable = document.getElementById("average");
mostrarDatosSeries(series);
mostrarPromedio(series);
function mostrarDatosSeries(series) {
    var tbodySeries = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var s = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td> ".concat(s.id, " </td>  <td> ").concat(s.titulo, " </td> <td> ").concat(s.plataforma, " </td> <td> ").concat(s.temporadas, "</td>");
        tbodySeries.appendChild(trElement);
    }
    seriesTable.appendChild(tbodySeries);
}
function darPromedioTemps(series) {
    var promedio = 2;
    var total = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var s = series_2[_i];
        total = total + s.temporadas;
    }
    promedio = total / series.length;
    return promedio;
}
function mostrarPromedio(series) {
    var avrg = darPromedioTemps(series);
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td> <b> Promedio Temporadas </b></td>  <td> ".concat(avrg, " </td>");
    promedioTable.appendChild(trElement);
}
