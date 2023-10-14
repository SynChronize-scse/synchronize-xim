timelineBlocks = document.querySelectorAll(".timeline__block");

const options = {
    rootMargin: "-50%",
};

const handleIntersection = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("disabled");
        }
        else {
            if (!entry.target.classList.contains("disabled")) {
                entry.target.classList.add("disabled");
            }
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, options);

timelineBlocks.forEach((block) => {
    observer.observe(block);
});