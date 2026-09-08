export default function (plop) {
    plop.setGenerator("grafanaItem", {
        description: "Create a new Grafana item",

        prompts: [
            {
                type: "input",
                name: "name",
                message: "Item name:",
            },
        ],

        actions: [
            {
                type: "add",
                path: "src/items/{{pascalCase name}}.js",
                templateFile: "plop-templates/grafanaItemCode.hbs",
            },
            {
                type: "add",
                path: "src/items/{{pascalCase name}}.test.js",
                templateFile: "plop-templates/grafanaItemTest.hbs",
            },
        ],
    });
    plop.setGenerator("grafanaItemCode", {
        description: "Create a new Grafana item",

        prompts: [
            {
                type: "input",
                name: "name",
                message: "Item name:",
            },
        ],

        actions: [
            {
                type: "add",
                path: "src/items/{{pascalCase name}}.js",
                templateFile: "plop-templates/grafanaItemCode.hbs",
            },
        ],
    });
    plop.setGenerator("grafanaItemTest", {
        description: "Create a new Grafana item test",

        prompts: [
            {
                type: "input",
                name: "name",
                message: "Item name for test:",
            },
        ],

        actions: [
            {
                type: "add",
                path: "src/items/{{pascalCase name}}.test.js",
                templateFile: "plop-templates/grafanaItemTest.hbs",
            },
        ],
    });
};