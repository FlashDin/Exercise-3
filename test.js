// var karyawanObj = [
//     {
//         nama: 'Budi',
//         id: '001',
//         jenisKelamin: 'Laki-laki'
//     },
//     {
//         nama: 'Andi',
//         id: '002',
//         jenisKelamin: 'Laki-laki'
//     },
//     {
//         nama: 'Ani',
//         id: '003',
//         jenisKelamin: 'Perempuan'
//     }
// ];

// var nama = document.querySelector('td#nama');
// var id = document.querySelector('td#id');
// var jenisKelamin = document.querySelector('td#jenisKelamin');
// var tblbody = document.getElementById("tblbody");
// var rows = document.getElementById("rows");
//
// for (var i = 0; i < karyawanObj.length; i++) {
//     var tr = document.createElement("tr");
//     var td = document.createElement("td");
// var nama = document.createTextNode(karyawanObj[i].nama);
// var id = document.createTextNode(karyawanObj[i].id);
// var jenisKelamin = document.createTextNode(karyawanObj[i].id);
// nama.innerHTML = karyawanObj[i].nama;
// id.innerHTML = karyawanObj[i].id;
// jenisKelamin.innerHTML = karyawanObj[i].jenisKelamin;
// tblbody.appendChild(tr).appendChild(td);
// }
var table = document.getElementById("tbl");

function createTblComponents(params, rowidx) {
    var row = table.insertRow(rowidx);
    // if (rowidx > 0) {
    //     row.setAttribute("onclick", "getDetails('" + rowidx + "')");
    // }
    var cell = '';
    for (var i = 0; i < params.length; i++) {
        cell = row.insertCell(i);
        cell.innerHTML = params[i];
    }
}

function removeTblComponents(index0, index1) {
    for (var i = 0; i < index0.length; i++) {
        table.deleteRow(index1.length);
    }
}

var res = [];

function fetchData() {
    res = [];
    fetch('https://swapi.co/api/planets/?format=json')
        .then((resp) => resp.json())
        .then(function (data) {
            res = data.results;
            createTblComponents([
                "Name", "Rotation Period", "Orbital Period", "Diameter", "Climate",
                "Gravity", "Terrain", "Surface Water", "Population", "Ceated", "Edited", "URL"
            ], 0);
            for (var i = 0; i < res.length; i++) {
                createTblComponents([
                    res[i].name, res[i].rotation_period, res[i].orbital_period, res[i].diameter, res[i].climate,
                    res[i].gravity, res[i].terrain, res[i].surface_water, res[i].population,
                    res[i].created, res[i].edited, res[i].url
                ], i + 1);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function fetchDataDetails(rowidx) {

}

function getDetails(rowidx) {
    // alert(table.rows.item(rowidx).innerHTML);
    window.open(document.URL + '?idx=' + rowidx, '_blank');
}

function searchData() {
    var sch = document.getElementById("txtSearch");
    var schRes = [];
    for (var i = 0; i < res.length; i++) {
        for (key in res[i]) {
            if (res[i][key].indexOf(sch.value) != -1) {
                schRes.push(res[i]);
            }
        }
    }

    if (schRes.length > 0) {
        removeTblComponents(res, schRes);
        createTblComponents([
            "Name", "Rotation Period", "Orbital Period", "Diameter", "Climate",
            "Gravity", "Terrain", "Surface Water", "Population", "Ceated", "Edited", "URL"
        ], 0);
        for (var i = 0; i < schRes.length; i++) {
            createTblComponents([
                schRes[i].name, schRes[i].rotation_period, schRes[i].orbital_period, schRes[i].diameter, schRes[i].climate,
                schRes[i].gravity, schRes[i].terrain, schRes[i].surface_water, schRes[i].population,
                schRes[i].created, schRes[i].edited, schRes[i].url
            ], i + 1);
        }
    } else {
        removeTblComponents(schRes, 0);
        fetchData();
    }

    console.log(schRes);
}