/**
 *  Write a Node program that has a function checkSystem() that checks if the system memory size is at least 4 GB 
 *  and the processor has more than 2 cores (use os core module)
 * 
 *  1. When you call the function, you should receive an immediate message on the console "Checking your system...".
 *  2. If the system doesn't have enough memory we should print a message to the console: "This app needs at least 4 GB of RAM"
 *  3. If the system doesn't have at least 2 cores, print this message to the console: "Processor is not supported"
 *  4. If the system has enough specs, print the following message "System is checked successfully."
 * 
 *  Solve the exercise using Observables
 */


const os = require('os');

function checkSystem() {
    console.log('\nChecking your system...');

    const totalCpus = os.cpus().length;
    const totalMemory = (os.totalmem() / 1000000000);
    const freeMemory = (os.freemem() / 1000000000);

    if (totalMemory < 4) {
        console.log('This app needs at least 4 GB of RAM');
        return;
    } else if (totalCpus < 2) {
        console.log('Processor is not supported');
        return;
    } else {
        console.log('System is checked successfully');
        console.log(`Processor is supported: Your system has ${totalCpus} cores`);
        console.log(`System has enough memory: Total = ${totalMemory} GB\n\t\t Free = ${freeMemory} GB`);
    }
}

checkSystem();


//using observables
const { Observable } = require('rxjs');

const observable$ = Observable.create(subscriber => {
    console.log('\nChecking your system...');

    const totalCpus = os.cpus().length;
    const totalMemory = (os.totalmem() / 1000000000);

    if (totalMemory < 4) {
        subscriber.next('This app needs at least 4 GB of RAM');
        return;
    } else if (totalCpus < 2) {
        subscriber.next('Processor is not supported');
        return;
    } else 
        subscriber.complete();
});

function checkSystem_new() {
    observable$.subscribe(
        (data) => console.log(data),
        (error) => console.log(error),
        () => console.log(("System is checked successfully"))
    );
}

checkSystem_new();