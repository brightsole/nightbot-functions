// !commands add !pick-random Randomly selected: $(eval ###)!
const args = decodeURIComponent(`$(querystring)`).split(' ');
args[Math.floor(Math.random() * args.length)] || 'nothing';
