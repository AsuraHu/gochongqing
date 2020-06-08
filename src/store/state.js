let defaultCounty = '潼南区'
try {
  if (localStorage.county) {
    defaultCounty = localStorage.county
  }
} catch (error) {
  console.log(error)
}

export default {
  county: defaultCounty,
  cateList: [{
    'id': 0,
    'title': '火锅',
    'desc': '来到重庆，怎能不品尝热辣的重庆火锅呢？冬天吃了暖身，夏天更要火辣辣，看一锅红油鲜香，翻滚着...',
    'url': '//m.tuniucdn.com/fb2/t1/G5/M00/19/85/Cii-tFsM75GINzsEAIArC_IVzecAAHjuwGrxSgAgCsj177_w320_h180_c1_t0.jpg',
    'recommendNum': 459
  },
  {
    'id': 1,
    'title': '钵钵鸡',
    'desc': '钵钵鸡是一种四川传统名小吃，起源于乐山 [1-3] ，属于川菜系。从清代流传至今已有上百年的历史。是以陶器...',
    'url': '//m.tuniucdn.com/fb2/t1/G5/M00/1A/16/Cii-s1sNIeaIWBJAAEji5Cw5zCMAAHktAK4jawASOL8387_w320_h180_c1_t0.jpg',
    'recommendNum': 356
  },
  {
    'id': 2,
    'title': '重庆小面',
    'desc': '重庆小面是一款发源于重庆市，是一种的汉族地方特色传统小吃。属于渝菜。小面属于汤面类型，麻辣味型。狭义的小面...',
    'url': '//m.tuniucdn.com/fb2/t1/G5/M00/19/92/Cii-s1sM9G2IXiwqAAwjBV4bsWYAAHj1gCm1t0ADCMd966_w320_h180_c1_t0.jpg',
    'recommendNum': 245
  },
  {
    'id': 3,
    'title': '水煮鱼',
    'desc': '水煮鱼上的辣椒宴，刚端上桌就能听到辣子油滋滋的响，一颗颗的辣椒在里面纵情翻滚！看上去都食指大动，重点是...',
    'url': '//m.tuniucdn.com/fb2/t1/G5/M00/1A/12/Cii-s1sNIAyIdPkBAAkjRpWKEykAAHkrANQSskACSNe947_w320_h180_c1_t0.jpg',
    'recommendNum': 345
  }
  ]
}
