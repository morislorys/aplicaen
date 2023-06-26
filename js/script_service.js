var overlay = document.getElementsByClassName("overlay")[0];
var description_paragraph = document.querySelector('.description');



description_paragraph.textContent = "A l’ère du numérique, les applications web sont des supports de communication incontournables pour toute entreprise. \n" + 
"C'est pourquoi Aplicaen développe des solutions web  : site vitrine, boutique en ligne, tableau de bord, intranet et plus encore.\n" + 
"Nous concevons des solutions sur-mesures mais prenons également en compte les CMS tels que WordPress ou Shopify. \n" +
"Nous mettons l'accent sur la sécurité de nos solutions. Nous nous assurons également de vous livrer une solution clé en main pour faciliter sa gestion.\n";

var lastestservice = "Application Web";
function setDescription (service) {
    if (lastestservice == service) {
        return;
    } 
    lastestservice = service;
    console.log("click");
    overlay.style.display = "block";
    overlay.style.height = "100%";
    overlay.style.width = "100%";

    setTimeout(() => {
        setDescriptionText(service);
    }, 600)      
    setTimeout(() => {
        overlay.style.height = "0%";
      }, 800);
    
}

function setDescriptionText(service) {
    switch (service) {
        case "Application Web":
            console.log("Application Web---");
            description_paragraph.textContent = "A l’ère du numérique, les applications web sont des supports de communication incontournables pour toute entreprise. \n" + 
            "C'est pourquoi Aplicaen développe des solutions web  : site vitrine, boutique en ligne, tableau de bord, intranet et plus encore.\n" + 
            "Nous concevons des solutions sur-mesures mais prenons également en compte les CMS tels que WordPress ou Shopify. \n" +
            "Nous mettons l'accent sur la sécurité de nos solutions. Nous nous assurons également de vous livrer une solution clé en main pour faciliter sa gestion.\n";
            break;
        case "intelligence artificielle":
            console.log("intelligence artificielle---");
            description_paragraph.textContent = "Les machines intelligentes sont à l’origine des progrès spectaculaires en robotique, commerce électronique, villes intelligentes ou diagnostic médical.\n" + 
            "Nos solutions en intelligence artificielle sont centrées sur les méthodologies et les techniques de l’apprentissage automatique (machine learning), de l’apprentissage profond (deep learning) et de la fouille de données (data mining).";
            break;
        case "Application Mobile":
            console.log("Application Mobile---");
            description_paragraph.textContent = " Des applications mobiles pour tous les besoins : \n";
            break;
        case "Image et son":
            console.log("Image et son---");
            description_paragraph.textContent = "A l’ère du numérique, les applications liées à l’imagerie numérique, au son et à la vidéo sont en forte progression dans de nombreux domaines : sécurité, santé, automobile, jeux vidéo, robotique...\n" + 
            "C’est pourquoi Aplicaen développe des solutions multimédia autour de la synthèse d’image, de la réalité virtuelle et augmentée, du traitement d’image et du son et d’interprétation de leur contenu.";
            break;
        case "Cyber-Sécurité":
            console.log("Cyber-Sécurité---");
            description_paragraph.textContent = "Aplicaen développe des solutions en Cyber-Sécurité pour vous aider à sécuriser vos données en circulation et lutter contre les attaques des pirates informatiques.\n" + 
            "Nous sommes formés aux techniques de pointe en matière de cryptographie, biométrie, lutte contre la fraude, sécurisation des réseaux et des systèmes d'information.\n" +
            "Nos élèves-ingénieurs suivant cette spécialité possèdent la maîtrise des concepts et de l'implémentation des systèmes et transactions sécurisés : commerce électronique, paiement par carte ou mobile, etc.";
            break;
        case "Solution de E-paiement":
            console.log("Solution de E-paiement---");
            description_paragraph.textContent = "Pour vos besoins bancaires, Aplicaen développe des solutions sur-mesures tirant profit des nouvelles technologies du paiement électronique.\n"+ 
            "Nous offrons une spécialisation en architecture et sécurité du e-paiement : carte micro-circuit, smartphone, sans contact, paiement instantané, crypto-monnaies, blockchain, et plus encore.\n"+
            "Nos élèves-ingénieurs suivant cette spécialité possèdent la maîtrise des concepts et de l'implémentation des systèmes monétiques (cartes à microcircuit, NFC, cryptographie...) et des transactions sécurisées (commerce électronique, paiement par carte ou mobile).";
            break;
    }
}