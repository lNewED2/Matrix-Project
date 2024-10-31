// ฟังก์ชันสำหรับแสดง matrix
function displayMatrix(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        let rowData = "";
        for (let col = 0; col < matrix[row].length; col++) {
            rowData += matrix[row][col] + "\t";
        }
        console.log(rowData);
    }
}

// 1. Matrix ขนาด 3x3 ที่มีค่าตัวเลขคงที่
const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// 2. Matrix ขนาด 4x4 ที่มีค่าตัวอักษร
const matrix2 = [
    ["A", "B", "C", "D"],
    ["E", "F", "G", "H"],
    ["I", "J", "K", "L"],
    ["M", "N", "O", "P"]
];

// 3. Matrix ขนาด 2x5 ที่มีค่าตัวเลขสุ่ม
function generateRandomMatrix(rows, cols, min, max) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        matrix.push(row);
    }
    return matrix;
}

const matrix3 = generateRandomMatrix(2, 5, 1, 100);

// แสดงผลแต่ละ matrix
console.log("Matrix 3x3 (ตัวเลขคงที่):");
displayMatrix(matrix1);

console.log("\nMatrix 4x4 (ตัวอักษร):");
displayMatrix(matrix2);

console.log("\nMatrix 2x5 (ตัวเลขสุ่ม):");
displayMatrix(matrix3);
