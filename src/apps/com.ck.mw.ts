import { defineAppConfig } from '../types';
export default defineAppConfig({
  "id": "com.ck.mw",
  "name": "漫士多",
  "groups": [
    {
      "key": 1,
      "name": "开屏广告",
      "rules": [
        {
          "activityIds": "com.aster.comic.app.ad.view.mediation.MediationSplashAdActivity",
          "matches": "[id='com.byted.pangle.m:id/tt_splash_skip_btn']",
          "snapshotUrls": "https://i.gkd.li/import/13483091"
        }
      ]
    },
    {
      "key": 2,
      "name": "切屏广告",
      "desc": "在该应用切至后台一段时间后再次进入产生的广告",
      "rules": [
        {
          "activityIds": "com.aster.comic.app.view.reader.ReaderActivity",
          "matches": "[id='com.byted.pangle.m:id/tt_splash_skip_btn']",
          "snapshotUrls": "https://i.gkd.li/import/13484006"
        }
      ]
    }
  ]
});
