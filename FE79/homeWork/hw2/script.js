//Task 1
console.log("Task 1\n");
var Subjects;
(function (Subjects) {
    Subjects["worldHistory"] = "The World History";
    Subjects["romeHistory"] = "History of Rome";
    Subjects["biology"] = "biology";
    Subjects["chemistry"] = "chemistry";
    Subjects["mathematics"] = "mathematics";
    Subjects["geometry"] = "geometry";
    Subjects["trigonometry"] = "trigonometry";
    Subjects["ui"] = "ui";
    Subjects["ux"] = "ux";
    Subjects["graphicDesign"] = "graphic design";
})(Subjects || (Subjects = {}));
var faculties = [
    {
        id: 1,
        faculty: "History department",
        subjects: [Subjects.worldHistory, Subjects.romeHistory],
        countStudents: 44
    },
    {
        id: 2,
        faculty: "Department of Biology",
        subjects: [Subjects.biology, Subjects.chemistry],
        countStudents: 50
    },
    {
        id: 3,
        faculty: "Faculty of Mathematics",
        subjects: [Subjects.mathematics, Subjects.geometry, Subjects.trigonometry],
        countStudents: 72
    },
    {
        id: 4,
        faculty: "Faculty of Design",
        subjects: [Subjects.ui, Subjects.ux, Subjects.graphicDesign],
        countStudents: 37
    }
];
var getAllFaculties = function (arr) {
    return arr.reduce(function (prev, next) {
        if (prev === "") {
            return next.faculty;
        }
        else {
            return prev + ", ".concat(next.faculty);
        }
    }, "");
};
console.log("Total list of faculties is: ", getAllFaculties(faculties));
var getAllStudents = function (arr) {
    return arr.reduce(function (prev, next) { return prev + next.countStudents; }, 0);
};
console.log("Total amount of students is: ", getAllStudents(faculties));
var getAllSubjects = function (arr) {
    return arr.reduce(function (prev, next) {
        if (prev === "") {
            return next.subjects.reduce(function (prev, next) {
                if (prev === "") {
                    return next;
                }
                else {
                    return prev + ", ".concat(next);
                }
            }, "");
        }
        else {
            return prev + ", " + next.subjects.reduce(function (prev, next) {
                if (prev === "") {
                    return next;
                }
                else {
                    return prev + ", ".concat(next);
                }
            }, "");
        }
    }, "");
};
console.log("The complete list of subjects is: ", getAllSubjects(faculties));
var getStudentsAvg = function (arr) {
    return Math.floor(getAllStudents(arr) / arr.length);
};
console.log("The average amount of students is: ", getStudentsAvg(faculties));
// Task 2 
console.log("\nTask 2\n");
var Genre;
(function (Genre) {
    Genre["adventure"] = "Adventure";
    Genre["drama"] = "Drama";
    Genre["fantasy"] = "Fantasy";
    Genre["action"] = "Action";
    Genre["sciFi"] = "Sci-Fi";
})(Genre || (Genre = {}));
var Actor;
(function (Actor) {
    Actor["sJohansson"] = "Scarlett Johansson";
    Actor["fPugh"] = "Florence Pugh";
    Actor["dHarbour"] = "David Harbour";
    Actor["dRadcliffe"] = "Daniel Radcliffe";
    Actor["eWatson"] = "Emma Watson";
    Actor["rGrint"] = "Rupert Grint";
})(Actor || (Actor = {}));
var movies = [
    {
        id: 1,
        title: "Black Widow",
        year: 2021,
        released: "09 Jul 2021",
        runtime: "134 min",
        genre: [Genre.action, Genre.sciFi, Genre.adventure],
        director: "Cate Shortland",
        writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
        actors: [Actor.sJohansson, Actor.fPugh, Actor.dHarbour],
        plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
        country: "United States",
        poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        imdbRating: 6.9,
        imdbVotes: 121932,
        type: "movie",
        boxOffice: "$138,027,361",
        production: "Marvel Studios"
    },
    {
        id: 2,
        title: "Harry Potter and the Deathly Hallows: Part 2",
        year: 2011,
        released: "15 Jul 2011",
        runtime: "130 min",
        genre: [Genre.adventure, Genre.drama, Genre.fantasy],
        director: "David Yates",
        writer: "Steve Kloves, J.K. Rowling",
        actors: [Actor.dRadcliffe, Actor.eWatson, Actor.rGrint],
        plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        country: "United Kingdom, United States",
        poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        imdbRating: 8.1,
        imdbVotes: 790377,
        type: "movie",
        boxOffice: "$381,409,310",
        production: "Heyday Films, Moving Picture Company, Warner Bros."
    },
];
var Writer;
(function (Writer) {
})(Writer || (Writer = {}));
;
var getAllTitles = function (arr) {
    return arr.reduce(function (prev, next) {
        if (prev === "") {
            return next.title;
        }
        else {
            return prev + ", ".concat(next.title);
        }
    }, "");
};
console.log("The list of movies titles: ", getAllTitles(movies));
var countMovieAge = function (arr) {
    var date = new Date();
    var curYear = Number(date.getFullYear());
    return arr.map(function (elem) { return "The age of \"".concat(elem.title, "\" is: ").concat(curYear - elem.year); });
};
console.log(countMovieAge(movies));
var allWritersToArray = function (arr) {
    return [].concat.apply([], arr.map(function (elem) { return elem.writer.split(", "); }));
};
console.log(allWritersToArray(movies));
var getTotalBoxOffice = function (arr) {
    return arr.reduce(function (prev, next) { return prev + Number(next.boxOffice.split("$")[1].split(",").join("")); }, 0);
};
console.log("The total box office is: $".concat(getTotalBoxOffice(movies)));
var getTotalRuntime = function (arr) {
    return arr.reduce(function (prev, next) { return prev + Number(next.runtime.split(" ")[0]); }, 0);
};
console.log("Total movie runtime is: ", getTotalRuntime(movies));
var getAvgImbdRating = function (arr) {
    return arr.reduce(function (prev, next) { return prev + next.imdbRating; }, 0) / arr.length;
};
console.log("Average IMDB rating is: ", getAvgImbdRating(movies));
var getAvgImdbVotes = function (arr) {
    return arr.reduce(function (prev, next) { return prev + next.imdbVotes; }, 0) / arr.length;
};
console.log("Average IMDB votes is: ", getAvgImdbVotes(movies));
