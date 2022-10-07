const battleTheHorde = [];
const cardList = [
  {
    name: "Minotaur Goreseeker",
    cant: 10,
  },
  {
    name: "Minotaur Younghorn",
    cant: 15,
  },
  {
    name: "Mogis's Chosen",
    cant: 4,
  },
  {
    name: "Phoberos Reaver",
    cant: 10,
  },
  {
    name: "Reckless Minotaur",
    cant: 4,
  },
  {
    name: "Consuming Rage",
    cant: 2,
  },
  {
    name: "Descend on the Prey",
    cant: 2,
  },
  {
    name: "Intervention of Keranos",
    cant: 2,
  },
  {
    name: "Touch of the Horned God",
    cant: 2,
  },
  {
    name: "Unquenchable Fury",
    cant: 2,
  },
  {
    name: "Altar of Mogis",
    cant: 1,
  },
  {
    name: "Massacre Totem",
    cant: 1,
  },
  {
    name: "Plundered Statue",
    cant: 2,
  },
  {
    name: "Refreshing Elixir",
    cant: 2,
  },
  {
    name: "Vitality Salve",
    cant: 1,
  },
];

cardList.forEach(card => {
  for (let i = 0; i < card.cant; i++) {
    battleTheHorde.push({name: card.name});
  }
});

export default battleTheHorde

