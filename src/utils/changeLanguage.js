export function changeLanguage(lang) {
    if (typeof window === "undefined") return;

    const host = window.location.hostname;

    // Cleanup Google Translate body styles immediately
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";

    // Also check periodically for Google re-applying styles
    const cleaner = setInterval(() => {
        if (document.body.style.overflow === "hidden" || document.body.style.paddingRight) {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0px";
        }
    }, 50);

    setTimeout(() => clearInterval(cleaner), 2000); // runs for 2 sec

    // Remove old cookies
    document.cookie = `googtrans=;path=/;expires=Thu, 01 Jan 1970`;
    document.cookie = `googtrans=;path=/;domain=${host};expires=Thu, 01 Jan 1970`;

    // Set new cookie
    document.cookie = `googtrans=/en/${lang};path=/;domain=${host}`;

    localStorage.setItem("googtrans", `/en/${lang}`);
    sessionStorage.setItem("googtrans", `/en/${lang}`);

    window.location.reload();
}
