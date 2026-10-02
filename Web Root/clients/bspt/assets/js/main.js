"use strict";
(globalThis["webpackChunkwpnest"] = globalThis["webpackChunkwpnest"] || []).push([["main"],{

/***/ "./sources/js/common/deviceMenu.js":
/*!*****************************************!*\
  !*** ./sources/js/common/deviceMenu.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DeviceMenu = () => {
  var _document$querySelect;
  /* Responsive Navigation */
  const hamBurger = document.querySelector('.hamburger');
  const overlay = document.querySelector('.mbnav__backdrop');
  const mbnav = document.querySelector('.mbnav');
  const menuWrap = document.querySelector('.mbnav .menu-wrap');
  const menuClose = () => {
    hamBurger.classList.remove('is-clicked');
    hamBurger.setAttribute('aria-hidden', 'false');
    document.body.classList.remove('scroll-fixed');
    mbnav.classList.remove('is-open');
    if (menuWrap) {
      const menuItems = menuWrap.querySelectorAll('li');
      menuItems.forEach(item => item.classList.remove('is-open'));
      document.querySelector('.mbnav__inner > .menu-wrap').style.setProperty('--leftSlide', '0');
    }
  };
  if (!hamBurger || !overlay || !mbnav) {
    return;
  }

  /* Mobile overlay click */
  overlay.addEventListener('click', () => {
    menuClose();
  });
  hamBurger.addEventListener('click', function () {
    const isOpen = hamBurger.classList.contains('is-clicked');
    if (isOpen) {
      menuClose();
      hamBurger.setAttribute('aria-expanded', 'false');
      mbnav.setAttribute('aria-hidden', 'true');
    } else {
      var _mbnav$querySelector;
      hamBurger.classList.add('is-clicked');
      mbnav.classList.add('is-open');
      document.body.classList.add('scroll-fixed');
      hamBurger.setAttribute('aria-expanded', 'true');
      mbnav.setAttribute('aria-hidden', 'false');
      (_mbnav$querySelector = mbnav.querySelector('a, button, input')) === null || _mbnav$querySelector === void 0 || _mbnav$querySelector.focus();
    }
  });
  const clickable = (_document$querySelect = document.querySelector('.mbnav__state')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.getAttribute('data-clickable');
  const listItemsWithSubMenu = document.querySelectorAll('.mbnav li:has(ul)');
  listItemsWithSubMenu.forEach(item => item.classList.add('has-sub'));
  const subMenus = document.querySelectorAll('.mbnav li > ul');
  subMenus.forEach(subMenu => subMenu.classList.add('sub-menu'));
  const hasSubLinks = document.querySelectorAll('.mbnav .has-sub > a');
  hasSubLinks.forEach(link => {
    const caret = document.createElement('em');
    caret.classList.add('mbnav__caret');
    link.after(caret);
  });
  const subMenuItems = document.querySelectorAll('.mbnav ul > li:has(ul.sub-menu)');
  subMenuItems.forEach(item => {
    const subMenu = item.querySelector(':scope > ul');
    const parentLink = item.querySelector(':scope > a');
    if (subMenu && parentLink) {
      const backClick = document.createElement('li');
      backClick.classList.add('back-click');
      backClick.textContent = parentLink.textContent.trim();
      subMenu.prepend(backClick);
    }
  });
  if (clickable === 'true') {
    const caretElements = document.querySelectorAll('.mbnav .has-sub > .mbnav__caret');
    caretElements.forEach(caret => caret.classList.add('mbnav__caret'));
  } else {
    const nonClickableLinks = document.querySelectorAll('.mbnav .has-sub > a');
    nonClickableLinks.forEach(link => {
      link.classList.add('mbnav__caret');
      link.setAttribute('href', 'javascript:;');
    });
  }

  // === First part: wrapAll ===
  const menuInner = document.querySelector('.mbnav__inner');
  const children = Array.from(menuInner.children);
  const outerWrap = document.createElement('div');
  outerWrap.classList.add('menu-wrap');
  const innerWrap = document.createElement('div');
  innerWrap.classList.add('menu-inner');
  children.forEach(child => innerWrap.appendChild(child));
  outerWrap.appendChild(innerWrap);
  menuInner.appendChild(outerWrap);
  const submenuElements = document.querySelectorAll('.mbnav__inner ul li.has-sub ul');
  submenuElements.forEach(subMenu => {
    const menuWrap = document.createElement('div');
    menuWrap.classList.add('menu-wrap');
    const innerWrap = document.createElement('div');
    innerWrap.classList.add('menu-inner');
    subMenu.parentNode.replaceChild(menuWrap, subMenu);
    innerWrap.appendChild(subMenu);
    menuWrap.appendChild(innerWrap);
  });

  // Open menu on caret click
  const caretTriggers = document.querySelectorAll('.mbnav .has-sub > .mbnav__caret');
  caretTriggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
      const element = this.parentElement;
      element.classList.add('is-open');
      document.body.classList.add('scroll-fixed');
      const menuLeftMove = document.querySelector('.mbnav__inner > .menu-wrap');
      const backMove = parseInt(window.getComputedStyle(menuLeftMove).getPropertyValue('--leftSlide'), 10) || 0;
      menuLeftMove.style.setProperty('--leftSlide', `${backMove + 100}%`);
    });
  });

  // Handle back click
  const backClicks = document.querySelectorAll('.mbnav__inner .back-click');
  backClicks.forEach(backClick => {
    backClick.addEventListener('click', function () {
      const menuItem = this.closest('.menu-item');
      if (menuItem) {
        menuItem.classList.remove('is-open');
      }
      const menuLeftMove = document.querySelector('.mbnav__inner > .menu-wrap');
      const backMove = parseInt(window.getComputedStyle(menuLeftMove).getPropertyValue('--leftSlide'), 10) || 0;
      menuLeftMove.style.setProperty('--leftSlide', `${backMove - 100}%`);
    });
  });

  // Set padding from header height
  const header = document.querySelector('header.main-header');
  if (header) {
    const headerHeight = header.offsetHeight;
    const menuInners = document.querySelectorAll('.mbnav .menu-wrap .menu-inner');
    menuInners.forEach(inner => {
      inner.style.paddingTop = `${headerHeight}px`;
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeviceMenu);

/***/ }),

