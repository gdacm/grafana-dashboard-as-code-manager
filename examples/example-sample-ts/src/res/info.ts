const projectName = "Example Project TS";
const projectRootVid = "example-project-ts";
const projectRootGrafanaFolder = "Example Project TS";

const ratesCurrencies = { 
    "USD" : "United States Dollar",
    "EUR" : "Euro",
    "GBP" : "British Pound",
    "JPY" : "Japanese Yen",
    "AUD" : "Australian Dollar",
    "CAD" : "Canadian Dollar",
    "KRW" : "South Korean Won"
};

const currencyUrlPrefix = "https://api.exchangerate-api.com/v4/latest/"

export default {
    projectName,
    projectRootVid,
    projectRootGrafanaFolder,
    ratesCurrencies,
    currencyUrlPrefix
}
