const fs = require("fs");
const path = require("path");
const axios = require("axios");

const baseUrl = "https://txhospitals.in";
const apiUrl = "https://api.txhospitals.vgworld.in";
const publicDir = path.resolve(__dirname, "../public");
let now = new Date().toISOString().replace(".000Z", "+00:00");

const staticRoutes = [
  "/",
  "/about-us/",
  "/board-of-directors/",
  "/management/",
  "/why-tx-hospitals/",
  "/faqs/",
  "/contact-us/",
  "/contact-us/uppal/",
  "/contact-us/kachiguda/",
  "/contact-us/banjara-hills1/",
  "/contact-us/banjara-hills2/",
  "/patient-and-visitors/",
  "/patient-and-visitors/visitors/",
  "/patient-and-visitors/in-patient/",
  "/patient-and-visitors/rooms/",
  "/patient-and-visitors/insurance/",
  "/patient-and-visitors/international-patients/",
  "/facilities/",
  "/facilities/diagnostic/",
  "/facilities/pharmacy/",
  "/facilities/others/",
  "/find-doctor/",
  "/book-an-appointment/",
  "/disclaimer/",
  "/privacy-policy/",
  "/blog/",
  "/health-package/",
  "/surgery-care/",
  "/international-patient-services/",
  "/thank-you/",
  "/biomedical-wastage/"
];

const COERoutes = [
  "/specialities/cardiac-sciences/",
  "/specialities/cardiac-sciences/disease-and-treatment/",
  "/specialities/cardiac-sciences/diagnostics/",
  "/specialities/cardiac-sciences/procedures/",
  "/specialities/cardiac-sciences/technology-and-facilities/",
  "/specialities/cardiac-sciences/our-clinical-team/",
  "/specialities/neuro-sciences/",
  "/specialities/neuro-sciences/disease-and-treatment/",
  "/specialities/neuro-sciences/diagnostics/",
  "/specialities/neuro-sciences/procedures/",
  "/specialities/neuro-sciences/technology-and-facilities/",
  "/specialities/neuro-sciences/our-clinical-team/",
  "/specialities/urology/",
  "/specialities/urology/disease-and-treatment/",
  "/specialities/urology/diagnostics/",
  "/specialities/urology/procedures/",
  "/specialities/urology/technology-and-facilities/",
  "/specialities/urology/our-clinical-team/",
  "/specialities/nephrology/",
  "/specialities/nephrology/disease-and-treatment/",
  "/specialities/nephrology/diagnostics/",
  "/specialities/nephrology/procedures/",
  "/specialities/nephrology/technology-and-facilities/",
  "/specialities/nephrology/our-clinical-team/",
  "/specialities/gastro-sciences/",
  "/specialities/gastro-sciences/disease-and-treatment/",
  "/specialities/gastro-sciences/diagnostics/",
  "/specialities/gastro-sciences/procedures/",
  "/specialities/gastro-sciences/technology-and-facilities/",
  "/specialities/gastro-sciences/our-clinical-team/",
  "/specialities/oncology/",
  "/specialities/oncology/disease-and-treatment/",
  "/specialities/oncology/diagnostics/",
  "/specialities/oncology/procedures/",
  "/specialities/oncology/technology-and-facilities/",
  "/specialities/oncology/our-clinical-team/",
  "/specialities/orthopaedics/",
  "/specialities/orthopaedics/disease-and-treatment/",
  "/specialities/orthopaedics/diagnostics/",
  "/specialities/orthopaedics/procedures/",
  "/specialities/orthopaedics/technology-and-facilities/",
  "/specialities/orthopaedics/our-clinical-team/",
  "/specialities/internal-medicine/",
  "/specialities/internal-medicine/disease-and-treatment/",
  "/specialities/internal-medicine/diagnostics/",
  "/specialities/internal-medicine/procedures/",
  "/specialities/internal-medicine/technology-and-facilities/",
  "/specialities/internal-medicine/our-clinical-team/",
  "/specialities/mother-child-care/",
  "/specialities/mother-child-care/disease-and-treatment/",
  "/specialities/mother-child-care/diagnostics/",
  "/specialities/mother-child-care/procedures/",
  "/specialities/mother-child-care/technology-and-facilities/",
  "/specialities/mother-child-care/our-clinical-team/",
  "/specialities/anaesthesia-and-pain-management/",
  "/specialities/anaesthesia-and-pain-management/disease-and-treatment/",
  "/specialities/anaesthesia-and-pain-management/diagnostics/",
  "/specialities/anaesthesia-and-pain-management/procedures/",
  "/specialities/anaesthesia-and-pain-management/technology-and-facilities/",
  "/specialities/anaesthesia-and-pain-management/our-clinical-team/",
  "/specialities/dermatology-cosmetic-care/",
  "/specialities/dermatology-cosmetic-care/disease-and-treatment/",
  "/specialities/dermatology-cosmetic-care/diagnostics/",
  "/specialities/dermatology-cosmetic-care/procedures/",
  "/specialities/dermatology-cosmetic-care/technology-and-facilities/",
  "/specialities/dermatology-cosmetic-care/our-clinical-team/",
  "/specialities/eye-ophthalmology/",
  "/specialities/eye-ophthalmology/disease-and-treatment/",
  "/specialities/eye-ophthalmology/diagnostics/",
  "/specialities/eye-ophthalmology/procedures/",
  "/specialities/eye-ophthalmology/technology-and-facilities/",
  "/specialities/eye-ophthalmology/our-clinical-team/",
  "/specialities/dental-and-maxillofacial-care/",
  "/specialities/dental-and-maxillofacial-care/disease-and-treatment/",
  "/specialities/dental-and-maxillofacial-care/diagnostics/",
  "/specialities/dental-and-maxillofacial-care/procedures/",
  "/specialities/dental-and-maxillofacial-care/technology-and-facilities/",
  "/specialities/dental-and-maxillofacial-care/our-clinical-team/",
  "/specialities/endocrinology/",
  "/specialities/endocrinology/disease-and-treatment/",
  "/specialities/endocrinology/diagnostics/",
  "/specialities/endocrinology/procedures/",
  "/specialities/endocrinology/technology-and-facilities/",
  "/specialities/endocrinology/our-clinical-team/",
  "/specialities/transplant-medicine/",
  "/specialities/transplant-medicine/disease-and-treatment/",
  "/specialities/transplant-medicine/diagnostics/",
  "/specialities/transplant-medicine/procedures/",
  "/specialities/transplant-medicine/technology-and-facilities/",
  "/specialities/transplant-medicine/our-clinical-team/",
  "/specialities/pulmonology/",
  "/specialities/pulmonology/disease-and-treatment/",
  "/specialities/pulmonology/diagnostics/",
  "/specialities/pulmonology/procedures/",
  "/specialities/pulmonology/technology-and-facilities/",
  "/specialities/pulmonology/our-clinical-team/",
  "/specialities/robotics-science/",
  "/specialities/robotics-science/disease-and-treatment/",
  "/specialities/robotics-science/diagnostics/",
  "/specialities/robotics-science/procedures/",
  "/specialities/robotics-science/technology-and-facilities/",
  "/specialities/robotics-science/our-clinical-team/",
  "/specialities/ent/",
  "/specialities/ent/disease-and-treatment/",
  "/specialities/ent/diagnostics/",
  "/specialities/ent/procedures/",
  "/specialities/ent/technology-and-facilities/",
  "/specialities/ent/our-clinical-team/",
  "/specialities/rheumatology/",
  "/specialities/rheumatology/disease-and-treatment/",
  "/specialities/rheumatology/diagnostics/",
  "/specialities/rheumatology/procedures/",
  "/specialities/rheumatology/technology-and-facilities/",
  "/specialities/rheumatology/our-clinical-team/",
];

