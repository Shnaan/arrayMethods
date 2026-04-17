const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];


let firstWaterCreature = mythicalCreatures.find(Creature => Creature.type === "Water");
console.log(firstWaterCreature.name);
let indexOfGriffin = mythicalCreatures.findIndex(Creature => Creature.name === "Griffin");
console.log(indexOfGriffin);
let lastSeenInEnchantedForest = mythicalCreatures.find(Creature => Creature.lastSeen === "Enchanted Forest");
console.log(lastSeenInEnchantedForest.name);
