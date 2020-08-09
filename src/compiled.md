### !dbd-rnjesus
```
!commands add !dbd-rnjesus You should play: $(eval const r=["Trapper","Wraith","Hillbilly","Nurse","Myers","Hag","Doctor","Huntress","Cannibal","Krueger","Pig","Clown","Spirit","Legion","Plague","Ghostface","Demigorgon","Oni","Deathslinger","Pyramidhead"];r[Math.floor(Math.random()*r.length)];)
```

### !dbd-kill-perks
```
!commands add !dbd-kill-perks You should use: $(eval const e=["Bitter Murmur","Deerstalker","Distressing","Insidious",'"Hex": No One Escapes Death','"Hex": Thrill of the Hunt',"Monstrous Shrine","Sloppy Butcher","Spies From The Shadows","Unrelenting","Whispers","Stridor","Thanatophobia","A Nurse's Calling","Unnerving Presence","Brutal Strength","Agitation","Predator","Bloodhound","Shadowborn","Enduring","Lightborn","Tinkerer","Save The Best For Last","Play With Your Food","Dying Light",'"Hex": The Third Seal','"Hex": Ruin','"Hex": Devour Hope',"Overwhelming Presence","Monitor & Abuse","Overcharge","Beast Of Prey","Territorial Imperative",'"Hex": Huntress Lullaby',"Knock Out","Barbecue & Chili","Franklin's Demise","Fire Up","Remember Me","Blood Warden","Hangman's Trick","Surveillance","Make Your Choice","Iron Grasp","Coulrophobia","Pop Goes The Weasel","Bamboozle","Spirit Fury","Hex: Haunted Ground","Rancor","Discordance","Mad Grit","Iron Maiden"];[1,2,3,4].map(()=>e.splice(Math.floor(Math.random()*e.length),1)).flat().join(", ");)
```

### !pick-random
```
!commands add !pick-random Randomly selected: $(eval const n=decodeURIComponent(`$(querystring)`).split(" ");n[Math.floor(Math.random()*n.length)]||"nothing";)!
```

