
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '520',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '元為嘉做的第一個app', },
    // { key: 's', wording: '这是第二行文案', },
    // { key: 'd', wording: '然后，这里是第三行文案', },
  ],
  // 最终解释权归属人
  owner: 'Hamilton Chang',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: 'Dior雙飛套裝', alias: 'Dior雙飛', image: '/images/1.png',  description: '「經典迷人色彩，彰顯奢華魅力」' },
  { key: 'w', name: 'Netflix會員', alias: 'Netflix', image: '/images/2.png',  description: '“讓我們像家人一樣生活”' },
  { key: 'e', name: '蘭蔻小黑瓶', alias: '小黑瓶', image: '/images/3.png',  description: '「一小瓶、絕對平」' },
  { key: 'r', name: '520紅包', alias: '520', image: '/images/6.png',  description: '“給你唱一首情歌”' },
  { key: 't', name: 'Dior星空套裝', alias: 'Dior星空', image: '/images/5.png',  description: '「百變唇妝，精雕細琢」' },
  { key: 'y', name: '1314紅包', alias: '1314', image: '/images/6.png',  description: '“愛不敢輕易說出口，但做比說更有力”' },
  { key: 'u', name: '清空購物車', alias: 'UR', image: '/images/7.png',  description: '“買買買”' },
  { key: 'i', name: '男友手作精美禮物', alias: '手作', image: '/images/8.png',  description: '「不求盡善盡美、但求心意無限」' },
];
