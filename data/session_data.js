// このファイルはスケジュールタスク（gyms-session-export）によって毎月自動更新されます
// 手動で編集する場合は以下のフォーマットに従ってください
//
// SESSION_DATA[年][月] = { "店舗名": { "担当者名": { s30: 数値, s60: 数値 } } }

var SESSION_DATA = {};

// === 2026年3月 ===
SESSION_DATA[2026] = SESSION_DATA[2026] || {};
SESSION_DATA[2026][3] = {
  "パーソナルジムTop Ryde 川西能勢口ANNEX店": {
    "鵜飼晃": { s30: 18, s60: 24 }
  },
  "パーソナルジムTop Ryde 阪急池田店": {
    "島村卓也": { s30: 20, s60: 22 }
  },
  "パーソナルジムTop Ryde 茨木市駅前店": {
    "矢野利佳": { s30: 15, s60: 19 }
  },
  "パーソナルジムTop Ryde 阪神西宮店": {
    "芦田崚馬": { s30: 16, s60: 21 }
  },
  "ファーストピラティス池田店": {
    "壹岐和恵": { s30: 11, s60: 25 }
  },
  "ファーストピラティス茨木市駅前店": {
    "屋宜広紀": { s30: 13, s60: 17 }
  },
  "ファーストピラティス中百舌鳥店": {
    "長濱心花音": { s30: 14, s60: 20 }
  }
};

// === 2026年4月（2026-04-30 部分更新） ===
SESSION_DATA[2026] = SESSION_DATA[2026] || {};
SESSION_DATA[2026][4] = {
  "パーソナルジムTop Ryde 川西能勢口ANNEX店": {
    "鵜飼晃": { s30: 100, s60: 66 }
  },
  "パーソナルジムTop Ryde 阪急池田店": {
    "島村卓也": { s30: 54, s60: 119 }
  },
  "パーソナルジムTop Ryde 茨木市駅前店": {
    "矢野利佳": { s30: 54, s60: 143 }
  },
  "パーソナルジムTop Ryde 阪神西宮店": {
    "芦田崚馬": { s30: 35, s60: 80 }
  },
  "ファーストピラティス池田店": {
    "壹岐和恵": { s30: 149, s60: 77 }
  },
  "ファーストピラティス茨木市駅前店": {
    "屋宜広紀": { s30: 39, s60: 50 }
  },
  "ファーストピラティス中百舌鳥店": {
    "長濱心花音": { s30: 79, s60: 48 }
  }
};

// === 2026年5月（2026-06-05 全量更新 / job id=164579 / 仕様書の対象8名ルールで再集計） ===
// 集計（対象8名）: 30分:439 / 60分:481 / 合計:920
SESSION_DATA[2026] = SESSION_DATA[2026] || {};
SESSION_DATA[2026][5] = {
  "パーソナルジムTop Ryde 川西能勢口ANNEX店": {
    "鵜飼晃": { s30: 86, s60: 61 }
  },
  "パーソナルジムTop Ryde 川西能勢口店": {
    "空中泰樹": { s30: 4, s60: 21 }
  },
  "パーソナルジムTop Ryde 阪急池田店": {
    "田口美紀": { s30: 15, s60: 48 }
  },
  "パーソナルジムTop Ryde 茨木市駅前店": {
    "矢野利佳": { s30: 44, s60: 126 }
  },
  "パーソナルジムTop Ryde 阪神西宮店": {
    "芦田崚馬": { s30: 37, s60: 77 }
  },
  "ファーストピラティス池田店": {
    "壹岐和恵": { s30: 143, s60: 67 }
  },
  "ファーストピラティス茨木市駅前店": {
    "屋宜広紀": { s30: 42, s60: 36 }
  },
  "ファーストピラティス中百舌鳥店": {
    "長濱心花音": { s30: 68, s60: 45 }
  }
};

