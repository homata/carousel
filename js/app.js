//-------------------
// 地図タイル
//-------------------
// 地理院タイル　標準地図
var gsi_std = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html#std">国土地理院</a>',
    maxZoom: 18
});

// 地理院タイル　淡色地図
var gsi_pale = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html#pale">国土地理院</a>',
    maxZoom: 18
});

// 地理院タイル オルソ 空中写真・衛星画像 2007年～
var gsi_ort = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg', {
    maxZoom: 18,
    attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>国土地理院</a>"
});

// OpenStreetMap
var osm_std = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 28
});

// OpenStreetMap Stamen Terrain
var stamen_terrain = L.tileLayer('http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>,<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash;Map data: &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
});

// MIERUNE COLOR
var m_color = new L.tileLayer("https://tile.mierune.co.jp/mierune/{z}/{x}/{y}.png", {
    attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
});

// MIERUNE MONO
var m_mono = new L.tileLayer("https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png", {
    attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
});

//-------------------
//
//-------------------

// Map読み込み
var map = L.map("map", {
    center: [35.6810, 139.7670],
    zoom: 14,
    layers: [gsi_pale]
});

var maps = {
    "標準地図": gsi_std,
    "淡色地図": gsi_pale,
    "空中写真（2007～）":gsi_ort,
    "OpenStreerMap":osm_std,
    "Stamen(Terrain)":stamen_terrain,
    "MIERUNE COLOR": m_color,
    "MIERUNE MONO": m_mono,
};

// 地図を切り替え表示するためのウィンドウを追加する
L.control.layers(maps).addTo(map);

//スケールコントロールを追加（オプションはフィート単位を非表示）
L.control.scale({imperial: false}).addTo(map);

var pointdata = [
    { "coordinates": [ 139.73025667682498, 35.684728657838271 ] , "thumbnail": "images/img0.jpg", "video": "https://www.youtube.com/embed/0az0t4uJI9M", "caption": "日本の動画0" },
    { "coordinates": [ 139.7404818862039, 35.630246376589362 ] ,  "thumbnail": "images/img0.jpg", "video": "https://www.youtube.com/embed/Hs00WwMtl2s", "caption": "日本の動画1" },
    { "coordinates": [ 139.77705667359774, 35.713791961149241 ] , "thumbnail": "images/img0.jpg", "image": "images/img0.jpg", "caption": "日本の写真2" },
    { "coordinates": [ 139.76722474150262, 35.68153424228494 ] ,  "thumbnail": "images/img0.jpg", "image": "images/img0.jpg", "caption": "日本の写真3" },
    { "coordinates": [ 139.7001709646139, 35.690318577295173 ] ,  "thumbnail": "images/img0.jpg", "image": "images/img0.jpg", "caption": "日本の写真4" }
];


var photoLayer = L.photo.cluster().on('click', function (evt) {
    var photo = evt.layer.photo;
    var template = null;
    if (photo.video) {
        //template = '<video autoplay controls poster="{url}"><source src="{video}" type="video/mp4"/></video>';
        template = '<iframe width="300" src="{video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    } else {
        template = '<img src="{image}" width="300" height="auto"/></a><p>{caption}</p>';
    }
    evt.layer.bindPopup(L.Util.template(template, photo), {
        className: 'leaflet-popup-photo',
        minWidth: 300
    }).openPopup();
});


var photos = [];
for (var ii=0; ii<pointdata.length; ii++) {
    photos.push({
        lat: pointdata[ii]["coordinates"][1],
        lng: pointdata[ii]["coordinates"][0],
        caption: pointdata[ii]["caption"],
        thumbnail: pointdata[ii]["thumbnail"],
        video: pointdata[ii]["video"],
        image: pointdata[ii]["image"],
    });
}
photoLayer.add(photos).addTo(map);
map.fitBounds(photoLayer.getBounds());