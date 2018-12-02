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

const minMemory = 4;
const minCpuCores = 2;

function checkSystem() {
    console.log('\nChecking your system...');

    const totalCpus = os.cpus().length;
    const totalMemory = (os.totalmem() / 1000000000);
    const freeMemory = (os.freemem() / 1000000000);

    if (totalMemory < minMemory) {
        console.log('This app needs at least 4 GB of RAM');
        return;
    } else if (totalCpus < minCpuCores) {
        console.log('Processor is not supported');
        return;
    } else {
        console.log('System is checked successfully');
        console.log(`Your system has ${totalCpus} cores`);
        console.log(`Memory: Total = ${totalMemory} GB\n\t\tFree = ${freeMemory} GB`);
    }
}

checkSystem();


//using observables
const { Observable } = require('rxjs');

const observable$ = Observable.create(subscriber => {
    console.log('\nChecking your system...');

    const totalCpus = os.cpus().length;
    const totalMemory = (os.totalmem() / 1000000000);

    if (totalMemory < minMemory) {
        subscriber.next('This app needs at least 4 GB of RAM');
        return;
    } else if (totalCpus < minCpuCores) {
        subscriber.next('Processor is not supported');
        return;
    } else 
        subscriber.complete();
});

function checkSystem_new() {
    observable$.subscribe(
        (data) => console.log(data),
        (error) => console.log(error),
        () => console.log("System is checked successfully")
    );
}

checkSystem_new();


//using observable from Behavior Subject
const { BehaviorSubject } = require('rxjs');

function checkSystem_another() {
    const myObservable$ = new BehaviorSubject('\nChecking your system...');

    myObservable$.subscribe(
        data => console.log(data),
        null,
        () => console.log("System is checked successfully")
    );

    if ((os.totalmem() / 1000000000) < minMemory) {
        myObservable$.next('This app needs at least 4 GB of RAM');

    } else if (os.cpus().length < minCpuCores) {
        myObservable$.next('Processor is not supported');
        
    } else 
        myObservable$.complete();
}

checkSystem_another();

