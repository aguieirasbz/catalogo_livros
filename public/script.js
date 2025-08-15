document.addEventListener('DOMContentLoaded', function() {

    const translations = {
        pt: {
            pageTitle: "Catálogo de Livros | As Melhores Recomendações",
            metaDescription: "Explore nosso catálogo com as melhores recomendações de livros de ficção, não-ficção e negócios. Encontre sua próxima leitura e compre na Amazon.",
            logo: "Leitura Essencial",
            navCatalog: "Catálogo",
            navFaq: "FAQ",
            heroTitle: "Explore Mundos, Descubra Histórias.",
            heroSubtitle: "Sua jornada literária começa aqui. Selecionamos os melhores títulos para inspirar, ensinar e entreter.",
            catalogTitle: "Nosso Catálogo",
            author: "por",
            book1Desc: "Um livro transformador que explora a ciência por trás da formação de hábitos e como podemos mudá-los.",
            book2Desc: "Descubra como nossa mentalidade molda nosso sucesso e como cultivar um mindset de crescimento.",
            book3Desc: "Uma fascinante narrativa sobre a jornada da nossa espécie, desde a Idade da Pedra até a era moderna.",
            book4Desc: "Lições atemporais sobre riqueza, ganância e felicidade, mostrando que o sucesso financeiro é menos sobre o que você sabe e mais sobre como você se comporta.",
            ctaButton: "Ver na Amazon",
            faqTitle: "Perguntas Frequentes",
            faqQ1: "Como funciona este site?",
            faqA1: "Nós selecionamos e recomendamos livros de alta qualidade. Ao clicar no botão 'Ver na Amazon', você é redirecionado para a página do produto na Amazon. Se você comprar, recebemos uma pequena comissão, sem custo adicional para você.",
            faqQ2: "O preço na Amazon é diferente se eu comprar por aqui?",
            faqA2: "Não, o preço é exatamente o mesmo. Usar nossos links é uma forma de apoiar nosso trabalho de curadoria de conteúdo, sem que isso lhe custe nada a mais.",
            faqQ3: "As recomendações são confiáveis?",
            faqA3: "Sim. Nossa equipe se dedica a ler e analisar diversos títulos para recomendar apenas aqueles que realmente agregam valor, são bem avaliados e populares entre os leitores.",
            footerDisclaimer: "Como Afiliado Amazon, eu recebo por compras qualificadas. Este site participa do Programa de Associados da Amazon Services LLC, um programa de publicidade de afiliados projetado para fornecer um meio para que os sites ganhem taxas de publicidade anunciando e vinculando à Amazon.",
            footerRights: "Todos os direitos reservados."
        },
        en: {
            pageTitle: "Book Catalog | The Best Recommendations",
            metaDescription: "Explore our catalog with the best recommendations for fiction, non-fiction, and business books. Find your next read and buy on Amazon.",
            logo: "Essential Reading",
            navCatalog: "Catalog",
            navFaq: "FAQ",
            heroTitle: "Explore Worlds, Discover Stories.",
            heroSubtitle: "Your literary journey begins here. We select the best titles to inspire, teach, and entertain.",
            catalogTitle: "Our Catalog",
            author: "by",
            book1Desc: "A transformative book that explores the science behind habit formation and how we can change them.",
            book2Desc: "Discover how our mindset shapes our success and how to cultivate a growth mindset.",
            book3Desc: "A fascinating narrative about our species' journey, from the Stone Age to the modern era.",
            book4Desc: "Timeless lessons on wealth, greed, and happiness, showing that financial success is less about what you know and more about how you behave.",
            ctaButton: "View on Amazon",
            faqTitle: "Frequently Asked Questions",
            faqQ1: "How does this site work?",
            faqA1: "We select and recommend high-quality books. When you click the 'View on Amazon' button, you are redirected to the product page on Amazon. If you buy, we receive a small commission at no additional cost to you.",
            faqQ2: "Is the price on Amazon different if I buy through here?",
            faqA2: "No, the price is exactly the same. Using our links is a way to support our content curation work, without costing you anything extra.",
            faqQ3: "Are the recommendations reliable?",
            faqA3: "Yes. Our team is dedicated to reading and analyzing various titles to recommend only those that truly add value, are well-rated, and popular among readers.",
            footerDisclaimer: "As an Amazon Associate, I earn from qualifying purchases. This site participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.",
            footerRights: "All rights reserved."
        },
        es: {
            pageTitle: "Catálogo de Libros | Las Mejores Recomendaciones",
            metaDescription: "Explore nuestro catálogo con las mejores recomendaciones de libros de ficción, no ficción y negocios. Encuentre su próxima lectura y compre en Amazon.",
            logo: "Lectura Esencial",
            navCatalog: "Catálogo",
            navFaq: "FAQ",
            heroTitle: "Explora Mundos, Descubre Historias.",
            heroSubtitle: "Tu viaje literario comienza aquí. Seleccionamos los mejores títulos para inspirar, enseñar y entretener.",
            catalogTitle: "Nuestro Catálogo",
            author: "por",
            book1Desc: "Un libro transformador que explora la ciencia detrás de la formación de hábitos y cómo podemos cambiarlos.",
            book2Desc: "Descubra cómo nuestra mentalidad moldea nuestro éxito y cómo cultivar una mentalidad de crecimiento.",
            book3Desc: "Una narrativa fascinante sobre el viaje de nuestra especie, desde la Edad de Piedra hasta la era moderna.",
            book4Desc: "Lecciones atemporales sobre riqueza, avaricia y felicidad, que demuestran que el éxito financiero depende menos de lo que sabes y más de cómo te comportas.",
            ctaButton: "Ver en Amazon",
            faqTitle: "Preguntas Frecuentes",
            faqQ1: "¿Cómo funciona este sitio?",
            faqA1: "Seleccionamos y recomendamos libros de alta calidad. Al hacer clic en el botón 'Ver en Amazon', se le redirige a la página del producto en Amazon. Si compra, recibimos una pequeña comisión, sin costo adicional para usted.",
            faqQ2: "¿El precio en Amazon es diferente si compro por aquí?",
            faqA2: "No, el precio es exactamente el mismo. Usar nuestros enlaces es una forma de apoyar nuestro trabajo de curación de contenido, sin que le cueste nada extra.",
            faqQ3: "¿Son confiables las recomendaciones?",
            faqA3: "Sí. Nuestro equipo se dedica a leer y analizar diversos títulos para recomendar solo aquellos que realmente agregan valor, están bien calificados y son populares entre los lectores.",
            footerDisclaimer: "Como Afiliado de Amazon, gano por compras calificadas. Este sitio participa en el Programa de Asociados de Amazon Services LLC, un programa de publicidad de afiliados diseñado para proporcionar un medio para que los sitios ganen tarifas de publicidad mediante la publicidad y el enlace a Amazon.",
            footerRights: "Todos los derechos reservados."
        }
    };

    const langSwitcher = document.getElementById('lang-switcher');

    function changeLanguage(lang) {
        // Atualiza o atributo lang do HTML
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

        // Itera sobre todos os elementos que precisam de tradução
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                 // Trata meta tags de forma especial
                if (element.tagName === 'META') {
                    element.setAttribute('content', translations[lang][key]);
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    langSwitcher.addEventListener('change', (event) => {
        changeLanguage(event.target.value);
    });
    
    // Define o idioma inicial
    changeLanguage('pt');
});