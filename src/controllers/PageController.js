// res.render("<NAAM VAN DE VIEW>", {"<DATA NAAR DE VIEW>"});"
export const home = (req, res) => {
    res.render('home', {
        title: 'Dinosaurs around the world',
        content: 'Welcome to the orld of dinosaurs!'
    });
};

export const about = (req, res) => {
    res.render('default', {
        title: 'About us',
        content: 'We are a group of dinosaur enthusiasts.'
    });
}

export const contact = (req, res) => {
    res.render('Contact', {
        title: 'Contact',
        content: 'Contact us at 09 233 40 89'
    });
}

export const privacy = (req, res) => {
    res.render('default', {
        title: 'Privacy Policy',
        content: 'Dinosaurs are protective of their privacy.'
    });
}