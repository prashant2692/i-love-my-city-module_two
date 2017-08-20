var express = require('express');
var app = express();

exports.home = function (req, res) {
    res.render('home', {
        headline: 'We believe that every city has something to say!',
        title: 'Home Page'
    });
};

exports.city = function (req, res) {
    var cityName = req.params.city;
    var titel, headline;
    var imageCount = 4;

    if (cityName === 'berlin') {
        titel = 'Berlin';
        headline = 'Berlin is the capital and the largest city of Germany as well as one of its 16 constituent states.';
    }
    else if (cityName === 'paris') {
        titel = 'Paris';
        headline = 'Paris, Frances capital, is a major European city and a global center for art, fashion, gastronomy and culture.';
    }
    else if (cityName === 'madrid') {
        titel = 'Madrid';
        headline = 'Madrid is the capital city of the Kingdom of Spain and the largest municipality in both the Community of Madrid and Spain as a whole.';
    }
    else if (cityName === 'london') {
        titel = 'London';
        headline = 'The City of London is a city and county that contains the historic centre and central business';
    }
    else if (cityName === 'newyork'){
        titel = 'New York';
        headline = 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean.';
        imageCount = 6;
    }

    res.render('city',{imageCount : imageCount, cityName : cityName, title:titel, headline : headline});
};
