const nemo = ['Dory', 'Bruce', "Marlin", "Nemo", "Gill", "Bloat", "Nigel", "Squirt", "Darla", "Hank"]

const large = new Array(100).fill('Nemo')

function findNemo(array){
    let t0 = performance.now()
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'Nemo'){
            console.log("Found NEMO")
        }
    }
    let t1 = performance.now()
    console.log('Call to find Nemo took ' + (t1-t0) + ' milliseconds')
}
findNemo(large)