// === 2026年6月（2026-06-30 全量更新 / job id=199090 / 受講済みのみ集計＝GYMS実績基準 / 対象7名） ===
// 集計（対象7名・受講済みのみ）: 30分:451 / 60分:496 / 合計:947
// 【対象外として除外】空中泰樹(実績25本)・島村卓也(当月0本)・担当者空欄(55本) はユーザー指示により集計対象外。
// 【除外】未実施(キャンセル141・当日キャンセル25・予約中19/カウンセリング除く):176件 / カウンセリング:33件（全社）
//   整合性: 受講済み対象7名947 + 受講済み対象外(空中25+空欄55+他0)=80 + カウンセリング33 + 未実施176 = 1236行 = CSVデータ行数 ✓
// 【注記】「予約中」(未実施の未来予約)は本数に含めない＝GYMS管理画面の実績本数基準。term_type=action。
SESSION_DATA[2026] = SESSION_DATA[2026] || {};
SESSION_DATA[2026][6] = {
  "パーソナルジムTop Ryde 川西能勢口ANNEX店": {
    "鵜飼晃": { s30: 83, s60: 71 }
  },
  "パーソナルジムTop Ryde 阪急池田店": {
    "田口美紀": { s30: 27, s60: 72 }
  },
  "パーソナルジムTop Ryde 茨木市駅前店": {
    "矢野利佳": { s30: 54, s60: 121 }
  },
  "パーソナルジムTop Ryde 阪神西宮店": {
    "芦田崚馬": { s30: 42, s60: 80 }
  },
  "ファーストピラティス池田店": {
    "壹岐和恵": { s30: 122, s60: 64 }
  },
  "ファーストピラティス茨木市駅前店": {
    "屋宜広紀": { s30: 45, s60: 41 }
  },
  "ファーストピラティス中百舌鳥店": {
    "長濱心花音": { s30: 78, s60: 47 }
  }
};

// === 2026年7月（2026-07-17 自動更新 / job id=221922 = 当月フルエクスポート(7/17 06:04 JST) / 予約中+受講済み＝当月進行中のため予定含む） ===
// 集計(対象8名): 30分:455 / 60分:574 / 合計:1029（うち受講済みのみ=490）
// 整合性: 対象8名(予約中+受講済み)1029 + キャンセル/当日キャンセル134 + 対象外担当29 + カウンセリング16 = 1208行 = CSVデータ行数 ✓
SESSION_DATA[2026] = SESSION_DATA[2026] || {};
SESSION_DATA[2026][7] = {
  "パーソナルジムTop Ryde 川西能勢口ANNEX店": { "鵜飼晃": { s30: 85, s60: 95 } },
  "パーソナルジムTop Ryde 川西能勢口店": { "空中泰樹": { s30: 4, s60: 19 } },
  "パーソナルジムTop Ryde 阪急池田店": { "島村卓也": { s30: 0, s60: 0 }, "田口美紀": { s30: 14, s60: 72 } },
  "パーソナルジムTop Ryde 茨木市駅前店": { "矢野利佳": { s30: 50, s60: 132 } },
  "パーソナルジムTop Ryde 阪神西宮店": { "芦田崚馬": { s30: 35, s60: 82 } },
  "ファーストピラティス池田店": { "壹岐和恵": { s30: 123, s60: 76 } },
  "ファーストピラティス茨木市駅前店": { "屋宜広紀": { s30: 46, s60: 53 } },
  "ファーストピラティス中百舌鳥店": { "長濱心花音": { s30: 98, s60: 45 } }
};

