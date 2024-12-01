(async function day1() {
    // Request and parse data
    const inputData = await fetch('https://adventofcode.com/2024/day/1/input', {
        headers: {
            Cookie: "session=53616c7465645f5f1684796860168a0da757dae85f01f83129846ef9387f951cb8acda9fee22a669609bfa4e14cbee308aa1f7712a93a2261359419be3bf2824"
        }
    });
    const inputText = await inputData.text();

    //     const inputText = `
    // 3   4
    // 4   3
    // 2   5
    // 1   3
    // 3   9
    // 3   3`;

    const lines = inputText.trim().split('\n');
    const [list1, list2] = lines.reduce((acc, line) => {
        const [col1, col2] = line.split(/\s+/);
        acc[0].push(parseInt(col1));
        acc[1].push(parseInt(col2));
        return acc;
    }, [[] as number[], [] as number[]])


    // Part 1 
    // Pairing by smallest to biggest
    list1.sort((a, b) => a - b);
    list2.sort((a, b) => a - b);

    const totalDistance = list1.reduce((acc, value, index) => acc + Math.abs(value - list2[index]), 0);

    console.log('Total distance: ', totalDistance);

    // Part 2
    const similarityScore = (n: number, times: number) => {
        return n * times;
    }

    const numberCount = list1.map((value) => list2.filter((v) => v === value).length);

    const score = list1.reduce((acc, value, index) => acc + similarityScore(value, numberCount[index]), 0);

    console.log('Similarity scores: ', score);

})();
