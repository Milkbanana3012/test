const members = [
    { name: "a", money: 500},
    { name: "b", money: 400},
    { name: "c", money: 5200},
    { name: "d", money: 1200},
];
const isMoney1000 = members.find((member) => {
    member.money > 1000;
});

console.log(isMoney1000);

function DisplayMember(){
    const kim2 = member.map((element) => {return element.name})
    console.log(kim2);

}
DisplayMember();