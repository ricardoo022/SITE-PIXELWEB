const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        // Alterna a classe "active" quando o usuário clica na pergunta
        faq.classList.toggle('active');
    });
});


const ptBtn = document.getElementById('pt-btn');
const enBtn = document.getElementById('en-btn');

const textosPt = {
    'quem-somos-link': 'QUEM SOMOS',
    'parceiros-link': 'PARCEIROS',
    'reuniao-link': 'AGENDAR REUNIÃO',
    'faqs-link': 'FAQ\'s',
    'slogan':'Levamos a sua marca aopróximo nível digital',
    'quem-somos-titulo': 'QUEM SOMOS',
    'historia-titulo': 'História da Empresa',
    'historia-texto': 'A Pixel Web nasceu do sonho de dois jovens apaixonados por tecnologia e inovação. Enquanto estudavam Engenharia Informática,João Canais e Ricardo Domingues perceberam que o mundo digital estava em constante evolução e que muitas empresas precisavam de ajuda para acompanhar esse ritmo. Combinando o conhecimento adquirido nos estudos com a vontade de criar algo próprio, decidiram lançar a Pixel Web.',
    'solucoes-titulo':'Soluções personalizadas e Funcionais',
    'solucoes-texto':'Desenvolvemos um site à sua medida, funcional e visualmente atraente.',
    'suporte-titulo':'Suporte Técnico e Manutenção',
    'suporte-texto':'Oferecemos um suporte pós-lançamento ajudando com problemas técnicos, atualizações e correções. Garantimos que o site esteja atualizado.',
    'acesibilidade-titulo':'Acessibilidade',
    'acesibilidade-texto':'Desenvolvemos um site otimizado para os motores de busca para melhorar a visibilidade e o tráfego organico.',
    'parceiros':'PARCEIROS',
    'agendar-titulo':'AGENDAR REUNIÃO',
    'texto':' Pronto para fazer o seu negócio crescer?',
    'texto2':'Preencha o formulário e deixe-nos ajudá-lo a destacar-se no universo digital! Na nossa agência, criamos estratégias à medida para aumentar a sua visibilidade online, atrair clientes qualificados e impulsionar as suas vendas. Comece hoje o seu caminho para o sucesso digital!',
    'texto-strong':'Fale connosco e dê o próximo passo rumo ao sucesso online!',
    'nome_form_placeholder_name':'Nome',
    'telefone_form_placeholder_name':'Telefone',
    'contact_form_placeholder_subject':'Assunto',
    'contact_form_placeholder_message':'Descreva-nos o seu projeto',
    'faq1':'Quais serviços a Pixel Web oferece?',
    'faq1-resposta':'Oferecemos uma gama completa de serviços, incluindo: Criação e desenvolvimento de websites; Design responsivo (compatível com dispositivos móveis); Otimização para motores de busca (SEO); Manutenção e atualizações de websites; Hospedagem e suporte técnico.',
    'faq2':'Quanto tempo demora a desenvolver um website?',
    'faq2-resposta':'O tempo de desenvolvimento depende da complexidade do projeto e dos requisitos específicos. Um website simples pode demorar cerca de 2 a 4 semanas, enquanto projetos mais complexos podem levar 1 a 2 meses. A nossa equipa trabalha de perto com cada cliente para definir prazos realistas e garantir a entrega dentro do prazo acordado.',
    'faq3':'O website será optimizado para dispositivos móveis?',
    'faq3-resposta':'Sim, todos os websites que desenvolvemos são 100% responsivos e adaptados para funcionar em todos os dispositivos, desde computadores a smartphones e tablets. Garantimos que o seu website oferece uma excelente experiência de utilização em qualquer plataforma',
    'faq4':'Como posso acompanhar o progresso do meu projeto?',
    'faq4-resposta':'Durante todo o desenvolvimento, mantemos você atualizado através de reuniões regulares e compartilhamento de previews. Dessa forma, você pode acompanhar o progresso e dar seu feedback a qualquer momento.',
    'politica':'Política de Privacidade'
};

