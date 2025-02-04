document.querySelectorAll(".navbar ul li a").forEach(link => {
    link.addEventListener("click", function () {
        let iframe = parent.frames["iframe_a"];
        iframe.style.opacity = "0"; // Fade out effect

        setTimeout(() => {
            iframe.src = this.href;
            iframe.onload = () => {
                iframe.style.opacity = "1"; // Fade in effect
            };
        }, 500); // Smooth transition delay
    });
});
