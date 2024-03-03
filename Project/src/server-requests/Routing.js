import pathConf from "./path.json";
export class Routing {
    constructor(api, section) {
        this.api = api
        this.section = section
    }
    static get(api) {
        let apiSection = pathConf[api];
        return new Routing(apiSection, api);
    }

    get(endpoint, id) {
        let url = pathConf.host + '/' + this.section + this.api[endpoint].url;
        if (url.includes(':id')) {
            if (typeof id === 'undefined') {
                throw new Error("Please provide path variable");
            }
            url = url.replace(':id', id);
        }
        return url;
    }
}