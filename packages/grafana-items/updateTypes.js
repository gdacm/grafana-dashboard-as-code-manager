import * as Grafana from "./src/index.js";
import { writeFile, mkdir } from 'fs/promises';
import { GrafanaItem } from "./src/items/GrafanaItem.js";
import { getTypes } from "./src/utils/typesDefinition.js";

const main = async () => {
    await mkdir('./dist/items', { recursive: true });
    const types = getTypes();
    const allHeaders = types.map(([clsName, typeDef]) => `export { ${clsName} } from "./items/${clsName}.js";`);
    await writeFile('./src/index.d.ts', allHeaders.join('\n'));
    await writeFile('./dist/index.d.ts', allHeaders.join('\n'));
    for (const [clsName, typeDef, parentName, typeNamesToInclude] of types) {
        const header = parentName ? `import { ${parentName} } from "./${parentName}.js";\n${typeNamesToInclude.map(typeName => `import { ${typeName} } from "./${typeName}.js";`).join('\n')}\n\n` : '';
        const headerTypes = `import type { GenericMetaOptions } from "@gdacm/base-types";\n\n`
        
        await writeFile(`./src/items/${clsName}.d.ts`, `${header}${headerTypes}${typeDef}`);
        await writeFile(`./dist/items/${clsName}.d.ts`, `${header}${headerTypes}${typeDef}`);
    }
}

main().catch(console.error);