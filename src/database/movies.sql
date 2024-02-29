CREATE TABLE movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    director TEXT NOT NULL,
    description TEXT NOT NULL,
    year TEXT NOT NULL
);

INSERT INTO movies (title, director, description, year)
VALUES('Interestellar', 'Cristopher Nolan', 'In the near future, humanity is facing extinction following a global famine caused by ecocide.[8] Cooper''s family, which includes his children, Tom and Murph, and his father-in-law Donald, engage in farming, like most of humanity. One evening, during a dust storm, Cooper and Murph discover a gravitational anomaly in Murph''s bedroom that left patterns of falling particles. The pattern resolves into GPS coordinates, which lead Cooper and Murph to the secret facility of NASA, believed to have shut down.', '2014');
