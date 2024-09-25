import axios from "axios";

class DataHandler {
    constructor(baseURL, endpoint, useMockData = false, dataMocked = null) {
        this.baseURL = baseURL;
        this.endpoint = endpoint;
        this.useMockData = useMockData;
        this.dataMocked = dataMocked;
        this.data = null;
    }

    async fetchData() {
        try {
            if (this.useMockData && this.dataMocked) {
                this.data = this.dataMocked;
                return this.data;
            } else {
                console.log(
                    "Fetching data from API:",
                    this.baseURL + this.endpoint
                );
                const response = await axios.get(this.baseURL + this.endpoint);
                this.data = response.data;
                return this.data;
            }
        } catch (error) {
            console.error(
                "Erreur lors de la récupération des données :",
                error
            );
            throw error;
        }
    }

    formatDataToJson(data) {
        if (typeof data !== "string") {
            try {
                const jsonData = JSON.stringify(data);
                return jsonData;
            } catch (error) {
                console.error("Erreur lors de la conversion en JSON:", error);
                return null;
            }
        }
        return data;
    }
    formatDataToJavaScript(data) {
        if (typeof data === "string") {
            try {
                data = JSON.parse(data);
            } catch (e) {
                console.error("Les données ne sont pas un JSON valide", e);
                return null;
            }
            return data;
        }
    }
    
    async getData(formatFunction = null) {
        const data = await this.fetchData();
        return this.formatData(data, formatFunction);
    }
}

export default DataHandler;
