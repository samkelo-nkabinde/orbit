const questions = [
  "What caused you to study computer science and further continue into honours?",
  "What do you plan to pursue after you graduate?",
  "Are you interested in continuing your studies? Why or why not?",
  "Other than a CS career, what other career would you pursue?",
  "What would you do different if you had to start CS again?"
];

const profiles = [
    {
        firstName: "Shaka",
        lastName: "Zulu",
        email: "28118944@sun.ac.za",
        password: "password001",
        birthDay: "2003-08-07",
        interest: "Web development",
        answers: [
            {
                questionID: 'Q1',
                question: questions[0],
                answer: "I rolled a dice. I do really want to further my studies, i fear being unemployed in this economy!"
            },
            {
                questionID: 'Q2',
                question: questions[1],
                answer: "A job"
            },
            {
                questionID: 'Q3',
                question: questions[2],
                answer: "No, education is too expensive!"
            },
            {
                questionID: 'Q4',
                question: questions[3],
                answer: "I am open to anything, whatever puts food on the table!"
            },
            {
                questionID: 'Q5',
                question: questions[4],
                answer: "Leetcode from the getgo!"
            }
        ]
    },
    {
        firstName: "Frederik",
        lastName: "de Klerk",
        email: "29118944@sun.ac.za",
        password: "password002",
        birthDay: "2004-09-17",
        interest: "IT and Network programming",
        answers: [
            {
                questionID: 'Q1',
                question: questions[0],
                answer: "I rolled a dice. I do really want to further my studies, i fear being unemployed in this economy!"
            },
            {
                questionID: 'Q2',
                question: questions[1],
                answer: "A job"
            },
            {
                questionID: 'Q3',
                question: questions[2],
                answer: "No, education is too expensive!"
            },
            {
                questionID: 'Q4',
                question: questions[3],
                answer: "I am open to anything, whatever puts food on the table!"
            },
            {
                questionID: 'Q5',
                question: questions[4],
                answer: "Leetcode from the getgo!"
            }
        ]
    },
    {
        firstName: "Jacob",
        lastName: "Zuma",
        email: "27118944@sun.ac.za",
        password: "password003",
        birthDay: "2004-08-07",
        interest: "ML and Distributed systems",
        answers: [
            {
                questionID: 'Q1',
                question: questions[0],
                answer: "I rolled a dice. I do really want to further my studies, i fear being unemployed in this economy!"
            },
            {
                questionID: 'Q2',
                question: questions[1],
                answer: "A job"
            },
            {
                questionID: 'Q3',
                question: questions[2],
                answer: "No, education is too expensive!"
            },
            {
                questionID: 'Q4',
                question: questions[3],
                answer: "I am open to anything, whatever puts food on the table!"
            },
            {
                questionID: 'Q5',
                question: questions[4],
                answer: "Leetcode from the getgo!"
            }
        ]
    },
    {
        firstName: "Nelson",
        lastName: "Mandela",
        email: "26118944@sun.ac.za",
        password: "password004",
        birthDay: "2001-08-07",
        interest: "Embedded systems",
        answers: [
            {
                questionID: 'Q1',
                question: questions[0],
                answer: "I rolled a dice. I do really want to further my studies, i fear being unemployed in this economy!"
            },
            {
                questionID: 'Q2',
                question: questions[1],
                answer: "A job"
            },
            {
                questionID: 'Q3',
                question: questions[2],
                answer: "No, education is too expensive!"
            },
            {
                questionID: 'Q4',
                question: questions[3],
                answer: "I am open to anything, whatever puts food on the table!"
            },
            {
                questionID: 'Q5',
                question: questions[4],
                answer: "Leetcode from the getgo!"
            }
        ]
    },
    {
        firstName: "Helen",
        lastName: "Zille",
        email: "25118944@sun.ac.za",
        password: "password005",
        birthDay: "2007-08-07",
        interest: "Data analyst",
        answers: [
            {
                questionID: 'Q1',
                question: questions[0],
                answer: "I rolled a dice. I do really want to further my studies, i fear being unemployed in this economy!"
            },
            {
                questionID: 'Q2',
                question: questions[1],
                answer: "A job"
            },
            {
                questionID: 'Q3',
                question: questions[2],
                answer: "No, education is too expensive!"
            },
            {
                questionID: 'Q4',
                question: questions[3],
                answer: "I am open to anything, whatever puts food on the table!"
            },
            {
                questionID: 'Q5',
                question: questions[4],
                answer: "Leetcode from the getgo!"
            }
        ]
    }
];


export function getProfile(email, password){
    // return profile with matching email and password
     return profiles.find(
        profile => profile.email === email && 
                   profile.password === password
    );
}