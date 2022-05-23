# time-coincidence-ioet
# ioet Time Coincidence Test

The program reads each line of the input text file (.txt), parses it to an object.
Each line is parsed to an object that has the name of the employee with the day and time(duration) they worked.
```
{

	MO:  "10:00-12:00",

	TU:  "10:00-12:00",

	TH:  "01:00-03:00",

	SA:  "14:00-18:00",

	SU:  "20:00-21:00",

	name:  "RENE",

}
```

All lines of text read are parsed into the above format, and collected into an array.
All time objects in the list are checked against one another.
Each day's duration for an employee is also parsed into an object with following format,
```
{

	start: {

		hour:  0,

		minute:  0,

	},

	end: {

		hour:  15,

		minute:  12,

	},

}
```
All durations are effectively compared to find time coincidences.



# How to Setup the Project

- Clone the project.
- Run ```npm install``` to install dependencies
- Install ```Typescript``` globally with this command ```npm install -g typescript```
- Install vitest for tests, ```npm install --save-dev vitest```
- Run ```npm test``` to run all tests
- Run ```tsc``` to compile the project and produce Javascript files
- Finally run ```npm  start``` to run the project.

##  Changing Example Files
To run the program with other text files, put the text file in the ```examples``` folder and replace the text file url in ```main.ts```