const translations = {
    pt: {
        'quem_somos': 'QUEM SOMOS',
        'parceiros': 'PARCEIROS',
        'reuniao': 'AGENDAR REUNIÃO',
        'faqs': 'FAQ\'s',
        'tituloPolitica':'Política de Privacidade da Pixel Web',
        'titulo1':'1. Introdução',
        'titulo1Texto':'A Pixel Web respeita a sua privacidade e está comprometida em proteger as suas informações pessoais. Esta Política de Privacidade descreve como recolhemos, utilizamos, armazenamos, divulgamos e protegemos as suas informações quando visita o nosso site, utiliza os nossos serviços ou interage connosco.',
        'titulo2':'2. Informações que Recolhemos',
        'titulo21':'2.1. Informações Pessoais',
        'texto21':'Podemos recolher as seguintes informações pessoais:',
        'nome21':'Nome',
        'email21':'Endereço de e-mail',
        'telefone21':'Número de telefone',
        'informacoes21':'Outras informações que nos forneça voluntariamente ao entrar em contacto connosco ou ao preencher formulários.',
        'titulo22':'2.2. Informações Não Pessoais',
        'texto22':'Recolhemos também informações não pessoais, tais como:',
        'endereco22':'Endereço IP',
        'tipo22':'Tipo de dispositivo e navegador',
        'sistema22':'Sistema operativo',
        'localizacao22':'Localização geográfica',
        'titulo3':'3. Como Utilizamos as Suas Informações',
        'texto3':'A Pixel Web utiliza as suas informações para:',
        'prestar3':'Prestar e gerir os nossos serviços',
        'comunicar3':'Comunicar-se consigo sobre os nossos serviços e promoções',
        'melhorar3':'Melhorar o nosso site e serviços',
        'responder3':'Responder a perguntas e solicitações',
        'cumprir3':'Cumprir obrigações legais',
        'titulo4':'4. Partilha de Informações',
        'texto4':'A Pixel Web não vende, troca ou de outra forma transfere as suas informações pessoais a terceiros, exceto quando:',
        'exigido4':'Exigido por lei ou para proteger os nossos direitos ou propriedade',
        'com4':'Com o seu consentimento explícito',
        'titulo5':'5. Armazenamento de Informações',
        'texto5':'Armazenamos as suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos nesta Política de Privacidade ou conforme exigido pela legislação aplicável. Implementamos medidas de segurança adequadas para proteger as suas informações contra acesso não autorizado, uso ou divulgação.',
        'titulo6':'6. Os Seus Direitos',
        'texto6':'Dependendo da sua localização, pode ter os seguintes direitos em relação às suas informações pessoais:',
        'acesso6':'Direito de acesso: pode solicitar uma cópia das informações que temos sobre si.',
        'correcao6':'Direito de correção: pode solicitar a correção de informações pessoais incorretas ou incompletas.',
        'exclusao6':'Direito de exclusão: pode solicitar que as suas informações sejam excluídas, sujeito a certas exceções.',
        'objecao6':'Direito de objeção: pode opor-se ao uso das suas informações pessoais para determinadas finalidades.',
        'tiutlo7':'7. Links para Outros Sites',
        'texto7':'Não somos responsáveis pelas práticas de privacidade de outros sites. Recomendamos que leia as políticas de privacidade de cada site que visitar.',
        'tiutlo8':'8. Alterações a Esta Política de Privacidade',
        'texto8':'A Pixel Web pode atualizar esta Política de Privacidade ocasionalmente. Notificaremos sobre mudanças significativas através do nosso site ou por e-mail.',
        'titulo9':'9. Contacto',
        'text9':'Se tiver dúvidas sobre esta Política de Privacidade ou sobre as nossas práticas de privacidade, entre em contacto connosco:',
        'politica':'Política de Privacidade'
    },
    en: {
        'quem_somos': 'ABOUT US',
        'parceiros': 'PARTNERS',
        'reuniao': 'SCHEDULE MEETING',
        'faqs': 'FAQ\'s',
        'tituloPolitica':'Pixel Web Privacy Policy',
        'titulo1':'1. Introduction',
        'titulo1Texto':'Pixel Web respects your privacy and is committed to protecting your personal information. This Privacy Policy describes how we collect, use, store, disclose and protect your information when you visit our website, use our services or interact with us.',
        'titulo2':'2. Information We Collect',
        'titulo21':'2.1. Personal Information',
        'texto21':'We may collect the following personal information:',
        'nome21':'Name',
        'email21':'Email address',
        'telefone21':'Phone number',
        'informacoes21':'Other information that you voluntarily provide to us when contacting us or filling in forms.',
        'titulo22':'2.2. Non-Personal Information',
        'texto22':'We also collect non-personal information, such as:',
        'endereco22':'IP Address',
        'tipo22':'Device type and browser',
        'sistema22':'Operating system',
        'localizacao22':'Geographical location',
        'titulo3':'3. How We Use Your Information',
        'texto3':'Pixel Web uses your information to:',
        'prestar3':'Providing and managing our services',
        'comunicar3':'Communicate with you about our services and promotions',
        'melhorar3':'Improve our website and services',
        'responder3':'Respond to questions and requests',
        'cumprir3':'Comply with legal obligations',
        'titulo4':'4. Information Sharing',
        'texto4':'Pixel Web does not sell, trade or otherwise transfer your personal information to third parties except when:',
        'exigido4':'Required by law or to protect our rights or property',
        'com4':'With your explicit consent',
        'titulo5':'5. Information Storage',
        'texto5':'Armazenamos as suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos nesta Política de Privacidade ou conforme exigido pela legislação aplicável. Implementamos medidas de segurança adequadas para proteger as suas informações contra acesso não autorizado, uso ou divulgação.',
        'titulo6':'6. Your Rights',
        'texto6':'Depending on your location, you may have the following rights in relation to your personal information:',
        'acesso6':'Right of access: You can request a copy of the information we hold about you.',
        'correcao6':'Right to correction: you can request the correction of incorrect or incomplete personal information.',
        'exclusao6':'Right to erasure: You may request that your information be deleted, subject to certain exceptions.',
        'objecao6':'Right to object: you can object to the use of your personal information for certain purposes.',
        'tiutlo7':'7. Links to Other Sites',
        'texto7':'We are not responsible for the privacy practices of other websites. We encourage you to read the privacy policies of every website you visit.',
        'tiutlo8':'8. Changes to This Privacy Policy',
        'texto8':'Pixel Web may update this Privacy Policy from time to time. We will notify you of significant changes via our website or by email.',
        'titulo9':'9. Contact',
        'text9':'If you have any questions about this Privacy Policy or our privacy practices, please contact us:',
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
    document.getElementById('tituloPolitica').textContent = translations[lang].tituloPolitica;
    document.getElementById('titulo1').textContent = translations[lang].titulo1;
    document.getElementById('titulo1Texto').textContent = translations[lang].titulo1Texto;
    document.getElementById('titulo2').textContent = translations[lang].titulo2;
    document.getElementById('titulo21').textContent = translations[lang].titulo21;
    document.getElementById('texto21').textContent = translations[lang].texto21;
    document.getElementById('nome21').textContent = translations[lang].nome21;
    document.getElementById('email21').textContent = translations[lang].email21;
    document.getElementById('telefone21').textContent = translations[lang].telefone21;
    document.getElementById('informacoes21').textContent = translations[lang].informacoes21;
    document.getElementById('titulo22').textContent = translations[lang].titulo22;
    document.getElementById('texto22').textContent = translations[lang].texto22;
    document.getElementById('endereco22').textContent = translations[lang].endereco22;
    document.getElementById('tipo22').textContent = translations[lang].tipo22;
    document.getElementById('sistema22').textContent = translations[lang].sistema22;
    document.getElementById('localizacao22').textContent = translations[lang].localizacao22;
    document.getElementById('titulo3').textContent = translations[lang].titulo3;
    document.getElementById('texto3').textContent = translations[lang].texto3;
    document.getElementById('prestar3').textContent = translations[lang].prestar3;
    document.getElementById('comunicar3').textContent = translations[lang].comunicar3;
    document.getElementById('melhorar3').textContent = translations[lang].melhorar3;
    document.getElementById('responder3').textContent = translations[lang].responder3;
    document.getElementById('cumprir3').textContent = translations[lang].cumprir3;
    document.getElementById('titulo4').textContent = translations[lang].titulo4;
    document.getElementById('texto4').textContent = translations[lang].texto4;
    document.getElementById('exigido4').textContent = translations[lang].exigido4;
    document.getElementById('com4').textContent = translations[lang].com4;
    document.getElementById('titulo5').textContent = translations[lang].titulo5;
    document.getElementById('texto5').textContent = translations[lang].texto5;
    document.getElementById('titulo6').textContent = translations[lang].titulo6;
    document.getElementById('texto6').textContent = translations[lang].texto6;
    document.getElementById('acesso6').textContent = translations[lang].acesso6;
    document.getElementById('correcao6').textContent = translations[lang].correcao6;
    document.getElementById('exclusao6').textContent = translations[lang].exclusao6;
    document.getElementById('objecao6').textContent = translations[lang].objecao6;
    document.getElementById('tiutlo7').textContent = translations[lang].tiutlo7;
    document.getElementById('texto7').textContent = translations[lang].texto7;
    document.getElementById('tiutlo8').textContent = translations[lang].tiutlo8;
    document.getElementById('titulo9').textContent = translations[lang].titulo9;
    document.getElementById('text9').textContent = translations[lang].text9;
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
