import { series } from './data.js';
var seriesTable = document.getElementById("series");
var promedioTable = document.getElementById("average");
mostrarDatosSeries(series);
mostrarPromedio(series);
mostrarCarta(series);
function mostrarDatosSeries(series) {
    var tbodySeries = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var s = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.setAttribute('class', 'filaSerie');
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
function mostrarCarta(series) {
    var trs = document.querySelectorAll('tr.filaSerie');
    var col = document.getElementById('columnaCarta');
    var html = "\n        <div class=\"card\" style=\"width: 30rem;\">\n        <img src=".concat(series[0].imagen, " referrerpolicy=\"no-referrer\">\n        <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(series[0].titulo, "</h5>\n        <p class=\"card-text\">\n                    ").concat(series[0].resumen, "<br><br>\n                    <a href=\"").concat(series[0].link, "\" class=\"btn btn-primary\">").concat(series[0].link, "</a>\n                    <br><br>\n                </p>\n            </div>\n        </div>");
    col.innerHTML = html;
    var _loop_1 = function (i) {
        trs[i].addEventListener('click', function () {
            var html = "\n                <div class=\"card\" style=\"width: 30rem;\">\n                    <img src=".concat(series[i].imagen, " referrerpolicy=\"no-referrer\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(series[i].titulo, "</h5>\n                        <p class=\"card-text\">\n                            ").concat(series[i].resumen, "<br><br>\n                            <a href=\"").concat(series[0].link, "\" class=\"btn btn-primary\">").concat(series[i].link, "</a>\n                            <br><br>\n                        </p>\n                    </div>\n                </div>");
            col.innerHTML = html;
        });
    };
    for (var i = 0; i < trs.length; i++) {
        _loop_1(i);
    }
}
