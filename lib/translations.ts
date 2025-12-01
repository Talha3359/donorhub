export const LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'pt', label: 'Português' },
    { code: 'it', label: 'Italiano' },
    { code: 'nl', label: 'Nederlands' },
    { code: 'ru', label: 'Русский' },
    { code: 'pl', label: 'Polski' },
    { code: 'tr', label: 'Türkçe' },
    { code: 'ar', label: 'العربية' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'bn', label: 'বাংলা' },
    { code: 'ur', label: 'اردو' },
    { code: 'id', label: 'Bahasa Indonesia' },
    { code: 'vi', label: 'Tiếng Việt' },
    { code: 'th', label: 'ไทย' },
    { code: 'zh', label: '简体中文' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
] as const;

// Only main hero/heading content on key pages is translated to keep things light.
// Keys: hero_title, hero_subtitle, pricing_title, pricing_subtitle, donate_title, donate_subtitle

export const translations: Record<string, Record<string, string>> = {
    en: {
        hero_title: 'Raise more donations. Retain more donors. All in one place.',
        hero_subtitle:
            'Our all-in-one donation software powers online fundraising and donor relationship management with an AI-powered CRM.',
        pricing_title: 'Simple, Transparent Pricing',
        pricing_subtitle: 'Start free and scale as you grow. No hidden fees.',
        donate_title: 'Support Our Mission',
        donate_subtitle:
            'Your donation helps us continue our work and make a difference in the community. Every contribution, big or small, makes an impact.',
    },
    es: {
        hero_title: 'Aumenta tus donaciones. Fideliza a tus donantes. Todo en un solo lugar.',
        hero_subtitle:
            'Nuestro software de donaciones todo en uno impulsa la recaudación en línea y la gestión de donantes con un CRM impulsado por IA.',
        pricing_title: 'Precios simples y transparentes',
        pricing_subtitle: 'Empieza gratis y escala a medida que creces. Sin tarifas ocultas.',
        donate_title: 'Apoya nuestra misión',
        donate_subtitle:
            'Tu donación nos ayuda a continuar nuestro trabajo y marcar la diferencia en la comunidad. Cada aporte, grande o pequeño, genera impacto.',
    },
    fr: {
        hero_title: 'Augmentez vos dons. Fidélisez vos donateurs. Tout au même endroit.',
        hero_subtitle:
            'Notre logiciel de don tout-en-un alimente la collecte de fonds en ligne et la gestion des donateurs grâce à un CRM alimenté par l’IA.',
        pricing_title: 'Tarification simple et transparente',
        pricing_subtitle: 'Commencez gratuitement et évoluez en fonction de votre croissance. Aucun frais caché.',
        donate_title: 'Soutenez notre mission',
        donate_subtitle:
            'Votre don nous aide à poursuivre notre travail et à faire la différence dans la communauté. Chaque contribution, grande ou petite, compte.',
    },
    de: {
        hero_title: 'Erhöhen Sie Spenden. Binden Sie Spender. Alles an einem Ort.',
        hero_subtitle:
            'Unsere All-in-One-Spendensoftware unterstützt Online-Fundraising und Spenderverwaltung mit einem KI-gestützten CRM.',
        pricing_title: 'Einfache, transparente Preise',
        pricing_subtitle: 'Starten Sie kostenlos und wachsen Sie mit. Keine versteckten Gebühren.',
        donate_title: 'Unterstützen Sie unsere Mission',
        donate_subtitle:
            'Ihre Spende hilft uns, unsere Arbeit fortzusetzen und einen Unterschied in der Gemeinschaft zu machen. Jeder Beitrag zählt.',
    },
    pt: {
        hero_title: 'Aumente as doações. Fidelize seus doadores. Tudo em um só lugar.',
        hero_subtitle:
            'Nossa plataforma completa de doações impulsiona a captação online e o relacionamento com doadores com um CRM com IA.',
        pricing_title: 'Preços simples e transparentes',
        pricing_subtitle: 'Comece grátis e cresça no seu ritmo. Sem taxas ocultas.',
        donate_title: 'Apoie nossa missão',
        donate_subtitle:
            'Sua doação nos ajuda a continuar nosso trabalho e a fazer a diferença na comunidade. Toda contribuição, grande ou pequena, importa.',
    },
    it: {
        hero_title: 'Aumenta le donazioni. Fidelizza i donatori. Tutto in un unico posto.',
        hero_subtitle:
            'Il nostro software di donazione tutto-in-uno supporta il fundraising online e la gestione dei donatori con un CRM basato sull’IA.',
        pricing_title: 'Prezzi semplici e trasparenti',
        pricing_subtitle: 'Inizia gratis e scala con la crescita. Nessun costo nascosto.',
        donate_title: 'Sostieni la nostra missione',
        donate_subtitle:
            'La tua donazione ci aiuta a continuare il nostro lavoro e a fare la differenza nella comunità. Ogni contributo conta.',
    },
    nl: {
        hero_title: 'Verhoog donaties. Behoud donateurs. Alles op één plek.',
        hero_subtitle:
            'Onze alles-in-één donatiesoftware ondersteunt online fondsenwerving en donateurbeheer met een AI-aangedreven CRM.',
        pricing_title: 'Eenvoudige, transparante prijzen',
        pricing_subtitle: 'Begin gratis en schaal mee met je groei. Geen verborgen kosten.',
        donate_title: 'Steun onze missie',
        donate_subtitle:
            'Je donatie helpt ons ons werk voort te zetten en een verschil te maken in de gemeenschap. Elke bijdrage telt.',
    },
    ru: {
        hero_title: 'Увеличьте пожертвования. Удерживайте жертвователей. Всё в одном месте.',
        hero_subtitle:
            'Наш комплексный сервис для пожертвований поддерживает онлайн‑фандрайзинг и работу с донорами с помощью CRM на базе ИИ.',
        pricing_title: 'Простые и прозрачные тарифы',
        pricing_subtitle: 'Начните бесплатно и масштабируйтесь по мере роста. Никаких скрытых комиссий.',
        donate_title: 'Поддержите нашу миссию',
        donate_subtitle:
            'Ваше пожертвование помогает нам продолжать нашу работу и менять жизнь людей к лучшему. Важен каждый вклад.',
    },
    pl: {
        hero_title: 'Zwiększ darowizny. Zatrzymaj darczyńców. Wszystko w jednym miejscu.',
        hero_subtitle:
            'Nasze kompleksowe oprogramowanie do darowizn wspiera zbiórki online i zarządzanie darczyńcami dzięki CRM opartemu na AI.',
        pricing_title: 'Prosty i przejrzysty cennik',
        pricing_subtitle: 'Zacznij za darmo i rozwijaj się w swoim tempie. Bez ukrytych opłat.',
        donate_title: 'Wesprzyj naszą misję',
        donate_subtitle:
            'Twoja darowizna pomaga nam kontynuować pracę i zmieniać społeczność na lepsze. Każda wpłata ma znaczenie.',
    },
    tr: {
        hero_title: 'Bağışları artırın. Bağışçıları elde tutun. Hepsi tek bir yerde.',
        hero_subtitle:
            'Tümleşik bağış yazılımımız, çevrim içi bağış toplamayı ve bağışçı ilişkilerini yapay zekâ destekli CRM ile güçlendirir.',
        pricing_title: 'Basit ve şeffaf fiyatlandırma',
        pricing_subtitle: 'Ücretsiz başlayın, büyüdükçe ölçeklenin. Gizli ücret yok.',
        donate_title: 'Misyonumuza destek olun',
        donate_subtitle:
            'Bağışınız, çalışmalarımızı sürdürmemize ve toplulukta fark oluşturmamıza yardımcı olur. Büyük ya da küçük, her katkı değerlidir.',
    },
    ar: {
        hero_title: 'زِد التبرعات واحتفظ بالمتبرعين في مكان واحد.',
        hero_subtitle:
            'يُسهِم برنامجنا المتكامل للتبرعات في جمع التبرعات عبر الإنترنت وإدارة علاقات المتبرعين من خلال نظام CRM مدعوم بالذكاء الاصطناعي.',
        pricing_title: 'أسعار بسيطة وشفافة',
        pricing_subtitle: 'ابدأ مجانًا وتوسّع مع نموك. لا توجد رسوم خفية.',
        donate_title: 'ادعم رسالتنا',
        donate_subtitle:
            'تبرعك يساعدنا على مواصلة عملنا وإحداث فرق في المجتمع. كل مساهمة، كبيرة كانت أم صغيرة، تصنع أثرًا.',
    },
    hi: {
        hero_title: 'और अधिक दान जुटाएँ, दाताओं को जोड़े रखें, सब कुछ एक ही जगह.',
        hero_subtitle:
            'हमारा ऑल‑इन‑वन डोनेशन सॉफ़्टवेयर ऑनलाइन फंडरेज़िंग और दाताओं के प्रबंधन को एआई‑समर्थित CRM के साथ शक्ति देता है.',
        pricing_title: 'सरल और पारदर्शी मूल्य निर्धारण',
        pricing_subtitle: 'मुफ़्त में शुरू करें और बढ़ते जाएँ. कोई छुपे हुए शुल्क नहीं.',
        donate_title: 'हमारे मिशन का समर्थन करें',
        donate_subtitle:
            'आपका दान हमें अपना कार्य जारी रखने और समुदाय में बदलाव लाने में मदद करता है. हर छोटा‑बड़ा योगदान महत्त्वपूर्ण है.',
    },
    bn: {
        hero_title: 'আরও অনুদান সংগ্রহ করুন, দাতাদের ধরে রাখুন, সব এক জায়গায়.',
        hero_subtitle:
            'আমাদের সর্ব‑ইন‑ওয়ান অনুদান সফটওয়্যার অনলাইন ফান্ডরেইজিং ও দাতা ব্যবস্থাপনাকে এআই‑চালিত CRM দিয়ে শক্তিশালী করে.',
        pricing_title: 'সহজ ও স্বচ্ছ মূল্য পরিকল্পনা',
        pricing_subtitle: 'ফ্রি তে শুরু করুন এবং প্রয়োজন অনুযায়ী বাড়ান. কোনো গোপন চার্জ নেই.',
        donate_title: 'আমাদের মিশনকে সমর্থন করুন',
        donate_subtitle:
            'আপনার অনুদান আমাদের কাজ চালিয়ে যেতে এবং সমাজে পরিবর্তন আনতে সহায়তা করে. ছোট বড় প্রতিটি অবদানই গুরুত্বপূর্ণ.',
    },
    ur: {
        hero_title: 'زیادہ عطیات حاصل کریں، عطیہ دہندگان کو برقرار رکھیں، سب ایک ہی جگہ پر.',
        hero_subtitle:
            'ہماری آل‑اِن‑ون ڈونیشن سافٹ ویئر آن لائن فنڈ ریزنگ اور عطیہ دہندگان کے تعلقات کو اے آئی سے چلنے والے CRM کے ساتھ مضبوط بناتی ہے.',
        pricing_title: 'سادہ اور شفاف قیمتیں',
        pricing_subtitle: 'مفت آغاز کریں اور بڑھتے ہوئے اپنے پیکیج کو وسعت دیں۔ کوئی پوشیدہ فیس نہیں.',
        donate_title: 'ہمارے مشن کی معاونت کریں',
        donate_subtitle:
            'آپ کا عطیہ ہمیں اپنا کام جاری رکھنے اور برادری میں مثبت تبدیلی لانے میں مدد دیتا ہے۔ ہر چھوٹا بڑا تعاون قیمتی ہے.',
    },
    id: {
        hero_title: 'Tingkatkan donasi. Pertahankan para donatur. Semua di satu tempat.',
        hero_subtitle:
            'Perangkat lunak donasi all‑in‑one kami mendukung penggalangan dana online dan manajemen relasi donatur dengan CRM bertenaga AI.',
        pricing_title: 'Harga sederhana dan transparan',
        pricing_subtitle: 'Mulai gratis dan berkembang seiring organisasi Anda bertumbuh. Tanpa biaya tersembunyi.',
        donate_title: 'Dukung misi kami',
        donate_subtitle:
            'Donasi Anda membantu kami melanjutkan pekerjaan dan membawa dampak bagi komunitas. Setiap kontribusi sangat berarti.',
    },
    vi: {
        hero_title: 'Tăng số tiền quyên góp, giữ chân nhà hảo tâm – tất cả trong một nền tảng.',
        hero_subtitle:
            'Phần mềm gây quỹ tất‑cả‑trong‑một của chúng tôi hỗ trợ quyên góp trực tuyến và quản lý nhà tài trợ với CRM tích hợp AI.',
        pricing_title: 'Giá cả đơn giản, minh bạch',
        pricing_subtitle: 'Bắt đầu miễn phí và mở rộng khi bạn phát triển. Không có phí ẩn.',
        donate_title: 'Hỗ trợ sứ mệnh của chúng tôi',
        donate_subtitle:
            'Khoản đóng góp của bạn giúp chúng tôi tiếp tục công việc và tạo tác động tích cực cho cộng đồng. Mọi khoản đóng góp đều quý giá.',
    },
    th: {
        hero_title: 'เพิ่มยอดบริจาค ดูแลผู้บริจาคของคุณ ทุกอย่างจบในที่เดียว.',
        hero_subtitle:
            'ซอฟต์แวร์ระดมทุนแบบครบวงจรของเราช่วยบริหารการบริจาคออนไลน์และความสัมพันธ์กับผู้บริจาคด้วย CRM ที่ขับเคลื่อนด้วย AI.',
        pricing_title: 'ราคาเรียบง่าย โปร่งใส',
        pricing_subtitle: 'เริ่มต้นได้ฟรีและขยายได้เมื่อองค์กรเติบโต ไม่มีค่าธรรมเนียมแอบแฝง.',
        donate_title: 'ร่วมสนับสนุนภารกิจของเรา',
        donate_subtitle:
            'การบริจาคของคุณช่วยให้เราสานต่องานและสร้างความเปลี่ยนแปลงให้กับชุมชน การสนับสนุนทุกจำนวนมีคุณค่า.',
    },
    zh: {
        hero_title: '提高募款，留住捐赠者，一切尽在同一平台。',
        hero_subtitle:
            '我们的全方位捐赠平台，结合 AI 驱动的 CRM，帮助您进行线上募款和捐赠者关系管理。',
        pricing_title: '简单透明的定价',
        pricing_subtitle: '免费起步，随机构发展灵活升级，没有任何隐藏费用。',
        donate_title: '支持我们的使命',
        donate_subtitle:
            '您的捐赠帮助我们持续开展工作，为社区带来改变。每一份心意都弥足珍贵。',
    },
    ja: {
        hero_title: '寄付を増やし、支援者をつなぎとめる。すべてを一つのプラットフォームで。',
        hero_subtitle:
            'オールインワンの寄付管理ソフトが、AI 搭載 CRM でオンライン募金とドナー管理をサポートします。',
        pricing_title: 'シンプルで分かりやすい料金プラン',
        pricing_subtitle: 'まずは無料で始めて、成長に合わせて拡張できます。隠れた手数料はありません。',
        donate_title: '私たちの活動を応援してください',
        donate_subtitle:
            '皆さまのご支援が、地域社会のための活動を続ける力になります。大きな寄付も小さな寄付も、すべてが貴重です。',
    },
    ko: {
        hero_title: '더 많은 후원을 모으고, 후원자를 지키세요. 모든 것을 한곳에서.',
        hero_subtitle:
            '올인원 기부 소프트웨어가 AI 기반 CRM과 함께 온라인 모금과 후원자 관리를 지원합니다.',
        pricing_title: '단순하고 투명한 요금제',
        pricing_subtitle: '무료로 시작하여 단체의 성장에 맞게 확장하세요. 숨겨진 수수료는 없습니다.',
        donate_title: '우리의 사명을 후원해 주세요',
        donate_subtitle:
            '여러분의 후원은 우리가 사역을 이어가고 지역 사회에 변화를 일으키는 데 큰 힘이 됩니다. 크고 작은 모든 후원이 소중합니다.',
    },
};

export const translate = (language: string, key: string): string => {
    const langPack = translations[language] || translations.en;
    return langPack[key] || translations.en[key] || '';
};