// ======================================================================
// 当日キャンセル明細（ラベル基準: GYMSの状態欄が「当日キャンセル」の行）
// 5月:2026-06-05取得(27件) / 6月:2026-06-28取得(23件)
// CANCEL_DATA[年][月] = [ { store, staff, date, time, name, dur, cxlAt } ]
// ======================================================================
var CANCEL_DATA = {};
CANCEL_DATA[2026] = {};
CANCEL_DATA[2026][5] = [
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"5/6", time:"11:00", name:"眞田颯", dur:30, cxlAt:"5/6 11:20" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"5/6", time:"11:30", name:"眞田颯", dur:30, cxlAt:"5/6 11:20" },
  { store:"パーソナルジムTop Ryde 茨木市駅前店", staff:"矢野利佳", date:"5/7", time:"16:00", name:"木村央", dur:60, cxlAt:"5/7 13:12" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"5/8", time:"09:00", name:"山村慶華", dur:60, cxlAt:"5/8 08:33" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"5/8", time:"18:30", name:"眞田颯", dur:30, cxlAt:"5/8 08:33" },
  { store:"パーソナルジムTop Ryde 茨木市駅前店", staff:"矢野利佳", date:"5/8", time:"20:00", name:"末岡彩", dur:60, cxlAt:"5/8 19:09" },
  { store:"パーソナルジムTop Ryde 阪急池田店", staff:"田口美紀", date:"5/10", time:"14:00", name:"咲山絢菜", dur:60, cxlAt:"5/10 12:18" },
  { store:"パーソナルジムTop Ryde 阪神西宮店", staff:"芦田崚馬", date:"5/10", time:"16:00", name:"後藤暁", dur:60, cxlAt:"5/10 15:47" },
  { store:"パーソナルジムTop Ryde 茨木市駅前店", staff:"矢野利佳", date:"5/12", time:"17:00", name:"木村央", dur:60, cxlAt:"5/12 17:46" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"5/13", time:"11:00", name:"近間 海帆", dur:60, cxlAt:"5/13 11:47" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"5/17", time:"09:00", name:"芳村穂華", dur:60, cxlAt:"5/17 08:28" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"5/18", time:"18:00", name:"眞田颯", dur:30, cxlAt:"5/18 18:10" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"5/20", time:"11:30", name:"近間 海帆", dur:60, cxlAt:"5/20 12:26" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"5/21", time:"11:30", name:"渡部陽子", dur:30, cxlAt:"5/21 10:14" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"5/22", time:"11:00", name:"近間 海帆", dur:60, cxlAt:"5/22 11:06" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"5/22", time:"17:30", name:"藤原知沙", dur:60, cxlAt:"5/22 15:21" },
  { store:"パーソナルジムTop Ryde 茨木市駅前店", staff:"矢野利佳", date:"5/23", time:"19:30", name:"永野沙也加", dur:60, cxlAt:"5/23 19:30" },
  { store:"ファーストピラティス中百舌鳥店", staff:"長濱心花音", date:"5/25", time:"16:30", name:"楠井幸子", dur:60, cxlAt:"5/25 14:50" },
  { store:"ファーストピラティス池田店", staff:"壹岐和恵", date:"5/26", time:"17:00", name:"串田仁恵", dur:60, cxlAt:"5/26 16:21" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"5/27", time:"16:30", name:"小室了祐", dur:60, cxlAt:"5/27 16:29" },
  { store:"パーソナルジムTop Ryde 阪神西宮店", staff:"芦田崚馬", date:"5/28", time:"09:00", name:"中谷裕美", dur:30, cxlAt:"5/28 08:23" },
  { store:"パーソナルジムTop Ryde 阪神西宮店", staff:"芦田崚馬", date:"5/28", time:"09:30", name:"中谷裕美", dur:30, cxlAt:"5/28 08:23" },
  { store:"パーソナルジムTop Ryde 茨木市駅前店", staff:"矢野利佳", date:"5/28", time:"18:00", name:"漆畑悠希", dur:60, cxlAt:"5/28 18:09" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"5/29", time:"11:00", name:"近間 海帆", dur:60, cxlAt:"5/29 12:26" },
  { store:"ファーストピラティス中百舌鳥店", staff:"長濱心花音", date:"5/31", time:"10:30", name:"舟井優衣", dur:30, cxlAt:"5/30 10:13" },
  { store:"ファーストピラティス中百舌鳥店", staff:"長濱心花音", date:"5/31", time:"11:00", name:"舟井優衣", dur:30, cxlAt:"5/30 10:13" },
  { store:"パーソナルジムTop Ryde 阪神西宮店", staff:"芦田崚馬", date:"5/31", time:"16:00", name:"春田　聖子", dur:60, cxlAt:"5/31 15:58" }
];
CANCEL_DATA[2026][6] = [
  { store:"パーソナルジムTop Ryde 茨木市駅前店", staff:"矢野利佳", date:"6/23", time:"12:30", name:"古賀博", dur:60, cxlAt:"6/22 17:18" },
  { store:"パーソナルジムTop Ryde 茨木市駅前店", staff:"矢野利佳", date:"6/27", time:"11:00", name:"永野沙也加", dur:60, cxlAt:"6/27 09:43" },
  { store:"パーソナルジムTop Ryde 茨木市駅前店", staff:"矢野利佳", date:"6/26", time:"18:00", name:"木口愛理", dur:60, cxlAt:"6/26 18:03" },
  { store:"パーソナルジムTop Ryde 阪神西宮店", staff:"芦田崚馬", date:"6/25", time:"10:00", name:"近藤綾子", dur:60, cxlAt:"6/25 08:38" },
  { store:"パーソナルジムTop Ryde 阪神西宮店", staff:"芦田崚馬", date:"6/8", time:"11:00", name:"林加奈", dur:60, cxlAt:"6/8 11:03" },
  { store:"パーソナルジムTop Ryde 阪神西宮店", staff:"芦田崚馬", date:"6/18", time:"09:30", name:"中谷裕美", dur:30, cxlAt:"6/18 09:02" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"6/8", time:"18:00", name:"山元隆嘉", dur:60, cxlAt:"6/8 18:53" },
  { store:"ファーストピラティス池田店", staff:"壹岐和恵", date:"6/18", time:"17:00", name:"串田仁恵", dur:60, cxlAt:"6/18 17:16" },
  { store:"パーソナルジムTop Ryde 茨木市駅前店", staff:"矢野利佳", date:"6/6", time:"17:00", name:"横溝亜矢", dur:60, cxlAt:"6/6 17:17" },
  { store:"パーソナルジムTop Ryde 阪急池田店", staff:"田口美紀", date:"6/4", time:"19:00", name:"八代恵", dur:30, cxlAt:"6/4 19:26" },
  { store:"ファーストピラティス池田店", staff:"壹岐和恵", date:"6/12", time:"18:00", name:"清水亜衣", dur:30, cxlAt:"6/12 18:04" },
  { store:"パーソナルジムTop Ryde 茨木市駅前店", staff:"矢野利佳", date:"6/9", time:"14:00", name:"松尾詞音", dur:60, cxlAt:"6/9 14:38" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"6/12", time:"09:00", name:"山村慶華", dur:60, cxlAt:"6/12 09:25" },
  { store:"パーソナルジムTop Ryde 阪急池田店", staff:"田口美紀", date:"6/26", time:"22:00", name:"山中泰幸", dur:30, cxlAt:"6/26 22:09" },
  { store:"パーソナルジムTop Ryde 阪急池田店", staff:"田口美紀", date:"6/26", time:"22:30", name:"山中泰幸", dur:30, cxlAt:"6/26 22:09" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"6/14", time:"15:30", name:"河野直子", dur:60, cxlAt:"6/14 16:03" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"6/28", time:"15:30", name:"河野直子", dur:60, cxlAt:"6/28 15:38" },
  { store:"パーソナルジムTop Ryde 茨木市駅前店", staff:"矢野利佳", date:"6/19", time:"14:00", name:"今井由紀", dur:60, cxlAt:"6/19 13:38" },
  { store:"パーソナルジムTop Ryde 阪神西宮店", staff:"芦田崚馬", date:"6/18", time:"09:00", name:"中谷裕美", dur:30, cxlAt:"6/18 09:02" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"6/18", time:"11:00", name:"近間 海帆", dur:60, cxlAt:"6/18 12:01" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"6/24", time:"18:00", name:"眞田颯", dur:30, cxlAt:"6/24 17:53" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"6/24", time:"18:30", name:"眞田颯", dur:30, cxlAt:"6/24 17:53" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"6/26", time:"09:00", name:"眞田颯", dur:30, cxlAt:"6/26 10:34" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"6/26", time:"09:30", name:"眞田颯", dur:30, cxlAt:"6/26 10:34" }
];

