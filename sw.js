const FILES_TO_CACHE = [
    "/",
    "index.html",
    "pwa.webmanifest",
    "TIVarsLib.wasm",
    "latealways_patch.js",
    "manifest.json",
    "TIVarsLib.js",
    "templates/no-device.html",
    "templates/dialog-custom-filename.html",
    "templates/animations.html",
    "templates/toolbar-screen-capture.html",
    "templates/dialog-commtest.html",
    "templates/device-explorer.html",
    "templates/dialog-local-storage.html",
    "templates/dialog-message.html",
    "templates/dialog-delete-files.html",
    "templates/toolbar-device-explorer.html",
    "templates/commtest.html",
    "templates/dialog-developer-options.html",
    "templates/dialog-calc-info.html",
    "templates/dialog-send-os.html",
    "templates/dialog-about.html",
    "templates/dialog-send-files.html",
    "templates/dialog-commtest-config.html",
    "templates/loading-mask.html",
    "templates/screen-captures.html",
    "templates/dialog-long-message.html",
    "templates/dialog-duplicate-filenames.html",
    "templates/screen-captures-slideshow.html",
    "templates/toolbar-app.html",
    "js/app.js",
    "js/app-utilities.js",
    "js/image-utilities.js",
    "js/device-views-screencapture.js",
    "js/device-views.js",
    "js/toolbar-app.js",
    "js/background.js",
    "js/device-views-screencapture-slideshow.js",
    "js/device-views-developer-options.js",
    "js/developer-options.js",
    "js/commtest.js",
    "js/screencapture.js",
    "images/ticonnect-icon-128.png",
    "images/ScreenCapture.png",
    "images/ToolbarLogo.svg",
    "images/filetype_app.svg",
    "images/icon_checkmark.svg",
    "images/icon_checkmark_green.svg",
    "images/ticonnect-icon-16.png",
    "images/animation_files.svg",
    "images/filetype_string.svg",
    "images/toolbar_capture.svg",
    "images/animation_fail.svg",
    "images/filetype_program.svg",
    "images/filetype_equation.svg",
    "images/animation_calculator.svg",
    "images/toolbar_settings.svg",
    "images/toolbar_add_from_comp.svg",
    "images/toolbar_missing.svg",
    "images/filetype_image.svg",
    "images/icon_select.svg",
    "images/TI-84 Plus Silver Edition @2x.png",
    "images/filetype_graphdb.svg",
    "images/toolbar_send_to_hh.svg",
    "images/animation_delete.svg",
    "images/menu.svg",
    "images/lock.svg",
    "images/file_list_background.png",
    "images/toolbar_delete.svg",
    "images/TI-84 Plus @2x.png",
    "images/toolbar_slide_show.svg",
    "images/filetype_real.svg",
    "images/filetype_group.svg",
    "images/animation_sync.svg",
    "images/TI-84 Plus C Silver Edition @2x.png",
    "images/ticonnect-icon-48.png",
    "images/toolbar_save.svg",
    "images/toolbar_calc.svg",
    "images/animation_arrow.svg",
    "images/no hh connected 2.svg",
    "images/animation_capture.svg",
    "images/no hh connected.svg",
    "images/icon_close.svg",
    "images/splitter_chevron.svg",
    "images/toolbar_copy.svg",
    "images/TI-83 Premium CE @2x.png",
    "images/TI logo @2x.png",
    "images/icon48.png",
    "images/toolbar_border.svg",
    "images/filetype_matrix.svg",
    "images/toolbar_refresh.svg",
    "images/filetype_range.svg",
    "images/dialog_warning.svg",
    "images/TI-84 Plus CE @2x.png",
    "images/filetype_list.svg",
    "images/filetype_os.svg",
    "images/animation_os.svg",
    "images/filetype_certificate.svg",
    "images/toolbar_send_to_comp.svg",
    "images/icon16.png",
    "images/icon_checkmark_green_hover.svg",
    "images/toolbar_styles.svg",
    "images/TI-83 Plus fr @2x.png",
    "images/icon128.png",
    "cars/src/js/obfuscatedcars.js",
    "cars/src/js/utilities/ti-logger.js",
    "cars/src/js/utilities/string-extension.js",
    "cars/src/js/utilities/common-utils.js",
    "cars/src/js/utilities/array-extension.js",
    "cars/src/css/main.css",
    "css/dialog-duplicates.css",
    "css/no-device.css",
    "css/dialog-about.css",
    "css/screen-captures.css",
    "css/ngDialog-theme.css",
    "css/commtest.css",
    "css/dialog-send-files.css",
    "css/dialog-custom-filename.css",
    "css/loading-mask.css",
    "css/app.css",
    "css/animations.css",
    "css/device-explorer.css",
    "css/toolbar.css",
    "css/dialog-calc-info.css",
    "lib/angular/angular-animate.js",
    "lib/angular/angular.js",
    "lib/angular/angular-sanitize.js",
    "lib/angular/angular-csp.css",
    "lib/angular/angular-touch.js",
    "lib/analytics/google-analytics-bundle.js",
    "lib/ngDialog/js/ngDialog.js",
    "lib/ngDialog/css/ngDialog.css",
    "lib/ngDialog/css/ngDialog-theme-default.css",
    "lib/jquery/jquery-1.11.3.js",
    "lib/jsZip/jszip.js",
];

    self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
        return Promise.all(
            cacheNames.map(cacheName => caches.delete(cacheName))
        );
        })
    );
    })

    self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v1')
        .then(cache => cache.addAll(FILES_TO_CACHE))
    );
    });

    self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(async response => {
        let response2;
        if(navigator.onLine) {
            response2 = fetch(event.request).then(response => {
            let statuscode = response.status;
            if(statuscode == 200) {
                caches.open('v1').then(cache => {
                    cache.put(event.request, response.clone());
                });
            }
            return response.clone();
            });
        }
        if(response) {
            return response;
        } else {
            return await response2;
        }
        })
    );
    });

    