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
* [Google Sheets API v4を適当に叩いて適当にデータをJSONで取得する](http://taiki-t.hatenablog.com/entry/2016/10/14/031124)


#### Google Sheets API v4 
* [Acquiring and using an API key ](https://developers.google.com/sheets/api/guides/authorizing#APIKey)
* [Google Sheets API v4を適当に叩いて適当にデータをJSONで取得する](http://taiki-t.hatenablog.com/entry/2016/10/14/031124)

API Keyを取得
---
1. [Google Cloud Platform](https://console.developers.google.com/apis/credentials)
2. プロジェクト名が〜」とか言われたらなんか入れる
3.左のメニューから「認証情報」をクリック
4. 右側の画面内「認証情報を作成」をクリック
5. 「APIキー」をクリック
6.  画面に表示されたら作成されたAPIキーの「キー」をコピー


    https://sheets.googleapis.com/v4/spreadsheets/{spreadsheet_id}/values/range=image!A1:B1?key={API KEY}

    rangeは、シート名とセルを指定。例) Sheet1!A1:B1

----

メモ
-----

### ライブラリー

    $ npm install leaflet --save
    $ npm install leaflet.markercluster --save
    $ npm install timelinejs3 --save   --> @3.4.0 (最新版@3.6.3がGitHubにある)

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

参考
----
* [Historypin](https://www.historypin.org/en/)
* [Open source SNS engine -  Flockbird](https://demo.flockbird.uzura.work/)
    - [uzura8/flockbird](https://github.com/uzura8/flockbird)
* [okfn/csv.js](https://github.com/okfn/csv.js)

### OKFN & NUKnightLab
* [NUKnightLab](https://knightlab.northwestern.edu/community/)
    - [GitHub](https://github.com/NUKnightLab/)
* [okfn/timemapper](https://github.com/okfn/timemapper)
    - [demo](https://timemapper.okfnlabs.org/)
    - [[DEPRECATED] okfn/timeliner](https://github.com/okfn/timeliner)
* [ReclineJS](http://okfnlabs.org/recline/)
    - [okfn/recline](https://github.com/okfn/recline)
* [TimelineJS](https://timeline.knightlab.com/)
    - [NUKnightLab/TimelineJS3](https://github.com/NUKnightLab/TimelineJS3)
    - [お手軽Linked Open Data可視化ツールSPARQL Timeliner ](https://www.slideshare.net/uedayou/linked-open-datasparql-timeliner)
    - [SparqlEPCU](http://lodcu6.isc.chubu.ac.jp/SparqlEPCU/)
    - [SPARQL Timeliner](http://uedayou.net/SPARQLTimeliner/)

* [StoryMapJS](https://storymap.knightlab.com/)
    - [NUKnightLab/StoryMapJS](https://github.com/NUKnightLab/StoryMapJS)
* [JuxtaposeJS](https://juxtapose.knightlab.com/)
    - [NUKnightLab/juxtapose](https://github.com/NUKnightLab/juxtapose)
* [Soundcite](http://soundcite.knightlab.com/)
    - [NUKnightLab/soundcite](https://github.com/NUKnightLab/soundcite)
    
    
デジタルアーカイブ
---
* [Wikipedia - デジタルアーカイブ](https://ja.wikipedia.org/wiki/デジタルアーカイブ]
* [国立国会図書館デジタルコレクション](http://dl.ndl.go.jp/)
* [NHKアーカイブス](https://www.nhk.or.jp/archives/index.html)
* [国土地理院 地図・空中写真閲覧サービス（旧・国土変遷アーカイブ 空中写真閲覧システム）](http://mapps.gsi.go.jp/maplibSearch.do)
* [ジャパンサーチ](https://jpsearch.go.jp/)
* [デジタルアーカイブ学会](http://digitalarchivejapan.org/)
* [日本アーカイブズ学会](http://www.jsas.info/)