/***/ "./sources/js/script.js":
/*!******************************!*\
  !*** ./sources/js/script.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _js_common_deviceMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/common/deviceMenu.js */ "./sources/js/common/deviceMenu.js");
// Device menu is global, so keep it eager



(0,_js_common_deviceMenu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

/** Scroll Reveal Animations */
window.addEventListener('load', () => {
  aos__WEBPACK_IMPORTED_MODULE_0__.init({
    once: true,
    offset: -500,
    duration: 1000,
    easing: 'ease-out-cubic',
    disableMutationObserver: true,
    mirror: false
  });
  aos__WEBPACK_IMPORTED_MODULE_0__.refreshHard();
});

/* global requestAnimationFrame */
window.reInitAOS = function (scope = document) {
  if (!window.AOS) {
    return;
  }

  // Reset AOS state on newly injected elements
  scope.querySelectorAll('[data-aos]').forEach(el => {
    el.classList.remove('aos-init', 'aos-animate');
  });

  // Wait for DOM + layout + paint
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      aos__WEBPACK_IMPORTED_MODULE_0__.refreshHard();
    });
  });
};
window.AOS = aos__WEBPACK_IMPORTED_MODULE_0__;

/** Homepage - Homepage Slider */
if (document.querySelector('.home-slider')) {
  Promise.all(/*! import() */[__webpack_require__.e("library/common"), __webpack_require__.e("library/swiper"), __webpack_require__.e("sources_js_common_swiperInit_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @js/common/swiperInit.js */ "./sources/js/common/swiperInit.js")).then(({
    initHomeSlider
  }) => {
    initHomeSlider();
  });
}

/** Homepage - Conditions & Services Slider */
if (document.querySelector('.cs-slider')) {
  Promise.all(/*! import() */[__webpack_require__.e("library/common"), __webpack_require__.e("library/swiper"), __webpack_require__.e("sources_js_common_swiperInit_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @js/common/swiperInit.js */ "./sources/js/common/swiperInit.js")).then(({
    initServicesTabsSwiper
  }) => {
    initServicesTabsSwiper();
  });
}

/** Homepage - Team Slider */
if (document.querySelector('.team-slider')) {
  Promise.all(/*! import() */[__webpack_require__.e("library/common"), __webpack_require__.e("library/swiper"), __webpack_require__.e("sources_js_common_swiperInit_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @js/common/swiperInit.js */ "./sources/js/common/swiperInit.js")).then(({
    initteamSlider
  }) => {
    initteamSlider();
  });
}

