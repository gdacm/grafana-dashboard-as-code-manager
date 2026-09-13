# Grafana Dashboard as Code Manager

Libs for generating Grafana dashboards as code.

**⚠️ Warning** : This project is still under active development and may contain breaking changes. Use with caution in production environments.

## Project

- **Sources** : https://github.com/gdacm/grafana-dashboard-as-code-manager
- **Packages** : 
    - https://www.npmjs.com/package/@gdacm/core
    - https://www.npmjs.com/package/@gdacm/base-types
    - https://www.npmjs.com/package/@gdacm/dashboard-manager
    - https://www.npmjs.com/package/@gdacm/grafana-items
    - https://www.npmjs.com/package/@gdacm/querybuilder-uql
    - https://www.npmjs.com/package/@gdacm/querybuilder-influxdb2

## Documentation

- [Create a Project (tutorial)](./doc/create.md)
- [Lib Documentation](./doc/lib.md)
- [id, uid, vid, sid...](./doc/vid.md) - What are those ids ?
- [metaOptions](./doc/metaoptions.md) - What is metaOptions for gdacm
- [Info structure](./doc/info.md)

- **@gdacm/querybuilder-uql** and **@gdacm/querybuilder-influxdb2** are query builder libraries for UQL and InfluxDB v2 respectively. Those can be be used without the core libraries of @gdacm, and you can use @gdacm without them, but if you need to use UQL or InfluxDB v2 queries within your Grafana dashboards, those are useful.