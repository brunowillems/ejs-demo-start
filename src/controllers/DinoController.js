import expressEjsLayouts from "express-ejs-layouts";
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

    const dino = dinosaurs.find((dino) => dino.slug == req.params.slug);

    if (!dino) {
        return res.status(404).render('pages/404', {
            layout: "layouts/error",
            message: "Dinosaur not found",
        });
    }

    res.render('dinosaurs/detail', {
        title: "Dinosaur Details",
        dino,
        navItems,
    });
}