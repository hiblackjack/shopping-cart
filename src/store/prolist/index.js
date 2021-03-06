
const state = {
  lipstickData: {
    title: '美丽人生 口红',
    bannerUrl: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/big-banner/lipstick.jpg',
    list: [
      {
        id: '1',
        type: 'lipstick',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/dior-1.jpg',
        brandName: 'Dior/迪奥',
        title: '烈艳蓝金唇膏',
        tags: '滋润 保湿 防水',
        price: '299',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-3.jpg',
          },
        ],
      },
      {
        id: '2',
        type: 'lipstick',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/chanel.jpg',
        brandName: '香奈儿',
        title: '炫亮魅力唇膏',
        tags: '美美滋润轻盈如丝多色',
        price: '299',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-3.jpg',
          },
        ],
      },
      {
        id: '3',
        type: 'lipstick',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/estee-1.jpg',
        brandName: 'Estee Lauder/雅诗兰黛',
        title: '倾慕唇膏魅色系列',
        tags: '光感显色科技 双唇浓郁饱满 保色',
        price: '270',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-3.jpg',
          },
        ],
      },
      {
        id: '4',
        type: 'lipstick',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/dior-2.jpg',
        brandName: '【直营】Christian Dior',
        title: '迪奥粉漾诱惑变色润唇膏',
        tags: '变色口红 3.5g',
        price: '299',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-3.jpg',
          },
        ],
      },
      {
        id: '5',
        type: 'lipstick',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/estee-2.jpg',
        brandName: 'Estee Lauder/雅诗兰黛',
        title: '雅诗兰黛倾慕唇膏-丝绒系列',
        tags: '气质哑光 柔滑质感 保湿',
        price: '270',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-3.jpg',
          },
        ],
      },
      {
        id: '6',
        type: 'lipstick',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/lancome-1.jpg',
        brandName: 'Lancome/兰蔻',
        title: '菁纯柔润丝缎唇膏',
        tags: '柔滑丝润 妆效持久',
        price: '270',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-3.jpg',
          },
        ],
      },
      {
        id: '7',
        type: 'lipstick',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/dior-3.jpg',
        brandName: 'Dior/迪奥',
        title: '粉漾诱惑润唇膏',
        tags: '滋润,保湿,持久,易上色,不易脱色',
        price: '209',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-3.jpg',
          },
        ],
      },
      {
        id: '8',
        type: 'lipstick',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/carslan.jpg',
        brandName: 'CARSLAN/卡姿兰',
        title: ' 金致胶原美芯唇膏',
        tags: '补湿滋润',
        price: '109',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-mini-list/kouhong-list-3.jpg',
          },
        ],
      },
    ],
  },
  femaleBagData: {
    title: '美丽人生 女包',
    bannerUrl: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/big-banner/female-bag.jpg',
    list: [
      {
        id: '11',
        type: 'femaleBag',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-small/1.jpg',
        brandName: '女士韩版百搭简约时尚斜挎包',
        title: '',
        tags: '',
        price: '289',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-3.jpg',
          },
        ],
      },
      {
        id: '12',
        type: 'femaleBag',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-small/2.jpg',
        brandName: '小包包女2018新款潮韩版百搭斜挎小方',
        title: '',
        tags: '',
        price: '218',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-3.jpg',
          },
        ],
      },
      {
        id: '13',
        type: 'femaleBag',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-small/3.jpg',
        brandName: '【直营】COACH 蔻驰',
        title: '女士PVC小号手',
        tags: '',
        price: '1298',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-3.jpg',
          },
        ],
      },
      {
        id: '14',
        type: 'femaleBag',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-small/4.jpg',
        brandName: 'CHARLES＆KEITH',
        title: '单肩包',
        tags: 'CK2-20670',
        price: '399',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-3.jpg',
          },
        ],
      },
      {
        id: '15',
        type: 'femaleBag',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-small/5.jpg',
        brandName: '韩版个性时尚百搭手提链条少女包',
        title: '',
        tags: '',
        price: '279',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-3.jpg',
          },
        ],
      },
      {
        id: '16',
        type: 'femaleBag',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-small/6.jpg',
        brandName: '【直营】 COACH 蔻驰 ',
        title: '女士牛皮小号',
        tags: '',
        price: '1058',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-3.jpg',
          },
        ],
      },
      {
        id: '17',
        type: 'femaleBag',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-small/7.jpg',
        brandName: '朱尔大气真皮时尚头层牛皮女士斜挎包',
        title: '',
        tags: '',
        price: '249',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-3.jpg',
          },
        ],
      },
      {
        id: '18',
        type: 'femaleBag',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-small/8.jpg',
        brandName: '稻草人复古单肩韩版简约女士斜挎包',
        title: ' ',
        tags: '',
        price: '179',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-mini-list/package-mini-3.jpg',
          },
        ],
      },
    ],
  },
  highHeeledData: {
    title: '美丽人生 高跟鞋',
    bannerUrl: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/big-banner/high-heeled.jpg',
    list: [
      {
        id: '21',
        type: 'highHeeled',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-small/1.jpg',
        brandName: 'CHARLES＆KEITH',
        title: '春季单鞋女',
        tags: 'CK1-603',
        price: '339',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-3.jpg',
          },
        ],
      },
      {
        id: '22',
        type: 'highHeeled',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-small/2.jpg',
        brandName: 'CHARLES＆KEITH',
        title: '凉鞋',
        tags: 'CK1-60361072',
        price: '399',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-3.jpg',
          },
        ],
      },
      {
        id: '23',
        type: 'highHeeled',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-small/3.jpg',
        brandName: '哥弟女鞋',
        title: '2018春季新款休闲鞋',
        tags: '厚底小白',
        price: '199',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-3.jpg',
          },
        ],
      },
      {
        id: '24',
        type: 'highHeeled',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-small/4.jpg',
        brandName: 'daphne',
        title: '优雅蕾丝性感尖头浅口高跟鞋',
        tags: '',
        price: '159',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-3.jpg',
          },
        ],
      },
      {
        id: '25',
        type: 'highHeeled',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-small/5.jpg',
        brandName: '达芙妮',
        title: '春夏羊皮尖头浅口细跟',
        tags: '高跟鞋',
        price: '299',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-3.jpg',
          },
        ],
      },
      {
        id: '26',
        type: 'highHeeled',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-small/6.jpg',
        brandName: '哥弟',
        title: '春季粗跟真皮浅口圆头',
        tags: '高跟鞋',
        price: '550',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-3.jpg',
          },
        ],
      },
      {
        id: '27',
        type: 'highHeeled',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-small/7.jpg',
        brandName: '卓诗尼',
        title: '夏季超高跟坡跟凉鞋',
        tags: '',
        price: '199',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-3.jpg',
          },
        ],
      },
      {
        id: '28',
        type: 'highHeeled',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-small/8.jpg',
        brandName: '卓诗尼',
        title: '夏季粗跟高跟凉鞋',
        tags: '',
        price: '199',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-mini-list/highHeeled-mini-3.jpg',
          },
        ],
      },
    ],
  },
  weddingDressData: {
    title: '美丽人生 婚纱',
    bannerUrl: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/big-banner/wedding-dress.jpg',
    list: [
      {
        id: '31',
        type: 'weddingDress',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-small/1.jpg',
        brandName: '森系一字肩拖尾公主梦幻显瘦婚纱',
        title: '',
        tags: '',
        price: '1898',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/3.jpg',
          },
        ],
      },
      {
        id: '32',
        type: 'weddingDress',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-small/2.jpg',
        brandName: '一字肩简约森系拖尾公主梦幻显瘦婚纱',
        title: '',
        tags: '',
        price: '898',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/3.jpg',
          },
        ],
      },
      {
        id: '33',
        type: 'weddingDress',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-small/3.jpg',
        brandName: '宫廷公主拖尾显瘦一字肩梦幻婚纱',
        title: '',
        tags: '',
        price: '1585',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/3.jpg',
          },
        ],
      },
      {
        id: '34',
        type: 'weddingDress',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-small/4.jpg',
        brandName: '公主梦幻春季长拖尾一字肩森系婚纱',
        title: '',
        tags: '',
        price: '1578.27',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/3.jpg',
          },
        ],
      },
      {
        id: '35',
        type: 'weddingDress',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-small/5.jpg',
        brandName: '彩纱长拖尾一字肩韩式显瘦欧美婚纱',
        title: '',
        tags: '',
        price: '1889',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/3.jpg',
          },
        ],
      },
      {
        id: '36',
        type: 'weddingDress',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-small/6.jpg',
        brandName: '满庭芳欧美春季一字肩森系婚纱',
        title: '',
        tags: '',
        price: '1782',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/3.jpg',
          },
        ],
      },
      {
        id: '37',
        type: 'weddingDress',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-small/7.jpg',
        brandName: '一字肩韩式大码显瘦长拖尾公主婚纱',
        title: '',
        tags: '',
        price: '386',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/3.jpg',
          },
        ],
      },
      {
        id: '38',
        type: 'weddingDress',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-small/8.jpg',
        brandName: '媛菲莎妮长拖尾宫廷韩式婚纱',
        title: '',
        tags: '',
        price: '598',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-mini-list/3.jpg',
          },
        ],
      },
    ],
  },
  necklaceData: {
    title: '美丽人生 项链',
    bannerUrl: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/big-banner/necklace.jpg',
    list: [
      {
        id: '41',
        type: 'necklace',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-small/1.jpg',
        brandName: '【直营】施华洛世奇 ',
        title: '女士恶魔之眼项链',
        tags: '',
        price: '539',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/3.jpg',
          },
        ],
      },
      {
        id: '42',
        type: 'necklace',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-small/2.jpg',
        brandName: 'C【直营】Swarovski',
        title: '施华洛世奇',
        tags: 'CK1- 女士S',
        price: '499',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/3.jpg',
          },
        ],
      },
      {
        id: '43',
        type: 'necklace',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-small/3.jpg',
        brandName: '施华洛世奇跳动的心项链',
        title: '浪漫项链锁骨',
        tags: '',
        price: '1290',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/3.jpg',
          },
        ],
      },
      {
        id: '44',
        type: 'necklace',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-small/4.jpg',
        brandName: '施华洛世奇天鹅吊坠装饰项链女白金色',
        title: '',
        tags: '',
        price: '990',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/3.jpg',
          },
        ],
      },
      {
        id: '45',
        type: 'necklace',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-small/5.jpg',
        brandName: 'Swarovski/施华洛世奇天鹅项链女锁骨',
        title: '',
        tags: '',
        price: '495',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/3.jpg',
          },
        ],
      },
      {
        id: '46',
        type: 'necklace',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-small/6.jpg',
        brandName: '卡蒂罗纯银锁骨项链女士四叶草情人节',
        title: '',
        tags: '',
        price: '158',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/3.jpg',
          },
        ],
      },
      {
        id: '47',
        type: 'necklace',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-small/7.jpg',
        brandName: '卡蒂罗925纯银项链女锁骨链盒子链水',
        title: '',
        tags: '',
        price: '79',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/3.jpg',
          },
        ],
      },
      {
        id: '48',
        type: 'necklace',
        url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-small/8.jpg',
        brandName: '石头记幸运四叶草项链女东陵玉吊坠',
        title: '',
        tags: '',
        price: '128',
        miniList: [
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/1.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/2.jpg',
          },
          {
            url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-mini-list/3.jpg',
          },
        ],
      },
    ],
  },
  proList: [
    {
      id: 101,
      title: '美丽人生 口红',
      bannerUrl: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/big-banner/lipstick.jpg',
      list: [
        {
          id: '1',
          type: 'lipstick',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/dior-1.jpg',
          brandName: 'Dior/迪奥',
          title: '烈艳蓝金唇膏',
          tags: '滋润 保湿 防水',
          price: '299',
        },
        {
          id: '2',
          type: 'lipstick',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/chanel.jpg',
          brandName: '香奈儿',
          title: '炫亮魅力唇膏',
          tags: '美美滋润轻盈如丝多色',
          price: '299',
        },
        {
          id: '3',
          type: 'lipstick',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/estee-1.jpg',
          brandName: 'Estee Lauder/雅诗兰黛',
          title: '倾慕唇膏魅色系列',
          tags: '光感显色科技 双唇浓郁饱满 保色',
          price: '270',
        },
        {
          id: '4',
          type: 'lipstick',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/dior-2.jpg',
          brandName: '【直营】Christian Dior',
          title: '迪奥粉漾诱惑变色润唇膏',
          tags: '变色口红 3.5g',
          price: '299',
        },
        {
          id: '5',
          type: 'lipstick',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/estee-2.jpg',
          brandName: 'Estee Lauder/雅诗兰黛',
          title: '雅诗兰黛倾慕唇膏-丝绒系列',
          tags: '气质哑光 柔滑质感 保湿',
          price: '270',
        },
        {
          id: '6',
          type: 'lipstick',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/lancome-1.jpg',
          brandName: 'Lancome/兰蔻',
          title: '菁纯柔润丝缎唇膏',
          tags: '柔滑丝润 妆效持久',
          price: '270',
        },
        {
          id: '7',
          type: 'lipstick',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/dior-3.jpg',
          brandName: 'Dior/迪奥',
          title: '粉漾诱惑润唇膏',
          tags: '滋润,保湿,持久,易上色,不易脱色',
          price: '209',
        },
        {
          id: '8',
          type: 'lipstick',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/carslan.jpg',
          brandName: 'CARSLAN/卡姿兰',
          title: ' 金致胶原美芯唇膏',
          tags: '补湿滋润',
          price: '109',
        },
      ],
    },
    {
      id: 102,
      title: '美丽人生 女包',
      bannerUrl: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/big-banner/female-bag.jpg',
      list: [
        {
          id: '11',
          type: 'femaleBag',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-small/1.jpg',
          brandName: '女士韩版百搭简约时尚斜挎包',
          title: '',
          tags: '',
          price: '289',
        },
        {
          id: '12',
          type: 'femaleBag',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-small/2.jpg',
          brandName: '小包包女2018新款潮韩版百搭斜挎小方',
          title: '',
          tags: '',
          price: '218',
        },
        {
          id: '13',
          type: 'femaleBag',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-small/3.jpg',
          brandName: '【直营】COACH 蔻驰',
          title: '女士PVC小号手',
          tags: '',
          price: '1298',
        },
        {
          id: '14',
          type: 'femaleBag',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-small/4.jpg',
          brandName: 'CHARLES＆KEITH',
          title: '单肩包',
          tags: 'CK2-20670',
          price: '399',
        },
        {
          id: '15',
          type: 'femaleBag',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-small/5.jpg',
          brandName: '韩版个性时尚百搭手提链条少女包',
          title: '',
          tags: '',
          price: '279',
        },
        {
          id: '16',
          type: 'femaleBag',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-small/6.jpg',
          brandName: '【直营】 COACH 蔻驰 ',
          title: '女士牛皮小号',
          tags: '',
          price: '1058',
        },
        {
          id: '17',
          type: 'femaleBag',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-small/7.jpg',
          brandName: '朱尔大气真皮时尚头层牛皮女士斜挎包',
          title: '',
          tags: '',
          price: '249',
        },
        {
          id: '18',
          type: 'femaleBag',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-small/8.jpg',
          brandName: '稻草人复古单肩韩版简约女士斜挎包',
          title: ' ',
          tags: '',
          price: '179',
        },
      ],
    },
    {
      id: 103,
      title: '美丽人生 高跟鞋',
      bannerUrl: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/big-banner/high-heeled.jpg',
      list: [
        {
          id: '21',
          type: 'highHeeled',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-small/1.jpg',
          brandName: 'CHARLES＆KEITH',
          title: '春季单鞋女',
          tags: 'CK1-603',
          price: '339',
        },
        {
          id: '22',
          type: 'highHeeled',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-small/2.jpg',
          brandName: 'CHARLES＆KEITH',
          title: '凉鞋',
          tags: 'CK1-60361072',
          price: '399',
        },
        {
          id: '23',
          type: 'highHeeled',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-small/3.jpg',
          brandName: '哥弟女鞋',
          title: '2018春季新款休闲鞋',
          tags: '厚底小白',
          price: '199',
        },
        {
          id: '24',
          type: 'highHeeled',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-small/4.jpg',
          brandName: 'daphne',
          title: '优雅蕾丝性感尖头浅口高跟鞋',
          tags: '',
          price: '159',
        },
        {
          id: '25',
          type: 'highHeeled',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-small/5.jpg',
          brandName: '达芙妮',
          title: '春夏羊皮尖头浅口细跟',
          tags: '高跟鞋',
          price: '299',
        },
        {
          id: '26',
          type: 'highHeeled',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-small/6.jpg',
          brandName: '哥弟',
          title: '春季粗跟真皮浅口圆头',
          tags: '高跟鞋',
          price: '550',
        },
        {
          id: '27',
          type: 'highHeeled',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-small/7.jpg',
          brandName: '卓诗尼',
          title: '夏季超高跟坡跟凉鞋',
          tags: '',
          price: '199',
        },
        {
          id: '28',
          type: 'highHeeled',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-small/8.jpg',
          brandName: '卓诗尼',
          title: '夏季粗跟高跟凉鞋',
          tags: '',
          price: '199',
        },
      ],
    },
    {
      id: 104,
      title: '美丽人生 婚纱',
      bannerUrl: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/big-banner/wedding-dress.jpg',
      list: [
        {
          id: '31',
          type: 'weddingDress',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-small/1.jpg',
          brandName: '森系一字肩拖尾公主梦幻显瘦婚纱',
          title: '',
          tags: '',
          price: '1898',
        },
        {
          id: '32',
          type: 'weddingDress',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-small/2.jpg',
          brandName: '一字肩简约森系拖尾公主梦幻显瘦婚纱',
          title: '',
          tags: '',
          price: '898',
        },
        {
          id: '33',
          type: 'weddingDress',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-small/3.jpg',
          brandName: '宫廷公主拖尾显瘦一字肩梦幻婚纱',
          title: '',
          tags: '',
          price: '1585',
        },
        {
          id: '34',
          type: 'weddingDress',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-small/4.jpg',
          brandName: '公主梦幻春季长拖尾一字肩森系婚纱',
          title: '',
          tags: '',
          price: '1578.27',
        },
        {
          id: '35',
          type: 'weddingDress',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-small/5.jpg',
          brandName: '彩纱长拖尾一字肩韩式显瘦欧美婚纱',
          title: '',
          tags: '',
          price: '1889',
        },
        {
          id: '36',
          type: 'weddingDress',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-small/6.jpg',
          brandName: '满庭芳欧美春季一字肩森系婚纱',
          title: '',
          tags: '',
          price: '1782',
        },
        {
          id: '37',
          type: 'weddingDress',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-small/7.jpg',
          brandName: '一字肩韩式大码显瘦长拖尾公主婚纱',
          title: '',
          tags: '',
          price: '386',
        },
        {
          id: '38',
          type: 'weddingDress',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-small/8.jpg',
          brandName: '媛菲莎妮长拖尾宫廷韩式婚纱',
          title: '',
          tags: '',
          price: '598',
        },
      ],
    },
    {
      id: 105,
      title: '美丽人生 项链',
      bannerUrl: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/big-banner/necklace.jpg',
      list: [
        {
          id: '41',
          type: 'necklace',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-small/1.jpg',
          brandName: '【直营】施华洛世奇 ',
          title: '女士恶魔之眼项链',
          tags: '',
          price: '539',
        },
        {
          id: '42',
          type: 'necklace',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-small/2.jpg',
          brandName: 'C【直营】Swarovski',
          title: '施华洛世奇',
          tags: 'CK1- 女士S',
          price: '499',
        },
        {
          id: '43',
          type: 'necklace',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-small/3.jpg',
          brandName: '施华洛世奇跳动的心项链',
          title: '浪漫项链锁骨',
          tags: '',
          price: '1290',
        },
        {
          id: '44',
          type: 'necklace',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-small/4.jpg',
          brandName: '施华洛世奇天鹅吊坠装饰项链女白金色',
          title: '',
          tags: '',
          price: '990',
        },
        {
          id: '45',
          type: 'necklace',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-small/5.jpg',
          brandName: 'Swarovski/施华洛世奇天鹅项链女锁骨',
          title: '',
          tags: '',
          price: '495',
        },
        {
          id: '46',
          type: 'necklace',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-small/6.jpg',
          brandName: '卡蒂罗纯银锁骨项链女士四叶草情人节',
          title: '',
          tags: '',
          price: '158',
        },
        {
          id: '47',
          type: 'necklace',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-small/7.jpg',
          brandName: '卡蒂罗925纯银项链女锁骨链盒子链水',
          title: '',
          tags: '',
          price: '79',
        },
        {
          id: '48',
          type: 'necklace',
          url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-small/8.jpg',
          brandName: '石头记幸运四叶草项链女东陵玉吊坠',
          title: '',
          tags: '',
          price: '128',
        },
      ],
    },
  ],
  mainBanner: [
    {
      name: '口红',
      url: '',
      imageUrl: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/main-banner/1.jpg',
    },
    {
      name: '女包',
      url: '',
      imageUrl: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/main-banner/2.jpg',
    },
    {
      name: '高跟鞋',
      url: '',
      imageUrl: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/main-banner/3.jpg',
    },
    {
      name: '婚纱',
      url: '',
      imageUrl: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/main-banner/4.jpg',
    },
    {
      name: '项链',
      url: '',
      imageUrl: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/main-banner/5.jpg',
    },
  ],
  // 猜你喜欢
  uLikeList: [
    {
      id: '1',
      type: 'lipstick',
      url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/dior-1.jpg',
      brandName: 'Dior/迪奥',
      title: '烈艳蓝金唇膏',
      tags: '滋润 保湿 防水',
      price: '299',
    },
    {
      id: '11',
      type: 'femaleBag',
      url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-small/1.jpg',
      brandName: '女士韩版百搭简约时尚斜挎包',
      title: '',
      tags: '',
      price: '289',
    },
    {
      id: '21',
      type: 'highHeeled',
      url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-small/1.jpg',
      brandName: 'CHARLES＆KEITH',
      title: '春季单鞋女',
      tags: 'CK1-603',
      price: '339',
    },
    {
      id: '31',
      type: 'weddingDress',
      url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-small/1.jpg',
      brandName: '森系一字肩拖尾公主梦幻显瘦婚纱',
      title: '',
      tags: '',
      price: '1898',
    },
    {
      id: '41',
      type: 'necklace',
      url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-small/1.jpg',
      brandName: '【直营】施华洛世奇 ',
      title: '女士恶魔之眼项链',
      tags: '',
      price: '539',
    },
    {
      id: '2',
      type: 'lipstick',
      url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/lipstick-small/chanel.jpg',
      brandName: '香奈儿',
      title: '炫亮魅力唇膏',
      tags: '美美滋润轻盈如丝多色',
      price: '299',
    },
    {
      id: '12',
      type: 'femaleBag',
      url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/package-small/2.jpg',
      brandName: '小包包女2018新款潮韩版百搭斜挎小方',
      title: '',
      tags: '',
      price: '218',
    },
    {
      id: '22',
      type: 'highHeeled',
      url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/highHeeled-small/2.jpg',
      brandName: 'CHARLES＆KEITH',
      title: '凉鞋',
      tags: 'CK1-60361072',
      price: '399',
    },
    {
      id: '32',
      type: 'weddingDress',
      url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/weddingDress-small/2.jpg',
      brandName: '一字肩简约森系拖尾公主梦幻显瘦婚纱',
      title: '',
      tags: '',
      price: '898',
    },
    {
      id: '42',
      type: 'necklace',
      url: 'https://raw.githubusercontent.com/liuqiyu/shopping-cart/master/static/images/necklace-small/2.jpg',
      brandName: 'C【直营】Swarovski',
      title: '施华洛世奇',
      tags: 'CK1- 女士S',
      price: '499',
    },
  ],
};

export default {
  state,
};