/** Homepage - Insurances Slider */
if (document.querySelector('.insurances-slider')) {
  Promise.all(/*! import() */[__webpack_require__.e("library/common"), __webpack_require__.e("library/swiper"), __webpack_require__.e("sources_js_common_swiperInit_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @js/common/swiperInit.js */ "./sources/js/common/swiperInit.js")).then(({
    initinsurancesSlider
  }) => {
    initinsurancesSlider();
  });
}

/** Homepage - Community Slider */
if (document.querySelector('.community-slider')) {
  Promise.all(/*! import() */[__webpack_require__.e("library/common"), __webpack_require__.e("library/swiper"), __webpack_require__.e("sources_js_common_swiperInit_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @js/common/swiperInit.js */ "./sources/js/common/swiperInit.js")).then(({
    initcommunitySlider
  }) => {
    initcommunitySlider();
  });
}

/** Homepage - Testimonial Slider */
if (document.querySelector('.testimonial-slider')) {
  Promise.all(/*! import() */[__webpack_require__.e("library/common"), __webpack_require__.e("library/swiper"), __webpack_require__.e("sources_js_common_swiperInit_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @js/common/swiperInit.js */ "./sources/js/common/swiperInit.js")).then(({
    initTestimonialSlider
  }) => {
    initTestimonialSlider();
  });
}

// Load Fancybox only if gallery/trigger elements exist
if (document.querySelector('[data-fancybox]')) {
  Promise.all(/*! import() */[__webpack_require__.e("library/common"), __webpack_require__.e("library/fancyapps"), __webpack_require__.e("sources_js_common_fancybox_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @js/common/fancybox */ "./sources/js/common/fancybox.js")).then(({
    initFancybox
  }) => {
    initFancybox();
  });
}

/** Sticky Header */
window.addEventListener('scroll', () => {
  document.body.classList.toggle('scrolled', window.scrollY > 10);
});
/** End Sticky Header */

document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth < 768) {
    var _document$querySelect;
    (_document$querySelect = document.querySelector('header .header-buttons')) === null || _document$querySelect === void 0 || _document$querySelect.addEventListener('click', function (e) {
      var _document$querySelect2, _trigger$nextElementS;
      const trigger = e.target.closest('.call-tracking');
      if (!trigger) {
        return;
      }
      e.preventDefault();
      (_document$querySelect2 = document.querySelector('.wrapper')) === null || _document$querySelect2 === void 0 || _document$querySelect2.classList.toggle('active');
      (_trigger$nextElementS = trigger.nextElementSibling) === null || _trigger$nextElementS === void 0 || _trigger$nextElementS.classList.add('active');
    });
    document.querySelectorAll('.advance-call-tracking .close-btn').forEach(function (button) {
      button.addEventListener('click', function () {
        var _document$querySelect3;
        (_document$querySelect3 = document.querySelector('.wrapper')) === null || _document$querySelect3 === void 0 || _document$querySelect3.classList.remove('active');
        document.querySelectorAll('.advance-call-tracking').forEach(function (popup) {
          popup.classList.remove('active');
        });
      });
    });
  }
});

/** Main Navigation */
document.querySelectorAll('.menu-item-has-children').forEach(item => {
  const link = item.querySelector('a');
  link.setAttribute('aria-haspopup', 'true');
  link.setAttribute('aria-expanded', 'false');

  // keyboard support
  link.addEventListener('focus', () => {
    item.classList.add('open');
    link.setAttribute('aria-expanded', 'true');
  });
  link.addEventListener('blur', () => {
    item.classList.remove('open');
    link.setAttribute('aria-expanded', 'false');
  });
});
/** Main Search Model  */
/** setTimeout */
document.addEventListener('DOMContentLoaded', function () {
  const openBtns = document.querySelectorAll('.open-search');
  const panel = document.querySelector('.search-modal-panel');
  const closeBtn = panel ? panel.querySelector('.search-modal-close') : null;
  const input = panel ? panel.querySelector('.search-field') : null;
  const suggestions = document.querySelector('.search-suggestions');
  if (!openBtns.length || !panel || !closeBtn) {
    return;
  }
  const openPanel = () => {
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    openBtns.forEach(btn => btn.setAttribute('aria-expanded', 'true'));
    window.setTimeout(() => {
      if (input) {
        input.focus();
      }
    }, 550);
  };
  const closePanel = () => {
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    openBtns.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
    openBtns.focus();
    if (input) {
      input.value = '';
      input.setAttribute('aria-expanded', 'false');
    }
    if (suggestions) {
      suggestions.innerHTML = '';
      suggestions.classList.remove('has-results');
    }
  };
  openBtns.forEach(btn => {
    btn.addEventListener('click', openPanel);
  });
  closeBtn.addEventListener('click', closePanel);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && panel.classList.contains('is-open')) {
      closePanel();
    }
  });
});

