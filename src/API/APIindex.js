class Helper {
    static baseURL() {
        return "https://api.foursquare.com/v2";
    }
    static auth() {
        const keys = {
            client_id: "SAIXBZ1XZCBXC45ELYBMOPOXXLQ2ZXCMBHGYVVE53HFQFHI4",
            client_secret: "0MVFYMZDBKCPCVYTFJJP5YIMS4TPVOVPLSUFI3AMWEEFVQGN",
            v: "20181120"
        };
        return Object.keys(keys).map(key => `${key}=${keys[key]}`).join("&");
    }
    static urlBuilder(urlPrams) {
        if(!urlPrams) {
            return '';
        }
        return Object.keys(urlPrams).map(key => `${key}=${urlPrams[key]}`).join("&");
    }
    static headers() {
        return {
            Accept: "application/json"
        };
        
    }
    static simpleFetch(endpoints, method, urlPrams) {
        let requestData = {
            method,
            headers: Helper.headers()
        };
        return fetch(`${Helper.baseURL()}${endpoints}?${Helper.auth()}&${Helper.urlBuilder(urlPrams)}`, requestData)
        .then(res => res.json()).catch(error => 
            alert("Error! The map could not be loaded "))

    }
}

export default class SquareAPI {
    static search(urlPrams) {
        return Helper.simpleFetch("/venues/search", "GET", urlPrams);
    }
    static getVenuesDetails(VENUE_ID) {
        return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
    }
    static getVenuesPhotos(VENUE_ID) {
        return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET");
    }
}





