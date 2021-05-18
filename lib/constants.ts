export const NAME = "Martin Sesto"
export interface IPart {
  title: string;
  sections: string[][];
}

// secont item in each section must be JSX, since the component consumes it as innerHTML (Security implications for this type of site are null).
export const EXP :IPart = {title: "Log of every professional job I had and a summary of each.", 
  sections: [
    ["Web Developer, Freelance.", `
    <h4 class="text-2xl font-bold text-white text-opacity-60"> 2021 &rarr; </h4>
    <ul class="list-disc p-1 pl-3 text-sm md:text-lg">
      <li> Working with TS/React and Golang </li>
      <li> Projects will be added to the projects page </li>
      <li> I'd like to add that working on random jobs has given me more troubleshooting skills </li>
    </ul>
      `],
    ["SUR Analyst, OSPLAD.", `
    <h4 class="text-2xl font-bold text-white text-opacity-60"> 2018 - 2021 </h4>
    <ul class="list-disc p-1 pl-3 text-sm md:text-lg">
      <li> Administrative tasks, such as organizing all the billing for expensive medication, as well as auditing it, and making the files to send </li>
      <li> During the pandemic, I was the only one from my team to keep going and did my best to keep the flow, until my resignation </li>
      <li> Mainly got the gist of working with multiple teams of different types of professionals and be able to negotiate to reach a mutual ground </li>
    </ul>
    `], 
    ["Tech Support, NewCar Group.", `
    <h4 class="text-2xl font-bold text-white text-opacity-60"> 2017 - 2018 </h4>
    <ul class="list-disc p-1 pl-3 text-sm md:text-lg">
      <li> Maintained the work computers, printers and installed AP to reach places that didn't have wi-fi </li>
      <li> Helped other employees to maximize their use of office software </li>
    </ul>
    `],
]}
export const SKILL :IPart = {title: "Log of every technology I've learnt and used, from most experienced to least.", 
  sections: [
    ["JavaScript/TypeScript", `<p class="p-1 pb-0 text-base md:text-lg">The language I've most experience and knowledge of.</p>`], 
    ["React", `<p class="p-1 pb-0 text-base md:text-lg">Did over 100 hours of workshops about react, can make custom hooks, understand compound components and so on.</p>`],
    ["NodeJS", `<p class="p-1 pb-0 text-base md:text-lg">Mainly Express.JS to make CRUD API's, with MongoDB, JWT, and other middlewares.</p>`],
    ["Golang", `<p class="p-1 pb-0 text-base md:text-lg">This is what I've been spending most of my recent time on, right now I've a grab onto all Next, so most of my fron-end's are built using Next.</p>`], 
    ["NoSQL (MongoDB)", `<p class="p-1 pb-0 text-base md:text-lg">CRUD operations, also experience with Mongo's Atlas (their cloud offering).</p>`],
    ["SQL (PostgreSQL)", `<p class="p-1 pb-0 text-base md:text-lg">CRUD operations, still need to put more work to have a better understanding.</p>`],
    ["Git/GitHub/GitLab", `<p class="p-1 pb-0 text-base md:text-lg">Most of the basic principles, working on a GitLab certification at the moment.</p>`], 
    ["AWS", `<p class="p-1 pb-0 text-base md:text-lg">Did a serverless course using Amplify, experience with EC2, Route 53, Buckets, CloudFront and a few more services.</p>`],
    ["Python", `<p class="p-1 pb-0 text-base md:text-lg">Basic knowledge.</p>`],
    ["Linux", `<p class="p-1 pb-0 text-base md:text-lg">Basic knowledge, lately I've been developing on WSL2 for most of my work.</p>`], 
    ["Bash", `<p class="p-1 pb-0 text-base md:text-lg">Basic knowledge, mainly using ZSH.</p>`],
]}
export const EDU :IPart = {title: "Log of every course I've done, from most serious to chilled workshops and books.", 
  sections: [
    ["Informatics Engineering, University of Buenos Aires", `
    <h4 class="text-2xl font-bold text-white text-opacity-60"> 2019-2021 </h4>
    <p class="p-1 pb-0 text-base md:text-lg"> Studied for a year and a half, and decided to change institution. </p>
    `], 
    ["FullStack Open, University of Helsinki", `
    <h4 class="text-2xl font-bold text-white text-opacity-60"> 05/2020 - 07/2020 </h4>
    <p class="p-1 pb-0 text-base md:text-lg"> The course that most impacted my path, making it more hands on and getting a taste for bug hunting, and problem solving. First complete app. </p>
    `],
    ["Epic React, Kent C. Dodds.", `
    <h4 class="text-2xl font-bold text-white text-opacity-60"> 01/2021 - 04/2021 </h4>
    <p class="p-1 pb-0 text-base md:text-lg"> Extremly in depth React course, elevated my knowledge of hooks, react patterns, testing, and more advanced topics. </p>
    `],
    ["Introduction to Computer Science using Python, MITx", `
    <h4 class="text-2xl font-bold text-white text-opacity-60"> 08/2020 - 11/2020 </h4>
    <p class="p-1 pb-0 text-base md:text-lg"> Felt like a university course, but twice the speed that I've done in the university, mainly algorithms and foundations of CS. </p>
    `],
    ["Python for Data Science, Dataquest.io", `
    <h4 class="text-2xl font-bold text-white text-opacity-60"> 2019 </h4>
    <p class="p-1 pb-0 text-base md:text-lg"> My first Python course, it was more involved with pandas and numpy than anything else. </p>
    `],
    ["Front-End Certification, FreeCodeCamp", `
    <h4 class="text-2xl font-bold text-white text-opacity-60"> 2018 </h4>
    <p class="p-1 pb-0 text-base md:text-lg"> My first experience with Web technology, completed it in my free time, mainly the html/css and JS foundations. </p>
    `],
    ["Professional Path, FrontEnd Masters", `
    <h4 class="text-2xl font-bold text-white text-opacity-60"> 2020 </h4>
    <p class="p-1 pb-0 text-base md:text-lg"> I Finished all the workshops from the beginner track and the professional track, all of them pretty usefull, the best ones were the JS from Kyle simpsons, pretty in depth about JS inner workings. </p>
    `],

    ["How To Code in Go, Digital Ocean", `
    <h4 class="text-2xl font-bold text-white text-opacity-60"> 2021 </h4>
    <h6> Book </h6>
    <p> My first introduction to GoLang, basic language features and syntax. </p>
    `],
    ["Learning Go, Jon Bodner, O'Reilly", `
    <h4 class="text-2xl font-bold text-white text-opacity-60"> 2021 </h4>
    <h6> Book </h6>
    <p> My second step into GoLang, review of basic features, and a more hands on explanation of GoLang code and best practices, inspired me to develop meliRIP. </p>
    `],
    ["Full Stack Serverless, Nader Dabit, O'Reilly", `
    <h4 class="text-2xl font-bold text-white text-opacity-60"> 2020 </h4>
    <h6> Book </h6>
    <p> Completed the book, but did the excercises up until half of the book, then they were broken (no longer working) and it was too much effort to workaround all the errors. </p>
    `],
]}