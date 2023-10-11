//Task 1
console.log("Task 1\n");

enum Subjects {
    worldHistory = "The World History",
    romeHistory =  "History of Rome",
    biology = "biology",
    chemistry = "chemistry",
    mathematics = "mathematics",
    geometry = "geometry",
    trigonometry = "trigonometry",
    ui = "ui",
    ux = "ux",
    graphicDesign = "graphic design"
}

const faculties = [
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

interface IFaculty {
    id: number, 
    faculty: string,
    subjects: Subjects[],
    countStudents: number
}

const getAllFaculties = (arr: IFaculty[]): string => {
    return arr.reduce((prev, next) => {
        if(prev === "") {
            return next.faculty;
        } else {
            return prev + `, ${next.faculty}`
        }
    } , "");
}

console.log("Total list of faculties is: ", getAllFaculties(faculties));

const getAllStudents = (arr: IFaculty[]): number => {
    return arr.reduce((prev, next) => prev + next.countStudents , 0);
}

console.log("Total amount of students is: ", getAllStudents(faculties));

const getAllSubjects = (arr: IFaculty[]): string => {
    return arr.reduce((prev, next) => {
        if(prev === "") {
            return next.subjects.reduce((prev, next) => {
                if (prev === "") {
                    return next;
                } else {
                    return prev + `, ${next}`;
                }
            }, "")
        } else {
            return prev + ", " + next.subjects.reduce((prev, next) => {
                if(prev === "") {
                    return next;
                } else {
                    return prev + `, ${next}`
                }
            }, "")
        }
    }, "");
}

console.log("The complete list of subjects is: ", getAllSubjects(faculties));

const getStudentsAvg = (arr: IFaculty[]): number => {
    return Math.floor(getAllStudents(arr)/arr.length);
}

console.log("The average amount of students is: ", getStudentsAvg(faculties));

// Task 2 

console.log("\nTask 2\n");

enum Genre {
    adventure = "Adventure",
    drama = "Drama",
    fantasy = "Fantasy",
    action = "Action",
    sciFi = "Sci-Fi",
}

enum Actor {
    sJohansson = "Scarlett Johansson",
    fPugh = "Florence Pugh",
    dHarbour = "David Harbour",
    dRadcliffe = "Daniel Radcliffe",
    eWatson = "Emma Watson",
    rGrint = "Rupert Grint"
}

const movies = [
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
          production: "Marvel Studios",
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
          production: "Heyday Films, Moving Picture Company, Warner Bros.",
},
];

interface IMovie {
    id: number,
    title: string,
    year: number,
    released: string,
    runtime: string,
    genre: Genre[],
    director: string,
    writer: string,
    actors: Actor[],
    plot: string,
    country: string,
    poster: string,
    imdbRating: number,
    imdbVotes: number,
    type: string,
    boxOffice: string,
    production: string
}

enum Writer {
    
};

const getAllTitles = (arr: IMovie[]): string => {
    return arr.reduce((prev, next) => {
        if (prev === "") {
            return next.title;
        } else {
            return prev + `, ${next.title}`
        }
    }, "")
}

console.log("The list of movies titles: ", getAllTitles(movies));

const countMovieAge = (arr: IMovie[]): string[] => {
    let date = new Date();
    let curYear = Number(date.getFullYear());
    return arr.map(elem => `The age of "${elem.title}" is: ${curYear - elem.year}`);
}

console.log(countMovieAge(movies));

const allWritersToArray = (arr: IMovie[]): string[] => {
    return [].concat.apply([], arr.map(elem => elem.writer.split(", ")));
}

console.log(allWritersToArray(movies));

const getTotalBoxOffice = (arr: IMovie[]): number => {
    return arr.reduce((prev, next) => prev + Number(next.boxOffice.split("$")[1].split(",").join("")), 0)
}
console.log(`The total box office is: $${getTotalBoxOffice(movies)}`);


const getTotalRuntime = (arr: IMovie[]): number => {
    return arr.reduce((prev, next) => prev + Number(next.runtime.split(" ")[0]), 0)
}

console.log("Total movie runtime is: ", getTotalRuntime(movies));

const getAvgImbdRating = (arr: IMovie[]): number => {
    return arr.reduce((prev, next) => prev + next.imdbRating, 0)/arr.length;
}

console.log("Average IMDB rating is: ",  getAvgImbdRating(movies));

const getAvgImdbVotes = (arr: IMovie[]): number => {
    return arr.reduce((prev, next) => prev + next.imdbVotes, 0)/arr.length;
}

console.log("Average IMDB votes is: ",  getAvgImdbVotes(movies));