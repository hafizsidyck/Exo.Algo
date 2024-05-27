// table de multiplication par 2

for (let i = 1; i <= 10; i++) {
    console.log(i + " x 2 = ", i * 2);
}

// multiplication de 1 à 10

for (let table = 1; table <= 10; table++) {
    for (let i = 1; i <= 10; i++) {
        console.log(i + "x" + table + "=", i * table);
        // console.log(`${i} x ${table} = ${i * table});
    }
}