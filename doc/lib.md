# How a gdacm project is composed ?

Once you have a running project (see the about how to [create a project](create.md)), you can start to organise your dashboards.

Note that no file naming, no folder structure is required by gdacm for your sources. @gdacm/* is just a self of libs aimed at helping you generating grafana dashboards' JSON and uploading them to your Grafana instance, not a framework imposing a specific project structure. You can even do all your dashboards in one giant file if you've been raised among wild boars.

The description of the process will be from most generic to most specific, thus, the requierement for each step might be explained latter in the document.

## Generation and upload of dashboards

### Requirements

- A `DashboardsInfo` structure, containing the information about all the dashboards in your project. (see later for detail about how to create it)

- An `info` structure that will be used by all your dashboards. It is basically a json data in the record assiciating strings to json data.

Example:
(from /examples/example-sample-ts/res/info.ts)

```json
{
    [...]
    "ratesCurrencies": { 
        "USD" : "United States Dollar",
        "EUR" : "Euro",
        "GBP" : "British Pound",
        "JPY" : "Japanese Yen",
        "AUD" : "Australian Dollar",
        "CAD" : "Canadian Dollar",
        "KRW" : "South Korean Won"
    },
    "currencyUrlPrefix": "https://api.exchangerate-api.com/v4/latest/",
    [...]
}
```

This example demonstrates how to use such a structure in your project to create one dashboard by currency, and in each dashboard, one panel for each other currency. Note that this example exist in javascript "with types", in javascript "without types", and in typescript.

- A folder (or list of folders) containing files with json/yaml containing additional keys for your info structure.

### Result

Your dashboards will be generated and uploaded to your Grafana instance.

### Code

```ts
import { createDashboards } from '@gdacm/core';
import dashboardsInfos from './dashboards';
import infoCode from './info';

const main = async () => {
    await createDashboards(['./local'], './out', infoCode, dashboardsInfos);
}

main().catch(console.error);
```

### Details

```ts
const createDashboards : (localFolders: string[], outDir: string, infosCode: Info, dashboardsInfos: DashboardsInfo) => Promise<void>;
```

- `localFolders`: An array of local folders containing your files with json/yaml for additional info.
  - Any file named `info.json` or `info.yaml` will be used to add additional keys to the `info` structure. If the structure contains a string list named `includes`, the names inside this list will be used to include additional files from the local folders.
- `outDir`: The output directory where the generated dashboards will be saved. Can be disabled by settings the key `writeOnDisk` to `false` in the info structure.
- `infosCode`: The `info` structure that is defined in your code. Can be overridden or extended by the additional info files found in the local folders.
- `dashboardsInfos`: The `DashboardsInfo` structure containing information about all the dashboards in your project.

## Collecting your dashboards inside a DashboardsInfo structure

### Requirements

- A set of `DashboardInfo` structures, or function providing `DashboardInfo` structures dynamically.

### Code

```ts
import { DashboardsInfo } from "@gdacm/core";
import dashboardInfo1 from "./dashboard1";
import dashboardInfo2 from "./dashboard2";
import dashboardInfo3 from "./dashboard3";
import dashboardInfoGenerator4 from "./dashboard4";

export default new DashboardsInfo(
    dashboardInfo1,
    dashboardInfo2,
    dashboardInfo3,
    dashboardInfoGenerator4
)
```

In this example, we are collecting multiple `DashboardInfo` structures into a single `DashboardsInfo` instance. The first three dashboards are imported directly, while the fourth one is a function the returns a set of `DashboardInfo` structures, and the dashboards will be generated dynamically. All the dashboards will end up in the project folder directly.

The final folder structure inside Grafana will look like this:

```
Project Folder
├── Dashboard 1
├── Dashboard 2
├── Dashboard 3
├── Dashboard 4 - first dashboard
└── Dashboard 4 - second dashboard
```

```ts
import { FolderInfo, DashboardsInfo } from "@gdacm/core";
import dashboardInfo1 from "./dashboard1";
import dashboardInfo2 from "./dashboard2";
import dashboardInfo3 from "./dashboard3";
import dashboardInfoGenerator4 from "./dashboard4";

const folderInfo = new FolderInfo()
    .setName('Sub folder')
    .setEmoji('🐧')
    .setSid('subf')

export default new DashboardsInfo(
    dashboardInfo1,
    dashboardInfo2,
    new DashboardsInfo(
        dashboardInfo3,
        dashboardInfoGenerator4
    ).setPath([folderInfo]),
)
```

In this example, we are collecting multiple `DashboardInfo` structures into a single `DashboardsInfo` instance like in the previous example, but this time we are also organizing some of the dashboards into a sub-folder.

The final folder structure inside Grafana will look like this:

```
Project Folder
├── Dashboard 1
├── Dashboard 2
└── 🐧 Sub folder
    ├── Dashboard 3
    ├── Dashboard 4 - first dashboard
    └── Dashboard 4 - second dashboard
```

You can define each dashboard individually in a file, put all dashboard source file that belong in the same grafana folder in the same source folder, and then create a `DashboardsInfo` instance for each source folder to organize them accordingly. But nothing force you in the lib to do so.

### Details

You can pass various types to the `DashboardsInfo` constructor:

- A `DashboardInfo` instance representing a single dashboard.
- An array of `DashboardInfo` (`DashboardInfo[]`)
- A `DashboardsInfo` instance representing a collection of dashboards.
- An array of `DashboardsInfo` (`DashboardsInfo[]`)
- A function that takes an Info structure, and return a `DashboardInfo` instance, a `DashboardsInfo` instance or an array of these dynamically.

The function is usefull for generating dashboards dynamically based on data in your project `Info` structure. For example, if you have a list of currencies (see the example above), you can create a function that generates a dashboard for each currency dynamically.

## Creating a DashboardInfo

### Requirements

- You should know the basic JSON structure of a Grafana dashboard with the classic format.

### Code

```ts
import { DashboardMetaOptions } from "@gdacm/core";
import { DashboardInfo } from "@gdacm/core";
import { Dashboard, GrafanaItem } from "@gdacm/core";

const getDashboard = async (uid: string, metaOptions: DashboardMetaOptions): Promise<GrafanaItem> => {
    return new Dashboard(metaOptions)
        .setUid(uid)
        .setTitle(metaOptions.title)
        .setTags(metaOptions.tags)
        .addPanel(
            [...]
        )
        .addPanel(
            [...]
        )
        // .setXXXX(yyyyy)
}

export default new DashboardInfo()
    .setEmoji("📺")
    .setSid("example-dashboard")
    .setTitle("Example Dashboard")
    .setTags(["example", "demo"])
    .setDashboardGenerator(getDashboard)
```

### Details

- `getDashboard` is the function that generates the Grafana dashboard dynamically based on the provided `uid` and `metaOptions` it received from the gdacm engine.
    - `uid` is generated with various information provided (sid, vid prefix, etc.) See page [id, uid, vid, sid](./vid.md) for more details.
    - `metaOptions` contains [metaOptions](./metaoptions.md) for the dashboard. This structure contains various metadata including the info structure. All `GrafanaItem` instance (like `Dashboard`, `TimeSeries` panel) requires this kind of structure and you should always pass it down or a derivative of it to any `GrafanaItem` you create.
      - You can pass down to a function creating a panel some addictional informations using `metaOptions` with a syntax like `{ ...metaOptions, customKey1: customValue1, customKey2: customValue2 }`.
      - At the dashboard level, you receive those keys:
        - `title: string`: The title of the dashboard. The title may contain a different emoji depending if the dashboard is generated with a `testName` or not. If you don't want to use that, you can put your own title directly instead.
        - `tags: string []`: The tags associated with the dashboard. These tags will contains 'published' or 'preview' depending if the dashboard is generated with a `testName` or not.
        - `testName: string | undefined`: The name used to know if the dashboard is generated is for testing purposes, or a published one
        - `info: Record<string, unknown>`: The info structure containing various project-specific data. (See [info structure](./info.md) for more details.) Note that the type is a bit more complex than that.

- `DashboardInfo` instance is the object used by gdacm to create dashboard(s). It reference `getDashboard` as the function responsible for generating the actual Grafana dashboard, but gets some more informations.
    - `emoji: string`: The emoji representing the dashboard.
    - `sid: string`: The unique identifier for the dashboard within the project.
    - `title: string`: The title of the dashboard.
    - `tags: string []`: The tags associated with the dashboard.
    - `dashboardGenerator: (uid: string, metaOptions: DashboardMetaOptions) => Promise<GrafanaItem>`: The function responsible for generating the actual Grafana dashboard.

# Summary

- This document provides an overview of how to create and manage Grafana dashboards using the gdacm engine.
- `getDashboard` is the function responsible for generating the actual Grafana dashboard dynamically based on the provided `uid` and `metaOptions`.
- `DashboardInfo` is the object used by gdacm to register and manage dashboards, including metadata such as emoji, sid, title, tags, and the dashboard generator function.
- `DashboardsInfo` collects multiple `DashboardInfo` instances, allowing gdacm to manage a group of dashboards collectively.
- `createDashboards` is the function used by gdacm to create the dashboards from a `DashboardsInfo` instance and use the `Info` configuration provided from various sources (e.g., from code, from files on the local filesystem, from environment variables).
