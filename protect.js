// Password protection
(function() {
    const correctPassword = "NdutaSteph";
    const savedPassword = sessionStorage.getItem('scrapbook_access');
    
    if (savedPassword !== correctPassword) {
        const input = prompt("🔒 This scrapbook is private.\nEnter password:");
        
        if (input === correctPassword) {
            sessionStorage.setItem('scrapbook_access', input);
        } else {
            alert("Wrong password!");
            window.location.href = "https://www.google.com";
        }
    }
})();