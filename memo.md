### Webサイト

#### day-journal
* <https://day-journal.com/>
* <https://day-journal.com/memo/book-001/>
* <https://techbookfest.org/event/tbf06/circle/64070001>
* <https://github.com/dayjournal/JSWebMapApp>

#### common

* [「GIS実習オープン教材」](https://gis-oer.github.io/gitbook/book/)
    - [Leaflet入門](https://gis-oer.github.io/gitbook/book/materials/web_gis/Leaflet/Leaflet.html)

----

Leaflet
----
* [Leaflet](https://leafletjs.com/)

* [Leaflet/Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)
* [turban/Leaflet.Photo](https://github.com/turban/Leaflet.Photo)

* [地図ライブラリ「Leaflet」にcluster機能を追加する](https://qiita.com/mitch0807/items/52698a561d4255578657)
* [自作地図: leafletで使えるおすすめプラグインまとめ](https://qiita.com/pokohide/items/6329f1f92253ced23599)

----

Google Sheet
----
* [Google Sheets APIでセルの値を読み込む方法](https://qiita.com/howdy39/items/5473160c93030c386c2d)


----

メモ
-----

### ライブラリー

    $ npm install leaflet --save
    $ npm install leaflet.markercluster --save

    copy [turban/Leaflet.Photo](https://github.com/turban/Leaflet.Photo)

### ワンライナーWebサーバ

* [ワンライナーWebサーバを集めてみた](https://qiita.com/sudahiroshi/items/e74d61d939f18779970d)

#### インストール(グローバル)
    
    $ npm install -g http-server
    $ http-server -p 8000

#### インストール(ローカル)

    $ npm install http-server --save
    $ ./node_modules/.bin/http-server -p 8000
    　or
    $(npm bin)/http-server -p 8000
