/*
A company has the need to classify and to take reports of its candidates to recruitment that already presented nn evaluation test.

You need to create a program that will receive a collection of data with the candidates and classify them

Regarding the following qualities:



Scholar: Prospects who are still studying but only need a year to graduate

INgager: Graduates with less than 2 years of graduate/experience

Full-time: Graduates with more than 2 years of graduate/experience



Each candidate record can have the following values:



Id,

Number,

Date of departure,

University,

Rating,

Semester,

Quarter



Considering the following:

If the candidate is not graduated  the date of exit its value will be null

If is already graduated semester and Quarter values will be null

if system is by quarter, semester will be null and vice versa if system is for semester.



The system should be able to return the reports when asked:

The 3 best rated candidates and the 3 with the worst qualification of any classification (Ingager, scholar, Fulltime) or all together.

All prospects of a specific university with approval rating (8 min.)

Filter a candidate by ID.
*/