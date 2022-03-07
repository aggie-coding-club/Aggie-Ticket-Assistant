export function Pull(game, pullers) {
        // Example of pullers:
        // [{"classification": "U4", "pass": true, "passGuest": true, "student": true, "corps": false}, {}...]
    type = "corps" // Corps initially; set to normal if 1+ non corps member
    ret = { // Initial return values
        date: "",
        dateStart: "",
        dateEnd: "",
        cost: 0,
        deck: -1,
        early: 3
    }
    priority = {G: 0, U1: 1, U2: 2, U3: 3, U4: 4, G1: 4, G2: 4}; // For sorting from senior -> guest
    dates_normal = {G: "F", U1: "R", U2: "W", U3: "T", U4: "M"} // Matching day to class (normal)
    dates_corps = {U1: "T", U2: "T", U3: "W", U4: "W"} // Day to class; corps

    date_offset = {M: -5, T: -4, W: -3, R: -2, F: -1} // T- until gameday (games on sat; senior pull on MONDAY, 5 days before)

    pullers.sort((e1,e2) => priority[e2.classification] - priority[e1.classification]); // Sort descending on numerical mapping of student classification
    reduced_pullers = [...pullers]; // Deep copy of pullers for guest coverage

    for(let i = 0; i < pullers.length; i++) { // Checks if non corps
        if(!pullers[i].corps) type="normal";
    }

    classes = []
    for(var i = 0; i < pullers.length; i++) {classes.push(pullers[i].classification)} // Get 1d array of classes in order
    if(classes.indexOf("G") > -1) { // For every puller w/ guest sports pass, cover guest, add to cost
        for(var i = 0; i < pullers.length; i++) {
            if(pullers[i] !== "G") { // Don't attempt match if coverer is a guest
                if(pullers[i].passGuest && classes.indexOf("G") > -1) {
                    ret.cost += game.cost;
                    classes.splice(classes.indexOf("G"),1);
                    reduced_pullers.splice(reduced_pullers.indexOf("G"),1)
                }
            }
        }
    }

    target_classification = "" // To store class day of pull (eg. sophomore day)
    if(classes.indexOf("G") > -1) { // If guests, need to buy on fri
        ret.date = "F"
        ret.deck = 3
    } else if(pullers.length > 10) { // If over 10, group pull any day 3rd deck
        ret.date = "M"
        ret.deck = 3
    } else { // Highest class. ratio lowest class.; upper median has assigned day; take upper median of ordered classes based on parity
        if(pullers.length%2==0) {target_classification = pullers[(pullers.length/2)-1].classification}
        if(pullers.length%2!=0) {target_classification = pullers[(pullers.length-1)/2].classification}
        if(type === "normal") ret.date = dates_normal[target_classification]
        if(type === "corps") ret.date = dates_corps[target_classification]
    }

    offset = (-1*date_offset[ret.date]*24*60*60*1000) // Time in ms before gameday

    gameday = new Date(game.date);
    gameday.setMilliseconds(gameday.getMilliseconds()-offset) // Set pulling day
    beg_time = new Date(gameday)
    end_time = new Date(gameday)
    if(type === "normal") {
        // 8am-5pm on gameday
    beg_time.setHours(gameday.getHours() + 8)
    end_time.setHours(gameday.getHours() + 17)
    }

    else if(type === "corps") {
        // Set times based on class for corps
        if(target_classification === "U4" || target_classification === "U2") {
            beg_time.setHours(gameday.getHours() + 8)
            end_time.setHours(gameday.getHours() + 12)    
        } else {
            beg_time.setHpurs(gameday.getHours() + 12)
            end_time.setHours(gameday.getHours() + 17)
        }
    }

    // Set string version of dates
    ret.date = gameday.toISOString();
    ret.dateStart = beg_time.toISOString();
    ret.dateEnd = end_time.toISOString();

    for(let i = 0; i < reduced_pullers.length; i++) {
        if(reduced_pullers[i].classification === "G") ret.cost += 2*game.cost; // Add guest costs for guests
    }

    // Hard coded deck predictions; no seat filling order
    if(target_classification === "U4") ret.deck = 1;
    if(target_classification === "U3" || target_classification === "U2") ret.deck = 2;
    if(target_classification === "U1" || target_classification === "G") ret.deck = 3;

    return ret;

}


// pullers = [
//     {
//         classification: "U4",
//         pass: true,
//         passGuest: true,
//         student: true,
//         corps: false
//     },
//     {
//         classification: "U3",
//         pass: true,
//         passGuest: true,
//         student: true,
//         corps: false
//     },
//     {
//         classification: "U3",
//         pass: true,
//         passGuest: false,
//         student: true,
//         corps: false
//     },
//     {
//         classification: "U3",
//         pass: true,
//         passGuest: false,
//         student: true,
//         corps: false
//     },
//     {
//         classification: "U3",
//         pass: true,
//         passGuest: false,
//         student: true,
//         corps: false
//     },
//     {
//         classification: "U3",
//         pass: true,
//         passGuest: false,
//         student: true,
//         corps: false
//     },
//     {
//         classification: "U3",
//         pass: true,
//         passGuest: false,
//         student: true,
//         corps: false
//     },
//     {
//         classification: "U3",
//         pass: true,
//         passGuest: false,
//         student: true,
//         corps: false
//     },
// ]

// game = {
//     id: 1,
//     date: "2021-10-09",
//     cost: 65,
//     homeLogo: "images/tamu_red.png",
//     homeScore: 0,
//     opponentLogo: "alabama.png",
//     opponentScore: 0,
//     title: "Alabama",    
// }

// console.log(pull(game, pullers));
// console.log('iii')
// export default {Pull};