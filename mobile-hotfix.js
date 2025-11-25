(function () {
  // 1) Ensure a mobile viewport
  let vp = document.querySelector('meta[name="viewport"]');
  if (!vp) {
    vp = document.createElement('meta');
    vp.name = 'viewport';
    vp.content = 'width=device-width, initial-scale=1';
    document.head.appendChild(vp);
  } else {
    vp.setAttribute('content', 'width=device-width, initial-scale=1');
  }

  // 2) Remove the inline desktop lock on <body>
  if (document.body) {
    document.body.style.minWidth = '';
    document.body.style.maxWidth = '';
    document.body.style.overflowX = 'hidden';
  }

  // 3) Inject hard overrides to beat the site CSS
  const css = `
    html, body {
      min-width: 0 !important;
      max-width: 100% !important;
      overflow-x: hidden !important;
    }
    .container, .container-fluid, .container-fluid-main-page {
      min-width: 0 !important;
      max-width: 100% !important;
      width: 100% !important;
      margin-right: auto !important;
      margin-left: auto !important;
    }
    .bgstripe, .infoWindow {
      height: auto !important;
      padding: 16px !important;
      background-size: cover !important;
      background-position: center !important;
    }
    .cenCalBorder.hidden-xs.hidden-sm {
      display: block !important;
      visibility: visible !important;
    }
    #map, .map, .iframe-container, .iframe-container iframe {
      width: 100% !important;
      height: 40vh !important;
      max-width: 100% !important;
    }
    table {
      display: block !important;
      width: 100% !important;
      overflow-x: auto !important;
      border-collapse: collapse !important;
    }
    img { max-width: 100% !important; height: auto !important; }
    
    @media (max-width: 999px) {
      .navbar-header {
        float: none !important;
      }
      .navbar-toggle {
        display: block !important;
        float: right !important;
      }
      .navbar-collapse {
        border-top: 1px solid transparent !important;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.1) !important;
      }
      .navbar-collapse.collapse {
        display: none !important;
        max-height: none !important;
      }
      .navbar-collapse.collapse.in {
        display: block !important;
        overflow-y: auto !important;
      }
      .navbar-nav {
        float: none !important;
        margin: 7.5px -15px !important;
      }
      .navbar-nav > li {
        float: none !important;
      }
      .navbar-nav > li > a {
        padding-top: 10px !important;
        padding-bottom: 10px !important;
      }
      [class*="col-"] {
        float: none !important;
        width: 100% !important;
        max-width: 100% !important;
      }
      .row {
        display: block !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
    }
  `;

  let style = document.getElementById('mobile-hotfix');
  if (!style) {
    style = document.createElement('style');
    style.id = 'mobile-hotfix';
    style.textContent = css;
    document.head.appendChild(style);
  } else {
    style.textContent = css;
  }

  console.log('✅ Mobile overrides applied. Hamburger menu below 1000px.');
})();