/** Location Zip Code Search - Start */
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form#zip-search-form');
  if (!forms.length) {
    return;
  }
  forms.forEach(form => {
    const input = form.querySelector('input[name="zip"]');
    const errorEl = document.createElement('span');
    errorEl.className = 'zip-error-message';
    errorEl.setAttribute('id', 'zip-error');
    errorEl.setAttribute('aria-live', 'polite');
    errorEl.style.display = 'none';
    form.appendChild(errorEl);

    // 🔹 ALLOW letters, numbers, and spaces
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^a-zA-Z0-9\s,]/g, '');
      if (errorEl.style.display !== 'none') {
        errorEl.textContent = '';
        errorEl.style.display = 'none';
        input.removeAttribute('aria-invalid');
      }
    });

    // 🔹 VALIDATE ON SUBMIT
    form.addEventListener('submit', e => {
      e.preventDefault();
      const keyword = input.value.trim();
      if (!keyword) {
        errorEl.textContent = 'Please enter a ZIP code or city name.';
        errorEl.style.display = 'block';
        input.setAttribute('aria-invalid', 'true');
        input.focus();
        return;
      }

      // 🔹 If input is numeric → validate ZIP
      if (/^\d+$/.test(keyword) && !/^\d{5}$/.test(keyword)) {
        errorEl.textContent = 'Please enter a valid 5-digit ZIP code.';
        errorEl.style.display = 'block';
        input.setAttribute('aria-invalid', 'true');
        input.focus();
        return;
      }
      errorEl.textContent = '';
      errorEl.style.display = 'none';
      input.removeAttribute('aria-invalid');
      const host = window.location.hostname.replace(/^www\./, '');
      const searchURL = `https://locations.${host}/search?q=${encodeURIComponent(keyword)}&qp=${encodeURIComponent(keyword)}&l=en`;
      //`https://locations.mvpt-physicaltherapy.com/search?q=${encodeURIComponent(keyword)}&qp=${encodeURIComponent(keyword)}&l=en`;

      window.open(searchURL, '_self', 'noopener,noreferrer');
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.search-location-input');
  inputs.forEach(input => {
    const defaultText = 'Find A Location Near You';
    const activeText = 'Search City & State or Zip Code*';
    input.placeholder = defaultText;
    input.addEventListener('focus', () => {
      input.placeholder = activeText;
    });
    input.addEventListener('blur', () => {
      if (input.value.trim() === '') {
        input.placeholder = defaultText;
      }
    });
  });
});

/** Location Zip Code Search - End */

/** Result Counter Starts*/
/* eslint-disable no-undef */
(() => {
  const animateNumber = (el, target) => {
    const duration = 2000;
    const startTime = performance.now();
    const suffix = el.getAttribute('data-suffix') || '';
    const update = time => {
      const progress = Math.min((time - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      let output = '';
      if (suffix) {
        // 🔹 Custom suffix (ex: +%, +)
        output = `${value}${suffix}`;
      } else if (target >= 10000) {
        // 🔹 14000 → 14K+
        output = `${Math.floor(value / 1000)}K+`;
      } else if (target <= 100) {
        // 🔹 Default percentage
        output = `${value}%`;
      } else {
        // 🔹 Default count
        output = `${value}+`;
      }
      el.querySelector('.count').textContent = output;
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  };
  const initCounters = () => {
    const counters = document.querySelectorAll('.count-number');
    if (!('IntersectionObserver' in window) || !counters.length) {
      return;
    }
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const number = parseInt(el.getAttribute('data-number'), 10) || 0;
          animateNumber(el, number);
          obs.unobserve(el);
        }
      });
    }, {
      threshold: 0.4
    }); // Trigger when ~40% visible

    counters.forEach(el => observer.observe(el));
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCounters);
  } else {
    initCounters();
  }
})();
/* eslint-enable no-undef */
/** Result Counter Ends */

/** Category Filter - JS */
document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.getElementById('postscategory');
  if (!dropdown) {
    return;
  }
  dropdown.addEventListener('change', function () {
    if (this.value) {
      window.location.href = this.value;
    }
  });
});

