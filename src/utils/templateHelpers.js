const helpers = {
    uppie: function (input) {
        const upper = input.toUpperCase();
        return upper;
    },

    Highlight: function (input) {
        return `🦖 <span style="background-color: yellow;>${input}</span>`
    },
}

export default helpers;