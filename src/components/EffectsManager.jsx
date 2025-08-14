import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import imagesLoaded from 'imagesloaded';

const EffectsManager = () => {
  useEffect(() => {
    // Scroll body scrolled class
    const handleScrollClass = () => {
      const body = document.body;
      const header = document.querySelector('#header');
      if (
        header &&
        (header.classList.contains('fixed-top') ||
          header.classList.contains('sticky-top') ||
          header.classList.contains('scroll-up-sticky'))
      ) {
        body.classList.toggle('scrolled', window.scrollY > 100);
      }
    };

    // Scroll-top button
    const scrollTopBtn = document.querySelector('.scroll-top');
    const handleScrollTopToggle = () => {
      if (scrollTopBtn) {
        scrollTopBtn.classList.toggle('active', window.scrollY > 100);
      }
    };

    const handleScrollTopClick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    scrollTopBtn?.addEventListener('click', handleScrollTopClick);

    // Scrollspy
    const navLinks = document.querySelectorAll('.navmenu a');
    const updateScrollSpy = () => {
      navLinks.forEach((link) => {
        if (!link.hash) return;
        const section = document.querySelector(link.hash);
        if (!section) return;
        const position = window.scrollY + 200;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          document.querySelectorAll('.navmenu a.active').forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    };

    // Navigation toggle
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const toggleMobileNav = () => {
      document.body.classList.toggle('mobile-nav-active');
      navToggle.classList.toggle('bi-list');
      navToggle.classList.toggle('bi-x');
    };
    navToggle?.addEventListener('click', toggleMobileNav);

    document.querySelectorAll('#navmenu a').forEach((link) => {
      link.addEventListener('click', () => {
        if (document.body.classList.contains('mobile-nav-active')) {
          toggleMobileNav();
        }
      });
    });

    document.querySelectorAll('.navmenu .toggle-dropdown').forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = trigger.parentElement;
        parent.classList.toggle('active');
        const submenu = parent.nextElementSibling;
        if (submenu) submenu.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });

    // Preloader
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => preloader.remove());
    }

    // Scroll to hash on load
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          const offset = parseInt(getComputedStyle(section).scrollMarginTop) || 0;
          window.scrollTo({ top: section.offsetTop - offset, behavior: 'smooth' });
        }, 100);
      }
    }

    // AOS
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });

    // GLightbox
    GLightbox({ selector: '.glightbox' });

    // Isotope
    document.querySelectorAll('.isotope-layout').forEach((layout) => {
      const mode = layout.getAttribute('data-layout') ?? 'masonry';
      const filter = layout.getAttribute('data-default-filter') ?? '*';
      const sort = layout.getAttribute('data-sort') ?? 'original-order';

      let iso;
      imagesLoaded(layout.querySelector('.isotope-container'), () => {
        iso = new Isotope(layout.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: mode,
          filter,
          sortBy: sort
        });
      });

      layout.querySelectorAll('.isotope-filters li').forEach((filterBtn) => {
        filterBtn.addEventListener('click', () => {
          layout.querySelector('.filter-active')?.classList.remove('filter-active');
          filterBtn.classList.add('filter-active');
          iso?.arrange({ filter: filterBtn.getAttribute('data-filter') });
          AOS.refresh();
        });
      });
    });

    // Swiper
    document.querySelectorAll('.init-swiper').forEach((el) => {
      const configEl = el.querySelector('.swiper-config');
      if (configEl) {
        const config = JSON.parse(configEl.textContent.trim());
        new Swiper(el, config);
      }
    });

    // Listeners
    window.addEventListener('scroll', handleScrollClass);
    window.addEventListener('scroll', handleScrollTopToggle);
    document.addEventListener('scroll', updateScrollSpy);
    window.addEventListener('load', () => {
      handleScrollClass();
      handleScrollTopToggle();
      updateScrollSpy();
    });

    return () => {
      scrollTopBtn?.removeEventListener('click', handleScrollTopClick);
      navToggle?.removeEventListener('click', toggleMobileNav);
      window.removeEventListener('scroll', handleScrollClass);
      window.removeEventListener('scroll', handleScrollTopToggle);
      document.removeEventListener('scroll', updateScrollSpy);
    };
  }, []);

  return null; // It's a behavioral component
};

export default EffectsManager;