/** FAQ Accordion - Start */
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.accordion-item');
  items.forEach(item => {
    const btn = item.querySelector('.accordion-toggle');
    const panel = item.querySelector('.accordion-content');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      items.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.accordion-toggle').setAttribute('aria-expanded', 'false');
        i.querySelector('.accordion-content').style.maxHeight = '0px';
      });
      if (!isOpen) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
  window.addEventListener('resize', () => {
    items.forEach(item => {
      if (item.classList.contains('active')) {
        const panel = item.querySelector('.accordion-content');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
});
/** FAQ Accordion - End */

/** Main menu - navigation dropdown caret */
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu-main-menu-navigation');
  if (!menu) {
    return;
  }
  const nestedParents = menu.querySelectorAll('.sub-menu > li.menu-item-has-children');
  nestedParents.forEach(li => {
    const link = li.querySelector(':scope > a');
    const submenu = li.querySelector(':scope > .sub-menu');
    if (!link || !submenu) {
      return;
    }
    const caret = document.createElement('span');
    caret.className = 'mbnav__caret';
    link.appendChild(caret);
  });
});

/* eslint-disable no-console */
/* global navigator, console, setTimeout */
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.copy-link');
  if (!btn) {
    return;
  }
  e.preventDefault();
  const url = btn.getAttribute('href'); // or use data-url if href is not reliable
  const title = document.title; // or btn.getAttribute('data-title')

  console.log('Share button clicked', {
    url,
    title
  });
  if (navigator.share) {
    console.log('navigator.share is available');
    navigator.share({
      title,
      url
    }).then(() => console.log('Share successful')).catch(err => console.error('Share failed:', err.name, err.message));
  } else {
    console.log('navigator.share NOT available → falling back to copy');
    const input = document.createElement('input');
    input.value = url;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showCopied(btn);
  }
  function showCopied(el) {
    el.classList.add('copied');
    setTimeout(() => el.classList.remove('copied'), 1500);
  }
});

/** Gravity Date of Birth - Field */
/** global URL */
document.addEventListener('DOMContentLoaded', function () {
  const url = new window.URL(window.location.href);
  if (url.searchParams.has('source_page')) {
    url.searchParams.delete('source_page');
    window.history.replaceState({}, document.title, url.pathname + url.search + url.hash);
  }
});
(function () {
  function formatDOB(input) {
    const v = input.value.replace(/\D/g, '').slice(0, 8);
    let out = v;
    if (v.length > 4) {
      out = v.slice(0, 2) + '/' + v.slice(2, 4) + '/' + v.slice(4);
    } else if (v.length > 2) {
      out = v.slice(0, 2) + '/' + v.slice(2);
    }
    input.value = out;
  }
  function bindDOBMask(context) {
    context.querySelectorAll('.dob-mask input.gform-datepicker').forEach(input => {
      if (input.dataset.dobBound === 'true') {
        return;
      }
      input.dataset.dobBound = 'true';
      input.setAttribute('inputmode', 'numeric');
      input.setAttribute('maxlength', '10');
      input.setAttribute('placeholder', 'DATE OF BIRTH: MM/DD/YYYY *');
      let isDeleting = false;
      input.addEventListener('keydown', e => {
        isDeleting = e.key === 'Backspace' || e.key === 'Delete';
        if (e.key === 'Backspace') {
          const pos = input.selectionStart;
          if (input.selectionStart === input.selectionEnd && input.value[pos - 1] === '/') {
            e.preventDefault();
            input.value = input.value.slice(0, pos - 2) + input.value.slice(pos);
            input.selectionStart = input.selectionEnd = pos - 2;
          }
        }
      });
      input.addEventListener('input', () => {
        if (isDeleting) {
          isDeleting = false;
          return;
        }
        const rawPos = input.selectionStart;
        const digitsBefore = input.value.slice(0, rawPos).replace(/\D/g, '').length;
        formatDOB(input);
        let count = 0,
          newPos = 0;
        for (let i = 0; i < input.value.length; i++) {
          if (/\d/.test(input.value[i])) {
            count++;
          }
          if (count === digitsBefore) {
            newPos = i + 1;
            break;
          }
        }
        if (input.value[newPos] === '/') {
          newPos++;
        }
        input.selectionStart = input.selectionEnd = newPos;
      });
      input.addEventListener('paste', () => {
        setTimeout(() => formatDOB(input), 0);
      });
      input.addEventListener('blur', () => formatDOB(input));
      if (input.value) {
        formatDOB(input);
      }
    });
  }

  // Initial load
  document.addEventListener('DOMContentLoaded', function () {
    bindDOBMask(document);
  });

  // ✅ FIX: Proper GF AJAX hook with form container
  document.addEventListener('gform/post_render', function (event) {
    const form = document.querySelector(`#gform_${event.detail.formId}`);
    if (form) {
      bindDOBMask(form);
    }
  });
})();
// (function() {

