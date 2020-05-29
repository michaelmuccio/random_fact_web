$(document).ready(function () {

    var yesButton = $('#yesButton');
    var noButton = $('#noButton');
    var disclaimerText = $('#disclaimerText');
    var randomFactContainer = $('#randomFactContainer');
    var linkContainer = $('#link');
    var buyStuffText =$('#buyStuffText');
    var randomIndex = 0;
    var disneyLink = 'https://www.disney.com';

    var factList = ['There is a .04% chance you will die from Chinese Bat virus. You are a nerd!',
        'Yummy! Sharks eat humans more often than Covid-19 kills humans. Scaredy cat',
        'Have fun getting struck by lightning, because that will happen before you die from Covid-19. You are a nerd!',
        'Sick lamborgini bro. I know your unemployment check didn\'t pay for that. You will win the lottery before you die from Covid-19. Donny Nerdo',
        'Dang dude, your chick is a hottie. You will meet your soulmate at a bar before Covid-19 finds you and puts you in the grave. You nerd'];

    var disclaimer = '*All comparisons are facts and provided by Matt Macniak'
    var statList = [
        new Stat('There is a .04% chance you will die from Chinese Bat virus. You are a nerd!', disclaimer, disneyLink),
        new Stat('Yummy! Sharks eat humans more often than Covid-19 kills humans. Scaredy cat', disclaimer, disneyLink),
        new Stat('Have fun getting struck by lightning, because that will happen before you die from Covid-19. You are a nerd!', disclaimer, disneyLink),
        new Stat('Sick lamborgini bro. I know your unemployment check didn\'t pay for that. You will win the lottery before you die from Covid-19. Donny Nerdo', disclaimer, disneyLink),
        new Stat('Dang dude, your chick is a hottie. You will meet your soulmate at a bar before Covid-19 finds you and puts you in the grave. You nerd', disclaimer, disneyLink),
    ];

    buyStuffText.hide();

    yesButton.on('click', function (e) {
        e.preventDefault();
        console.log('Yes clicked');
        var randomFact = random_item(statList);
        console.log(statList);
        randomFactContainer.text(randomFact.stat);
        disclaimerText.show();
        buyStuffText.show();
        disclaimerText.text(randomFact.disclaimer);
        linkContainer.text('Monetized Link example');
        linkContainer.attr("href", randomFact.relativeLinks);
    });

    noButton.on('click', function (e) {
        e.preventDefault();
        console.log('No clicked');
        randomFactContainer.text("Unfortunately there is no hope for you. Dig a bunker and live under gorund for the rest of your life");
        disclaimerText.hide();
        buyStuffText.show();
    });

    function random_item(items) {
        var index = items[Math.floor(Math.random() * items.length)];

        if (index != randomIndex) {
            return index;
        } else {
            index = randomIndex;
        }

        random_item(factList);
    }

});

class Stat {
    constructor(stat, disclaimer, relativeLinks) {
        this.stat = stat;
        this.disclaimer = disclaimer;
        this.relativeLinks = relativeLinks;
    }
}