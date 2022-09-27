import DefaultConfiguration from "../../Plugin/DefaultConfiguration.json"
export var baseOe2Url = window.location.pathname.slice(0, -1);
export var orthancApiUrl = '../../'
export var oe2ApiUrl = '../api/';
export var localeConf = DefaultConfiguration.OrthancExplorer2.UiOptions.DefaultLocale;
console.log(DefaultConfiguration.OrthancExplorer2.UiOptions.DefaultLocale,"ajaa")