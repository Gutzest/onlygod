// Language data
const translations = {
    en: {
        'brand': 'onlygod',
        'nav-home': 'Home',
        'nav-gear': 'Gear',
        'nav-strains': 'Strain Menu',
        'nav-museum': 'Museum',
        'nav-contact': 'Contact',
        'lang-toggle': 'TH',
        'hero-title': 'Premium Cannabis Accessories',
        'hero-subtitle': 'Discover our curated collection of high-quality bongs, grinders, and smoking accessories',
        'hero-shop': 'Shop Now',
        'hero-explore': 'Explore Strains',
        'gear-title': 'Premium Accessories',
        'gear-subtitle': 'Handpicked collection of the finest smoking accessories',
        'view-details': 'View Details',
        'product-glass-bong': 'Premium Glass Bong',
        'product-glass-bong-desc': 'High-quality borosilicate glass with smooth functionality',
        'product-artistic-bong': 'Artistic Water Pipe',
        'product-artistic-bong-desc': 'Handcrafted artistic design with superior filtration',
        'product-designer-bong': 'Designer Collection',
        'product-designer-bong-desc': 'Limited edition designer piece with unique aesthetics',
        'product-metal-grinder': 'Precision Metal Grinder',
        'product-metal-grinder-desc': '4-piece aluminum grinder with diamond teeth',
        'product-rolling-papers': 'Premium Rolling Papers',
        'product-rolling-papers-desc': 'Ultra-thin, slow-burning papers for the perfect roll',
        'product-rolling-tray': 'Bamboo Rolling Tray',
        'product-rolling-tray-desc': 'Eco-friendly bamboo tray with magnetic lid',
        'strains-title': 'Strain Gallery',
        'strains-subtitle': 'Explore our curated collection of premium cannabis strains',
        'strain-purple-haze': 'Purple Haze',
        'strain-sativa': 'Sativa Dominant',
        'strain-purple-haze-desc': 'A legendary strain known for its vibrant colors and uplifting effects',
        'strain-og-kush': 'OG Kush',
        'strain-hybrid': 'Hybrid',
        'strain-og-kush-desc': 'Classic strain with earthy pine and sour lemon scent',
        'strain-blue-dream': 'Blue Dream',
        'strain-blue-dream-desc': 'Perfect balance of relaxation and gentle euphoria',
        'strain-white-widow': 'White Widow',
        'strain-white-widow-desc': 'Resin-covered buds with powerful energizing effects',
        'strain-granddaddy-purple': 'Granddaddy Purple',
        'strain-indica': 'Indica',
        'strain-granddaddy-purple-desc': 'Deep relaxation with sweet grape and berry flavors',
        'strain-green-crack': 'Green Crack',
        'strain-green-crack-desc': 'Invigorating mental buzz with fruity flavor profile',
        'museum-title': 'Cannabis Museum',
        'museum-subtitle': 'Explore the intricate beauty of cannabis through microscopic art',
        'museum-trichomes': 'Crystal Trichomes',
        'museum-trichomes-desc': 'Microscopic view of resinous trichomes',
        'museum-purple-crystals': 'Purple Crystals',
        'museum-purple-crystals-desc': 'Vibrant purple trichome formations',
        'museum-frosty-coating': 'Frosty Coating',
        'museum-frosty-coating-desc': 'Dense trichome coverage like winter frost',
        'museum-amber-glands': 'Amber Glands',
        'museum-amber-glands-desc': 'Mature amber-colored trichome heads',
        'museum-resin-droplets': 'Resin Droplets',
        'museum-resin-droplets-desc': 'Glistening resin droplets on leaves',
        'museum-crystal-structures': 'Crystal Structures',
        'museum-crystal-structures-desc': 'Intricate crystalline formations',
        'contact-title': 'Get In Touch',
        'contact-subtitle': 'Visit our store or reach out to us online',
        'contact-location-title': 'Store Location',
        'contact-location': '123 Cannabis Street, Bangkok, Thailand 10110',
        'contact-phone-title': 'Phone',
        'contact-email-title': 'Email',
        'contact-hours-title': 'Store Hours',
        'contact-hours': 'Mon-Sun: 10:00 AM - 10:00 PM',
        'contact-line': 'Contact via LINE',
        'form-name': 'Name *',
        'form-email': 'Email *',
        'form-message': 'Message *',
        'form-submit': 'Send Message',
        'footer-text': 'Premium cannabis accessories for the discerning enthusiast',
        'footer-rights': 'All rights reserved.'
    },
    th: {
        'brand': 'onlygod',
        'nav-home': 'หน้าแรก',
        'nav-gear': 'อุปกรณ์',
        'nav-strains': 'เมนูสายพันธุ์',
        'nav-museum': 'พิพิธภัณฑ์',
        'nav-contact': 'ติดต่อ',
        'lang-toggle': 'EN',
        'hero-title': 'อุปกรณ์กัญชาคุณภาพพรีเมียม',
        'hero-subtitle': 'ค้นพบคอลเลกชันที่คัดสรรของบ้อง เครื่องบด และอุปกรณ์สูบคุณภาพสูง',
        'hero-shop': 'ช้อปเลย',
        'hero-explore': 'สำรวจสายพันธุ์',
        'gear-title': 'อุปกรณ์พรีเมียม',
        'gear-subtitle': 'คอลเลกชันที่คัดสรรของอุปกรณ์สูบที่ดีที่สุด',
        'view-details': 'ดูรายละเอียด',
        'product-glass-bong': 'บ้องแก้วพรีเมียม',
        'product-glass-bong-desc': 'แก้วโบโรซิลิเกตคุณภาพสูงที่ใช้งานได้อย่างราบรื่น',
        'product-artistic-bong': 'ไปป์น้ำศิลปะ',
        'product-artistic-bong-desc': 'การออกแบบศิลปะที่ทำด้วยมือพร้อมการกรองที่เหนือกว่า',
        'product-designer-bong': 'คอลเลกชันดีไซเนอร์',
        'product-designer-bong-desc': 'ชิ้นงานดีไซเนอร์รุ่นลิมิเต็ดที่มีความงามเฉพาะตัว',
        'product-metal-grinder': 'เครื่องบดโลหะความแม่นยำ',
        'product-metal-grinder-desc': 'เครื่องบดอลูมิเนียม 4 ชิ้นพร้อมฟันเพชร',
        'product-rolling-papers': 'กระดาษม้วนพรีเมียม',
        'product-rolling-papers-desc': 'กระดาษบางพิเศษ เผาไหม้ช้าสำหรับการม้วนที่สมบูรณ์แบบ',
        'product-rolling-tray': 'ถาดม้วนไผ่',
        'product-rolling-tray-desc': 'ถาดไผ่เป็นมิตรกับสิ่งแวดล้อมพร้อมฝาแม่เหล็ก',
        'strains-title': 'แกลเลอรี่สายพันธุ์',
        'strains-subtitle': 'สำรวจคอลเลกชันที่คัดสรรของสายพันธุ์กัญชาพรีเมียม',
        'strain-purple-haze': 'เพอร์เปิล เฮซ',
        'strain-sativa': 'ซาติวา โดมิแนนท์',
        'strain-purple-haze-desc': 'สายพันธุ์ในตำนานที่มีชื่อเสียงจากสีสันที่สดใสและเอฟเฟกต์ที่ช่วยยกระดับอารมณ์',
        'strain-og-kush': 'โอจี คุช',
        'strain-hybrid': 'ไฮบริด',
        'strain-og-kush-desc': 'สายพันธุ์คลาสสิกที่มีกลิ่นสนเอิร์ธและมะนาวเปรี้ยว',
        'strain-blue-dream': 'บลู ดรีม',
        'strain-blue-dream-desc': 'สมดุลที่สมบูรณ์แบบของการผ่อนคลายและความรู้สึกเบิกบานอ่อนๆ',
        'strain-white-widow': 'ไวท์ วิโดว์',
        'strain-white-widow-desc': 'ดอกที่เต็มไปด้วยเรซินพร้อมเอฟเฟกต์ที่ให้พลังงานอันทรงพลัง',
        'strain-granddaddy-purple': 'แกรนด์แดดดี้ เพอร์เปิล',
        'strain-indica': 'อินดิกา',
        'strain-granddaddy-purple-desc': 'การผ่อนคลายอย่างลึกซึ้งพร้อมรสชาติองุ่นและเบอร์รี่หวาน',
        'strain-green-crack': 'กรีน แครค',
        'strain-green-crack-desc': 'ความสดชื่นทางจิตใจที่ให้พลังพร้อมรสชาติผลไม้',
        'museum-title': 'พิพิธภัณฑ์กัญชา',
        'museum-subtitle': 'สำรวจความงามที่ซับซ้อนของกัญชาผ่านศิลปะจุลทรรศน์',
        'museum-trichomes': 'ไตรโคมคริสตัล',
        'museum-trichomes-desc': 'มุมมองจุลทรรศน์ของไตรโคมเรซิน',
        'museum-purple-crystals': 'คริสตัลสีม่วง',
        'museum-purple-crystals-desc': 'การก่อตัวของไตรโคมสีม่วงที่สดใส',
        'museum-frosty-coating': 'การเคลือบน้ำแข็ง',
        'museum-frosty-coating-desc': 'การปกคลุมของไตรโคมหนาแน่นเหมือนน้ำแข็งในฤดูหนาว',
        'museum-amber-glands': 'ต่อมสีอำพัน',
        'museum-amber-glands-desc': 'หัวไตรโคมสีอำพันที่สุกแล้ว',
        'museum-resin-droplets': 'หยดเรซิน',
        'museum-resin-droplets-desc': 'หยดเรซินเปล่งประกายบนใบ',
        'museum-crystal-structures': 'โครงสร้างคริสตัล',
        'museum-crystal-structures-desc': 'การก่อตัวของคริสตัลที่ซับซ้อน',
        'contact-title': 'ติดต่อเรา',
        'contact-subtitle': 'เยี่ยมชมร้านของเราหรือติดต่อเราทางออนไลน์',
        'contact-location-title': 'ที่ตั้งร้าน',
        'contact-location': '123 ถนนกัญชา กรุงเทพฯ ประเทศไทย 10110',
        'contact-phone-title': 'โทรศัพท์',
        'contact-email-title': 'อีเมล',
        'contact-hours-title': 'เวลาทำการ',
        'contact-hours': 'จันทร์-อาทิตย์: 10:00 - 22:00 น.',
        'contact-line': 'ติดต่อผ่าน LINE',
        'form-name': 'ชื่อ *',
        'form-email': 'อีเมล *',
        'form-message': 'ข้อความ *',
        'form-submit': 'ส่งข้อความ',
        'footer-text': 'อุปกรณ์กัญชาพรีเมียมสำหรับผู้ที่เลือกสรร',
        'footer-rights': 'สงวนลิขสิทธิ์'
    }
};

