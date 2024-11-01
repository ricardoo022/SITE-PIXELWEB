const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        // Alterna a classe "active" quando o usuário clica na pergunta
        faq.classList.toggle('active');
    });
});


const translations = {
    pt: {
        'quem_somos': 'QUEM SOMOS',
        'parceiros': 'PARCEIROS',
        'reuniao': 'AGENDAR REUNIÃO',
        'faqs': 'FAQ\'s',
        'slogan':'Levamos a sua marca ao <br> próximo nível digital',
        'quem_somos_titulo': 'QUEM SOMOS',
        'historia_titulo': 'História da Empresa',
        'historia_texto': 'A Pixel Web nasceu do sonho de dois jovens apaixonados por tecnologia e inovação. Enquanto estudavam Engenharia Informática, João Canais e Ricardo Domingues perceberam que o mundo digital estava em constante evolução e que muitas empresas precisavam de ajuda para acompanhar esse ritmo. Combinando o conhecimento adquirido nos estudos com a vontade de criar algo próprio, decidiram lançar a Pixel Web.',
        'solucoesTitle':'Soluções personalizadas e Funcionais',
        'solucoes_texto':'Desenvolvemos um site à sua medida, funcional e visualmente atraente.',
        'suporte_titulo':'Suporte Técnico e Manutenção',
        'suporte_texto':'Oferecemos um suporte pós-lançamento ajudando com problemas técnicos, atualizações e correções. Garantimos que o site esteja atualizado.',
        'acesibilidade_titulo':'Acessibilidade',
        'acesibilidade_texto':'Desenvolvemos um site otimizado para os motores de busca para melhorar a visibilidade e o tráfego organico.',
        'parceiros_titulo':'PARCEIROS',
        'agendar_titulo':'AGENDAR REUNIÃO',
        'texto':' Pronto para fazer o seu negócio crescer?<br>',
        'texto2':'Preencha o formulário e deixe-nos ajudá-lo a destacar-se no universo digital! Na nossa agência, criamos estratégias à medida para aumentar a sua visibilidade online, atrair clientes qualificados e impulsionar as suas vendas. Comece hoje o seu caminho para o sucesso digital!<br>',
        'texto_strong':'Fale connosco e dê o próximo passo rumo ao sucesso online!',
        'nome_form_placeholder_name':'Nome',
        'telefone_form_placeholder_name':'Telefone',
        'contact_form_placeholder_subject':'Assunto',
        'contact_form_placeholder_message':'Descreva-nos o seu projeto',
        'button_submit':'ENVIAR',
        'faq1':'Quais serviços a Pixel Web oferece?',
        'faq1_resposta':'Oferecemos uma gama completa de serviços, incluindo:',
        'faq1_resposta2':'Criação e desenvolvimento de websites;Design flexível;Optimização para motores de busca;Manutenção e atualizações de websites;Hospedagem e suporte técnico.',
        'faq2':'Quanto tempo demora a desenvolver um website?',
        'faq2_resposta':'O tempo de desenvolvimento depende da complexidade do projeto e dos requisitos específicos. Um website simples pode demorar cerca de 2 a 4 semanas, enquanto projetos mais complexos podem levar 1 a 2 meses. A nossa equipa trabalha de perto com cada cliente para definir prazos realistas e garantir a entrega dentro do prazo acordado.',
        'faq3':'O website será optimizado para dispositivos móveis?',
        'faq3_resposta':'Sim, todos os websites que desenvolvemos são 100% responsivos e adaptados para funcionar em todos os dispositivos, desde computadores a smartphones e tablets. Garantimos que o seu website oferece uma excelente experiência de utilização em qualquer plataforma',
        'faq4':'Como posso acompanhar o progresso do meu projeto?',
        'faq4_resposta':'Durante todo o desenvolvimento, mantemos você atualizado através de reuniões regulares e compartilhamento de previews. Dessa forma, você pode acompanhar o progresso e dar seu feedback a qualquer momento.',
        'politica':'Política de Privacidade'
    },
    en: {
        'quem_somos': 'ABOUT US',
        'parceiros': 'PARTNERS',
        'reuniao': 'SCHEDULE MEETING',
        'faqs': 'FAQ\'s',
        'slogan':'We take your brand to <br> the next digital level',
        'quem_somos_titulo': 'ABOUT US',
        'historia_titulo': 'Company History',
        'historia_texto': 'Pixel Web was born from the dream of two young people passionate about technology and innovation. While studying Computer Engineering, João Canals and Ricardo Domingues realized that the digital world was constantly evolving and that many companies needed help to keep up with this pace. Combining the knowledge acquired in their studies with the desire to create something of their own, they decided to launch Pixel Web.',
        'solucoesTitle"':'Personalized and functional solutions',
        'solucoes_texto':'We developed a site to its measurement, functional and visually attractive.',
        'suporte_titulo':'Technical Support and Maintenance',
        'suporte_texto':'We offer post-release support helping with technical problems, updates and corrections. We guarantee that the site is up to date.',
        'acesibilidade_titulo':'Accessibility',
        'acesibilidade_texto':'We have developed a website optimized for search engines to improve visibility and organic traffic.',
        'parceiros_titulo':'PARTNERS',
        'agendar_titulo':'SCHEDULE MEETING',
        'texto':'Ready to grow your business?<br>',
        'texto2':'Fill out the form and let us help you stand out in the digital world! At our agency, we create tailor-made strategies to increase your online visibility, attract qualified clients and boost your sales. Start your journey to digital success today!<br>',
        'texto_strong':'Talk to us and take the next step towards online success!',
        'nome_form_placeholder_name':'Name',
        'telefone_form_placeholder_name':'Phone Number',
        'contact_form_placeholder_subject':'Subject',
        'contact_form_placeholder_message':'Describe your project to us',
        'button_submit':'SUBMIT',
        'faq1':'What services does Pixel Web offer?',
        'faq1_resposta':'We offer a full range of services, including: Website creation and development; Responsive (mobile-friendly) design; Search engine optimization (SEO); Website maintenance and updates; Hosting and technical support.',
        'faq1_resposta2':'Website creation and development;Flexible design;Search engine optimization;Website maintenance and updates;Hosting and technical support.',
        'faq2':'How long does it take to develop a website?',
        'faq2_resposta':'Development time depends on the complexity of the project and the specific requirements. A simple website can take around 2-4 weeks, while more complex projects can take 1-2 months. Our team works closely with each client to set realistic deadlines and ensure delivery within the agreed timeframe.',
        'faq3':'Will the website be mobile-friendly?',
        'faq3_resposta':'Yes, all the websites we develop are 100% responsive and adapted to work on all devices, from desktops to smartphones and tablets. We ensure that your website offers a great user experience on any platform.',
        'faq4':'How can I track the progress of my project?',
        'faq4_resposta':'Throughout the development, we keep you updated through regular meetings and sharing previews. This way, you can track progress and give feedback at any time.',
        'politica':'Privacy Policy'
    }   
};

