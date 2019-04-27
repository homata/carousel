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

// 地理院タイル　空中写真・衛星画像 2007年～
var gsi_ort = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg', {
    maxZoom: 18,
    attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>国土地理院</a>"
});

// OSM
var osm_std = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 28
});

// stamen
var stamen_terrain = L.tileLayer('http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>,<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash;Map data: &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
});

// MIERUNE
var m_mierune = new L.tileLayer("https://tile.mierune.co.jp/mierune/{z}/{x}/{y}.png", {
    attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
});

// MIERUNE MONO読み込み
var m_mono = new L.tileLayer("https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png", {
    attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
});


//-------------------
//
//-------------------

// Map読み込み
var map = L.map("map", {
    center: [35.6810,139.7670],
    zoom: 14,
    layers: [osm_std]
});

var maps = {
    "標準地図": gsi_std,
    "淡色地図": gsi_pale,
    "空中写真（2007～）":gsi_ort,
    "OSM":osm_std,
    "Stamen(Terrain)":stamen_terrain,
    "MIERUNE": m_mierune,
    "MIERUNE MONO": m_mono,
};

// 地図を切り替え表示するためのウィンドウを追加する
L.control.layers(maps).addTo(map);

/*
L.marker([35.6810,139.7670]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
*/

//マーカークラスター設定
var PointAll = L.markerClusterGroup({
    showCoverageOnHover: false,
    spiderfyOnMaxZoom: true,
    removeOutsideVisibleBounds: true,
    disableClusteringAtZoom: 18
});

//GeoJSON設定
var pointdata = {
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 5 }, "geometry": { "type": "Point", "coordinates": [ 139.73025667682498, 35.684728657838271 ] } },
        { "type": "Feature", "properties": { "id": 4 }, "geometry": { "type": "Point", "coordinates": [ 139.7404818862039, 35.630246376589362 ] } },
        { "type": "Feature", "properties": { "id": 3 }, "geometry": { "type": "Point", "coordinates": [ 139.77705667359774, 35.713791961149241 ] } },
        { "type": "Feature", "properties": { "id": 2 }, "geometry": { "type": "Point", "coordinates": [ 139.76722474150262, 35.68153424228494 ] } },
        { "type": "Feature", "properties": { "id": 1 }, "geometry": { "type": "Point", "coordinates": [ 139.7001709646139, 35.690318577295173 ] } }
    ]};
PointAll.addLayer(L.geoJson(pointdata, {
    onEachFeature: function (feature, layer) {
        var field = "id: " + feature.properties.id;
        layer.bindPopup(field);
    },
    clickable: true
}));
map.addLayer(PointAll);
