import DOMPurify from 'dompurify';

const sanitize = (html) => {
    if (typeof window !== 'undefined') {
        return DOMPurify.sanitize(html);
    }
    return html;
};

export default sanitize;
