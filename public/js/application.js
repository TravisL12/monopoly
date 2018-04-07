var tileData = {
    corners: [
        new Corner({ id: 'go' }),
        new Corner({ id: 'jail' }),
        new Corner({ id: 'parking' }),
        new Corner({ id: 'go-to-jail' }),
    ],

    sides: [
        [
            new Property({ name: 'Mediter-ranean Avenue', cost: 60, color: 'Brown' }),
            new Community({ name: 'Community Chest' }),
            new Property({ name: 'Baltic Avenue', cost: 60, color: 'Brown' }),
            new Tax({ name: 'Income Tax', tax: 200 }),
            new Utility({ name: 'Reading Railroad', cost: 200 }),
            new Property({ name: 'Oriental Avenue', cost: 100, color: 'LightBlue' }),
            new Chance({ name: 'Chance' }),
            new Property({ name: 'Vermont Avenue', cost: 100, color: 'LightBlue' }),
            new Property({ name: 'Connecticut Avenue', cost: 120, color: 'LightBlue' }),
        ],
        [
            new Property({ name: 'St. Charles Place', cost: 140, color: 'Purple' }),
            new Utility({ name: 'Electric Company', cost: 150 }),
            new Property({ name: 'States Avenue', cost: 140, color: 'Purple' }),
            new Property({ name: 'Virginia Avenue', cost: 160, color: 'Purple' }),
            new Utility({ name: 'Pennsylvania Railroad', cost: 200 }),
            new Property({ name: 'St. James Place', cost: 180, color: 'Orange' }),
            new Community({ name: 'Community Chest' }),
            new Property({ name: 'Tennessee Avenue', cost: 180, color: 'Orange' }),
            new Property({ name: 'New York Avenue', cost: 200, color: 'Orange' }),
        ],
        [
            new Property({ name: 'Kentucky Avenue', cost: 220, color: 'Red' }),
            new Chance({ name: 'Chance' }),
            new Property({ name: 'Indiana Avenue', cost: 220, color: 'Red' }),
            new Property({ name: 'Illinois Avenue', cost: 240, color: 'Red' }),
            new Utility({ name: 'B&O Railroad', cost: 200 }),
            new Property({ name: 'Atlantic Avenue', cost: 260, color: 'Yellow' }),
            new Property({ name: 'Ventnor Avenue', cost: 260, color: 'Yellow' }),
            new Utility({ name: 'Water Works', cost: 150 }),
            new Property({ name: 'Marvin Gardens', cost: 280, color: 'Yellow' }),
        ],
        [
            new Property({ name: 'Pacific Avenue', cost: 300, color: 'Green' }),
            new Property({ name: 'North Carolina Avenue', cost: 300, color: 'Green' }),
            new Community({ name: 'Community Chest' }),
            new Property({ name: 'Pennsylvania Avenue', cost: 320, color: 'Green' }),
            new Utility({ name: 'Short Line', cost: 200 }),
            new Chance({ name: 'Chance' }),
            new Property({ name: 'Park Place', cost: 350, color: 'Blue' }),
            new Tax({ name: 'Luxury Tax', tax: 200 }),
            new Property({ name: 'Boardwalk', cost: 400, color: 'Blue' }),
        ],
    ],
};

var game = new Game('game', tileData);

// game.setup
//   game.numberOfPlayers (how many?)
//   loop
//      choose name
//      choose gamePiece
//      new Player(name, gamepiece)
//   game.start
//   game.rollDice
