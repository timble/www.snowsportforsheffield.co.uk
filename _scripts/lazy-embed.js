function getDataSet(node) {
    var dataset = {};
    var attrs = node.attributes;
    for (var i = 0; i < attrs.length; i++) {
        var attr = attrs.item(i);
        // make sure it is a data attribute
        if(attr.nodeName.match(new RegExp(/^data-/))) {
            // remove the 'data-' from the string
            dataset[attr.nodeName.replace(new RegExp('^data-'), '')] = attr.nodeValue;
        }
    }
    return dataset;
}

(function() {
    var v = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = youtubeThumb(v[n].getAttribute("data-id"));
        p.onclick = youtubeIframe;
        v[n].appendChild(p);
    }
})();

function youtubeThumb(id) {
    return '<img class="youtube-thumb" src="//i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="play-button"></div>';
}

function youtubeIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "//www.youtube-nocookie.com/embed/" + this.parentNode.getAttribute("data-id") + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=0");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "youtube-iframe");
    this.parentNode.replaceChild(iframe, this);
}

(function() {
    var v = document.getElementsByClassName("vimeo-player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = vimeoThumb(v[n].getAttribute("data-thumbnail"));
        p.onclick = vimeoIframe;
        v[n].appendChild(p);
    }
})();

function vimeoThumb(id) {
    return '<img class="youtube-thumb" src="//i.vimeocdn.com/video/' + id + '.webp?mw=400&mh=225"><div class="play-button"></div>';
}

function vimeoIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "//player.vimeo.com/video/" + this.parentNode.getAttribute("data-id") + "?title=0&byline=0&portrait=0&autoplay=1");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "youtube-iframe");
    this.parentNode.replaceChild(iframe, this);
}