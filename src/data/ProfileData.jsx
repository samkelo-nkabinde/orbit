import shakaImg from '../assets/ShakaZulu.jpeg';
import thanosImg from '../assets/thanos.jpeg';
import batmanImg from '../assets/batman.jpg';
import bojackImg from '../assets/bojack.jpg';
import jokerImg from '../assets/joker.png';

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
        avatar: shakaImg,
        answers: [
            {
                questionID: 'Q1',
                question: questions[0],
                answer: "I rolled a dice. Fear of being unemployed!"
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
                answer: "I'll do Leetcode from the getgo!"
            }
        ]
    },
    {
        firstName: "Thanos",
        lastName: "",
        email: "29118944@sun.ac.za",
        password: "password002",
        birthDay: "2004-09-17",
        interest: "IT and Network programming",
        avatar: thanosImg,
        answers: [
            {
                questionID: 'Q1',
                question: questions[0],
                answer: "The universe is governed by systems, patterns, and rules. Computer science offered me a small way to understand them.\
                        Honours was simply the next step. \
                        Once you have seen how much there is to learn, stopping becomes difficult to justify."},
            {
                questionID: 'Q2',
                question: questions[1],
                answer: "All I can say is, knowledge has little value if it is never put to use."
            },
            {
                questionID: 'Q3',
                question: questions[2],
                answer: "No, education is too expensive!"
            },
            {
                questionID: 'Q4',
                question: questions[3],
                answer: "Writing. Which is funny because I already have a degree that people think makes me employable. \
                        But writing would let me sit alone, stare at a screen, question every decision I've ever made, and call it a career."
            },
            {
                questionID: 'Q5',
                question: questions[4],
                answer: "I'd ask more questions. I'd stop being embarrassed when I didn't understand something!"
            }
        ]
    },
    {
        firstName: "Bruce",
        lastName: "Wayne",
        email: "27118944@sun.ac.za",
        password: "password003",
        birthDay: "2004-08-07",
        interest: "ML and Distributed systems",
        avatar: batmanImg,
        answers: [
            {
                questionID: 'Q1',
                question: questions[0],
                answer: "My late father won't let me have my billions without having a pHd in something, so I figured I might as well try this comSci thing!"
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
        firstName: "BoJack",
        lastName: "Horseman",
        email: "26118944@sun.ac.za",
        password: "password004",
        birthDay: "2001-08-07",
        interest: "Embedded systems",
        avatar: bojackImg,
        answers: [
            {
                questionID: 'Q1',
                question: questions[0],
                answer: "I don't know. I guess I was good at it. People kept telling me I was smart, so eventually I figured I should do something that made me look smart. \
                        Then I finished my degree and everyone was like, So what's next? \
                        And I thought, I don't know, maybe honours. Maybe if I get another qualification, I'll finally feel like I'm doing something with my life."},
            {
                questionID: 'Q2',
                question: questions[1],
                answer: "A career, I guess.\
                        Something where I can make money, do something meaningful, and not hate myself every morning.\
                        So, you know, probably something completely different."
            },
            {
                questionID: 'Q3',
                question: questions[2],
                answer: "Maybe. I like learning. I just don't like the part where everyone expects you to know what you're doing with your life.\
                    Maybe I'll do a master's. Maybe I'll get a job. Maybe I'll move to another country and pretend that solves everything. \
                    That's usually how these things work, right?"
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
        firstName: "Arthur",
        lastName: "Fleck",
        email: "25118944@sun.ac.za",
        password: "password005",
        birthDay: "2007-08-07",
        interest: "Data analyst",
        avatar: jokerImg,
        answers: [
            {
                questionID: 'Q1',
                question: questions[0],
                answer: "Computer science is quite honest, really. You give a machine a set of rules, and it follows them. Humans are much less predictable. I suppose I wanted to understand the difference.",
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

export function getProfileByName(firstName) {
    return profiles.find(profile => profile.firstName === firstName);
}