// Require library
var excel = require('excel4node');

// Create a new instance of a Workbook class
var workbook = new excel.Workbook();

// Add Worksheets to the workbook
var worksheet = workbook.addWorksheet('Sheet 1');


// Create a reusable style


// Set value of cell A1 to 100 as a number type styled with paramaters of style
worksheet.cell(3,1).number(100);

// Set value of cell B1 to 300 as a number type styled with paramaters of style
//worksheet.cell(1,2).number(200).style(style);

// Set value of cell C1 to a formula styled with paramaters of style
//worksheet.cell(1,3).formula('A1 + B1').style(style);

// Set value of cell A2 to 'string' styled with paramaters of style
//worksheet.cell(2,1).string('string').style(style);no

// Set value of cell A3 to true as a boolean type styled with paramaters of style but with an adjustment to the font size.
//worksheet.cell(3,1).bool(true).style(style).style({font: {size: 14}});

//worksheet.cell(4,1).number(3131).style(style);

workbook.write('Excel.xlsx');