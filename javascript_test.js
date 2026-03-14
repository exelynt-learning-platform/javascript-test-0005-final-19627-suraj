let num = 1;

for (let row = 1; row <= 5; row++) {
    let currentRow = [];

    for (let col = 1; col <= row; col++) {
        currentRow.push(num);
        num++;
    }

    console.log(currentRow.join(' '));
}