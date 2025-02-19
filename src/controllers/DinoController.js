import { dinosaurs, navItems } from "../data/data.js";

export const index = (req, res) => {
    res.render('dinosaurs/index', {
        dinosaurs,
        title: dinosaurs.name,
        herbivore: dinosaurs.isHerbivore,
        // image: dinosaurs.image,
        navItems,
    });
}

export const detail = (req, res) => {
    res.render('pages/dinosaur/:slug', {
        dinosaurs,
        title: dinosaurs.name,
        herbivore: dinosaurs.isHerbivore,
        image: dinosaurs.image,
        description: dinosaurs.description,
    });
}