// Application state
const app = {
    currentLanguage: 'en',
    currentTheme: 'light',
    isMenuOpen: false
};

// DOM elements - initialized after DOM is ready
let elements = {};

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    setupIntersectionObserver();
    loadPreferences();
});

/**
 * Initialize the application
 */
function initializeApp() {
    console.log('Initializing GreenGear Cannabis Store...');
    
    // Initialize DOM elements
    elements = {
        navbar: document.getElementById('navbar'),
        navMenu: document.getElementById('nav-menu'),
        hamburger: document.getElementById('hamburger'),
        themeToggle: document.getElementById('theme-toggle'),
        langToggle: document.getElementById('lang-toggle'),
        contactForm: document.getElementById('contact-form'),
        lineContact: document.getElementById('line-contact'),
        zoomModal: document.getElementById('zoom-modal'),
        zoomImage: document.getElementById('zoom-image'),
        zoomClose: document.getElementById('zoom-close')
    };
    
    updateLanguage();
    updateTheme();
    setupSmoothScrolling();
}

/**
 * Setup all event listeners
 */
function setupEventListeners() {
    // Navigation
    if (elements.hamburger) elements.hamburger.addEventListener('click', toggleMobileMenu);
    if (elements.themeToggle) elements.themeToggle.addEventListener('click', toggleTheme);
    if (elements.langToggle) elements.langToggle.addEventListener('click', toggleLanguage);
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Contact form
    if (elements.contactForm) elements.contactForm.addEventListener('submit', handleContactSubmit);
    
    // LINE contact
    if (elements.lineContact) elements.lineContact.addEventListener('click', handleLineContact);
    
    // Museum zoom functionality
    document.querySelectorAll('.museum-item').forEach(item => {
        item.addEventListener('click', handleMuseumZoom);
    });
    
    // Zoom modal
    if (elements.zoomModal) elements.zoomModal.addEventListener('click', closeZoomModal);
    if (elements.zoomClose) elements.zoomClose.addEventListener('click', closeZoomModal);
    
    // Window events
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
}

