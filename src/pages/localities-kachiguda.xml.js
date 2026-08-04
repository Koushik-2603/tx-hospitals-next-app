import { generateXML, apiUrl } from "../utils/sitemap";
import axios from "axios";

export async function getServerSideProps({ res }) {
    try {
        const response = await axios.get(`${apiUrl}/api/specialities/Kachiguda`);
        let data = response.data;

        if (data && !Array.isArray(data) && Array.isArray(data.value)) {
            data = data.value;
        }

        const routes = (Array.isArray(data) ? data : [])
            .map(item => item.LandingPageUrl)
            .filter(Boolean);

        const sitemap = generateXML(routes);
        res.setHeader("Content-Type", "text/xml");
        res.setHeader(
            "Cache-Control",
            "public, s-maxage=86400, stale-while-revalidate"
        );
        res.write(sitemap);
        res.end();
    } catch (error) {
        console.error("Error fetching Kachiguda specialities for sitemap:", error);
        res.setHeader("Content-Type", "text/xml");
        res.write(generateXML([]));
        res.end();
    }

    return {
        props: {},
    };
}

export default function SiteMap() { }
