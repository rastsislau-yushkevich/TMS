const movies = [
    {
                id: 1,
                title: "Black Widow",
                year: 2021,
                released: "09 Jul 2021",
                runtime: "134 min",
                genre: ["Action", "Sci-Fi", "Adventure"],
                director: "Cate Shortland",
                writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
                actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
                plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
                country: "United States",
                poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
                imdbRating: 6.9,
                imdbVotes: 121932,
                type: "movie",
                boxOffice: "$138,027,361",
                production: "Marvel Studios",
    },
            {
                id: 2,
                title: "Harry Potter and the Deathly Hallows: Part 2",
                year: 2011,
                released: "15 Jul 2011",
                runtime: "130 min",
                genre: ["Adventure", "Drama", "Fantasy"],
                director: "David Yates",
                writer: "Steve Kloves, J.K. Rowling",
                actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
                plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
                country: "United Kingdom, United States",
                poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
                imdbRating: 8.1,
                imdbVotes: 790377,
                type: "movie",
                boxOffice: "$381,409,310",
                production: "Heyday Films, Moving Picture Company, Warner Bros.",
            },
            {
                id: 3,
                title: "Star Wars",
                year: 1977,
                released: "25 May 1977",
                runtime: "121 min",
                genre: ["Action", "Adventure", "Fantasy"],
                director: "George Lucas",
                writer: "George Lucas",
                actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
                    plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
                country: "United States, United Kingdom",
                poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
                imdbRating: 8.6,
                imdbVotes: 1259440,
                type: "movie",
                boxOffice: "$460,998,507",
                production: "Lucasfilm Ltd.",
            },
            { 
                id: 4,
                title: "Harry Potter and the Half-Blood Prince",
                year: 2009,
                released: "15 Jul 2009",
                runtime: "153 min",
                genre: ["Action", "Adventure", "Family"],
                director: "David Yates",
                writer: "Steve Kloves, J.K. Rowling",
                actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
                plot: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort\'s dark past.",
                country: "United Kingdom",
                poster: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
                imdbRating: 7.6,
                imdbVotes: 492245,
                boxOffice: "$302,305,431",
                production: "Heyday Films, Warner Bros.",
            }, 
            {
                id: 5,
                title: "Harry Potter and the Sorcerer's Stone",
                year: 2001,
                released: "16 Nov 2001",
                runtime: "152 min",
                genre: ["Adventure", "Family", "Fantasy"],
                director: "Chris Columbus",
                writer: "J.K. Rowling, Steve Kloves",
                actors: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
                plot: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
                country: "United Kingdom, United States",
                poster: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
                imdbRating: 7.6,
                imdbVotes: 684604,
                boxOffice: "$318,087,620",
                production: "1492 Pictures, Heyday Films, Warner Brothers",
            }
    
]

//tasks 1 and 2 

console.log("----------\nTask 1\n----------");

interface IMovie {
    id: number,
    title: string,
    year: number,
    released: string,
    runtime: string,
    genre: string[],
    director: string,
    writer: string,
    actors: string[],
    plot: string,
    country: string,
    poster: string,
    imdbRating: number,
    imdbVotes: number,
    boxOffice: string,
    production: string,
}

const getAllArraysNoRepeats = <T extends IMovie, Key extends keyof T>(arr: T[], key: Key): string[] => {
    return arr.reduce((prev, el) => {
        return prev.concat(el[key]);
    }, new Array()).filter((el, index, self) => {
        return self.indexOf(el) === index;
    });
}

console.log(getAllArraysNoRepeats(movies, "genre"));

console.log("----------\nTask 2\n----------");

console.log(getAllArraysNoRepeats(movies, "actors"));

//task 3

console.log("----------\nTask 3\n----------");

const sortDescByRating = <T extends IMovie>(arr: T[]): T[] => {
    return arr.sort((a, b) => b.imdbRating - a.imdbRating);
}

console.log(sortDescByRating(movies));

//task 4
console.log("----------\nTask 4\n----------");

interface ICutMovie {
    id: number,
    title: string,
    released: string,
    plot: string
}

const getCutMovies = <T extends IMovie>(arr: T[]): ICutMovie[] => {
    return arr.map((el) => ({
        id: el.id,
        title: el.title,
        released: el.released,
        plot: el.plot
    })).sort((a, b) => a.id - b.id);
}

console.log(getCutMovies(movies));

//task 5
console.log("----------\nTask 5\n----------");

const filterByKey = <T extends IMovie, Key extends keyof IMovie>(arr: T[], subStr: number | string, key1: Key, key2?: Key): T[] => {
    if(typeof(subStr) == "number") {
        return arr.filter((el) => el.year === subStr);
    } else if (key2){
        return arr.filter((el) => String(el[key1]).includes(String(subStr)) || String(el[key2]).includes(String(subStr)));
    } else {
        return arr.filter((el) => String(el[key1]).includes(String(subStr)));
    }
}

console.log(filterByKey(movies, 2021, "year"));

console.log("----------\nTask 6\n----------");

console.log(filterByKey(movies, "Harry", "title"));

console.log("----------\nTask 7\n----------");

console.log(filterByKey(movies, "the", "title", "plot"));

//task 8

console.log("----------\nTask 8\n----------");

const findByFields = <T extends IMovie, Key extends keyof IMovie>(arr: T[], key: Key, searchValue: T[Key]): T[] => {
    return arr.filter((el) => el[key] === searchValue);
}

console.log(findByFields(movies, "year", 2011));

console.log("==============================");

console.log(findByFields(movies, "title", "Black Widow"));
