function MeteorsUi(visualization) {
    MeteorsUi.prototype.init = function () {
        $('.toggle-summary').on('click', function () {
            $('#summary').toggleClass('minimized').toggleClass('maximized');
        });

        $('#sky-map img').on('click', function () {
            $('#skymap-modal').css("display","flex");
            $('#skymap-modal img').attr('src', $('#sky-map img').attr('src'))
        });

        $('#skymap-modal img').on('click', function () {
            $('#skymap-modal').css("display","none");
        });

        $('#skymap-modal').on('click', function () {
            $('#skymap-modal').css("display","none");
        });

        if (window.isMobile) {
            $('.mobile-hide-container').hide();
            $('.mobile-show-container').show();
        }

        if (window.isIframe) {
            $('.iframe-hide-container').hide();
            $('.iframe-show-container').show();
            $('#summary').addClass('iframe-mode');
        }

        setupButtonHandlers();
        setupModalPlugin();
    }

    function setupButtonHandlers() {
        $('#restore-view').on('click', function () {
            visualization.clearLock();
            // TODO shouldn't really have to call these both.
            visualization.setDefaultCameraPosition();
            visualization.setNeutralCameraPosition();
        });

        $('#lock-earth').on('click', function () {
            visualization.setLockMode('FOLLOW');
            visualization.setLock('earth');
        });

        $('#lock-earth-view').on('click', function () {
            visualization.setLockMode('VIEW_FROM');
            visualization.setLock('earth');
        });
    }

    function setupModalPlugin() {
        $.modal.defaults.opacity = 0.4;
        $.modal.defaults.zIndex = 9999999;
    }
}
