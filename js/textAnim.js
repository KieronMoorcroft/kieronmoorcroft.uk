    function slabTextHeadlines() {
        $("h1").slabText({
            // Don't slabtext the headers if the viewport is under 380px
            "viewportBreakpoint":400
        });
    };

      $(window).load(function() {
        // So, to recap... don't actually do this, it's nasty!
        setTimeout(slabTextHeadlines, 1000);
    });
  