//     function formatDOB( input ) {
//         const v = input.value.replace( /\D/g, '' ).slice( 0, 8 );
//         let out = v;
//         if      ( v.length > 4 ) {out = v.slice(0,2) + '/' + v.slice(2,4) + '/' + v.slice(4);}
//         else if ( v.length > 2 ) {out = v.slice(0,2) + '/' + v.slice(2);}
//         input.value = out;
//     }

//     function bindDOBMask( context = document ) {
//         context
//             .querySelectorAll( '.dob-mask input.gform-datepicker' )
//             .forEach( input => {

//                 if ( input.dataset.dobBound ) {return;}
//                 input.dataset.dobBound = 'true';

//                 input.setAttribute( 'inputmode', 'numeric' );
//                 input.setAttribute( 'placeholder', 'DATE OF BIRTH: MM/DD/YYYY *' );
//                 input.setAttribute( 'maxlength', '10' );

//                 // Detach jQuery UI datepicker so it doesn't fight the mask
//                 if ( typeof $ !== 'undefined' && $( input ).datepicker ) {
//                     $( input ).datepicker( 'destroy' );
//                 }

//                 let isDeleting = false;

//                 // Step 1 — catch Backspace BEFORE the value changes
//                 input.addEventListener( 'keydown', e => {
//                     isDeleting = ( e.key === 'Backspace' || e.key === 'Delete' );

//                     // If cursor sits right after a slash, eat slash + digit together
//                     if ( e.key === 'Backspace' ) {
//                         const pos = input.selectionStart;
//                         if ( input.selectionStart === input.selectionEnd &&
//                  input.value[ pos - 1 ] === '/' ) {
//                             e.preventDefault();
//                             input.value = input.value.slice( 0, pos - 2 )
//                           + input.value.slice( pos );
//                             input.selectionStart = input.selectionEnd = pos - 2;
//                         }
//                     }
//                 });

//                 // Step 2 — reformat on typing, preserve cursor position
//                 input.addEventListener( 'input', () => {
//                     // During deletions don't reformat — let the user freely erase
//                     if ( isDeleting ) { isDeleting = false; return; }

//                     // Count digits before cursor so we can restore position after reformat
//                     const rawPos    = input.selectionStart;
//                     const digitsBefore = input.value
//                         .slice( 0, rawPos )
//                         .replace( /\D/g, '' ).length;

//                     formatDOB( input );

//                     // Walk the new value to find where those same digits end up
//                     let count = 0, newPos = 0;
//                     for ( let i = 0; i < input.value.length; i++ ) {
//                         if ( /\d/.test( input.value[ i ] ) ) {count++;}
//                         if ( count === digitsBefore ) { newPos = i + 1; break; }
//                     }
//                     // If cursor is now sitting on a slash, skip over it
//                     if ( input.value[ newPos ] === '/' ) {newPos++;}
//                     input.selectionStart = input.selectionEnd = newPos;
//                 });

//                 input.addEventListener( 'paste', () => {
//                     setTimeout( () => formatDOB( input ), 0 );
//                 });

//                 input.addEventListener( 'blur', () => formatDOB( input ) );

//                 if ( input.value ) {formatDOB( input );}
//             });
//     }

//     document.addEventListener( 'DOMContentLoaded', () => bindDOBMask() );

//     // e.target is `document` here — pass no argument, default handles it
//     document.addEventListener( 'gform_post_render', () => bindDOBMask() );

// })();
/** Gravity Date of Birth - Field */
/** Locations Domain target change */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="https://locations."]').forEach(function (link) {
    link.setAttribute('target', '_self');
  });
});

/***/ }),

/***/ "./sources/scss/style.scss":
/*!*********************************!*\
  !*** ./sources/scss/style.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["library/common","library/aos"], () => (__webpack_exec__("./sources/js/script.js"), __webpack_exec__("./sources/scss/style.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map