/**
 * Maps URL slug keywords (lowercase) to their corresponding DB department keywords (lowercase).
 * Used to bridge the gap between URL-friendly speciality slugs and the ALL-CAPS department
 * field values stored in the getAllDoctors API response.
 *
 * Usage:
 *   import { SPECIALITY_ALIASES } from '@/utils/specialityAliases';
 *   const aliasTerms = SPECIALITY_ALIASES[specKey] || null;
 *   const match = aliasTerms
 *       ? aliasTerms.some(alias => doc.department.toLowerCase().includes(alias))
 *       : doc.department.toLowerCase().includes(specKey);
 */

export const SPECIALITY_ALIASES = {
    'cardiology': ['cardiac sciences', 'cardiology'],
    'cardiac': ['cardiac sciences'],
    'cardiologist': ['cardiac sciences'],
    'heart': ['cardiac sciences'],
    'gastroenterology': ['gastroenterology'],
    'gastro': ['gastroenterology'],
    'neurology': ['neuro sciences', 'neurology'],
    'neuro': ['neuro sciences', 'neurology'],
    'neurosurgery': ['neuro sciences'],
    'orthopaedics': ['orthopaedics', 'orthopedics'],
    'orthopedics': ['orthopaedics', 'orthopedics'],
    'orthopedic': ['orthopaedics', 'orthopedics'],
    'orthopaedic': ['orthopaedics', 'orthopedics'],
    'urology': ['urology'],
    'nephrology': ['nephrology'],
    'kidney': ['nephrology', 'urology'],
    'pulmonology': ['pulmonology'],
    'pulmonologist': ['pulmonology'],
    'lungs': ['pulmonology'],
    'ent': ['ent'],
    'paediatrics': ['paediatrics'],
    'pediatrics': ['paediatrics'],
    'gynaecology': ['gynaecology'],
    'gynecology': ['gynaecology'],
    'obstetrics': ['gynaecology'],
    'oncology': ['oncology'],
    'cancer': ['oncology'],
    'plastic': ['plastic surgery', 'cosmetic', 'dermatology', 'skin'],
    'cosmetic': ['cosmetic', 'plastic surgery', 'dermatology', 'skin'],
    'dermatology': ['dermatology', 'cosmetic', 'skin'],
    'skin': ['skin', 'dermatology', 'cosmetic'],
    'endocrinology': ['endocrinology'],
    'diabetes': ['endocrinology'],
    'rheumatology': ['rheumatology'],
    'radiology': ['radiology'],
    'anaesthesia': ['anaesthesia'],
    'anesthesia': ['anaesthesia'],
    'pain': ['anaesthesia', 'pain'],
    'internal medicine': ['internal medicine'],
    'general medicine': ['internal medicine', 'general medicine'],
    'ophthalmology': ['opthalmology', 'ophthalmology'],
    'opthalmology': ['opthalmology', 'ophthalmology'],
    'eye': ['opthalmology', 'ophthalmology'],
    'dental': ['dental'],
    'dentist': ['dental'],
};

/**
 * Resolves a speciality slug to matching department terms using the alias map.
 * Falls back to the slug itself if no alias is defined.
 *
 * @param {string} specKey - cleaned, lowercase speciality string (e.g. "cardiology")
 * @param {string} deptLower - lowercase department string from the doctor record
 * @returns {boolean}
 */
export function matchesDepartment(specKey, deptLower) {
    const aliasTerms = SPECIALITY_ALIASES[specKey] || null;
    if (aliasTerms) {
        return aliasTerms.some(alias => deptLower.includes(alias));
    }
    // Fallback: direct substring + paed <-> ped spelling variant check
    const term1 = specKey.replace(/paed/g, 'ped');
    const term2 = specKey.replace(/\bped\b/g, 'paed');
    return (
        deptLower.includes(specKey) ||
        deptLower.includes(term1) ||
        deptLower.includes(term2) ||
        specKey.includes(deptLower)
    );
}
