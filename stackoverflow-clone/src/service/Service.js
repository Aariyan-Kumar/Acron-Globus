import conf from '../conf/conf.js';

const API_KEY = conf.apiKey;

const Service = {

    async getAllQuestion() {
        const URL = `https://api.stackexchange.com/2.3/questions?pagesize=3&order=asc&sort=activity&site=stackoverflow&key=${API_KEY}`;
        try {
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.log("The error is in getting All Question", error);
        }
    },

    async getBountiedQuestion() {
        const URL = `https://api.stackexchange.com/2.3/questions/featured?pagesize=3&order=desc&sort=activity&site=stackoverflow&key=${API_KEY}`;
        try {
            const respone = await fetch(URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!respone.ok) {
                throw new Error(`HTTP error! status : ${respone.status}`);
            }

            const data = respone.json();
            return data;

        } catch (error) {
            console.log("The error is in getting Bountie Question", error);

        }
    },

    async getHotQuestion() {
        const URL = `https://api.stackexchange.com/2.3/questions?pagesize=3&order=desc&sort=hot&site=stackoverflow&key=${API_KEY}`;
        try {
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status : ${response.status}`);
            }

            const data = response.json();
            return data;

        } catch (error) {
            console.log("The error is in getting the hot Question", error);

        }
    },

    async getMonthQuestion() {
        const URL = `https://api.stackexchange.com/2.3/questions?pagesize=3&order=desc&sort=month&site=stackoverflow&key=${API_KEY}`;
        try {
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status : ${response.status}`);
            }

            const data = response.json();
            return data;

        } catch (error) {
            console.log("The error is in getting the hot Question", error);

        }
    },

    async getWeekQuestion() {
        const URL = `https://api.stackexchange.com/2.3/questions?pagesize=3&order=desc&sort=week&site=stackoverflow&key=${API_KEY}`;
        try {
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status : ${response.status}`);
            }

            const data = response.json();
            return data;

        } catch (error) {
            console.log("The error is in getting the hot Question", error);

        }
    }
}

export {
    Service
}