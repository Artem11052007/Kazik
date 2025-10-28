document.documentElement.style.height = '100%';
document.body.style.cssText = `
  display: flex;
  justify-content: center;
  align-items: center; 
            background-image: url('https://tournavigator.pro/%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F/d/3072/other/1011/1008/1466690366.jpg');
  background-size: cover; 
  background-repeat: no-repeat; 
  background-position: center;
            `;
const myNewElement = document.createElement('div');
myNewElement.style.cssText = `
  color: blue;
  background: #ffffffff;
  width: 100%;
  max-width: 700px;
  height: auto;
  border-radius: 20px;
  margin-top: 20px;
`;
document.body.append(myNewElement);
let nameuser = prompt("Введіть своє ім'я...");
if(!nameuser){nameuser="Евген Олександрович"}
const firstNewElement = document.createElement('div');
myNewElement.append(firstNewElement);
const userName = document.createElement('p');
userName.textContent = (nameuser);
userName.style.cssText = `
color: black;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
firstNewElement.append(userName);
const raund = document.createElement('p');
raund.textContent = `Спроба 0 із 3`;
raund.style.cssText = `
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;
firstNewElement.append(raund);
const thirdNewElement = document.createElement('div');
thirdNewElement.style.cssText = `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
`;
myNewElement.append(thirdNewElement)
const generateBul = document.createElement('button');
generateBul.textContent = "Генерувати";
generateBul.style.cssText = `
  background: #1C6EA4;
  color: #fff;
  font-size: 20px;
  padding: 10px 25px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
`;
thirdNewElement.append(generateBul);
const thirdElement = document.createElement('div');
thirdElement.style.cssText = `
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
myNewElement.append(thirdElement);

const cards = [
  {src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.EToHL-r0KVknLakAp0vrSAHaIH%3Fpid%3DApi&f=1&ipt=86a4e784ac37ab08e96af0b48835b0caffdc5a4181127b64806237dc3f44a535&ipo=images'},
  {src: 'https://i.pinimg.com/564x/07/94/a2/0794a2f45bed2d329ab3460ebbe44f00.jpg'},
  {src: 'https://media.istockphoto.com/id/184276818/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=HDH3wLEAvc7soT85pAcS4JOQu5KJ8xM9JOilVe1zFLI='},
  {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrvpLdP94mBpTySD67Qggql07ZhYq4IkpfzQ&s'},
  {src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%2Fid%2FOIP.2zlq4DQHCvsVKYV5-ukBZwHaHa%3Fpid%3DApi&f=1&ipt=32e9aa305915e461be80227123e6fbd866bf4c026ebbf892e8503659e0129b6e&ipo=images'},
  {src: 'https://img.freepik.com/free-vector/crossing-bones-skull-vector-logo_43623-1281.jpg?semt=ais_hybrid&w=740&q=80'}
];

const c1 = document.createElement('img'); c1.style.cssText = `width: 100%; max-width: 200px; height: 100%; max-height: 200px; margin:5px;
box-shadow: 0 0 20px rgba(255, 238, 0, 0.33);
animation-delay: 50s;
    cursor: pointer;`; thirdElement.append(c1);
const c2 = document.createElement('img'); c2.style.cssText = `width: 100%; max-width: 200px; height: 100%; max-height: 200px; margin:5px;
box-shadow: 0 0 20px rgba(255, 238, 0, 0.33);
    cursor: pointer;`; thirdElement.append(c2);
const c3 = document.createElement('img'); c3.style.cssText = `width: 100%; max-width: 200px; height: 100%; max-height: 200px; margin:5px;
box-shadow: 0 0 20px rgba(255, 238, 0, 0.33);
    cursor: pointer;`; thirdElement.append(c3);
thirdElement.append(document.createElement('br'));

const c4 = document.createElement('img'); c4.style.cssText = `width: 100%; max-width: 200px; height: 100%; max-height: 200px; margin:5px;
box-shadow: 0 0 20px rgba(255, 238, 0, 0.33);
    cursor: pointer;`; thirdElement.append(c4);
const c5 = document.createElement('img'); c5.style.cssText = `width: 100%; max-width: 200px; height: 100%; max-height: 200px; margin:5px;
box-shadow: 0 0 20px rgba(255, 238, 0, 0.33);
    cursor: pointer;`; thirdElement.append(c5);
const c6 = document.createElement('img'); c6.style.cssText = `width: 100%; max-width: 200px; height: 100%; max-height: 200px; margin:5px;
box-shadow: 0 0 20px rgba(255, 238, 0, 0.33);
    cursor: pointer;`; thirdElement.append(c6);
thirdElement.append(document.createElement('br'));

const c7 = document.createElement('img'); c7.style.cssText = `width: 100%; max-width: 200px; height: 100%; max-height: 200px; margin:5px;
box-shadow: 0 0 20px rgba(255, 238, 0, 0.33);
    cursor: pointer;`; thirdElement.append(c7);
const c8 = document.createElement('img'); c8.style.cssText = `width: 100%; max-width: 200px; height: 100%; max-height: 200px; margin:5px;
box-shadow: 0 0 20px rgba(255, 238, 0, 0.33);
    cursor: pointer;`; thirdElement.append(c8);
const c9 = document.createElement('img'); c9.style.cssText = `width: 100%; max-width: 200px; height: 100%; max-height: 200px; margin:5px;
box-shadow: 0 0 20px rgba(255, 238, 0, 0.33);
    cursor: pointer;`; thirdElement.append(c9);
thirdElement.append(document.createElement('br'));

const result = document.createElement('p');
result.style.cssText = `
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;
myNewElement.append(result);
let rounds = 0;
let totalRounds = 3;
generateBul.onclick = () => {
  if (rounds >= totalRounds) return; 
  
  rounds++
  raund.textContent = `Спроба ${rounds} із 3`;

  setTimeout(function() {c1.src = cards[Math.floor(Math.random() * cards.length)].src;},800);
  setTimeout(function() {c2.src = cards[Math.floor(Math.random() * cards.length)].src;},1000);
  setTimeout(function() {c3.src = cards[Math.floor(Math.random() * cards.length)].src;},1200);
  setTimeout(function() {c4.src = cards[Math.floor(Math.random() * cards.length)].src;},1400);
  setTimeout(function() {c5.src = cards[Math.floor(Math.random() * cards.length)].src;},1600);
  setTimeout(function() {c6.src = cards[Math.floor(Math.random() * cards.length)].src;},1800);
  setTimeout(function() {c7.src = cards[Math.floor(Math.random() * cards.length)].src;},2000);
  setTimeout(function() {c8.src = cards[Math.floor(Math.random() * cards.length)].src;},2200);
  setTimeout(function() {c9.src = cards[Math.floor(Math.random() * cards.length)].src;},2400);
setTimeout(function() {
  if(c4.src === c5.src && c5.src === c6.src){
    result.textContent = "Перемога!";
    result.style.color = "green";
  }
  
  else if(rounds == totalRounds) {
    result.textContent = "Спробуй ще!";
    result.style.color = "red";
  } },2500);
}

const relod = document.createElement('a'); 
relod.textContent = "Почати спочатку"; 
relod.style.cssText = `
  display: inline-block;
  margin: 20px 0px;
  margin-left: 253px;
  padding: 10px 20px;
  font-size: 20px;
  background-color: #370075ff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;

relod.onclick = () => {
  location.reload(); 
};

myNewElement.append(relod);
