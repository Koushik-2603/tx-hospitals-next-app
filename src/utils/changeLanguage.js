// export function changeLanguage(lang) {
//     if (typeof window === "undefined") return;

//     const host = window.location.hostname;

//     // Cleanup Google Translate body styles immediately
//     document.body.style.overflow = "auto";
//     document.body.style.paddingRight = "0px";

//     // Also check periodically for Google re-applying styles
//     const cleaner = setInterval(() => {
//         if (document.body.style.overflow === "hidden" || document.body.style.paddingRight) {
//             document.body.style.overflow = "auto";
//             document.body.style.paddingRight = "0px";
//         }
//     }, 50);

//     setTimeout(() => clearInterval(cleaner), 2000); // runs for 2 sec

//     // Remove old cookies
//     document.cookie = `googtrans=;path=/;expires=Thu, 01 Jan 1970`;
//     document.cookie = `googtrans=;path=/;domain=${host};expires=Thu, 01 Jan 1970`;

//     // Set new cookie
//     document.cookie = `googtrans=/en/${lang};path=/;domain=${host}`;

//     localStorage.setItem("googtrans", `/en/${lang}`);
//     sessionStorage.setItem("googtrans", `/en/${lang}`);

//     window.location.reload();
// }
export function changeLanguage(lang) {
    if (!lang) return;
    const targetLang = lang || "en";

    document.cookie = `googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    document.cookie = `googtrans=;path=/;domain=${window.location.hostname};expires=Thu, 01 Jan 1970 00:00:00 GMT`;

    document.cookie = `googtrans=/en/${targetLang};path=/;domain=${window.location.hostname}`;

    localStorage.setItem("googtrans", `/en/${targetLang}`);
    sessionStorage.setItem("googtrans", `/en/${targetLang}`);
    console.log("Current googtrans cookie: ", document.cookie);
    // Force reload Google Translate iframe
    const iframe = document.querySelector("iframe.goog-te-menu-frame");
    if (iframe) {
        iframe.contentWindow.location.reload();
    }

    // Hard refresh for stubborn languages
    setTimeout(() => {
        window.location.reload();
    }, 100);
}
