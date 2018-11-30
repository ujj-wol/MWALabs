const dns = require('dns');

// Part 1 ****************************
dns.lookup('www.mum.edu', function(error, addresses, family) {
    console.log(`Using lookup: ${addresses}`);
});

dns.resolve4('www.mum.edu', function(error, addresses) {
    console.log('Using resolve4: ' + addresses);
});


// Part 2 ****************************(Rewrite using Promise)
const { promisify } = require('util');

const resolve4Async = promisify(dns.resolve4);

resolve4Async('www.mum.edu')
    .then(address => {console.log('Using Promises: ' + address)})
        .catch(error => console.log(error));;


// Part 3 ****************************(Rewrite and convert promise to async/await block)
async function main() {
    try {
        const ip = await resolve4Async('www.mum.edu');
        console.log(`Equivalent IP(Using Async/Await): ${ip}`);
    } catch(error) {
        console.log(`ERROR: ${error}`);
    }
}

main();
