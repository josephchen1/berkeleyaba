document.addEventListener('DOMContentLoaded', (event) => {
    const cab = [
        { name: "Paul Shin", role: "President", imageUrl: "assets/img/s24/paul.jpg", linkedinUrl: "https://www.linkedin.com/in/jwonshin/" },
        { name: "Hilary Wong", role: "External Vice President", imageUrl: "assets/img/f24/hilary.jpg", linkedinUrl: "https://www.linkedin.com/in/hilarywongg/" },
        { name: "Hana McNierney", role: "Internal Vice President", imageUrl: "assets/img/f24/hana.jpg", linkedinUrl: "https://www.linkedin.com/in/hana-mcnierney/" },
        { name: "Daniel Mathison", role: "Internal Vice President", imageUrl: "assets/img/f24/daniel.jpg", linkedinUrl: "https://www.linkedin.com/in/danielmathison/" },
        { name: "Megan Ho", role: "Vice President of Finance", imageUrl: "assets/img/f23/megan.jpg", linkedinUrl: "https://www.linkedin.com/in/meganhho/" },
        { name: "Maddie Hsu", role: "Vice President of Operations", imageUrl: "assets/img/f24/maddie.jpg", linkedinUrl: "https://www.linkedin.com/in/maddie-hsu/" },
        { name: "Ellie Hwang", role: "Vice President of Projects", imageUrl: "assets/img/f24/ellie.jpg", linkedinUrl: "https://www.linkedin.com/in/elliehwang/" },
        { name: "Diane Tang", role: "Vice President of Marketing", imageUrl: "assets/img/f24/diane.jpg", linkedinUrl: "https://www.linkedin.com/in/dianest/" },
        { name: "William Pham", role: "Business Development Project Manager", imageUrl: "assets/img/f24/william.jpg", linkedinUrl: "www.google.com" },
        { name: "Rachel Chen", role: "Business Development Project Manager", imageUrl: "assets/img/f24/rachel.jpg", linkedinUrl: "www.google.com" },
        { name: "Tashi Gotlieb", role: "Finance Project Manager", imageUrl: "assets/img/f24/tashi.jpg", linkedinUrl: "www.google.com" },
        { name: "Tuleen Fayez", role: "Finance Project Manager", imageUrl: "assets/img/f24/tuleen.jpg", linkedinUrl: "https://www.linkedin.com/in/tuleen-fayez-4a404822a/" },
        { name: "Ryan Cho", role: "Marketing Project Manager", imageUrl: "assets/img/f24/ryan.jpg", linkedinUrl: "www.google.com" },
        { name: "Elaina Lee", role: "Marketing Project Manager", imageUrl: "assets/img/f24/elaina.jpg", linkedinUrl: "https://www.linkedin.com/in/elaina-lee-5596ab251/" },
        { name: "Kalea Fong", role: "NPO Project Manager", imageUrl: "assets/img/f24/kalea.jpg", linkedinUrl: "https://www.linkedin.com/in/kalea-fong-194aa1232/" },
        { name: "Erin Tak", role: "NPO Project Manager", imageUrl: "assets/img/f24/erin.jpg", linkedinUrl: "https://www.linkedin.com/in/erin-tak-4a260a263/" },
        { name: "David Lim", role: "Strategy Project Manager", imageUrl: "assets/img/f24/david.jpg", linkedinUrl: "https://www.linkedin.com/in/taehoon-lim1/" },
        { name: "Anh-Thu Bui", role: "Strategy Project Manager", imageUrl: "assets/img/f24/anhthu.jpg", linkedinUrl: "https://www.linkedin.com/in/anhthubui2/" }
    ];

    const sc = [
        { name: "Lia", role: "Business Development Senior Consultant", imageUrl: "assets/img/f24/lia.jpg", linkedinUrl: "www.google.com" },
        { name: "Andy Le", role: "Business Development Senior Consultant", imageUrl: "assets/img/f24/andy.jpg", linkedinUrl: "https://www.linkedin.com/in/andy-le-ucb/" },
        { name: "Adil", role: "Finance Senior Consultant", imageUrl: "assets/img/f24/adil.jpg", linkedinUrl: "www.google.com" },
        { name: "Kylie", role: "Finance Senior Consultant", imageUrl: "assets/img/f24/kylie.jpg", linkedinUrl: "www.google.com" },
        { name: "Minju", role: "Marketing Senior Consultant", imageUrl: "assets/img/f24/minju.jpg", linkedinUrl: "www.google.com" },
        { name: "Nathaniel", role: "Marketing Senior Consultant", imageUrl: "assets/img/f24/nathaniel.jpg", linkedinUrl: "www.google.com" },
        { name: "Chloe", role: "NPO Senior Consultant", imageUrl: "assets/img/f24/chloe.jpg", linkedinUrl: "www.google.com" },
        { name: "Vishaan", role: "NPO Senior Consultant", imageUrl: "assets/img/f24/vishaan.jpg", linkedinUrl: "www.google.com" },
        { name: "Nia", role: "Strategy Senior Consultant", imageUrl: "assets/img/f24/nia.jpg", linkedinUrl: "www.google.com" },
        { name: "Gina", role: "Strategy Senior Consultant", imageUrl: "assets/img/f24/gina.jpg", linkedinUrl: "www.google.com" }
    ];

    const oldppl = [
        // { name: "Reena Katta", role: "Account Manager", imageUrl: "assets/img/f23/reena.jpg", linkedinUrl: "https://www.linkedin.com/in/reena-katta/" },
        // { name: "Amar Sehgal", role: "Account Manager", imageUrl: "assets/img/f24/amar.jpg", linkedinUrl: "https://www.linkedin.com/in/amar-sehgal/" }
    ];

    const enforceAspectRatio = () => {
        const w100Images = document.querySelectorAll('img.w-100');
        w100Images.forEach(img => {
            img.style.objectFit = 'cover'; // Ensures the image covers the area without distortion
            img.style.width = 'auto'; // Width will be auto to maintain full width of the container
            img.style.height = '400px'; // Set height based on the width of the container and a 2:3 aspect ratio
        });
    };


    const teamBlock = document.getElementById('teamBlock');

    const saBlock = document.getElementById('saBlock');

    if (teamBlock) {
        cab.forEach(member => {
            const memberHtml = `
                <div class="col-lg-3 col-sm-6 g-mb-30">
                    <figure class="u-block-hover">
                        <img class="w-100" src="${member.imageUrl}" alt="${member.name}">
                        <figcaption class="u-block-hover__additional--partially-slide-up g-mx-15">
                            <div class="text-center g-bg-white g-pb-20">
                                <div class="u-block-hover__visible g-pt-20 g-pb-15 g-y-20">
                                    <h4 class="h5 g-color-black g-mb-5">${member.name}</h4>
                                    <em class="d-block g-font-style-normal g-font-size-11 text-uppercase g-color-primary">${member.role}</em>
                                </div>
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item">
                                        <a href="${member.linkedinUrl}" class="u-icon-v1 u-icon-size--sm g-color-gray-light-v1 g-color-twitter--hover g-bg-transparent">
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            `;
            teamBlock.innerHTML += memberHtml;
        });
    };

    if (saBlock) {
        sc.forEach(member => {
            const memberHtml = `
                <div class="col-lg-3 col-sm-6 g-mb-30">
                    <figure class="u-block-hover">
                        <img class="w-100" src="${member.imageUrl}" alt="${member.name}">
                        <figcaption class="u-block-hover__additional--partially-slide-up g-mx-15">
                            <div class="text-center g-bg-white g-pb-20">
                                <div class="u-block-hover__visible g-pt-20 g-pb-15 g-y-20">
                                    <h4 class="h5 g-color-black g-mb-5">${member.name}</h4>
                                    <em class="d-block g-font-style-normal g-font-size-11 text-uppercase g-color-primary">${member.role}</em>
                                </div>
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item">
                                        <a href="${member.linkedinUrl}" class="u-icon-v1 u-icon-size--sm g-color-gray-light-v1 g-color-twitter--hover g-bg-transparent">
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            `;
            saBlock.innerHTML += memberHtml;
        });
    };

    if (amBlock) {
        oldppl.forEach(member => {
            const memberHtml = `
                <div class="col-lg-3 col-sm-6 g-mb-30">
                    <figure class="u-block-hover">
                        <img class="w-100" src="${member.imageUrl}" alt="${member.name}">
                        <figcaption class="u-block-hover__additional--partially-slide-up g-mx-15">
                            <div class="text-center g-bg-white g-pb-20">
                                <div class="u-block-hover__visible g-pt-20 g-pb-15 g-y-20">
                                    <h4 class="h5 g-color-black g-mb-5">${member.name}</h4>
                                    <em class="d-block g-font-style-normal g-font-size-11 text-uppercase g-color-primary">${member.role}</em>
                                </div>
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item">
                                        <a href="${member.linkedinUrl}" class="u-icon-v1 u-icon-size--sm g-color-gray-light-v1 g-color-twitter--hover g-bg-transparent">
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            `;
            amBlock.innerHTML += memberHtml;
        });
    };

    enforceAspectRatio();
});