/**
 * Setup intersection observer for scroll animations
 */
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    app.isMenuOpen = !app.isMenuOpen;
    elements.hamburger.classList.toggle('active', app.isMenuOpen);
    elements.navMenu.classList.toggle('active', app.isMenuOpen);
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = app.isMenuOpen ? 'hidden' : '';
}

/**
 * Toggle theme between light and dark
 */
function toggleTheme() {
    app.currentTheme = app.currentTheme === 'light' ? 'dark' : 'light';
    updateTheme();
    savePreferences();
}

/**
 * Update theme
 */
function updateTheme() {
    document.documentElement.setAttribute('data-theme', app.currentTheme);
    const icon = elements.themeToggle.querySelector('i');
    icon.className = app.currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    
    // Add theme transition effect
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

/**
 * Toggle language between English and Thai
 */
function toggleLanguage() {
    app.currentLanguage = app.currentLanguage === 'en' ? 'th' : 'en';
    updateLanguage();
    savePreferences();
}

/**
 * Update all text content based on current language
 */
function updateLanguage() {
    const currentTranslations = translations[app.currentLanguage];
    
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (currentTranslations[key]) {
            element.textContent = currentTranslations[key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = app.currentLanguage;
    
    // Update form placeholders if form exists
    if (document.getElementById('contact-form')) {
        updateFormPlaceholders();
    }
}

/**
 * Update form placeholders based on language
 */
function updateFormPlaceholders() {
    const placeholders = {
        en: {
            name: 'Enter your full name',
            email: 'Enter your email address',
            message: 'Tell us about your inquiry...'
        },
        th: {
            name: 'กรอกชื่อเต็มของคุณ',
            email: 'กรอกที่อยู่อีเมลของคุณ',
            message: 'บอกเราเกี่ยวกับคำถามของคุณ...'
        }
    };
    
    const current = placeholders[app.currentLanguage];
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    
    if (nameField) nameField.placeholder = current.name;
    if (emailField) emailField.placeholder = current.email;
    if (messageField) messageField.placeholder = current.message;
}

/**
 * Handle navigation link clicks
 */
function handleNavigation(e) {
    // For external links (separate pages), let the browser handle normally
    const href = e.target.getAttribute('href');
    if (href && (href.endsWith('.html') || href.startsWith('http'))) {
        // Close mobile menu if open
        if (app.isMenuOpen) {
            toggleMobileMenu();
        }
        return; // Let browser handle the navigation
    }
    
    // For internal anchors (if any), handle with smooth scrolling
    if (href && href.startsWith('#')) {
        e.preventDefault();
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        e.target.classList.add('active');
        
        // Scroll to section
        const targetId = href.substring(1);
        scrollToSection(targetId);
        
        // Close mobile menu if open
        if (app.isMenuOpen) {
            toggleMobileMenu();
        }
    }
}

/**
 * Scroll to specific section
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = elements.navbar.offsetHeight;
        const sectionTop = section.offsetTop - navHeight - 20;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

/**
 * Setup smooth scrolling for anchor links
 */
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

/**
 * Handle scroll events
 */
function handleScroll() {
    // Update navbar on scroll
    const scrolled = window.scrollY > 50;
    elements.navbar.classList.toggle('scrolled', scrolled);
    
    // Update active navigation based on scroll position
    updateActiveNavigation();
}

/**
 * Update active navigation based on scroll position
 */
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navHeight = elements.navbar.offsetHeight;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

/**
 * Handle window resize
 */
function handleResize() {
    // Close mobile menu on larger screens
    if (window.innerWidth > 768 && app.isMenuOpen) {
        toggleMobileMenu();
    }
}

/**
 * Handle contact form submission
 */
function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    // Validate form
    if (!validateContactForm(data)) {
        return;
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = app.currentLanguage === 'en' ? 'Sending...' : 'กำลังส่ง...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showNotification(
            app.currentLanguage === 'en' 
                ? 'Message sent successfully!' 
                : 'ส่งข้อความสำเร็จแล้ว!',
            'success'
        );
        
        // Reset form
        e.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        console.log('Contact form submitted:', data);
    }, 2000);
}