const sitemapEndpoints = {
  static: staticRoutes,
  coe: COERoutes,
  doctors: `${apiUrl}/getAllDoctors`,
  blogs: `${apiUrl}/blogs/getAllBlogs`,
  healthPackages: `${apiUrl}/healthpackages/getAllHealthPackages`,
  secondOpinion: `${apiUrl}/secondopinion/getAllSecondOpinion`,
};

const fetchRoutes = async (key, endpointOrArray) => {
  if (Array.isArray(endpointOrArray)) {
    return endpointOrArray;
  }

  try {
    const response = await axios.get(endpointOrArray);

    switch (key) {
      case "doctors":
        return response.data.map((item) => item.url);
      case "blogs":
      case "healthPackages":
      case "secondOpinion":
        return response.data.Items.map((item) => item.url);
      default:
        return [];
    }
  } catch (err) {
    console.error(`Error fetching ${key}:`, err.message);
    return [];
  }
};

const generateSitemaps = async () => {
  const generatedKeys = [];

  for (const [key, source] of Object.entries(sitemapEndpoints)) {
    const routes = await fetchRoutes(key, source);
    const uniqueRoutes = [...new Set(routes)];

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueRoutes
        .map(
          (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>always</changefreq>
    <priority>1.0</priority>
    <lastmod>${now}</lastmod>
  </url>`
        )
        .join("")}
</urlset>`;

    fs.writeFileSync(path.join(publicDir, `${key}.xml`), sitemapXml);
    generatedKeys.push(key);
    console.log(`✅ Generated ${key}.xml`);
  }

  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${generatedKeys
      .map(
        (key) => `
  <sitemap>
    <loc>${baseUrl}/${key}.xml</loc>
  </sitemap>`
      )
      .join("")}
</sitemapindex>`;

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), indexXml);
  console.log("✅ Generated sitemap.xml (index)");
};

generateSitemaps();