// 7月:2026-07-17取得(12件)
CANCEL_DATA[2026][7] = [
  { store:"パーソナルジムTop Ryde 阪神西宮店", staff:"芦田崚馬", date:"7/1", time:"18:00", name:"林加奈", dur:60, cxlAt:"7/1 18:25" },
  { store:"パーソナルジムTop Ryde 阪神西宮店", staff:"芦田崚馬", date:"7/2", time:"09:00", name:"中谷裕美", dur:30, cxlAt:"7/2 10:00" },
  { store:"パーソナルジムTop Ryde 阪神西宮店", staff:"芦田崚馬", date:"7/2", time:"09:30", name:"中谷裕美", dur:30, cxlAt:"7/2 10:00" },
  { store:"ファーストピラティス池田店", staff:"壹岐和恵", date:"7/7", time:"10:30", name:"盛井裕美", dur:30, cxlAt:"7/7 08:36" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"7/10", time:"10:30", name:"山村慶華", dur:60, cxlAt:"7/10 11:00" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"7/10", time:"18:00", name:"眞田颯", dur:30, cxlAt:"7/10 18:34" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"7/10", time:"18:30", name:"眞田颯", dur:30, cxlAt:"7/10 18:34" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"7/12", time:"14:00", name:"西恵野", dur:30, cxlAt:"7/12 14:58" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"7/13", time:"17:30", name:"芳村穂華", dur:60, cxlAt:"7/13 16:46" },
  { store:"パーソナルジムTop Ryde 茨木市駅前店", staff:"矢野利佳", date:"7/14", time:"12:30", name:"古賀博", dur:60, cxlAt:"7/14 12:29" },
  { store:"パーソナルジムTop Ryde 川西能勢口ANNEX店", staff:"鵜飼晃", date:"7/15", time:"11:30", name:"近間 海帆", dur:60, cxlAt:"7/15 11:36" },
  { store:"パーソナルジムTop Ryde 茨木市駅前店", staff:"矢野利佳", date:"7/15", time:"12:30", name:"松尾詞音", dur:60, cxlAt:"7/15 09:58" }
];