// Textos em Inglês
const textosEn = {
    'quem-somos-link': 'ABOUT US',
    'parceiros-link': 'PARTNERS',
    'reuniao-link': 'SCHEDULE MEETING',
    'faqs-link': 'FAQ\'s',
    'slogan':'We take your brand to the next digital level',
    'quem-somos-titulo': 'ABOUT US',
    'historia-titulo': 'Company History',
    'historia-texto': 'A Pixel Web nasceu do sonho de dois jovens apaixonados por tecnologia e inovação. Enquanto estudavam Engenharia Informática,João Canais e Ricardo Domingues perceberam que o mundo digital estava em constante evolução e que muitas empresas precisavam de ajuda para acompanhar esse ritmo. Combinando o conhecimento adquirido nos estudos com a vontade de criar algo próprio, decidiram lançar a Pixel Web.',
    'solucoes-titulo':'Personalized and functional solutions',
    'solucoes-texto':'We developed a site to its measurement, functional and visually attractive.',
    'suporte-titulo':'Technical Support and Maintenance',
    'suporte-texto':'We offer post-release support helping with technical problems, updates and corrections. We guarantee that the site is up to date.',
    'acesibilidade-titulo':'Accessibility',
    'acesibilidade-texto':'We have developed a website optimized for search engines to improve visibility and organic traffic.',
    'parceiros':'PARTNERS',
    'agendar-titulo':'SCHEDULE MEETING',
    'texto':'Ready to grow your business?',
    'texto2':'Fill out the form and let us help you stand out in the digital world! At our agency, we create tailor-made strategies to increase your online visibility, attract qualified clients and boost your sales. Start your journey to digital success today!',
    'texto-strong':'Talk to us and take the next step towards online success!',
    'nome_form_placeholder_name':'Name',
    'telefone_form_placeholder_name':'Phone Number',
    'contact_form_placeholder_subject':'Subject',
    'contact_form_placeholder_message':'Describe your project to us',
    'faq1':'What services does Pixel Web offer?',
    'faq1-resposta':'We offer a full range of services, including: Website creation and development; Responsive (mobile-friendly) design; Search engine optimization (SEO); Website maintenance and updates; Hosting and technical support.',
    'faq2':'How long does it take to develop a website?',
    'faq2-resposta':'Development time depends on the complexity of the project and the specific requirements. A simple website can take around 2-4 weeks, while more complex projects can take 1-2 months. Our team works closely with each client to set realistic deadlines and ensure delivery within the agreed timeframe.',
    'faq3':'Will the website be mobile-friendly?',
    'faq3-resposta':'Yes, all the websites we develop are 100% responsive and adapted to work on all devices, from desktops to smartphones and tablets. We ensure that your website offers a great user experience on any platform.',
    'faq4':'How can I track the progress of my project?',
    'faq4-resposta':'Throughout the development, we keep you updated through regular meetings and sharing previews. This way, you can track progress and give feedback at any time.',
    'politica':'Privacy Policy'

};

// Função para mudar para Português
function mudarParaPt() {
    for (const id in textosPt) {
        const elemento = document.getElementById(id);
        if (elemento) {
            // Para textos com HTML
            // Para placeholders
            if (id === 'nome_form_placeholder_name' || id === 'telefone_form_placeholder_name' || 
                     id === 'contact_form_placeholder_subject' || id === 'contact_form_placeholder_message') {
                elemento.placeholder = textosPt[id]; // Atualiza o placeholder
            } 
            // Para textos simples
            else {
                elemento.innerText = textosPt[id];  // Usa innerText para texto simples
            }
        } else {
            console.warn(`Elemento com ID ${id} não encontrado.`);
        }
    }
}

// Função para mudar para Inglês
function mudarParaEn() {
    for (const id in textosEn) {
        const elemento = document.getElementById(id);
        if (elemento) {
            // Para textos com HTML
            // Para placeholders
            if (id === 'nome_form_placeholder_name' || id === 'telefone_form_placeholder_name' || 
                     id === 'contact_form_placeholder_subject' || id === 'contact_form_placeholder_message') {
                elemento.placeholder = textosEn[id]; // Atualiza o placeholder
            } 
            // Para textos simples
            else {
                elemento.innerText = textosEn[id];  // Usa innerText para texto simples
            }
        } else {
            console.warn(`Elemento com ID ${id} não encontrado.`);
        }
    }
}

// Adicionando os eventos de clique
document.getElementById('ptBtn').addEventListener('click', mudarParaPt);
document.getElementById('enBtn').addEventListener('click', mudarParaEn);