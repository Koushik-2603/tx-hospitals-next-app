const axios = require('axios');

async function test() {
    try {
        const response = await axios.get("https://api.txhospitals.vgworld.in/getAllDoctors");
        console.log("Headers:", response.headers);
        console.log("Type of response.data:", typeof response.data);
    } catch (e) {
        console.error("Error:", e.message);
    }
}

test();
