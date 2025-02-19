const helpers = {
    uppie: function (input) {
        const upper = input.toUpperCase();
        return upper;
    },

    Highlight: function (input) {
        return `<span style="background-color: yelow;>${input}</span>`
    }
}

export default helpers;