// ======================================================================
// 月次継続率 / 体験→入会率（2026-06-28 算出 / 5月(job 196893)・6月(job 196892)CSVで顧客ID突合）
// RETENTION_DATA[年][月][担当] = { num: 継続人数, den: 前月来店人数 }（月次継続率＝前月比）
// CONVERSION_DATA[担当] = { cs: 体験(カウンセリング)人数, joined: その後通常セッションに来た人数 }（5〜6月）
// ======================================================================
var RETENTION_DATA = {};
RETENTION_DATA[2026] = {};
RETENTION_DATA[2026][6] = {
  "鵜飼晃":{num:34,den:37}, "空中泰樹":{num:5,den:5}, "田口美紀":{num:14,den:15}, "矢野利佳":{num:39,den:39},
  "芦田崚馬":{num:26,den:26}, "壹岐和恵":{num:44,den:47}, "屋宜広紀":{num:18,den:19}, "長濱心花音":{num:27,den:29}
};
// 2026-07-17 更新（6月受講済み顧客のうち7月に受講済み/予約中がある顧客 / job 221922,221923・値は前回と一致）
RETENTION_DATA[2026][7] = {
  "鵜飼晃":{num:34,den:38}, "空中泰樹":{num:5,den:6}, "田口美紀":{num:20,den:25}, "矢野利佳":{num:41,den:43},
  "芦田崚馬":{num:26,den:29}, "壹岐和恵":{num:40,den:44}, "屋宜広紀":{num:19,den:22}, "長濱心花音":{num:30,den:31}
};
var CONVERSION_DATA = {
  "鵜飼晃":{cs:9,joined:5}, "空中泰樹":{cs:0,joined:0}, "田口美紀":{cs:16,joined:5}, "矢野利佳":{cs:3,joined:3},
  "芦田崚馬":{cs:5,joined:5}, "壹岐和恵":{cs:9,joined:4}, "屋宜広紀":{cs:12,joined:6}, "長濱心花音":{cs:14,joined:7}
};

