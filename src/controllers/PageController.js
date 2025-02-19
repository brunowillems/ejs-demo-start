// res.render("<NAAM VAN DE VIEW>", {"<DATA NAAR DE VIEW>"});"

import {
    person,
    navItems, // url, label 
} from '../data/data.js';

export const home = (req, res) => {
    res.render('pages/home', {
        title: 'Dinosaurs around the world',
        content: 'Welcome to the world of dinosaurs!',
        navItems,
    });
};

export const about = (req, res) => {
    res.render('pages/default', {
        title: 'About us',
        content: 'We are a group of dinosaur enthusiasts.',
        team: ["T-Rex", "Velociraptor", "Stegosaurus", "Triceratops", "<strong>Spinosaurus</strong>"],
        navItems,
    });
}

export const contact = (req, res) => {
    res.render('pages/contact', {
        title: 'Contact',
        content: 'Contact us at 09 233 40 89',
        person,
        navItems,
    });
}

export const privacy = (req, res) => {
    res.render('pages/default', {
        title: 'Privacy Policy',
        content: 'Dinosaurs are protective of their privacy.',
        team: false,
        navItems,
    });
}
