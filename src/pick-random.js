// !commands add !pick-random Randomly selected: $(eval ###)!
const args = `$(querystring)`.split(' ');
args[Math.floor(Math.random() * args.length)] || 'nothing';