// ======================================================================
// 来店率・当日キャンセル率（カウンセリング除く）
// RATE_DATA[年][月][担当] = { done: 受講済み, daycxl: 当日キャンセル, cxl: 通常キャンセル }
// 分母=done+daycxl+cxl（日付が確定したセッション。予約中=未来分は除外）
// 来店率（=消化率）= done/分母 ／ 当日キャンセル率 = daycxl/分母
// ======================================================================
var RATE_DATA = {};
RATE_DATA[2026] = {};
RATE_DATA[2026][5] = {
  "鵜飼晃":{done:147,daycxl:13,cxl:9}, "空中泰樹":{done:25,daycxl:0,cxl:3}, "田口美紀":{done:63,daycxl:1,cxl:22}, "矢野利佳":{done:170,daycxl:5,cxl:14},
  "芦田崚馬":{done:114,daycxl:4,cxl:13}, "壹岐和恵":{done:210,daycxl:1,cxl:43}, "屋宜広紀":{done:78,daycxl:0,cxl:2}, "長濱心花音":{done:113,daycxl:3,cxl:14}
};
// 2026-06-29 更新（job 197615 / 当月確定分）
RATE_DATA[2026][6] = {
  "鵜飼晃":{done:147,daycxl:9,cxl:12}, "空中泰樹":{done:25,daycxl:0,cxl:5}, "田口美紀":{done:93,daycxl:3,cxl:16}, "矢野利佳":{done:175,daycxl:6,cxl:19},
  "芦田崚馬":{done:119,daycxl:4,cxl:6}, "壹岐和恵":{done:173,daycxl:2,cxl:35}, "屋宜広紀":{done:86,daycxl:0,cxl:11}, "長濱心花音":{done:120,daycxl:0,cxl:24}
};
// 2026-07-17 更新（job 221922 / 7月確定分・カウンセリング除く）
RATE_DATA[2026][7] = {
  "鵜飼晃":{done:86,daycxl:6,cxl:2}, "空中泰樹":{done:11,daycxl:0,cxl:8}, "田口美紀":{done:48,daycxl:0,cxl:20}, "矢野利佳":{done:87,daycxl:2,cxl:16},
  "芦田崚馬":{done:57,daycxl:3,cxl:8}, "壹岐和恵":{done:85,daycxl:1,cxl:29}, "屋宜広紀":{done:52,daycxl:0,cxl:5}, "長濱心花音":{done:64,daycxl:0,cxl:31}
};

// ======================================================================
// セッション稼働率（最大母数=133.33時間/月・全員一律：月商目標120万円 ÷ 9000円/時 ≒ 133本=133時間）
// UTIL_DATA[年][月][担当] = { hours: 実施セッション時間(30分=0.5h/60分=1h), workdays: 実働日数(参考) }
// 実施=受講済みのみ（カウンセリング除く）。稼働率 = hours ÷ MAX_MONTHLY_HOURS（100%=月商120万円ライン到達）
// ======================================================================
var MAX_MONTHLY_HOURS = 133.33;
var UTIL_DATA = {};
UTIL_DATA[2026] = {};
UTIL_DATA[2026][5] = {
  "鵜飼晃":{hours:104,workdays:27}, "空中泰樹":{hours:23,workdays:15}, "田口美紀":{hours:55.5,workdays:17}, "矢野利佳":{hours:148,workdays:26},
  "芦田崚馬":{hours:95.5,workdays:21}, "壹岐和恵":{hours:138.5,workdays:24}, "屋宜広紀":{hours:57,workdays:26}, "長濱心花音":{hours:79,workdays:22}
};
// 2026-06-29 更新（job 197615 / 実施=受講済み）
UTIL_DATA[2026][6] = {
  "鵜飼晃":{hours:107,workdays:24}, "空中泰樹":{hours:23,workdays:13}, "田口美紀":{hours:80.5,workdays:22}, "矢野利佳":{hours:148,workdays:22},
  "芦田崚馬":{hours:98.5,workdays:20}, "壹岐和恵":{hours:117.5,workdays:21}, "屋宜広紀":{hours:63.5,workdays:24}, "長濱心花音":{hours:83.5,workdays:20}
};
// 2026-07-17 更新（job 221922 / 実施=受講済み 7月分）
UTIL_DATA[2026][7] = {
  "鵜飼晃":{hours:66.5,workdays:14}, "空中泰樹":{hours:11,workdays:7}, "田口美紀":{hours:42.5,workdays:13}, "矢野利佳":{hours:76,workdays:13},
  "芦田崚馬":{hours:47,workdays:13}, "壹岐和恵":{hours:56.5,workdays:10}, "屋宜広紀":{hours:41,workdays:15}, "長濱心花音":{hours:44.5,workdays:11}
};