// Function to change language
function setLanguage(lang) {
    console.log(`Setting language to: ${lang}`);
    document.getElementById('quem_somos').textContent = translations[lang].quem_somos;
    document.getElementById('parceiros').textContent = translations[lang].parceiros;
    document.getElementById('reuniao').textContent = translations[lang].reuniao;
    document.getElementById('faqs').textContent = translations[lang].faqs;
    document.getElementById('slogan').innerHTML = translations[lang].slogan;
    document.getElementById('quem_somos_titulo').textContent = translations[lang].quem_somos_titulo;
    document.getElementById('historia_titulo').textContent = translations[lang].historia_titulo;
    document.getElementById('historia_texto').textContent = translations[lang].historia_texto;
    document.getElementById('solucoesTitle').textContent = translations[lang].solucoesTitle;
    document.getElementById('solucoes_texto').textContent = translations[lang].solucoes_texto;
    document.getElementById('suporte_titulo').textContent = translations[lang].suporte_titulo;
    document.getElementById('suporte_texto').textContent = translations[lang].suporte_texto ;
    document.getElementById('acesibilidade_titulo').textContent = translations[lang].acesibilidade_titulo;
    document.getElementById('acesibilidade_texto').textContent = translations[lang].acesibilidade_texto;
    document.getElementById('parceiros_titulo').textContent = translations[lang].parceiros_titulo;
    document.getElementById('agendar_titulo').textContent = translations[lang].agendar_titulo;
    document.getElementById('acesibilidade_texto').textContent = translations[lang].acesibilidade_texto;
    document.getElementById('texto').innerHTML = translations[lang].texto;
    document.getElementById('texto2').innerHTML = translations[lang].texto2;
    document.getElementById('texto_strong').textContent = translations[lang].texto_strong;
    document.getElementById('nome_form_placeholder_name').placeholder = translations[lang].nome_form_placeholder_name;
    document.getElementById('telefone_form_placeholder_name').placeholder = translations[lang].telefone_form_placeholder_name;
    document.getElementById('contact_form_placeholder_subject').placeholder = translations[lang].contact_form_placeholder_subject;
    document.getElementById('contact_form_placeholder_message').placeholder = translations[lang].contact_form_placeholder_message;
    document.getElementById('button_submit').textContent = translations[lang].button_submit;
    document.getElementById('faq1').textContent = translations[lang].faq1;
    document.getElementById('faq1_resposta').textContent = translations[lang].faq1_resposta;
    document.getElementById('faq1_resposta2').textContent = translations[lang].faq1_resposta2;
    document.getElementById('faq2').textContent = translations[lang].faq2;
    document.getElementById('faq2_resposta').textContent = translations[lang].faq2_resposta;
    document.getElementById('faq3').textContent = translations[lang].faq3;
    document.getElementById('faq3_resposta').textContent = translations[lang].faq3_resposta;
    document.getElementById('faq4').textContent = translations[lang].faq4;
    document.getElementById('faq4_resposta').textContent = translations[lang].faq4_resposta;
    document.getElementById('politica').textContent = translations[lang].politica;

  
}

// On window load, set the initial language
window.onload = function() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'pt';  // Default to 'pt' if not set
    console.log(`Loaded language: ${savedLanguage}`);
    setLanguage(savedLanguage);
};

// Change language function
function changeLanguage(language) {
    if (!translations[language]) {
        console.error(`Language ${language} not found!`);
        return; // Exit the function if the language is not valid
    }

    // Save the language selection in localStorage
    localStorage.setItem('selectedLanguage', language);
    console.log(`Language changed to: ${language}`);

    // Update the page language immediately
    setLanguage(language);
}
