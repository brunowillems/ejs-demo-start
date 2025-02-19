import { dinosaurs } from "../data/data.js";

export const index = (req, res) => {
    res.render('pages/dinosaurs', {
        title: dinosaurs.name,
        herbivore: dinosaurs.isHerbivore,
        image: dinosaurs.image,
    });
}

export const detail = (req, res) => {
    res.render('pages/dinosaur', {
        title: dinosaurs.name,
        herbivore: dinosaurs.isHerbivore,
        image: dinosaurs.image,
        description: dinosaurs.description,
    });
}