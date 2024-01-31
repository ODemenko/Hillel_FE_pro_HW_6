let yearBirth = prompt('Enter your year of birth:', 'YYYY');

if (yearBirth === null) {
    alert('It is a pity that you did not want to enter your date of birth');
} else {
    yearBirth = parseInt(yearBirth);
}

let city = prompt('Enter your place of residence:', 'city');

if (city === null) {
    alert('It is a pity that you did not want to enter your city.');
} else {
    city = city.trim().toLowerCase();
}

let sport = prompt('Enter your favorite sport:', 'sport');

if (sport === null) {
    alert('It is a pity that you did not want to enter your favorite sport.');
} else {
    sport = sport.trim().toLowerCase();
}

let capitalCity = "";
switch (city) {
    case "kyiv":
        capitalCity = "You live in the capital of Ukraine.";
        break;
    case "washington":
        capitalCity = "You live in the capital of USA.";
        break;
    case "london":
        capitalCity = "You live in the capital of UK.";
        break;
    default:
        capitalCity = `You live in the city of ${city}.`;
}

let sportChampion = "";
switch (sport) {
    case "football":
        sportChampion = "Cool! Do you want to become David Beckham?";
        break;
    case "triathlon":
        sportChampion = "Cool! Do you want to become Tim Don?";
        break;
    case "boxing":
        sportChampion = "Cool! Do you want to become Muhammad Ali?";
        break;
    default:
        sportChampion = `Cool! Do you want to become a champion in ${sport}?`;
}

let age = 2024 - yearBirth;

alert(`You are ${age} years old.\n${capitalCity}\n${sportChampion}`);


