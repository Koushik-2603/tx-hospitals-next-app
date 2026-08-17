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
    'cardiologist': ['cardiac sciences', 'cardiology'],
    'heart': ['cardiac sciences'],
    'gastroenterology': ['gastroenterology'],
    'gastro': ['gastroenterology'],
    'gastroenterologist': ['gastroenterology'],
    'neurology': ['neuro sciences', 'neurology'],
    'neuro': ['neuro sciences', 'neurology'],
    'neurologist': ['neuro sciences', 'neurology'],
    'neurosurgery': ['neuro sciences'],
    'neurosurgeon': ['neuro sciences'],
    'orthopaedics': ['orthopaedics', 'orthopedics'],
    'orthopedics': ['orthopaedics', 'orthopedics'],
    'orthopedic': ['orthopaedics', 'orthopedics'],
    'orthopaedic': ['orthopaedics', 'orthopedics'],
    'urology': ['urology'],
    'urologist': ['urology'],
    'nephrology': ['nephrology'],
    'nephrologist': ['nephrology'],
    'kidney': ['nephrology', 'urology'],
    'pulmonology': ['pulmonology'],
    'pulmonologist': ['pulmonology'],
    'lungs': ['pulmonology'],
    'ent': ['ent'],
    'paediatrics': ['paediatrics'],
    'pediatrics': ['paediatrics'],
    'pediatrician': ['paediatrics'],
    'paediatrician': ['paediatrics'],
    'gynaecology': ['gynaecology'],
    'gynecology': ['gynaecology'],
    'gynecologist': ['gynaecology'],
    'gynaecologist': ['gynaecology'],
    'obstetrics': ['gynaecology'],
    'oncology': ['oncology'],
    'oncologist': ['oncology'],
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
 * Helper to check if text contains term as a whole word (specifically for short codes like 'ent')
 */
function containsWholeWord(text, term) {
    if (term === 'ent') {
        const regex = new RegExp('\\bent\\b', 'i');
        return regex.test(text);
    }
    return text.includes(term);
}

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
        return aliasTerms.some(alias => containsWholeWord(deptLower, alias));
    }
    // Fallback: direct substring + paed <-> ped spelling variant check
    const term1 = specKey.replace(/paed/g, 'ped');
    const term2 = specKey.replace(/\bped\b/g, 'paed');
    return (
        containsWholeWord(deptLower, specKey) ||
        containsWholeWord(deptLower, term1) ||
        containsWholeWord(deptLower, term2)
    );
}