/**
 * Validate contact form
 */
function validateContactForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push(app.currentLanguage === 'en' ? 'Name must be at least 2 characters' : 'ชื่อต้องมีอย่างน้อย 2 ตัวอักษร');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push(app.currentLanguage === 'en' ? 'Please enter a valid email address' : 'กรุณากรอกที่อยู่อีเมลที่ถูกต้อง');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push(app.currentLanguage === 'en' ? 'Message must be at least 10 characters' : 'ข้อความต้องมีอย่างน้อย 10 ตัวอักษร');
    }
    
    if (errors.length > 0) {
        showNotification(errors.join('\n'), 'error');
        return false;
    }
    
    return true;
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Handle LINE contact button
 */
function handleLineContact() {
    // In a real application, this would open LINE app or web interface
    const lineUrl = 'https://line.me/ti/p/@greengear';
    window.open(lineUrl, '_blank');
    
    showNotification(
        app.currentLanguage === 'en' 
            ? 'Opening LINE chat...' 
            : 'กำลังเปิดแชท LINE...',
        'info'
    );
}

/**
 * Handle museum item zoom
 */
function handleMuseumZoom(e) {
    const zoomUrl = e.currentTarget.getAttribute('data-zoom');
    if (zoomUrl) {
        elements.zoomImage.src = zoomUrl;
        elements.zoomModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Close zoom modal
 */
function closeZoomModal() {
    elements.zoomModal.classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * Handle keyboard navigation
 */
function handleKeyboard(e) {
    // Close zoom modal with Escape key
    if (e.key === 'Escape' && elements.zoomModal.classList.contains('active')) {
        closeZoomModal();
    }
    
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && app.isMenuOpen) {
        toggleMobileMenu();
    }
}

/**
 * Show notification
 */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(notification => {
        notification.remove();
    });
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#e53e3e' : type === 'success' ? '#38a169' : '#3182ce'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 2001;
        max-width: 300px;
        word-wrap: break-word;
        animation: slideIn 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Auto-remove notification
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

/**
 * Save user preferences to localStorage
 */
function savePreferences() {
    const preferences = {
        theme: app.currentTheme,
        language: app.currentLanguage
    };
    
    try {
        localStorage.setItem('greengear-preferences', JSON.stringify(preferences));
    } catch (error) {
        console.warn('Could not save preferences:', error);
    }
}

/**
 * Load user preferences from localStorage
 */
function loadPreferences() {
    try {
        const saved = localStorage.getItem('greengear-preferences');
        if (saved) {
            const preferences = JSON.parse(saved);
            app.currentTheme = preferences.theme || 'light';
            app.currentLanguage = preferences.language || 'en';
            updateTheme();
            updateLanguage();
        }
    } catch (error) {
        console.warn('Could not load preferences:', error);
    }
}

/**
 * Add CSS animations
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .navbar.scrolled {
        background-color: var(--bg-primary);
        box-shadow: 0 2px 20px var(--shadow-light);
    }
`;

document.head.appendChild(style);

// Export functions for global access
window.scrollToSection = scrollToSection;

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`GreenGear loaded in ${Math.round(loadTime)}ms`);
    });
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
    showNotification(
        app.currentLanguage === 'en' 
            ? 'An error occurred. Please refresh the page.' 
            : 'เกิดข้อผิดพลาด กรุณาโหลดหน้าเว็บใหม่',
        'error'
    );
});

// Service worker registration (if available)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
