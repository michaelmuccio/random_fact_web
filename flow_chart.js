$(document).ready(function () {

    var yesButton = $('#yesButton');
    var jumbotron = $('#jumbotron');
    var noButton = $('#noButton');
    var randomFactContainer = $('#randomFactContainer');
   
    var factList = ['There is a .04% chance you will die from Chinese Bat virus. You are a nerd!',
        'Yummy! Sharks eat humans more often than Covid-19 kills humans. Scaredy cat',
        'Have fun getting struck by lightning, because that will happen before you die from Covid-19. You are a nerd!',
        'Sick lamborgini bro. I know your unemployment check didn\'t pay for that. You will win the lottery before you die from Covid-19. Donny Nerdo',
        'Dang dude, your chick is a hottie. You will meet your soulmate at a bar before Covid-19 finds you and puts you in the grave. You nerd'];

    yesButton.on('click', function (e) {
        e.preventDefault();
        console.log('Yes clicked');
        var randomFact = random_item(factList);
        console.log(randomFact);
        randomFactContainer.text(random_item(factList));
    });

    noButton.on('click', function (e) {
        e.preventDefault();
        console.log('No clicked');
        randomFactContainer.text("Unfortunately there is no hope for you. Dig a bunker and live under gorund for the rest of your life");
    });

    function random_item(items) {

        return items[Math.floor(Math.random() * items.length)];

    }
});