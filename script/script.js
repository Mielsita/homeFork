const Config = {
    name: "user",
    scale: 1,
    Links: [
        [
            "common",
            [
                ["youtube", "https://www.youtube.com"],
                ["gmail", "https://www.gmail.com"]
            ]
        ],
        [
            "watch",
            [
                ["netflix", "https://www.netflix.com"],
                ["hulu", "https://www.hulu.com"]
            ]
        ],
        [
            "social",
            [
                ["insta", "https://www.instagram.com"],
                ["filler", "https://www.example.com"],
                ["filler", "https://www.example.com"]
            ]
        ],
        [
            "school",
            [
                ["gradescope", "https://www.gradescope.com"],
                ["canvas", "https://www.canvas.stanford.edu"],
                ["drive", "https://www.drive.google.com/drive"],
                ["email", "https://webmail.stanford.edu"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
