
var xlsx =  require("xlsx");

var wb = xlsx.readFile('./depoimentos.xlsx');

var fs = require('fs');
var ws = wb.Sheets["depoimentos"];

var data = xlsx.utils.sheet_to_json(ws);

var newData = data.map(function(record) {
    record.endereco_foto = record.aluno;
    // record.depoimento_site_new = record.depoimento_site.split('\r\n'); 
    delete record.depoimento_completo;
    // delete record.depoimento_site;
    return record;
});

console.log(newData);

const depoimento = JSON.stringify(newData);

fs.writeFile('depoimentos.json', depoimento, (err) => {
    if(err) {
        throw err;
    }
    console.log("JSON data is saved.");
});

