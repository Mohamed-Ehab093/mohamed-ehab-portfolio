(() => {
  'use strict';

  const translations = {
    en: {
      pageTitle: 'Mohamed Ehab | Full-Stack Web Developer',
      skipLink: 'Skip to content',
      brandRole: 'Web Developer',
      navAbout: 'About',
      navWork: 'Work',
      navSkills: 'Skills',
      navExperience: 'Experience',
      navContact: 'Contact',
      heroEyebrow: 'Front-end craft. WordPress depth. Backend thinking.',
      heroHello: 'I build websites that',
      heroAccent: 'feel polished and work properly.',
      heroLead: "I'm Mohamed Ehab Saber, a full-stack web developer focused on responsive interfaces, custom WordPress solutions, REST API integrations, and maintainable web experiences.",
      viewProjects: 'View projects',
      contactMe: 'Contact me',
      portraitLabel: 'Current focus',
      portraitFocus: 'Production-ready web experiences',
      proof01Label: 'Build',
      proof01Value: 'Responsive front-end systems',
      proof02Label: 'Connect',
      proof02Value: 'WordPress, REST APIs & data',
      proof03Label: 'Improve',
      proof03Value: 'UX, performance & maintainability',
      aboutKicker: 'About',
      aboutTitle: 'From code exercises to real client systems.',
      aboutP1: 'My earlier work started with C#, ASP.NET, MySQL, JavaScript, and programming competitions. Since then, my practical work has expanded into client-facing WordPress implementations, responsive front-end fixes, REST integrations, access-control workflows, and website redevelopment.',
      aboutP2: 'I care about the part users see and the system underneath it. That means clean interfaces, sensible responsive behavior, and technical decisions that are easier to maintain after launch.',
      workKicker: 'Selected work',
      workTitle: 'Projects where interface and implementation meet.',
      workIntro: 'A selection of client, WordPress, and application work. The first featured projects below include real portfolio screenshots from work I handled, alongside concise notes about my role.',
      projectTypeBayan: 'Front-end / WordPress',
      bayanTitle: 'Al-Bayan Website',
      bayanDesc: "Front-end and WordPress implementation work focused on bilingual behavior, correct language direction, responsive sections, and targeted UI fixes while preserving the site's established visual identity.",
      bayanP1: 'Arabic / English layout behavior and lang/dir handling',
      bayanP2: 'Responsive hero, cards, counters, and WhatsApp UI corrections',
      bayanP3: 'Implementation refinement without unnecessary redesign',
      projectTypeAlfa: 'Website redevelopment / UX',
      alfaTitle: 'ALFA Lifts',
      alfaDesc: 'Website redevelopment and front-end UX work for an elevator company, organizing service and product journeys around clearer navigation, responsive presentation, branch information, and quote-request intent.',
      alfaP1: 'Service and product information architecture',
      alfaP2: 'Responsive presentation for desktop and mobile',
      alfaP3: 'UX direction for branches and quotation requests',
      projectTypeAzh: 'WordPress application',
      azhTitle: 'AZH Cases Portal',
      azhDesc: 'A custom WordPress application concept and implementation spanning interface workflows, REST endpoints, database-backed case management, authentication, and role-based access for legal operations.',
      azhP1: 'Case, client, document, notification, and messaging workflows',
      azhP2: 'Authentication plus role and permission logic',
      azhP3: 'Frontend-to-backend integration through WordPress and REST',
      projectTypeConnector: 'WordPress integration',
      connectorTitle: 'Saqqr WordPress MCP Connector',
      connectorDesc: 'A custom WordPress connector project designed around REST API access and a cleaner integration path for managing WordPress operations programmatically in a staging-first workflow.',
      connectorP1: 'REST API connection and WordPress integration planning',
      connectorP2: 'Staging-first testing before production deployment',
      connectorP3: 'Structured for future management and automation workflows',
      projectTypeMini: 'JavaScript experiments',
      jsTitle: 'JavaScript UI Lab',
      jsDesc: 'A collection of focused front-end exercises including counters, random-number/dice interfaces, text tools, and interactive DOM tasks.',
      projectTypeAcademic: 'Earlier application project',
      bookTitle: 'Book Reading Website',
      bookDesc: 'An earlier web application project focused on backend development, login functionality, and database design for managing and reading books.',
      skillsKicker: 'Capabilities',
      skillsTitle: 'A practical stack, grouped by what it solves.',
      skillsIntro: 'No arbitrary skill bars. These are technologies and capabilities supported by my academic background and practical project work.',
      frontendTitle: 'Frontend',
      frontendDesc: 'Responsive interfaces, bilingual layouts, DOM interactions, and production-focused UI refinement.',
      wordpressTitle: 'WordPress & Integration',
      wordpressDesc: 'Custom workflows, REST API connections, role-aware interfaces, and website implementation inside WordPress.',
      backendTitle: 'Backend & Data',
      backendDesc: 'Application logic, database-backed features, authentication concepts, and data-oriented problem solving.',
      toolsTitle: 'Tools & Problem Solving',
      toolsDesc: 'Version-controlled development, structured debugging, technical planning, and algorithmic thinking.',
      experienceKicker: 'Journey',
      experienceTitle: 'Built through study, problem solving, and real project work.',
      expClientTitle: 'Client & WordPress Project Work',
      expClientDesc: 'Worked across responsive frontend fixes, bilingual sites, WordPress application workflows, REST integrations, website redevelopment, and staging-based delivery.',
      expEducationTitle: 'Computer Science — MET Academy',
      expEducationDesc: 'Coursework included data structures and algorithms, web application development, database management, and object-oriented programming.',
      expIcpTitle: 'ICPC — Honorable Mention',
      expIcpDesc: 'Programming competition experience that strengthened algorithmic thinking, data analysis, and code optimization skills.',
      servicesKicker: 'Services',
      servicesTitle: 'What I can help build and improve.',
      servicesIntro: 'I work best on focused web projects where the interface, implementation, and practical business goal need to stay aligned.',
      service1Title: 'Website Design & Development',
      service1Desc: 'Responsive websites built around clear structure, usability, and maintainable implementation.',
      service2Title: 'Frontend Development',
      service2Desc: 'HTML, CSS, and JavaScript interfaces with responsive behavior and bilingual support where needed.',
      service3Title: 'WordPress Solutions',
      service3Desc: 'Custom WordPress implementation, frontend fixes, API-connected workflows, and feature integration.',
      service4Title: 'Optimization & Maintenance',
      service4Desc: 'Practical improvements to existing sites covering UX, responsiveness, structure, and technical reliability.',
      contactKicker: 'Contact',
      contactTitle: 'Have a web project that needs a developer who sees both sides?',
      contactLead: 'Send me the goal, the current state, and what is not working. I can help turn that into a clearer technical plan and a cleaner web experience.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      footerCopy: 'Built with HTML, CSS & JavaScript.',
      backTop: 'Back to top ↑',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      switchLanguage: 'Switch to Arabic',
      photoAlt: 'Portrait of Mohamed Ehab at night by the waterfront'
    },
    ar: {
      pageTitle: 'محمد إيهاب | مطور ويب Full-Stack',
      skipLink: 'انتقل إلى المحتوى',
      brandRole: 'مطور ويب',
      navAbout: 'نبذة عني',
      navWork: 'المشاريع',
      navSkills: 'المهارات',
      navExperience: 'الخبرة',
      navContact: 'تواصل معي',
      heroEyebrow: 'واجهات متقنة. خبرة WordPress. وفهم للـ Backend.',
      heroHello: 'أبني مواقع',
      heroAccent: 'تبدو احترافية وتعمل كما يجب.',
      heroLead: 'أنا محمد إيهاب صابر، مطور ويب Full-Stack أركز على الواجهات المتجاوبة، وحلول WordPress المخصصة، وربط REST API، وبناء تجارب ويب واضحة وسهلة الصيانة.',
      viewProjects: 'شاهد المشاريع',
      contactMe: 'تواصل معي',
      portraitLabel: 'تركيزي الحالي',
      portraitFocus: 'تجارب ويب جاهزة للاستخدام الفعلي',
      proof01Label: 'بناء',
      proof01Value: 'واجهات متجاوبة وعملية',
      proof02Label: 'ربط',
      proof02Value: 'WordPress وREST API والبيانات',
      proof03Label: 'تحسين',
      proof03Value: 'تجربة المستخدم والأداء وسهولة الصيانة',
      aboutKicker: 'نبذة عني',
      aboutTitle: 'من تمارين البرمجة إلى أنظمة حقيقية للعملاء.',
      aboutP1: 'بدأت رحلتي مع C# وASP.NET وMySQL وJavaScript ومسابقات البرمجة، ثم توسع عملي العملي إلى تنفيذ مواقع WordPress للعملاء، وتحسين الواجهات المتجاوبة، وربط REST API، وبناء أنظمة صلاحيات، وتطوير وإعادة هيكلة مواقع حقيقية.',
      aboutP2: 'أهتم بما يراه المستخدم وبالنظام الذي يعمل خلف الواجهة في الوقت نفسه، لذلك أركز على واجهات نظيفة، واستجابة منطقية لكل الشاشات، وقرارات تقنية يسهل صيانتها بعد الإطلاق.',
      workKicker: 'مشاريع مختارة',
      workTitle: 'مشاريع تجمع بين الواجهة والتنفيذ التقني.',
      workIntro: 'مجموعة مختارة من أعمال العملاء وWordPress وتطبيقات الويب. أول المشاريع المعروضة هنا تتضمن لقطات حقيقية من الأعمال التي عملت عليها، مع توضيح مختصر لطبيعة دوري في كل مشروع.',
      projectTypeBayan: 'Front-end / WordPress',
      bayanTitle: 'موقع البيان',
      bayanDesc: 'عمل على الواجهة وWordPress ركز على دعم اللغتين، واتجاه الصفحة الصحيح، والأقسام المتجاوبة، وإصلاحات UI محددة مع الحفاظ على الهوية البصرية الأصلية للموقع.',
      bayanP1: 'دعم العربية والإنجليزية وضبط lang/dir',
      bayanP2: 'إصلاحات Responsive للـHero والبطاقات والعدادات وواجهة WhatsApp',
      bayanP3: 'تحسين التنفيذ دون تغيير تصميم الموقع بلا داعٍ',
      projectTypeAlfa: 'إعادة تطوير موقع / UX',
      alfaTitle: 'ALFA Lifts',
      alfaDesc: 'عمل على إعادة تطوير الموقع وتجربة المستخدم لشركة مصاعد، مع تنظيم مسارات الخدمات والمنتجات، وتحسين العرض المتجاوب، ومعلومات الفروع، ومسار طلب عرض السعر.',
      alfaP1: 'تنظيم هيكل معلومات الخدمات والمنتجات',
      alfaP2: 'عرض متجاوب لسطح المكتب والموبايل',
      alfaP3: 'تصميم تجربة أوضح للفروع وطلبات عروض الأسعار',
      projectTypeAzh: 'تطبيق WordPress',
      azhTitle: 'بوابة AZH للقضايا',
      azhDesc: 'تطبيق WordPress مخصص يجمع بين تدفقات الواجهة، ونقاط REST API، وإدارة القضايا المعتمدة على قاعدة البيانات، وتسجيل الدخول، والصلاحيات المبنية على الأدوار للعمليات القانونية.',
      azhP1: 'إدارة القضايا والعملاء والمستندات والإشعارات والرسائل',
      azhP2: 'تسجيل الدخول ومنطق الأدوار والصلاحيات',
      azhP3: 'ربط الواجهة بالـBackend من خلال WordPress وREST',
      projectTypeConnector: 'تكامل WordPress',
      connectorTitle: 'Saqqr WordPress MCP Connector',
      connectorDesc: 'مشروع Connector مخصص لـWordPress يعتمد على REST API ويوفر مسار تكامل أوضح لإدارة عمليات WordPress برمجيًا مع الاعتماد على بيئة Staging للاختبار أولًا.',
      connectorP1: 'تخطيط وربط REST API مع WordPress',
      connectorP2: 'اختبار على Staging قبل أي نشر على Production',
      connectorP3: 'هيكلة قابلة للتوسع لإدارة الموقع والأتمتة لاحقًا',
      projectTypeMini: 'تجارب JavaScript',
      jsTitle: 'JavaScript UI Lab',
      jsDesc: 'مجموعة تمارين Front-end عملية تشمل عدادات، وواجهات أرقام ونرد عشوائية، وأدوات نصية، وتمارين تفاعلية على DOM.',
      projectTypeAcademic: 'مشروع تطبيق سابق',
      bookTitle: 'موقع قراءة الكتب',
      bookDesc: 'مشروع تطبيق ويب سابق ركز على الـBackend ونظام تسجيل الدخول وتصميم قاعدة بيانات لإدارة الكتب وقراءتها.',
      skillsKicker: 'المهارات',
      skillsTitle: 'تقنيات عملية مرتبة حسب المشكلة التي تحلها.',
      skillsIntro: 'بدون نسب تقييم عشوائية للمهارات. هذه تقنيات وقدرات مدعومة بالدراسة وبالمشاريع العملية التي عملت عليها.',
      frontendTitle: 'Frontend',
      frontendDesc: 'واجهات متجاوبة، دعم لغتين، تفاعلات DOM، وتحسين UI بما يناسب الاستخدام الفعلي.',
      wordpressTitle: 'WordPress والتكامل',
      wordpressDesc: 'تدفقات مخصصة، وربط REST API، وواجهات تراعي الأدوار، وتنفيذ مواقع وتطبيقات داخل WordPress.',
      backendTitle: 'Backend والبيانات',
      backendDesc: 'منطق التطبيقات، والميزات المعتمدة على قواعد البيانات، ومفاهيم تسجيل الدخول، وحل المشكلات المرتبط بالبيانات.',
      toolsTitle: 'الأدوات وحل المشكلات',
      toolsDesc: 'العمل باستخدام Version Control، وتصحيح المشكلات بشكل منظم، والتخطيط التقني، والتفكير الخوارزمي.',
      experienceKicker: 'المسار',
      experienceTitle: 'خبرة تشكلت من الدراسة وحل المشكلات والعمل على مشاريع فعلية.',
      expClientTitle: 'مشاريع عملاء وWordPress',
      expClientDesc: 'العمل على إصلاحات Frontend متجاوبة، ومواقع ثنائية اللغة، وتدفقات تطبيقات WordPress، وربط REST API، وإعادة تطوير مواقع، وتسليمات تعتمد على Staging قبل النشر.',
      expEducationTitle: 'علوم الحاسب — MET Academy',
      expEducationDesc: 'شملت الدراسة هياكل البيانات والخوارزميات، وتطوير تطبيقات الويب، وإدارة قواعد البيانات، والبرمجة كائنية التوجه.',
      expIcpTitle: 'ICPC — Honorable Mention',
      expIcpDesc: 'خبرة في مسابقات البرمجة ساعدتني على تطوير التفكير الخوارزمي وتحليل البيانات وتحسين الكود.',
      servicesKicker: 'الخدمات',
      servicesTitle: 'ما الذي يمكنني بناؤه أو تحسينه؟',
      servicesIntro: 'أفضل العمل على مشاريع ويب واضحة الهدف تحتاج إلى توافق حقيقي بين الواجهة والتنفيذ التقني وهدف النشاط.',
      service1Title: 'تصميم وتطوير المواقع',
      service1Desc: 'مواقع متجاوبة مبنية على هيكل واضح، وتجربة استخدام جيدة، وتنفيذ قابل للصيانة.',
      service2Title: 'تطوير Frontend',
      service2Desc: 'واجهات HTML وCSS وJavaScript متجاوبة مع دعم اللغتين عند الحاجة.',
      service3Title: 'حلول WordPress',
      service3Desc: 'تنفيذ WordPress مخصص، وإصلاحات Frontend، وربط API، وإضافة وظائف جديدة.',
      service4Title: 'التحسين والصيانة',
      service4Desc: 'تحسين مواقع قائمة من ناحية UX والاستجابة والهيكل والاعتمادية التقنية.',
      contactKicker: 'تواصل معي',
      contactTitle: 'عندك مشروع ويب يحتاج مطورًا يفهم الواجهة وما وراءها؟',
      contactLead: 'أرسل لي الهدف، والوضع الحالي، والمشكلة التي تواجهها. أساعدك على تحويلها إلى خطة تقنية أوضح وتجربة ويب أنظف.',
      emailLabel: 'البريد',
      phoneLabel: 'الهاتف',
      footerCopy: 'تم بناؤه باستخدام HTML وCSS وJavaScript.',
      backTop: 'العودة للأعلى ↑',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      switchLanguage: 'التغيير إلى الإنجليزية',
      photoAlt: 'صورة محمد إيهاب ليلًا أمام الواجهة المائية'
    }
  };

  const root = document.documentElement;
  const langToggle = document.getElementById('langToggle');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const yearNode = document.getElementById('year');
  const portrait = document.querySelector('.portrait-frame img');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav a[href^="#"]');
  const mobileLinks = document.querySelectorAll('.mobile-menu a[href^="#"]');
  const validLanguages = ['en', 'ar'];

  const getInitialLanguage = () => {
    try {
      const stored = localStorage.getItem('portfolio-language');
      return validLanguages.includes(stored) ? stored : 'en';
    } catch {
      return 'en';
    }
  };

  const closeMenu = () => {
    if (!mobileMenu || !menuToggle) return;
    mobileMenu.hidden = true;
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    const lang = root.lang === 'ar' ? 'ar' : 'en';
    menuToggle.setAttribute('aria-label', translations[lang].openMenu);
  };

  const applyLanguage = (lang) => {
    const safeLang = validLanguages.includes(lang) ? lang : 'en';
    const copy = translations[safeLang];

    root.lang = safeLang;
    root.dir = safeLang === 'ar' ? 'rtl' : 'ltr';
    document.title = copy.pageTitle;

    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(copy, key)) {
        node.textContent = copy[key];
      }
    });

    if (portrait) portrait.alt = copy.photoAlt;

    if (langToggle) {
      const current = langToggle.querySelector('.lang-current');
      const next = langToggle.querySelector('.lang-next');
      if (current) current.textContent = safeLang === 'en' ? 'EN' : 'AR';
      if (next) next.textContent = safeLang === 'en' ? 'AR' : 'EN';
      langToggle.setAttribute('aria-label', copy.switchLanguage);
    }

    if (menuToggle) {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-label', isOpen ? copy.closeMenu : copy.openMenu);
    }

    try {
      localStorage.setItem('portfolio-language', safeLang);
    } catch {
      // Local storage is optional; language switching still works without it.
    }
  };

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const nextLang = root.lang === 'ar' ? 'en' : 'ar';
      applyLanguage(nextLang);
      closeMenu();
    });
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const opening = mobileMenu.hidden;
      mobileMenu.hidden = !opening;
      menuToggle.classList.toggle('is-open', opening);
      menuToggle.setAttribute('aria-expanded', String(opening));
      const lang = root.lang === 'ar' ? 'ar' : 'en';
      menuToggle.setAttribute('aria-label', opening ? translations[lang].closeMenu : translations[lang].openMenu);
    });
  }

  mobileLinks.forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  const revealNodes = [...document.querySelectorAll('.reveal')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealNodes.forEach((node) => node.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = Number(entry.target.dataset.delay || 0);
        entry.target.style.transitionDelay = `${Math.min(delay, 240)}ms`;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

    revealNodes.forEach((node) => revealObserver.observe(node));
  }

  const sections = ['about', 'work', 'skills', 'experience', 'contact']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      const targetHash = `#${visible.target.id}`;
      desktopNavLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === targetHash);
      });
    }, { threshold: [0.18, 0.35, 0.55], rootMargin: '-25% 0px -55% 0px' });

    sections.forEach((section) => navObserver.observe(section));
  }

  applyLanguage(getInitialLanguage());
})();
