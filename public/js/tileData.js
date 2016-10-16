var tileData = {
    corners: [
        new Corner({ name: 'Go', id: 'go'}),
        new Corner({ name: 'In Jail/Just Visiting', id: 'jail' }),
        new Corner({ name: 'Free Parking', id: 'parking' }),
        new Corner({ name: 'Go To Jail', id:'go-to-jail' }),
    ],

    sides: [
        [
            new Property({ name: 'Connecticut Avenue', cost: 120, color: 'SkyBlue' }),
            new Property({ name: 'Vermont Avenue', cost: 100, color: 'SkyBlue' }),
            new Chance({ name: 'Chance' }),
            new Property({ name: 'Oriental Avenue', cost: 100, color: 'SkyBlue' }),
            new Utility({ name: 'Reading Railroad', cost: 200 }),
            new Tax({ name: 'Income Tax', tax: 200 }),
            new Property({ name: 'Baltic Avenue', cost: 60, color: 'SaddleBrown' }),
            new Community({ name: 'Community Chest'}),
            new Property({ name: 'Mediterranean Avenue', cost: 60, color: 'SaddleBrown' }),
        ],
        [
            new Property({ name: 'New York Avenue', cost: 200, color: 'Orange' }),
            new Property({ name: 'Tennessee Avenue', cost: 180, color: 'Orange' }),
            new Community({ name: 'Community Chest'}),
            new Property({ name: 'St. James Place', cost: 180, color: 'Orange' }),
            new Utility({ name: 'Pennsylvania Railroad', cost: 200 }),
            new Property({ name: 'Virginia Avenue', cost: 160, color: 'DarkOrchid' }),
            new Property({ name: 'States Avenue', cost: 140, color: 'DarkOrchid' }),
            new Utility({ name: 'Electric Company', cost: 150 }),
            new Property({ name: 'St. Charles Place', cost: 140, color: 'DarkOrchid' }),
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
            new Property({ name: 'Boardwalk', cost: 400, color: 'Blue' }),
            new Tax({ name: 'Luxury Tax', tax: 200 }),
            new Property({ name: 'Park Place', cost: 350, color: 'Blue' }),
            new Chance({ name: 'Chance' }),
            new Utility({ name: 'Short Line', cost: 200 }),
            new Property({ name: 'Pennsylvania Avenue', cost: 320, color: 'Green' }),
            new Community({ name: 'Community Chest'}),
            new Property({ name: 'North Carolina Avenue', cost: 300, color: 'Green' }),
            new Property({ name: 'Pacific Avenue', cost: 300, color: 'Green' }),
        ]
    ]
};
