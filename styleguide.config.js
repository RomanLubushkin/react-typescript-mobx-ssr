module.exports = {
    propsParser: require('react-docgen-typescript').parse,
    sections: [
        {
            name: 'UI Elements',
            content: "src/ui/_ui.md",
            components: ["src/ui/**/*.tsx"]
        }, {
            name: 'Components',
            content: "src/components/_components.md",
            components: ["src/components/**/*.tsx"]
        }
    ]

};
