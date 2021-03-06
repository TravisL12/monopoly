import { Tile, Corner, Property, Community, Tax, Utility, Railroad, Chance } from "./js/models/Tile";
import Player from "./js/models/Player";
import Game from "./js/models/Game";

import './sass/application.scss';

const tileData = {
    corners: [
        new Corner({ id: 'go', name: 'Go' }),
        new Corner({ id: 'jail', name: 'Jail' }),
        new Corner({ id: 'parking', name: 'Parking' }),
        new Corner({ id: 'go-to-jail', name: 'Go to jail' }),
    ],

    sides: [
        [
            new Property({
                name: 'Mediter-ranean Avenue',
                cost: 60,
                color: 'violet',
                rent: [2, 10, 30, 90, 160, 250],
                houseCost: 50,
            }),
            new Community({ name: 'Community Chest' }),
            new Property({
                name: 'Baltic Avenue',
                cost: 60,
                color: 'violet',
                rent: [4, 20, 60, 180, 320, 450],
                houseCost: 50,
            }),
            new Tax({ name: 'Income Tax', tax: 200 }),
            new Railroad({ name: 'Reading Railroad', cost: 200 }),
            new Property({
                name: 'Oriental Avenue',
                cost: 100,
                color: 'lightblue',
                rent: [6, 30, 90, 270, 400, 550],
                houseCost: 50,
            }),
            new Chance({ name: 'Chance' }),
            new Property({
                name: 'Vermont Avenue',
                cost: 100,
                color: 'lightblue',
                rent: [6, 30, 90, 270, 400, 550],
                houseCost: 50,
            }),
            new Property({
                name: 'Connecticut Avenue',
                cost: 120,
                color: 'lightblue',
                rent: [8, 40, 100, 300, 450, 600],
                houseCost: 50,
            }),
        ],
        [
            new Property({
                name: 'St. Charles Place',
                cost: 140,
                color: 'purple',
                rent: [10, 50, 150, 450, 625, 750],
                houseCost: 100,
            }),
            new Utility({ name: 'Electric Company', cost: 150 }),
            new Property({
                name: 'States Avenue',
                cost: 140,
                color: 'purple',
                rent: [10, 50, 150, 450, 625, 750],
                houseCost: 100,
            }),
            new Property({
                name: 'Virginia Avenue',
                cost: 160,
                color: 'purple',
                rent: [12, 60, 180, 500, 700, 900],
                houseCost: 100,
            }),
            new Railroad({ name: 'Pennsylvania Railroad', cost: 200 }),
            new Property({
                name: 'St. James Place',
                cost: 180,
                color: 'orange',
                rent: [14, 70, 200, 550, 750, 950],
                houseCost: 100,
            }),
            new Community({ name: 'Community Chest' }),
            new Property({
                name: 'Tennessee Avenue',
                cost: 180,
                color: 'orange',
                rent: [14, 70, 200, 550, 750, 950],
                houseCost: 100,
            }),
            new Property({
                name: 'New York Avenue',
                cost: 200,
                color: 'orange',
                rent: [16, 80, 220, 600, 800, 1000],
                houseCost: 100,
            }),
        ],
        [
            new Property({
                name: 'Kentucky Avenue',
                cost: 220,
                color: 'red',
                rent: [18, 90, 250, 700, 875, 1050],
                houseCost: 150,
            }),
            new Chance({ name: 'Chance' }),
            new Property({
                name: 'Indiana Avenue',
                cost: 220,
                color: 'red',
                rent: [18, 90, 250, 700, 875, 1050],
                houseCost: 150,
            }),
            new Property({
                name: 'Illinois Avenue',
                cost: 240,
                color: 'red',
                rent: [20, 100, 300, 750, 925, 1100],
                houseCost: 150,
            }),
            new Railroad({ name: 'B&O Railroad', cost: 200 }),
            new Property({
                name: 'Atlantic Avenue',
                cost: 260,
                color: 'yellow',
                rent: [22, 110, 330, 800, 975, 1150],
                houseCost: 150,
            }),
            new Property({
                name: 'Ventnor Avenue',
                cost: 260,
                color: 'yellow',
                rent: [22, 110, 330, 800, 975, 1150],
                houseCost: 150,
            }),
            new Utility({ name: 'Water Works', cost: 150 }),
            new Property({
                name: 'Marvin Gardens',
                cost: 280,
                color: 'yellow',
                rent: [22, 120, 360, 850, 1025, 1200],
                houseCost: 150,
            }),
        ],
        [
            new Property({
                name: 'Pacific Avenue',
                cost: 300,
                color: 'green',
                rent: [26, 130, 390, 900, 1100, 1275],
                houseCost: 200,
            }),
            new Property({
                name: 'North Carolina Avenue',
                cost: 300,
                color: 'green',
                rent: [26, 130, 390, 900, 1100, 1275],
                houseCost: 200,
            }),
            new Community({ name: 'Community Chest' }),
            new Property({
                name: 'Pennsylvania Avenue',
                cost: 320,
                color: 'green',
                rent: [28, 150, 450, 1000, 1200, 1400],
                houseCost: 200,
            }),
            new Railroad({ name: 'Short Line', cost: 200 }),
            new Chance({ name: 'Chance' }),
            new Property({
                name: 'Park Place',
                cost: 350,
                color: 'blue',
                rent: [35, 175, 500, 1100, 1300, 1500],
                houseCost: 200,
            }),
            new Tax({ name: 'Luxury Tax', tax: 200 }),
            new Property({
                name: 'Boardwalk',
                cost: 400,
                color: 'blue',
                rent: [50, 200, 600, 1400, 1700, 2000],
                houseCost: 200,
            }),
        ],
    ],
};

const game = new Game('game', tileData);
