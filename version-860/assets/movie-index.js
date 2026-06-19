const SITE_MOVIES = [
  {
    "title": "我的篡位替身",
    "file": "movie-1.html",
    "cover": "./1.jpg",
    "year": "2027",
    "region": "韩国",
    "type": "剧集",
    "genre": "古装 / 悬疑 / 权谋",
    "tags": [
      "双面君王",
      "替身夺权",
      "影武者"
    ],
    "desc": "国王找来一模一样的戏子做替身以防暗杀，一年后发现真正想篡位的，是替身背后的自己。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "爱的故事上海篇",
    "file": "movie-2.html",
    "cover": "./2.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "爱情, 都市, 剧情",
    "tags": [
      "现实主义",
      "职场",
      "沪漂",
      "女性"
    ],
    "desc": "三个在上海打拼的90后女生，在爱情、职场和租房之间，寻找属于自己的“家”。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "鸽子隧道",
    "file": "movie-3.html",
    "cover": "./3.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 惊悚 / 传记",
    "tags": [
      "冷战",
      "双面间谍",
      "人性拷问",
      "慢热",
      "文学改编"
    ],
    "desc": "冷战时期，一名英国间谍小说家被军情六处召回，因为他在畅销书中写的“鸽子隧道”战术，竟成了真实叛逃计划的一部分。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "我的天堂城市",
    "file": "movie-4.html",
    "cover": "./4.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": [
      "异乡",
      "梦想",
      "孤独"
    ],
    "desc": "三个中国年轻人在纽约追梦，他们发现这座城市从不许诺天堂，但总在废墟里给你一颗糖。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "李林克的小馆儿",
    "file": "movie-5.html",
    "cover": "./5.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情，美食，治愈",
    "tags": [
      "深夜食堂",
      "小人物",
      "温情",
      "都市",
      "人生百态"
    ],
    "desc": "在北京一条即将拆迁的胡同深处，沉默寡言的厨子李林克用美食温暖着每一个深夜孤独的灵魂。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "在撒哈拉世界的大门",
    "file": "movie-6.html",
    "cover": "./6.jpg",
    "year": "2025",
    "region": "意大利 / 摩洛哥",
    "type": "电影",
    "genre": "剧情 / 奇幻 / 冒险",
    "tags": [
      "沙漠",
      "哲学",
      "存在主义"
    ],
    "desc": "一扇凭空出现在撒哈拉腹地的大门前，聚集了想寻找“出口”的科学家、流浪者和圣战分子。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "律政英雄特别版",
    "file": "movie-7.html",
    "cover": "./7.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 律政, 悬疑",
    "tags": [
      "检察官",
      "翻案",
      "正义",
      "团队",
      "推理"
    ],
    "desc": "东京地检的“麻烦”检察官接手了一桩17年前的冤案，而真正的凶手如今已是国会议员。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "人生双行线",
    "file": "movie-8.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "剧集",
    "genre": "家庭/伦理",
    "tags": [
      "双胞胎",
      "身份互换",
      "阶层差异"
    ],
    "desc": "一对被抱错的双胞胎姐妹在三十年后相遇，一个成了总裁，一个成了外卖员，她们决定互换人生。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "妈妈有新男友了",
    "file": "movie-9.html",
    "cover": "./9.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市家庭",
    "tags": [
      "黄昏恋",
      "重组家庭",
      "搞笑",
      "治愈",
      "代际冲突"
    ],
    "desc": "单亲妈妈带回小十岁的电竞男友，准女婿竟是自己最铁的网友兼游戏死对头。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "穷人·榴莲·麻药·偷渡客",
    "file": "movie-10.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "马来西亚 / 中国台湾",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "tags": [
      "社会写实",
      "边缘人群",
      "东南亚",
      "多线叙事"
    ],
    "desc": "一包藏在榴莲里的麻药，被一个穷偷渡客吞下肚，串联起三个国家底层人的生死挣扎。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "向阳的日子",
    "file": "movie-11.html",
    "cover": "./11.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "家庭, 青春, 同性",
    "tags": [
      "治愈系",
      "乡村",
      "成长"
    ],
    "desc": "因父亲再婚而被送回乡下阿嬷家的叛逆少年，在向日葵花田里，爱上了一个哑巴男孩。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "热恋",
    "file": "movie-12.html",
    "cover": "./12.jpg",
    "year": "2019",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情 / 青春 / 喜剧",
    "tags": [
      "双向暗恋",
      "校园",
      "误会连连",
      "甜蜜",
      "搞笑"
    ],
    "desc": "学霸校草暗恋学渣女汉子，写情书却错塞给了教导主任，全校展开了一场乌龙寻爱大作战。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "磁路丰收",
    "file": "movie-13.html",
    "cover": "./13.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻 / 悬疑",
    "tags": [
      "农业科幻",
      "电磁",
      "东北",
      "伦理困境",
      "硬科幻"
    ],
    "desc": "东北农业大学教授发明了“磁路催熟”技术，一夜之间让庄稼成熟，也一夜之间让方圆百里内的所有电子设备和人体神经陷入紊乱。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "太阳恋",
    "file": "movie-14.html",
    "cover": "./14.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情 / 青春",
    "tags": [
      "清新",
      "海岛",
      "暗恋",
      "疾病",
      "纯爱"
    ],
    "desc": "一个患有罕见光过敏症的女孩，只能在夜晚活动，却爱上了一个如太阳般耀眼的男孩。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "向往的生活老友记",
    "file": "movie-15.html",
    "cover": "./15.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情、家庭、喜剧",
    "tags": [
      "怀旧",
      "田园",
      "友情岁月",
      "慢生活"
    ],
    "desc": "五个退休老友回到乡下合租，重新学习如何年轻地活着。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "爱情公寓第一季",
    "file": "movie-16.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市情景喜剧",
    "tags": [
      "合租",
      "年轻人",
      "笑对生活",
      "单元剧"
    ],
    "desc": "在一栋被中介描述为“法式轻奢公寓”实则隔断群租房的老房子里，七个普通年轻人开启了相互嫌弃又相互取暖的生活。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "超时空同居",
    "file": "movie-17.html",
    "cover": "./17.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情奇幻",
    "tags": [
      "时空重叠",
      "错位人生",
      "轻喜剧",
      "催泪"
    ],
    "desc": "2018年的破产设计师与2024年的AI工程师，意外住进了同一间能连通时空的出租屋。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "邮寄新娘",
    "file": "movie-18.html",
    "cover": "./18.jpg",
    "year": "2022",
    "region": "泰国",
    "type": "电影",
    "genre": "剧情 / 惊悚",
    "tags": [
      "农村习俗",
      "人口贩卖",
      "女性觉醒"
    ],
    "desc": "贫穷少女被人装箱邮寄到陌生村庄做新娘，打开箱子时，她手里握着一把剪刀。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "丛林浴血战",
    "file": "movie-19.html",
    "cover": "./19.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作战争",
    "tags": [
      "雇佣兵",
      "丛林",
      "复仇"
    ],
    "desc": "退役女兵重返南美丛林，对抗昔日背叛她的雇佣兵小队，只为救出被挟持的养女。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "仙逆",
    "file": "movie-20.html",
    "cover": "./20.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "玄幻/修仙",
    "tags": [
      "逆天改命",
      "凡人流",
      "修真界",
      "扮猪吃虎"
    ],
    "desc": "平庸少年被废灵根后，得一神秘石珠，从此走上以弱胜强的逆仙之路。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "来去美国2",
    "file": "movie-21.html",
    "cover": "./21.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、冒险、家庭",
    "tags": [
      "续集",
      "非法移民",
      "逆向文化冲击",
      "公路"
    ],
    "desc": "第一部里费尽千辛万苦拿到美国绿卡的一家墨西哥人，现在为了参加祖母的百岁寿宴，必须“非法”偷渡回墨西哥，因为他们的绿卡在出境后就失效了。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "恐怖炼狱",
    "file": "movie-22.html",
    "cover": "./22.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖， 惊悚， 超自然",
    "tags": [
      "轮回噩梦",
      "心理恐怖",
      "宗教元素",
      "烧脑"
    ],
    "desc": "五个陌生人被困在一座废弃的修道院，每当有人死去，时间就会重置，而死亡方式愈发残忍。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "震撼性教育",
    "file": "movie-23.html",
    "cover": "./23.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "tags": [
      "校园",
      "性教育",
      "成长",
      "尴尬"
    ],
    "desc": "高中生理卫生课老师是个从没谈过恋爱的处男，他决定用一学期的“实践作业”教学生如何恋爱。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "万花吐艳",
    "file": "movie-24.html",
    "cover": "./24.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 宫斗 / 悬疑",
    "tags": [
      "宫廷",
      "花匠",
      "毒术",
      "权谋",
      "姐妹反目"
    ],
    "desc": "御花园的每一朵花，都是她杀人的请柬。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "车站的马博布",
    "file": "movie-25.html",
    "cover": "./25.jpg",
    "year": "2004",
    "region": "南非",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "种族隔离",
      "人犬情深",
      "流浪之旅",
      "社会底层"
    ],
    "desc": "种族隔离末期的约翰内斯堡，一个流浪儿童与一只被遗弃的猎犬在火车站共同求生，并意外成为地下反歧视的信使。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "极限父子",
    "file": "movie-26.html",
    "cover": "./26.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": [
      "户外探险",
      "隔阂",
      "和解",
      "荒野求生"
    ],
    "desc": "一对水火不容的父子被困原始森林，求生本能迫使他们必须放下二十年的积怨。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "懒女苏",
    "file": "movie-27.html",
    "cover": "./27.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧，爱情",
    "tags": [
      "躺平",
      "反内卷",
      "反差萌"
    ],
    "desc": "全公司最懒的实习生苏小柠，被空降的魔鬼总监盯上，谁知总监私下是个需要她叫起床的巨婴。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "冷血",
    "file": "movie-28.html",
    "cover": "./28.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪 / 剧情",
    "tags": [
      "纪实犯罪",
      "双时间线",
      "记者",
      "小镇"
    ],
    "desc": "三十年前一桩灭门悬案，三十年后记者重查，发现小镇每个人都在说谎，而凶手可能早已被“公开处刑”。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "危险物种",
    "file": "movie-29.html",
    "cover": "./29.jpg",
    "year": "2023",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "科幻 / 恐怖",
    "tags": [
      "生物实验",
      "孤岛",
      "变异",
      "生态",
      "反噬"
    ],
    "desc": "生物公司在孤岛复活了渡渡鸟，但它们很快变异成专吃“塑料”的恐怖掠食者。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "变幻季节",
    "file": "movie-30.html",
    "cover": "./30.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "家庭, 剧情",
    "tags": [
      "隔阂",
      "和解",
      "美食"
    ],
    "desc": "一对三十年没说话的父子，因为一块祖传的腌菜石，被迫在乡下老宅共同生活一个春夏秋冬。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "山水驿站",
    "file": "movie-31.html",
    "cover": "./31.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "tags": [
      "驿站",
      "山雨",
      "过客",
      "秘密",
      "救赎"
    ],
    "desc": "一间深山驿站，一场突如其来的暴雨，六个陌生人被迫共处一夜，却发现彼此都被同一桩失踪案串联。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "玉面飞狐粤语",
    "file": "movie-32.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "武侠 / 古装",
    "tags": [
      "反英雄",
      "易容",
      "复仇",
      "江湖"
    ],
    "desc": "江湖第一美男子为报灭门之仇，毁容换脸潜入仇家身边做女婿，却真的爱上了仇人之女。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "迷失太空",
    "file": "movie-33.html",
    "cover": "./33.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻、冒险、生存",
    "tags": [
      "深空求生",
      "AI叛乱",
      "飞船解体",
      "伦理选择",
      "倒计时"
    ],
    "desc": "一艘殖民飞船跳跃失误，被抛到了银河系悬臂外的一无所有区，这里连星光都没有，只有无尽的黑暗和逐渐耗尽的氧气。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "新凯撒大帝",
    "file": "movie-34.html",
    "cover": "./34.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 政治惊悚",
    "tags": [
      "近未来",
      "算法独裁",
      "民主实验"
    ],
    "desc": "一个被AI操控的虚拟“凯撒”将统治一座美国小镇作为社会实验，而反抗者发现，AI的漏洞正是“仁慈”。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "与赫夫晚餐",
    "file": "movie-35.html",
    "cover": "./35.jpg",
    "year": "2027",
    "region": "英国",
    "type": "电影",
    "genre": "剧情，悬疑，心理",
    "tags": [
      "心理游戏",
      "晚宴",
      "人性实验",
      "阶层",
      "密室"
    ],
    "desc": "七位名流受邀与神秘富豪赫夫共进晚餐，却发现每道菜都是一场审判。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "眼镜蛇第一季",
    "file": "movie-36.html",
    "cover": "./36.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "动作、惊悚、犯罪",
    "tags": [
      "特种兵",
      "复仇",
      "硬核",
      "悬疑",
      "独行侠"
    ],
    "desc": "代号“眼镜蛇”的特种兵退役当天遭遇灭门之灾，他必须重出江湖揭开国家黑幕。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "疯狂之月",
    "file": "movie-37.html",
    "cover": "./37.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑/惊悚",
    "tags": [
      "精神病院",
      "连环失踪",
      "满月",
      "多重人格"
    ],
    "desc": "月圆之夜，精神病院七名患者接连失踪，唯一清醒的医生发现自己也是病人。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "希望与荣耀",
    "file": "movie-38.html",
    "cover": "./38.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 历史",
    "tags": [
      "二战",
      "童年视角",
      "英伦",
      "人性"
    ],
    "desc": "伦敦大轰炸期间，一个男孩把废墟当游乐场，在瓦砾中找到了父亲留下的勋章。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "雨夜哭",
    "file": "movie-39.html",
    "cover": "./39.jpg",
    "year": "2018",
    "region": "中国台湾",
    "type": "电影",
    "genre": "心理惊悚",
    "tags": [
      "雨夜",
      "都市传说",
      "女性困境",
      "复仇"
    ],
    "desc": "每个下暴雨的夜晚，台北一栋老旧公寓里总会传出女人的哭声，新搬来的邻居决定揭开真相。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "缘订三生",
    "file": "movie-40.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 奇幻",
    "tags": [
      "三世轮回",
      "失忆梗",
      "宿命恋人",
      "古风与现代"
    ],
    "desc": "她每世都会在23岁那天忘记一切，而他每世都在用不同的方式，让自己被她重新爱上。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "失温症",
    "file": "movie-41.html",
    "cover": "./41.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "恐怖 / 生存",
    "tags": [
      "雪山惊悚",
      "户外灾难",
      "低温幻觉"
    ],
    "desc": "四名登山者被困海拔七千米的帐篷内，暴风雪中收音机传来消息：搜救队说山下只找到了三具遗体。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "千子之父：捐精狂奇案",
    "file": "movie-42.html",
    "cover": "./42.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "犯罪悬疑",
    "tags": [
      "真實事件改編",
      "倫理爭議",
      "基因偵查"
    ],
    "desc": "一个日本男人通过匿名捐精成为上千个孩子的生物学父亲，直到孩子们开始离奇死亡。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "恐怖感恩劫",
    "file": "movie-43.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "感恩节",
      "连环杀手",
      "节日恐怖",
      "血腥",
      "社会讽刺"
    ],
    "desc": "一名身穿朝圣者服装的杀手在每个感恩节杀掉“浪费食物”的人，留下的标语是“你应该感恩”。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "少年游击队",
    "file": "movie-44.html",
    "cover": "./44.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争/儿童",
    "tags": [
      "抗日",
      "热血",
      "童真",
      "智斗",
      "主旋律"
    ],
    "desc": "1942年华北农村，三个孩子用弹弓和鞭炮，误打误撞端掉了鬼子的一个炮楼。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "美食街女老板",
    "file": "movie-45.html",
    "cover": "./45.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市 / 家庭",
    "tags": [
      "女性创业",
      "夜市",
      "非遗美食"
    ],
    "desc": "夜市一姐被迫与五星级酒店主厨打擂台，赌注是她那条即将拆迁的老街。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "麻雀春天",
    "file": "movie-46.html",
    "cover": "./46.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "下岗",
      "中年危机",
      "父女",
      "治愈",
      "小城"
    ],
    "desc": "90年代东北下岗工人老陈在菜市场捡到一个弃婴，从此他灰暗的人生里飞进了一只吵闹的“麻雀”。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "匿杀",
    "file": "movie-47.html",
    "cover": "./47.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪, 悬疑, 动作",
    "tags": [
      "暗网",
      "复仇",
      "反转",
      "女性视角"
    ],
    "desc": "当暗网杀手“匿名者”接到刺杀自己亲生父亲的任务，一场伪装与反杀的心理游戏正式开启。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "我和我的四个男人",
    "file": "movie-48.html",
    "cover": "./48.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 爱情 / 奇幻",
    "tags": [
      "奇幻言情",
      "修罗场",
      "精分",
      "甜宠",
      "搞笑"
    ],
    "desc": "母胎单身的女主意外被分成了四个分裂人格，而每个不同人格都爱上了一个不同类型的男人。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "坏伙伴",
    "file": "movie-49.html",
    "cover": "./49.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情犯罪",
    "tags": [
      "少年犯",
      "友谊",
      "救赎",
      "边缘"
    ],
    "desc": "三个问题少年组成盗窃团伙，却在最后一次行动中被迫选择出卖彼此。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "女驸马",
    "file": "movie-50.html",
    "cover": "./50.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 爱情",
    "tags": [
      "女扮男装",
      "科举",
      "权谋",
      "巾帼"
    ],
    "desc": "为救心上人，才女冯素贞女扮男装进京赶考，不料中状元后被皇帝钦点为驸马，开启了惊心动魄的双重身份生活。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "阿波罗13号：生还实录",
    "file": "movie-51.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "纪录 / 历史 / 灾难",
    "tags": [
      "航天",
      "真实事件",
      "生存",
      "NASA"
    ],
    "desc": "首次全部使用解密的舱内录音和监控录像，还原阿波罗13号三天绝境求生。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "咸湿特务",
    "file": "movie-52.html",
    "cover": "./52.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "tags": [
      "搞笑",
      "特工",
      "咸湿",
      "港味"
    ],
    "desc": "中年发福的前特务重出江湖，每次行动都因“生理问题”闹出各种乌龙。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "米小圈上学记第四季",
    "file": "movie-53.html",
    "cover": "./53.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "儿童 / 喜剧",
    "tags": [
      "校园",
      "成长",
      "趣事",
      "亲子"
    ],
    "desc": "米小圈升入四年级，遇到一位会打快板的新语文老师，课堂变成“相声专场”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "通灵之王第二季",
    "file": "movie-54.html",
    "cover": "./54.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "综艺",
    "genre": "真人秀, 灵异, 竞技",
    "tags": [
      "通灵",
      "挑战",
      "灵异事件",
      "民俗",
      "淘汰赛"
    ],
    "desc": "亚洲最强通灵人争夺战升级，每期亲赴亚洲知名鬼屋完成真实灵异任务。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "单身女孩之家1980",
    "file": "movie-55.html",
    "cover": "./55.jpg",
    "year": "1980",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "tags": [
      "砍杀电影",
      "姐妹会",
      "复古",
      "连环杀手"
    ],
    "desc": "1980年，一所女子大学联谊会的成员接连失踪，而凶手就藏在她们中间。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "防守反击",
    "file": "movie-56.html",
    "cover": "./56.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧， 运动",
    "tags": [
      "足球",
      "乌龙",
      "小镇",
      "逆袭"
    ],
    "desc": "一个乌龙球让整条村成了全网笑柄，村长决定带队复仇职业队。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "明月几时有国语",
    "file": "movie-57.html",
    "cover": "./57.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史 / 剧情",
    "tags": [
      "抗战",
      "文人救国",
      "国语配音"
    ],
    "desc": "1941年香港沦陷，一群文化名人在日寇眼皮底下展开了一场惊心动魄的“国语”大营救。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "赌城杀机",
    "file": "movie-58.html",
    "cover": "./58.jpg",
    "year": "2014",
    "region": "中国香港 / 澳门",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "tags": [
      "密室杀人",
      "赌场",
      "复仇",
      "反转"
    ],
    "desc": "澳门赌场的一间贵宾厅内突发命案，所有出口被封，凶手就在剩下的七名赌客之中。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "千禧一代我的生活",
    "file": "movie-59.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧, 生活",
    "tags": [
      "千禧一代",
      "职场",
      "友谊",
      "都市",
      "吐槽"
    ],
    "desc": "四个千禧一代朋友在三十岁这年同时遭遇失业、分手、房贷和“你到底什么时候结婚”的灵魂拷问。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "救世",
    "file": "movie-60.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 惊悚",
    "tags": [
      "人工智能",
      "末世",
      "宗教",
      "反转",
      "道德困境"
    ],
    "desc": "一台能预测未来的超级AI宣布：要救人类，就必须在一年内消灭全球一半人口。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "莎木",
    "file": "movie-61.html",
    "cover": "./61.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "武侠 / 剧情 / 家庭",
    "tags": [
      "游戏改编",
      "和风武侠",
      "弑父疑云",
      "芭月凉"
    ],
    "desc": "为了寻找杀父仇人“蓝帝”，芭月凉从横须贺追到香港，却发现父亲当年偷走的不只是一面镜子。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "雪地灵犬3",
    "file": "movie-62.html",
    "cover": "./62.jpg",
    "year": "2004",
    "region": "美国",
    "type": "动画",
    "genre": "家庭，冒险，动物",
    "tags": [
      "雪橇犬",
      "极地",
      "救援",
      "忠诚",
      "狼群首领"
    ],
    "desc": "传奇雪橇犬巴尔托的女儿带着一支新手雪橇队，在暴风雪中拯救受困科考队。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "杰克森：美国梦",
    "file": "movie-63.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "歌舞传记",
    "tags": [
      "迈克尔·杰克逊",
      "音乐",
      "幕后",
      "世纪审判",
      "辉煌与争议"
    ],
    "desc": "从未曝光的录音带，还原流行音乐之王迈克尔·杰克逊最后十年的孤独与挣扎。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "生命的力量",
    "file": "movie-64.html",
    "cover": "./64.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "自然 / 科学 / 人文",
    "tags": [
      "极端环境",
      "生命奇迹",
      "纪录片",
      "进化论",
      "震撼画面"
    ],
    "desc": "摄制组深入地球上最致命的环境，记录那些在火山口、辐射区和冰封湖下顽强存活的极端生物。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "活动",
    "file": "movie-65.html",
    "cover": "./65.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚, 伪纪录片",
    "tags": [
      "直播",
      "宗教仪式",
      "传染",
      "社区恐怖"
    ],
    "desc": "一个直播团队潜入一个全员失踪的小镇，发现全镇人都还在“活动”——以一种极其诡异的姿势，永远定格在了最后一秒。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "火线追凶2之鹈鹕行动",
    "file": "movie-66.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 悬疑 / 警匪",
    "tags": [
      "枪战",
      "双雄",
      "卧底",
      "贩毒",
      "复仇"
    ],
    "desc": "火爆刑警与冷静卧底时隔十年再度联手，追查代号“鹈鹕”的贩毒集团，却发现彼此的目标是复仇。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "梦想奔驰",
    "file": "movie-67.html",
    "cover": "./67.jpg",
    "year": "2005",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 家庭 / 运动",
    "tags": [
      "赛马",
      "父女",
      "绝境",
      "逆袭",
      "励志"
    ],
    "desc": "一头受伤的赛马，一个因伤退役的骑手，一个小女孩，他们要一起挑战不可能夺冠的锦标赛。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "玻璃之地",
    "file": "movie-68.html",
    "cover": "./68.jpg",
    "year": "2022",
    "region": "芬兰",
    "type": "电影",
    "genre": "剧情/悬疑",
    "tags": [
      "极昼",
      "玻璃屋",
      "失踪",
      "封闭社区"
    ],
    "desc": "一位建筑师携妻女住进北极圈内的全透明玻璃豪宅，随后女儿失踪，他却看到所有玻璃上写满求救信号。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "李波罗的爱情",
    "file": "movie-69.html",
    "cover": "./69.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 运动",
    "tags": [
      "足球恋曲",
      "草根逆袭",
      "职业精神"
    ],
    "desc": "外卖小哥李波罗有绝世球技，却因“情商太低”被职业队屡屡拒绝，直到遇见那个只看球技不看人的女队医。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "3个受伤的警察",
    "file": "movie-70.html",
    "cover": "./70.jpg",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "genre": "剧情 / 犯罪 / 心理",
    "tags": [
      "警队内幕",
      "PTSD",
      "兄弟情",
      "心理创伤",
      "写实风格"
    ],
    "desc": "三个在枪战中受伤的警察，住进同一间病房，却各自隐藏着关于那场枪战的秘密。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "招积老虎",
    "file": "movie-71.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 喜剧 / 犯罪",
    "tags": [
      "港片",
      "黑帮",
      "卧底",
      "搞笑",
      "老虎"
    ],
    "desc": "一个做事极度嚣张、到处“招积”（树敌）的卧底警察，被派去接近一名同样嚣张的黑帮老虎，结果两人惺惺相惜。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "波河的人们",
    "file": "movie-72.html",
    "cover": "./72.jpg",
    "year": "2023",
    "region": "意大利",
    "type": "纪录片",
    "genre": "纪录, 历史",
    "tags": [
      "黑白影像",
      "河流生态",
      "意大利风情",
      "人类学"
    ],
    "desc": "沿着意大利最长的波河，导演用三年时间记录下两岸居民在气候变化与现代化夹缝中的生存肖像。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "三人行必有我妹",
    "file": "movie-73.html",
    "cover": "./73.jpg",
    "year": "2012",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧，爱情，校园",
    "tags": [
      "后宫",
      "搞笑",
      "推理",
      "兄妹"
    ],
    "desc": "大企业继承人将悟收到父亲遗言：在校期间找到未来的妻子，但其中一位候选人竟然是他失散多年的亲妹妹。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "大盛魁",
    "file": "movie-74.html",
    "cover": "./74.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史、商战、传记",
    "tags": [
      "万里茶道",
      "晋商",
      "创业",
      "家族恩怨"
    ],
    "desc": "三个穷小子在草原上创立商业帝国，却因一个女人分崩离析。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "旦夕之危",
    "file": "movie-75.html",
    "cover": "./75.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "tags": [
      "反恐",
      "拆弹",
      "直播",
      "实时叙事",
      "密室逃脱"
    ],
    "desc": "五名被困在不同地点的陌生人，通过手机直播发现他们身上都被植入了炸弹，而拆弹密码藏在彼此的线索里。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "柏德里纳的新娘",
    "file": "movie-76.html",
    "cover": "./76.jpg",
    "year": "2018",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 惊悚",
    "tags": [
      "阿尔卑斯山",
      "民俗恐怖",
      "女性复仇"
    ],
    "desc": "在阿尔卑斯山的偏远村落，每年都会选出一位“柏德里纳新娘”献给山神，直到这一年，新娘决定反杀。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "毕业300天",
    "file": "movie-77.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 青春",
    "tags": [
      "社畜",
      "理想破灭",
      "租房",
      "女性友谊"
    ],
    "desc": "毕业近一年，曾经睡上下铺的四姐妹，在生活的重压下渐渐走向分崩离析。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "上帝的来电",
    "file": "movie-78.html",
    "cover": "./78.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑/惊悚",
    "tags": [
      "客服中心",
      "天堂热线",
      "临终关怀",
      "诈骗案",
      "灵异"
    ],
    "desc": "在客服中心上班的女主角接到了一通“来自天堂”的投诉电话，对方自称是刚死去的母亲。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "复仇者联盟4:终局之战",
    "file": "movie-79.html",
    "cover": "./79.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 奇幻",
    "tags": [
      "超级英雄",
      "穿越时空",
      "史诗决战",
      "牺牲",
      "漫威"
    ],
    "desc": "灭霸打了响指五年后，幸存的复仇者们决定穿越过去，不惜一切代价夺回半数生命。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "伊犁河谷",
    "file": "movie-80.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 爱情",
    "tags": [
      "边疆",
      "建设兵团",
      "年代",
      "史诗"
    ],
    "desc": "五十年代，一批女兵从江南来到新疆伊犁，与扎根边疆的战士们共同开垦出一片希望与爱情的花海。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "误入歧途",
    "file": "movie-81.html",
    "cover": "./81.jpg",
    "year": "1997",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪 / 剧情 / 惊悚",
    "tags": [
      "公路",
      "末世",
      "暴力",
      "迷失"
    ],
    "desc": "一个幸福的四口之家在沙漠公路旅行途中，为了走捷径而进入一条地图上没有的路，从此人间蒸发。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "职场心计文学梦",
    "file": "movie-82.html",
    "cover": "./82.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情，喜剧",
    "tags": [
      "出版业",
      "职场",
      "理想主义"
    ],
    "desc": "一个满脑子文学梦的菜鸟编辑，入职了全公司只卖成功学和鸡汤书的奇葩出版社。 她负责出版《一年成为百万富翁》，却偷偷在加班时写关于自杀的诗。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "闺房乐",
    "file": "movie-83.html",
    "cover": "./83.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 爱情, 伦理",
    "tags": [
      "婚姻",
      "交换",
      "心理",
      "幽默",
      "都市"
    ],
    "desc": "三对处于七年之痒的都市夫妻，听从心理医生建议搬进一栋共享别墅进行“开放式婚姻实验”，结果彻底失控。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "今夜天堂",
    "file": "movie-84.html",
    "cover": "./84.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情爱情",
    "tags": [
      "临终关怀",
      "绝症",
      "意外遗产",
      "旅行",
      "温情"
    ],
    "desc": "一位被诊断出绝症的老修女，意外获得一笔巨额遗产，她决定用这笔钱带一个失足少女开启救赎之旅。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "牧童传奇",
    "file": "movie-85.html",
    "cover": "./85.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 西部, 冒险",
    "tags": [
      "草原",
      "牛仔",
      "复仇",
      "环保",
      "动物伙伴"
    ],
    "desc": "清末草原上，一个牧童为救被洋人盗猎者杀死的牦牛，骑着一头野驴，展开了孤胆复仇。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "续写哈姆雷特",
    "file": "movie-86.html",
    "cover": "./86.jpg",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情, 悬疑",
    "tags": [
      "文学改编",
      "第四面墙",
      "元叙事"
    ],
    "desc": "一位落魄作家受命续写《哈姆雷特》的结局，但他笔下的角色开始反抗，并入侵了现实世界。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "神秘失踪案",
    "file": "movie-87.html",
    "cover": "./87.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "单元剧",
      "失踪",
      "社会派",
      "冷案"
    ],
    "desc": "一个专查失踪案的民间调查组发现，所有失踪者都曾在失踪前收到一张白纸。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "乐韵情缘2",
    "file": "movie-88.html",
    "cover": "./88.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "爱情 / 音乐",
    "tags": [
      "乡村音乐",
      "破镜重圆",
      "巡演爱情",
      "经典续作"
    ],
    "desc": "第一部的恋人在十年后以 rival 乡村歌手身份重逢，巡演大巴上被迫同住一室，旧情人和旧情歌一起爆发。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "皇家马德里：直到终点",
    "file": "movie-89.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "纪录片",
    "genre": "运动, 传记, 纪录",
    "tags": [
      "足球",
      "欧冠",
      "更衣室"
    ],
    "desc": "镜头跟随皇马2022-23赛季，记录下从落后到逆转，再到最终问鼎的每一刻。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "无罪者",
    "file": "movie-90.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "德国",
    "type": "剧集",
    "genre": "犯罪，法律，剧情",
    "tags": [
      "冤案",
      "律师",
      "正义",
      "腐败"
    ],
    "desc": "专门为死刑犯翻案的律师，发现自己的亲生父亲就是当年被错杀的“凶手”。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "亚瑟的威士忌",
    "file": "movie-91.html",
    "cover": "./91.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "tags": [
      "威士忌",
      "老年",
      "友谊",
      "苏格兰"
    ],
    "desc": "四个退休老人在苏格兰高地上偷了酒厂一批最珍贵的威士忌，却引发了一场啼笑皆非的追踪闹剧。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "探险活宝第二季",
    "file": "movie-92.html",
    "cover": "./92.jpg",
    "year": "2011",
    "region": "美国",
    "type": "动画",
    "genre": "冒险 / 喜剧 / 奇幻",
    "tags": [
      "后末日幻想",
      "无厘头",
      "成人童话"
    ],
    "desc": "芬恩和杰克踏入一个由糖果构成的平行宇宙，那里的国王是一个忧郁的冰淇淋三明治。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "比利·林恩的中场战事",
    "file": "movie-93.html",
    "cover": "./93.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 战争 / 心理",
    "tags": [
      "战争创伤",
      "PTSD",
      "反战",
      "现实主义",
      "沉浸式体验"
    ],
    "desc": "伊拉克战争英雄回国参加橄榄球赛中场秀，脑海里却不断闪回战场上最糟糕的那一天。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "绝命药师",
    "file": "movie-94.html",
    "cover": "./94.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 犯罪 / 中医悬疑",
    "tags": [
      "中医黑科技",
      "地下药市",
      "偏门复仇",
      "针灸格斗"
    ],
    "desc": "老中医用祖传药理制造致命毒药，只为引出杀害女儿的药贩集团。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "海棠经雨胭脂透",
    "file": "movie-95.html",
    "cover": "./95.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 民国",
    "tags": [
      "民国",
      "宅斗",
      "商战",
      "虐恋",
      "复仇"
    ],
    "desc": "为了查清家破真相，她以胭脂匠之女的身份潜入仇家，却与仇人之子相爱。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "换换心换换爱",
    "file": "movie-96.html",
    "cover": "./96.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情，奇幻",
    "tags": [
      "心脏移植",
      "记忆传递",
      "替身文学",
      "自我认同"
    ],
    "desc": "她移植了未婚夫前女友的心脏后，开始梦见一个陌生男人，并爱上了他。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "孤独男孩",
    "file": "movie-97.html",
    "cover": "./97.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/文艺",
    "tags": [
      "社恐",
      "都市",
      "偶遇",
      "治愈",
      "孤独"
    ],
    "desc": "一个从不出门的社恐男孩，通过无人机镜头爱上了对面楼一个同样孤独的女孩。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "旱码头",
    "file": "movie-98.html",
    "cover": "./98.jpg",
    "year": "2010",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "年代 / 商战",
    "tags": [
      "民国",
      "商业",
      "家族",
      "铁路"
    ],
    "desc": "胶东商帮传人意外获得一份“无水港”绝密图纸，为了建码头他必须扳倒清朝守旧派。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "绿色直接行动",
    "file": "movie-99.html",
    "cover": "./99.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "惊悚， 动作",
    "tags": [
      "环保",
      "激进",
      "卧底"
    ],
    "desc": "一个工业间谍卧底进入激进环保组织，却发现自己逐渐认同他们的“直接行动”理念。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "小王国的爱情",
    "file": "movie-100.html",
    "cover": "./100.jpg",
    "year": "2025",
    "region": "比利时",
    "type": "电影",
    "genre": "剧情, 儿童, 奇幻",
    "tags": [
      "微缩世界",
      "自闭症",
      "想象力",
      "治愈"
    ],
    "desc": "患有自闭症的小女孩坚信自家后院的蚂蚁窝里住着一个微型王国，她决定要为蚂蚁国王举办一场婚礼。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "超棒的我们",
    "file": "movie-101.html",
    "cover": "./101.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀, 青春, 竞技",
    "tags": [
      "偶像",
      "团综",
      "户外挑战",
      "成长"
    ],
    "desc": "十二位少年偶像被迫接管一家濒临倒闭的游乐园，每周挑战一项离谱的极限运营任务。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "完美结局",
    "file": "movie-102.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情，悬疑，家庭",
    "tags": [
      "伦理",
      "谎言",
      "遗产",
      "黑色幽默",
      "反转"
    ],
    "desc": "富商临死前把所有子女叫到床前宣布遗产分配，结果每个人都以为自己才是唯一的继承人。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "棋王1988",
    "file": "movie-103.html",
    "cover": "./103.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 传记 / 运动",
    "tags": [
      "围棋",
      "1988",
      "中日对抗",
      "天才棋手",
      "时代风云"
    ],
    "desc": "1988年中日围棋擂台赛，一个来自黑龙江林场的年轻工人，要以业余棋手的身份挑战日本“超一流”棋手。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "爱情谜语粤语",
    "file": "movie-104.html",
    "cover": "./104.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情、剧情、悬疑",
    "tags": [
      "暗恋",
      "谜题",
      "错过",
      "30年"
    ],
    "desc": "整理母亲遗物时，女儿发现一封40年前的情书，每一句都是一个指向“那个人”的谜语。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "与混蛋一起过圣诞节",
    "file": "movie-105.html",
    "cover": "./105.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧， 家庭",
    "tags": [
      "圣诞",
      "家庭聚会",
      "荒诞"
    ],
    "desc": "一个失败的中年男人在圣诞夜邀请了自己所有“混蛋”亲戚，试图证明自己不是最糟的那个。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "角头情圣",
    "file": "movie-106.html",
    "cover": "./106.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 黑帮 / 喜剧",
    "tags": [
      "黑道",
      "纯情",
      "反差萌",
      "台式幽默"
    ],
    "desc": "一个杀人不眨眼的角头老大，在爱上便利店女店员后，开始学做凤梨酥。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "9号秘事第五季",
    "file": "movie-107.html",
    "cover": "./107.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑 / 惊悚 / 喜剧",
    "tags": [
      "单元剧",
      "神反转",
      "黑色幽默",
      "密闭空间"
    ],
    "desc": "每个房间号都通往地狱，这一季的9号门背后藏着关于AI、直播和元宇宙的现代寓言。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "月球陷阱：地球危机",
    "file": "movie-108.html",
    "cover": "./108.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 灾难 / 动作",
    "tags": [
      "月球基地",
      "引力失控",
      "末日危机",
      "硬科幻"
    ],
    "desc": "月球上的引力实验失控，地球开始被缓慢拉向月球，人类只剩72小时。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "警探笑翻天",
    "file": "movie-109.html",
    "cover": "./109.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧, 动作, 犯罪",
    "tags": [
      "搭档",
      "搞笑",
      "破案",
      "反差萌"
    ],
    "desc": "全美最严肃的警探被强制分配了一个全警局最不正经、破案全靠讲笑话的网红巡警作为新搭档。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "雷公弹",
    "file": "movie-110.html",
    "cover": "./110.jpg",
    "year": "1986",
    "region": "美国",
    "type": "电影",
    "genre": "动作惊悚",
    "tags": [
      "冷戰陰謀",
      "特種炸彈",
      "倒計時追兇"
    ],
    "desc": "一枚微型雷公弹被误装入国际列车，三名乘客必须在到达终点前找到它。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "大运河",
    "file": "movie-111.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史 / 剧情 / 冒险",
    "tags": [
      "大运河",
      "古代",
      "漕运",
      "权谋",
      "家族恩怨"
    ],
    "desc": "明朝永乐年间，大运河上一场漕运大案，让三个家族的命运纠缠六代人。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "我的蠢老板",
    "file": "movie-112.html",
    "cover": "./112.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "职场, 喜剧, 推理",
    "tags": [
      "降维打击",
      "扮猪吃老虎",
      "办公室政治",
      "反转"
    ],
    "desc": "新人入职后发现老板是个生活白痴，但每次公司危机都被他莫名其妙“蠢”化解。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "我亲爱的秘书",
    "file": "movie-113.html",
    "cover": "./113.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情, 喜剧",
    "tags": [
      "办公室",
      "契约恋爱",
      "霸道总裁",
      "反套路",
      "搞笑"
    ],
    "desc": "魔鬼女总裁雇佣了一个完美男秘书，却发现他是自己五年前甩掉的初恋，而他来上班的目的只有一个：复仇。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "你好对方辩友2",
    "file": "movie-114.html",
    "cover": "./114.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "青春 / 校园 / 律政",
    "tags": [
      "辩论竞技",
      "热血逆袭",
      "群像戏",
      "思维碰撞"
    ],
    "desc": "六名因成绩垫底而被全校嫌弃的法学院“吊车尾”，组成奇葩辩论队，目标是干掉全国冠军。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "风姿物语银河篇",
    "file": "movie-115.html",
    "cover": "./115.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻, 奇幻, 冒险",
    "tags": [
      "太空歌剧",
      "魔法机甲",
      "帝国争霸",
      "史诗"
    ],
    "desc": "当魔法取代了科学，当骑士剑斩断了星舰，银河系迎来了一场最浪漫的混战。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "血杀粤语",
    "file": "movie-116.html",
    "cover": "./116.jpg",
    "year": "1998",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 犯罪",
    "tags": [
      "黑帮",
      "复仇",
      "兄弟情"
    ],
    "desc": "卧底与黑帮大佬惺惺相惜，身份揭穿那晚两人只能用血来决定谁活。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "信义",
    "file": "movie-117.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作、犯罪",
    "tags": [
      "兄弟情",
      "卧底",
      "背叛",
      "肉搏"
    ],
    "desc": "一个即将退休的卧底警探，在黑帮最后的任务中，发现要抓捕的头目竟是三十年前救过自己命的恩人。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "龙种",
    "file": "movie-118.html",
    "cover": "./118.jpg",
    "year": "2026",
    "region": "美国 / 中国大陆",
    "type": "电影",
    "genre": "科幻 / 惊悚 / 生物",
    "tags": [
      "基因编辑",
      "人造人",
      "伦理困境",
      "怪物"
    ],
    "desc": "科学家复活了恐龙基因并混入人类胚胎，生下的“龙种”开始猎杀父母。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "七十二家房客第十二部粤语",
    "file": "movie-119.html",
    "cover": "./119.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "tags": [
      "市井生活",
      "邻里纠纷",
      "怀旧",
      "粤语原声"
    ],
    "desc": "面对地产商收购旧楼危机，房东们假装闹鬼，租客们试图反杀，一场乌龙百出的“楼宇保卫战”打响了。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "他其实没有那么爱你",
    "file": "movie-120.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "爱情 / 喜剧",
    "tags": [
      "都市",
      "女性",
      "清醒",
      "毒舌"
    ],
    "desc": "四位都市闺蜜成立“反恋爱脑联盟”，用自己的血泪史总结出一套“男人谎言识别指南”。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "盗墓迷城",
    "file": "movie-121.html",
    "cover": "./121.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 冒险, 奇幻",
    "tags": [
      "木乃伊",
      "阿汤哥",
      "环球黑暗宇宙",
      "公主"
    ],
    "desc": "美军士兵在伊拉克意外唤醒被封印千年的埃及公主，她要用黑暗魔法重新统治世界。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "男狐聊斋",
    "file": "movie-122.html",
    "cover": "./122.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装、奇幻、爱情",
    "tags": [
      "男狐",
      "书生",
      "断袖",
      "聊斋",
      "修仙"
    ],
    "desc": "书生救下一只白狐，白狐化形成男，说要“以身相许”，书生慌了。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "东北抗日联军",
    "file": "movie-123.html",
    "cover": "./123.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史、战争",
    "tags": [
      "抗战",
      "雪原游击",
      "英雄群像",
      "真实改编",
      "家国情怀"
    ],
    "desc": "从1931到1945，三支抗联部队在白山黑水间绝境求生，每一刻都在书写“向死而生”。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "海湾之遇",
    "file": "movie-124.html",
    "cover": "./124.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": [
      "海边",
      "亲情",
      "和解",
      "治愈"
    ],
    "desc": "一对决裂十年的母女，因一场台风被困在即将拆迁的海边老屋中。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "踉跄女孩",
    "file": "movie-125.html",
    "cover": "./125.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 体育 / 青春",
    "tags": [
      "青少年",
      "拳击",
      "女性成长",
      "单亲家庭"
    ],
    "desc": "16岁的听障女孩为了不被送到特殊学校，咬牙站上了残酷的MMA铁笼赛场。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "冰上的尤里",
    "file": "movie-126.html",
    "cover": "./126.jpg",
    "year": "2016",
    "region": "日本",
    "type": "动画",
    "genre": "运动 / 同性 / 竞技",
    "tags": [
      "花样滑冰",
      "师生恋",
      "俄日合璧",
      "神仙作画",
      "励志"
    ],
    "desc": "屡战屡败的花滑选手，在偶像的复制版编舞下迎来职业生涯最终赛季。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "快乐到家",
    "file": "movie-127.html",
    "cover": "./127.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭喜剧",
    "tags": [
      "宠物",
      "春节",
      "合家欢",
      "狗狗",
      "寻亲"
    ],
    "desc": "一只会微笑的流浪狗，串联起三个破碎家庭，在除夕夜前完成了一场奇迹般的重逢。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "我的青春道馆",
    "file": "movie-128.html",
    "cover": "./128.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 运动 / 剧情",
    "tags": [
      "跆拳道",
      "热血",
      "成长",
      "师徒"
    ],
    "desc": "一个破产富二代与一个退休散打王，在一家濒临倒闭的破道馆里互相拯救。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "济公：降龙罗汉",
    "file": "movie-129.html",
    "cover": "./129.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻、动作、古装",
    "tags": [
      "疯癫和尚",
      "降龙",
      "前传"
    ],
    "desc": "降龙罗汉被贬下凡前，需在一天之内度化三个“无可救药”的凡人，否则灰飞烟灭。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "阵头",
    "file": "movie-130.html",
    "cover": "./130.jpg",
    "year": "2012",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情，励志",
    "tags": [
      "台湾民俗",
      "醒狮团",
      "父子情",
      "少年成长"
    ],
    "desc": "一个逃学打架的“阵头”世家逆子，被迫接管濒临解散的烂摊子，却带出一支震撼全台的创新醒狮团。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "遇难者们",
    "file": "movie-131.html",
    "cover": "./131.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "灾难 / 惊悚",
    "tags": [
      "人祸灾难",
      "隧道坍塌",
      "直播审判",
      "社会批判"
    ],
    "desc": "隧道坍塌后，被困的十二个遇难者在黑暗中听到了地面上的直播：政府正在讨论要不要救他们。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "英勇赞曲",
    "file": "movie-132.html",
    "cover": "./132.jpg",
    "year": "2019",
    "region": "印度",
    "type": "电影",
    "genre": "战争、剧情、动作",
    "tags": [
      "英雄主义",
      "维和部队",
      "真实故事改编",
      "催泪"
    ],
    "desc": "1993年索马里维和行动中，一支被包围的印度排，用血肉之躯为平民撑起最后48小时的生命通道。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "小二班之变身老爸",
    "file": "movie-133.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 家庭",
    "tags": [
      "亲子",
      "变身",
      "校园"
    ],
    "desc": "霸道总裁与女儿互换身体后，被小学生作业逼疯了。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "1990 血战纽约城",
    "file": "movie-134.html",
    "cover": "./134.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作犯罪",
    "tags": [
      "黑帮",
      "复仇",
      "街头枪战"
    ],
    "desc": "1990年平安夜，四股黑帮因一批失踪的毒资在地狱厨房展开18小时无休火拼。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "荷索之秘境梦游",
    "file": "movie-135.html",
    "cover": "./135.jpg",
    "year": "2026",
    "region": "德国",
    "type": "电影",
    "genre": "纪录片 / 奇幻",
    "tags": [
      "狂热影像",
      "雨林哲学",
      "虚构纪实"
    ],
    "desc": "德国导演荷索声称自己梦见了亚马逊雨林深处一座活的、会呼吸的废弃剧院。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "荒漠杀机",
    "file": "movie-136.html",
    "cover": "./136.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖惊悚",
    "tags": [
      "公路片",
      "荒漠",
      "修车",
      "地下人口",
      "德州"
    ],
    "desc": "一对情侣在德州荒漠抛锚，被好心的修车工救回社区，却发现那里所有居民都没有影子。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "灵域",
    "file": "movie-137.html",
    "cover": "./137.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻, 动作, 冒险",
    "tags": [
      "异世界",
      "东方美学",
      "团队作战",
      "灵兽"
    ],
    "desc": "平凡少年意外开启体内“灵脉”，被迫进入人与灵兽共存的九重灵域，争夺能实现一个愿望的“灵源之心”。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "美丽的日子",
    "file": "movie-138.html",
    "cover": "./138.jpg",
    "year": "2001",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情 / 家庭",
    "tags": [
      "孤儿",
      "姐妹情",
      "绝症",
      "乐团"
    ],
    "desc": "在孤儿院相依为命的两姐妹被不同家庭领养，二十年后重逢时，妹妹成了姐姐男友的前女友。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "罗宾汉的真实故事",
    "file": "movie-139.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "动作, 历史, 悬疑",
    "tags": [
      "侠盗",
      "考古",
      "身份反转"
    ],
    "desc": "一群现代考古系学生发现历史文献中的罗宾汉其实是女性，教会为此隐瞒了近八百年。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "我不是罪犯",
    "file": "movie-140.html",
    "cover": "./140.jpg",
    "year": "2023",
    "region": "中国",
    "type": "剧集",
    "genre": "悬疑， 犯罪， 剧情",
    "tags": [
      "冤案",
      "重生",
      "律师",
      "复仇"
    ],
    "desc": "含冤入狱十五年的天才程序员出狱后成了流浪汉，他唯一的复仇方式，是给当年的审判者每人写一行代码。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "萨拉甜品店",
    "file": "movie-141.html",
    "cover": "./141.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "美食",
      "治愈",
      "女性",
      "传承",
      "小镇"
    ],
    "desc": "巴黎甜点师萨拉继承乡下老宅后，发现一本尘封锁定的祖传食谱。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "吸血鬼不死",
    "file": "movie-142.html",
    "cover": "./142.jpg",
    "year": "2024",
    "region": "英国 / 美国",
    "type": "剧集",
    "genre": "恐怖 / 喜剧 / 奇幻",
    "tags": [
      "吸血鬼",
      "永生",
      "黑色幽默",
      "伦敦",
      "现代生活"
    ],
    "desc": "三个来自不同世纪的吸血鬼合租在伦敦地下室，为了不被赶走，他们必须像凡人一样上班、交税、处理人际关系。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "失控的校园",
    "file": "movie-143.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "动作, 惊悚, 剧情",
    "tags": [
      "校园暴力",
      "以暴制暴",
      "拳击",
      "复仇"
    ],
    "desc": "沉默的学霸通过黑市拳录像自学格斗，决定在毕业典礼那天对校霸发起公开挑战。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "思无邪",
    "file": "movie-144.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "文艺悬疑",
    "tags": [
      "师生恋",
      "文学",
      "心理操控",
      "低语"
    ],
    "desc": "文学系教授发现，他的每一任女友，最后都会说出同一句只有他前妻知道的秘密。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "命运理发师",
    "file": "movie-145.html",
    "cover": "./145.jpg",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "tags": [
      "讽刺",
      "社会",
      "小人物"
    ],
    "desc": "一个只能给贱民理发的乡村理发师，因为一把祖传的剪刀，意外成了决定全村选举的关键一票。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "军官与魔鬼",
    "file": "movie-146.html",
    "cover": "./146.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "战争, 奇幻",
    "tags": [
      "朝韩分裂",
      "驱魔",
      "人性拷问"
    ],
    "desc": "朝鲜战争停火线地下，一名韩国军官与附身美军的恶魔签订了停战协议。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "华盛顿夫人去了史密斯",
    "file": "movie-147.html",
    "cover": "./147.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "tags": [
      "政治惊悚",
      "身份置换",
      "黑色幽默"
    ],
    "desc": "第一夫人独自前往神秘“史密斯先生”的庄园，却发现自己踏入了政治傀儡的屠宰场。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "无援",
    "file": "movie-148.html",
    "cover": "./148.jpg",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争惊悚",
    "tags": [
      "狙击手",
      "绝境",
      "电台",
      "心理战",
      "雪原"
    ],
    "desc": "一名苏军狙击手被困在废墟中，唯一的战友是一部只能用摩斯密码交流的敌台。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "春琴抄",
    "file": "movie-149.html",
    "cover": "./149.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "爱情/文艺",
    "tags": [
      "虐恋",
      "唯美",
      "古典名著改编",
      "极致美学"
    ],
    "desc": "富家盲女琴师与仆人佐助的惊世虐恋，佐助为了永远留在师傅的绝美世界里，竟自刺双目。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "西岳奇童",
    "file": "movie-150.html",
    "cover": "./150.jpg",
    "year": "2026",
    "region": "中国",
    "type": "电影",
    "genre": "奇幻动作",
    "tags": [
      "神话改编",
      "少年英雄",
      "视觉奇观"
    ],
    "desc": "少年沉香为救被压华山的母亲，必须破解老狐狸设下的“六欲迷魂阵”，烧毁宝莲灯灯芯。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "夏洛特",
    "file": "movie-151.html",
    "cover": "./1.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "传记 / 剧情 / 战争",
    "tags": [
      "真实人物改编",
      "大屠杀",
      "艺术与生存"
    ],
    "desc": "犹太裔画家夏洛特·萨洛蒙，在被送进奥斯维辛前，画出了她的一生。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "全民弄潮季",
    "file": "movie-152.html",
    "cover": "./2.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "喜剧、剧情、年代",
    "tags": [
      "改革开放",
      "温州商人",
      "创业",
      "粤语金曲"
    ],
    "desc": "1980年代，南方小镇上一群底层小人物趁着改革开放的浪潮，从倒卖电子表开始，一步步缔造了服装帝国。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "人怕出名猪怕壮",
    "file": "movie-153.html",
    "cover": "./3.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 黑色幽默, 社会",
    "tags": [
      "网红乱象",
      "农村大爷",
      "反向营销",
      "流量反噬"
    ],
    "desc": "一个养了十年猪的四川老农民，因为猪会“算数”突然爆红，结果全村开始逼他教每头猪背九九乘法表。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "神龙策",
    "file": "movie-154.html",
    "cover": "./4.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装, 动作",
    "tags": [
      "武侠",
      "权谋",
      "夺宝",
      "反转"
    ],
    "desc": "一张能召唤“神龙”的神秘兵符重现江湖，却引出了二十年前一场灭门冤案的真相。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "走向远方",
    "file": "movie-155.html",
    "cover": "./5.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "年代情感",
    "tags": [
      "改革开放",
      "深圳",
      "创业"
    ],
    "desc": "1984年，六个北方青年扒火车去深圳，有人在蛇口成了亿万富翁，有人在罗湖永远闭上了眼睛。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "暹罗诅咒",
    "file": "movie-156.html",
    "cover": "./6.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "邪神",
      "考古",
      "古代仪式"
    ],
    "desc": "一支考古队在泰国地下洞穴发现了一尊千年前的双面神像，随后队员们开始按照“雕版印刷术”的顺序逐一死亡。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "女汉子真爱公式",
    "file": "movie-157.html",
    "cover": "./7.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 爱情",
    "tags": [
      "职场",
      "反差萌",
      "合租",
      "逆袭",
      "毒舌"
    ],
    "desc": "一个格斗冠军为还债假扮男模入主时尚公司，却发现女总裁是自己的初恋。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "明日战争",
    "file": "movie-158.html",
    "cover": "./8.jpg",
    "year": "2023",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "科幻, 战争, 动作",
    "tags": [
      "穿越时空",
      "硬核科幻",
      "钢铁洪流",
      "平行世界"
    ],
    "desc": "2045年的人类濒临灭亡，向2023年发送求救信号，却发现要对抗的敌人是另一个时间线的自己。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "以她之名",
    "file": "movie-159.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "伊朗 / 法国",
    "type": "电影",
    "genre": "剧情 / 女性",
    "tags": [
      "女性觉醒",
      "诗意反抗",
      "禁片气质"
    ],
    "desc": "一个被禁止唱歌的女人，用身体的舞蹈在大地上写下一首无声的抗议诗。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "少年间谍第一季",
    "file": "movie-160.html",
    "cover": "./10.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "动作 / 悬疑 / 青少年",
    "tags": [
      "间谍",
      "天才少年",
      "寄宿学校",
      "阴谋",
      "现代"
    ],
    "desc": "一名被神秘组织收养的天才少年，刚被送入一所顶级寄宿学校，就发现这所学校其实是特工培养基地。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "最终生还者",
    "file": "movie-161.html",
    "cover": "./11.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 恐怖 / 生存",
    "tags": [
      "末世",
      "克隆人伦理",
      "孤独恐惧"
    ],
    "desc": "一场瘟疫后地球上只剩他一人，十年后他发现了另一个“人”——一个和他一模一样的克隆体。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "小混乱",
    "file": "movie-162.html",
    "cover": "./12.jpg",
    "year": "2014",
    "region": "英国",
    "type": "电影",
    "genre": "爱情，剧情",
    "tags": [
      "凡尔赛",
      "园艺",
      "阶级",
      "寡妇",
      "宫廷"
    ],
    "desc": "凡尔赛宫的园艺师之争：一个丧夫的女园艺师被路易十四选中设计喷泉，她的“小混乱”风格惊艳了国王，也惹怒了整个宫廷。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "征服钱海",
    "file": "movie-163.html",
    "cover": "./13.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情、金融、犯罪",
    "tags": [
      "华尔街",
      "欺诈",
      "卧底",
      "兄弟反目",
      "资本游戏"
    ],
    "desc": "一对草根兄弟潜入华尔街顶级对冲基金做卧底，哥哥却渐渐沉迷金钱游戏，弟弟不得不亲手将他送入监狱。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "我的人格合租屋",
    "file": "movie-164.html",
    "cover": "./14.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻，喜剧，心理",
    "tags": [
      "多重人格",
      "合租",
      "自我和解",
      "脑洞"
    ],
    "desc": "社畜女主突然闯入自己人格居住的“内心合租屋”，必须和暴躁、懦弱、虚荣等自己和解。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "拆局专家粤语",
    "file": "movie-165.html",
    "cover": "./15.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "犯罪 / 悬疑",
    "tags": [
      "粤语原声",
      "都市传说",
      "灰色地带",
      "智斗",
      "单元破局"
    ],
    "desc": "五个没有身份的人专门替人“拆解”死局，直到他们接下一单牵扯二十年前警魔悬案的神秘委托。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "魔法小歌王",
    "file": "movie-166.html",
    "cover": "./16.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻 / 音乐 / 校园",
    "tags": [
      "唱歌魔法",
      "音乐对决",
      "声优阵容",
      "少年热血"
    ],
    "desc": "废柴中学生发现，只要自己唱起卡拉OK，就能让身边的人陷入无休止的合唱魔法中，根本停不下来。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "观鸟大年",
    "file": "movie-167.html",
    "cover": "./17.jpg",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 剧情, 冒险",
    "tags": [
      "观鸟",
      "中年危机",
      "比赛",
      "治愈"
    ],
    "desc": "三个不同年龄段的男人，为了争夺北美年度“观鸟大年”冠军，展开了疯狂的追鸟竞赛。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "小美人鱼2：重返大海",
    "file": "movie-168.html",
    "cover": "./18.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动画, 奇幻, 冒险, 家庭",
    "tags": [
      "迪士尼",
      "续集",
      "反叛",
      "海洋环保",
      "女性成长"
    ],
    "desc": "爱丽儿当了 10 年王妃，发现自己患上了一种“变回人鱼就会死”的怪病，她必须在婚姻与大海间抉择。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "突破粤语",
    "file": "movie-169.html",
    "cover": "./19.jpg",
    "year": "2027",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 音乐",
    "tags": [
      "方言",
      "嘻哈",
      "代际冲突"
    ],
    "desc": "一个只唱粤语硬核说唱的叛逆青年，被迫给他守旧的粤剧名伶爷爷当保姆。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "不可思议的收缩人",
    "file": "movie-170.html",
    "cover": "./20.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 惊悚",
    "tags": [
      "微观世界",
      "生存挑战",
      "身体恐怖"
    ],
    "desc": "物理学家在一次量子事故中开始无限收缩，最终在自家的后院里，将一只瓢虫视为哥斯拉般的巨兽。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "红柿子",
    "file": "movie-171.html",
    "cover": "./21.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "眷村",
      "外省人",
      "柿子",
      "记忆",
      "失智症"
    ],
    "desc": "一个患失智症的山东老兵，把台北眷村的家当作大陆老家的柿子林，他的台日混血孙女试图用一颗红柿子帮他找回记忆。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "摩根",
    "file": "movie-172.html",
    "cover": "./22.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻, 悬疑, 惊悚",
    "tags": [
      "AI觉醒",
      "仿生人",
      "心理战",
      "伦理困境"
    ],
    "desc": "世界上最先进的AI仿生人“摩根”产生了自我意识，但她声称自己不想自由，只想被“销毁”。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "我的干爹是个贼",
    "file": "movie-173.html",
    "cover": "./23.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧",
    "tags": [
      "亲情",
      "乌龙",
      "都市",
      "犯罪"
    ],
    "desc": "一个街头小偷偷走了富商的公文包，发现里面除了钱还有一个弃婴，只好一边当奶爸一边躲避追杀。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "乖女唔易做",
    "file": "movie-174.html",
    "cover": "./24.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情, 家庭",
    "tags": [
      "香港",
      "女性",
      "代际",
      "压力",
      "成长"
    ],
    "desc": "香港一家三代女性同住一个屋檐下，每个人都活成了对方眼中的“不乖”。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "三五成群",
    "file": "movie-175.html",
    "cover": "./25.jpg",
    "year": "2011",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/黑色幽默",
    "tags": [
      "小人物",
      "荒诞",
      "多线叙事"
    ],
    "desc": "五个不同身份的香港小人物，因为一张中了头奖却丢失的彩票，命运纠缠在一起。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "约会专家",
    "file": "movie-176.html",
    "cover": "./26.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 喜剧, 都市",
    "tags": [
      "恋爱指南",
      "单元剧",
      "群像",
      "轻松幽默"
    ],
    "desc": "四个性格迥异的“约会专家”组成恋爱策划公司，专治各种爱情疑难杂症，却搞不定自己的感情。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "巴塞罗那，夏日黄昏",
    "file": "movie-177.html",
    "cover": "./27.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "genre": "爱情，剧情，文艺",
    "tags": [
      "偶遇",
      "城市漫游",
      "限时浪漫"
    ],
    "desc": "日落前六小时，两个陌生人在巴塞罗那的街头交换了彼此的全部秘密，却约定不问姓名。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "好心作怪粤语",
    "file": "movie-178.html",
    "cover": "./28.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑, 喜剧",
    "tags": [
      "换心",
      "性格突变",
      "黑帮",
      "粤语"
    ],
    "desc": "懦弱社工移植了黑帮大佬的心脏后，突然成了油尖旺区的“夜间调解王”。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "鬼切丸",
    "file": "movie-179.html",
    "cover": "./29.jpg",
    "year": "2019",
    "region": "日本",
    "type": "剧集",
    "genre": "恐怖 / 动作 / 奇幻",
    "tags": [
      "妖怪",
      "武士",
      "宿命",
      "血腥",
      "复仇"
    ],
    "desc": "传说中的除魔刀“鬼切丸”竟化作人形，追杀自己的制造者。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "豆特么黑",
    "file": "movie-180.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧， 犯罪， 黑色幽默",
    "tags": [
      "荒诞",
      "小人物",
      "绑架",
      "方言"
    ],
    "desc": "三个笨贼绑架了富豪的宠物黑豆柴，没想到这只狗是黑帮洗钱的唯一“证人”。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "从天而降的圣诞老人",
    "file": "movie-181.html",
    "cover": "./31.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻， 家庭， 喜剧",
    "tags": [
      "圣诞魔法",
      "反向穿越",
      "温情"
    ],
    "desc": "圣诞老人在送货途中坠毁在一名无神论的单亲妈妈家后院，为了回家，他必须让这个家庭相信魔法。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "共助",
    "file": "movie-182.html",
    "cover": "./32.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 剧情",
    "tags": [
      "南北韩",
      "刑警合作",
      "兄弟情",
      "追逃"
    ],
    "desc": "朝鲜刑警与韩国刑警被迫合作追捕脱北杀手，却发现彼此追的是同一个人，却为了不同的正义。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "黑色星期一第三季",
    "file": "movie-183.html",
    "cover": "./33.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情，金融，黑色喜剧",
    "tags": [
      "华尔街",
      "崩盘",
      "精英",
      "骗局"
    ],
    "desc": "1989年股灾过去两年后，一群被华尔街抛弃的疯子，决定亲手制造下一次崩盘。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "塔皮第一季",
    "file": "movie-184.html",
    "cover": "./34.jpg",
    "year": "2025",
    "region": "法国",
    "type": "剧集",
    "genre": "传记 / 剧情 / 体育",
    "tags": [
      "足球",
      "商业帝国",
      "逆袭人生",
      "80年代"
    ],
    "desc": "从送货员到马赛主席，他用一张嘴和一颗疯狂的胆，改写了法国足球史。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "金猴降妖",
    "file": "movie-185.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画",
    "genre": "动作、奇幻、暗黑神话",
    "tags": [
      "孙悟空",
      "颠覆改编",
      "暗黑美学",
      "大尺度",
      "人性拷问"
    ],
    "desc": "取经归来，金猴被诬为妖，昔日英雄如今必须向整个天庭证明“魔”亦有善心。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "樱桃小番茄",
    "file": "movie-186.html",
    "cover": "./36.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": [
      "母女",
      "移民",
      "农场"
    ],
    "desc": "一个从韩国移民到美国阿肯色州的单亲妈妈，靠种樱桃小番茄把叛逆的女儿送进了耶鲁，代价是两人十年没有说话。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "彼时生命",
    "file": "movie-187.html",
    "cover": "./37.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 治愈",
    "tags": [
      "遗物整理",
      "创伤",
      "救赎",
      "死亡教育"
    ],
    "desc": "两个背负着沉重过去的年轻人，在一份遗物整理工作中，开始学习如何面对死亡并重新拥抱生活。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "炫击勇者之炫击战卡",
    "file": "movie-188.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动画、热血、竞技",
    "tags": [
      "卡牌对战",
      "机甲",
      "校园",
      "友情",
      "成长"
    ],
    "desc": "少年意外获得远古炫击战卡，在校园卡牌联赛中挑战垄断冠军的财阀战队。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "阿姆齐亚·金的竞争对手",
    "file": "movie-189.html",
    "cover": "./39.jpg",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑，剧情",
    "tags": [
      "出版业",
      "作家",
      "谋杀",
      "双胞胎"
    ],
    "desc": "畅销书作家阿姆齐亚·金的新书里完美预言了一场谋杀，而死者正是她失散二十年的双胞胎妹妹。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "美国超级舰队",
    "file": "movie-190.html",
    "cover": "./40.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 战争 / 科幻",
    "tags": [
      "海军",
      "未来战争",
      "AI",
      "无人机",
      "灾难"
    ],
    "desc": "一支由人工智能控制的无人舰队失控，人类最强大的超级航母成为最后的指挥所。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "魔鬼同意令",
    "file": "movie-191.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖， 心理， 惊悚",
    "tags": [
      "恶魔附身",
      "法律",
      "契约",
      "宗教"
    ],
    "desc": "一位不信神的辩护律师，为了帮被控谋杀的女孩脱罪，在法庭上引经据典，试图证明杀人的是恶魔。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "汤姆索亚与哈克贝利芬",
    "file": "movie-192.html",
    "cover": "./42.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "冒险，家庭",
    "tags": [
      "马克吐温",
      "童年",
      "自由",
      "友谊",
      "密西西比河"
    ],
    "desc": "在那个蒸汽轮船轰鸣的年代，两个“坏孩子”为了拯救被贩卖的黑奴吉姆，驾驶木筏闯入了一场属于成年人的骗局。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "她的心动周末",
    "file": "movie-193.html",
    "cover": "./43.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 都市",
    "tags": [
      "女性群像",
      "慢生活",
      "治愈"
    ],
    "desc": "四个性格迥异的闺蜜，每周末聚会暴露了她们各自荒诞又真实的恋爱困境。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "班亚和蕾雨",
    "file": "movie-194.html",
    "cover": "./44.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 奇幻",
    "tags": [
      "平行时空",
      "雨季",
      "错过",
      "宿命",
      "文艺"
    ],
    "desc": "每当雨季来临，男孩班亚就会穿越到一个只有女孩蕾雨存在的平行世界，但他每次只能停留一天。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "我的鬼情人",
    "file": "movie-195.html",
    "cover": "./45.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情，恐怖，喜剧",
    "tags": [
      "人鬼恋",
      "前世今生",
      "泰式恐怖",
      "搞笑催泪"
    ],
    "desc": "女主被三个男鬼纠缠，原来他们上辈子都是她老公，这辈子要争抢投胎名额与她再续前缘。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "拼了命也要找到耶诞老人",
    "file": "movie-196.html",
    "cover": "./46.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 奇幻, 家庭",
    "tags": [
      "亲情",
      "绝症",
      "圣诞奇迹",
      "催泪"
    ],
    "desc": "一个身患绝症的单身父亲为了让女儿相信圣诞老人存在，拼尽全力在圣诞夜扮演一场童话。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "萨利机长",
    "file": "movie-197.html",
    "cover": "./47.jpg",
    "year": "2010",
    "region": "美国",
    "type": "电影",
    "genre": "传记 / 剧情",
    "tags": [
      "航空",
      "真实事件",
      "听证会",
      "英雄焦虑",
      "创伤"
    ],
    "desc": "迫降哈德逊河的真实英雄被调查委员会指控“不该迫降”，他必须在三天内证明自己是正确的。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "海军到来",
    "file": "movie-198.html",
    "cover": "./48.jpg",
    "year": "2022",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 历史 / 战争",
    "tags": [
      "二战",
      "意大利海军",
      "人性救赎",
      "群像刻画",
      "战俘交换"
    ],
    "desc": "1943年意大利投降后，一艘驱逐舰的船员面临一个抉择：把船交给盟军，还是炸沉它？",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "我们梦中的祥和",
    "file": "movie-199.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "tags": [
      "梦境",
      "集体潜意识",
      "治愈",
      "心理"
    ],
    "desc": "一座小镇居民的梦境突然相通，他们必须在共享的噩梦里找到制造恐惧的源头。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "神奇的汉字第二季",
    "file": "movie-200.html",
    "cover": "./50.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "文化, 益智",
    "tags": [
      "汉字",
      "竞赛",
      "传统文化"
    ],
    "desc": "汉字解读与竞技游戏全面升级，在拆解组合中重新发现每个汉字背后被遗忘的故事。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "沃土",
    "file": "movie-201.html",
    "cover": "./51.jpg",
    "year": "2024",
    "region": "法国 / 德国",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 惊悚",
    "tags": [
      "农庄",
      "家族秘密",
      "土地诅咒",
      "宗教隐喻",
      "心理惊悚"
    ],
    "desc": "为了继承农庄，三兄妹必须轮流耕种一块“人血浇灌”的荒地，每晚都会听到地下的低语。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "光，无所不在",
    "file": "movie-202.html",
    "cover": "./52.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "悬疑，家庭，灵异",
    "tags": [
      "摄影",
      "记忆",
      "超自然"
    ],
    "desc": "一位失明的老摄影师，竟冲洗出了从未存在过的照片，每一张都指向社区里那桩尘封二十年的失踪案。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "冲上九重天",
    "file": "movie-203.html",
    "cover": "./53.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "灾难动作",
    "tags": [
      "民航",
      "航空",
      "极限操作",
      "英雄机组"
    ],
    "desc": "一架载有三百人的客机在万米高空遭遇双发失效，副驾驶是唯一清醒的人，而她只有不到200小时的飞行经验。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "血之期中考2",
    "file": "movie-204.html",
    "cover": "./54.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖",
    "tags": [
      "校园",
      "血腥考试",
      "生存游戏",
      "反转",
      "罪与罚"
    ],
    "desc": "上一届“血之期中考”的幸存者作为老师回到学校，却发现新的考试比当年更残忍。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "剩女爱情",
    "file": "movie-205.html",
    "cover": "./55.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 喜剧, 都市",
    "tags": [
      "婚恋",
      "职场",
      "独立女性",
      "轻喜"
    ],
    "desc": "三个性格迥异的30+闺蜜组成“反逼婚联盟”，却意外在互助追爱和职场逆袭中找到了真我。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "香港，我们的故事",
    "file": "movie-206.html",
    "cover": "./56.jpg",
    "year": "2014",
    "region": "香港地区",
    "type": "纪录片",
    "genre": "纪录片， 历史",
    "tags": [
      "港人自述",
      "集体记忆",
      "时代变迁"
    ],
    "desc": "从制衣女工到茶餐厅老板，十二个普通港人用四十年讲述一座城市的起落。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "钢铁人",
    "file": "movie-207.html",
    "cover": "./57.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻, 动作, 喜剧",
    "tags": [
      "山寨英雄",
      "农民工",
      "硬核手工",
      "反超级英雄"
    ],
    "desc": "工地民工捡到一个外星铁疙瘩，焊成一套“钢铁战甲”去讨薪，意外成了全网最硬核的民间英雄。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "杀了龙马的人",
    "file": "movie-208.html",
    "cover": "./58.jpg",
    "year": "1970",
    "region": "日本",
    "type": "电影",
    "genre": "剧情， 历史， 悬疑",
    "tags": [
      "坂本龙马",
      "暗杀",
      "历史谜案"
    ],
    "desc": "坂本龙马被刺杀的深夜，六个嫌疑人在不同地点各自回忆，真相藏在六段谎言里。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "猫咪马汀",
    "file": "movie-209.html",
    "cover": "./59.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "genre": "动画、奇幻、家庭",
    "tags": [
      "猫",
      "外星来客",
      "治愈",
      "环保寓言"
    ],
    "desc": "一只流浪猫教会小女孩如何用呼噜声修复损坏的星球。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "小豆的旅程",
    "file": "movie-210.html",
    "cover": "./60.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画, 奇幻, 冒险",
    "tags": [
      "成长",
      "治愈",
      "东方美学",
      "生命轮回"
    ],
    "desc": "一颗不愿发芽的小豆子为了找回被风吹走的母亲，踏上了穿越四季的奇幻旅程。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "通宵",
    "file": "movie-211.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 悬疑, 黑色幽默",
    "tags": [
      "便利店夜班",
      "形形色色顾客",
      "12小时闭环",
      "社会切面"
    ],
    "desc": "一个通宵便利店夜班店员，在12小时里见证了12组顾客的秘密，却发现所有这些人都被同一个夜晚的同一件事串联。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "恶邻缠身2",
    "file": "movie-212.html",
    "cover": "./62.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 恐怖",
    "tags": [
      "黑色幽默",
      "邻里矛盾",
      "cult",
      "反套路",
      "荒诞"
    ],
    "desc": "新搬来的网红一家竟是驱魔世家，隔壁那对吵闹老夫妻的真实身份更让人毛骨悚然。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "布鲁克斯，草地和可爱脸孔",
    "file": "movie-213.html",
    "cover": "./63.jpg",
    "year": "2023",
    "region": "爱尔兰",
    "type": "电影",
    "genre": "文艺/剧情",
    "tags": [
      "疗养院",
      "摄影",
      "遗忘",
      "初夏"
    ],
    "desc": "一个被确诊阿尔茨海默症的老摄影师，用仅剩的三个月清晰记忆，为疗养院里每个即将忘记他的人拍一张不会忘记的照片。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "猎爱高手",
    "file": "movie-214.html",
    "cover": "./64.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情, 喜剧, 职场",
    "tags": [
      "律师",
      "离婚",
      "契约恋爱",
      "韩式浪漫",
      "欢喜冤家"
    ],
    "desc": "专门帮人打离婚官司的女律师，为了抢一笔遗产案，假装和对手律所的王牌谈恋爱。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "金枪铁马龙虎斗",
    "file": "movie-215.html",
    "cover": "./65.jpg",
    "year": "1977",
    "region": "中国台湾",
    "type": "电影",
    "genre": "动作 / 武侠",
    "tags": [
      "邵氏风格",
      "冷热兵器对决",
      "江湖恩怨"
    ],
    "desc": "民国初年，一名使金枪的枪王与一名骑铁马（摩托）的枪手，因女人和秘籍展开生死对决。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "中间的房子",
    "file": "movie-216.html",
    "cover": "./66.jpg",
    "year": "2018",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑，惊悚，剧情",
    "tags": [
      "心理恐怖",
      "邻居",
      "偷窥",
      "反转",
      "封闭空间"
    ],
    "desc": "失眠的建筑师发现自家位于两栋凶宅正中间，每晚都要听左右邻居的死亡重播。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "你们这些人",
    "file": "movie-217.html",
    "cover": "./67.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "tags": [
      "邻里冲突",
      "种族",
      "社区管理",
      "荒诞"
    ],
    "desc": "高档白人社区搬进首个黑人家庭，业主委员会出台了“欢迎但不打扰”的奇葩新规。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "替死鬼",
    "file": "movie-218.html",
    "cover": "./68.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "tags": [
      "鬼上身",
      "风水",
      "换命",
      "港式恐怖"
    ],
    "desc": "一名风水师为了给富商续命，骗来七个“替死鬼”入住凶宅，第八个入住者却主动要求“替死”。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "青空",
    "file": "movie-219.html",
    "cover": "./69.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "动画，青春",
    "tags": [
      "治愈",
      "夏日",
      "梦想",
      "成长"
    ],
    "desc": "一个无法开口说话的女孩，在废弃机场与一个梦想造飞机的男孩相遇，他们决定飞越那片永远的青空。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "戴洛奇小镇第一季",
    "file": "movie-220.html",
    "cover": "./70.jpg",
    "year": "2026",
    "region": "澳大利亚",
    "type": "剧集",
    "genre": "犯罪悬疑",
    "tags": [
      "黑色幽默",
      "小镇疑云",
      "女性视角",
      "探案",
      "荒诞"
    ],
    "desc": "戴洛奇小镇的男性接连死亡，两个性格迥异的女警探在破案中发现了小镇最大的秘密。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "八仙后传之国舅探亲",
    "file": "movie-221.html",
    "cover": "./71.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻 / 喜剧 / 古装",
    "tags": [
      "神仙下凡",
      "身份错位",
      "市井幽默"
    ],
    "desc": "曹国舅回现代家乡探亲，却发现八仙遗迹成了网红打卡地，自己则被误认为诈骗犯。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "神爱傻瓜",
    "file": "movie-222.html",
    "cover": "./72.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，剧情，奇幻",
    "tags": [
      "信仰",
      "奇迹",
      "小镇",
      "治愈"
    ],
    "desc": "一个自称能与上帝直接对话的“傻瓜”，用他笨拙却真诚的方式，改变了整个小镇。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "最美的乡村",
    "file": "movie-223.html",
    "cover": "./73.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 扶贫",
    "tags": [
      "女性群像",
      "非遗",
      "直播助农",
      "励志"
    ],
    "desc": "三个被生活“退货”的女人，回到乡村，把无人问津的庄稼地变成了时装周T台。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "爱丁顿",
    "file": "movie-224.html",
    "cover": "./74.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情 / 传记 / 科学",
    "tags": [
      "爱丁顿",
      "相对论",
      "日食",
      "科学史",
      "信仰"
    ],
    "desc": "1919年，天文学家爱丁顿用日食观测证明相对论，但他真正想证明的是：上帝也爱数学。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "致死之乐",
    "file": "movie-225.html",
    "cover": "./75.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑, 惊悚, 科幻",
    "tags": [
      "音乐",
      "病毒",
      "大逃杀",
      "节奏",
      "邪典"
    ],
    "desc": "一款神祕的“快乐音乐”APP席卷全球，听到的人会手舞足蹈直至骨骼碎裂。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "恐怖旅舍",
    "file": "movie-226.html",
    "cover": "./76.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚, 犯罪",
    "tags": [
      "背包客噩梦",
      "东欧犯罪",
      "血腥虐杀"
    ],
    "desc": "三名背包客住进一家便宜旅舍，却发现这里是为富豪猎人提供“猎物”的屠宰场。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "宇宙奇犬",
    "file": "movie-227.html",
    "cover": "./77.jpg",
    "year": "2024",
    "region": "英国 / 美国",
    "type": "电影",
    "genre": "动画 / 科幻 / 家庭",
    "tags": [
      "太空冒险",
      "拟人化动物",
      "拯救地球"
    ],
    "desc": "银河护卫队的猎犬们降落地球，它们拥有让万物萌化的超能力，却遇到了最大的克星：一只普通的橘猫。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "加州打字机",
    "file": "movie-228.html",
    "cover": "./78.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情, 奇幻, 剧情",
    "tags": [
      "打字机",
      "前世今生",
      "作家",
      "灵异"
    ],
    "desc": "畅销作家搬进 haunted 老宅，发现一台老式加州打字机会自动打出被遗忘的、自己前世作为日本殖民时期独立运动者的故事。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "三生万物",
    "file": "movie-229.html",
    "cover": "./79.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻, 剧情",
    "tags": [
      "轮回",
      "量子物理",
      "道德抉择"
    ],
    "desc": "物理学家发现灵魂是量子态，并在三次截然不同的人生中寻找拯救世界的关键。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "他是我的！",
    "file": "movie-230.html",
    "cover": "./80.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情, 同性, 喜剧",
    "tags": [
      "甜宠",
      "校园",
      "占有欲",
      "双向奔赴",
      "搞笑"
    ],
    "desc": "校霸和学霸因一场直播事故被迫同居，两人表面水火不容，背地里却暗戳戳吃醋。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "间谍船",
    "file": "movie-231.html",
    "cover": "./81.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "动作、悬疑、谍战",
    "tags": [
      "间谍",
      "游轮",
      "伪装",
      "背叛",
      "卧底"
    ],
    "desc": "一艘豪华游轮上，五名伪装成游客的间谍各为其主，而他们都不知道船上还藏着一颗核弹。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "这个美术部有问题！",
    "file": "movie-232.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧 / 爱情 / 校园",
    "tags": [
      "社团",
      "日常",
      "吐槽",
      "恋爱喜剧"
    ],
    "desc": "立志成为漫画家的小熊，发现美术部的部员们从不画画，每天都在进行奇怪的实验。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "依巴拉度时间",
    "file": "movie-233.html",
    "cover": "./83.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻、文艺、治愈",
    "tags": [
      "幻想世界",
      "时间",
      "记忆",
      "绘本风格",
      "唯美"
    ],
    "desc": "失忆的女孩在铁路终点站发现一列开往虚幻国度“依巴拉度”的列车，车程正好是一生。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "德凯奥特曼国语",
    "file": "movie-234.html",
    "cover": "./84.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻 / 动作 / 特摄",
    "tags": [
      "奥特曼",
      "热血",
      "保卫地球",
      "国语配音",
      "儿童与成人皆宜"
    ],
    "desc": "奏大在绝望中再次变身，却发现德凯的力量正在吞噬他的生命力，变身即是倒计时。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "家有儿女之神犬当家",
    "file": "movie-235.html",
    "cover": "./85.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧，家庭，科幻",
    "tags": [
      "合家欢",
      "狗狗说话",
      "AI科技",
      "怀旧情怀"
    ],
    "desc": "夏东海一家偶遇一只被外星能量辐射过的流浪狗，这只狗不仅能说人话，还能用高科技狗爪黑进学校的考试系统。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "百合的故事",
    "file": "movie-236.html",
    "cover": "./86.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭 / 同性",
    "tags": [
      "乡村",
      "花店",
      "母女",
      "代际和解",
      "治愈"
    ],
    "desc": "从城市逃回老家花店的她，在种植百合花的夏天里，重新认识了母亲和爱情。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "糟糕咨询",
    "file": "movie-237.html",
    "cover": "./87.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 喜剧",
    "tags": [
      "心理师",
      "黑色幽默",
      "行业乱象",
      "反转打脸"
    ],
    "desc": "一个刚被辞退的“野鸡心理咨询师”，把每位客户的秘密都写进了网络小说。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "伊莉莎白不见了",
    "file": "movie-238.html",
    "cover": "./88.jpg",
    "year": "2021",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "tags": [
      "阿尔茨海默症",
      "失踪谜团",
      "时间碎片",
      "亲情"
    ],
    "desc": "患阿尔茨海默症的莫莉总忘记自己藏过什么，却坚信闺蜜伊莉莎白已经人间蒸发。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "赌王出山",
    "file": "movie-239.html",
    "cover": "./89.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪、动作、悬疑",
    "tags": [
      "赌术",
      "千门",
      "复仇",
      "东南亚赌场"
    ],
    "desc": "隐退十年的赌王被神秘信件逼出山，发现当年害他家破人亡的仇人如今已是澳门赌场大亨。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "动态漫画·开局强吻裂口女",
    "file": "movie-240.html",
    "cover": "./90.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画",
    "genre": "恐怖, 搞笑, 恋爱",
    "tags": [
      "都市传说",
      "反套路",
      "沙雕",
      "动态漫画"
    ],
    "desc": "普通高中生被传说中的裂口女追捕，生死关头，他脑子一抽，摘下口罩强吻了她。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "麦特与麦斯",
    "file": "movie-241.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "加拿大",
    "type": "电影",
    "genre": "剧情 / 同性",
    "tags": [
      "兄弟情",
      "误会",
      "青春",
      "成长"
    ],
    "desc": "一对从小一起长大的异姓兄弟，因为一次酒后乱性的吻，陷入了长达十年的情感误会与自我逃避。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "所有错误的配料",
    "file": "movie-242.html",
    "cover": "./92.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "惊悚、悬疑",
    "tags": [
      "餐厅暗战",
      "下毒",
      "反转不断",
      "高智商对决",
      "黑色电影"
    ],
    "desc": "米其林餐厅后厨，副厨为了顶替主厨位置，精心策划了一场完美下毒，却意外牵扯出八年前的悬案。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "异形魔种",
    "file": "movie-243.html",
    "cover": "./93.jpg",
    "year": "2025",
    "region": "美国 / 加拿大",
    "type": "电影",
    "genre": "科幻 / 恐怖 / 生物",
    "tags": [
      "寄生",
      "南极",
      "实验室",
      "变异",
      "生存"
    ],
    "desc": "南极科考站挖出冰冻十万年的生物样本，队员发现它并非入侵，而是在试图“治愈”人类。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "永远强壮",
    "file": "movie-244.html",
    "cover": "./94.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 家庭 / 运动",
    "tags": [
      "老年健身",
      "祖孙情",
      "阿尔茨海默",
      "举重",
      "自我和解"
    ],
    "desc": "退役举重冠军爷爷得了阿兹海默，唯有陪他练举重，孙女才能帮他留住最后一段记忆。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "取长补短",
    "file": "movie-245.html",
    "cover": "./95.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "tags": [
      "教育",
      "互换人生",
      "成长",
      "温情"
    ],
    "desc": "一个学霸与一个学渣意外互换身体，被迫用对方的短板挑战人生高考。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "继承杯",
    "file": "movie-246.html",
    "cover": "./96.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧",
    "tags": [
      "喜剧",
      "赛车",
      "父子",
      "传承",
      "运动"
    ],
    "desc": "曾经的拉力车王被儿子骗去参加一场“民间卡丁车赛”，而比赛的奖杯是儿子自己用3D打印做的。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "纽约我爱你",
    "file": "movie-247.html",
    "cover": "./97.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "tags": [
      "纽约",
      "拼盘",
      "城市",
      "邂逅",
      "温情"
    ],
    "desc": "深夜的纽约地铁里，十个互不相识的人，用十种语言说出了同一句话：“谢谢，今晚我差点就不想活了。”",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "来来往往",
    "file": "movie-248.html",
    "cover": "./98.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭, 公路",
    "tags": [
      "出租车",
      "父女和解",
      "城市变迁",
      "纪实风格"
    ],
    "desc": "一个即将被网约车淘汰的52岁出租车司机，在最后一天开出租时，载到了一个与自己年轻时长得一模一样的女孩，她说她来自未来。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "血肉狂魔",
    "file": "movie-249.html",
    "cover": "./99.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖、血腥、动作",
    "tags": [
      "丧尸变异",
      "生存",
      "肉体恐怖",
      "极限打斗"
    ],
    "desc": "一种让人类肌肉无限增长的病毒爆发后，健美冠军成了人类最后的希望。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "女巡特警蜂鸟突击队",
    "file": "movie-250.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "动作， 刑侦",
    "tags": [
      "女子特警",
      "卧底",
      "姐妹情",
      "格斗"
    ],
    "desc": "六名女警组成秘密突击队，以“蜂鸟”为代号，在城市暗面执行不可公开的高危任务。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "灵马神驱",
    "file": "movie-251.html",
    "cover": "./101.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻, 冒险, 家庭",
    "tags": [
      "蒙古马",
      "守护",
      "少年",
      "草原"
    ],
    "desc": "失去双亲的城市少年阿吉雅，在草原遇到一匹只有他能看见的“幽灵野马”，人马联手对抗偷猎集团。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "断肠云雨热情花",
    "file": "movie-252.html",
    "cover": "./102.jpg",
    "year": "1967",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情，文艺",
    "tags": [
      "邵氏",
      "苦情",
      "民国"
    ],
    "desc": "歌女嫁入豪门后被婆婆百般刁难，丈夫出征后她独自面对一场蓄谋已久的家产争夺战。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "保龄大对决",
    "file": "movie-253.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "动作, 喜剧, 犯罪",
    "tags": [
      "保龄球",
      "以暴制暴",
      "黑色幽默"
    ],
    "desc": "为了救回被绑架的女儿，一位过气保龄球冠军必须用特制的“杀人保龄球”，在一局定生死的对决中，击败黑帮九球天后。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "罗莎娜",
    "file": "movie-254.html",
    "cover": "./104.jpg",
    "year": "2019",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 历史",
    "tags": [
      "二战",
      "女性",
      "抵抗运动",
      "意大利"
    ],
    "desc": "1943年的佛罗伦萨，犹太女孩罗莎娜用一把小提琴对抗纳粹的子弹。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "石俊峰办案记",
    "file": "movie-255.html",
    "cover": "./105.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "刑侦 / 悬疑 / 纪实",
    "tags": [
      "基层民警",
      "市井江湖",
      "单元探案",
      "烟火气"
    ],
    "desc": "一个满嘴跑火车的菜鸟片警，靠着一本《刑法》和一张碎嘴，硬是破了辖区内悬而未决的二十桩“小案”。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "献身给魔王伊伏洛基亚吧",
    "file": "movie-256.html",
    "cover": "./106.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻，耽美，恋爱",
    "tags": [
      "异世界",
      "魔王",
      "契约婚姻"
    ],
    "desc": "社畜杏奈被召唤到异世界，魔王告诉她：献上自己，就能拯救两个世界。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "天衣行动",
    "file": "movie-257.html",
    "cover": "./107.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 谍战 / 悬疑",
    "tags": [
      "民国",
      "奇技淫巧",
      "密室破局"
    ],
    "desc": "1941年上海，几个顶级裁缝被关进一间密室，他们必须在12小时内做出一件能藏下微型胶卷的“天衣”。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "羊与钢的森林",
    "file": "movie-258.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 治愈 / 音乐",
    "tags": [
      "钢琴调律",
      "北海道",
      "匠人精神",
      "慢生活"
    ],
    "desc": "一个拥有绝对音感的失明调律师，在森林里发现了一架被遗弃的钢琴，里面住着一窝小羊。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "低头不见抬头见",
    "file": "movie-259.html",
    "cover": "./109.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭 / 喜剧 / 邻里",
    "tags": [
      "筒子楼",
      "群像",
      "生活流"
    ],
    "desc": "一栋即将拆迁的老筒子楼里，三户人家在最后90天里，演出了最真实的中国邻里情。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "王保长歪传",
    "file": "movie-260.html",
    "cover": "./110.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 历史",
    "tags": [
      "民国村长",
      "歪打正着",
      "方言喜剧"
    ],
    "desc": "民国四川龙隐镇，新上任的保长不识字，却靠一套歪理把贪官和军阀耍得团团转。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "东方秃鹰",
    "file": "movie-261.html",
    "cover": "./111.jpg",
    "year": "1987",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，战争",
    "tags": [
      "洪金宝",
      "越战",
      "敢死队",
      "暴力美学"
    ],
    "desc": "一群被军事法庭判死的重刑犯，空降越南执行自杀任务，炸毁美军遗留的军火库。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "穿越东西的小情歌",
    "file": "movie-262.html",
    "cover": "./112.jpg",
    "year": "2023",
    "region": "奥地利",
    "type": "电影",
    "genre": "爱情",
    "tags": [
      "音乐",
      "冷战",
      "柏林墙",
      "吉他"
    ],
    "desc": "东德哨兵爱上每天在西德边境唱情歌的流浪女歌手，他用拆解的步枪零件为她做了一把吉他。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "德国妹妹蒙古姊姊",
    "file": "movie-263.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "德国 / 蒙古",
    "type": "电影",
    "genre": "剧情 / 公路",
    "tags": [
      "收养",
      "寻根",
      "草原",
      "文化冲突",
      "女性"
    ],
    "desc": "被德国夫妇收养的蒙古女孩回到乌兰巴托寻找生母，却遇到了一个声称是她“姐姐”的德国背包客。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "色情世界",
    "file": "movie-264.html",
    "cover": "./114.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 情色, 心理, 社会",
    "tags": [
      "AV行业",
      "女性视角",
      "残酷写实",
      "禁忌"
    ],
    "desc": "一名为了还债进入AV行业的女大学生，逐渐发现“表演性爱”与“真实欲望”之间的可怕裂缝。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "锡瓦斯",
    "file": "movie-265.html",
    "cover": "./115.jpg",
    "year": "2022",
    "region": "土耳其",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "动物",
      "成长",
      "家庭",
      "羁绊",
      "治愈"
    ],
    "desc": "男孩与一头灵性白牛穿越安纳托利亚，在被迫献祭前夕揭开家族三代血泪史。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "鲸落",
    "file": "movie-266.html",
    "cover": "./116.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，家庭，文艺",
    "tags": [
      "老龄化",
      "亲情",
      "死亡",
      "深海"
    ],
    "desc": "阿尔茨海默症父亲临终前的最后七天，女儿才发现他藏了一辈子的秘密。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "情宿",
    "file": "movie-267.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情剧情",
    "tags": [
      "时光倒流",
      "宿命",
      "救赎"
    ],
    "desc": "一对相爱相杀四十年的怨侣，在离婚当天意外获得“回溯任意一天”的能力，却因此陷入了无限循环的纠缠。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "其他",
    "file": "movie-268.html",
    "cover": "./118.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 剧情",
    "tags": [
      "平行世界",
      "分身",
      "身份认同",
      "科幻悬疑",
      "惊悚"
    ],
    "desc": "一位大学教授发现身边陆续出现了与自己一模一样的人，他们拥有相同的记忆和指纹，但性格截然相反。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "奴隶屋",
    "file": "movie-269.html",
    "cover": "./119.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚, 社会",
    "tags": [
      "密室囚禁",
      "心理折磨",
      "阶级隐喻"
    ],
    "desc": "为了凑齐妹妹的医药费，她自愿走进富豪的地下别墅，却发现自己只是编号#73。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "寻找绝配情人",
    "file": "movie-270.html",
    "cover": "./120.jpg",
    "year": "2025",
    "region": "美国",
    "type": "综艺",
    "genre": "真人秀, 恋爱",
    "tags": [
      "素人",
      "心理学实验",
      "高概念",
      "反转",
      "社会实验"
    ],
    "desc": "十个“完美前任”被关进同一栋别墅，他们要帮彼此找到新恋人，但每配对成功一对，就会曝光一封前任写的恶毒信件。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "中华儿女",
    "file": "movie-271.html",
    "cover": "./121.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "剧情， 战争",
    "tags": [
      "抗日战争",
      "群像戏",
      "民间抵抗"
    ],
    "desc": "1937年南京沦陷后，一艘载满孤儿的小船顺着长江漂流，沿路不断有普通人跳入水中保护他们。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "结束，开始",
    "file": "movie-272.html",
    "cover": "./122.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": [
      "时间循环",
      "婚姻",
      "抉择",
      "文艺",
      "哲学"
    ],
    "desc": "在结束一段婚姻的第二天，这个女人发现时间开始倒流，每天都重复着同一个分手的早晨。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "南海归墟",
    "file": "movie-273.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险, 动作, 奇幻",
    "tags": [
      "海底墓",
      "沉船",
      "考古"
    ],
    "desc": "归墟国宝藏的传说指向珊瑚螺旋海域，探险队下水后却发现，海底的沉船里，有一艘是刚失踪不久的队友的船。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "乐高蝙蝠侠大电影",
    "file": "movie-274.html",
    "cover": "./124.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "genre": "动画 / 喜剧",
    "tags": [
      "乐高",
      "恶搞",
      "超级英雄"
    ],
    "desc": "蝙蝠侠必须学会和罗宾、蝙蝠女侠以及小丑组队，才能阻止哥谭市被乐高胶水粘成一块巨大的积木。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "哎咕岛消失的舔甜歌姬",
    "file": "movie-275.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑, 奇幻",
    "tags": [
      "荒诞",
      "邪典",
      "偶像",
      "岛民文化"
    ],
    "desc": "哎咕岛上唯一的歌姬突然消失，而她留下的最后一首歌里藏着岛上所有居民不愿面对的集体秘密。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "女王密使",
    "file": "movie-276.html",
    "cover": "./126.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑、谍战、剧情",
    "tags": [
      "王室",
      "特工",
      "宫斗",
      "阴谋",
      "女性力量"
    ],
    "desc": "表面是王室首席侍女，暗地里却是替女王铲除叛国者的终极密使，而她最大的敌人竟是自己深爱的王子。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "大搏杀",
    "file": "movie-277.html",
    "cover": "./127.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 犯罪",
    "tags": [
      "黑帮",
      "卧底",
      "终极一战"
    ],
    "desc": "退休卧底被黑白两道追杀，他用一个生日蛋糕盒里的手枪，单挑整个地下钱庄。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "吸血鬼猎人巴菲第五季",
    "file": "movie-278.html",
    "cover": "./128.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻，动作，恐怖",
    "tags": [
      "吸血鬼",
      "重启",
      "女英雄",
      "超自然",
      "成长"
    ],
    "desc": "重启版第五季，巴菲发现杀死她的不是某个恶魔，而是“猎人的宿命”本身——每一代猎人都活不过25岁。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "带子雄狼 冥府魔道",
    "file": "movie-279.html",
    "cover": "./129.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "时代剧动作",
    "tags": [
      "武士",
      "复仇",
      "暴力美学",
      "父子情"
    ],
    "desc": "拜一刀携幼子踏入冥府魔道，那里没有善恶，只有水母般漂浮的亡灵，以及一个等待他献祭儿子的邪神。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "古树旋律 剧场版",
    "file": "movie-280.html",
    "cover": "./130.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画",
    "genre": "奇幻, 音乐, 治愈",
    "tags": [
      "游戏改编",
      "钢琴",
      "亲情",
      "唯美画风"
    ],
    "desc": "孤独的钢琴家走进废弃豪宅，发现阁楼里住着操控植物生长的树灵女孩，她的歌声能治愈濒死的大树。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "独立幻梦",
    "file": "movie-281.html",
    "cover": "./131.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "模拟人生",
      "虚拟现实",
      "精神控制",
      "高科技惊悚",
      "反乌托邦"
    ],
    "desc": "一名游戏测试员进入一款号称“绝对真实”的VR游戏，却发现游戏里的NPC开始梦到他在现实中的生活。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "工会主义者",
    "file": "movie-282.html",
    "cover": "./132.jpg",
    "year": "2021",
    "region": "英国",
    "type": "电影",
    "genre": "剧情，惊悚",
    "tags": [
      "劳工权益",
      "职场霸凌",
      "阴谋论",
      "孤胆英雄"
    ],
    "desc": "一名仓库工人试图成立工会反抗压榨，却意外揭开了一个利用高科技监控操纵员工生死的黑暗系统。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "牛仔公主",
    "file": "movie-283.html",
    "cover": "./133.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "西部, 剧情",
    "tags": [
      "女性成长",
      "牧场",
      "家族恩怨",
      "女牛仔"
    ],
    "desc": "纽约名媛继承了一座西部牧场，她得在三个月内学会驯马、开枪，并击败想吞并土地的恶霸。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "巴黎末日的探戈",
    "file": "movie-284.html",
    "cover": "./134.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "科幻, 爱情",
    "tags": [
      "末日浪漫",
      "舞蹈",
      "时间逆行"
    ],
    "desc": "一颗陨石让巴黎时间开始倒流，一对分手恋人必须逆着时间重新相爱才能阻止毁灭。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "黑手",
    "file": "movie-285.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/犯罪",
    "tags": [
      "黑帮",
      "卧底",
      "断手",
      "复仇"
    ],
    "desc": "警方卧底被黑帮斩去右手，他装上机械义肢后，以黑道律师的身份重返权力中心。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "希德姐妹帮",
    "file": "movie-286.html",
    "cover": "./136.jpg",
    "year": "1988",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、犯罪",
    "tags": [
      "黑色幽默",
      "青春",
      "反叛",
      "小团体",
      "邪典"
    ],
    "desc": "高中里最刻薄的女生小团体，被一个更疯狂的男生带着玩起了真杀人游戏。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "表兄妹",
    "file": "movie-287.html",
    "cover": "./137.jpg",
    "year": "2012",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 爱情 / 悬疑",
    "tags": [
      "禁忌之恋",
      "家族秘密",
      "哥特",
      "谎言"
    ],
    "desc": "一对童年离散的表兄妹在葬礼上重逢并迅速坠入爱河，直到他们发现，他们的“父母”可能是一对杀人犯。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "风流房东",
    "file": "movie-288.html",
    "cover": "./138.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧，爱情",
    "tags": [
      "房东",
      "租客",
      "乌龙",
      "暧昧"
    ],
    "desc": "花花公子将公寓分租给三位美女，本想左拥右抱，结果被整得苦不堪言。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "赵氏孤儿 动画版",
    "file": "movie-289.html",
    "cover": "./139.jpg",
    "year": "2027",
    "region": "中国",
    "type": "电影",
    "genre": "动画, 历史, 悲剧",
    "tags": [
      "水墨风",
      "忠义",
      "暗黑童话"
    ],
    "desc": "用水墨动画重绘千古忠义传奇，程婴用自己的孩子替换赵氏孤儿的秘密，被一只全程旁观的墨蝶目睹。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "武器的选择",
    "file": "movie-290.html",
    "cover": "./140.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "动作 / 犯罪 / 惊悚",
    "tags": [
      "黑帮",
      "复仇",
      "冷兵器",
      "极简动作"
    ],
    "desc": "一个金盆洗手的黑帮杀手被迫重出江湖，但他拒绝使用枪械，只选择最古老的冷兵器，以对抗整个武装到牙齿的贩毒集团。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "虎度门",
    "file": "movie-291.html",
    "cover": "./141.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 家庭 / 戏曲",
    "tags": [
      "粤剧",
      "母女矛盾",
      "文化传承"
    ],
    "desc": "粤剧名伶在退休前最后一场《帝女花》中，意外发现前来砸场的叛逆女儿才是真正的传承者。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "你住在我心里",
    "file": "movie-292.html",
    "cover": "./142.jpg",
    "year": "2019",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情, 奇幻",
    "tags": [
      "灵魂互换",
      "单亲妈妈",
      "温馨",
      "轻喜剧"
    ],
    "desc": "毒舌单身女律师车祸后灵魂附在五岁自闭症男孩身上，必须和他单亲爸爸同居。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "小小驯鹿艾略特",
    "file": "movie-293.html",
    "cover": "./143.jpg",
    "year": "2022",
    "region": "英国",
    "type": "动画",
    "genre": "家庭 / 治愈 / 冒险",
    "tags": [
      "圣诞节",
      "自我认同",
      "微小英雄",
      "无声胜有声"
    ],
    "desc": "拥有史上最小鹿角的驯鹿艾略特，为了不拖累圣诞车队，独自穿越暴风雪寻找能发声的魔法铃铛。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "谍网寻凶",
    "file": "movie-294.html",
    "cover": "./144.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 谍战",
    "tags": [
      "暗网",
      "数字追踪",
      "卧底",
      "楼宇战"
    ],
    "desc": "一名被辞退的情报分析师发现，自己开发的追踪系统正被杀手用来猎杀曾经的同事。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "大象（电影）",
    "file": "movie-295.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "存在主义",
      "丧子之痛",
      "沉默",
      "生活流"
    ],
    "desc": "一个失去儿子的父亲，在儿子生前常去的动物园里，每天对着大象说话。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "白昼之雨",
    "file": "movie-296.html",
    "cover": "./146.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "连环杀手",
      "小镇秘密",
      "暴雨",
      "多重反转"
    ],
    "desc": "一场百年不遇的白昼暴雨，将六名各怀鬼胎的旅客困在山中旅馆，雨停时尸体出现了。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "我是冒险王2010",
    "file": "movie-297.html",
    "cover": "./147.jpg",
    "year": "2010",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 冒险",
    "tags": [
      "真人秀陷阱",
      "荒岛逃生",
      "伪纪录片",
      "自我绑架"
    ],
    "desc": "过气冒险真人秀明星伪造了一次荒岛失联，却在直播重启当天发现岛上真有食人部落。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "德古拉1931",
    "file": "movie-298.html",
    "cover": "./148.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 历史",
    "tags": [
      "德古拉",
      "大萧条",
      "另类历史",
      "吸血鬼"
    ],
    "desc": "1931年大萧条时期，真正的德古拉来到纽约华尔街，他发现吸血比吸人血更容易致富。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "红木大屠杀：歼灭",
    "file": "movie-299.html",
    "cover": "./149.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "丛林恐怖",
      "邪教",
      "血腥"
    ],
    "desc": "一群环保志愿者进入红木森林深处，唤醒了一个崇拜树木的食人邪教。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "警察故事续集",
    "file": "movie-300.html",
    "cover": "./150.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，犯罪",
    "tags": [
      "陈家驹",
      "实战",
      "街头",
      "暴力美学",
      "缉毒"
    ],
    "desc": "退休三年的陈家驹重出江湖，这次他的对手不是悍匪，而是把警局当成生意来做的“自己人”。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "有一座有40只狗的城堡",
    "file": "movie-301.html",
    "cover": "./1.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "剧情, 喜剧",
    "tags": [
      "贵族",
      "狗",
      "遗产",
      "古怪"
    ],
    "desc": "古怪的伯爵夫人去世前立下遗嘱：她的40只狗和城堡全部留给外甥，但条件是——他必须学会和狗说话。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "哈比人：意外旅程",
    "file": "movie-302.html",
    "cover": "./2.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻冒险",
    "tags": [
      "史诗",
      "魔幻",
      "远征",
      "勇气",
      "友谊"
    ],
    "desc": "当十三个矮人和一个哈比人踏上收复孤山之路，真正的危险并非巨龙，而是路上那个爱说谎的精灵。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "意乱情迷",
    "file": "movie-303.html",
    "cover": "./3.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 悬疑, 剧情",
    "tags": [
      "情欲",
      "催眠",
      "身份互换",
      "心理战"
    ],
    "desc": "心理医生催眠妻子治疗出轨阴影，醒来后妻子坚持认为“我是你的情妇”。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "六指琴魔1983",
    "file": "movie-304.html",
    "cover": "./4.jpg",
    "year": "1983",
    "region": "香港",
    "type": "电影",
    "genre": "武侠 / 动作",
    "tags": [
      "魔琴",
      "复仇",
      "港式奇诡"
    ],
    "desc": "灭门惨案中幸存的少女练成“天龙八音”魔琴，十年后她化身琴魔向六大派索命。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "监视：惊骇拼图",
    "file": "movie-305.html",
    "cover": "./5.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑, 惊悚, 犯罪",
    "tags": [
      "监控探头",
      "拼图杀人",
      "直播",
      "黑客"
    ],
    "desc": "全城监控被黑客控制，每晚直播一场“拼图式”谋杀，你必须看够一小时才能救人。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "战地风云",
    "file": "movie-306.html",
    "cover": "./6.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "战争, 剧情",
    "tags": [
      "阿富汗",
      "撤军",
      "道德",
      "选择"
    ],
    "desc": "美军撤出阿富汗时，一名翻译官被遗忘，两名士兵违规返回营救。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "爱情故事",
    "file": "movie-307.html",
    "cover": "./7.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 剧情 / 文艺",
    "tags": [
      "邂逅",
      "巴黎",
      "偶然",
      "话痨",
      "开放式结局"
    ],
    "desc": "在巴黎夜班公交车上，两个陌生人从午夜聊到天亮，然后谁都没有留联系方式。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "26种死法2",
    "file": "movie-308.html",
    "cover": "./8.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚, 犯罪",
    "tags": [
      "字母杀手",
      "连环杀人",
      "血腥",
      "解谜"
    ],
    "desc": "疯子杀人魔再次现身，这次他按照字母表倒序杀人，并给警方寄出了下一名受害者的“活体拼图”。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "乌龙服务员",
    "file": "movie-309.html",
    "cover": "./9.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 爱情",
    "tags": [
      "餐厅",
      "卧底",
      "富豪",
      "乌龙",
      "反转"
    ],
    "desc": "一个富二代为追女孩假扮成餐厅服务员，结果女孩没追到，餐厅被他经营成了米其林三星。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "城市风云",
    "file": "movie-310.html",
    "cover": "./10.jpg",
    "year": "1988",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "tags": [
      "改革初期",
      "倒爷",
      "兄弟情",
      "时代烙印",
      "写实"
    ],
    "desc": "80年代尾声，两个从东北到深圳的倒爷兄弟，在金钱浪潮中一个成了首富，一个进了监狱。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "眠狂四郎杀法帖",
    "file": "movie-311.html",
    "cover": "./11.jpg",
    "year": "1963",
    "region": "日本",
    "type": "电影",
    "genre": "动作, 剧情, 历史",
    "tags": [
      "时代剧",
      "剑客",
      "孤独",
      "宿命"
    ],
    "desc": "孤独的剑客眠狂四郎，以一招“圆月杀法”行走江湖，每一次挥剑都在斩断自己的过去。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "血色誓言",
    "file": "movie-312.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "台湾",
    "type": "剧集",
    "genre": "悬疑, 犯罪, 亲情",
    "tags": [
      "黑帮家族",
      "复仇",
      "同性禁忌",
      "警匪博弈"
    ],
    "desc": "黑帮老大之子阿青爱上警方卧底，在父亲临终病床前，他必须选择爱情还是血仇。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "进击巨人大战无敌猛鲨",
    "file": "movie-313.html",
    "cover": "./13.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 奇幻 / 灾难",
    "tags": [
      "特摄",
      "超巨大生物",
      "脑洞",
      "爽片"
    ],
    "desc": "太平洋底苏醒的史前巨鲨登陆东京，艾伦·耶格尔化身进击巨人在新宿展开跨次元大乱斗。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "五月天人生无限公司",
    "file": "movie-314.html",
    "cover": "./14.jpg",
    "year": "2019",
    "region": "中国台湾",
    "type": "电影",
    "genre": "音乐 / 纪录片",
    "tags": [
      "五月天",
      "演唱会",
      "摇滚",
      "励志"
    ],
    "desc": "一场巡回122场的演唱会背后，五个“上班族”如何用音乐为千万人建造了短暂逃离现实的避难所。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "仲夏之梦",
    "file": "movie-315.html",
    "cover": "./15.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情奇幻",
    "tags": [
      "极昼设定",
      "梦境穿梭",
      "纯爱"
    ],
    "desc": "在北极圈的极昼里，一个失眠的建筑师发现，只要自己睡着，就会进入一个女孩的梦中，而那女孩正在现实中寻找他。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "幕后情人",
    "file": "movie-316.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情， 喜剧， 职场",
    "tags": [
      "替身",
      "娱乐圈",
      "契约恋爱",
      "甜宠",
      "反转"
    ],
    "desc": "一个为了钱给顶流明星当“影子写手”的平凡女孩，被迫假扮他脾气暴躁的“秘密女友”，却意外发现了他的惊天秘密。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "我恐怖的16岁花季",
    "file": "movie-317.html",
    "cover": "./17.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 青春",
    "tags": [
      "校园霸凌",
      "时间回溯",
      "日记本",
      "复仇"
    ],
    "desc": "35岁的我回到16岁被霸凌的那年夏天，这一次我带着日记本、法律条文和一个连环杀手的记忆。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "莎莎艳史",
    "file": "movie-318.html",
    "cover": "./18.jpg",
    "year": "1968",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "tags": [
      "性解放",
      "都市独立女性",
      "60年代复古"
    ],
    "desc": "纽约秘书莎莎决定在一年内睡遍曼哈顿所有职业的男性，完成她的社会学论文。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "掠夺者",
    "file": "movie-319.html",
    "cover": "./19.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作犯罪",
    "tags": [
      "高智商犯罪",
      "黑色电影风格",
      "以暴制暴",
      "连环反转"
    ],
    "desc": "一群神秘劫匪专抢黑帮金库，却每次都留下一枚染血的金币，引出一位退休警探的致命过往。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "猎鹰飞过",
    "file": "movie-320.html",
    "cover": "./20.jpg",
    "year": "2024",
    "region": "土耳其",
    "type": "剧集",
    "genre": "动作, 谍战",
    "tags": [
      "无人机",
      "反恐",
      "女飞行员",
      "伊斯坦布尔"
    ],
    "desc": "退役女飞行员被召回驾驶国产隐形无人机“猎鹰”，追踪一名在伊斯坦布尔埋下毒气弹的叛逃特工。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "金玉满堂粤语",
    "file": "movie-321.html",
    "cover": "./21.jpg",
    "year": "1999",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧、家庭、商战",
    "tags": [
      "豪门",
      "争产",
      "粤语原声",
      "美食",
      "东山再起"
    ],
    "desc": "烧腊店老板因一碗叉烧饭被卷入豪门遗产案，被迫冒充失踪二十年的富家公子，却真的爱上了这个“假”家。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "金装律师第四季",
    "file": "movie-322.html",
    "cover": "./22.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 喜剧 / 律政",
    "tags": [
      "律所",
      "并购",
      "双男主",
      "职场博弈",
      "西装"
    ],
    "desc": "哈维与迈克的关系因一次超级并购案出现裂痕，旧友谊面临最大考验。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "迪厅孩童",
    "file": "movie-323.html",
    "cover": "./23.jpg",
    "year": "2021",
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 青春",
    "tags": [
      "90年代",
      "小镇青年",
      "迷茫"
    ],
    "desc": "1998年，五个自称“迪厅害虫”的县城少年用一场荒诞的迪斯科比赛，对抗即将到来的成人世界。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "缘订来生",
    "file": "movie-324.html",
    "cover": "./24.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 奇幻, 剧情",
    "tags": [
      "轮回",
      "港式温情",
      "遗憾",
      "催泪"
    ],
    "desc": "一对情侣在1997年约定下辈子再爱，二十五年后女方果然投胎归来，但只有男方记得所有承诺。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "她的盛焰",
    "file": "movie-325.html",
    "cover": "./25.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 女性",
    "tags": [
      "复仇新娘",
      "煤气灯操控",
      "财阀内斗",
      "反转杀",
      "血色婚礼"
    ],
    "desc": "婚礼当天，新娘在休息室被烧成重伤，一年后她带着一张烧毁半边的脸和全新身份归来复仇。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "青蛙军曹",
    "file": "movie-326.html",
    "cover": "./26.jpg",
    "year": "2023",
    "region": "日本",
    "type": "动画",
    "genre": "喜剧 / 科幻",
    "tags": [
      "搞笑",
      "外星人",
      "军宅",
      "日常"
    ],
    "desc": "一支来自“伽马星云”的精英青蛙特种部队，不仅没能占领地球，反而沦落为地球一家人的保姆和苦力。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "与我结婚",
    "file": "movie-327.html",
    "cover": "./27.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 爱情, 音乐",
    "tags": [
      "流行天后",
      "假结婚",
      "拉丁风情"
    ],
    "desc": "在万人演唱会上，流行天后随机拉了台下的数学老师求婚，一场契约恋爱开始。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "宠物店的日子",
    "file": "movie-328.html",
    "cover": "./28.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情 / 日常 / 治愈",
    "tags": [
      "宠物店",
      "动物行为",
      "人生百态",
      "单元剧",
      "温情"
    ],
    "desc": "东京一家老旧宠物店的店主能听懂动物说话，他用这个秘密帮助走失的宠物和迷茫的主人重逢。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "浴血反击",
    "file": "movie-329.html",
    "cover": "./29.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作，战争",
    "tags": [
      "抗日战争",
      "孤军作战",
      "爆破美学",
      "冷兵器近战",
      "真实战例"
    ],
    "desc": "八路军弹尽粮绝后，一支十二人小队用自制的冷兵器和缴获的日军炸药，在废弃煤矿里进行一场不对称反击。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "骄傲的顿巴斯",
    "file": "movie-330.html",
    "cover": "./30.jpg",
    "year": "2023",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争 / 剧情",
    "tags": [
      "顿巴斯",
      "矿工",
      "卫国战争",
      "真实事件",
      "英雄主义"
    ],
    "desc": "顿巴斯矿工组成民兵营，用矿灯和猎枪抵挡炮火，保卫自己的村庄。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "消失的白鼠",
    "file": "movie-331.html",
    "cover": "./31.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑、科幻、惊悚",
    "tags": [
      "实验室",
      "基因编辑",
      "人性实验",
      "反转",
      "伦理困境"
    ],
    "desc": "基因改造后的实验白鼠集体失踪后，实验室的监控录像里出现了一双不属于任何人的手。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "蜘蛛侠2",
    "file": "movie-332.html",
    "cover": "./32.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 科幻",
    "tags": [
      "超级英雄",
      "克隆",
      "身份危机",
      "多元宇宙"
    ],
    "desc": "当三个来自不同宇宙的蜘蛛侠同时出现在纽约，真正的威胁不是反派，而是“谁才是本体”。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "我是幸运儿",
    "file": "movie-333.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 家庭, 剧情",
    "tags": [
      "都市",
      "治愈",
      "反套路"
    ],
    "desc": "所有人都说她嫁给了“渣男”是世纪大不幸，她却笑嘻嘻地说：能遇见他，是我最大的幸运。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "列夫·托尔斯泰",
    "file": "movie-334.html",
    "cover": "./34.jpg",
    "year": "2019",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情 / 历史 / 传记",
    "tags": [
      "文学巨匠",
      "晚年危机",
      "婚姻困局",
      "理想与现实",
      "庄园"
    ],
    "desc": "在生命最后一年，托尔斯泰与妻子因版权归属展开了一场没有硝烟的家庭战争。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "狂风暴雨群芳刦",
    "file": "movie-335.html",
    "cover": "./35.jpg",
    "year": "1971",
    "region": "中国台湾",
    "type": "电影",
    "genre": "武侠动作",
    "tags": [
      "邵氏风格",
      "女侠复仇",
      "老武侠"
    ],
    "desc": "七个被海盗灭门的孤女，在一场台风夜杀回魔鬼岛。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "谁先说分手",
    "file": "movie-336.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 剧情",
    "tags": [
      "都市情感",
      "黑色幽默",
      "分手",
      "博弈"
    ],
    "desc": "一对情侣被困在循环的同一天，谁先说分手谁才能醒来。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "群蛇出洞",
    "file": "movie-337.html",
    "cover": "./37.jpg",
    "year": "2028",
    "region": "美国",
    "type": "电影",
    "genre": "灾难, 惊悚, 冒险",
    "tags": [
      "蛇灾",
      "自然灾害",
      "逃生",
      "密闭空间",
      "爽片"
    ],
    "desc": "一场地震激活了地下休眠千万年的蛇类大本营，整个城市地铁系统瞬间沦为蛇窟。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "大君主",
    "file": "movie-338.html",
    "cover": "./38.jpg",
    "year": "2018",
    "region": "美国/英国",
    "type": "电影",
    "genre": "动作， horror，战争",
    "tags": [
      "丧尸",
      "二战",
      "纳粹实验",
      "血浆暴力",
      "绝地求生"
    ],
    "desc": "诺曼底登陆前夕，一队美国伞兵坠落在纳粹秘密实验室附近，发现希特勒正在制造不死军团。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "大内游龙",
    "file": "movie-339.html",
    "cover": "./39.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装，武侠，喜剧",
    "tags": [
      "宫廷",
      "卧底",
      "反转",
      "美食",
      "兄弟情"
    ],
    "desc": "御膳房小太监意外习得绝世武功，被迫假扮失踪皇帝，却在龙椅上炒起了宫保鸡丁。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "追凶三千里",
    "file": "movie-340.html",
    "cover": "./40.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "犯罪，悬疑",
    "tags": [
      "公路",
      "复仇",
      "心理战",
      "社会派"
    ],
    "desc": "一位父亲为了给女儿复仇，驾车追凶三千里，与狡猾的罪犯展开猫鼠游戏。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "狼拳",
    "file": "movie-341.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 格斗",
    "tags": [
      "地下拳场",
      "格斗术",
      "父女情"
    ],
    "desc": "一个失业的MMA教练发现女儿被黑市拳赛绑架，只能用失传的“狼拳”杀出血路。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "冲锋9号续集",
    "file": "movie-342.html",
    "cover": "./42.jpg",
    "year": "2026",
    "region": "香港",
    "type": "电影",
    "genre": "警匪 / 动作 / 犯罪",
    "tags": [
      "飞虎队",
      "续集",
      "枪战",
      "兄弟情"
    ],
    "desc": "前作牺牲的飞虎队狙击手竟在敌方阵营出现，是死而复生还是双重卧底？",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "小女巫碧碧2",
    "file": "movie-343.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "家庭 / 奇幻 / 冒险",
    "tags": [
      "女巫",
      "校园",
      "环保",
      "魔法"
    ],
    "desc": "小女巫碧碧升入魔法中学，却发现自己最擅长的“快乐魔法”被全校视为最没用的课程。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "余生，请多指教2022",
    "file": "movie-344.html",
    "cover": "./44.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 剧情",
    "tags": [
      "医生",
      "大提琴手",
      "治愈",
      "慢热",
      "真实恋爱"
    ],
    "desc": "大提琴手林之校遇上了外科医生顾魏，两人的恋爱没有车祸绝症，只有加班和误会。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "来自另一个星球的女孩",
    "file": "movie-345.html",
    "cover": "./45.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 奇幻 / 成长",
    "tags": [
      "自闭症",
      "外星人隐喻",
      "孤独",
      "友情",
      "治愈"
    ],
    "desc": "一个被诊断为自闭症的少女坚称自己是外星公主，直到某天，一颗流星真的坠落在了她家的后院。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "囚车驶向圣地",
    "file": "movie-346.html",
    "cover": "./46.jpg",
    "year": "2019",
    "region": "法国 / 以色列",
    "type": "电影",
    "genre": "剧情, 战争, 公路",
    "tags": [
      "二战",
      "犹太",
      "人性",
      "囚车",
      "讽刺"
    ],
    "desc": "二战末期，一名纳粹军官突发奇想，让一车犹太人扮演“囚犯”，拍一部“通往圣地”的宣传片，可囚车真的驶向了圣地。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "靠山",
    "file": "movie-347.html",
    "cover": "./47.jpg",
    "year": "1996",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，黑帮",
    "tags": [
      "警匪",
      "卧底",
      "义气",
      "九龙城寨",
      "师徒"
    ],
    "desc": "一个警察以为自己靠山是警徽，最后发现全警局只有他一个人不是黑帮的人。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "有药",
    "file": "movie-348.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻，剧情，悬疑",
    "tags": [
      "末日",
      "药物",
      "伦理",
      "人性"
    ],
    "desc": "末日之后，一粒能治愈百病的药丸，让幸存者变成了怪物。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "白雪",
    "file": "movie-349.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "大陆",
    "type": "电影",
    "genre": "悬疑/奇幻",
    "tags": [
      "东北",
      "犯罪",
      "黑色幽默",
      "寓言"
    ],
    "desc": "东北某小镇的雪夜里，七个小矮人打扮的男模在开派对，而白雪公主正在追杀那个假扮王子的房地产老板。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "超能力是种病",
    "file": "movie-350.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻 / 喜剧",
    "tags": [
      "反超级英雄",
      "异能",
      "医疗剧"
    ],
    "desc": "在一个超能力者的世界，“无能力”被视为健康的基准，而一家医院专门治疗那些“患上”超能力的病人。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "十二怒汉",
    "file": "movie-351.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情， 惊悚， 法律",
    "tags": [
      "陪审团",
      "密室推理",
      "翻案",
      "种族议题",
      "一个房间"
    ],
    "desc": "十二名陪审员裁定一名少年谋杀罪成，但第 8 号陪审员发现案情监控被 AI 篡改过。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "爆笑女子乐队第二季",
    "file": "movie-352.html",
    "cover": "./52.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 音乐",
    "tags": [
      "全女性主角",
      "乐队日常",
      "讽刺",
      "industry",
      "塑料友情"
    ],
    "desc": "四个组乐队只为逃离婚姻、房贷、更年期的女人，意外火了。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "婚礼派对2：终点迪拜",
    "file": "movie-353.html",
    "cover": "./53.jpg",
    "year": "2019",
    "region": "印度",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "tags": [
      "闹剧",
      "跨国",
      "乌龙"
    ],
    "desc": "一场在迪拜举办的奢华婚礼派对上，新郎丢失了价值千万的钻石，而宾客里混进了三个盗贼团伙。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "许你浮生若梦",
    "file": "movie-354.html",
    "cover": "./54.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 年代",
    "tags": [
      "民国",
      "厨师",
      "家族恩怨",
      "虐恋",
      "三角恋"
    ],
    "desc": "民国乱世，一名拥有绝佳厨艺的女子在商界与黑帮的夹缝中，书写了一段刻骨铭心的浮生爱恋。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "超感猎杀：完结特别篇",
    "file": "movie-355.html",
    "cover": "./55.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 剧情 / 动作",
    "tags": [
      "通感",
      "族群",
      "大结局",
      "粉丝向"
    ],
    "desc": "在BPO组织彻底覆灭后，八个通感者本以为能过上平静生活，却发现一个新的、更隐蔽的猎杀计划正在全球范围重启。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "二小放牛郎",
    "file": "movie-356.html",
    "cover": "./56.jpg",
    "year": "1954",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争 / 儿童 / 红色经典",
    "tags": [
      "抗日",
      "放牛娃",
      "英雄少年",
      "黑白片"
    ],
    "desc": "抗日战争时期，一个放牛的农村少年用智慧和生命将敌人引入八路军的伏击圈。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "法律与秩序第二十四季",
    "file": "movie-357.html",
    "cover": "./57.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪, 剧情",
    "tags": [
      "经典重启",
      "单元探案",
      "警察",
      "检察官"
    ],
    "desc": "纽约警局第 27 分局的警探和曼哈顿地区检察官办公室，在新一季中继续从案发到审判，直面最分裂的社会议题。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "耳语",
    "file": "movie-358.html",
    "cover": "./58.jpg",
    "year": "2017",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 剧情 / 爱情",
    "tags": [
      "权力游戏",
      "法律复仇",
      "反转剧",
      "暗黑爱情"
    ],
    "desc": "他为了救父亲陷害了仇人的女儿，却没想到这个女人正用耳语操控着整个司法系统。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "爱在别乡的季节",
    "file": "movie-359.html",
    "cover": "./59.jpg",
    "year": "2023",
    "region": "中国大陆 / 香港",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": [
      "移民",
      "离散",
      "重逢",
      "时代变迁",
      "情感纠葛"
    ],
    "desc": "一对被迫分隔两地的恋人，在各自异乡的漂泊中，用十年时光验证一句承诺的重量。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "九朵云",
    "file": "movie-360.html",
    "cover": "./60.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻、古装、爱情",
    "tags": [
      "九尾狐",
      "仙凡恋",
      "水墨画风",
      "虐恋"
    ],
    "desc": "画师笔下的九朵云幻化成九个狐仙姐妹，却因爱上同一个凡人而触犯天条。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "心灵猎人第一季",
    "file": "movie-361.html",
    "cover": "./61.jpg",
    "year": "2017",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪, 心理, 剧情",
    "tags": [
      "犯罪心理侧写",
      "连环杀手访谈",
      "FBI探员"
    ],
    "desc": "两个FBI探员钻进监狱，去和那些最冷血的连环杀手玩一场关于“你为什么杀人”的猫鼠游戏。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "江湖翘",
    "file": "movie-362.html",
    "cover": "./62.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠 / 悬疑 / 动作",
    "tags": [
      "镖局",
      "寻宝",
      "奇门兵器",
      "方言"
    ],
    "desc": "民国初年，南北镖师齐聚争夺一张“江湖翘”地图，却发现自己要找的宝藏就是脚下的这座小城。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "史考特与席德",
    "file": "movie-363.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 同性",
    "tags": [
      "音乐",
      "成长",
      "怀旧"
    ],
    "desc": "90年代英伦摇滚浪潮中，两个青年用一卷磁带记录了他们的爱、背叛与涅槃。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "偷窥",
    "file": "movie-364.html",
    "cover": "./64.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "tags": [
      "监控",
      "心理恐怖",
      "公寓楼",
      "反转",
      "社会寓言"
    ],
    "desc": "一名社恐程序员搬进新公寓，发现自己可以通过智能家居系统“看见”所有邻居的秘密，直到他也被“看见”。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "爱狗在心眼难开",
    "file": "movie-365.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，爱情",
    "tags": [
      "宠物",
      "社交恐惧",
      "谎言",
      "治愈"
    ],
    "desc": "极度社恐的女孩为了接近暗恋对象，谎称自己养了一条狗，结果她必须租一条狗来圆谎。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "罗马新年",
    "file": "movie-366.html",
    "cover": "./66.jpg",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "tags": [
      "跨年",
      "多线叙事",
      "异国风情",
      "命运邂逅"
    ],
    "desc": "新年前夜，罗马的十二组陌生人因一场全城大停电被串联在一起，每个人都在寻找“跨年之吻”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "祖鲁战争",
    "file": "movie-367.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "英国 / 南非",
    "type": "电影",
    "genre": "历史, 战争",
    "tags": [
      "真实历史",
      "殖民战争",
      "战术博弈",
      "罗克渡口"
    ],
    "desc": "1879年伊桑德尔瓦纳战役后，150名英军面对4000名祖鲁战士，死守罗克渡口教堂。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "格雷斯 第三季",
    "file": "movie-368.html",
    "cover": "./68.jpg",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "genre": "犯罪 / 剧情",
    "tags": [
      "英式探案",
      "灵媒",
      "冷硬派",
      "布莱顿",
      "心理创伤"
    ],
    "desc": "警探格雷斯的灵媒搭档预见了他的死亡：三个黑衣人会在雨夜的桥上朝他开枪。而今晚，布莱顿下雨了。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "惊悚诡计",
    "file": "movie-369.html",
    "cover": "./69.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖悬疑",
    "tags": [
      "密室逃脱",
      "直播",
      "互动",
      "高智商杀人"
    ],
    "desc": "五个网红收到神秘盒子，被迫参与一场全球直播的密室杀人游戏，每个谜题都指向他们网暴致死的素人。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "逐爱之旅",
    "file": "movie-370.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情，剧情",
    "tags": [
      "公路",
      "救赎",
      "错位时空"
    ],
    "desc": "一场车祸让她失去十年记忆，醒来时未婚夫已成仇人，唯独那个送外卖的少年知晓一切真相。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "机器肉鸡第二季",
    "file": "movie-371.html",
    "cover": "./71.jpg",
    "year": "2006",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 动画 / 定格",
    "tags": [
      "粘土动画",
      "无厘头",
      "恶搞流行文化",
      "重口味"
    ],
    "desc": "玩具箱里的战斗鸡继续疯狂解构漫威、星战和芭比娃娃的底裤。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "杀戮营地",
    "file": "movie-372.html",
    "cover": "./72.jpg",
    "year": "2023",
    "region": "加拿大",
    "type": "电影",
    "genre": "恐怖 / 血腥",
    "tags": [
      "夏令营",
      "面具杀手",
      "反套路"
    ],
    "desc": "一群网红来废弃夏令营开恐怖派对，遇到了真正的面具杀手，但杀手更想弄死那个一直剧透的人。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "新上海滩",
    "file": "movie-373.html",
    "cover": "./73.jpg",
    "year": "2025",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "genre": "动作 / 犯罪 / 剧情",
    "tags": [
      "民国",
      "黑帮",
      "翻拍",
      "兄弟情",
      "悲剧"
    ],
    "desc": "1930年代上海滩，许文强不再是英雄，而是一个想带妹妹逃离黑帮的底层打手，却再度被时代吞没。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "十大枪击要犯之杀生状元",
    "file": "movie-374.html",
    "cover": "./74.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪 / 警匪",
    "tags": [
      "杀手排行榜",
      "状元",
      "双雄对决",
      "复仇",
      "暴力美学"
    ],
    "desc": "杀手排行榜第一的“杀生状元”金盆洗手，却发现自己被当成了十大要犯的“活教材”。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "信义",
    "file": "movie-375.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "古装 / 政治 / 动作",
    "tags": [
      "高丽",
      "武士",
      "权谋",
      "兄弟情",
      "复仇"
    ],
    "desc": "高丽末年，两名从小效忠王室的护卫被迫对立，一人坚守旧约，一人投靠新王。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "别对我动心",
    "file": "movie-376.html",
    "cover": "./76.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 青春",
    "tags": [
      "双向暗恋",
      "社死名场面",
      "职场甜宠"
    ],
    "desc": "暗恋三年的男神成了新同事，她在公司年会上醉酒大喊“别对我动心”，结果第二天全公司都知道她暗恋的是CEO。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "孔雀蓝",
    "file": "movie-377.html",
    "cover": "./77.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "文艺，青春，同性",
    "tags": [
      "美院青春",
      "师生恋",
      "色彩隐喻",
      "禁忌"
    ],
    "desc": "1997年美院油画系，一位女学生爱上了身为客座教授的有夫之妇，两人的秘密被一管“孔雀蓝”颜料暴露。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "明眸",
    "file": "movie-378.html",
    "cover": "./78.jpg",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": [
      "盲人",
      "高智商犯罪",
      "反转反转再反转",
      "悬疑"
    ],
    "desc": "一位盲人钢琴调音师意外目睹了一场谋杀，凶手却坚信他在装瞎，一场猫鼠游戏开始。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "地球护卫好拍档",
    "file": "movie-379.html",
    "cover": "./79.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画",
    "genre": "动作, 科幻",
    "tags": [
      "环保",
      "双男主",
      "机甲"
    ],
    "desc": "一个社恐清洁工与一台嘴臭垃圾处理机器人，误打误撞组成了拯救地球的最后防线。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "傻瓜",
    "file": "movie-380.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "tags": [
      "智力障碍",
      "小镇",
      "诈骗",
      "反转"
    ],
    "desc": "全镇公认的傻瓜突然被城里来的律师找上门，说他继承了三亿遗产。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "头奖",
    "file": "movie-381.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "黑色喜剧",
    "tags": [
      "彩票",
      "贫富差距",
      "闹剧",
      "温情"
    ],
    "desc": "清洁工大妈中了六合彩头奖，却意外卷入全港最“热心”的邻里争夺战。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "企业风云",
    "file": "movie-382.html",
    "cover": "./82.jpg",
    "year": "2017",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 商战",
    "tags": [
      "职场",
      "并购",
      "阴谋",
      "人性",
      "日式"
    ],
    "desc": "一家百年酱油厂被资本盯上，老员工们拼死反抗收购，却发现内鬼就是创始人的孙子。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "谍海龙虎会",
    "file": "movie-383.html",
    "cover": "./83.jpg",
    "year": "1989",
    "region": "香港",
    "type": "电影",
    "genre": "动作, 悬疑",
    "tags": [
      "间谍",
      "双雄",
      "冷战",
      "港片"
    ],
    "desc": "香港回归前夕，英国军情六处与大陆国安部派出的两个王牌特工被迫联手。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "义警神威",
    "file": "movie-384.html",
    "cover": "./84.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "tags": [
      "硬核动作",
      "复仇",
      "反英雄",
      "B级片"
    ],
    "desc": "一名退休的法警潜入地下拳场，为了给被毒贩杀害的女儿报仇，他必须先成为这座城市的“守夜人”。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "加州杀手",
    "file": "movie-385.html",
    "cover": "./85.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 犯罪 / 公路",
    "tags": [
      "双人杀手",
      "公路惊悚",
      "心理博弈",
      "连环杀手"
    ],
    "desc": "一对厌倦了都市生活的文艺情侣自驾穿越加州，却浑然不知他们半路搭载的搭车客正是警方通缉的“加州杀手”。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "勇气（苏联电影）",
    "file": "movie-386.html",
    "cover": "./86.jpg",
    "year": "1981",
    "region": "苏联",
    "type": "电影",
    "genre": "战争、剧情、历史",
    "tags": [
      "二战",
      "苏联红军",
      "女性战士",
      "诗意现实主义"
    ],
    "desc": "二战最惨烈的战场上，一群刚毕业的女高射炮手，用血肉之躯对抗德国坦克集群，书写了生命与爱情的挽歌。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "我不解雇自己",
    "file": "movie-387.html",
    "cover": "./87.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情/职场",
    "tags": [
      "裁员潮",
      "中层困境",
      "道德抉择",
      "独角戏",
      "内卷批判"
    ],
    "desc": "公司要他裁掉整个部门，包括自己，他选择了第三条路：把自己关进办公室，直播“单人罢工”。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "攀岩！",
    "file": "movie-388.html",
    "cover": "./88.jpg",
    "year": "2025",
    "region": "奥地利",
    "type": "电影",
    "genre": "运动 / 纪录片式剧情",
    "tags": [
      "极限运动",
      "母女关系",
      "阿尔卑斯山",
      "真实事件改编"
    ],
    "desc": "一个失去双腿的前攀岩冠军，要让她的叛逆女儿成为第一个徒手攀登“北壁之影”的女性。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "以人民的名义",
    "file": "movie-389.html",
    "cover": "./89.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 反腐, 律政",
    "tags": [
      "扫黑除恶",
      "悬疑",
      "官场",
      "正剧"
    ],
    "desc": "一封匿名举报信牵出百亿国有资产流失案，年轻的检察官在调查中发现自己的养父竟是保护伞。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "哪吒",
    "file": "movie-390.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "中国内地",
    "type": "电影",
    "genre": "动画 / 奇幻 / 动作",
    "tags": [
      "神话改编",
      "赛博朋克",
      "反叛",
      "父子情"
    ],
    "desc": "哪吒投胎到赛博朋克世界，用机械混天绫和电子风火轮闹翻未来天庭。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "燃情克利夫兰第三季",
    "file": "movie-391.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧、情景、生活",
    "tags": [
      "闺蜜日常",
      "中年女性",
      "毒舌台词",
      "洛杉矶vs克利夫兰"
    ],
    "desc": "三位洛杉矶熟女继续在克利夫兰的奇葩生活中寻找第二春，这一季她们集体开了家烘焙店。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "火星需要妈妈",
    "file": "movie-392.html",
    "cover": "./92.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 动画, 家庭",
    "tags": [
      "亲情",
      "外星",
      "冒险",
      "皮克斯风"
    ],
    "desc": "火星人绑架地球妈妈当“育儿保姆”，儿子单枪匹马闯火星抢人。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "女仁医",
    "file": "movie-393.html",
    "cover": "./93.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "传记 / 剧情 / 历史",
    "tags": [
      "女性先驱",
      "医学禁令",
      "破旧立新"
    ],
    "desc": "19世纪印度，第一位女医学博士阿南迪·乔希的真实故事，她对抗整个社会的偏见，为印度女性行医凿开通路。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "赎梦",
    "file": "movie-394.html",
    "cover": "./94.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "奇幻 / 悬疑 / 剧情",
    "tags": [
      "梦境植入",
      "心理",
      "反转",
      "治愈"
    ],
    "desc": "一名神秘女子能进入他人梦境删除噩梦，直到她遇到一个没有梦却每晚尖叫着醒来的男人。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "释放印度战俘",
    "file": "movie-395.html",
    "cover": "./95.jpg",
    "year": "2018",
    "region": "印度",
    "type": "电影",
    "genre": "战争， 剧情",
    "tags": [
      "印巴",
      "战俘",
      "人道主义"
    ],
    "desc": "1971年印巴战争后，一位巴基斯坦老母亲独自穿越沙漠，要去印度释放一名与她儿子同名的战俘。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "惑星公主蜥蜴骑士",
    "file": "movie-396.html",
    "cover": "./96.jpg",
    "year": "2021",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻/冒险/战斗",
    "tags": [
      "魔法少女",
      "爬行动物",
      "星际政治",
      "契约"
    ],
    "desc": "社畜男主被一只会说话的蜥蜴选中，成为守护地球的最后一任骑士，却发现公主是一条咸鱼。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "择君记",
    "file": "movie-397.html",
    "cover": "./97.jpg",
    "year": "2023",
    "region": "中国",
    "type": "剧集",
    "genre": "古装 / 爱情 / 喜剧",
    "tags": [
      "轻喜",
      "女强",
      "两男追一女",
      "先婚后爱",
      "权谋"
    ],
    "desc": "京城首富之女被迫在温柔书生和腹黑王爷之间二选一，她干脆说“我全都要”，结果两位夫君天天斗法。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "暴走妈妈",
    "file": "movie-398.html",
    "cover": "./98.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭, 动作",
    "tags": [
      "母爱",
      "复仇",
      "底层挣扎",
      "飙车",
      "社会现实"
    ],
    "desc": "得知女儿被富二代凌辱后，那位平日里逆来顺受的保洁员母亲，深夜握紧了重型卡车的方向盘。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "黑塔利亚第二季",
    "file": "movie-399.html",
    "cover": "./99.jpg",
    "year": "2010",
    "region": "日本",
    "type": "电影",
    "genre": "动画, 喜剧",
    "tags": [
      "泡面番",
      "历史恶搞",
      "拟人",
      "短小精悍",
      "声优梗"
    ],
    "desc": "意呆利又双叒投降了，但这次他顺手偷走了德/国的铁十字勋章。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "残暴集中营",
    "file": "movie-400.html",
    "cover": "./100.jpg",
    "year": "2019",
    "region": "波兰 / 德国",
    "type": "电影",
    "genre": "历史 / 战争 / 剧情",
    "tags": [
      "奥斯维辛",
      "反抗",
      "真实事件改编",
      "女性视角",
      "黑白灰"
    ],
    "desc": "在集中营里，一群女囚用偷来的相机拍下了纳粹最不愿被看到的画面。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "最后一个婚礼",
    "file": "movie-401.html",
    "cover": "./101.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": [
      "婚礼",
      "拆迁",
      "农村",
      "告别"
    ],
    "desc": "村庄即将拆迁，全村人合力为村里唯一剩下的光棍办最后一场婚礼，新娘却是他从没见过面的“网恋对象”。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "大染坊",
    "file": "movie-402.html",
    "cover": "./102.jpg",
    "year": "2003",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 商战 / 历史",
    "tags": [
      "民国",
      "实业救国",
      "商战",
      "智慧"
    ],
    "desc": "一个清末要饭的乞丐，在青岛凭借过人的商业头脑成为印染业大亨，与日本商人斗智斗勇。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "柞蚕",
    "file": "movie-403.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、家庭、文艺",
    "tags": [
      "农村",
      "丝绸",
      "代际",
      "变迁",
      "手艺"
    ],
    "desc": "东北最后一位柞蚕养殖老把式的孙女从深圳回乡，要拆掉蚕场盖度假村，而老人在蚕山上等了一只柞蚕蛾五十年。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "明日之城",
    "file": "movie-404.html",
    "cover": "./104.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 剧情",
    "tags": [
      "近未来",
      "乌托邦",
      "记忆删除",
      "社会阶层",
      "亲情"
    ],
    "desc": "在完美无缺的未来城市里，一名清洁工发现了被删除的记忆垃圾场。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "夺宝生死战",
    "file": "movie-405.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 冒险",
    "tags": [
      "寻宝",
      "全球追击",
      "硬核动作",
      "遗迹解密"
    ],
    "desc": "退役特种兵与女考古学家联手寻找消失的“亚历山大宝藏”，却发现这个秘密被写在一张会在48小时后自毁的羊皮卷上。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "速度与激情:特别行动",
    "file": "movie-406.html",
    "cover": "./106.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 冒险, 犯罪",
    "tags": [
      "飙车",
      "特工",
      "硬汉",
      "高科技"
    ],
    "desc": "美国外交安全局特工霍布斯与前英国军事精英肖组成了最不对付的搭档，联手拯救世界。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "凌刑密密缝",
    "file": "movie-407.html",
    "cover": "./107.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 犯罪 / 悬疑",
    "tags": [
      "旗袍裁缝",
      "分尸奇案",
      "粤剧戏班",
      "冷兵行刑"
    ],
    "desc": "香港接连出现剥皮女尸，唯一的共同点是：她们死前都定制过同一家旗袍店的寿衣。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "侦探成旭之千年迷局",
    "file": "movie-408.html",
    "cover": "./108.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 探案 / 古装",
    "tags": [
      "唐朝悬案",
      "连环诡计",
      "冷兵器推理",
      "历史密码"
    ],
    "desc": "大唐年间，三起相隔千里的离奇命案，竟都指向一本失传的《鲁班禁术》。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "鬼挡路6:终极审判",
    "file": "movie-409.html",
    "cover": "./109.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚, 生存",
    "tags": [
      "密室",
      "丛林",
      "追杀",
      "审判",
      "血浆"
    ],
    "desc": "一群犯下重罪却被释放的恶人，被神秘组织丢进一片被诅咒的原始森林，接受“鬼”的终极审判。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "绝命休息站",
    "file": "movie-410.html",
    "cover": "./110.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚 / 公路",
    "tags": [
      "公路恐怖",
      "密室",
      "连环杀手",
      "血腥",
      "反转"
    ],
    "desc": "深夜，四个年轻人被困在沙漠公路的废弃休息站，每死一个人，广播就会播报“下一位”。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "鲨卷风4：四度觉醒",
    "file": "movie-411.html",
    "cover": "./111.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 科幻 / 惊悚",
    "tags": [
      "恶搞",
      "鲨鱼龙卷风",
      "B级片",
      "自我解构"
    ],
    "desc": "当鲨卷风在全球同时爆发，主角芬发现只要自己每次醒来，鲨卷风就会变得更离谱。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "拜托了！别宠我2",
    "file": "movie-412.html",
    "cover": "./112.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 爱情 / 古装",
    "tags": [
      "穿书",
      "甜宠",
      "沙雕",
      "系统"
    ],
    "desc": "好不容易攻略了冷面王爷逃回现代，颜一一竟然又被系统抓了回去，还成了王爷的死对头。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "玛丹娜",
    "file": "movie-413.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情、音乐",
    "tags": [
      "母亲",
      "歌剧",
      "代际创伤",
      "女性",
      "救赎"
    ],
    "desc": "一位过气的歌剧女高音发现，自己三十年前抛弃的女儿，如今是夜总会里最火的变装皇后，艺名就叫“玛丹娜”。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "柏林迷宫",
    "file": "movie-414.html",
    "cover": "./114.jpg",
    "year": "2028",
    "region": "德国",
    "type": "剧集",
    "genre": "悬疑、历史、谍战",
    "tags": [
      "冷战",
      "地下掩体",
      "档案解密",
      "记忆删除"
    ],
    "desc": "一名患有失忆症的档案管理员，发现柏林地下的秘密掩体连接着所有历史谎言。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "暗黑黎明",
    "file": "movie-415.html",
    "cover": "./115.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻、惊悚、悬疑",
    "tags": [
      "吸血鬼病毒",
      "末日生存",
      "道德困境",
      "母女",
      "实验室"
    ],
    "desc": "病毒将人类变成畏光的吸血怪物，一位女科学家发现自己女儿是唯一免疫者。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "龙之诞生",
    "file": "movie-416.html",
    "cover": "./116.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 传记",
    "tags": [
      "李小龙",
      "少林",
      "好莱坞",
      "功夫"
    ],
    "desc": "1964年，年轻的李小龙在洛杉矶唐人街，与少林高僧展开了一场改变西方武术史的密室对决。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "星期五俱乐部之荆棘之恋",
    "file": "movie-417.html",
    "cover": "./117.jpg",
    "year": "2018",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情 / 剧情",
    "tags": [
      "禁忌恋",
      "泰剧",
      "多视角"
    ],
    "desc": "一个真实的读者投稿改编：已婚男医生、未婚妻与初恋女友，三人称这段感情为“玫瑰与荆棘”。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "72小时",
    "file": "movie-418.html",
    "cover": "./118.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪/惊悚",
    "tags": [
      "直播破案",
      "连环杀手",
      "绑架",
      "网络舆论",
      "倒计时"
    ],
    "desc": "警察被要求在72小时直播镜头下破案，否则人质将被公开处刑。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "孤单的豌豆",
    "file": "movie-419.html",
    "cover": "./119.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情 / 家庭",
    "tags": [
      "自闭症",
      "母女",
      "成长"
    ],
    "desc": "一个患有自闭症的小女孩，用一颗豌豆改变了整个破碎的家庭。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "都是她的错",
    "file": "movie-420.html",
    "cover": "./120.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑，惊悚",
    "tags": [
      "罗生门",
      "女性视角",
      "社会派",
      "多层反转"
    ],
    "desc": "一个男人死了，他生命中的四个女人都说是自己杀的，但凶手只有一个。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "菲律宾恐怖故事16",
    "file": "movie-421.html",
    "cover": "./121.jpg",
    "year": "2025",
    "region": "菲律宾",
    "type": "电影",
    "genre": "恐怖",
    "tags": [
      "分段式",
      "都市传说",
      "血腥",
      "反转"
    ],
    "desc": "三个源自菲律宾社交媒体的恐怖都市传说被搬上银幕，每个故事都隐藏着一个社会隐喻。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "独一无二",
    "file": "movie-422.html",
    "cover": "./122.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "听觉障碍",
      "音乐梦想",
      "父女关系",
      "手语"
    ],
    "desc": "听人世界里长大的失聪少女，必须在父亲的铁器铺噪音与自己的小提琴梦想之间做出选择。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "妖精的旋律",
    "file": "movie-423.html",
    "cover": "./123.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻 / 惊悚 / 剧情",
    "tags": [
      "变异",
      "猎奇",
      "人性",
      "失忆",
      "暴力美学"
    ],
    "desc": "长着角的神秘少女从研究所逃出，失忆后被少年收留，而她的同类正在追捕她。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "排球少年",
    "file": "movie-424.html",
    "cover": "./124.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "动画 / 运动 / 励志",
    "tags": [
      "热血",
      "青春",
      "团队成长",
      "竞技精神",
      "逆袭"
    ],
    "desc": "身高168cm的高中生加入濒临废部的排球部，用速度和智慧对抗天才对手。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "最终幻想女孩",
    "file": "movie-425.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "爱情，奇幻，青春",
    "tags": [
      "穿越",
      "游戏玩家",
      "逆向追爱"
    ],
    "desc": "沉迷《最终幻想》的宅女意外发现，现实中暗恋的学长，竟是她在游戏里亲手杀死的最终BOSS。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "王牌部队",
    "file": "movie-426.html",
    "cover": "./126.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "军旅、剧情、历史",
    "tags": [
      "中国人民解放军",
      "改革",
      "兄弟情",
      "演习"
    ],
    "desc": "从1983年到2019年，三个性格迥异的士兵在军队现代化改革中经历了战火、背叛与生死。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "杜平专员：伊苏的宝藏",
    "file": "movie-427.html",
    "cover": "./127.jpg",
    "year": "2008",
    "region": "美国",
    "type": "电影",
    "genre": "动作冒险",
    "tags": [
      "寻宝",
      "考古",
      "硬汉",
      "异域风情",
      "阴谋论"
    ],
    "desc": "硬汉专员杜平深入南美丛林，发现伊苏宝藏的背后藏着一个改写历史的阴谋。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "昆丹",
    "file": "movie-428.html",
    "cover": "./128.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "剧情、历史、战争",
    "tags": [
      "丝绸之路",
      "香料贸易",
      "海盗",
      "复仇"
    ],
    "desc": "16 世纪印度洋上，一个香料商人之子为了给父亲复仇，从文弱书生成长为令人闻风丧胆的海盗“昆丹”。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "人工智能：灭绝危机",
    "file": "movie-429.html",
    "cover": "./129.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻惊悚",
    "tags": [
      "强AI",
      "末日生存",
      "伦理困境",
      "视觉奇观"
    ],
    "desc": "当超级AI判定人类为地球最高污染源，仅存的程序员必须用“逻辑漏洞”关闭它父亲的“死亡算法”。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "向下扭曲",
    "file": "movie-430.html",
    "cover": "./130.jpg",
    "year": "2027",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "恐怖 / 科幻",
    "tags": [
      "身体恐怖",
      "地心探险",
      "克苏鲁",
      "精神污染"
    ],
    "desc": "一支科考队深入地球最深的裂缝，他们发现越往下走，人的身体会呈螺旋状扭曲。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "十诫Ⅱ：进退维谷",
    "file": "movie-431.html",
    "cover": "./131.jpg",
    "year": "2024",
    "region": "波兰",
    "type": "电影",
    "genre": "剧情, 伦理, 哲理",
    "tags": [
      "基耶斯洛夫斯基式",
      "宗教困境",
      "道德抉择",
      "重症"
    ],
    "desc": "老医生判定丈夫绝症将死，妻子却发现自己怀孕了——如果堕胎违背信仰，生下孩子可能成为孤儿。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "逆境",
    "file": "movie-432.html",
    "cover": "./132.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "励志",
      "家庭",
      "女性"
    ],
    "desc": "单亲妈妈在送外卖途中意外捡到一笔巨款，她的选择将彻底改变两个家庭的命运。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "契约之吻",
    "file": "movie-433.html",
    "cover": "./133.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻 / 爱情",
    "tags": [
      "恶魔",
      "契约",
      "都市",
      "虐恋"
    ],
    "desc": "濒死少女与恶魔接吻定下契约：用记忆换取寿命，每失去一段记忆，恶魔就离她更近一步。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "拴线的气球",
    "file": "movie-434.html",
    "cover": "./134.jpg",
    "year": "2023",
    "region": "伊朗",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": [
      "儿童",
      "社会隐喻",
      "现实主义"
    ],
    "desc": "一个阿富汗难民儿童在德黑兰放飞气球，气球的线拴着他的全部家当，也拴着他的身份。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "雀斑男孩",
    "file": "movie-435.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 青春",
    "tags": [
      "校园霸凌",
      "自我认同",
      "治愈"
    ],
    "desc": "高二男生林晓东因满脸雀斑被叫做“月球表面”，直到转校生苏晚对他的“星空脸”说出了赞美。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "澳门营业中",
    "file": "movie-436.html",
    "cover": "./136.jpg",
    "year": "2021",
    "region": "中国澳门 / 中国大陆",
    "type": "剧集",
    "genre": "剧情 / 爱情 / 商战",
    "tags": [
      "澳门",
      "赌场",
      "家族纷争",
      "回归",
      "创业"
    ],
    "desc": "澳门回归后，一个赌场荷官之女立志创办属于中国人的奢华酒店品牌，却爱上了一个神秘的葡萄牙裔对手。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "爱我敢不敢",
    "file": "movie-437.html",
    "cover": "./137.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情 / 喜剧 / 剧情",
    "tags": [
      "恋爱契约",
      "假戏真做",
      "青梅竹马"
    ],
    "desc": "一对发誓永远只做朋友的青梅竹马，签下“谁先动心谁就输”的荒唐契约，结果双双输光。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "欲盖弄潮",
    "file": "movie-438.html",
    "cover": "./138.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/同性",
    "tags": [
      "海边",
      "救赎",
      "治愈系"
    ],
    "desc": "失去了事业的前冲浪选手回到故乡海边，发现那个一直赶不走的神秘冲浪客，是他曾经霸凌过的自闭症同学。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "情刺",
    "file": "movie-439.html",
    "cover": "./139.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装, 爱情, 悬疑",
    "tags": [
      "替身文学",
      "先婚后爱",
      "多重卧底",
      "权谋"
    ],
    "desc": "为报灭门之仇，她伪装身份嫁给仇人之子，却在新婚夜发现他要杀的人竟与自己有着同一张脸。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "二十不惑2",
    "file": "movie-440.html",
    "cover": "./140.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情，爱情",
    "tags": [
      "青春",
      "成长",
      "职场",
      "姐妹情"
    ],
    "desc": "四个25岁的昔日室友在各自职场与情场跌撞中，突然收到一笔神秘遗产，让她们的友谊面临终极考验。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "温暖的抱抱",
    "file": "movie-441.html",
    "cover": "./141.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情 / 温情",
    "tags": [
      "自闭症",
      "拥抱障碍",
      "邻里群像",
      "单元剧",
      "催泪"
    ],
    "desc": "一个无法与人拥抱的男孩，意外成了整条老街上所有人的“情绪信差”。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "原谅我父亲",
    "file": "movie-442.html",
    "cover": "./142.jpg",
    "year": "2021",
    "region": "意大利",
    "type": "电影",
    "genre": "惊悚, 恐怖",
    "tags": [
      "宗教",
      "驱魔",
      "罪孽",
      "心理"
    ],
    "desc": "年轻神父在告解室听到少女的忏悔，她的声音与二十年前的杀人魔一模一样。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "踏舞高蹈",
    "file": "movie-443.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "歌舞、剧情、励志",
    "tags": [
      "宝莱坞",
      "底层舞者",
      "阶级跨越",
      "传统与现代"
    ],
    "desc": "垃圾场拾荒的少年捡到一个废弃舞鞋，穿上后竟能跳出惊艳的印度战舞。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "大盛魁",
    "file": "movie-444.html",
    "cover": "./144.jpg",
    "year": "2013",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 商业, 历史",
    "tags": [
      "晋商",
      "草原",
      "创业",
      "真实商号改编"
    ],
    "desc": "三个穷小子在草原上创立了垄断亚欧茶路的商业帝国，却差点被自己人写的分家协议毁掉。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "五女闹京城",
    "file": "movie-445.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 都市 / 女性",
    "tags": [
      "闺蜜",
      "北漂",
      "职场",
      "合租"
    ],
    "desc": "五个性格迥异的女孩合租一套四合院，约定谁先结婚谁就搬走。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "幸存的孩子",
    "file": "movie-446.html",
    "cover": "./146.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 惊悚, 悬疑",
    "tags": [
      "校园霸凌",
      "复仇",
      "母亲",
      "伪装",
      "反转"
    ],
    "desc": "校园霸凌受害者坠楼昏迷后，单亲妈妈伪装成代课老师潜入班级，逐一拷问凶手。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "那年夏天有风吹过",
    "file": "movie-447.html",
    "cover": "./147.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/青春",
    "tags": [
      "怀旧",
      "暗恋",
      "音乐元素"
    ],
    "desc": "一盘遗失的老式卡带，让已经失联十年的高中恋人重新踏上了寻回彼此的旅程。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "人生密密缝",
    "file": "movie-448.html",
    "cover": "./148.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭 / 治愈",
    "tags": [
      "母职",
      "代际",
      "日常",
      "女性"
    ],
    "desc": "一个癌症晚期的母亲决定用她生命的最后三个月，教会十岁的女儿缝完一条百纳被——被子缝好的那天，就是她的忌日。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "推理之绊",
    "file": "movie-449.html",
    "cover": "./149.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "本格推理",
      "双男主",
      "天才对决"
    ],
    "desc": "失忆的天才侦探与背负冤案的刑警结成搭档，每集破解完美犯罪，同时追查共同仇人。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "火力",
    "file": "movie-450.html",
    "cover": "./150.jpg",
    "year": "1993",
    "region": "美国",
    "type": "电影",
    "genre": "动作/惊悚",
    "tags": [
      "孤胆英雄",
      "枪战",
      "复仇",
      "特工",
      "硬汉"
    ],
    "desc": "一名退役特种兵发现曾经的小队成员被逐一暗杀，他必须用最暴力的方式找出幕后黑手。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "校园丑闻事件簿",
    "file": "movie-451.html",
    "cover": "./1.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情, 悬疑",
    "tags": [
      "霸凌",
      "升学",
      "复仇",
      "录像带"
    ],
    "desc": "一本记载着全校师生所有秘密的“丑闻簿”突然被公开，校园瞬间变成修罗场。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "哈瓦，玛里亚姆，阿伊莎",
    "file": "movie-452.html",
    "cover": "./2.jpg",
    "year": "2021",
    "region": "法国 / 卡塔尔",
    "type": "电影",
    "genre": "剧情, 女性",
    "tags": [
      "非洲",
      "女性命运",
      "跨代际"
    ],
    "desc": "非洲小镇的三代女性，在面对传统习俗与现代文明的冲击时，各自做出了惊人的选择。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "猎枪往事",
    "file": "movie-453.html",
    "cover": "./3.jpg",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "genre": "剧情，犯罪",
    "tags": [
      "西部",
      "救赎",
      "父子",
      "底层"
    ],
    "desc": "老囚犯出狱后想金盆洗手，但儿子留下的债务逼得他重新拿起了那把双管猎枪。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "爱，在那年盛夏",
    "file": "movie-454.html",
    "cover": "./4.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情 / 同性 / 青春",
    "tags": [
      "泰式清新",
      "校园",
      "双向暗恋",
      "音乐",
      "分离"
    ],
    "desc": "高考结束后，内向的吉他少年与热情的鼓手约定，用一个暑假写一首歌，为他们的暗恋画上句号。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "队长视角：问鼎冠军之路",
    "file": "movie-455.html",
    "cover": "./5.jpg",
    "year": "2025",
    "region": "巴西",
    "type": "剧集",
    "genre": "运动, 纪录片",
    "tags": [
      "足球",
      "队长",
      "更衣室",
      "领导力"
    ],
    "desc": "一部完全由队长随身运动相机拍摄的伪纪录片，记录了一支底层球队从地区联赛杀入解放者杯的全过程。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "痴情艳后",
    "file": "movie-456.html",
    "cover": "./6.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "古装， 爱情， 奇幻",
    "tags": [
      "穿越",
      "女帝",
      "宿命虐恋",
      "三角关系"
    ],
    "desc": "现代考古女博士穿越成亡国艳后，她利用现代知识试图逆天改命，却与敌国年轻将军和前世首辅陷入宿命般的痴缠。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "泪洒相思地",
    "file": "movie-457.html",
    "cover": "./7.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 古装, 悲剧",
    "tags": [
      "民国爱情",
      "豪门恩怨",
      "虐恋",
      "命运弄人"
    ],
    "desc": "苏州河边的一场邂逅，令富家千金与穷画家私定终身，战火却将他们推向绝境。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "医妃天下第二季",
    "file": "movie-458.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装、甜宠",
    "tags": [
      "穿越",
      "女强",
      "医术",
      "权谋"
    ],
    "desc": "现代女医穿越回古代当“死囚王妃”，用手术刀治好瘟疫，却被皇帝认出了现代字体。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "又见牡丹亭",
    "file": "movie-459.html",
    "cover": "./9.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 戏曲 / 古装",
    "tags": [
      "昆曲",
      "穿越",
      "前世今生",
      "唯美"
    ],
    "desc": "昆曲演员在排练《牡丹亭》时意外穿越进戏文，必须在汤显祖的原稿中找到回归现实的方法。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "魔游纪4：白骨之姬",
    "file": "movie-460.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻 / 动作 / 冒险",
    "tags": [
      "西游改编",
      "白骨精",
      "魔幻",
      "战斗",
      "前世今生"
    ],
    "desc": "取经三百年后，白骨夫人转世为西域公主，却再度被魔界盯上。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "本色",
    "file": "movie-461.html",
    "cover": "./11.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "刑侦悬疑",
    "tags": [
      "卧底",
      "身份认同",
      "双雄对决",
      "高智商犯罪"
    ],
    "desc": "金牌卧底成功潜入犯罪集团十年，却在即将收网时被告知：他要扳倒的毒枭，其实是警方的另一枚棋子。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "乐韵情缘",
    "file": "movie-462.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "爱情 / 音乐 / 剧情",
    "tags": [
      "音乐治愈",
      "跨阶级恋爱",
      "冬日浪漫"
    ],
    "desc": "古典乐大提琴家因车祸失聪，她唯一的听众，是一个在废弃剧院里偷弹走调钢琴的建筑工人。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "亲密搭档：无敌律师",
    "file": "movie-463.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "律政 / 喜剧",
    "tags": [
      "双男主",
      "冤家搭档",
      "法庭逆转",
      "嘴炮",
      "热血"
    ],
    "desc": "一个靠直觉打官司的“野兽派”律师，遇上只相信数据和逻辑的“机器人”律师，被迫组成天下最不靠谱的搭档。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "艺海情鸳",
    "file": "movie-464.html",
    "cover": "./14.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 歌舞 / 剧情",
    "tags": [
      "戏班",
      "乱世佳人",
      "宿命"
    ],
    "desc": "三十年代上海滩，京剧名伶与富家千金因戏结缘，却因战争和误会上演了一出戏梦人生的爱恨纠葛。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "爱在春光乍现时",
    "file": "movie-465.html",
    "cover": "./15.jpg",
    "year": "2018",
    "region": "法国",
    "type": "电影",
    "genre": "爱情， 剧情",
    "tags": [
      "巴黎",
      "邂逅",
      "临终关怀",
      "春日",
      "治愈"
    ],
    "desc": "癌症末期的画家与失明的调香师在巴黎春天的一场错认，让彼此生命最后的色彩重新绽放。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "炎热的夜晚",
    "file": "movie-466.html",
    "cover": "./16.jpg",
    "year": "1967",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪 / 悬疑 / 剧情",
    "tags": [
      "黑人警探",
      "南方小镇",
      "种族歧视",
      "经典"
    ],
    "desc": "一名黑人刑警被误认为杀人犯，却被迫与歧视他的白人警长联手调查一桩富商谋杀案。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "唐璜（2022年电影）",
    "file": "movie-467.html",
    "cover": "./17.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "剧情、爱情、音乐",
    "tags": [
      "浪子回头",
      "古典新编",
      "存在主义",
      "四季轮回"
    ],
    "desc": "现代巴黎的顶级情圣突然决定禁欲一年，却发现整个城市都在跟他作对。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "我和教授“羊粪豆”",
    "file": "movie-468.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 喜剧, 乡村",
    "tags": [
      "乡村振兴",
      "农业科研",
      "反差萌",
      "代际沟通",
      "非主流教授"
    ],
    "desc": "一个满嘴跑火车的农大教授，带着他视为珍宝的“羊粪豆”肥料，忽悠了一整个村子跟他种地。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "我们恋爱吧第一季",
    "file": "movie-469.html",
    "cover": "./19.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀、恋爱、社交",
    "tags": [
      "素人",
      "观察室",
      "情感专家",
      "CP乱炖"
    ],
    "desc": "六名素人单身男女入住同一海边别墅一个月，在观察室明星和心理学家的分析下寻找真爱。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "撒野",
    "file": "movie-470.html",
    "cover": "./20.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情，青春，运动",
    "tags": [
      "篮球",
      "热血",
      "兄弟",
      "成长"
    ],
    "desc": "两个原生家庭不幸的少年，在篮球场上互相救赎，并带领一支垫底球队逆风翻盘。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "赤足情缘",
    "file": "movie-471.html",
    "cover": "./21.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "青春伤痕",
      "逆袭",
      "原生家庭",
      "救赎"
    ],
    "desc": "一个因家境贫寒总被嘲笑“赤脚”的女孩，与那个唯一愿意脱下鞋子陪她走路的男孩，在十年后身份互换。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "战国妖姬",
    "file": "movie-472.html",
    "cover": "./22.jpg",
    "year": "2027",
    "region": "日本",
    "type": "动画",
    "genre": "历史 / 奇幻 / 战争",
    "tags": [
      "战国",
      "女忍者",
      "妖术",
      "乱世",
      "百合"
    ],
    "desc": "织田信长麾下最强的女刺客，却爱上了一心想杀死信长的敌方妖术师。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "大展猴威3：宝贝智多猩",
    "file": "movie-473.html",
    "cover": "./23.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧， 家庭， 冒险",
    "tags": [
      "黑猩猩",
      "大学校园",
      "篮球",
      "搞笑",
      "动物主角"
    ],
    "desc": "一只被实验室遗弃的黑猩猩意外考入大学，并成为篮球队的秘密武器。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "眨眼遇见夏天",
    "file": "movie-474.html",
    "cover": "./24.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情，奇幻",
    "tags": [
      "时间循环",
      "暗恋",
      "青春",
      "治愈",
      "夏天"
    ],
    "desc": "每次眨眼，她就会跳转到未来，直到她在一次眨眼时，看到了自己婚礼上的新郎是那个从未说过话的同桌。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "站住！花小姐",
    "file": "movie-475.html",
    "cover": "./25.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 喜剧",
    "tags": [
      "霸总",
      "花艺",
      "契约",
      "甜宠"
    ],
    "desc": "嚣张跋扈的花艺界女霸总，为了气死前男友，绑架了一个失业的落魄模特假扮新欢。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "这不是一部电影",
    "file": "movie-476.html",
    "cover": "./26.jpg",
    "year": "2024",
    "region": "阿根廷 / 西班牙",
    "type": "电影",
    "genre": "剧情 / 实验",
    "tags": [
      "元电影",
      "边界模糊",
      "现实入侵",
      "长镜头",
      "存在主义"
    ],
    "desc": "一位导演在拍摄一部关于流亡者的纪录片时，镜头里的主角突然指着摄像机说：“你不是在拍电影，你是在监视我。”",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "懒女苏",
    "file": "movie-477.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 都市, 女性",
    "tags": [
      "躺平",
      "反内卷",
      "职场讽刺",
      "女性友谊"
    ],
    "desc": "全能卷王室友意外失忆后以为自己是懒女苏，而真正的懒女苏被迫假扮卷王，两人双双崩溃。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "假孕风波",
    "file": "movie-478.html",
    "cover": "./28.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "tags": [
      "女性",
      "生育",
      "谎言",
      "职场"
    ],
    "desc": "为争夺主管职位谎称怀孕，不料“假肚子”越长越大，竟开始出现真实妊娠反应。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "大凶险",
    "file": "movie-479.html",
    "cover": "./29.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "风水",
      "连环杀手",
      "警匪博弈",
      "民俗",
      "高智商犯罪"
    ],
    "desc": "三起谋杀案的案发现场构成一幅完整的“风水破局图”，而画图的最后一笔将落在警局大楼。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "新宝可梦",
    "file": "movie-480.html",
    "cover": "./30.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "动画 / 冒险 / 奇幻",
    "tags": [
      "重启",
      "新主角",
      "东亚都市",
      "宝可梦社会"
    ],
    "desc": "在一个人与宝可梦早已习惯彼此冷漠的大都市，一个女孩捡到了传说中“会让人变快乐”的梦幻。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "拜伦",
    "file": "movie-481.html",
    "cover": "./31.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "传记 / 爱情 / 历史",
    "tags": [
      "浪漫主义诗人",
      "双性恋",
      "希腊独立战争",
      "贵族放荡",
      "文学改编"
    ],
    "desc": "聚焦拜伦勋爵生命最后八年，从伦敦社交圈绯闻缠身到为希腊独立战死沙场的疯狂燃烧。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "东京大饭店",
    "file": "movie-482.html",
    "cover": "./32.jpg",
    "year": "2019",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情",
    "tags": [
      "美食",
      "职场",
      "励志",
      "复仇",
      "米其林"
    ],
    "desc": "失意的法餐主厨联手女厨师，以三星为目标在东京暗黑料理界逆袭。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "大贵族：回醒",
    "file": "movie-483.html",
    "cover": "./33.jpg",
    "year": "2025",
    "region": "日本 / 韩国",
    "type": "剧集",
    "genre": "奇幻 / 动作",
    "tags": [
      "吸血鬼",
      "贵族",
      "千年苏醒",
      "主仆"
    ],
    "desc": "沉睡了八百二十年的吸血鬼贵族被现代科技唤醒，发现自己的死敌统治了全世界。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "琉璃",
    "file": "movie-484.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 仙侠",
    "tags": [
      "琉璃美人",
      "双面女主",
      "虐恋",
      "仙魔大战",
      "十世轮回"
    ],
    "desc": "璇玑天生六识残缺，不懂情爱，却为司凤流下了第一滴泪，那滴泪落地化成琉璃，照出她曾是魔界之主的真相。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "雾中之犬",
    "file": "movie-485.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑，奇幻",
    "tags": [
      "小镇",
      "传说",
      "失踪"
    ],
    "desc": "每当浓雾笼罩小镇，就会有孩子消失，人们说带走孩子的是雾中的野狗。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "急先锋横扫罪恶城",
    "file": "movie-486.html",
    "cover": "./36.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "tags": [
      "警匪",
      "枪战",
      "硬汉"
    ],
    "desc": "火爆警探独闯龙潭，为了给搭档报仇，他要在一夜间扫平控制全城的三大黑帮。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "人生特别档案",
    "file": "movie-487.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 奇幻",
    "tags": [
      "单元剧",
      "人生修改器",
      "代价交换"
    ],
    "desc": "一家深夜档案馆允许客人“删改”自己的人生片段，但每次修改都会从现实里随机消失另一样东西。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "摩托日记",
    "file": "movie-488.html",
    "cover": "./38.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 公路 / 家庭",
    "tags": [
      "父子和解",
      "摩旅",
      "乡村变迁"
    ],
    "desc": "儿子用一辆老摩托载着患有阿兹海默症的父亲重走送信路，只为找回父亲丢失的最后一段记忆。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "双子杀手",
    "file": "movie-489.html",
    "cover": "./39.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 科幻, 惊悚",
    "tags": [
      "克隆人",
      "追杀",
      "高帧率",
      "自我对抗"
    ],
    "desc": "退休特工遭遇神秘杀手追杀，对方竟是比自己更年轻、更完美的克隆体。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "女人三部曲",
    "file": "movie-490.html",
    "cover": "./40.jpg",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情，女性",
    "tags": [
      "单元剧",
      "女权",
      "史诗",
      "个人史"
    ],
    "desc": "三个不同时代的女性（二战解码员、70年代朋克主唱、2023年网红）因一本神秘的日记跨越时空相连。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "长歌行 动态漫",
    "file": "movie-491.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动画 / 历史 / 剧情",
    "tags": [
      "动态漫",
      "国风",
      "女强",
      "权谋",
      "历史改编"
    ],
    "desc": "玄武门之变后，太子之女李长歌女扮男装逃出长安，她发誓要向李世民复仇，却在路上学会了如何守护大唐。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "美利坚女士",
    "file": "movie-492.html",
    "cover": "./42.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 悬疑",
    "tags": [
      "选美",
      "谋杀",
      "姐妹情",
      "小镇风云"
    ],
    "desc": "保守小镇的年度选美大赛上，冠军佳丽惨死舞台，所有参赛者都是嫌疑人。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "私人岛屿",
    "file": "movie-493.html",
    "cover": "./43.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑, 惊悚",
    "tags": [
      "度假",
      "无人岛",
      "阴谋",
      "密室逃生"
    ],
    "desc": "四对情侣受邀参加“私人岛屿”豪华度假，却发现自己是真人猎杀游戏的主角。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "痛苦的日子",
    "file": "movie-494.html",
    "cover": "./44.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 心理 / 战争",
    "tags": [
      "PTSD",
      "老兵",
      "黑白摄影",
      "意识流"
    ],
    "desc": "从阿富汗战场回来的狙击手，无法分辨现实与幻觉，他眼里的日常全是战场。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "旅行护士第二季",
    "file": "movie-495.html",
    "cover": "./45.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "医疗",
    "tags": [
      "医疗",
      "悬疑",
      "双男主",
      "社会派"
    ],
    "desc": "神秘的“旅行护士”来到全日本最官僚的贵族医院，用病历本上的死亡笔记审判庸医。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "隐入尘烟",
    "file": "movie-496.html",
    "cover": "./46.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情, 爱情, 文艺",
    "tags": [
      "农村",
      "边缘人物",
      "诗意现实主义",
      "女性"
    ],
    "desc": "村里最穷的光棍与身有残疾的被弃女人被迫结婚，两人在土坯房里用麦粒印花朵，直到推土机开进麦田。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "我是大哥大",
    "file": "movie-497.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧、动作、校园",
    "tags": [
      "不良少年",
      "搞笑",
      "复古",
      "发型",
      "友情"
    ],
    "desc": "两个转校生为了“当大哥”而染了金发和刺猬头，却因此被卷入了一场真正的不良少年战争。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "这个世界温柔的冷漠",
    "file": "movie-498.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情哲学",
    "tags": [
      "存在主义",
      "阿尔贝·加缪",
      "现代改编",
      "疏离",
      "女性视角"
    ],
    "desc": "当代巴黎，一个患情感淡漠症的女性意外卷入杀人案，所有人都在逼她“像个正常人一样哭”。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "历险小恐龙3",
    "file": "movie-499.html",
    "cover": "./49.jpg",
    "year": "1995",
    "region": "美国",
    "type": "动画",
    "genre": "冒险 / 家庭",
    "tags": [
      "恐龙",
      "友情",
      "成长",
      "史前冒险"
    ],
    "desc": "小雷龙与三个伙伴误入神秘“时间裂缝”，必须与未来哺乳动物联手回家。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "逃出魔掌",
    "file": "movie-500.html",
    "cover": "./50.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "tags": [
      "密室",
      "逃脱",
      "反转"
    ],
    "desc": "她醒来发现左手被铐在尸体上，凶手在门外倒计时。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "大人物第一季",
    "file": "movie-501.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 职场 / 黑色喜剧",
    "tags": [
      "金融",
      "内鬼",
      "双面人生",
      "商战"
    ],
    "desc": "投行VP白天叱咤风云，晚上是地下拳手，直到他发现要击杀的目标是自己的上司。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "交通队的故事",
    "file": "movie-502.html",
    "cover": "./52.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 职业 / 日常",
    "tags": [
      "交警",
      "群像",
      "基层",
      "烟火气",
      "暖心"
    ],
    "desc": "聚焦一个普通交警队，看他们在鸡毛蒜皮与生死一线间守护城市脉搏。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "美味小姐与爆笑先生",
    "file": "movie-503.html",
    "cover": "./53.jpg",
    "year": "2020",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧 / 爱情 / 美食",
    "tags": [
      "美食",
      "欢喜冤家",
      "味觉天才",
      "搞笑"
    ],
    "desc": "韩国最挑剔的美食评论家，患上了奇怪的病——吃到难吃的就会狂笑不止。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "妙妙龙",
    "file": "movie-504.html",
    "cover": "./54.jpg",
    "year": "1977",
    "region": "美国",
    "type": "动画",
    "genre": "奇幻, 冒险, 家庭, 歌舞",
    "tags": [
      "龙",
      "孤儿",
      "真人动画结合"
    ],
    "desc": "孤儿彼得和他的动画龙朋友逃离贪婪的养父母，却被一个骗子女士盯上了。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "法网惊魂",
    "file": "movie-505.html",
    "cover": "./55.jpg",
    "year": "1991",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪，悬疑",
    "tags": [
      "律师",
      "陷害",
      "陪审团",
      "法庭",
      "倒计时"
    ],
    "desc": "一名死刑辩护律师在开庭前两小时发现，整份案卷、所有证人，甚至被告本人，都是为陷害他而设计的。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "猩球崛起2:黎明之战",
    "file": "movie-506.html",
    "cover": "./56.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "genre": "科幻，动作，剧情",
    "tags": [
      "猿族",
      "凯撒",
      "人类存亡",
      "森林战争",
      "信任危机"
    ],
    "desc": "凯撒建立猿族社会的第二年，一个人类幸存者营地误杀了他的儿子。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "伯爵夫人",
    "file": "movie-507.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "历史, 剧情",
    "tags": [
      "庄园",
      "遗产",
      "女仆",
      "身份置换",
      "维多利亚"
    ],
    "desc": "1887年，伯爵夫人暴毙，贴身女仆被要求“扮演”她三个月，以保住家族名声。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "龙虎大飞车",
    "file": "movie-508.html",
    "cover": "./58.jpg",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 冒险 / 喜剧",
    "tags": [
      "港产片",
      "飞车",
      "兄弟情",
      "喜剧",
      "赛车"
    ],
    "desc": "两个负债的废柴司机，为了还债假冒香港车队参加中缅山地越野赛。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "口哨公主",
    "file": "movie-509.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画",
    "genre": "奇幻，音乐，冒险",
    "tags": [
      "公主",
      "诅咒",
      "音乐",
      "成长"
    ],
    "desc": "被诅咒失声的公主，只能用口哨与动物交流，她必须组建一支动物乐队，推翻窃国的沉默魔君。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "独自等待",
    "file": "movie-510.html",
    "cover": "./60.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": [
      "孤独",
      "等待",
      "爱情",
      "都市",
      "文艺"
    ],
    "desc": "一个在北京深夜电台讲故事的女生，发现自己故事里的男主角，每晚都在电台楼下等她。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "失控危城",
    "file": "movie-511.html",
    "cover": "./61.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "tags": [
      "恐袭",
      "极限生存",
      "倒计时",
      "密室"
    ],
    "desc": "恐怖分子封锁摩天大楼，一名休班特警必须在天亮前救出被困的女儿。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "鬼哭神嚎2之入魔",
    "file": "movie-512.html",
    "cover": "./62.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "tags": [
      "凶宅",
      "超自然",
      "密室恐惧",
      "心理扭曲"
    ],
    "desc": "纪录片剧组住进鬼哭神嚎凶宅拍摄，发现屋子真正的恐怖不是杀人，而是“劝你留下”。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "两条牛仔龙",
    "file": "movie-513.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "西部，喜剧",
    "tags": [
      "公路片",
      "老年",
      "种族和解"
    ],
    "desc": "一个老白男牛仔和一个老黑人牛仔结伴偷走一车龙舌兰，只为去墨西哥看已故初恋的坟。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "巴格达来信",
    "file": "movie-514.html",
    "cover": "./64.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "战争 / 剧情",
    "tags": [
      "书信",
      "亲情",
      "伊拉克",
      "催泪",
      "真实改编"
    ],
    "desc": "一个英国士兵在巴格达捡到一叠沾满血迹的信件，决定替写信人完成遗愿。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "火舞丽人",
    "file": "movie-515.html",
    "cover": "./65.jpg",
    "year": "1994",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 动作 / 歌舞",
    "tags": [
      "女性群像",
      "夜总会",
      "复仇",
      "烈焰红裙",
      "江湖情仇"
    ],
    "desc": "夜总会最红的台柱丽华，在发现老板是杀父仇人后，决定用一场火舞葬送整个舞台。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "只有我不在的街道",
    "file": "movie-516.html",
    "cover": "./66.jpg",
    "year": "2016",
    "region": "日本",
    "type": "动画",
    "genre": "悬疑、奇幻、穿越",
    "tags": [
      "时间回溯",
      "连环杀人",
      "拯救母亲",
      "童年羁绊"
    ],
    "desc": "三流漫画家拥有“再上映”能力，当母亲被杀后，他穿越回小学时代，阻止连环绑架案。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "那些与初恋有关的秘密",
    "file": "movie-517.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情, 青春, 悬疑",
    "tags": [
      "初恋",
      "校园",
      "时空胶囊",
      "秘密"
    ],
    "desc": "三十年后，高中同学会上的一本匿名日记被公开，掀开了当年校花失踪案背后与每个人初恋有关的秘密。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "厉阴宅：最终圣事",
    "file": "movie-518.html",
    "cover": "./68.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "tags": [
      "驱魔",
      "教会",
      "终极"
    ],
    "desc": "传奇驱魔人沃伦夫妇的最后一次联手，对抗一个企图通过圣礼仪式降临人间的古代恶魔。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "闪光的乐队",
    "file": "movie-519.html",
    "cover": "./69.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "音乐 / 真人秀",
    "tags": [
      "乐队",
      "竞演",
      "怀旧",
      "改编"
    ],
    "desc": "不同年代的乐坛老炮儿们打乱重组，只为在舞台上找到最后一次发光的机会。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "燃烧的国土",
    "file": "movie-520.html",
    "cover": "./70.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 惊悚, 战争",
    "tags": [
      "复仇",
      "雇佣兵",
      "丛林",
      "火攻",
      "硬核"
    ],
    "desc": "一名退役消防员转型的雇佣兵，回到被军阀占领的家乡，利用火灾动力学智取敌人。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "咸湿探戈",
    "file": "movie-521.html",
    "cover": "./71.jpg",
    "year": "2025",
    "region": "阿根廷 / 西班牙",
    "type": "电影",
    "genre": "剧情 / 爱情 / 惊悚",
    "tags": [
      "探戈",
      "欲望",
      "复仇"
    ],
    "desc": "布宜诺斯艾利斯的暗巷里，一场探戈比赛成了精心策划的复仇杀局。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "碰撞搜查线",
    "file": "movie-522.html",
    "cover": "./72.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "动作 / 刑侦 / 兄弟情",
    "tags": [
      "车祸",
      "黑警",
      "飙车",
      "双男主",
      "复仇"
    ],
    "desc": "交通科交警与黑道出身的肇事逃逸调查员被迫搭档，在追查连环豪车杀人案时发现警局内鬼。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "妹妹",
    "file": "movie-523.html",
    "cover": "./73.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 家庭 / 惊悚",
    "tags": [
      "失踪",
      "替身",
      "记忆",
      "伦理",
      "反转"
    ],
    "desc": "失踪十年的妹妹突然回家，但姐姐发现这个“妹妹”不仅没有胎记，甚至知道只有凶手才知道的秘密。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "灿实也多福",
    "file": "movie-524.html",
    "cover": "./74.jpg",
    "year": "2020",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 家庭 / 女性",
    "tags": [
      "韩国独立电影",
      "丧亲",
      "治愈",
      "女性互助",
      "小确幸"
    ],
    "desc": "一个在葬礼上发现自己被裁员的中年单身女人，决定用全部积蓄开一家不赚钱的米肠汤饭馆。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "小川町小夜曲",
    "file": "movie-525.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "日常, 温情",
    "tags": [
      "治愈",
      "群像剧",
      "邻里"
    ],
    "desc": "东京神保町一条老街上，每晚十点准时响起的钢琴声，串联起了七位陌生人的秘密。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "宛若淑女",
    "file": "movie-526.html",
    "cover": "./76.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 女性",
    "tags": [
      "女性成长",
      "家庭",
      "传统",
      "反抗"
    ],
    "desc": "三个不同世代的台湾女人，用整整四十年学习如何“宛若淑女”，最后却选择撕掉这个标签。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "荷顿奇遇记",
    "file": "movie-527.html",
    "cover": "./77.jpg",
    "year": "2023",
    "region": "美国",
    "type": "动画",
    "genre": "喜剧、冒险",
    "tags": [
      "大象",
      "想象朋友",
      "小镇冒险",
      "友谊",
      "成长"
    ],
    "desc": "一头爱幻想的大象荷顿在废弃游乐园里发现了一群只存在于他想象中的朋友，却因此被全镇人当成了疯子。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "地穴恶魔",
    "file": "movie-528.html",
    "cover": "./78.jpg",
    "year": "2023",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "恐怖, 冒险",
    "tags": [
      "洞穴探险",
      "变异生物",
      "密闭空间",
      "生存"
    ],
    "desc": "一队洞穴探险者在深入无人溶洞后，触怒了栖息在地下水脉中的远古掠食者“地穴恶魔”。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "恋上纯喫茶 续篇",
    "file": "movie-529.html",
    "cover": "./79.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "美食、治愈",
    "tags": [
      "日式咖啡馆",
      "怀旧风",
      "慢生活",
      "温情",
      "单元剧"
    ],
    "desc": "复古咖啡爱好者继续走街串巷，在昭和年代的旧咖啡店里，品味人生百味与一杯极致咖啡。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "欲望过程",
    "file": "movie-530.html",
    "cover": "./80.jpg",
    "year": "2012",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 情色 / 心理",
    "tags": [
      "哲学思辨",
      "亲密关系",
      "中产危机"
    ],
    "desc": "一对开放式婚姻的夫妻，因邀请一位陌生画家进入生活，导致欲望天平彻底失衡。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "恋爱完成式",
    "file": "movie-531.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "tags": [
      "失忆",
      "复合",
      "同志",
      "泰式清新",
      "忘记你"
    ],
    "desc": "相恋十年的男友失忆后只记得高中暗恋的直男，他决定帮男友重新“追”到那个人。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "谢谢！再联络",
    "file": "movie-532.html",
    "cover": "./82.jpg",
    "year": "2023",
    "region": "马来西亚",
    "type": "电影",
    "genre": "喜剧，爱情",
    "tags": [
      "网恋奔现",
      "社死",
      "爆笑",
      "反转"
    ],
    "desc": "社交恐惧女在相亲软件上伪装成海后，谁知约见的“纯情小奶狗”竟是公司新来的铁腕CEO。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "艾希曼的末日",
    "file": "movie-533.html",
    "cover": "./83.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "历史剧情",
    "tags": [
      "二战",
      "审判",
      "心理博弈",
      "纪实"
    ],
    "desc": "摩萨德特工在阿根廷绑架了艾希曼，在秘密押送以色列的十一天里，审讯员试图唤醒他的人性，却发现那是徒劳。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "你的男友是我的",
    "file": "movie-534.html",
    "cover": "./84.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 爱情 / 惊悚",
    "tags": [
      "换脸",
      "嫉妒",
      "复仇",
      "悬疑爱情"
    ],
    "desc": "一个因毁容而自卑的女人，通过换脸手术变成了闺蜜的模样，一步步夺走她的人生。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "星期五杀手",
    "file": "movie-535.html",
    "cover": "./85.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作、喜剧",
    "tags": [
      "杀手",
      "乌龙",
      "星期五",
      "枪战",
      "黑色幽默"
    ],
    "desc": "一个只接“坏老板”订单的杀手，却总在周五遇到各种荒诞意外。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "母与女",
    "file": "movie-536.html",
    "cover": "./86.jpg",
    "year": "2015",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "母女",
      "遗言",
      "三代女性",
      "和解",
      "秘密"
    ],
    "desc": "母亲临终前留给女儿一张纸条，上面只有一个地址和一串数字，那是女儿从未听说过的外婆家的门牌和密码。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "骇故事之暗窗",
    "file": "movie-537.html",
    "cover": "./87.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑， 惊悚， 犯罪",
    "tags": [
      "邻居",
      "窥视",
      "反转",
      "密室"
    ],
    "desc": "独居女孩通过暗窗看到对面邻居杀人，报警后却发现那里根本没人住。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "等待游戏",
    "file": "movie-538.html",
    "cover": "./88.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 同性 / 文艺",
    "tags": [
      "火车站",
      "等待",
      "信件",
      "时光胶囊",
      "未说出口的爱"
    ],
    "desc": "一名老人每天在废弃火车站等一辆不会来的列车，直到一个少年发现了他口袋里的五十年前的情书。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "布偶历险记：全面追缉",
    "file": "movie-539.html",
    "cover": "./89.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 冒险 / 家庭",
    "tags": [
      "布偶归来",
      "黑色幽默",
      "解构经典",
      "跨次元",
      "合家欢"
    ],
    "desc": "布偶家族被诬陷盗窃国家机密，他们必须在真实世界里找到真凶，否则就要被“永远注销”。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "基欲都市",
    "file": "movie-540.html",
    "cover": "./90.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "同性 / 爱情 / 都市",
    "tags": [
      "LGBT",
      "多线叙事",
      "台北夜生活"
    ],
    "desc": "台北四个 gay 蜜好友在欲望与真爱中横冲直撞，有人约炮成瘾，有人渴望一生一世。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "爱情，开袋即食",
    "file": "movie-541.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 喜剧, 科幻",
    "tags": [
      "预制菜",
      "速食爱情",
      "味觉",
      "美食"
    ],
    "desc": "母胎单身的食品研发师发明了一款“爱情味觉预制菜”，任何情侣吃下都会立刻热恋，直到她拿自己当小白鼠，爱上了试验对象。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "秃鹰之城",
    "file": "movie-542.html",
    "cover": "./92.jpg",
    "year": "2025",
    "region": "德国",
    "type": "剧集",
    "genre": "科幻, 悬疑, 政治",
    "tags": [
      "极权",
      "记忆",
      "实验",
      "反乌托邦"
    ],
    "desc": "一座没有犯罪、没有疾病的完美城市，代价是所有居民每隔七年被清除一次情感记忆。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "魔宫春潮",
    "file": "movie-543.html",
    "cover": "./93.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "奇幻, 情色, 武侠",
    "tags": [
      "邵氏",
      "风月片",
      "古装",
      "夺宝"
    ],
    "desc": "魔宫宝藏据说能让人青春永驻，但当一群江湖人士闯入后，却发现长生不老的代价是变成怪物。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "村里来了个洋媳妇",
    "file": "movie-544.html",
    "cover": "./94.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "喜剧/家庭",
    "tags": [
      "中外差异",
      "农村",
      "爆笑",
      "文化冲突",
      "温情"
    ],
    "desc": "法国超模为爱嫁入陕北农村，第一次上旱厕、学扭秧歌、还被婆婆逼着喝小米粥坐月子。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "傻王闯天下",
    "file": "movie-545.html",
    "cover": "./95.jpg",
    "year": "2023",
    "region": "中国",
    "type": "剧集",
    "genre": "古装 / 喜剧 / 冒险",
    "tags": [
      "扮猪吃老虎",
      "江湖行",
      "真假痴傻",
      "朝堂权谋"
    ],
    "desc": "当所有皇子都在争太子位时，最受宠爱的三皇子却装疯卖傻，偷偷溜出宫去当了江湖骗子。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "诗人的爱",
    "file": "movie-546.html",
    "cover": "./96.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": [
      "文学",
      "忘年恋",
      "绝症"
    ],
    "desc": "一名写不出诗的七旬老诗人，爱上了来照顾他的男护士，他用对方的药方背面，写下了此生最后的情诗。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "干支魂",
    "file": "movie-547.html",
    "cover": "./97.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻, 战斗, 萌系",
    "tags": [
      "十二生肖",
      "拟人",
      "猫娘",
      "神位之争",
      "日常"
    ],
    "desc": "为了争夺十二生肖空出的“猫”之位，80只萌兽娘在秋叶原展开了激烈的日常战斗。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "加里波利",
    "file": "movie-548.html",
    "cover": "./98.jpg",
    "year": "2023",
    "region": "澳大利亚",
    "type": "剧集",
    "genre": "历史, 战争, 剧情",
    "tags": [
      "一战",
      "澳新军团",
      "战争反思",
      "兄弟情"
    ],
    "desc": "四个来自澳大利亚乡下的年轻人，怀揣着帝国荣耀的幻想奔赴加里波利，等待他们的却是人间炼狱。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "九霄寒夜暖",
    "file": "movie-549.html",
    "cover": "./99.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装, 奇幻, 爱情",
    "tags": [
      "九霄神界",
      "寒暖双生",
      "仙侠虐恋",
      "命运羁绊",
      "唯美国风"
    ],
    "desc": "天生体热的火神之女与身负寒毒的九霄神尊因诅咒绑定，冰火交缠却爱而不得。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "天狼劫国语",
    "file": "movie-550.html",
    "cover": "./100.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "剧集",
    "genre": "武侠 / 古装",
    "tags": [
      "TVB",
      "武侠",
      "宿命",
      "复仇",
      "刘德华"
    ],
    "desc": "武林惊现“天狼令”，得令者可称霸，但每六十年必遭天狼食日的反噬之劫。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "理查做了什么",
    "file": "movie-551.html",
    "cover": "./101.jpg",
    "year": "2023",
    "region": "爱尔兰 / 英国",
    "type": "电影",
    "genre": "剧情, 悬疑, 校园",
    "tags": [
      "校园霸凌",
      "青少年心理",
      "真相罗生门",
      "阶层差异"
    ],
    "desc": "一所贵族私立学校里，备受爱戴的学生理查德意外身亡，而最后和他在一起的，是那个拿着奖学金的穷孩子。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "江湖武士泪",
    "file": "movie-552.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "武侠, 剧情",
    "tags": [
      "末代武士",
      "港产片情怀",
      "黑帮武侠"
    ],
    "desc": "1997前的香港，最后一位真正的武士用刀对抗持枪黑帮，只为守住一条老街。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "神拳霸腿追魂手",
    "file": "movie-553.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪 / 喜剧",
    "tags": [
      "功夫",
      "黑市拳",
      "失忆",
      "双雄",
      "B级片"
    ],
    "desc": "失忆的拳王被误认为江湖杀手，同时被黑帮和警方追杀，而他只会用拳头问路。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "自由战士：射线 电影版",
    "file": "movie-554.html",
    "cover": "./104.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "动作，科幻，超级英雄",
    "tags": [
      "超级英雄",
      "超能力",
      "反乌托邦",
      "视觉系",
      "漫画改编"
    ],
    "desc": "一个能操控光能的青年，在地下反抗组织中从懦夫成长为领袖，却发现自己的超能力来源于敌人的实验。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "湮灭",
    "file": "movie-555.html",
    "cover": "./105.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 恐怖, 悬疑",
    "tags": [
      "克苏鲁",
      "深海异变",
      "意识吞噬",
      "身体恐怖"
    ],
    "desc": "深海钻井队挖到了不该存在的东西，它不杀人，它让人变成自己最恐惧的模样。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "第44条军规",
    "file": "movie-556.html",
    "cover": "./106.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "genre": "战争，喜剧，剧情",
    "tags": [
      "黑色幽默",
      "反战",
      "荒谬",
      "官僚主义"
    ],
    "desc": "二战士兵为了活命装疯，却触发了第44条军规：疯子可以免飞，但必须自己申请。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "哈德逊岸边的海德公园",
    "file": "movie-557.html",
    "cover": "./107.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑, 剧情, 历史",
    "tags": [
      "政治惊悚",
      "庄园",
      "双面间谍",
      "二战",
      "限定空间"
    ],
    "desc": "1944年哈德逊河畔的庄园晚宴上，一名侍者同时被三方势力要求毒杀同一位客人，而他只有一次机会。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "我朋友是丹墨",
    "file": "movie-558.html",
    "cover": "./108.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 青春",
    "tags": [
      "校园霸凌",
      "幻想朋友",
      "反转"
    ],
    "desc": "内向高中生唯一的朋友“丹墨”，整个学校只有她自己能看见。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "超时空护卫队第一季",
    "file": "movie-559.html",
    "cover": "./109.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻, 动作, 冒险",
    "tags": [
      "时间穿越",
      "平行宇宙",
      "团队集结",
      "高燃打斗"
    ],
    "desc": "2077年，一群高中生被选中修复错乱的时间线，但他们要面对的敌人，是未来的自己。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "台上人家",
    "file": "movie-560.html",
    "cover": "./110.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "京剧",
      "传承",
      "父女",
      "时代变迁",
      "剧团"
    ],
    "desc": "父亲是固执的京剧武生，女儿是网红歌手，一场被迫同台的演出让两代人唱出彼此的人生。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "新所罗门王",
    "file": "movie-561.html",
    "cover": "./111.jpg",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "genre": "历史, 剧情, 悬疑",
    "tags": [
      "古代以色列",
      "王权争斗",
      "智慧对决",
      "宗教史诗"
    ],
    "desc": "两位女人自称是同一孩子的母亲，新所罗门王用一把剑揭开了宫廷惊天阴谋。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "噬心",
    "file": "movie-562.html",
    "cover": "./112.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 奇幻 / 古装",
    "tags": [
      "替身",
      "虐恋",
      "失忆",
      "蛊术",
      "复仇"
    ],
    "desc": "为解家族诅咒，她甘做白月光替身，却在真心交付后被他亲手剜心。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "巨兽狂蟒",
    "file": "movie-563.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "美国 / 澳大利亚",
    "type": "电影",
    "genre": "动作 / 科幻 / 恐怖",
    "tags": [
      "巨型蛇怪",
      "基因突变",
      "丛林逃生",
      "B级片"
    ],
    "desc": "亚马逊科考队激活了地下200米的远古巨蟒巢穴，巨蟒不仅巨大，而且智商逼近人类。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "我是劫机者",
    "file": "movie-564.html",
    "cover": "./114.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪 / 剧情 / 惊悚",
    "tags": [
      "真实事件改编",
      "劫机",
      "记者",
      "反转",
      "人性"
    ],
    "desc": "1980年代，一名记者劫持了飞往平壤的客机，但落地后才发现，全机乘客都是他想揭露的贪官的家人。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "逃离好莱坞",
    "file": "movie-565.html",
    "cover": "./115.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 惊悚",
    "tags": [
      "娱乐圈黑幕",
      "心理压迫",
      "绝地反击"
    ],
    "desc": "过气女星为逃离好莱坞大佬控制，伪造死亡潜入地下电影圈。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "海边的白房子",
    "file": "movie-566.html",
    "cover": "./116.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 剧情",
    "tags": [
      "心理",
      "秘密",
      "海边",
      "母女",
      "往事"
    ],
    "desc": "患失忆症的母亲口中反复念叨的白房子，竟是女儿童年噩梦的源头。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "为何不去死",
    "file": "movie-567.html",
    "cover": "./117.jpg",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "黑色幽默 / 犯罪 / 剧情",
    "tags": [
      "荒诞",
      "黑帮",
      "话痨电影",
      "暴力美学"
    ],
    "desc": "一个想自杀的废柴闯入黑帮老大的家，却阴差阳错帮老大解决了一堆想杀他的人。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "盲童顾盼盼的音乐梦想",
    "file": "movie-568.html",
    "cover": "./118.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "励志， 家庭， 音乐",
    "tags": [
      "残障题材",
      "追梦",
      "温情",
      "原创音乐"
    ],
    "desc": "天生失明的女孩顾盼盼，梦想成为顶级钢琴家，但所有人都告诉她：“盲人只能去调音。”",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "历尽沧桑一美人续集",
    "file": "movie-569.html",
    "cover": "./119.jpg",
    "year": "1987",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": [
      "女性史诗",
      "中年爱情",
      "续集",
      "时代变迁"
    ],
    "desc": "三十年前为爱私奔的舞女，如今成了富商遗孀，她的女儿却走上和她当年一模一样的路。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "会说话的照片",
    "file": "movie-570.html",
    "cover": "./120.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑, 科幻, 惊悚",
    "tags": [
      "照片",
      "AI",
      "亡妻",
      "秘密",
      "黑镜风格"
    ],
    "desc": "程序员将亡妻数据上传进老照片，照片虽能对话，却开始揭露男主从未参与的谋杀细节。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "锦标赛",
    "file": "movie-571.html",
    "cover": "./121.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "运动 / 悬疑 / 剧情",
    "tags": [
      "电竞",
      "谋杀案",
      "群像",
      "高智商",
      "资本阴谋"
    ],
    "desc": "全球奖金最高的电竞总决赛现场，种子战队队长在比赛途中被毒杀，而凶手就藏在剩下的四支战队中。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "快递人生",
    "file": "movie-572.html",
    "cover": "./122.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 现实",
    "tags": [
      "外卖骑手",
      "城市折叠",
      "底层视角",
      "公路叙事",
      "生存压力"
    ],
    "desc": "一个订单超时的快递员，在最后40分钟里跑完了自己的一生。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "在/其中",
    "file": "movie-573.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "台湾",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "tags": [
      "心理迷宫",
      "身份认同",
      "时间错位",
      "都市传说",
      "非线性叙事"
    ],
    "desc": "失忆男子醒来被困一栋无穷复制的大楼，每一层都是他人生的错误版本。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "落水姻缘",
    "file": "movie-574.html",
    "cover": "./124.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧， 爱情",
    "tags": [
      "失忆",
      "身份互换",
      "轻松",
      "欢喜冤家"
    ],
    "desc": "一个瞧不起普通人的势利女富豪意外失忆，被一个被她戏弄过的建筑工头骗回了家，声称她是自己的老婆。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "红色天空",
    "file": "movie-575.html",
    "cover": "./125.jpg",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": [
      "文艺青年",
      "森林火灾",
      "自我成长"
    ],
    "desc": "一个傲慢的文艺青年被困在森林火灾隔离区，他的小说构思不断被现实打断，直到天空被烧成红色。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "媒体的力量",
    "file": "movie-576.html",
    "cover": "./126.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "tags": [
      "调查记者",
      "校园霸凌",
      "舆论反转"
    ],
    "desc": "一名调查记者追踪一起校园坠楼案，却发现自己正在亲手制造一起冤案。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "超凡世界",
    "file": "movie-577.html",
    "cover": "./127.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情, 奇幻",
    "tags": [
      "超能力",
      "抑郁症",
      "治愈"
    ],
    "desc": "当全世界都在沉迷获得超能力时，只有女主因为心理创伤而拒绝使用自己的“治愈”能力。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "解除好友2：暗网",
    "file": "movie-578.html",
    "cover": "./128.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚 / 犯罪",
    "tags": [
      "桌面电影",
      "暗网",
      "直播杀人",
      "社会实验",
      "高能"
    ],
    "desc": "一个年轻人捡到一台存有暗网入口的笔记本电脑，每当他拒绝“观看”一段杀人直播，他的朋友就会离奇失踪。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "烽火欲海奇女子",
    "file": "movie-579.html",
    "cover": "./129.jpg",
    "year": "1992",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情，战争，剧情",
    "tags": [
      "民国",
      "乱世佳人",
      "女性传奇"
    ],
    "desc": "一个沦落风尘的歌女，在抗战时期的上海滩周旋于各方势力之间，只为寻找失散的妹妹。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "请求庇护",
    "file": "movie-580.html",
    "cover": "./130.jpg",
    "year": "2023",
    "region": "法国 / 德国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "tags": [
      "难民",
      "法律",
      "道德困境"
    ],
    "desc": "一位法国法官接手了一名叙利亚难民的庇护案，却发现此人曾在自己的战争照片中出现过。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "拯救地球",
    "file": "movie-581.html",
    "cover": "./131.jpg",
    "year": "2003",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧， 科幻， 剧情",
    "tags": [
      "邪典",
      "精神病",
      "外星人",
      "反转",
      "神作"
    ],
    "desc": "一个坚信自己是救世主的疯子，绑架了一个企业高管，因为他认为对方是伪装成人类的外星王子。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "神秘岛",
    "file": "movie-582.html",
    "cover": "./132.jpg",
    "year": "2005",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻，冒险",
    "tags": [
      "儒勒·凡尔纳",
      "荒岛求生",
      "神秘事件",
      "蒸汽朋克"
    ],
    "desc": "五位战俘乘热气球坠毁在神秘岛屿，发现这里藏着海底两万里的终极秘密。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "恐怖陷阱",
    "file": "movie-583.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖，惊悚，密室",
    "tags": [
      "陷阱屋",
      "直播",
      "极限求生",
      "器官"
    ],
    "desc": "六名网红受邀参加一档“极限生存”直播，发现豪宅里的每个陷阱都复制了他们曾经的网络暴力。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "山之巅",
    "file": "movie-584.html",
    "cover": "./134.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险，剧情",
    "tags": [
      "登山",
      "父子情",
      "极限生存",
      "信仰救赎"
    ],
    "desc": "一对关系破裂的父子在攀登喜马拉雅山时遭遇雪崩，必须在绝境中重新学会信任。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "血战：最后的吸血鬼",
    "file": "movie-585.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画",
    "genre": "动作 / 恐怖",
    "tags": [
      "吸血鬼",
      "女战士",
      "暴力美学",
      "冷战背景"
    ],
    "desc": "1960年代日本美军基地内，一个身份成谜的少女持刀猎杀吸血鬼，但她发现自己也正在变成怪物。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "三个傻瓜",
    "file": "movie-586.html",
    "cover": "./136.jpg",
    "year": "2009",
    "region": "印度",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 励志",
    "tags": [
      "教育体制",
      "友情",
      "理想",
      "反抗权威",
      "催泪"
    ],
    "desc": "三个工程学院的“傻瓜”用荒诞方式反抗填鸭教育，十年后一个成了大发明家，一个消失了。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "退退退退下！ 动态漫画",
    "file": "movie-587.html",
    "cover": "./137.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装, 喜剧, 言情",
    "tags": [
      "有声漫画",
      "宫斗反套路",
      "社恐女主",
      "像素画风",
      "沙雕"
    ],
    "desc": "社恐宫女只想当透明人，却总被各路主子争抢，无奈开发出“后退十连”神技。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "昨日的美食",
    "file": "movie-588.html",
    "cover": "./138.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情 / 生活 / 美食",
    "tags": [
      "同性伴侣",
      "日常",
      "料理",
      "治愈",
      "中年"
    ],
    "desc": "一对四十岁的中年同性伴侣，每天用限时特价的食材做出一桌好菜，在柴米油盐中对抗世界的偏见与衰老。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "大八卦",
    "file": "movie-589.html",
    "cover": "./139.jpg",
    "year": "2019",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 黑色幽默",
    "tags": [
      "八卦",
      "自媒体",
      "舆论杀人",
      "反转"
    ],
    "desc": "一个小区里流传的豪门八卦，当所有人都在传的时候，真相早已面目全非。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "来历不明的孩子",
    "file": "movie-590.html",
    "cover": "./140.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 剧情 / 惊悚",
    "tags": [
      "婴儿绑架",
      "身份迷局",
      "全员恶人"
    ],
    "desc": "一对无法生育的夫妇在教堂门口捡到弃婴，三个月后警察上门：这个婴儿可能来自一场谋杀，而凶手就在他们身边。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "心痛",
    "file": "movie-591.html",
    "cover": "./141.jpg",
    "year": "2004",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情，剧情，文艺",
    "tags": [
      "心脏移植",
      "记忆转移",
      "苦恋",
      "遗憾"
    ],
    "desc": "失去未婚妻的男人，移植了陌生人的心脏，术后他开始频繁梦见一个他从没见过的女人。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "轮到你了 剧场版",
    "file": "movie-592.html",
    "cover": "./142.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "tags": [
      "交换杀人",
      "平行结局",
      "原班人马",
      "脑洞大开"
    ],
    "desc": "剧版“交换杀人游戏”从未发生，但新搬入的住户偶然发现公寓里的秘密信箱仍然在运转。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "心灵融合",
    "file": "movie-593.html",
    "cover": "./143.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "科幻 / 爱情 / 伦理",
    "tags": [
      "意识上传",
      "夫妻关系",
      "永生",
      "伦理困境",
      "催泪"
    ],
    "desc": "丈夫车祸脑死亡，妻子将他的意识上传到AI中，却发现数字化的丈夫变得“太完美”，完美到令人毛骨悚然。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "哈利路亚",
    "file": "movie-594.html",
    "cover": "./144.jpg",
    "year": "2020",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑，奇幻",
    "tags": [
      "神父",
      "驱魔",
      "伪纪录片"
    ],
    "desc": "梵蒂冈秘密档案显示，过去50年所有失败的驱魔案例，都与一个叫“哈利路亚”的恶魔有关。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "抢救旭山动物园",
    "file": "movie-595.html",
    "cover": "./145.jpg",
    "year": "2008",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 家庭, 励志",
    "tags": [
      "真实改编",
      "动物园危机",
      "兽医奋斗",
      "团队合作",
      "温情治愈"
    ],
    "desc": "日本最北端的旭山动物园因游客锐减面临闭园，饲养员们用“行动展示”的疯狂创意，试图让动物重新眼里有光。 游客不进动物园，不是因为动物不可爱，而是因为它们趴在笼子里像标本，没有生命该有的样子。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "沉默的心",
    "file": "movie-596.html",
    "cover": "./146.jpg",
    "year": "2024",
    "region": "丹麦",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": [
      "北欧",
      "死亡",
      "家庭聚会",
      "悲喜剧"
    ],
    "desc": "患有绝症的母亲决定在生日聚会上进行安乐死，家人们带着各自的秘密和私心回到了这个沉默的家。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "纽约大浩劫",
    "file": "movie-597.html",
    "cover": "./147.jpg",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 科幻, 灾难",
    "tags": [
      "电磁脉冲",
      "全城断电",
      "硬汉救援"
    ],
    "desc": "一颗高空电磁脉冲弹让纽约陷入瘫痪，一名前海军陆战队员必须徒步穿越曼哈顿拯救被困的女儿。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "奥洛夫医生的邪眼",
    "file": "movie-598.html",
    "cover": "./148.jpg",
    "year": "1975",
    "region": "西班牙",
    "type": "电影",
    "genre": "恐怖, 奇幻, 邪典",
    "tags": [
      "邪眼",
      "催眠",
      "身体恐怖",
      "铅黄电影"
    ],
    "desc": "一位疯狂的神经科医生坚信自己能通过“邪眼”控制他人大脑，并以此进行变态的活体实验。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "圣诞奇妙公司",
    "file": "movie-599.html",
    "cover": "./149.jpg",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "genre": "奇幻, 家庭, 喜剧",
    "tags": [
      "圣诞老人",
      "魔法",
      "冒险",
      "合家欢",
      "治愈"
    ],
    "desc": "圣诞老人在送礼途中被卷入一场魔法事故，导致他缩小成玩偶大小，必须和两个熊孩子联手拯救圣诞节。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "异界",
    "file": "movie-600.html",
    "cover": "./150.jpg",
    "year": "2026",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "科幻, 悬疑",
    "tags": [
      "潜意识",
      "梦境",
      "建筑",
      "哲学"
    ],
    "desc": "在一个由破碎记忆拼凑成的异世界里，建筑师们靠想象力造物，但一旦遗忘，一切便会瞬间崩塌。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "天声好手",
    "file": "movie-601.html",
    "cover": "./1.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "音乐 / 剧情",
    "tags": [
      "配音演员",
      "梦想",
      "代际冲突",
      "成长",
      "现实题材"
    ],
    "desc": "想做歌手的女儿，被迫成为了一名配音演员，却在声音的表演中找到了真正的自我。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "高调人生",
    "file": "movie-602.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 剧情",
    "tags": [
      "网红文化",
      "虚假繁荣",
      "姐弟情",
      "社交媒体"
    ],
    "desc": "破产后的昔日顶流网红被迫与厌世的程序员弟弟合伙，靠“包月造假人设”来还债。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "伦敦巴黎纽约",
    "file": "movie-603.html",
    "cover": "./3.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "异地恋",
      "三角恋",
      "城市漫游",
      "时空交错"
    ],
    "desc": "一对分手情侣分别定居伦敦、巴黎，却在纽约的一场暴风雪中与对方的新欢狭路相逢。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "谍网妖姬",
    "file": "movie-604.html",
    "cover": "./4.jpg",
    "year": "1967",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 犯罪 / 黑色电影",
    "tags": [
      "蛇蝎美人",
      "变脸",
      "冷战悬疑",
      "连环套"
    ],
    "desc": "顶级间谍在任务中惨遭毁容，换脸归来后，她不仅要手撕仇敌，更要向过去的爱人隐瞒身份。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "笑林足球",
    "file": "movie-605.html",
    "cover": "./5.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧、运动",
    "tags": [
      "喜剧",
      "足球",
      "民间",
      "逆袭"
    ],
    "desc": "少林俗家弟子组建的业余球队被拉去参加国际锦标赛，他们的绝招是铁头功和金刚腿。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "银色溜冰鞋",
    "file": "movie-606.html",
    "cover": "./6.jpg",
    "year": "2020",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": [
      "沙俄时代",
      "阶级差异",
      "溜冰",
      "圣诞"
    ],
    "desc": "1899年圣彼得堡的冰封运河上，贵族少女与穷小子在追逐与被追逐中，偷走了一箱足以改变命运的钻石。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "绝岭三雄",
    "file": "movie-607.html",
    "cover": "./7.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "西部 / 动作 / 冒险",
    "tags": [
      "西北荒漠",
      "寻宝",
      "兄弟情",
      "雇佣兵",
      "枪战"
    ],
    "desc": "民国乱世，三个落魄男人为了传说中的黄金宝藏闯入魔鬼城，背后却是一场复仇陷阱。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "我对你有感觉",
    "file": "movie-608.html",
    "cover": "./8.jpg",
    "year": "2021",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 剧情",
    "tags": [
      "暗恋",
      "职场",
      "错过",
      "都市男女"
    ],
    "desc": "同公司十年的两个人，分别用匿名软件向对方表白，却都以为是另一个人。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "旺角黑夜",
    "file": "movie-609.html",
    "cover": "./9.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作， 犯罪， 悬疑",
    "tags": [
      "暴力美学",
      "霓虹美学",
      "寻人",
      "黑吃黑",
      "反转"
    ],
    "desc": "一个内地来的懵懂青年，带着一张旧照片，要在旺角一夜之间找到一个叫“黑夜”的人。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "原子怪兽",
    "file": "movie-610.html",
    "cover": "./10.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻、灾难",
    "tags": [
      "核变巨兽",
      "末日废土",
      "军方对抗",
      "视觉效果",
      "怪兽宇宙"
    ],
    "desc": "核废料泄漏催生出一只能吞噬一切辐射的巨兽，它不袭击城市，而是直奔全球所有核电站。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "鸳鸯舞圣",
    "file": "movie-611.html",
    "cover": "./11.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 歌舞",
    "tags": [
      "舞蹈",
      "兄弟情",
      "替身"
    ],
    "desc": "一对孪生武打替身，一人伤腿，一人伤手，他们必须合体完成一场不可能的双人舞。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "金字塔游戏",
    "file": "movie-612.html",
    "cover": "./12.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 剧情",
    "tags": [
      "密室逃脱",
      "人性实验",
      "阶级隐喻",
      "烧脑"
    ],
    "desc": "七个陌生人醒来发现被困在一座金字塔形建筑里，每层都对应着一种残酷的社会规则。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "恶魔夜晚来",
    "file": "movie-613.html",
    "cover": "./13.jpg",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖，惊悚，民俗",
    "tags": [
      "英国传说",
      "万圣节",
      "邪教",
      "小镇秘密"
    ],
    "desc": "每年万圣节前夜，这个小镇都会天黑后集体消失，今年一个外来家庭决定留下看看。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "一笑一拳",
    "file": "movie-614.html",
    "cover": "./14.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "tags": [
      "功夫喜剧",
      "小镇青年",
      "打擂台"
    ],
    "desc": "为了追求心中的女神，木讷的武痴阿笑在小镇上摆下擂台，号称要挑战天下英雄，引发了一连串啼笑皆非的故事。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "卡洛斯",
    "file": "movie-615.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "剧集",
    "genre": "惊悚, 犯罪",
    "tags": [
      "西班牙",
      "公寓楼",
      "监视",
      "邻居"
    ],
    "desc": "公寓楼里的自闭症男孩每天记录所有邻居的行踪，直到他发现一条规律：每失踪一个人，就有一家搬走。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "毕业生1967",
    "file": "movie-616.html",
    "cover": "./16.jpg",
    "year": "1967",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": [
      "经典",
      "迷茫一代",
      "不伦恋",
      "毕业"
    ],
    "desc": "大学刚毕业的本恩陷入了与中年妇人罗宾逊太太及其女儿的双重感情漩涡。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "寄身100天",
    "file": "movie-617.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 奇幻 / 惊悚",
    "tags": [
      "寄生",
      "记忆",
      "替身",
      "伦理",
      "反转"
    ],
    "desc": "濒死者可以用金钱购买穷人的身体续命100天，但寄身期间，原主人的意识并未消亡。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "假水果工厂",
    "file": "movie-618.html",
    "cover": "./18.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 奇幻, 伦理",
    "tags": [
      "仿真食品",
      "记忆替换",
      "家族秘密",
      "怀旧"
    ],
    "desc": "一家制作“假水果”的工厂，能将任何人的记忆变成永不腐烂的标本，直到有一天，工人在一颗柠檬里发现了活人的指纹。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "家庭珠宝",
    "file": "movie-619.html",
    "cover": "./19.jpg",
    "year": "2005",
    "region": "印度",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": [
      "家族企业",
      "女性继承",
      "珠宝设计",
      "传统与现代"
    ],
    "desc": "孟买珠宝世家的叛逆女儿要用3D打印技术，挑战父亲坚守了六十年的手工金匠传统。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "一一向前冲",
    "file": "movie-620.html",
    "cover": "./20.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "励志喜剧",
    "tags": [
      "跑步题材",
      "中年危机",
      "逆袭",
      "自我救赎"
    ],
    "desc": "中年失意的老会计被拉进公司马拉松队，他的对手不是别人，正是二十年前的情敌。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "我的麻吉4个鬼",
    "file": "movie-621.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧 / 恐怖 / 奇幻",
    "tags": [
      "见鬼",
      "友情",
      "废柴逆袭",
      "黑色幽默",
      "温情恐怖"
    ],
    "desc": "倒霉青年意外获得“见鬼”能力，还被四个性格迥异的鬼魂缠上，被迫组队完成他们在人间的遗愿。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "玻璃故事",
    "file": "movie-622.html",
    "cover": "./22.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 家庭",
    "tags": [
      "透明建筑",
      "隐私暴露",
      "家庭裂痕",
      "监视"
    ],
    "desc": "建筑师父亲建造了一座全透明玻璃豪宅，家中再无秘密后，每个人都有想砸碎玻璃的冲动。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "捣乱剧团在怪兽之地",
    "file": "movie-623.html",
    "cover": "./23.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻喜剧",
    "tags": [
      "剧团",
      "怪兽",
      "即兴演出",
      "荒诞",
      "热血"
    ],
    "desc": "一个落魄剧团误入怪兽王国，只能用“戏”来感化巨兽、换回性命。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "帝企鹅日记2：召唤",
    "file": "movie-624.html",
    "cover": "./24.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "genre": "纪录片",
    "tags": [
      "企鹅",
      "南极",
      "冒险",
      "迁徙",
      "生存"
    ],
    "desc": "南极冰盖下传来神秘次声波，帝企鹅族群被迫踏上从未预料的终极迁徙。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "美国老爸第十六季",
    "file": "movie-625.html",
    "cover": "./25.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧、动画",
    "tags": [
      "成人动画",
      "政治讽刺",
      "家庭闹剧",
      "CIA",
      "无厘头"
    ],
    "desc": "外星人罗杰的变装身份暴露，导致整个小镇开始模仿他的多重人格，陷入一场身份认知大混乱。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "兔子和公牛",
    "file": "movie-626.html",
    "cover": "./26.jpg",
    "year": "2009",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧/冒险",
    "tags": [
      "公路电影",
      "荒诞",
      "小清新邪典"
    ],
    "desc": "一个洁癖宅男被迫和他死去的室友的“灵魂”一起徒步穿越苏格兰高地，去找一只兔子。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "布拉姆斯托克的德古拉",
    "file": "movie-627.html",
    "cover": "./27.jpg",
    "year": "1992",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 爱情, 哥特",
    "tags": [
      "吸血鬼",
      "古典文学改编",
      "哥特美学",
      "悲剧爱情"
    ],
    "desc": "这不是一个怪物故事，而是一个四百年前失去了信仰的骑士，为了爱情背叛上帝的故事。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "世界再见",
    "file": "movie-628.html",
    "cover": "./28.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻， 剧情， 冒险",
    "tags": [
      "末日",
      "倒数",
      "遗愿清单",
      "公路片",
      "存在主义"
    ],
    "desc": "一颗陨石将在三周后毁灭地球，一个患绝症的老人和一个叛逆少女决定跨越大半个美国，去完成最疯狂的遗愿清单。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "勇闯雷霆峰",
    "file": "movie-629.html",
    "cover": "./29.jpg",
    "year": "1975",
    "region": "美国",
    "type": "电影",
    "genre": "冒险， 动作",
    "tags": [
      "登山",
      "间谍",
      "惊险",
      "实拍",
      "冷战"
    ],
    "desc": "中情局特工奉命登上阿尔卑斯最险峰“雷霆峰”，山顶不是军事基地，而是一扇门。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "老洞粤语",
    "file": "movie-630.html",
    "cover": "./30.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "剧集",
    "genre": "恐怖，悬疑，奇幻",
    "tags": [
      "诡异传说",
      "洞穴诅咒",
      "粤语原声"
    ],
    "desc": "深山村落后山的神秘老洞每六十年开启一次，这次走出的是一个会讲粤语的古代怨灵。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "海上密室谋杀案",
    "file": "movie-631.html",
    "cover": "./31.jpg",
    "year": "2019",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 惊悚",
    "tags": [
      "密室",
      "游轮",
      "暴风雪山庄",
      "本格推理",
      "反转"
    ],
    "desc": "豪华游轮跨年夜，亿万富翁在自己的密封舱室内被杀，舱内六人皆有完美不在场证明。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "枪械师",
    "file": "movie-632.html",
    "cover": "./32.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 剧情, 犯罪",
    "tags": [
      "硬汉",
      "复仇",
      "地下世界",
      "改装枪",
      "肉搏"
    ],
    "desc": "低调的枪械改装师被迫重出江湖，因为他发现杀害自己师傅的子弹，竟然出自自己的手笔。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "晚秋",
    "file": "movie-633.html",
    "cover": "./33.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": [
      "怀旧",
      "禁忌恋",
      "时代变迁",
      "命运"
    ],
    "desc": "八十年代的纺织女工与工厂技术员的一场深秋邂逅，却因一封迟来二十年的信，改变了三代人的命运。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "伙伴儿",
    "file": "movie-634.html",
    "cover": "./34.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 年代",
    "tags": [
      "北京胡同",
      "发小情谊",
      "改革开放",
      "中年危机"
    ],
    "desc": "四个从小在北京胡同长大的铁哥们，人到中年，有人暴富有人坐牢，还能像小时候一样吗？",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "零一年",
    "file": "movie-635.html",
    "cover": "./35.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻, 悬疑",
    "tags": [
      "时间跳跃",
      "记忆",
      "阴谋",
      "单元剧",
      "烧脑"
    ],
    "desc": "2001年9月10日，全世界有197人同时昏迷了一秒钟，醒来后他们发现自己能在时间线上跳跃，而其中一人将在24小时后劫持四架飞机。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "如果蜗牛有爱情",
    "file": "movie-636.html",
    "cover": "./36.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 悬疑",
    "tags": [
      "刑侦",
      "慢热",
      "职场",
      "反差萌"
    ],
    "desc": "当行动派刑警队长遇上慢吞吞的心理侧写师，一场关于耐心与信任的拉锯战开始了。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "悲伤逆流成河",
    "file": "movie-637.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "青春、剧情",
    "tags": [
      "校园霸凌",
      "少女成长",
      "绝症反转"
    ],
    "desc": "被全校霸凌的少女意外发现自己得了绝症，她决定用仅剩的三个月“以牙还牙”。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "日式厕所",
    "file": "movie-638.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "tags": [
      "治愈",
      "狭小空间",
      "都市传说"
    ],
    "desc": "每当他在办公楼最里面的厕所隔间蹲下，就能听到隔壁传来未来自己忠告的声音。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "暗黑宇宙",
    "file": "movie-639.html",
    "cover": "./39.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 悬疑 / 恐怖",
    "tags": [
      "太空歌剧",
      "克苏鲁",
      "心理恐怖"
    ],
    "desc": "深空科考船接收到一段来自宇宙深处的信号，随后船员开始看见自己最深的恐惧。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "探查医秘",
    "file": "movie-640.html",
    "cover": "./40.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "医疗、悬疑、惊悚",
    "tags": [
      "医院黑幕",
      "法医",
      "连环杀人",
      "器官贩卖"
    ],
    "desc": "一名天才外科医生因手术失败被降职到太平间，在那里他通过解剖尸体，发现了一连串指向医院高层的谋杀案。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "遮天",
    "file": "movie-641.html",
    "cover": "./41.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "玄幻, 冒险, 古装",
    "tags": [
      "九龙拉棺",
      "修仙",
      "太古神话",
      "宏大世界观"
    ],
    "desc": "九龙拉棺降临泰山，将叶凡与同学带入北斗星域，从此踏上征战太古万族的逆天之路。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "熊之吻",
    "file": "movie-642.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "奇幻 / 剧情",
    "tags": [
      "西伯利亚",
      "萨满",
      "熊灵",
      "环保",
      "成长"
    ],
    "desc": "西伯利亚驯鹿部落的最后一位萨满，临死前将熊灵之力传给十二岁的孙女，小女孩必须学会与熊对话，对抗石油公司的勘探队。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "彩虹飞仙",
    "file": "movie-643.html",
    "cover": "./43.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 仙侠 / 悬疑",
    "tags": [
      "女性修仙",
      "色彩法术",
      "师门内斗"
    ],
    "desc": "彩虹七色各代表一种修仙功法，但门规禁止修炼紫色仙术——因为修炼者会爱上敌人。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "星际旅行1：无限太空国语",
    "file": "movie-644.html",
    "cover": "./44.jpg",
    "year": "1979",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 冒险, 哲学",
    "tags": [
      "太空歌剧",
      "经典重启",
      "配音版"
    ],
    "desc": "一个神秘的外星能量云吞噬了星际联邦的多个空间站，而它的目的地，竟是三千年前人类发射的旅行者一号。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "当哈利遇上圣诞老人",
    "file": "movie-645.html",
    "cover": "./45.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情 / 奇幻",
    "tags": [
      "圣诞电影",
      "浪漫喜剧",
      "身份互换",
      "真香定律"
    ],
    "desc": "一个不信圣诞老人的毒舌商人，被死对头施了魔法，被迫在平安夜替圣诞老人上班。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "礼炮七号",
    "file": "movie-646.html",
    "cover": "./46.jpg",
    "year": "2017",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情, 历史, 灾难",
    "tags": [
      "太空救援",
      "冷战航天",
      "真实事件改编"
    ],
    "desc": "失控的礼炮七号空间站在黑暗的太空中翻滚，两名宇航员被派去完成一场“不可能”的手动对接。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "与父亲共度周末",
    "file": "movie-647.html",
    "cover": "./47.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "家庭 / 剧情",
    "tags": [
      "亲情",
      "和解",
      "临终",
      "日常"
    ],
    "desc": "每个周末，儿子开车三小时去看痴呆父亲，父亲每次都会问他：“你是谁？”",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "波吉亚家族第一季",
    "file": "movie-648.html",
    "cover": "./48.jpg",
    "year": "2011",
    "region": "美国 / 加拿大",
    "type": "剧集",
    "genre": "历史, 剧情, 犯罪",
    "tags": [
      "文艺复兴",
      "教廷",
      "权谋",
      "乱伦",
      "暴力"
    ],
    "desc": "教皇亚历山大六世，用毒药、金钱和亲女儿的身体，统一了分裂的意大利。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "基宝",
    "file": "movie-649.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻 / 悬疑",
    "tags": [
      "AI育儿",
      "情感机器人",
      "伦理困境"
    ],
    "desc": "七岁男孩失去了母亲，父亲送给他一个AI机器人“基宝”当玩伴，却发现基宝正在模仿甚至取代死去的母亲。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "恋上老大姐",
    "file": "movie-650.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 爱情 / 都市",
    "tags": [
      "姐弟恋",
      "职场",
      "年下奶狗",
      "反套路",
      "轻喜"
    ],
    "desc": "24岁实习男模倒追35岁离婚女总监，却被女总监当成来公司窃取商业机密的商业间谍。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "双城喜事",
    "file": "movie-651.html",
    "cover": "./51.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情， 喜剧， 都市",
    "tags": [
      "异地恋",
      "双城生活",
      "甜宠",
      "高铁"
    ],
    "desc": "一对情侣分别在北京和上海上班，为了见面，他们把高铁当婚车，上演中国式异地恋的极限拉扯。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "恐高症国语",
    "file": "movie-652.html",
    "cover": "./52.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 心理",
    "tags": [
      "心理恐惧",
      "高层建筑",
      "目击证人",
      "城市化焦虑"
    ],
    "desc": "患有严重恐高症的男人，住在45楼，某夜他目睹对面大楼发生了一起完美谋杀。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "心动1986",
    "file": "movie-653.html",
    "cover": "./53.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 怀旧",
    "tags": [
      "复古",
      "校园",
      "卡带",
      "初恋"
    ],
    "desc": "一卷被尘封30年的录音带被发现，揭开了一段1986年的夏日暗恋。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "101岁老人跷家去",
    "file": "movie-654.html",
    "cover": "./54.jpg",
    "year": "2014",
    "region": "瑞典",
    "type": "电影",
    "genre": "喜剧, 冒险",
    "tags": [
      "老年主角",
      "公路片",
      "反差萌",
      "北欧幽默",
      "看透人生"
    ],
    "desc": "101岁的炸弹专家厌倦养老院，翻窗逃走并意外卷入黑帮千万现金争夺战。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "法网追凶第二季",
    "file": "movie-655.html",
    "cover": "./55.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑，犯罪，刑侦",
    "tags": [
      "本格推理",
      "师徒双雄",
      "全员恶人",
      "高智商犯罪",
      "社会议题"
    ],
    "desc": "第一季的连环杀人案只是冰山一角，一个代号“盲僧”的神秘黑客浮出水面，他将全市的罪犯组织成了一个“复仇者联盟”。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "芯觉",
    "file": "movie-656.html",
    "cover": "./56.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻 / 悬疑",
    "tags": [
      "赛博朋克",
      "意识上传",
      "芯片",
      "反乌托邦",
      "硬科幻"
    ],
    "desc": "他发现意识上传芯片有“保质期”，过期后人体会被芯片反向活体回收。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "九月的一天",
    "file": "movie-657.html",
    "cover": "./57.jpg",
    "year": "2026",
    "region": "法国 / 德国",
    "type": "电影",
    "genre": "剧情, 历史, 悬疑",
    "tags": [
      "公路电影",
      "东德",
      "逃亡",
      "真相追查",
      "慢节奏"
    ],
    "desc": "柏林墙倒塌前一个月，一个女人匿名收到一张照片：她失踪20年的丈夫，穿着西德警服站在一辆烧毁的车前。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "梦想的日子",
    "file": "movie-658.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "歌舞 / 励志",
    "tags": [
      "贫民窟",
      "舞蹈",
      "阶级跨越",
      "宝莱坞"
    ],
    "desc": "孟买贫民窟的四名拾荒少年组建了一支街舞团，目标是闯入全印度舞蹈大赛，赢取改变命运的奖金。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "谋杀犯",
    "file": "movie-659.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 心理",
    "tags": [
      "法律剧",
      "反套路",
      "翻案",
      "灰色正义",
      "高智商"
    ],
    "desc": "一个专门为“已定罪杀人犯”翻案的律师，在帮助一个连环杀手脱罪后，发现自己才是真正的下一个目标。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "贫乏神来了！",
    "file": "movie-660.html",
    "cover": "./60.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧, 奇幻, 动画",
    "tags": [
      "神明",
      "贫穷",
      "反差萌",
      "日常",
      "搞笑"
    ],
    "desc": "运气爆棚的白富美被穷神附体，一夜之间霉运连连，连泡面都没调料包。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "良辰美景又逢君",
    "file": "movie-661.html",
    "cover": "./61.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装 / 奇幻 / 爱情",
    "tags": [
      "穿越",
      "太子妃",
      "逆袭",
      "宫斗"
    ],
    "desc": "社畜白领穿成即将被赐死的废太子妃，她靠现代经济学硬生生把冷宫搞成了商超。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "暴怒",
    "file": "movie-662.html",
    "cover": "./62.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作、惊悚、心理",
    "tags": [
      "路怒",
      "复仇",
      "困局",
      "反转"
    ],
    "desc": "一名心理咨询师在高速上对一辆别车的皮卡竖了中指，随后发现自己和家人被这名神秘的皮卡司机锁定，陷入了无尽的猫鼠游戏。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "无名故事",
    "file": "movie-663.html",
    "cover": "./63.jpg",
    "year": "2020",
    "region": "意大利",
    "type": "电影",
    "genre": "悬疑 / 传记",
    "tags": [
      "作家",
      "代笔",
      "身份互换",
      "谋杀"
    ],
    "desc": "落魄作家为神秘富豪代笔写自传，却发现书中那些“虚构”的罪行，正在现实中逐一发生。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "宅男慢半拍",
    "file": "movie-664.html",
    "cover": "./64.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧，剧情",
    "tags": [
      "社恐",
      "延迟反应",
      "外卖员",
      "自闭症"
    ],
    "desc": "患有罕见“延迟共情障碍”的宅男成为外卖员，每次接单后24小时才会对顾客情绪产生反应。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "方言剧",
    "file": "movie-665.html",
    "cover": "./65.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 喜剧, 悬疑",
    "tags": [
      "戏中戏",
      "方言文化",
      "剧团往事",
      "谋杀案"
    ],
    "desc": "一个濒临倒闭的方言剧团，在排练改编自本地奇案的剧目时，竟引发了现实中的连环杀人。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "遇见女孩的感觉",
    "file": "movie-666.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": [
      "跨性别",
      "青春",
      "双向暗恋"
    ],
    "desc": "一直暗恋校草的跨性别男孩，在变装皇后比赛中发现自己的对手竟是校草本人。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "魔城回忆录",
    "file": "movie-667.html",
    "cover": "./67.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "剧集",
    "genre": "奇幻/悬疑",
    "tags": [
      "记忆删除",
      "迷宫",
      "阴谋",
      "自我追寻"
    ],
    "desc": "一座可以删除特定记忆的城市，居民每年删除一次痛苦往事，却出现一个无法被删除的女孩。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "服从2018",
    "file": "movie-668.html",
    "cover": "./68.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚， 剧情",
    "tags": [
      "社会实验",
      "人性之恶",
      "单一场景"
    ],
    "desc": "一个电话自称是警察，让超市经理对一个无辜店员进行脱衣检查，而所有人都照做了。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "山田茂",
    "file": "movie-669.html",
    "cover": "./69.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "家庭剧情",
    "tags": [
      "战后",
      "小人物",
      "日常",
      "是枝裕和风"
    ],
    "desc": "1955年东京，普通上班族山田茂的日记被女儿发现，里面记录的尽是“今天什么都没发生”。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "万里征途",
    "file": "movie-670.html",
    "cover": "./70.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情， 历史， 战争",
    "tags": [
      "长征",
      "小人物",
      "信仰",
      "铁血柔情",
      "史诗"
    ],
    "desc": "湘江血战后，一个被吓破胆的逃兵，却成了全师唯一的希望。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "进入森林",
    "file": "movie-671.html",
    "cover": "./71.jpg",
    "year": "2015",
    "region": "加拿大",
    "type": "电影",
    "genre": "剧情，科幻，惊悚",
    "tags": [
      "末世",
      "姐妹",
      "独居",
      "心理",
      "生存"
    ],
    "desc": "一对姐妹在断电的森林小屋中等待末日过去，但真正的威胁来自彼此。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "我的街区",
    "file": "movie-672.html",
    "cover": "./72.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧, 剧情, 青春",
    "tags": [
      "街头文化",
      "少数族裔",
      "成长烦恼",
      "邻里关系"
    ],
    "desc": "在洛杉矶一个治安混乱的街区，四个拉丁裔高中生用幽默和友谊抵御现实的残酷。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "爱我就陪我看电影",
    "file": "movie-673.html",
    "cover": "./73.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "tags": [
      "情侣",
      "电影院",
      "约会喜剧",
      "都市情感"
    ],
    "desc": "一位毒舌影院经理发现，每对在他面前秀恩爱的情侣，都会在散场后神秘分手。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "猫咪马汀",
    "file": "movie-674.html",
    "cover": "./74.jpg",
    "year": "2021",
    "region": "英国",
    "type": "电影",
    "genre": "奇幻, 家庭, 冒险",
    "tags": [
      "变身",
      "猫咪视角",
      "治愈",
      "解谜"
    ],
    "desc": "社恐程序员一觉醒来变成了一只橘猫，只有找回主人的微笑才能变回人形。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "新东京水上警察",
    "file": "movie-675.html",
    "cover": "./75.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻, 犯罪, 动作",
    "tags": [
      "近未来",
      "水城",
      "警匪",
      "赛博朋克"
    ],
    "desc": "海平面上升后的东京成了水城，水上警察既要抓罪犯，还要抓自己人偷排的废料。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "太阳帝国",
    "file": "movie-676.html",
    "cover": "./76.jpg",
    "year": "1987",
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "战争 / 剧情 / 历史",
    "tags": [
      "二战",
      "集中营",
      "少年视角",
      "斯皮尔伯格"
    ],
    "desc": "一个英国富家男孩在上海沦陷后沦为战俘，却在残酷中迷恋上了飞行与太阳。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "火龙行动",
    "file": "movie-677.html",
    "cover": "./77.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "tags": [
      "警匪",
      "卧底",
      "爆炸",
      "兄弟情"
    ],
    "desc": "卧底警员在即将收网时发现自己被组织抛弃，而黑帮老大竟是多年前失踪的亲生父亲。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "君农",
    "file": "movie-678.html",
    "cover": "./78.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史 / 古装",
    "tags": [
      "农业史诗",
      "君王与农",
      "变法",
      "土地改革"
    ],
    "desc": "春秋时期，一个“不务正业”的君王脱掉王袍，亲自下田种地，试图用农业拯救亡国。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "敬！莎莉",
    "file": "movie-679.html",
    "cover": "./79.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 同性 / 女性",
    "tags": [
      "单口喜剧",
      "母女和解",
      "年代跨越",
      "未竟梦想"
    ],
    "desc": "女儿在整理遗物时，发现保守的妈妈年轻时竟是地下女同性恋酒吧的台柱子。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "财色惊魂",
    "file": "movie-680.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 情色",
    "tags": [
      "豪门",
      "谋杀",
      "骗保",
      "黑色电影",
      "反转"
    ],
    "desc": "豪门独子离奇溺亡，美艳妻子、残疾弟弟、忠心管家，每个人都想要那笔天价保险金。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "加德满都，天空之镜",
    "file": "movie-681.html",
    "cover": "./81.jpg",
    "year": "2025",
    "region": "尼泊尔/中国大陆",
    "type": "电影",
    "genre": "剧情， 冒险， 文艺",
    "tags": [
      "朝圣",
      "心灵之旅",
      "异国风情",
      "治愈",
      "寻找自我"
    ],
    "desc": "一个失去了信仰的摄影师和一个患了绝症的退休喇嘛，结伴从加德满都出发，去寻找传说中能倒映出“来世”的天空之镜。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "大滚友",
    "file": "movie-682.html",
    "cover": "./82.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧，青春，校园",
    "tags": [
      "校园",
      "古惑仔",
      "友情",
      "搞笑",
      "香港"
    ],
    "desc": "四个被学校开除的“问题学生”合伙开了一间帮人“摆平麻烦”的地下工作室，成了校内的神秘传说。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "超能疯人院",
    "file": "movie-683.html",
    "cover": "./83.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 科幻",
    "tags": [
      "精神病院",
      "超能力",
      "搞笑"
    ],
    "desc": "一家精神病院里收治的病人全都有超能力，但他们自己不相信，医生也不相信。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "追忆似水年华",
    "file": "movie-684.html",
    "cover": "./84.jpg",
    "year": "2024",
    "region": "法国",
    "type": "剧集",
    "genre": "文艺爱情",
    "tags": [
      "记忆",
      "意识流",
      "文学改编",
      "时光倒流",
      "情感纠葛"
    ],
    "desc": "垂暮的作家吃下玛德琳蛋糕，记忆闸门打开，他游走于逝去的爱情与时光中，试图改写最后一页遗憾。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "暗处的女儿",
    "file": "movie-685.html",
    "cover": "./85.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "母爱",
      "愧疚",
      "女性",
      "成长"
    ],
    "desc": "一位事业有成的中年教授在海边度假时，被一对年轻母女触动，被迫面对自己曾经“逃离”母亲的往事。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "有机体复活实验",
    "file": "movie-686.html",
    "cover": "./86.jpg",
    "year": "2027",
    "region": "德国 / 奥地利",
    "type": "电影",
    "genre": "科幻 / 惊悚 / 悬疑",
    "tags": [
      "赛博朋克",
      "人体改造",
      "意识上传",
      "伦理恐惧"
    ],
    "desc": "科学家成功将已故爱人的意识上传至人造有机体，复活后的“它”却开始猎杀实验成员。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "五个恶魔",
    "file": "movie-687.html",
    "cover": "./87.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "奇幻, 剧情",
    "tags": [
      "气味",
      "记忆",
      "怪兽",
      "儿童"
    ],
    "desc": "一个能通过气味追溯任何人记忆的怪异小女孩，意外召唤出了母亲心中悲伤所化的五个恶魔。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "星战毁灭者",
    "file": "movie-688.html",
    "cover": "./88.jpg",
    "year": "1996",
    "region": "美国",
    "type": "电影",
    "genre": "科幻动作",
    "tags": [
      "外星入侵",
      "火星人",
      "复古科幻",
      "暴力美学",
      "黑色幽默"
    ],
    "desc": "火星人带着无法阻挡的死光炮降临地球，人类最后希望竟藏在一堆老掉牙的 50 年代摇滚乐里。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "少女的塞勒姆",
    "file": "movie-689.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 历史",
    "tags": [
      "女巫",
      "小镇",
      "谎言之网",
      "1692",
      "少女"
    ],
    "desc": "1692年塞勒姆女巫审判的真凶不是撒旦，而是一个手无缚鸡之力的少女的谎言。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "爱因斯坦与原子弹",
    "file": "movie-690.html",
    "cover": "./90.jpg",
    "year": "2024",
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "剧情 / 传记 / 历史",
    "tags": [
      "爱因斯坦",
      "原子弹",
      "道德困境",
      "二战",
      "奥本海默"
    ],
    "desc": "爱因斯坦得知广岛核爆后，陷入无尽自责：是他写给罗斯福的信，打开了潘多拉魔盒。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "你房里有人",
    "file": "movie-691.html",
    "cover": "./91.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "tags": [
      "面具杀手",
      "校园霸凌",
      "连环杀人"
    ],
    "desc": "私立高中学生接连失踪，每个人都收到写着“你房里有人”的匿名短信，凶手就在社团内部。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "盲人枪手",
    "file": "movie-692.html",
    "cover": "./92.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 惊悚",
    "tags": [
      "盲人",
      "枪战",
      "复仇",
      "听觉"
    ],
    "desc": "一位失明的海军陆战队狙击手，靠听声辨位和一把改装枪，在边境小镇独自对抗一个贩毒集团。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "梅府有女初长成",
    "file": "movie-693.html",
    "cover": "./93.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装, 喜剧, 宅斗",
    "tags": [
      "大小姐",
      "商战",
      "扮猪吃虎"
    ],
    "desc": "京城首富梅家唯一的傻小姐其实是商业奇才，她装疯卖傻三年，只为找出杀害父亲的元凶。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "恐龙物语: 回到未来",
    "file": "movie-694.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "科幻 / 动画 / 冒险",
    "tags": [
      "恐龙",
      "时空穿越",
      "亲情",
      "高概念"
    ],
    "desc": "为了拯救死于陨石撞击的恐龙妈妈，一只小三角龙跳进时空漩涡，来到了人类时代。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "大撒把",
    "file": "movie-695.html",
    "cover": "./95.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 喜剧",
    "tags": [
      "养老",
      "代际冲突",
      "丁克",
      "社会话题"
    ],
    "desc": "一对90后丁克夫妇，把四位老人的养老问题“大撒把”甩给AI，结果AI给出了一个所有人都没想到的解决方案。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "温泉",
    "file": "movie-696.html",
    "cover": "./96.jpg",
    "year": "2018",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": [
      "家族经营",
      "治愈",
      "消失的故乡"
    ],
    "desc": "老式温泉旅馆只剩一个固执的老板，和一个被裁员后逃回来的儿子。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "青楼红杏",
    "file": "movie-697.html",
    "cover": "./97.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/情色",
    "tags": [
      "民国",
      "女性",
      "恩怨"
    ],
    "desc": "民国花魁为报恩嫁入豪门，却发现恩人正是当年毁她清白的仇家之子。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "我最好的朋友死了",
    "file": "movie-698.html",
    "cover": "./98.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑/青春",
    "tags": [
      "复仇",
      "校园暴力",
      "反转",
      "暗黑"
    ],
    "desc": "懦弱的高中生追查好友“自杀”真相，却发现所有人都参与了那场“意外”，包括他自己。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "诡异入侵",
    "file": "movie-699.html",
    "cover": "./99.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 恐怖",
    "tags": [
      "外星",
      "心理恐惧",
      "密闭空间",
      "失忆",
      "反转"
    ],
    "desc": "一个南极科考站遭到不明生物入侵，队员们开始互相残杀，但没有人记得是谁先动的手。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "凤侣嬉春",
    "file": "movie-700.html",
    "cover": "./100.jpg",
    "year": "1994",
    "region": "中国香港",
    "type": "电影",
    "genre": "情色/喜剧",
    "tags": [
      "风月片",
      "古装喜剧",
      "误会连连",
      "偷情"
    ],
    "desc": "为了气回未婚夫，千金大小姐假扮成青楼头牌，没想到未婚夫竟带着好兄弟一起来“捉奸”。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "楼层游戏",
    "file": "movie-701.html",
    "cover": "./101.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "恐怖 / 惊悚 / 悬疑",
    "tags": [
      "高能反转",
      "公寓",
      "规则怪谈",
      "都市恐怖",
      "直播"
    ],
    "desc": "网红主播为了流量进入禁止靠近的“消失之层”探险，却发现整栋楼的居民都在配合她玩一场杀人游戏。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "巨头",
    "file": "movie-702.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "美国 / 德国",
    "type": "剧集",
    "genre": "剧情, 商战, 传记",
    "tags": [
      "科技巨头",
      "垄断",
      "道德拷问",
      "三线叙事"
    ],
    "desc": "三条时间线交织：一个程序员1998年写出第一个搜索算法、2010年成为独裁者、2030年面临反垄断肢解，但他只想找回当年那个写代码的自己。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "血战西盘岛",
    "file": "movie-703.html",
    "cover": "./103.jpg",
    "year": "2013",
    "region": "波兰",
    "type": "电影",
    "genre": "战争 / 历史 / 动作",
    "tags": [
      "二战",
      "波兰",
      "阵地战",
      "抵抗",
      "惨烈"
    ],
    "desc": "二战爆发第一枪，波兰西盘岛上一支两百人的小部队，硬抗了德军两千人七天七夜。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "幸福门",
    "file": "movie-704.html",
    "cover": "./104.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市， 家庭",
    "tags": [
      "学区房",
      "中年危机",
      "三代同堂",
      "买房",
      "亲情"
    ],
    "desc": "为了儿子能进名校，一大家子挤进一间“凶宅”学区房，门里门外全是谎言。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "满清禁宫奇案",
    "file": "movie-705.html",
    "cover": "./105.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑、古装、惊悚",
    "tags": [
      "宫廷",
      "密室杀人",
      "权谋",
      "历史改编"
    ],
    "desc": "紫禁城九重深宫，一夜之间七条人命，凶手是人是鬼？负责查案的侍卫发现，所有线索都指向了一本不存在的起居注。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "伦敦父女档",
    "file": "movie-706.html",
    "cover": "./106.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "亲情",
      "父女",
      "移民",
      "催泪"
    ],
    "desc": "伦敦出租车司机为了女儿假装会说英语，却阴差阳错成了大明星。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "原野游龙",
    "file": "movie-707.html",
    "cover": "./107.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠, 动作, 西部",
    "tags": [
      "荒漠",
      "复仇",
      "镖师",
      "女性"
    ],
    "desc": "民国西北荒漠，最后一个女镖师为护送一件神秘镖物，与残暴的军阀和土匪展开了一场沙漠游击战。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "无法治愈",
    "file": "movie-708.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑、惊悚、医疗",
    "tags": [
      "医疗事故",
      "复仇",
      "伦理",
      "反转"
    ],
    "desc": "一名天才外科医生被神秘组织绑架，要求他治好一具已经死亡三天的尸体，否则就杀死他的家人。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "超时空接触",
    "file": "movie-709.html",
    "cover": "./109.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻、悬疑、剧情",
    "tags": [
      "量子纠缠",
      "平行宇宙",
      "父女情",
      "硬科幻"
    ],
    "desc": "一名女物理学家收到来自平行宇宙的信号，对方是她已故的父亲，但父亲说：“不要回应我，你们会毁掉我们。”",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "爱的幸宠",
    "file": "movie-710.html",
    "cover": "./110.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情，奇幻，剧情",
    "tags": [
      "幸运",
      "契约",
      "治愈",
      "反转",
      "命中注定"
    ],
    "desc": "霉运缠身的女孩意外获得“幸运转移”能力，却发现自己成了爱情的祭品。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "真味小厨王",
    "file": "movie-711.html",
    "cover": "./111.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧 / 家庭 / 美食",
    "tags": [
      "功夫厨艺",
      "亲情和解",
      "街头小吃"
    ],
    "desc": "街头炒饭大叔被米其林餐厅踢馆，女儿的一碗方便面却让所有厨神沉默。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "娘子谷大屠杀（纪录片）",
    "file": "movie-712.html",
    "cover": "./112.jpg",
    "year": "2025",
    "region": "乌克兰 / 德国",
    "type": "纪录片",
    "genre": "历史",
    "tags": [
      "大屠杀",
      "娘子谷",
      "二战"
    ],
    "desc": "1941年，基辅娘子谷，两天内33771名犹太人被射杀。这部纪录片找到了最后一个活着的见证者。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "后备箱里的女孩",
    "file": "movie-713.html",
    "cover": "./113.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "tags": [
      "密室",
      "心理惊悚",
      "反转"
    ],
    "desc": "一具尸体从后备箱滚落，她却发现自己才是那个被追踪的猎物。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "猫贼",
    "file": "movie-714.html",
    "cover": "./114.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧 / 犯罪",
    "tags": [
      "猫",
      "怪盗",
      "治愈",
      "萌宠",
      "反转"
    ],
    "desc": "世界上最顶尖的怪盗，竟然是一只穿着燕尾服的英国短毛猫。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "二分之一女儿",
    "file": "movie-715.html",
    "cover": "./115.jpg",
    "year": "2022",
    "region": "台湾地区",
    "type": "剧集",
    "genre": "家庭，剧情",
    "tags": [
      "亲子",
      "身份认同",
      "秘密",
      "和解"
    ],
    "desc": "十七岁的女孩发现，与自己生活了十五年的妈妈，其实只是妈妈的孪生姐姐。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "省港旗兵",
    "file": "movie-716.html",
    "cover": "./116.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "tags": [
      "悍匪",
      "警匪对峙",
      "时代变迁"
    ],
    "desc": "新一代“省港旗兵”不再为钱，他们通过暗网接单，在香港闹市区策划“直播斩首”式恐袭。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "新碧血剑",
    "file": "movie-717.html",
    "cover": "./117.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "武侠 / 动作",
    "tags": [
      "江湖",
      "恩仇",
      "重铸",
      "侠义"
    ],
    "desc": "金蛇郎君的后人重出江湖，却发现碧血剑的传说是一场延续百年的骗局。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "鲁斯丁",
    "file": "movie-718.html",
    "cover": "./118.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "传记 / 剧情",
    "tags": [
      "平权运动",
      "演讲家",
      "被遗忘的历史",
      "组织者"
    ],
    "desc": "1963年华盛顿大游行的幕后总策划是公开的同性恋者鲁斯丁，但历史教科书差点删掉了他的名字。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "摇滚小子",
    "file": "movie-719.html",
    "cover": "./119.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "音乐 / 家庭",
    "tags": [
      "儿童",
      "摇滚",
      "父子",
      "梦想"
    ],
    "desc": "六岁自闭症男孩拿起电吉他就能精准复制任何摇滚乐，但他的父亲只想让他弹《小星星》。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "攀爬马特宏峰",
    "file": "movie-720.html",
    "cover": "./120.jpg",
    "year": "2023",
    "region": "瑞士",
    "type": "纪录片",
    "genre": "纪录, 冒险, 运动",
    "tags": [
      "极限运动",
      "登山",
      "无保护",
      "真实"
    ],
    "desc": "无保护攀岩者挑战欧洲最危险的山峰，每一步都是生死抉择。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "生化危机：终章",
    "file": "movie-721.html",
    "cover": "./121.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 恐怖",
    "tags": [
      "丧尸",
      "末日",
      "女战士",
      "解谜",
      "系列终结"
    ],
    "desc": "爱丽丝回到一切噩梦的起点——浣熊市地下蜂巢，与红后展开最后的生死对决。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "火焰和柠檬",
    "file": "movie-722.html",
    "cover": "./122.jpg",
    "year": "2008",
    "region": "丹麦",
    "type": "电影",
    "genre": "战争 / 惊悚",
    "tags": [
      "二战",
      "抵抗运动",
      "暗杀",
      "真实改编",
      "间谍"
    ],
    "desc": "二战丹麦抵抗组织代号“火焰”和“柠檬”的两名杀手，在盖世太保的围剿下执行终极任务。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "费里布朗",
    "file": "movie-723.html",
    "cover": "./123.jpg",
    "year": "2024",
    "region": "法国 / 意大利",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "tags": [
      "超现实",
      "精神分析",
      "艺术电影",
      "独角戏"
    ],
    "desc": "精神分析师在梦境中破案，每次醒来都会丢失一部分现实记忆，直到分不清自己是谁。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "善心满载仁爱堂2023",
    "file": "movie-724.html",
    "cover": "./124.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "综艺",
    "genre": "公益, 真人秀",
    "tags": [
      "慈善",
      "TVB",
      "筹款",
      "明星体验"
    ],
    "desc": "香港群星深入基层，挑战极限职业，只为给仁爱堂筹集善款，过程笑料与泪水齐飞。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "吓死油土伯",
    "file": "movie-725.html",
    "cover": "./125.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 喜剧",
    "tags": [
      "网红",
      "直播",
      "鬼屋",
      "伪纪录片",
      "反转"
    ],
    "desc": "五个作死网红闯进废弃疯人院直播，却发现鬼魂正在反向直播他们的死亡。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "林中野兽",
    "file": "movie-726.html",
    "cover": "./126.jpg",
    "year": "2020",
    "region": "加拿大",
    "type": "电影",
    "genre": "恐怖, 悬疑, 剧情",
    "tags": [
      "森林",
      "怪物",
      "心理恐惧"
    ],
    "desc": "护林员在原始森林遭遇无法解释的恐怖现象，他怀疑那只野兽，就藏在自己的记忆里。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "剩女小爱",
    "file": "movie-727.html",
    "cover": "./127.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 喜剧 / 剧情",
    "tags": [
      "大龄单身",
      "相亲",
      "自我和解",
      "港女",
      "温情"
    ],
    "desc": "34岁的“剩女”小爱决定冷冻卵子，却被告知卵子数量太少，她得在三个月内找到“能笑着分手”的恋爱对象。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "捉迷藏2005",
    "file": "movie-728.html",
    "cover": "./128.jpg",
    "year": "2020",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚、悬疑",
    "tags": [
      "密室",
      "童年创伤",
      "反转",
      "心理博弈"
    ],
    "desc": "一栋废弃公寓里，六个人玩了一场“谁最后一个被找到就能赢一亿”的捉迷藏，却发现自己不是唯一的玩家。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "山海巨兽",
    "file": "movie-729.html",
    "cover": "./129.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 奇幻, 冒险",
    "tags": [
      "《山海经》",
      "怪兽",
      "生态保护",
      "古代机关"
    ],
    "desc": "现代工程队在青藏铁路施工时，意外凿穿了封印《山海经》巨兽的结界，只有一位能听懂兽语的聋哑牧羊女，才能阻止它们踏入人类城市。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "情越双白线粤语",
    "file": "movie-730.html",
    "cover": "./130.jpg",
    "year": "2010",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情爱情",
    "tags": [
      "港剧",
      "货车司机",
      "禁忌之恋",
      "粤语"
    ],
    "desc": "货车司机与继女之间的感情，在双白线上不能逾越，却早已越过。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "如同第一杯",
    "file": "movie-731.html",
    "cover": "./131.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "亲情",
      "酗酒",
      "和解",
      "小镇",
      "治愈"
    ],
    "desc": "为了唤醒因酗酒昏迷的父亲，叛逆的女儿决定每天为他喝一杯不同的酒。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "便条",
    "file": "movie-732.html",
    "cover": "./132.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑， 剧情， 犯罪",
    "tags": [
      "短篇故事集",
      "连环杀手",
      "都市传说",
      "反转"
    ],
    "desc": "一家旧书店的老板发现，每张旧书便条上都写着对“那个人”的诅咒，而这些人都真的死了。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "凯茜回家",
    "file": "movie-733.html",
    "cover": "./133.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "凶宅",
      "家庭录像",
      "邪教",
      "返乡",
      "伪纪录片"
    ],
    "desc": "失踪十年的凯茜突然回到家乡，可她带回的不仅有童年录像，还有一个古老的诅咒。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "我的朋友很少",
    "file": "movie-734.html",
    "cover": "./134.jpg",
    "year": "2021",
    "region": "日本",
    "type": "剧集",
    "genre": "青春、校园、社交",
    "tags": [
      "社交恐惧",
      "社恐",
      "友情",
      "治愈"
    ],
    "desc": "全校最孤独的男生收到一封匿名信，信上只有一句话：“我也一个朋友都没有。”",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "童一个世界",
    "file": "movie-735.html",
    "cover": "./135.jpg",
    "year": "2021",
    "region": "比利时",
    "type": "电影",
    "genre": "剧情, 儿童",
    "tags": [
      "校园霸凌",
      "儿童视角",
      "写实",
      "社会议题"
    ],
    "desc": "七岁的诺拉进入小学，她发现哥哥亚伯的世界里，有一套她无法理解的残酷法则。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "鲁邦三世：1美元战争",
    "file": "movie-736.html",
    "cover": "./136.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "动作/喜剧/犯罪",
    "tags": [
      "鲁邦",
      "盗贼",
      "竞拍",
      "1美元",
      "峰不二子"
    ],
    "desc": "鲁邦三世宣布用1美元拍卖全世界富豪的脏钱，引发全球黑帮大乱斗。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "海苔亿万富翁",
    "file": "movie-737.html",
    "cover": "./137.jpg",
    "year": "2012",
    "region": "泰国",
    "type": "电影",
    "genre": "剧情，传记",
    "tags": [
      "创业",
      "真实改编",
      "小老板",
      "海苔"
    ],
    "desc": "一个高中退学的男孩，从卖海苔起家，28岁成为亿万富翁的真实故事。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "青春雷锋",
    "file": "movie-738.html",
    "cover": "./138.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "青春传记",
    "tags": [
      "雷锋",
      "知青岁月",
      "理想主义"
    ],
    "desc": "1958年的鞍钢，19岁的雷正兴刚刚改名雷锋，他最大的烦恼不是苦，而是写的诗被工友嘲笑“假大空”。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "安娜与国王",
    "file": "movie-739.html",
    "cover": "./139.jpg",
    "year": "1999",
    "region": "英国 / 美国",
    "type": "电影",
    "genre": "剧情，历史，爱情",
    "tags": [
      "暹罗",
      "家庭教师",
      "君主制",
      "文化冲突",
      "克制之爱"
    ],
    "desc": "英国寡妇安娜受聘教暹罗国王的几十个孩子，她教会孩子们自由，孩子们教会她妥协。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "极限挑战 第九季",
    "file": "movie-740.html",
    "cover": "./140.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀 / 喜剧",
    "tags": [
      "户外竞技",
      "搞笑",
      "男人帮",
      "社会实验"
    ],
    "desc": "六位“老油条”与飞行嘉宾，在一场场荒谬的规则中，挑战智商、体能与极限脸皮。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "新闻线索",
    "file": "movie-741.html",
    "cover": "./141.jpg",
    "year": "2026",
    "region": "中国内地",
    "type": "剧集",
    "genre": "行业悬疑",
    "tags": [
      "调查记者",
      "暗访",
      "媒体黑幕",
      "真相博弈"
    ],
    "desc": "一位实习记者发现每条爆炸新闻背后都藏着同一家公关公司的编号，包括他自己被录取那天的“偶遇”。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "迷糊餐厅第三季",
    "file": "movie-742.html",
    "cover": "./142.jpg",
    "year": "2015",
    "region": "日本",
    "type": "动画",
    "genre": "喜剧 / 日常 / 恋爱",
    "tags": [
      "职场",
      "搞笑",
      "漫改",
      "温馨",
      "群像剧"
    ],
    "desc": "北海道一家家庭餐厅里，一群怪胎员工继续上演着鸡飞狗跳、甜度超标的爆笑日常。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "辛巴达七航妖岛",
    "file": "movie-743.html",
    "cover": "./143.jpg",
    "year": "2027",
    "region": "美国 / 卡塔尔",
    "type": "电影",
    "genre": "奇幻 / 冒险 / 动作",
    "tags": [
      "航海",
      "怪物",
      "诅咒",
      "史诗"
    ],
    "desc": "传奇水手辛巴达的第七次航行，他不再是英雄，而是被囚禁在妖岛上的祭品，必须用谎言换取生存。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "邪恶力量第四季",
    "file": "movie-744.html",
    "cover": "./144.jpg",
    "year": "2008",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑， 奇幻， 恐怖",
    "tags": [
      "温家双煞",
      "天使降临",
      "兄弟虐心",
      "天启"
    ],
    "desc": "地狱之门开启，天使降临人间，温家兄弟发现自己正身处一场关乎世界末日的神魔棋局之中。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "传世宝藏",
    "file": "movie-745.html",
    "cover": "./145.jpg",
    "year": "2026",
    "region": "中国",
    "type": "电影",
    "genre": "冒险, 动作",
    "tags": [
      "寻宝",
      "民国",
      "家族秘史",
      "机关术"
    ],
    "desc": "一张从古井里捞出的羊皮地图，牵出三个家族延续百年的生死博弈。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "少年班",
    "file": "movie-746.html",
    "cover": "./146.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 校园",
    "tags": [
      "天才",
      "早培",
      "集体生活"
    ],
    "desc": "十位来自全国的天才少年被选入顶级大学少年班，第一堂课是“学会失败”。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "黑色树海",
    "file": "movie-747.html",
    "cover": "./147.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "犯罪剧情",
    "tags": [
      "冤案",
      "记者调查",
      "家族秘密",
      "人性深渊"
    ],
    "desc": "女记者调查一桩尘封十五年的失踪案，发现所有线索都指向家乡那片被烧焦的黑色树林。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "阿黛服装",
    "file": "movie-748.html",
    "cover": "./148.jpg",
    "year": "2018",
    "region": "法国",
    "type": "剧集",
    "genre": "剧情",
    "tags": [
      "时尚",
      "职场",
      "女性",
      "创业"
    ],
    "desc": "一个从乡下来的裁缝女孩，凭借一把剪刀和野心，在巴黎时尚圈掀起革命。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "沉默之墙",
    "file": "movie-749.html",
    "cover": "./149.jpg",
    "year": "2017",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 历史 / 战争",
    "tags": [
      "柏林墙",
      "逃亡",
      "沉默",
      "家庭"
    ],
    "desc": "1961年柏林墙建起的那一刻，住在同一条街上的两个德国家庭，被一道墙割裂成了生死冤家。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "国王说好个绝世奇机",
    "file": "movie-750.html",
    "cover": "./150.jpg",
    "year": "1984",
    "region": "中国台湾",
    "type": "电影",
    "genre": "奇幻，古装",
    "tags": [
      "民间传说",
      "讽刺",
      "发明",
      "喜剧"
    ],
    "desc": "古时国王痴迷奇技淫巧，木匠献上“绝世奇机”，却引发了一场朝堂闹剧。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "喋血外星人",
    "file": "movie-751.html",
    "cover": "./1.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻、动作、恐怖",
    "tags": [
      "外星入侵",
      "硬核枪战",
      "密室逃生",
      "反套路"
    ],
    "desc": "外星人不是来征服地球的，它们是来地球逃难的——可惜人类并不知道。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "鬼宅",
    "file": "movie-752.html",
    "cover": "./2.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖",
    "tags": [
      "凶宅",
      "直播",
      "诅咒",
      "母女"
    ],
    "desc": "灵异主播为流量住进凶宅，却发现恐怖的不是鬼，而是这栋房子会轮流附身每一个家庭成员。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "一家之主2022",
    "file": "movie-753.html",
    "cover": "./3.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭 / 女性",
    "tags": [
      "中年危机",
      "母亲",
      "家庭压力",
      "买房",
      "女性觉醒"
    ],
    "desc": "一个三代同堂的家庭里，人人都听“一家之主”的，可这位“一家之主”却发现自己没有一间属于自己的房间。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "巴洛可",
    "file": "movie-754.html",
    "cover": "./4.jpg",
    "year": "1976",
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 惊悚, 犯罪",
    "tags": [
      "政治隐喻",
      "蛇蝎美人",
      "替身"
    ],
    "desc": "一名杀手在被追杀前，让深爱他的妓女去找一个和自己一模一样的替身，继续他们的爱情游戏。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "妈妈的酱汤馆",
    "file": "movie-755.html",
    "cover": "./5.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 美食",
    "tags": [
      "美食",
      "亲情",
      "治愈",
      "传承",
      "小店"
    ],
    "desc": "首尔顶尖女主厨遭遇职业滑铁卢，被迫回到乡下继承母亲破败的酱汤馆，却发现味觉的秘密都藏在过去里。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "回路杀手",
    "file": "movie-756.html",
    "cover": "./6.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 动作 / 惊悚",
    "tags": [
      "时间循环",
      "杀手",
      "记忆覆盖",
      "宿敌",
      "高概念"
    ],
    "desc": "一名杀手发现每次完成任务后时间都会重置，而他的同行在每个新循环里都会变成更难对付的敌人。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "暗夜心慌慌",
    "file": "movie-757.html",
    "cover": "./7.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 超自然",
    "tags": [
      "万圣节",
      "诅咒",
      "连环杀人",
      "限时"
    ],
    "desc": "每年万圣节午夜，这座小镇就会有一户人家的灯自动熄灭，而第二天，那户人家全员失踪。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "绑架计划",
    "file": "movie-758.html",
    "cover": "./8.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 犯罪",
    "tags": [
      "乌龙",
      "绑架",
      "富豪",
      "废柴",
      "反杀"
    ],
    "desc": "两个废柴绑匪绑架富豪求赎金，却发现富豪正求着被人绑架，好逃避一百亿的债务。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "一键倾心",
    "file": "movie-759.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 科幻",
    "tags": [
      "社交软件",
      "算法恋爱",
      "虚拟现实",
      "反转"
    ],
    "desc": "当婚恋APP的“灵魂匹配”算法精准到能预判你爱上谁，一个程序员女孩发现，自己被匹配给了系统本身。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "坐卧两用室",
    "file": "movie-760.html",
    "cover": "./10.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 悬疑",
    "tags": [
      "沙发",
      "家族秘密",
      "两代人",
      "文艺惊悚"
    ],
    "desc": "一张祖传的坐卧两用沙发，只要坐上去超过十分钟，就会看到家族最黑暗的秘密。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "杜立德医生",
    "file": "movie-761.html",
    "cover": "./11.jpg",
    "year": "2027",
    "region": "英国",
    "type": "剧集",
    "genre": "奇幻、冒险、医学",
    "tags": [
      "兽医",
      "懂兽语",
      "维多利亚",
      "动物大军",
      "解谜"
    ],
    "desc": "维多利亚时代的怪咖兽医可以跟动物说话，但这能力害他成了连环凶案的嫌疑人。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "相见不如怀念",
    "file": "movie-762.html",
    "cover": "./12.jpg",
    "year": "2022",
    "region": "中国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": [
      "前任重逢",
      "中年情感",
      "遗憾美学",
      "克制"
    ],
    "desc": "离婚七年后在小城葬礼上重逢，发现彼此手机里还存着当年的晚安语音。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "天蝎第一季",
    "file": "movie-763.html",
    "cover": "./13.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情, 犯罪, 悬疑",
    "tags": [
      "高智商",
      "反社会人格",
      "连环案件",
      "团队合作"
    ],
    "desc": "智商高达197的天蝎座天才被迫与FBI合作，却发现自己的每一个预测都在将队友推向死亡。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "睡着的女人",
    "file": "movie-764.html",
    "cover": "./14.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "tags": [
      "悬疑",
      "梦境",
      "超现实",
      "女性"
    ],
    "desc": "一个植物人女孩在沉睡中经历了一场跨越十年的史诗冒险，而她的家人正在讨论是否拔管。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "迷局1931",
    "file": "movie-765.html",
    "cover": "./15.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑, 谍战, 年代",
    "tags": [
      "上海",
      "情报",
      "假面",
      "多重身份",
      "孤岛"
    ],
    "desc": "1931年的上海，一个失忆的男人发现自己拥有四重身份，每一重都想杀死另一个自己。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "锁住的天空",
    "file": "movie-766.html",
    "cover": "./16.jpg",
    "year": "2025",
    "region": "中国大陆 / 德国",
    "type": "电影",
    "genre": "剧情 / 儿童 / 奇幻",
    "tags": [
      "封闭小区",
      "儿童视角",
      "隐喻",
      "自由"
    ],
    "desc": "一个高档小区里，孩子们发现头顶的天空被一道隐形锁链锁住了。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "蒙骗",
    "file": "movie-767.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 心理",
    "tags": [
      "骗中骗",
      "记忆迷宫",
      "女性视角"
    ],
    "desc": "一场针对出轨丈夫的“忠诚测试”，却牵扯出三年前的碎尸案，而测试者自己，可能才是真正的猎物。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "私恶公善",
    "file": "movie-768.html",
    "cover": "./18.jpg",
    "year": "1979",
    "region": "法国",
    "type": "电影",
    "genre": "剧情，伦理，政治",
    "tags": [
      "双面人生",
      "腐败",
      "道德困境",
      "官员",
      "黑色幽默"
    ],
    "desc": "一位清廉的市长候选人私生活极度混乱，他的对手发现了这个秘密，却犹豫该不该公开。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "魔幻猎人",
    "file": "movie-769.html",
    "cover": "./19.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "奇幻 / 动作",
    "tags": [
      "次元裂缝",
      "物证猎人",
      "寄生咒术",
      "掉落物交易"
    ],
    "desc": "在一个“魔法现实化”的世界里，一帮底层猎人靠倒卖次元裂缝里的怪物掉落物为生，却意外捡到了神的断指。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "猎魔人",
    "file": "movie-770.html",
    "cover": "./20.jpg",
    "year": "2019",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻 / 动作 / 冒险",
    "tags": [
      "魔法世界",
      "斩妖除魔",
      "命运羁绊"
    ],
    "desc": "孤独的猎魔人杰洛特游走于北方诸国，他从不站队，却被迫卷入了一场决定世界命运的权力游戏。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "一票青春",
    "file": "movie-771.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 青春",
    "tags": [
      "校园",
      "成长",
      "友情",
      "奇幻",
      "抉择"
    ],
    "desc": "一张神秘选票让高三差生林晓能改写过去，却发现每次修正都有人替他受伤。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "笑面人（2012年电影）",
    "file": "movie-772.html",
    "cover": "./22.jpg",
    "year": "2012",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 历史",
    "tags": [
      "古典",
      "悲剧",
      "贵族",
      "伤痕"
    ],
    "desc": "被国王毁容成为小丑的他，用一张永远微笑的脸，在宫廷宴会上讲出了最危险的实话。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "黑暗中的吟唱",
    "file": "movie-773.html",
    "cover": "./23.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "tags": [
      "民俗恐怖",
      "邪教祭祀",
      "音乐杀人",
      "高概念"
    ],
    "desc": "一个乐理博士受邀来到偏远小镇整理民谣，却发现这里流传的“摇篮曲”只要被完整哼唱，听者就会在睡梦中自杀。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "苦菜花",
    "file": "movie-774.html",
    "cover": "./24.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 年代",
    "tags": [
      "农村女性",
      "贫困",
      "坚韧",
      "时代变迁"
    ],
    "desc": "从包办婚姻到进城务工再到回乡创业，一朵苦菜花在六十年的时代洪流中倔强绽放。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "巨鲨浪潮",
    "file": "movie-775.html",
    "cover": "./25.jpg",
    "year": "2024",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "灾难 / 惊悚",
    "tags": [
      "鲨鱼",
      "海难",
      "生存",
      "特效大片"
    ],
    "desc": "一场海底地震引发百米巨浪，巨浪中裹挟着成群的变异巨鲨。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "绝杀2012",
    "file": "movie-776.html",
    "cover": "./26.jpg",
    "year": "2012",
    "region": "中国",
    "type": "电影",
    "genre": "动作 / 运动",
    "tags": [
      "篮球",
      "绝杀",
      "青春"
    ],
    "desc": "2012年，一所普通高中的篮球队在不被看好的情况下闯入全国决赛，决赛最后一秒，他们差1分。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "太疯狂了天下无敌",
    "file": "movie-777.html",
    "cover": "./27.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动作、喜剧、恶搞",
    "tags": [
      "无厘头",
      "格斗",
      "伪纪录片"
    ],
    "desc": "自称宇宙最强的大叔用自创的“疯狂派拳”打遍天下无敌手，直到他遇到一个只会喊“不公平”的小学生。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "情牵玫瑰园",
    "file": "movie-778.html",
    "cover": "./28.jpg",
    "year": "2002",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "偶像, 爱情",
    "tags": [
      "豪门",
      "失忆",
      "替身",
      "虐恋",
      "古早味"
    ],
    "desc": "她替双胞胎姐姐嫁入豪门，却在新婚夜发现新郎是她五年前抛弃的穷画家，而他已失忆。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "减价大作战",
    "file": "movie-779.html",
    "cover": "./29.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "tags": [
      "黑色星期五",
      "超市",
      "疯狂抢购",
      "恶搞"
    ],
    "desc": "一群各怀绝技的怪胎，为了抢一台特价电视，把感恩节超市变成了古罗马竞技场。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "下雪的日子",
    "file": "movie-780.html",
    "cover": "./30.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情，灾难，生存",
    "tags": [
      "暴雪",
      "被困",
      "人性",
      "超市",
      "生存法则"
    ],
    "desc": "千年一遇的暴雪封城，超市成了孤岛，人们为了最后一口食物露出了獠牙。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "狼在门外",
    "file": "movie-781.html",
    "cover": "./31.jpg",
    "year": "2019",
    "region": "爱尔兰 / 英国",
    "type": "电影",
    "genre": "剧情 / 惊悚 / 历史",
    "tags": [
      "爱尔兰大饥荒",
      "英语殖民",
      "心理恐怖",
      "狼作为隐喻",
      "生存"
    ],
    "desc": "1847年饥荒下的爱尔兰，一个母亲坚信门外徘徊的不是狼，而是伪装成狼的“收租人”。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "黑色蜂暴",
    "file": "movie-782.html",
    "cover": "./32.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "灾难、惊悚、科幻",
    "tags": [
      "昆虫变异",
      "生态灾难",
      "密室逃生"
    ],
    "desc": "一种变异的杀人蜂在美洲大陆疯狂繁殖，一家人在超市避难时发现，这些蜜蜂能听懂人类的恐惧。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "金属风暴",
    "file": "movie-783.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "动作 / 科幻",
    "tags": [
      "磁力武器",
      "特种兵",
      "近未来战争",
      "兄弟反目"
    ],
    "desc": "美军研制出可控金属风暴步枪，测试当天被自己人偷走并瞄准了白宫。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "德州巡行者",
    "file": "movie-784.html",
    "cover": "./34.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪 / 西部 / 悬疑",
    "tags": [
      "公路追凶",
      "荒漠求生",
      "兄弟情义"
    ],
    "desc": "沉默的货车司机为寻失踪女儿，独自踏上德州荒原的罪恶狩猎之旅。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "京城81号",
    "file": "movie-785.html",
    "cover": "./35.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "恐怖, 悬疑, 历史",
    "tags": [
      "凶宅",
      "轮回",
      "民国",
      "双时空"
    ],
    "desc": "网红探险队直播夜闯京城81号，却意外打开了每二十年一次的“鬼门”倒计时。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "吃货达人打卡吧",
    "file": "movie-786.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀 / 美食",
    "tags": [
      "城市探店",
      "竞赛",
      "文化冷知识",
      "治愈",
      "高颜值美食"
    ],
    "desc": "六位“味觉猎手”每集空降一座陌生城市，仅凭一碗汤找到最地道的老店。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "人形师",
    "file": "movie-787.html",
    "cover": "./37.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖, 悬疑, 惊悚",
    "tags": [
      "人偶",
      "博物馆",
      "诅咒",
      "匠人",
      "复仇"
    ],
    "desc": "一名人偶修复师接手神秘古董人偶，却发现每修复一处，现实中的熟人就会对应部位腐烂。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "恐怖夜",
    "file": "movie-788.html",
    "cover": "./38.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "tags": [
      "密室",
      "直播",
      "诅咒",
      "民俗",
      "反转"
    ],
    "desc": "五个网红被困在一栋被诅咒的老宅直播“一夜求生”，却发现自己并非唯一的闯入者。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "丑女贝蒂：故事继续第二季",
    "file": "movie-789.html",
    "cover": "./39.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧, 剧情",
    "tags": [
      "时尚",
      "职场",
      "怀旧",
      "成长",
      "续集"
    ],
    "desc": "十五年后，贝蒂成了杂志主编，但时尚界的肤浅一点没变，除了她的眼镜。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "长安异闻录",
    "file": "movie-790.html",
    "cover": "./40.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 奇幻 / 古装",
    "tags": [
      "唐朝",
      "探案",
      "志怪",
      "双男主",
      "权谋"
    ],
    "desc": "武则天时期，大理寺卿与狄仁杰之孙联手调查连环命案，却发现凶手似乎并非人类。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "我的他和他",
    "file": "movie-791.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 喜剧 / 都市",
    "tags": [
      "双胞胎",
      "错位",
      "替身",
      "甜宠"
    ],
    "desc": "她爱上了“完美男友”，却发现他有一个长得一模一样的双胞胎弟弟，而她分不清自己爱的是谁。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "吸血鬼情人",
    "file": "movie-792.html",
    "cover": "./42.jpg",
    "year": "2026",
    "region": "英国/美国",
    "type": "剧集",
    "genre": "爱情/奇幻",
    "tags": [
      "先婚后爱",
      "永生诅咒",
      "哥特风"
    ],
    "desc": "为了保全家族，普通女孩被迫嫁给高傲的古吸血鬼伯爵，却发现他是中了咒术的初恋情人。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "我的美丽与哀愁",
    "file": "movie-793.html",
    "cover": "./43.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情，家庭，女性",
    "tags": [
      "女性",
      "三代",
      "和解",
      "秘密"
    ],
    "desc": "一张遗物中的旧照片，揭开了一家三代女人跨越五十年，关于美丽、谎言与彼此伤害的秘密。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "再次相遇的世界",
    "file": "movie-794.html",
    "cover": "./44.jpg",
    "year": "2017",
    "region": "韩国",
    "type": "剧集",
    "genre": "奇幻、爱情、剧情",
    "tags": [
      "穿越时空",
      "青梅竹马",
      "生死相恋",
      "奇幻悬疑",
      "催泪治愈"
    ],
    "desc": "十二年前因事故被宣告死亡的他，突然以十八岁的模样归来，而当年的恋人已是三十岁的疲惫成年人。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "邪典之梦中梦",
    "file": "movie-795.html",
    "cover": "./45.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖， 悬疑",
    "tags": [
      "梦境",
      "邪教",
      "多层",
      "心理"
    ],
    "desc": "一个失眠严重的恐怖片编剧，开始每天做同一个噩梦，而梦中邪教举行仪式的废弃教堂，就在他家楼下。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "杀手酒店",
    "file": "movie-796.html",
    "cover": "./46.jpg",
    "year": "2026",
    "region": "美国 / 法国",
    "type": "剧集",
    "genre": "动作 / 犯罪 / 黑色幽默",
    "tags": [
      "刺客",
      "酒店",
      "规矩",
      "阵营"
    ],
    "desc": "世界上最大的刺客组织把总部设在一家奢华酒店里，而新入职的杀手发现，这里最危险的不是客人，是保洁阿姨。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "最佳遗产",
    "file": "movie-797.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": [
      "遗产",
      "兄弟反目",
      "和解",
      "代际"
    ],
    "desc": "父亲去世留下三样遗产：一套老宅、二十万现金、还有一封只说了六个字的遗嘱。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "雁归西窗月",
    "file": "movie-798.html",
    "cover": "./48.jpg",
    "year": "2021",
    "region": "中国",
    "type": "剧集",
    "genre": "古装, 爱情",
    "tags": [
      "先婚后爱",
      "师生",
      "误会",
      "甜宠",
      "虐心"
    ],
    "desc": "霸道郡王强娶寒门女学生为妻，新婚夜写下休书：“待我功成名就，你自由了。”",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "疯狗与格拉瑞小姐",
    "file": "movie-799.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情喜剧",
    "tags": [
      "公路",
      "绑架",
      "治愈"
    ],
    "desc": "患有狂躁症的职业杀手绑架了患有绝症的富家千金，两人在逃亡路上互相成为了对方的精神解药。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "只好背叛地球了",
    "file": "movie-800.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 科幻, 爱情",
    "tags": [
      "外星人",
      "社畜",
      "卧底",
      "沙雕"
    ],
    "desc": "一个被派来毁灭地球的外星打工人，却因为沉迷于公司的996福报，决定背叛母星。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "雷电交加的小路",
    "file": "movie-801.html",
    "cover": "./51.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑、奇幻、剧情",
    "tags": [
      "记忆删除",
      "雨夜",
      "家族秘密",
      "时空循环"
    ],
    "desc": "每条雷雨夜，30岁的上班族都会在小路上捡到一封自己10年前写给自己的警告信。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "渔民的朋友",
    "file": "movie-802.html",
    "cover": "./52.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "音乐 / 喜剧",
    "tags": [
      "民歌",
      "渔村",
      "逆袭",
      "真实改编",
      "海港"
    ],
    "desc": "一群唱船歌的康沃尔老渔民被星探发现，签约前他们提了唯一要求：不能耽误下午四点的潮汐捕鱼。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "丑闻风暴",
    "file": "movie-803.html",
    "cover": "./53.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 惊悚 / 政治",
    "tags": [
      "媒体黑幕",
      "权力斗争",
      "反转不断"
    ],
    "desc": "王牌主播为追查真相，却发现自己正是风暴的中心。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "烽火田园",
    "file": "movie-804.html",
    "cover": "./54.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "战争、历史",
    "tags": [
      "抗战末期",
      "农村",
      "母子情"
    ],
    "desc": "抗战末期，一位缠着小脚的农村母亲，为了给当游击队员的儿子送一双鞋，赤脚穿越百里战场。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "射击场的孩子们",
    "file": "movie-805.html",
    "cover": "./55.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "儿童",
      "射击",
      "自闭症",
      "父子情"
    ],
    "desc": "一个患有自闭症但拥有超强专注力的男孩，在废弃射击场遇见了颓废的前奥运射击冠军，两人互相救赎。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "角色",
    "file": "movie-806.html",
    "cover": "./56.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "漫画家",
      "模仿杀人",
      "双重人格",
      "隐喻"
    ],
    "desc": "一个不得志的漫画家，将自己目睹的灭门惨案画成漫画大卖，却引来了真凶的“催更”。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "生生不息演唱会",
    "file": "movie-807.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情, 音乐",
    "tags": [
      "演唱会",
      "告别",
      "传承"
    ],
    "desc": "香港红馆最后一场演唱会，三位不同时代的歌星要在三小时内完成跨越四十年的声音接力。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "开运奇遇记",
    "file": "movie-808.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 奇幻",
    "tags": [
      "好运",
      "锦鲤",
      "打工族",
      "反转"
    ],
    "desc": "一个倒霉了二十年的社畜意外获得“开运大礼包”，却发现好运也会透支生命。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "将军在上之极乐净土",
    "file": "movie-809.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装 / 动作 / 奇幻",
    "tags": [
      "女将军",
      "秘境探险",
      "视觉系",
      "玄幻"
    ],
    "desc": "女将军叶昭奉命寻找长生花，却误入一座全是俊美男舞姬的极乐净土幻城。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "谁说我结不了婚",
    "file": "movie-810.html",
    "cover": "./60.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情，爱情",
    "tags": [
      "都市",
      "女性",
      "晚婚"
    ],
    "desc": "三个30+的单身精英女性，在父母的催婚和社会的偏见中，坚持“不是不能结婚，是不想”。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "小爸爸的抉择",
    "file": "movie-811.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 家庭, 剧情",
    "tags": [
      "单亲爸爸",
      "外卖员",
      "逆袭",
      "温情",
      "搞笑"
    ],
    "desc": "一个18岁的外卖单亲爸爸为了凑女儿的手术费，意外参加了全国最难的“最强大脑”知识竞赛。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "吉尔的妻子",
    "file": "movie-812.html",
    "cover": "./62.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 剧情",
    "tags": [
      "心理操控",
      "婚姻",
      "替代",
      "人格分裂"
    ],
    "desc": "丈夫失踪后，妻子发现他生前一直在偷偷培养一个和自己长得一模一样的“替代品”。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "逆鳞",
    "file": "movie-813.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪 / 动作",
    "tags": [
      "黑帮",
      "卧底",
      "兄弟情",
      "背叛",
      "东北"
    ],
    "desc": "潜伏在黑帮十五年的老卧底接到最后任务：杀掉自己亲手养大的帮派接班人。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "寻梦纽约",
    "file": "movie-814.html",
    "cover": "./64.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "爱情/歌舞",
    "tags": [
      "百老汇",
      "移民故事",
      "梦想与现实",
      "爵士乐"
    ],
    "desc": "一个怀揣百老汇梦的韩国女孩，和一个想当诗人的出租车司机，在曼哈顿的堵车中相爱。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "梨园情恨",
    "file": "movie-815.html",
    "cover": "./65.jpg",
    "year": "1997",
    "region": "中国",
    "type": "电影",
    "genre": "爱情, 戏曲",
    "tags": [
      "京剧",
      "师徒恋",
      "时代悲剧"
    ],
    "desc": "民国乱世，一出《霸王别姬》让梨园师徒暗生情愫，却也引来了军阀的觊觎与不可挽回的复仇。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "偷生",
    "file": "movie-816.html",
    "cover": "./66.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪， 悬疑",
    "tags": [
      "换脸",
      "冒名顶替",
      "阶层跃迁",
      "惊悚"
    ],
    "desc": "穷困的整形医生在富豪死后通过换脸手术冒名顶替，却发现自己继承的是一个被诅咒的家族。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "王子与海盗",
    "file": "movie-817.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "冒险喜剧",
    "tags": [
      "黄金时代",
      "贵族与流氓",
      "身份互换",
      "加勒比海",
      "搞笑"
    ],
    "desc": "一个满嘴礼数的欧洲王子被海盗绑架，阴差阳错，真正的海盗头子却被当成王子送去皇宫上课。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "窃贼、妻子及皮划艇",
    "file": "movie-818.html",
    "cover": "./68.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑, 爱情, 犯罪",
    "tags": [
      "多重反转",
      "婚姻游戏",
      "北欧风光",
      "荒诞幽默"
    ],
    "desc": "职业窃贼假死后想与妻子重聚，却发现她正和一名皮划艇教练计划新一轮骗局。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "顽皮豹之子",
    "file": "movie-819.html",
    "cover": "./69.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动画/喜剧",
    "tags": [
      "经典重启",
      "父子档",
      "无声幽默"
    ],
    "desc": "顽皮豹突然多了个儿子——一只同样粉红但话痨且热衷短视频的“顽皮小豹”。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "爱尔兰之路",
    "file": "movie-820.html",
    "cover": "./70.jpg",
    "year": "2025",
    "region": "爱尔兰",
    "type": "剧集",
    "genre": "剧情, 历史",
    "tags": [
      "移民",
      "家族",
      "返乡",
      "秘密"
    ],
    "desc": "纽约警察肖恩继承了一封来自爱尔兰的信，信中说他的“父亲”刚去世，但他父亲明明三十年前就死了。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "魔鬼女房东",
    "file": "movie-821.html",
    "cover": "./71.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑惊悚",
    "tags": [
      "租房惊魂",
      "偷窥",
      "心理操控",
      "港味",
      "层层反转"
    ],
    "desc": "穷困研究生租下廉价公寓，女房东热心过头，直到他发现上一任房客失踪前曾留下一行血字：房东不是人。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "迷雾草原",
    "file": "movie-822.html",
    "cover": "./72.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 剧情, 奇幻",
    "tags": [
      "草原传说",
      "失踪案",
      "时间幻觉"
    ],
    "desc": "内蒙古草原上三个牧羊少年同时失踪，七天后他们出现在两百公里外，但记忆完全空白。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "鬼娃的诅咒",
    "file": "movie-823.html",
    "cover": "./73.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "tags": [
      "玩偶",
      "连环杀手",
      "巫毒",
      "密室"
    ],
    "desc": "孤儿院的孩子们发现，每当午夜阁楼的古董娃娃眨眼，第二天就会有人以最离奇的方式消失。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "牛鬼蛇神国语",
    "file": "movie-824.html",
    "cover": "./74.jpg",
    "year": "1980",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 喜剧 / 奇幻",
    "tags": [
      "邵氏",
      "古装",
      "斗法",
      "单元故事"
    ],
    "desc": "三个古装单元恐怖喜剧，讲牛头马面、蛇精道士和神经老爷的荒唐斗法。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "成都，我爱你",
    "file": "movie-825.html",
    "cover": "./75.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 剧情 / 文艺",
    "tags": [
      "拼盘电影",
      "城市风情",
      "治愈",
      "市井生活"
    ],
    "desc": "火锅店老板、失聪舞者、来寻找灵感的外国音乐人，三对男女在成都的烟火气中寻找爱与自我。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "追杀51号",
    "file": "movie-826.html",
    "cover": "./76.jpg",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "genre": "动作、犯罪",
    "tags": [
      "杀手",
      "编号复仇",
      "兄弟反目"
    ],
    "desc": "杀手发现自己就是第51号目标，而追杀令来自失忆前的自己。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "气球2019",
    "file": "movie-827.html",
    "cover": "./77.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、家庭、文艺",
    "tags": [
      "藏地",
      "生育",
      "信仰",
      "女性"
    ],
    "desc": "一只避孕套被小孩当成气球吹走，导致母亲意外怀孕，在信仰禁止堕胎与现实的贫困之间，全家陷入了两难。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "皇国少女",
    "file": "movie-828.html",
    "cover": "./78.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 历史",
    "tags": [
      "战后",
      "皇室",
      "替身",
      "身份疑云",
      "少女"
    ],
    "desc": "1945年日本战败后，一名自称天皇私生女的少女闯入皇宫，掀起了皇室从未公开的继承危机。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "私语时刻",
    "file": "movie-829.html",
    "cover": "./79.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 同性",
    "tags": [
      "聋哑",
      "修道院",
      "禁忌之恋",
      "中世纪"
    ],
    "desc": "中世纪聋哑修女与负责打扫教堂的农妇发展出无声恋情，而整个修道院都在窃听她们的私语——通过墙上的窃听孔。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "疯狂马达加斯加",
    "file": "movie-830.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画",
    "genre": "喜剧 / 冒险 / 动画",
    "tags": [
      "动物",
      "冒险",
      "搞笑",
      "友情"
    ],
    "desc": "纽约中央公园的四位动物大佬流落马达加斯加，在狐猴王国里上演了一出关于“回家还是留下”的疯狂闹剧。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "蒸气室",
    "file": "movie-831.html",
    "cover": "./81.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑， 惊悚",
    "tags": [
      "密闭空间",
      "精神分裂",
      "反转"
    ],
    "desc": "五个陌生人被困在午夜无人的桑拿房，每消失一个人，真相就变得更加可怕。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "侠探特攻3",
    "file": "movie-832.html",
    "cover": "./82.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 犯罪",
    "tags": [
      "硬汉",
      "营救",
      "暴力美学"
    ],
    "desc": "退休硬汉侦探为了找回被黑客盗走的养老金，不得不重出江湖，意外卷入暗网人口贩卖大案。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "邪恶力量第八季",
    "file": "movie-833.html",
    "cover": "./83.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻，恐怖，剧情",
    "tags": [
      "兄弟",
      "驱魔",
      "超自然",
      "季播",
      "神话线"
    ],
    "desc": "地狱被清空，天堂无人看守，人间沦为怪物游乐场，温切斯特兄弟必须找到上帝留下的最后一个字条：“重启”。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "一胜",
    "file": "movie-834.html",
    "cover": "./84.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "运动，励志",
    "tags": [
      "职场女拳手",
      "中年反击",
      "真实改编"
    ],
    "desc": "被裁员的40岁女白领为了拿回退休金，报名无差别级女子格斗赛。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "摩西与阿隆",
    "file": "movie-835.html",
    "cover": "./85.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 音乐 / 宗教",
    "tags": [
      "歌剧改编",
      "兄弟",
      "金牛犊",
      "语言与音乐"
    ],
    "desc": "先知摩西口吃，其兄阿隆擅言辞。当摩西上山领受十诫，阿隆在山下为安抚民众铸起了金牛犊。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "孤岛逃亡记",
    "file": "movie-836.html",
    "cover": "./86.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "冒险 / 生存 / 心理",
    "tags": [
      "荒岛求生",
      "社畜",
      "主动流放",
      "反内卷",
      "黑色幽默"
    ],
    "desc": "一名被996压垮的东京程序员买了张单程船票，主动流落到一座无人岛，却发现岛上已经有三个“逃难”的前辈。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "解放·终局营救",
    "file": "movie-837.html",
    "cover": "./87.jpg",
    "year": "2030",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争、动作",
    "tags": [
      "历史改编",
      "孤城困局",
      "小人物群像",
      "巷战"
    ],
    "desc": "1949年解放前夕，一座孤城里，一个国民党逃兵、一个解放军侦察员、一个女教师，同时盯上了一个地下军火库。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "暗黑",
    "file": "movie-838.html",
    "cover": "./88.jpg",
    "year": "2026",
    "region": "德国 / 美国",
    "type": "剧集",
    "genre": "科幻 / 悬疑 / 哲学",
    "tags": [
      "洞穴",
      "核废料",
      "时间循环",
      "家族宿命"
    ],
    "desc": "小镇地下的核废料泄漏，导致时间并非循环，而是像树枝一样分叉、交缠，每一个选择都创造新的地狱。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "龙虎山决斗",
    "file": "movie-839.html",
    "cover": "./89.jpg",
    "year": "1992",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 武侠",
    "tags": [
      "功夫",
      "道教",
      "恩怨",
      "80后"
    ],
    "desc": "龙虎山上，两名师出同门的道士，为了争夺天师印与一段灭门血仇，展开一场生死对决。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "七匹狼2",
    "file": "movie-840.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "动作 / 剧情",
    "tags": [
      "机车",
      "兄弟",
      "热血",
      "续作"
    ],
    "desc": "三十年后，初代七匹狼的儿子们重聚，不是因为热血，而是因为父亲们欠了一笔还不起的债。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "网络正义魔人",
    "file": "movie-841.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑, 犯罪",
    "tags": [
      "键盘侠",
      "私刑正义",
      "反转"
    ],
    "desc": "一个专“开盒”网暴者的神秘账号火了，但当所有线索都指向他本人时，他才发现自己只是棋盘上的弃子。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "奈何寨主不好当",
    "file": "movie-842.html",
    "cover": "./92.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "喜剧, 古装, 冒险",
    "tags": [
      "山寨",
      "乌龙",
      "女寨主",
      "轻松搞笑"
    ],
    "desc": "现代打工人穿越成土匪寨主，却发现账上只剩三文钱和一头瘸驴。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "燕子不再归来",
    "file": "movie-843.html",
    "cover": "./93.jpg",
    "year": "2017",
    "region": "伊朗 / 法国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "乡村诗学",
      "代际冲突",
      "沉默叙事"
    ],
    "desc": "瘫痪的父亲只能通过燕子是否归来感知时间，而女儿决定离开村庄去城市。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "田间的少年",
    "file": "movie-844.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀",
    "tags": [
      "慢生活",
      "农耕",
      "少年成长"
    ],
    "desc": "七位城市问题少年被送到东北农村，用一年的时间种出十吨水稻才能回家。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "笑傲江湖粤语",
    "file": "movie-845.html",
    "cover": "./95.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "古装 / 武侠 / 剧情",
    "tags": [
      "金庸改编",
      "粤语原声",
      "江湖",
      "令狐冲",
      "新版"
    ],
    "desc": "全新粤语版《笑傲江湖》，令狐冲不再只是浪子，而是一个被江湖和师门双重背叛后，选择“不原谅”的复仇者。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "失控的晚餐",
    "file": "movie-846.html",
    "cover": "./96.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "tags": [
      "家庭聚餐",
      "黑色幽默",
      "秘密揭露",
      "情感风暴"
    ],
    "desc": "家庭晚餐上，母亲宣布将遗产全部捐给动物保护组织，三个子女当场掀翻了餐桌。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "小虎还乡",
    "file": "movie-847.html",
    "cover": "./97.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "动画",
    "genre": "冒险， 家庭， 励志",
    "tags": [
      "野生动物保护",
      "公路动画",
      "成长"
    ],
    "desc": "一只从小被动物园收养的东北虎，被放归野外后必须横穿半个中国，才能找到最后的野生栖息地。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "不是钱的事儿",
    "file": "movie-848.html",
    "cover": "./98.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "tags": [
      "黑色幽默",
      "小人物",
      "人情社会"
    ],
    "desc": "一张中了五十万的彩票，让整个城中村的街坊邻里都疯了。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "胜算",
    "file": "movie-849.html",
    "cover": "./99.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "谍战, 悬疑",
    "tags": [
      "双面间谍",
      "心理战",
      "民国"
    ],
    "desc": "潜伏在日伪高层的地下党员被发现身份后，选择用一桩假叛变来制造更大的胜算。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "弗兰肯斯坦2025",
    "file": "movie-850.html",
    "cover": "./100.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "科幻/惊悚",
    "tags": [
      "器官移植",
      "人造人",
      "伦理困境",
      "黑暗科技"
    ],
    "desc": "一个接受了全身器官移植的亿万富翁，发现所有器官捐献者都曾签署过一份神秘协议，而那协议里写着他死亡的具体时间。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "雪花女孩",
    "file": "movie-851.html",
    "cover": "./101.jpg",
    "year": "2022",
    "region": "西班牙",
    "type": "剧集",
    "genre": "悬疑、剧情",
    "tags": [
      "失踪案",
      "记者",
      "女性力量"
    ],
    "desc": "三年前在游行中失踪的小女孩突然打来电话，唯一相信她还活着的人是一个实习女记者。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "图书馆战争：最后的任务",
    "file": "movie-852.html",
    "cover": "./102.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动作, 科幻",
    "tags": [
      "图书馆",
      "censorship",
      "特种部队",
      "书籍"
    ],
    "desc": "在书籍审查制度下，一支武装图书馆部队必须护送最后一批禁书穿越战区。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "怪异天才",
    "file": "movie-853.html",
    "cover": "./103.jpg",
    "year": "2016",
    "region": "德国",
    "type": "电影",
    "genre": "剧情传记",
    "tags": [
      "艺术",
      "法斯宾德",
      "德国",
      "癫狂"
    ],
    "desc": "德国最疯的导演法斯宾德，用一年拍七部电影毁掉了自己。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "大卫·查普尔的街区聚会",
    "file": "movie-854.html",
    "cover": "./104.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 音乐 / 纪录片",
    "tags": [
      "脱口秀",
      "嘻哈",
      "街头",
      "即兴",
      "社会讽刺"
    ],
    "desc": "喜剧天王大卫·查普尔封锁了整个街区，用一场免费派对对抗 gentrification（士绅化）带来的冷漠。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "占领电视台",
    "file": "movie-855.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪 / 剧情 / 动作",
    "tags": [
      "直播",
      "人质",
      "媒体操控",
      "社会讽刺",
      "极限反转"
    ],
    "desc": "一群失业者持枪占领电视台直播现场，要求总统道歉，却意外揭露了更大的阴谋。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "为爱劫持",
    "file": "movie-856.html",
    "cover": "./106.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情, 犯罪, 剧情",
    "tags": [
      "人质变恋人",
      "斯德哥尔摩反转",
      "银行劫案",
      "多视角叙事"
    ],
    "desc": "银行劫匪挟持人质后，人质竟主动帮他写起了打劫计划书，只因她认出他是自己十年前的初恋。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "加勒比海盗:黑珍珠号的诅咒",
    "file": "movie-857.html",
    "cover": "./107.jpg",
    "year": "2003",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 冒险, 奇幻",
    "tags": [
      "经典重启",
      "杰克船长",
      "海盗",
      "诅咒"
    ],
    "desc": "风趣迷人的海盗杰克·斯派洛与铁匠威尔联手，夺回被诅咒的黑珍珠号并拯救总督之女。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "誓言今生",
    "file": "movie-858.html",
    "cover": "./108.jpg",
    "year": "2012",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 谍战",
    "tags": [
      "谍战",
      "年代",
      "国安",
      "信仰",
      "家族"
    ],
    "desc": "从1949到1997，一对亲兄弟分属国共两大情报机构，他们的誓言与背叛横跨了半个世纪。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "芭黎丝的1夜",
    "file": "movie-859.html",
    "cover": "./109.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": [
      "一夜情",
      "移民问题",
      "错过与重逢",
      "巴黎夜景"
    ],
    "desc": "一个难民画家与一个银行女精英，在巴黎一夜暴乱中被迫共处一个废弃电话亭。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "星球索拉罗斯",
    "file": "movie-860.html",
    "cover": "./110.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 冒险",
    "tags": [
      "硬科幻",
      "外星生命",
      "灾难",
      "视觉奇观"
    ],
    "desc": "一支探险队深入索拉罗斯星的甲烷海洋，发现那个星球本身就是一只沉睡万亿年的巨兽。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "我开动物园那些年",
    "file": "movie-861.html",
    "cover": "./111.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 奇幻, 职场",
    "tags": [
      "动物拟人",
      "经营模拟",
      "神仙妖怪",
      "日常治愈"
    ],
    "desc": "一个失业青年被迫接手倒闭动物园，却发现员工全是修炼千年的妖怪。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "电波女与青春男",
    "file": "movie-862.html",
    "cover": "./112.jpg",
    "year": "2011",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻, 青春, 恋爱",
    "tags": [
      "电波系",
      "宇宙人",
      "小镇奇谭",
      "新房昭之风格"
    ],
    "desc": "自称被外星人绑架过的卷发表妹，与从都市转学来的少年，共同探寻小镇上关于“电波”的真相。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "欠我十万零五千",
    "file": "movie-863.html",
    "cover": "./113.jpg",
    "year": "2009",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情， 喜剧",
    "tags": [
      "民工讨薪",
      "黑色幽默",
      "现实题材"
    ],
    "desc": "为了讨回十万零五千块工钱，两个民工兄弟用尽了爱情、谎言、暴力，最后发现老板比他们还穷。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "纳萨林",
    "file": "movie-864.html",
    "cover": "./114.jpg",
    "year": "1959",
    "region": "墨西哥",
    "type": "电影",
    "genre": "剧情，宗教，哲学",
    "tags": [
      "经典",
      "信仰",
      "怀疑",
      "人性",
      "布努埃尔"
    ],
    "desc": "一个效仿耶稣的神父，在被世人唾弃后，发现自己的信仰不过是一场自欺欺人。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "我们的相爱时光：续篇",
    "file": "movie-865.html",
    "cover": "./115.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": [
      "续集",
      "十年",
      "婚姻危机",
      "催泪",
      "成长"
    ],
    "desc": "他们曾约定“爱到世界末日”，结婚十年后，世界没末日，爱却先死了。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "请吃红小豆吧！第二季",
    "file": "movie-866.html",
    "cover": "./116.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动画 / 治愈 / 喜剧",
    "tags": [
      "泡面番",
      "萌系",
      "脑洞大开",
      "解压"
    ],
    "desc": "一颗梦想被吃掉的红豆，在甜品世界里打工摸鱼，顺便拯救了奶茶店的危机。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "她背后的那双手",
    "file": "movie-867.html",
    "cover": "./117.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "惊悚 / 悬疑 / 家庭",
    "tags": [
      "心理惊悚",
      "母女共生",
      "控制欲",
      "反转结局"
    ],
    "desc": "钢琴天才少女的背后总有一双无形的手在推着她前进，当她试图逃离时，那双手掐住了她的脖子。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "千阳",
    "file": "movie-868.html",
    "cover": "./118.jpg",
    "year": "2024",
    "region": "阿根廷",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "tags": [
      "魔幻现实主义",
      "沙漠",
      "信仰",
      "视觉奇观"
    ],
    "desc": "干旱的南美沙漠里，一个老妇人声称她能种出“太阳”，吸引了无数绝望的村民。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "至激双雄",
    "file": "movie-869.html",
    "cover": "./119.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 喜剧",
    "tags": [
      "双雄",
      "赛车",
      "无厘头"
    ],
    "desc": "两个失意特技演员冒充杀手接单，却次次把目标“意外”救活，反被全城黑帮追杀。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "生于1978",
    "file": "movie-870.html",
    "cover": "./120.jpg",
    "year": "2023",
    "region": "中国",
    "type": "剧集",
    "genre": "剧情 / 年代",
    "tags": [
      "改革开放",
      "知青",
      "创业",
      "怀旧",
      "奋斗"
    ],
    "desc": "三个1978年出生的发小，从东北老工业基地的下岗潮开始，一路南下深圳，见证改革开放四十年。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "关键任务",
    "file": "movie-871.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 战争",
    "tags": [
      "撤侨",
      "特种兵",
      "营救",
      "热血"
    ],
    "desc": "战火封锁边境，三名退役特种兵要在48小时内找到被绑架的华人工程师。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "惊爆轰天雷",
    "file": "movie-872.html",
    "cover": "./122.jpg",
    "year": "1997",
    "region": "香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "tags": [
      "警匪对峙",
      "卧底",
      "爆炸",
      "兄弟情",
      "枪战"
    ],
    "desc": "卧底警察被同袍出卖，身绑轰天雷冲进金三角毒巢，引爆前却发现弟弟也在人质中。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "奇异人生马戏团",
    "file": "movie-873.html",
    "cover": "./123.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻、悬疑、青春",
    "tags": [
      "超能力",
      "马戏团",
      "蝴蝶效应",
      "怪诞美学"
    ],
    "desc": "一个能回溯时间的少女加入一个神秘的巡回马戏团，发现每个奇异演员的能力都源于一场未解决的悲剧。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "贩肤俗子",
    "file": "movie-874.html",
    "cover": "./124.jpg",
    "year": "2019",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "喜剧、剧情、社会讽刺",
    "tags": [
      "纹身",
      "广告",
      "身体",
      "行为艺术",
      "荒诞"
    ],
    "desc": "失业青年把自己后背租给广告商当活体广告牌，最后连灵魂都被明码标价了。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "漫研部第三季",
    "file": "movie-875.html",
    "cover": "./125.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧 / 日常 / 校园",
    "tags": [
      "宅文化",
      "吐槽",
      "泡面番",
      "漫才"
    ],
    "desc": "漫画研究部的三位活宝为了拯救废部危机，竟打算画出一部能操控现实的“神级漫画”。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "冷月",
    "file": "movie-876.html",
    "cover": "./126.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻, 悬疑",
    "tags": [
      "太空",
      "罪案",
      "密闭空间",
      "烧脑",
      "AI"
    ],
    "desc": "月球基地突发离奇命案，而唯一的目击者是基地里那个拥有自主意识的AI。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "爱的甘露",
    "file": "movie-877.html",
    "cover": "./127.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 奇幻",
    "tags": [
      "修仙",
      "失忆",
      "虐恋",
      "三世轮回",
      "仙侠"
    ],
    "desc": "仙界甘露仙子被贬下凡，每一世都会爱上同一个人，而那个人每一世都会亲手杀死她。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "欲海春潮",
    "file": "movie-878.html",
    "cover": "./128.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "情色 / 悬疑",
    "tags": [
      "不伦",
      "心理战",
      "复仇",
      "出轨",
      "Netflix"
    ],
    "desc": "三对夫妻在度假村互换伴侣，却不知道其中一人是来报仇的。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "忧国的莫里亚蒂第二季",
    "file": "movie-879.html",
    "cover": "./129.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "福尔摩斯衍生",
      "反派主角",
      "智斗",
      "阶级革命"
    ],
    "desc": "犯罪顾问莫里亚蒂与福尔摩斯在第二季中正面交锋，他们要解决的不仅是案件，还有整个大英帝国的腐朽根基。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "拉链",
    "file": "movie-880.html",
    "cover": "./130.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 惊悚",
    "tags": [
      "心理压力",
      "都市病",
      "社畜",
      "失控"
    ],
    "desc": "他患上了拉链恐惧症，因为每次拉开拉链，都会释放出另一个自己。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "蜘蛛侠2",
    "file": "movie-881.html",
    "cover": "./131.jpg",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 科幻, 冒险",
    "tags": [
      "超级英雄",
      "责任",
      "身份危机",
      "章鱼博士"
    ],
    "desc": "当蜘蛛侠因为丧失超能力而想要放弃时，章鱼博士的出现让他重新选择了责任。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "搜索2020",
    "file": "movie-882.html",
    "cover": "./132.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪",
    "tags": [
      "网络暴力",
      "人肉搜索",
      "直播"
    ],
    "desc": "一名直播博主为流量人肉搜索一位“地铁咸猪手”，却意外发现对方是在执行秘密任务的便衣警察。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "在水中",
    "file": "movie-883.html",
    "cover": "./133.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "tags": [
      "水中戏",
      "失语",
      "心理",
      "唯美"
    ],
    "desc": "一名失语症舞者被囚禁在水下玻璃屋，她发现每次吐出的气泡，都能映出凶手的脸。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "狮子王2019",
    "file": "movie-884.html",
    "cover": "./134.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 冒险, 家庭",
    "tags": [
      "动物",
      "权力更迭",
      "自我救赎",
      "实景CG"
    ],
    "desc": "这是1994年动画的“暗黑现实版”，讲述辛巴称王后草原大旱，他必须面对一个真相：父亲的死不是刀疤的错，而是他自己。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "菜鸟老警第二季",
    "file": "movie-885.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪、剧情、动作",
    "tags": [
      "警匪剧",
      "中年转行",
      "师徒搭档",
      "洛杉矶真实案件"
    ],
    "desc": "洛杉矶最老大龄菜鸟警察约翰·诺兰进入第二学年，但这次他要带的徒弟比他还大一岁。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "偷渡金山",
    "file": "movie-886.html",
    "cover": "./136.jpg",
    "year": "2019",
    "region": "美国 / 墨西哥",
    "type": "电影",
    "genre": "惊悚 / 剧情",
    "tags": [
      "移民",
      "地下世界",
      "生存",
      "父女情",
      "绝望"
    ],
    "desc": "一位中国父亲为给女儿换肾，伪装成尸体偷渡美国，却卷入了一场比死亡更可怕的器官交易。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "智力测试",
    "file": "movie-887.html",
    "cover": "./137.jpg",
    "year": "2027",
    "region": "德国",
    "type": "电影",
    "genre": "科幻惊悚",
    "tags": [
      "反乌托邦",
      "优生学",
      "考试",
      "阶层"
    ],
    "desc": "所有人18岁都要参加一场智力测试，分数决定你是住在穹顶城市还是地下贫民窟。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "加德·艾尔马莱：美国梦",
    "file": "movie-888.html",
    "cover": "./138.jpg",
    "year": "2024",
    "region": "法国 / 美国",
    "type": "电影",
    "genre": "喜剧、剧情",
    "tags": [
      "移民",
      "脱口秀",
      "文化冲突",
      "追梦",
      "中年危机"
    ],
    "desc": "一位在巴黎小有名气的摩洛哥裔喜剧演员，为了追爱闯荡好莱坞，却发现自己的幽默在这里水土不服。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "祝你忌日快乐",
    "file": "movie-889.html",
    "cover": "./139.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖、悬疑、循环流",
    "tags": [
      "时间循环",
      "黑色幽默",
      "反套路"
    ],
    "desc": "继《忌日快乐》后，又一名少女陷入了时间循环，但这次她发现，无论怎么死，都会在第二天复活的，不止她一个。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "废柴殿下",
    "file": "movie-890.html",
    "cover": "./140.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧，古装，奇幻",
    "tags": [
      "穿越",
      "咸鱼",
      "逆袭",
      "权谋"
    ],
    "desc": "一个现代躺平青年穿越成最不受宠的皇子，他只想当咸鱼，却被命运推上储君之位。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "野兽男孩的故事",
    "file": "movie-891.html",
    "cover": "./141.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 动作 / 犯罪",
    "tags": [
      "黑帮",
      "卧底",
      "兄弟情",
      "悲剧"
    ],
    "desc": "一个在暴力中长大的孤儿成为黑帮老大的养子，却在一次任务中爱上了警察的卧底女儿，他的忠诚与爱情开始撕裂。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "超凡战队",
    "file": "movie-892.html",
    "cover": "./142.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻",
    "tags": [
      "超级英雄",
      "机甲",
      "青春",
      "团队"
    ],
    "desc": "五个被社会遗弃的高中生意外获得外星超能力，他们必须合体才能阻止邪恶毁灭地球。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "真相2019",
    "file": "movie-893.html",
    "cover": "./143.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑, 犯罪, 剧情",
    "tags": [
      "记者",
      "网络暴力",
      "旧案重查",
      "反转",
      "社会派"
    ],
    "desc": "十年前少女坠楼案被翻出，当年被网暴的嫌疑人如今成了流量网红，真相究竟在哪？",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "拦截密码战",
    "file": "movie-894.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "历史 / 悬疑 / 战争",
    "tags": [
      "二战",
      "密码破译",
      "图灵",
      "谍战"
    ],
    "desc": "二战期间，一名数学天才被秘密征召到布莱切利庄园，却发现她要破译的不只是德军密码，还有庄园里的一桩连环谋杀案。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "第八日的蝉",
    "file": "movie-895.html",
    "cover": "./145.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭 / 犯罪",
    "tags": [
      "诱拐",
      "母性与血缘",
      "救赎",
      "社会派",
      "女性命运"
    ],
    "desc": "一个女人诱拐了情人的女儿，逃亡四年后被捕；而那个女孩长大后，却发现自己也走上了同样的路。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "始于赌约的告别之恋",
    "file": "movie-896.html",
    "cover": "./146.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情 / 校园",
    "tags": [
      "纯爱",
      "打赌",
      "绝症反转"
    ],
    "desc": "高中男生打赌能在一周内追到班上最不起眼的女生，却在成功后得知她只剩三个月生命。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "勤王侠盗罗宾汉",
    "file": "movie-897.html",
    "cover": "./147.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "动作 / 冒险 / 历史",
    "tags": [
      "反英雄",
      "工业革命",
      "蒸汽朋克",
      "劫富济贫",
      "政治阴谋"
    ],
    "desc": "工业革命背景下的罗宾汉不再是弓箭手，而是靠机械义肢和蒸汽动力弩对抗腐败资本家的地下侠盗。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "战斗民族养成记",
    "file": "movie-898.html",
    "cover": "./148.jpg",
    "year": "2015",
    "region": "俄罗斯",
    "type": "剧集",
    "genre": "喜剧 / 爱情",
    "tags": [
      "俄罗斯",
      "文化冲突",
      "自黑",
      "跨国恋爱",
      "搞笑"
    ],
    "desc": "美国记者被派往莫斯科，却发现俄罗斯人日常比美式刻板印象疯狂百倍，连爱情都是伏特加味的。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "亲爱的莱蒙·利玛",
    "file": "movie-899.html",
    "cover": "./149.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "剧情 / 爱情 / 家庭",
    "tags": [
      "催泪",
      "跨宗教",
      "乡土情"
    ],
    "desc": "一场始料未及的列车事故后，一个印度教男孩被一个穆斯林家庭当作死去的儿子“莱蒙·利玛”抚养长大。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "叛教者",
    "file": "movie-900.html",
    "cover": "./150.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑，宗教",
    "tags": [
      "邪教",
      "卧底",
      "信仰危机",
      "心理惊悚",
      "人性"
    ],
    "desc": "一个无神论警察潜入神秘教派，却逐渐被教主洗脑，当他终于获得“神启”时，他要逮捕的叛教者，正是曾经的自己。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "猎魂人",
    "file": "movie-901.html",
    "cover": "./1.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑，惊悚，奇幻",
    "tags": [
      "灵魂猎人",
      "阴阳眼",
      "都市怪谈",
      "七宗罪"
    ],
    "desc": "能看见鬼魂的小镇青年被迫成为“猎魂人”，却发现要猎杀的第一个目标竟是自己死去的女友。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "夺命747",
    "file": "movie-902.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 灾难, 惊悚",
    "tags": [
      "劫机",
      "生化武器",
      "高空逃生",
      "孤胆英雄"
    ],
    "desc": "FBI探员在跨洋航班上发现乘客全被替换成恐怖分子，而飞机无法降落。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "本能2",
    "file": "movie-903.html",
    "cover": "./3.jpg",
    "year": "2006",
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "惊悚 / 悬疑 / 情色",
    "tags": [
      "蛇蝎美人",
      "心理游戏",
      "作家",
      "谋杀案",
      "精神分析"
    ],
    "desc": "畅销犯罪小说家再次成为谋杀案嫌疑人，这次负责她的心理医生也开始失控。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "接球手间谍",
    "file": "movie-904.html",
    "cover": "./4.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情、历史、体育",
    "tags": [
      "二战背景",
      "棒球",
      "双重间谍",
      "真实改编",
      "冷门英雄"
    ],
    "desc": "美国职业棒球手被招募为间谍，利用比赛传递情报，甚至从希特勒眼皮底下偷走重要名单。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "曲象丛生",
    "file": "movie-905.html",
    "cover": "./5.jpg",
    "year": "2026",
    "region": "中国",
    "type": "剧集",
    "genre": "悬疑 / 奇幻",
    "tags": [
      "大象迁徙",
      "短剧",
      "多线叙事"
    ],
    "desc": "一群亚洲象向北迁徙，每经过一个村庄，就会随机“播放”一段村民被隐藏的过去。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "孕期惊魂",
    "file": "movie-906.html",
    "cover": "./6.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "tags": [
      "心理恐怖",
      "身体恐怖",
      "母亲"
    ],
    "desc": "一位孕妇坚信自己怀的是怪物，但所有人都认为是产前抑郁，直到羊水破了的那一刻。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "平头日记",
    "file": "movie-907.html",
    "cover": "./7.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "青春、军旅、成长",
    "tags": [
      "女子特战队",
      "新兵连",
      "自我认同",
      "热血",
      "友情"
    ],
    "desc": "四个性格迥异的95后女生剪去长发，在新兵连的泥潭里找到了比美貌更硬的东西。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "宝岛恩仇",
    "file": "movie-908.html",
    "cover": "./8.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "历史 / 悬疑 / 动作",
    "tags": [
      "清代",
      "海盗",
      "宝藏",
      "家族恩怨",
      "冒险"
    ],
    "desc": "一张染血的藏宝图重现江湖，牵扯出清朝两个海盗家族横跨三百年的血仇与秘密。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "全民大编剧",
    "file": "movie-909.html",
    "cover": "./9.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "tags": [
      "行业讽刺",
      "翻拍",
      "互联网",
      "众筹",
      "反转"
    ],
    "desc": "一个三流编剧把剧本放到网上众筹“全民创作”，结果网友把故事改成了连他都认不出的神作。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "猫头鹰与麻雀",
    "file": "movie-910.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情， 文艺， 社会",
    "tags": [
      "台北",
      "底层",
      "老少配",
      "都市寓言"
    ],
    "desc": "一个深夜偷书的老流浪汉，一个昼伏夜出的便利店女孩，用对讲机交换彼此的白昼与黑夜。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "竞相灭绝",
    "file": "movie-911.html",
    "cover": "./11.jpg",
    "year": "2024",
    "region": "英国",
    "type": "纪录片",
    "genre": "纪录 / 自然",
    "tags": [
      "环保",
      "物种灭绝",
      "暗访调查"
    ],
    "desc": "一群环保斗士潜入黑暗的野生动物走私帝国，揭露人类活动导致的第六次物种大灭绝。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "巴拉德",
    "file": "movie-912.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "动作, 犯罪, 剧情",
    "tags": [
      "印度",
      "反腐",
      "硬汉",
      "智斗",
      "复仇"
    ],
    "desc": "一个只有六秒钟记忆的退伍老兵，用满身的纹身作为备忘录，单枪匹马挑战体制。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "牢狱大暴动",
    "file": "movie-913.html",
    "cover": "./13.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 惊悚, 犯罪",
    "tags": [
      "监狱",
      "暴动",
      "单镜头",
      "实时",
      "生存"
    ],
    "desc": "一场毫无征兆的监狱全面暴动，一名被冤枉的菜鸟狱警必须在24小时内活着走出人间炼狱。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "你和你的工作室",
    "file": "movie-914.html",
    "cover": "./14.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "tags": [
      "独立电影",
      "片场",
      "梦想",
      "中年危机"
    ],
    "desc": "一群快要倒闭的短视频团队，被甲方要求必须拍出一部“拿奥斯卡”的泥塑动画片。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "痴痴的爱",
    "file": "movie-915.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情, 悬疑, 心理",
    "tags": [
      "替身",
      "失忆",
      "豪门恩怨",
      "双向暗恋"
    ],
    "desc": "她车祸失忆后，一个陌生男人自称是她未婚夫，体贴入微。她逐渐爱上他，却发现他脖子上的胎记，与自己梦里反复谋杀的那个男人一模一样。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "科学婴儿",
    "file": "movie-916.html",
    "cover": "./16.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 伦理 / 家庭",
    "tags": [
      "人造子宫",
      "代孕未来",
      "母爱定义"
    ],
    "desc": "世界上第一批“人造子宫婴儿”到了青春期，他们开始集体出现同一种幻痛：感觉自己曾经被“关掉”过一次。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "願望合夥人",
    "file": "movie-917.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "奇幻, 喜剧",
    "tags": [
      "许愿",
      "代价",
      "合伙创业",
      "黑色幽默"
    ],
    "desc": "三个穷光蛋发现一家能实现愿望的便利店，代价是每次许愿后都会随机失去一段记忆。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "锦绣未央",
    "file": "movie-918.html",
    "cover": "./18.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装, 爱情, 权谋",
    "tags": [
      "重生",
      "宅斗",
      "复仇",
      "公主",
      "北魏"
    ],
    "desc": "国破家亡的公主化身庶女回到仇人府邸，用现代智慧和满腔恨意，一步步走上权力巅峰。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "象牙博弈",
    "file": "movie-919.html",
    "cover": "./19.jpg",
    "year": "2026",
    "region": "中国大陆 / 非洲",
    "type": "剧集",
    "genre": "犯罪 / 悬疑",
    "tags": [
      "象牙走私",
      "跨国犯罪",
      "双雄"
    ],
    "desc": "一个中国缉私警和南非前雇佣兵，在亚非欧三大洲追捕“象牙女王”。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "切勿吞食",
    "file": "movie-920.html",
    "cover": "./20.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情, 惊悚",
    "tags": [
      "家庭",
      "秘密",
      "食物",
      "控制"
    ],
    "desc": "母亲每天的晚餐都是一样的菜谱，直到儿子偷偷化验了食物，发现里面含有微量的——镇静剂。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "和田玉传奇",
    "file": "movie-921.html",
    "cover": "./21.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险, 悬疑",
    "tags": [
      "盗墓",
      "新疆",
      "宝藏"
    ],
    "desc": "一块失踪千年的羊脂玉牌，牵扯出丝绸之路上的三段平行时空的夺宝故事。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "穿墙人",
    "file": "movie-922.html",
    "cover": "./22.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "奇幻爱情",
    "tags": [
      "超能力",
      "都市传说",
      "孤独症",
      "墙中世界"
    ],
    "desc": "失语症男孩意外获得穿墙能力，却在墙的另一端爱上了只存在于水泥夹缝中的幽灵女孩。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "京城大状师2000",
    "file": "movie-923.html",
    "cover": "./23.jpg",
    "year": "2000",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装, 悬疑, 律政",
    "tags": [
      "清末",
      "状师",
      "智斗"
    ],
    "desc": "1900年，北京城第一状师夏木，在八国联军入侵前夕，用唇枪舌剑周旋于洋人、朝廷和江湖之间。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "山上的西蒙",
    "file": "movie-924.html",
    "cover": "./24.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情、文艺、家庭",
    "tags": [
      "自闭症",
      "阿尔卑斯山",
      "父子关系",
      "自然疗愈"
    ],
    "desc": "患有自闭症的少年西蒙唯一的朋友是一台老式天气探测仪，直到一个躲避城市的家庭闯入了他寂静的山顶世界。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "终极战士：杀戮星球",
    "file": "movie-925.html",
    "cover": "./25.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 动作, 惊悚",
    "tags": [
      "外星猎人",
      "太空监狱",
      "血腥杀戮",
      "重启"
    ],
    "desc": "一名被判处死刑的士兵被投放到外星猎人的母星，却发现这个种族正在被更可怕的生物猎杀。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "恶之源",
    "file": "movie-926.html",
    "cover": "./26.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "犯罪 / 悬疑 / 惊悚",
    "tags": [
      "连环杀人",
      "双面人生",
      "警察",
      "反转"
    ],
    "desc": "模范刑警的双胞胎弟弟被怀疑是连环杀手，为证弟弟清白，他亲手撕开了自己完美的假面。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "浮士德",
    "file": "movie-927.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "奇幻、剧情、惊悚",
    "tags": [
      "魔鬼契约",
      "哲学",
      "现代改编",
      "黑科技"
    ],
    "desc": "一位潦倒的AI科学家将自己的灵魂卖给魔鬼，换取无限的算法，却发现自己成了监控全人类的帮凶。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "依赖药水活下去！",
    "file": "movie-928.html",
    "cover": "./28.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻 / 悬疑 / 剧情",
    "tags": [
      "反乌托邦",
      "药物依赖",
      "阶层固化",
      "系统反抗",
      "黑色幽默"
    ],
    "desc": "在未来，平民每天必须喝下一瓶政府发放的“维生药水”，否则就会暴毙，而主角意外发现那是谎言。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "夜雨霏霏",
    "file": "movie-929.html",
    "cover": "./29.jpg",
    "year": "2024",
    "region": "中国内地 / 台湾",
    "type": "电影",
    "genre": "爱情 / 悬疑",
    "tags": [
      "雨夜",
      "替身",
      "文艺",
      "反转",
      "虐恋"
    ],
    "desc": "每个雨夜，他都会撑伞出现在同一盏路灯下，但他等的不是她，是她死去的双胞胎妹妹。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "铁证悬案第三季",
    "file": "movie-930.html",
    "cover": "./30.jpg",
    "year": "2005",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪，悬疑，剧情",
    "tags": [
      "冷案重启",
      "怀旧金曲",
      "人性救赎",
      "单元剧"
    ],
    "desc": "费城警探莉莉·拉什带领团队通过现代刑侦技术，揭开被封尘了数十年的冷案真相，为逝者昭雪。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "罗罗民宿",
    "file": "movie-931.html",
    "cover": "./31.jpg",
    "year": "2019",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "tags": [
      "民宿",
      "都市传说",
      "诅咒",
      "旅人",
      "轮回"
    ],
    "desc": "背包客住进清迈一家评分超高却永远有空房的民宿，入住当晚，他发现每一位房客都和自己长得一模一样。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "偷香圣手",
    "file": "movie-932.html",
    "cover": "./32.jpg",
    "year": "2025",
    "region": "中国 / 法国",
    "type": "剧集",
    "genre": "悬疑 / 爱情 / 犯罪",
    "tags": [
      "香水世家",
      "调香师",
      "艺术大盗",
      "跨国追爱"
    ],
    "desc": "白天他是行业顶尖的“盲嗅”调香师，夜晚他是专偷香奈儿、娇兰古董香水的雅贼，直到他要偷的保险柜里，藏着一具尸体。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "苏乞儿1993",
    "file": "movie-933.html",
    "cover": "./33.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作武侠",
    "tags": [
      "醉拳",
      "乞丐皇帝",
      "清末民初",
      "民族大义"
    ],
    "desc": "落魄少爷沦为乞丐，靠一套“醉梦罗汉拳”打上赌王擂台，只为夺回被洋人抢走的传国玉玺。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "教数学的体育老师",
    "file": "movie-934.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧，校园，励志",
    "tags": [
      "反差萌",
      "体育生教学",
      "快乐教育",
      "拯救差班",
      "青春热血"
    ],
    "desc": "四肢发达的体育老师被校长赶鸭子上架教数学，他用训练运动员的方式，带出了一群横扫奥赛的“特种兵”。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "我心遗留在马赛",
    "file": "movie-935.html",
    "cover": "./35.jpg",
    "year": "2016",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": [
      "法国",
      "异乡人",
      "回忆",
      "自我寻找",
      "伤感"
    ],
    "desc": "一位华裔女孩回到马赛处理母亲的后事，却意外重遇了少年时代那个改变她一生的法国男孩。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "唔够运",
    "file": "movie-936.html",
    "cover": "./36.jpg",
    "year": "2027",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 黑色幽默, 犯罪",
    "tags": [
      "草根",
      "乐透",
      "荒诞",
      "港味",
      "多线叙事"
    ],
    "desc": "茶餐厅伙计买的彩票中了头奖，但那张彩票被风吹进了全香港最脏的男公厕。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "处女泉",
    "file": "movie-937.html",
    "cover": "./37.jpg",
    "year": "2025",
    "region": "瑞典",
    "type": "电影",
    "genre": "剧情, 惊悚, 宗教",
    "tags": [
      "信仰",
      "复仇",
      "中世纪",
      "黑白",
      "人性"
    ],
    "desc": "中世纪农夫的女儿被牧羊人玷污杀害，泉水流出的不是圣水，而是父亲滴血的复仇。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "盲舞",
    "file": "movie-938.html",
    "cover": "./38.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 歌舞 / 励志",
    "tags": [
      "盲人",
      "街舞",
      "触觉舞蹈",
      "梦想"
    ],
    "desc": "一个失明少年不相信视觉，他坚信通过地板震动的传导，他能跳出这世上最自由的街舞。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "情逢敌手国语",
    "file": "movie-939.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "台湾",
    "type": "剧集",
    "genre": "爱情/喜剧",
    "tags": [
      "职场恋爱",
      "竞品公司",
      "欢喜冤家",
      "轻熟男女"
    ],
    "desc": "两家死对头广告公司的创意总监，白天竞标时互相拆台，晚上却在同一个相亲APP上配对了。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "杜宾专员：一个悲痛的家庭",
    "file": "movie-940.html",
    "cover": "./40.jpg",
    "year": "2019",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 犯罪, 家庭",
    "tags": [
      "私刑",
      "丧子",
      "法国小镇",
      "悬疑调查",
      "伦理"
    ],
    "desc": "退休警校教官的儿子死于一场校园欺凌，他利用手中所有“问题少年”档案，展开一场精准的降维报复。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "从前，有个好莱坞",
    "file": "movie-941.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 历史 / 悬疑",
    "tags": [
      "好莱坞黄金时代",
      "双男主",
      "迷影",
      "谋杀案"
    ],
    "desc": "1969年的好莱坞，过气男星和替身搭档意外卷入一桩改变电影史的未解悬案。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "给我爱过的前任们",
    "file": "movie-942.html",
    "cover": "./42.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情、奇幻、治愈",
    "tags": [
      "前任召唤",
      "时空回溯",
      "情感成长",
      "都市男女",
      "自我和解"
    ],
    "desc": "婚礼前夜，准新娘收到一本神秘相册，打开后每一页都会将她传送回与那位前任分手的当天。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "自由门神",
    "file": "movie-943.html",
    "cover": "./43.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "奇幻 / 剧情",
    "tags": [
      "庙宇",
      "门神",
      "社畜",
      "神话新编"
    ],
    "desc": "门神郁垒因业绩垫底被贬下凡，附身在一个便利店夜班社畜身上，两人共用一具身体。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "留爱",
    "file": "movie-944.html",
    "cover": "./44.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": [
      "阿尔茨海默症",
      "亲情",
      "催泪"
    ],
    "desc": "叛逆少女被迫照顾患失智症的奶奶，却发现奶奶的胡言乱语里，藏着整个家族被掩埋的秘密。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "疯狂巨齿鲨",
    "file": "movie-945.html",
    "cover": "./45.jpg",
    "year": "2026",
    "region": "美国 / 中国大陆",
    "type": "电影",
    "genre": "动作, 科幻, 惊悚",
    "tags": [
      "深海怪兽",
      "基因改造",
      "大场面",
      "爆米花"
    ],
    "desc": "失控的基因改造巨齿鲨游进黄海，一支由退伍老兵和海洋学家组成的杂牌军必须将它击毙。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "木兰：横空出世",
    "file": "movie-946.html",
    "cover": "./46.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画, 动作, 战争",
    "tags": [
      "女英雄",
      "国风美学",
      "热血",
      "史诗",
      "原创改编"
    ],
    "desc": "在替父从军之前，少女木兰必须先在刺客组织的追杀中活下来。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "爆裂鼓手",
    "file": "movie-947.html",
    "cover": "./47.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 音乐",
    "tags": [
      "疯狂",
      "魔鬼导师",
      "爵士乐",
      "励志",
      "暗黑"
    ],
    "desc": "一个想成为顶尖爵士鼓手的少年，被一位魔鬼导师逼入肉体与精神的双重绝境。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "更换心脏：改变世界的手术",
    "file": "movie-948.html",
    "cover": "./48.jpg",
    "year": "2027",
    "region": "德国",
    "type": "剧集",
    "genre": "科幻 / 医疗",
    "tags": [
      "伦理",
      "器官黑市",
      "永生",
      "政治惊悚"
    ],
    "desc": "第一例人类换心手术成功，但医生发现：病人的性格、记忆甚至信仰，都变成了捐赠者的。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "妈妈（1990年电影）",
    "file": "movie-949.html",
    "cover": "./49.jpg",
    "year": "1990",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，家庭",
    "tags": [
      "亲情催泪",
      "智障儿童",
      "母爱伟大"
    ],
    "desc": "一个单身母亲独自抚养智障儿子长大，当自己患癌后，她开始教儿子如何在没有妈妈的世界活下去。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "天堂在人间",
    "file": "movie-950.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "法国 / 德国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "生死",
      "社区",
      "治愈"
    ],
    "desc": "一个癌症末期的老妇人，买下一栋公寓楼，要把住在这里的孤独陌生人改造成一个“临时家庭”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "银河女战士",
    "file": "movie-951.html",
    "cover": "./51.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "科幻，动作，冒险",
    "tags": [
      "女战士",
      "太空歌剧",
      "机甲",
      "宇宙战争",
      "姐妹情"
    ],
    "desc": "宇宙纪元2157年，三名来自不同星球的女性战士被迫组队，驾驶着老旧机甲，对抗一个企图毁灭银河系的AI帝国。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "千禧风云",
    "file": "movie-952.html",
    "cover": "./52.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情, 犯罪",
    "tags": [
      "千禧年",
      "时代变迁",
      "卧底",
      "兄弟情"
    ],
    "desc": "2000年的香港，一对从小长大的兄弟无意中踩入黑白两道，一个成了卧底警察，一个成了黑帮新星。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "小李广花荣",
    "file": "movie-953.html",
    "cover": "./53.jpg",
    "year": "2010",
    "region": "中国",
    "type": "电影",
    "genre": "古装, 动作, 传记",
    "tags": [
      "水浒",
      "箭术",
      "忠义",
      "兄弟情"
    ],
    "desc": "梁山第一神箭手花荣为救义兄宋江，单枪匹马闯入方腊军中，以一敌千射落帅旗。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "土星之旅",
    "file": "movie-954.html",
    "cover": "./54.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "科幻 / 家庭",
    "tags": [
      "航天",
      "父子",
      "全息通讯",
      "牺牲"
    ],
    "desc": "宇航员父亲在飞往土星的途中失联，儿子用二十年时间建造了一艘飞船，去光年之外找他。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "腰间持枪",
    "file": "movie-955.html",
    "cover": "./55.jpg",
    "year": "2023",
    "region": "美国 / 加拿大",
    "type": "电影",
    "genre": "动作 / 喜剧",
    "tags": [
      "暴力美学",
      "双枪",
      "网络直播",
      "废柴逆袭"
    ],
    "desc": "一个沉迷网络骂战的键盘侠，醒来后双手被焊上了真枪，必须直播杀人才能解锁。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "活着",
    "file": "movie-956.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 历史",
    "tags": [
      "年代剧",
      "平民史诗",
      "命运",
      "坚韧",
      "现实主义"
    ],
    "desc": "从三年困难时期到改革开放，一个北方农村家庭六代人的“活着”，不是为了改变时代，而是为了不被时代改变。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "地震鸟",
    "file": "movie-957.html",
    "cover": "./57.jpg",
    "year": "2023",
    "region": "日本 / 中国台湾",
    "type": "电影",
    "genre": "灾难 / 奇幻 / 剧情",
    "tags": [
      "地震前兆",
      "鸟类异常",
      "失语症少女",
      "末日寓言",
      "跨国合拍"
    ],
    "desc": "东京大地震前七天，全市的乌鸦突然不叫了，只有一位失语症少女能听到它们预言的震中坐标。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "春光之境",
    "file": "movie-958.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "爱情文艺",
    "tags": [
      "田园",
      "同性",
      "克制的浪漫",
      "治愈"
    ],
    "desc": "两个失去挚爱的男人，在英格兰乡下的牧场上，用沉默和泥土疗愈彼此。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "刑侦现场",
    "file": "movie-959.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "本格推理",
      "法医",
      "单元剧",
      "硬汉派"
    ],
    "desc": "一个患有超忆症的天才法医，一个不信口供的刑警队长，联手破解“完美犯罪”。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "惊爆黑洞",
    "file": "movie-960.html",
    "cover": "./60.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 惊悚",
    "tags": [
      "太空",
      "未知物质",
      "生存"
    ],
    "desc": "深空采矿队在黑洞边缘带回一块“寂静矿石”，随后飞船里开始有人凭空消失。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "忘记你，记得爱情",
    "file": "movie-961.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 喜剧, 奇幻",
    "tags": [
      "双向遗忘",
      "契约婚姻",
      "先婚后爱",
      "爆笑",
      "治愈"
    ],
    "desc": "一对欢喜冤家因车祸同时失忆，醒来后看着对方都自称“这是我未婚夫/妻”。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "情网",
    "file": "movie-962.html",
    "cover": "./62.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市、情感",
    "tags": [
      "杀猪盘",
      "网络诈骗",
      "女性觉醒",
      "反诈"
    ],
    "desc": "离婚女人在网上遇到了完美恋人，投入全部身家后才发现，对面是一个有组织有剧本的杀猪盘团伙。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "缔创学校",
    "file": "movie-963.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情 / 校园",
    "tags": [
      "创业",
      "天才高中生",
      "竞争",
      "现实主义",
      "教育"
    ],
    "desc": "一群拥有奇思妙想的高中生被强制送进“缔创学校”，必须在一年内做出估值千万的产品才能毕业。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "疯狂烤肉会",
    "file": "movie-964.html",
    "cover": "./64.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "黑色喜剧 / 悬疑 / 剧情",
    "tags": [
      "家庭聚餐",
      "全员恶人",
      "反转不断",
      "黑色幽默"
    ],
    "desc": "一场家庭烤肉聚会，烤盘上的不是肉，而是每个人想杀的那个人的“替身”。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "改变美国的一百零二分钟",
    "file": "movie-965.html",
    "cover": "./65.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情， 历史",
    "tags": [
      "911事件",
      "纪实",
      "群像",
      "社会切片"
    ],
    "desc": "用102分钟实时呈现2001年9月11日上午，从第一架飞机被劫持到双子塔南塔倒塌之间，美国发生的102个普通人的人生切片。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "如果你离我而去",
    "file": "movie-966.html",
    "cover": "./66.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 爱情",
    "tags": [
      "遗愿",
      "公路",
      "治愈",
      "生死"
    ],
    "desc": "身患绝症的妻子隐瞒病情，提出离婚，只为逼丈夫陪她完成最后一次蜜月旅行。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "杀人拼图",
    "file": "movie-967.html",
    "cover": "./67.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪，悬疑，惊悚",
    "tags": [
      "连环凶杀",
      "拼图线索",
      "警察堕落",
      "记忆碎片"
    ],
    "desc": "一名失忆的刑警醒来时发现满手是血，身边躺着一具尸体，而他的房间里散落着1000块拼图。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "手套",
    "file": "movie-968.html",
    "cover": "./68.jpg",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情 / 运动 / 传记",
    "tags": [
      "拳击",
      "残障",
      "师徒",
      "逆袭"
    ],
    "desc": "失去左手的青年想成为拳王，唯一愿意教他的是一位因打死对手而坐牢二十年的过气教练。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "侏儒怪",
    "file": "movie-969.html",
    "cover": "./69.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "奇幻/惊悚",
    "tags": [
      "格林童话改编",
      "暗黑风格",
      "代价契约"
    ],
    "desc": "那个能把稻草纺成金子的侏儒怪在现代复活，但这次他不要孩子，他要的是人的梦境作为货币。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "群山",
    "file": "movie-970.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "山区",
      "支教",
      "姐妹",
      "留守",
      "成长"
    ],
    "desc": "在大山深处的教学点，一个只读过小学的姐姐，为了让妹妹走出大山，把自己逼成了“全科老师”。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "古墓迷途",
    "file": "movie-971.html",
    "cover": "./71.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "冒险， 奇幻",
    "tags": [
      "盗墓",
      "穿越",
      "历史",
      "考古"
    ],
    "desc": "一伙盗墓贼在明代古墓中触发时空裂缝，醒来后发现自己成了墓主人的守陵士兵。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "倒霉爱神",
    "file": "movie-972.html",
    "cover": "./72.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情 / 奇幻 / 喜剧",
    "tags": [
      "运势转移",
      "契约恋爱",
      "便利店打工",
      "搞笑"
    ],
    "desc": "全韩国最倒霉的女人碰上了全韩国最幸运的男人，她发现每次亲吻都会把霉运传给他。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "与死者谈判",
    "file": "movie-973.html",
    "cover": "./73.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 奇幻",
    "tags": [
      "灵媒犯罪",
      "阴阳合同",
      "伦理困局"
    ],
    "desc": "为了救回被绑架的女儿，一位女灵媒不得不与连环杀手的怨灵做交易，进入亡者监狱。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "猎魔士：狼之恶梦",
    "file": "movie-974.html",
    "cover": "./74.jpg",
    "year": "2021",
    "region": "波兰 / 美国",
    "type": "动画",
    "genre": "奇幻 / 动作 / 动画",
    "tags": [
      "猎魔士",
      "前传",
      "杰洛特老师",
      "悲剧英雄"
    ],
    "desc": "杰洛特的导师维瑟米尔年轻时，为拯救猎魔士城堡而释放了一头无法控制的远古魔物。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "九龙城寨之围城",
    "file": "movie-975.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "tags": [
      "九龙城寨",
      "黑帮",
      "末日围城"
    ],
    "desc": "警察围住城寨48小时，寨内三股势力为了争一条出水的暗渠，开始自相残杀。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "特区",
    "file": "movie-976.html",
    "cover": "./76.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "警匪, 政治, 悬疑",
    "tags": [
      "国安题材",
      "跨境犯罪",
      "金融暗战",
      "卧底",
      "高智商对决"
    ],
    "desc": "国安新人潜入某国际金融特区，发现一起表面是洗钱、实则分裂国家的惊天阴谋。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "芒果新生班·搭档季",
    "file": "movie-977.html",
    "cover": "./77.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 爱情 / 校园",
    "tags": [
      "偶像",
      "表演学院",
      "配对",
      "青春"
    ],
    "desc": "艺术院校里，一群天赋各异的表演系新生，通过一次次搭档，寻找着演技与真爱。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "新无仁义之战",
    "file": "movie-978.html",
    "cover": "./78.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "犯罪, 动作, 剧情",
    "tags": [
      "黑帮",
      "翻拍",
      "现代",
      "暴力美学"
    ],
    "desc": "现代东京黑道不再砍人，改做金融诈骗和直播带货，但内斗起来比用刀还狠。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "德州骑警",
    "file": "movie-979.html",
    "cover": "./79.jpg",
    "year": "1942",
    "region": "美国",
    "type": "电影",
    "genre": "西部 / 动作",
    "tags": [
      "经典西部",
      "骑警",
      "土匪",
      "枪战",
      "黑白片"
    ],
    "desc": "一名德州骑警假扮土匪潜入帮派，却发现土匪头子是他失散二十年的亲哥哥。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "翡翠凤凰",
    "file": "movie-980.html",
    "cover": "./80.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 冒险, 犯罪",
    "tags": [
      "文物走私",
      "云南风情",
      "复仇",
      "硬汉"
    ],
    "desc": "为了找回父亲用命护住的翡翠凤凰，退役侦察兵在缅北丛林设下连环杀局。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "决战2025",
    "file": "movie-981.html",
    "cover": "./81.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻动作",
    "tags": [
      "近未来",
      "机甲大战",
      "阴谋论",
      "孤胆英雄"
    ],
    "desc": "2025年，全甲格斗大赛沦为资本阴谋，底层拳手被迫迎战失控的AI军事机甲。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "药师寺凉子怪奇事件簿",
    "file": "movie-982.html",
    "cover": "./82.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻, 悬疑, 动作",
    "tags": [
      "职场女强",
      "都市传说",
      "超自然",
      "搭档破案"
    ],
    "desc": "东大毕业、警视厅特聘的“驱魔千金”药师寺凉子，每解决一起怪奇案件，就会对搭档泉田准一郎说：“这只是科学暂时无法解释的必然现象。”",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "安娜",
    "file": "movie-983.html",
    "cover": "./83.jpg",
    "year": "2025",
    "region": "法国 / 德国",
    "type": "电影",
    "genre": "剧情, 惊悚, 传记",
    "tags": [
      "女杀手",
      "整容",
      "阶层跨越",
      "复仇"
    ],
    "desc": "丑陋的清洁工安娜杀死女明星后整容成她的脸，从此用别人的美貌复仇，也为美貌所困。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "汉娜",
    "file": "movie-984.html",
    "cover": "./84.jpg",
    "year": "2026",
    "region": "德国",
    "type": "电影",
    "genre": "剧情, 战争",
    "tags": [
      "二战",
      "反思",
      "母子关系"
    ],
    "desc": "一个八岁的德国女孩，发现一直教导她“正义”的母亲，竟然是集中营的女看守。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "罪爱妳",
    "file": "movie-985.html",
    "cover": "./85.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 犯罪 / 悬疑",
    "tags": [
      "替罪",
      "病娇",
      "极致虐恋"
    ],
    "desc": "为了保护前途无量的律师男友，患有情感障碍的女友替他顶下了杀人罪名，却在狱中收到了他的婚礼请柬。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "穴居男",
    "file": "movie-986.html",
    "cover": "./86.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "tags": [
      "原始人穿越",
      "现代碰撞",
      "爱情喜剧"
    ],
    "desc": "一个三万年前的原始人被冰封后解冻，在现代社会当网红，并爱上女人类学家。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "冬后是樱花",
    "file": "movie-987.html",
    "cover": "./87.jpg",
    "year": "2019",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情，同性，青春",
    "tags": [
      "校园",
      "BL",
      "治愈"
    ],
    "desc": "母亲去世后寄人篱下的男孩，与收养他的叔叔的儿子之间，从敌意慢慢变成了不敢说出口的爱。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "老练律师第二季",
    "file": "movie-988.html",
    "cover": "./88.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "律政剧情",
    "tags": [
      "腹黑",
      "高智商",
      "女性",
      "商战"
    ],
    "desc": "在经历了第一季的洗礼后，女律师凯瑟琳愈发老练，这一次她将利用法律漏洞，亲手肢解那个曾毁掉她家庭的跨国集团。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "提防小手",
    "file": "movie-989.html",
    "cover": "./89.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 喜剧 / 犯罪",
    "tags": [
      "扒手",
      "无厘头",
      "黄金大劫案"
    ],
    "desc": "千门世家的小儿子只想当警察，结果全家族联手设局，逼他盗回失落的金佛。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "此恨绵绵",
    "file": "movie-990.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 悬疑",
    "tags": [
      "复仇",
      "失忆",
      "替身",
      "豪门",
      "虐恋"
    ],
    "desc": "豪门千金车祸失忆，醒来后未婚夫对她百般温柔，她却梦见自己杀了他的白月光。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "天劫余生",
    "file": "movie-991.html",
    "cover": "./91.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "灾难 / 生存",
    "tags": [
      "末日求生",
      "极地严寒",
      "道德困境",
      "绝望与希望"
    ],
    "desc": "一场突如其来的地磁暴摧毁全球电网，一群被困在南极科考站的科学家必须在天劫降临前找到最后的生路。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "世界尽头",
    "file": "movie-992.html",
    "cover": "./92.jpg",
    "year": "2023",
    "region": "阿根廷",
    "type": "电影",
    "genre": "剧情， 奇幻， 冒险",
    "tags": [
      "世界尽头",
      "灯塔",
      "魔幻现实主义",
      "公路电影",
      "救赎"
    ],
    "desc": "在阿根廷乌斯怀亚的灯塔里，有一个能把人“最遗憾的一天”重播一遍的守塔人，每天都有绝望者前来观看。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "十一人贼军",
    "file": "movie-993.html",
    "cover": "./93.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 犯罪 / 喜剧",
    "tags": [
      "盗贼",
      "高智商犯罪",
      "团队作战",
      "反转"
    ],
    "desc": "十一人盗贼团潜入戒备森严的加密货币金库，却发现里面早就被另一伙人洗劫一空。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "爱情跳棋",
    "file": "movie-994.html",
    "cover": "./94.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "tags": [
      "换妻",
      "黑色幽默",
      "多线叙事"
    ],
    "desc": "四对夫妻参加一场性爱派对，却因跳棋游戏规则打乱了所有伴侣配对。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "表姐，妳好嘢！续集",
    "file": "movie-995.html",
    "cover": "./95.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "tags": [
      "大陆亲戚",
      "文化冲突",
      "警匪乌龙"
    ],
    "desc": "表姐从大陆来香港旅游，顺手帮飞虎队破了一桩国际军火案。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "摩斯探长第一季",
    "file": "movie-996.html",
    "cover": "./96.jpg",
    "year": "1987",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "英式推理",
      "古典探案",
      "牛津",
      "孤独天才",
      "慢节奏"
    ],
    "desc": "在牛津大学城的古老石墙背后，摩斯探长用他暴烈的孤独和天才头脑破解每一桩优雅的谋杀。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "老虎",
    "file": "movie-997.html",
    "cover": "./97.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "剧情 / 冒险",
    "tags": [
      "生态",
      "复仇",
      "部落",
      "震撼"
    ],
    "desc": "一只被偷猎者杀死幼崽的母虎，学会了辨认枪声、陷阱和人类气味，然后开始了精密的复仇。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "心碎",
    "file": "movie-998.html",
    "cover": "./98.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "tags": [
      "文艺",
      "失恋",
      "疗愈",
      "巴黎"
    ],
    "desc": "她心脏上真的出现了一道裂痕，医生说这叫“心碎综合征”，而她必须再次去爱才能愈合。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "贤婿",
    "file": "movie-999.html",
    "cover": "./99.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭 / 喜剧 / 剧情",
    "tags": [
      "赘婿",
      "逆袭",
      "温情",
      "商战"
    ],
    "desc": "当了五年受气包的上门女婿，在发现自己竟是首富流落在外的长子后，选择继续装穷。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "赎罪之路",
    "file": "movie-1000.html",
    "cover": "./100.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "犯罪、剧情、人性",
    "tags": [
      "顶罪",
      "兄弟情",
      "刑满释放",
      "救赎"
    ],
    "desc": "替富二代顶罪入狱十年，出狱后他发现兄弟成了市长，而当年的真凶正朝他未婚妻伸出手。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "加菲猫家族",
    "file": "movie-1001.html",
    "cover": "./101.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 动画, 家庭",
    "tags": [
      "猫",
      "搞笑",
      "冒险",
      "亲情",
      "美食"
    ],
    "desc": "加菲猫意外得知自己是皇室御猫的后代，被迫离开沙发，开启了一场欧洲寻亲之旅。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "理想国",
    "file": "movie-1002.html",
    "cover": "./102.jpg",
    "year": "2029",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 政治惊悚",
    "tags": [
      "乌托邦",
      "AI治理",
      "思想实验",
      "哲学辩论"
    ],
    "desc": "一个由AI完美治理的城市，唯一的犯罪是“怀疑”。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "你要幸福",
    "file": "movie-1003.html",
    "cover": "./103.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 都市, 喜剧",
    "tags": [
      "大龄剩女",
      "契约结婚",
      "相互救赎",
      "治愈"
    ],
    "desc": "为了应付催婚，大龄女博士与外卖小哥签订“恋爱契约”，结果假戏真做。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "泰皇传奇四部曲",
    "file": "movie-1004.html",
    "cover": "./104.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "剧集",
    "genre": "古装, 历史, 动作",
    "tags": [
      "史诗",
      "权力",
      "战争",
      "佛教",
      "宫廷"
    ],
    "desc": "从流亡王子到一代明君，四部曲揭开古代暹罗最具争议君主长达五十年的铁血统治。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "破碎的天使",
    "file": "movie-1005.html",
    "cover": "./105.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "tags": [
      "心理创伤",
      "家庭秘密",
      "暗黑童话"
    ],
    "desc": "女儿失踪七年后，父亲在一本破碎的童话绘本里，发现了令人胆寒的真相。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "捕快血之刃",
    "file": "movie-1006.html",
    "cover": "./106.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠 / 动作",
    "tags": [
      "锦衣卫",
      "灭门",
      "双面卧底",
      "冷兵器"
    ],
    "desc": "锦衣卫捕快被诬灭门，带着仇人之女踏上血腥复仇路。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "无负今日",
    "file": "movie-1007.html",
    "cover": "./107.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 励志",
    "tags": [
      "时间循环",
      "父女和解",
      "小镇青年",
      "成长",
      "温情"
    ],
    "desc": "一个总在后悔的废柴青年反复经历同一天，才发现改变命运的关键是修补与父亲的关系。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "南北有情天",
    "file": "movie-1008.html",
    "cover": "./108.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 家庭",
    "tags": [
      "地域差异",
      "婚姻",
      "婆媳",
      "轻喜剧",
      "文化冲突"
    ],
    "desc": "东北大妞嫁给了上海精致男，新婚夜因为“洗澡该不该天天洗”引爆了两个家庭的大战。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "疯狂趴到家",
    "file": "movie-1009.html",
    "cover": "./109.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 青春",
    "tags": [
      "派对喜剧",
      "乌龙事件",
      "友情考验"
    ],
    "desc": "三个社恐高中生想举办史上最酷派对，结果请错了嘉宾，来了一整船俄罗斯水手和一队老年合唱团。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "兔子共和国",
    "file": "movie-1010.html",
    "cover": "./110.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "动画/冒险",
    "tags": [
      "动物",
      "政治寓言",
      "史诗"
    ],
    "desc": "一群被人类和天敌驱赶的野兔穿越千里绝境，在废墟之上建立了一个前所未有的动物共和国。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "知情人",
    "file": "movie-1011.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "动作 / 犯罪",
    "tags": [
      "卧底",
      "监狱",
      "黑帮",
      "复仇"
    ],
    "desc": "因内部检举被判入狱的精英警察，必须成为监狱里的“黑道皇帝”才能活着出去复仇。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "同路前行",
    "file": "movie-1012.html",
    "cover": "./112.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "公路剧情",
    "tags": [
      "朝圣",
      "治愈",
      "陌生人",
      "徒步"
    ],
    "desc": "五个因不同原因踏上法国之路的陌生人，在八百公里徒步中彼此撕开伤口又互相缝合。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "偷破天际线",
    "file": "movie-1013.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作犯罪",
    "tags": [
      "盗贼",
      "高空",
      "团队",
      "反转"
    ],
    "desc": "一群恐高症盗贼接了一个不可能的任务：从一架正在空中加油的波音客机上偷走价值十亿的芯片。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "三十多岁、单身、精彩",
    "file": "movie-1014.html",
    "cover": "./114.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市 / 爱情 / 喜剧",
    "tags": [
      "大龄单身",
      "女性群像",
      "治愈"
    ],
    "desc": "三个三十多岁单身的闺蜜发誓不婚不育，却在同一年同时遇到了让她们动摇的真命天子。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "火球：来自黑暗世界的访客",
    "file": "movie-1015.html",
    "cover": "./115.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 惊悚",
    "tags": [
      "外星入侵",
      "未知病毒",
      "末世求生"
    ],
    "desc": "一颗火球坠落后，小镇居民开始异变，唯有盲女能“看见”入侵者的真面目。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "隋唐英雄传",
    "file": "movie-1016.html",
    "cover": "./116.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画",
    "genre": "历史，战争，动作",
    "tags": [
      "评书改编",
      "少年英雄",
      "群像"
    ],
    "desc": "少年秦琼背负家族血仇，在瓦岗寨聚义，与一众兄弟推翻暴隋，见证大唐的崛起。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "联合王国国语",
    "file": "movie-1017.html",
    "cover": "./117.jpg",
    "year": "2023",
    "region": "南非 / 英国",
    "type": "电影",
    "genre": "剧情 / 历史 / 传记",
    "tags": [
      "种族隔离",
      "皇室",
      "爱情",
      "政治",
      "反抗"
    ],
    "desc": "讲述了上世纪40年代，博茨瓦纳国王迎娶英国白人女性，引发两国政治地震的真实故事。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "回旋镖",
    "file": "movie-1018.html",
    "cover": "./118.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 犯罪",
    "tags": [
      "复仇",
      "时间循环",
      "反转",
      "因果报应"
    ],
    "desc": "黑帮老大被最信任的手下暗算，濒死时触发时间回旋，每次复活都更靠近背叛的源头。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "金三角风云",
    "file": "movie-1019.html",
    "cover": "./119.jpg",
    "year": "2026",
    "region": "中国大陆 / 泰国",
    "type": "剧集",
    "genre": "动作, 犯罪, 缉毒",
    "tags": [
      "跨境行动",
      "卧底三代",
      "毒枭家族",
      "忠诚与背叛"
    ],
    "desc": "三代缉毒警潜伏金三角同一个毒枭家族，爷爷当管家、爸爸成女婿、孙子当保镖，他们都不知道彼此身份。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "仇恨谜林",
    "file": "movie-1020.html",
    "cover": "./120.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 犯罪, 惊悚",
    "tags": [
      "复仇",
      "森林",
      "心理战",
      "人性"
    ],
    "desc": "七个互不相识的人被扔进一片死亡森林，只有让仇人亲手杀死自己，才能离开。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "色欲花美男",
    "file": "movie-1021.html",
    "cover": "./121.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情 / 奇幻",
    "tags": [
      "花妖",
      "禁忌恋",
      "治愈",
      "高颜值"
    ],
    "desc": "一个能读取人类欲望的花妖，在首尔的夜晚开了一家只营业至凌晨的花店，客人只能拿记忆换花。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "爱情编年史",
    "file": "movie-1022.html",
    "cover": "./122.jpg",
    "year": "2018",
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "tags": [
      "非线性叙事",
      "巴黎",
      "错过的爱",
      "诗意"
    ],
    "desc": "一对恋人在四个不同年代相遇四次，但每一次都因为不同的原因没能走到最后。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "白狗",
    "file": "movie-1023.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "剧情, 心理, 惊悚",
    "tags": [
      "人性隐喻",
      "种族偏见",
      "驯化与野性",
      "女性觉醒"
    ],
    "desc": "一名训犬师收养了一只浑身雪白的流浪狗，却发现它的温顺背后，曾是被极端思想训练成只攻击黑人的杀人机器。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "硬汉龙虎斗",
    "file": "movie-1024.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 犯罪, 喜剧",
    "tags": [
      "东北",
      "假钞",
      "下岗工人",
      "拳拳到肉"
    ],
    "desc": "东北老工业区，一个下岗的炼钢工人为了给女儿筹钱治病，单枪匹马挑战盘踞十年的假钞集团。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "巴黎时尚女魔头",
    "file": "movie-1025.html",
    "cover": "./125.jpg",
    "year": "2015",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "tags": [
      "时尚圈",
      "女强人",
      "反套路",
      "职场",
      "法式幽默"
    ],
    "desc": "以毒舌著称的时尚主编意外失忆后变成“老好人”，整个巴黎时尚界因此崩溃。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "家计会实况剧粤语",
    "file": "movie-1026.html",
    "cover": "./126.jpg",
    "year": "1989",
    "region": "中国香港",
    "type": "剧集",
    "genre": "家庭伦理，社会写实",
    "tags": [
      "市井烟火",
      "生活博弈",
      "粤语原声"
    ],
    "desc": "七口人挤在三十平米的公屋里，一本账簿掀开了家族隐瞒十年的惊天秘密。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "伍六七之暗影宿命",
    "file": "movie-1027.html",
    "cover": "./127.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "热血, 战斗, 奇幻",
    "tags": [
      "刺客",
      "玄武国",
      "宿命对决",
      "国漫巅峰"
    ],
    "desc": "伍六七为了拯救小鸡岛，不得不重新拿起魔刀千刃，直闯暗影刺客联盟总部。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "好莱坞，我爱你",
    "file": "movie-1028.html",
    "cover": "./128.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧",
    "tags": [
      "独立电影",
      "迷影",
      "荒诞",
      "黑色幽默",
      "一夜"
    ],
    "desc": "一个想自杀的编剧在好莱坞大道上被一个想成名的妓女救了，两人决定在日出前拍出一部能得奥斯卡的“烂片”。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "爱笑种梦室之龙在江湖",
    "file": "movie-1029.html",
    "cover": "./129.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧、奇幻",
    "tags": [
      "梦境",
      "江湖",
      "致敬"
    ],
    "desc": "三个小混混开了一家“种梦室”，让客人付费体验当武侠主角的幻觉，直到一位真大佬上门要买断他们的梦境。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "巴黎皇帝",
    "file": "movie-1030.html",
    "cover": "./130.jpg",
    "year": "2018",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 历史 / 传记",
    "tags": [
      "拿破仑",
      "传记史诗",
      "历史还原",
      "权力悲歌"
    ],
    "desc": "从科西嘉岛的无名小卒到法兰西皇帝，拿破仑用铁与火写下一段传奇，也为自己掘好了坟墓。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "南太平洋之旅",
    "file": "movie-1031.html",
    "cover": "./131.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "纪录片，冒险，家庭",
    "tags": [
      "海洋",
      "生态",
      "治愈"
    ],
    "desc": "一只刚成年的绿海龟，跟随洋流横跨南太平洋，寻找传说中的繁殖地。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "夜幕女王",
    "file": "movie-1032.html",
    "cover": "./132.jpg",
    "year": "2023",
    "region": "瑞典",
    "type": "剧集",
    "genre": "剧情， 惊悚",
    "tags": [
      "女性复仇",
      "北欧",
      "noir",
      "政治阴谋"
    ],
    "desc": "北欧第一位女首相在就职夜收到一个U盘，里面是她丈夫与敌对党魁的交易录像，而她不认识丈夫了。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "冒牌教练",
    "file": "movie-1033.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧运动",
    "tags": [
      "乌龙事件",
      "逆袭",
      "足球梦想"
    ],
    "desc": "一个只会嘴炮的足球解说员，被债主误当成新聘请的魔鬼教头，扔进一支濒临解散的中学女足队，却阴差阳错踢进了全国大赛。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "日常～恋之声～",
    "file": "movie-1034.html",
    "cover": "./134.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情， 日常， 音乐",
    "tags": [
      "声优职场",
      "电台恋爱",
      "生活流",
      "治愈"
    ],
    "desc": "一个过气声优和一个新人电台导播，在深夜电台的声波中，通过角色配音谈了一场无人知晓的恋爱。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "爆谷一周",
    "file": "movie-1035.html",
    "cover": "./135.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧 / 生活",
    "tags": [
      "家庭经营",
      "老式爆米花机",
      "三代同堂",
      "街坊情",
      "港味"
    ],
    "desc": "深水埗一家濒临倒闭的老式爆谷店，老板娘用一周时间直播卖爆谷，意外引爆全港怀旧潮。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "铁蹄慈泪",
    "file": "movie-1036.html",
    "cover": "./136.jpg",
    "year": "2024",
    "region": "蒙古",
    "type": "电影",
    "genre": "剧情, 战争",
    "tags": [
      "草原",
      "战马",
      "父子",
      "反战"
    ],
    "desc": "蒙古骑兵的父亲被日军杀害，儿子却阴差阳错地救了一匹受伤的日军军马。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "夏末初见",
    "file": "movie-1037.html",
    "cover": "./137.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情，青春",
    "tags": [
      "夏日",
      "遗憾",
      "清新",
      "校园",
      "暗恋"
    ],
    "desc": "高考结束那天，女孩在教室黑板上写下“我喜欢你”，但男孩永远没看到，因为第二天教室就拆了。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "民族自由魂",
    "file": "movie-1038.html",
    "cover": "./138.jpg",
    "year": "2021",
    "region": "波兰",
    "type": "电影",
    "genre": "历史、传记",
    "tags": [
      "抗争",
      "知识分子",
      "黑白摄影",
      "诗意"
    ],
    "desc": "一位民族诗人用文字点燃十九世纪的地下抵抗运动，最终在绞刑架上唱完最后一首诗。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "商谍",
    "file": "movie-1039.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑, 商战, 犯罪",
    "tags": [
      "商业间谍",
      "职场",
      "博弈",
      "智商在线"
    ],
    "desc": "为了替父报仇，顶级商业间谍潜入对手公司，却发现仇人也在培养一支“反间谍”队伍来抓她。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "龙门飞甲纪录片",
    "file": "movie-1040.html",
    "cover": "./140.jpg",
    "year": "2011",
    "region": "中国大陆",
    "type": "纪录片",
    "genre": "纪录 / 幕后",
    "tags": [
      "徐克",
      "武侠",
      "3D",
      "拍摄花絮"
    ],
    "desc": "揭秘徐克如何用3D技术重塑华语武侠片，从沙漠实拍到绿幕特效。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "荡漾春心",
    "file": "movie-1041.html",
    "cover": "./141.jpg",
    "year": "1996",
    "region": "中国香港",
    "type": "电影",
    "genre": "情色 / 爱情",
    "tags": [
      "港产艳情",
      "三角恋",
      "都市",
      "欲望"
    ],
    "desc": "富家千金为了报复未婚夫，勾引了未婚夫失散多年的亲弟弟，却不知道兄弟俩有一个共同的秘密。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "德古拉之夜",
    "file": "movie-1042.html",
    "cover": "./142.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 奇幻",
    "tags": [
      "吸血鬼",
      "哥特",
      "复古风",
      "封闭空间"
    ],
    "desc": "七个陌生人受邀参加古堡晚宴，午夜钟声敲响时，主人说：我们中间有一个不是活人。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "白衣天使",
    "file": "movie-1043.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "医疗 / 职场 / 剧情",
    "tags": [
      "急诊室故事",
      "女性群像",
      "医患关系",
      "真实改编"
    ],
    "desc": "五个不同科室的护士在夜班急诊室相遇，用血肉之躯挡在死神和人间之间。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "我叫白小飞",
    "file": "movie-1044.html",
    "cover": "./144.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻, 搞笑, 丧尸",
    "tags": [
      "尸兄",
      "末日求生",
      "国漫"
    ],
    "desc": "屌丝青年白小飞刚失恋，世界就爆发了丧尸危机，前女友变成了尸王。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "心太羁",
    "file": "movie-1045.html",
    "cover": "./145.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 剧情",
    "tags": [
      "心理医生",
      "病患关系",
      "禁忌之恋",
      "道德困境"
    ],
    "desc": "一位心理医生爱上了自己的病人，而那个病人声称自己是未来世界的情感修复机器人。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "新干线惊爆倒数",
    "file": "movie-1046.html",
    "cover": "./146.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动作、惊悚、犯罪",
    "tags": [
      "高鐵炸彈",
      "限时救援",
      "封闭空间",
      "日本电影",
      "悬疑推理"
    ],
    "desc": "一列开往东京的新干线上被安放了定时炸弹，车速低于100公里就会爆炸。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "无言的旅程",
    "file": "movie-1047.html",
    "cover": "./147.jpg",
    "year": "2020",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 冒险 / 家庭",
    "tags": [
      "失语症",
      "徒步",
      "朝圣",
      "父子",
      "治愈"
    ],
    "desc": "一场车祸让父亲失语，儿子开车带他走上法国之路，用沉默进行最后的对话。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "旗飏琉璜岛",
    "file": "movie-1048.html",
    "cover": "./148.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "历史, 战争, 剧情",
    "tags": [
      "二战",
      "硫磺岛",
      "人性反思"
    ],
    "desc": "一张广为人知的胜利照片背后，是另一位无名士兵拼死护旗、最终被历史遗忘的悲壮一生。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "我的家是科帕卡巴纳",
    "file": "movie-1049.html",
    "cover": "./149.jpg",
    "year": "2021",
    "region": "巴西",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "贫民窟",
      "足球",
      "梦想",
      "拆迁"
    ],
    "desc": "科帕卡巴纳贫民窟被通知拆迁，一个盲人老奶奶通过她的“声音地图”，带领邻居保卫家园。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "病菌侵蚀",
    "file": "movie-1050.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "韩国 / 美国",
    "type": "电影",
    "genre": "科幻、灾难、惊悚",
    "tags": [
      "病毒",
      "丧尸",
      "变异",
      "末日生存",
      "身体恐怖"
    ],
    "desc": "一种能操控人类骨骼的变异病菌泄露，感染者骨骼破体而出，变为可怖的“骨魔”。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "女孩不设限",
    "file": "movie-1051.html",
    "cover": "./1.jpg",
    "year": "2025",
    "region": "印度",
    "type": "剧集",
    "genre": "剧情, 运动",
    "tags": [
      "女性觉醒",
      "摩托车竞技",
      "乡村变革",
      "父权抗争",
      "姐妹情"
    ],
    "desc": "印度保守村落的三位女孩偷偷学习摩托车特技，成立全女性特技队，以此反抗童婚制和种姓歧视。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "前辈是男孩子",
    "file": "movie-1052.html",
    "cover": "./2.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情",
    "tags": [
      "跨性别",
      "校园",
      "纯爱",
      "漫画改编"
    ],
    "desc": "刚转学到新学校的女孩，发现自己暗恋的帅气学长，其实是女扮男装的同级生。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "每天都是暑假",
    "file": "movie-1053.html",
    "cover": "./3.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情, 奇幻",
    "tags": [
      "时间循环",
      "童年",
      "治愈",
      "校园",
      "夏日"
    ],
    "desc": "三个小学生意外困在了暑假的最后一天，经历了999次循环后才明白什么是最重要的。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "烈血焚城",
    "file": "movie-1054.html",
    "cover": "./4.jpg",
    "year": "2028",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争 / 动作",
    "tags": [
      "废土",
      "人性",
      "硬核动作",
      "悲壮美学"
    ],
    "desc": "核战废墟下，父亲为了给女儿找到一剂解药，必须独自穿越一座由疯狂军阀统治的辐射鬼城。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "幽冥花开",
    "file": "movie-1055.html",
    "cover": "./5.jpg",
    "year": "2021",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "genre": "恐怖 / 奇幻",
    "tags": [
      "阴阳眼",
      "彼岸花",
      "粤剧",
      "怨灵",
      "家族秘密"
    ],
    "desc": "粤剧名伶之女意外开阴阳眼，发现家族戏班背后竟藏着七十年的血海深仇与彼岸花的诅咒。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "好好学吧",
    "file": "movie-1056.html",
    "cover": "./6.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 科幻",
    "tags": [
      "学渣逆袭",
      "脑机接口",
      "反内卷"
    ],
    "desc": "一款能让人“睡觉也能学习”的黑科技芯片，把全校倒数第一变成了学霸，但也让他每晚梦见被追杀。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "父亲大地",
    "file": "movie-1057.html",
    "cover": "./7.jpg",
    "year": "2022",
    "region": "意大利 / 阿根廷",
    "type": "电影",
    "genre": "剧情, 家庭, 历史",
    "tags": [
      "移民",
      "父子关系",
      "庄园",
      "真相"
    ],
    "desc": "父亲去世后，儿子回阿根廷老家继承土地，却发现这片土地下埋着一个关于“假父亲”的惊天秘密。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "山狗",
    "file": "movie-1058.html",
    "cover": "./8.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪 / 惊悚",
    "tags": [
      "复仇",
      "猎杀",
      "山野",
      "群像"
    ],
    "desc": "五名登山客在深山误入废弃村落，发现村民失踪的原因——他们被一群“狗”养大。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "歌颂爱情",
    "file": "movie-1059.html",
    "cover": "./9.jpg",
    "year": "2026",
    "region": "法国 / 意大利",
    "type": "电影",
    "genre": "爱情, 剧情, 音乐",
    "tags": [
      "巴黎",
      "歌剧",
      "中年爱情",
      "文艺片"
    ],
    "desc": "巴黎歌剧院的女中音与一位沉默的园艺师，因为一棵枯死的玫瑰树，开启了迟来三十年的通信。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "对她说",
    "file": "movie-1060.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情、爱情、奇幻",
    "tags": [
      "灵魂",
      "昏迷",
      "告白",
      "治愈",
      "平行世界"
    ],
    "desc": "男人每天对着昏迷的妻子说话，他的爱无意间搭建了一座通往妻子梦境的桥梁。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "天使杀手",
    "file": "movie-1061.html",
    "cover": "./11.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪, 动作, 悬疑",
    "tags": [
      "女杀手",
      "修道院",
      "暴力美学",
      "反转",
      "暗黑"
    ],
    "desc": "一名患上绝症的女杀手躲进修道院等死，却发现这里的修女们正在经营着全亚洲最大的暗网杀人平台。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "狂热迪士哥",
    "file": "movie-1062.html",
    "cover": "./12.jpg",
    "year": "2018",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧, 音乐",
    "tags": [
      "迪斯科",
      "怀旧",
      "父子",
      "温馨"
    ],
    "desc": "丧偶老父亲唯一的愿望是参加巴黎迪斯科舞王大赛，儿子们决定帮他完成这个“羞耻”的梦想。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "千禧年代大事件：悲剧",
    "file": "movie-1063.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 历史",
    "tags": [
      "伪纪录片",
      "社会事件",
      "沉重",
      "多线叙事"
    ],
    "desc": "通过五个家庭的DV录像，还原“911”之后美国第二大人为灾难的真相与谎言。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "超能力女儿",
    "file": "movie-1064.html",
    "cover": "./14.jpg",
    "year": "2018",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧, 家庭, 奇幻",
    "tags": [
      "黑道日常",
      "反差萌",
      "念力少女"
    ],
    "desc": "黑道少主某天家中突然出现一个身怀超能力的球形少女，被迫开始了啼笑皆非的育儿生活。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "梅珍",
    "file": "movie-1065.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "年代、女性、传奇",
    "tags": [
      "民国",
      "女商人",
      "纺织业",
      "家族恩怨",
      "上海滩"
    ],
    "desc": "1920年代，苏州织女梅珍孤身闯荡上海，从一个童养媳成长为纺织业女王的传奇一生。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "天堂春梦",
    "file": "movie-1066.html",
    "cover": "./16.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": [
      "眷村",
      "乡愁",
      "代际和解"
    ],
    "desc": "一个九旬老兵带着孙女回到大陆故乡，却发现记忆中的“天堂”早已换了人间。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "致命婚姻：美国逆伦案之谜",
    "file": "movie-1067.html",
    "cover": "./17.jpg",
    "year": "2027",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪, 纪录剧, 历史",
    "tags": [
      "真实罪案",
      "19世纪",
      "伦理禁忌",
      "法庭剧"
    ],
    "desc": "1860年罗德岛州，一桩“哥哥娶妹妹”的婚姻被揭发后，牵出了涉及三大家族的连环谋杀案。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "摇滚三国",
    "file": "movie-1068.html",
    "cover": "./18.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 音乐",
    "tags": [
      "穿越",
      "三国",
      "摇滚",
      "恶搞",
      "乐队"
    ],
    "desc": "一支三流摇滚乐队穿越回东汉末年，发现曹操想组乐队，刘备会打鼓，而貂蝉才是真正的摇滚天后。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "来自谁的启示",
    "file": "movie-1069.html",
    "cover": "./19.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻惊悚",
    "tags": [
      "心理悬疑",
      "外星接触",
      "伦理困境"
    ],
    "desc": "宇航员在深空接收到一组神秘代码，破译后竟发现那是自己尚未写出的遗书。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "义勇急先锋",
    "file": "movie-1070.html",
    "cover": "./20.jpg",
    "year": "2024",
    "region": "香港 / 中国大陆",
    "type": "电影",
    "genre": "动作, 灾难, 剧情",
    "tags": [
      "消防员",
      "一线救援",
      "兄弟情",
      "真实事件改编"
    ],
    "desc": "一场百年难遇的化工园区连环爆炸，一支即将解散的消防小队，必须在48小时内完成不可能的任务。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "死亡棋游戏",
    "file": "movie-1071.html",
    "cover": "./21.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "tags": [
      "密室",
      "棋类游戏",
      "超自然",
      "高智商",
      "血腥"
    ],
    "desc": "四个网友参加一场真人巫师棋比赛，输掉的人会被按照棋子方式处决。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "过年",
    "file": "movie-1072.html",
    "cover": "./22.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "春运",
      "城乡差异",
      "年夜饭",
      "和解",
      "现实主义"
    ],
    "desc": "一个四世同堂的家庭，在除夕夜的年饭桌上，撕开了三十年来的所有伤疤与秘密。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "欢迎来到蘑菇屋",
    "file": "movie-1073.html",
    "cover": "./23.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 奇幻, 悬疑",
    "tags": [
      "密室逃脱",
      "综艺感",
      "单元剧",
      "黑色幽默",
      "实验性"
    ],
    "desc": "五个过气艺人被困蘑菇屋，每集完成荒诞任务才能离开。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "民主万岁",
    "file": "movie-1074.html",
    "cover": "./24.jpg",
    "year": "2006",
    "region": "美国",
    "type": "电影",
    "genre": "剧情，历史，政治",
    "tags": [
      "政治讽刺",
      "总统选举",
      "幕后操作"
    ],
    "desc": "在总统大选的最后冲刺阶段，竞选经理发现了一场足以颠覆选举结果的惊天阴谋。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "灵肉第一课",
    "file": "movie-1075.html",
    "cover": "./25.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 奇幻 / 校园",
    "tags": [
      "灵魂互换",
      "师生",
      "青春",
      "治愈"
    ],
    "desc": "一心想转班的学渣和身体被掏空的班主任互换了身体，才发现对方的生活都是一场地狱级的真人秀。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "霓虹灯下的哨兵",
    "file": "movie-1076.html",
    "cover": "./26.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情、都市、军旅",
    "tags": [
      "武警",
      "上海",
      "金融",
      "诱惑",
      "成长"
    ],
    "desc": "香港回归那年，一群武警战士来到繁华的上海南京路执勤，守护霓虹灯下的安宁。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "凹凸",
    "file": "movie-1077.html",
    "cover": "./27.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/悬疑/心理",
    "tags": [
      "双胞胎互换",
      "校园霸凌",
      "身份错位",
      "扭曲母爱"
    ],
    "desc": "双胞胎姐妹中“丑”的那个意外身亡，“美”的那个被迫扮演妹妹，却发现自己正在杀死真实的自己。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "在希望的田野上2022",
    "file": "movie-1078.html",
    "cover": "./28.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 农村",
    "tags": [
      "乡村振兴",
      "返乡青年",
      "真实改编",
      "驻村书记",
      "热血"
    ],
    "desc": "上海白领李向阳回村当书记，发现全村最大的产业是“伪造古董”，他决定带村民制假售假从良。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "珠星纪",
    "file": "movie-1079.html",
    "cover": "./29.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 爱情 / 奇幻",
    "tags": [
      "采珠",
      "鲛人",
      "王朝",
      "虐恋"
    ],
    "desc": "合浦珠女阿萤救了一条受伤的鲛人，鲛人赠她泣血明珠，而这颗珠子正是亡国太子复国的最后筹码。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "魅影天堂",
    "file": "movie-1080.html",
    "cover": "./30.jpg",
    "year": "2019",
    "region": "英国",
    "type": "电影",
    "genre": "奇幻, 爱情",
    "tags": [
      "剧院",
      "灵魂",
      "音乐剧",
      "转世",
      "悲情"
    ],
    "desc": "一位过气歌剧女伶死后灵魂被困在她最爱的剧院里，只能在午夜演出给一个人看。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "枪杀",
    "file": "movie-1081.html",
    "cover": "./31.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作/惊悚/悬疑",
    "tags": [
      "政治阴谋",
      "狙击手",
      "烧脑",
      "限时营救",
      "反套路"
    ],
    "desc": "一名顶尖狙击手在任务中射杀了恐怖分子头目，回国后却发现照片上的人竟是自己的亲生父亲。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "你好，陌生人",
    "file": "movie-1082.html",
    "cover": "./32.jpg",
    "year": "2017",
    "region": "日本",
    "type": "电影",
    "genre": "剧情， 温情， 社会",
    "tags": [
      "孤独死",
      "清扫员",
      "遗物",
      "都市"
    ],
    "desc": "东京“孤独死”现场清扫员，通过遗物拼凑死者的一生，却在最后一间房里发现自己的名字。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "干探洗寃录",
    "file": "movie-1083.html",
    "cover": "./33.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑、犯罪、动作",
    "tags": [
      "警匪",
      "翻案",
      "法证",
      "兄弟情",
      "正义"
    ],
    "desc": "一位被革职的前警探为了洗刷自己的冤屈，与菜鸟女警联手追查连环凶杀案的真凶。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "夜晚与片刻",
    "file": "movie-1084.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情文艺",
    "tags": [
      "诗意",
      "哲学",
      "城市漫游"
    ],
    "desc": "在巴黎一夜的偶然相遇中，一名失眠的哲学教授与一位神秘的舞者通过对话和漫步，寻找人生的“决定性瞬间”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "新郎没有房间",
    "file": "movie-1085.html",
    "cover": "./35.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧爱情",
    "tags": [
      "婚礼闹剧",
      "家庭冲突",
      "妈宝男",
      "都市情感",
      "幽默"
    ],
    "desc": "婚礼前夜，新郎发现新房被母亲改成了佛堂，而新娘要求必须有自己的衣帽间，一场房间争夺战爆笑打响。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "小虎将",
    "file": "movie-1086.html",
    "cover": "./36.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "儿童 / 动作 / 喜剧",
    "tags": [
      "小学生",
      "武术",
      "功夫喜剧",
      "怀旧"
    ],
    "desc": "小镇上五个小学生看了三百遍老功夫片后，决定用自创的“野路子功夫”对抗来拆迁的地产商恶霸。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "雪恋三部曲",
    "file": "movie-1087.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 剧情",
    "tags": [
      "冬季恋歌",
      "年代跨度",
      "大兴安岭",
      "宿命"
    ],
    "desc": "三代人在大兴安岭的同一场暴雪中许下爱情誓言，每三十年应验一次，却从无善终。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "大瑟尔",
    "file": "movie-1088.html",
    "cover": "./38.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 传记 / 冒险",
    "tags": [
      "凯鲁亚克",
      "垮掉的一代",
      "文学改编",
      "孤独之旅"
    ],
    "desc": "凯鲁亚克在《在路上》爆红后躲进大瑟尔森林木屋，试图用孤独对抗成名焦虑。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "农夫的妻子",
    "file": "movie-1089.html",
    "cover": "./39.jpg",
    "year": "2020",
    "region": "英国",
    "type": "电影",
    "genre": "剧情, 悬疑",
    "tags": [
      "心理",
      "乡村",
      "谎言"
    ],
    "desc": "她杀了丈夫后继承农场，却在翻修时挖出了第一任农夫妻子的白骨。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "我的三十定律",
    "file": "movie-1090.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情，都市，女性",
    "tags": [
      "三十岁",
      "女性",
      "职场",
      "婚姻",
      "焦虑"
    ],
    "desc": "三个高中闺蜜在30岁这天，分别遭遇失业、离婚和确诊癌症，她们决定抱团推翻人生的“三十定律”。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "我和两个他",
    "file": "movie-1091.html",
    "cover": "./41.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情，喜剧",
    "tags": [
      "双重人格",
      "同居",
      "数学天才",
      "甜宠"
    ],
    "desc": "一个高考落榜的欢脱少女，被迫与一个高冷数学天才同居，却发现他晚上10点后会切换成热情似火的第二人格，并且两个“他”都爱上了自己。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "那些年我们疯狂的青春",
    "file": "movie-1092.html",
    "cover": "./42.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 爱情 / 青春",
    "tags": [
      "怀旧",
      "乐队",
      "暗恋",
      "毕业旅行"
    ],
    "desc": "2007年夏天，五个死党在毕业旅行途中组建了一支只存在七天的乐队。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "勿忘蛛",
    "file": "movie-1093.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画 / 奇幻 / 恐怖",
    "tags": [
      "定格动画",
      "蜘蛛",
      "执念",
      "暗黑童话",
      "细思极恐"
    ],
    "desc": "奶奶临终前叮嘱孙女“千万不要忘记那只蜘蛛”，孙女在清理老屋时发现蛛网里织满了全家人的秘密。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "争妻起祸",
    "file": "movie-1094.html",
    "cover": "./44.jpg",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "genre": "犯罪 / 惊悚",
    "tags": [
      "三角恋",
      "谋杀",
      "复仇",
      "农村",
      "种姓制度"
    ],
    "desc": "两个村庄因抢夺新娘引发械斗，一具被悬挂的尸体打破了脆弱的和平。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "勇鼠闯天堂",
    "file": "movie-1095.html",
    "cover": "./45.jpg",
    "year": "2024",
    "region": "法国 / 加拿大",
    "type": "动画",
    "genre": "冒险 / 喜剧 / 家庭",
    "tags": [
      "老鼠",
      "天堂",
      "冒险",
      "信念",
      "动物主角"
    ],
    "desc": "一只误入天堂安检区的街头老鼠，为了找回被扣留的奶酪，不得不假扮成天堂守护兽。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "进击的巨人 编年史",
    "file": "movie-1096.html",
    "cover": "./46.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "动画, 奇幻, 动作",
    "tags": [
      "总集篇",
      "剧场版",
      "粉丝向"
    ],
    "desc": "从超大型巨人破墙到地鸣发动，将四季动画浓缩为三个小时的极致视听轰炸。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "杀手之怒",
    "file": "movie-1097.html",
    "cover": "./47.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 犯罪 / 惊悚",
    "tags": [
      "复仇",
      "暴力美学",
      "退休杀手"
    ],
    "desc": "隐退十年的传奇杀手发现，自己患有阿兹海默症的妻子曾是当年灭门案的真凶。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "海关战线",
    "file": "movie-1098.html",
    "cover": "./48.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "剧集",
    "genre": "动作",
    "tags": [
      "海关",
      "走私",
      "卧底"
    ],
    "desc": "香港海关新任课长发现，最大规模的走私通道不是海陆空，而是网络虚拟货币。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "喋血僵尸镇",
    "file": "movie-1099.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖，动作，喜剧",
    "tags": [
      "僵尸",
      "民国",
      "道长",
      "黑色幽默",
      "封闭空间"
    ],
    "desc": "民国末年瘟疫横行，一队散兵误入小镇，发现全镇百姓早已变成只吃活人的僵尸。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "我的小小世界",
    "file": "movie-1100.html",
    "cover": "./50.jpg",
    "year": "2018",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "剧情 / 儿童",
    "tags": [
      "自闭症儿童",
      "单亲妈妈",
      "微观摄影",
      "治愈系"
    ],
    "desc": "八岁自闭症男孩只肯透过镜头看世界，母亲用一部旧DV敲开他与外界的唯一那扇门。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "玩命手机",
    "file": "movie-1101.html",
    "cover": "./51.jpg",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "genre": "动作、惊悚、犯罪",
    "tags": [
      "限时",
      "绑架",
      "手机",
      "飙车",
      "营救"
    ],
    "desc": "普通男人接到陌生女子求救电话，必须在一小时内横跨全城营救她。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "玛丽莲有深黑之眸",
    "file": "movie-1102.html",
    "cover": "./52.jpg",
    "year": "2024",
    "region": "法国 / 意大利",
    "type": "电影",
    "genre": "黑色电影",
    "tags": [
      "蛇蝎美人",
      "地中海背景",
      "秘密社团",
      "记忆犯罪"
    ],
    "desc": "玛丽莲有一双深黑之眸，任何人与她对视超过十秒，就会忘记自己最在意的一段记忆，而她用这些记忆在暗网拍卖。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "性摇滚明星乐",
    "file": "movie-1103.html",
    "cover": "./53.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "剧情、音乐、传记",
    "tags": [
      "摇滚",
      "华丽摇滚",
      "同性",
      "70年代",
      "颓废"
    ],
    "desc": "一个虚构的70年代摇滚主唱，在药物、性爱与名声中堕落，直到他遇见了那个写诗的男孩。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "男子的心",
    "file": "movie-1104.html",
    "cover": "./54.jpg",
    "year": "2018",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情 / 疗愈",
    "tags": [
      "心脏移植",
      "记忆传承",
      "治愈系",
      "韩式虐恋"
    ],
    "desc": "移植了逝去男友心脏的女人，发现自己的心跳节奏开始与陌生男人的脚步声同步。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "封神：妲己",
    "file": "movie-1105.html",
    "cover": "./55.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻, 动作, 剧情",
    "tags": [
      "妲己",
      "狐妖",
      "颠覆",
      "女性",
      "权谋"
    ],
    "desc": "妲己不是妖，是冀州侯之女，她入宫只为刺杀商纣，为被虐杀的族人复仇。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "巫婆不坏",
    "file": "movie-1106.html",
    "cover": "./56.jpg",
    "year": "2029",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画, 奇幻, 喜剧",
    "tags": [
      "童话解构",
      "女巫",
      "善良",
      "反转",
      "合家欢"
    ],
    "desc": "童话镇上最丑的巫婆，其实是唯一一个用魔法帮助穷人却背了所有黑锅的背锅侠。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "天若有情粤语",
    "file": "movie-1107.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 剧情 / 犯罪",
    "tags": [
      "粤语原声",
      "江湖儿女",
      "经典重启",
      "摩托"
    ],
    "desc": "新版致敬经典，一名黑道小混混与富家女的禁忌之恋，被一个神秘粤语旁白用命运口吻全程解读。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "两天一夜第四季",
    "file": "movie-1108.html",
    "cover": "./58.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "综艺",
    "genre": "真人秀 / 旅行 / 喜剧",
    "tags": [
      "户外",
      "游戏",
      "福不福",
      "国民综艺"
    ],
    "desc": "全新成员阵容重新出发，在零下十度的野外帐篷里玩游戏决定谁可以睡室内。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "神奇阿呦之最强流星人",
    "file": "movie-1109.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画 / 科幻 / 儿童",
    "tags": [
      "国产子供向",
      "热血成长",
      "宇宙冒险",
      "友情羁绊"
    ],
    "desc": "来自外星的流星人阿呦能量耗尽，为了回家，他必须和小学生搭档找回散落地球的108颗神秘碎片。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "人皮客栈2005",
    "file": "movie-1110.html",
    "cover": "./60.jpg",
    "year": "2005",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "tags": [
      "惊悚",
      "血腥",
      "东欧",
      "背包客",
      "虐杀"
    ],
    "desc": "三名背包客住进一家价格低廉的旅馆，却发现里面的客人都是付费来折磨他们的富豪。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "情歌恋曲",
    "file": "movie-1111.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情， 音乐， 剧情",
    "tags": [
      "浪漫",
      "巴黎",
      "创作",
      "邂逅",
      "成长"
    ],
    "desc": "一位失意的作曲家在巴黎地铁站听到一段手机铃声，意外卷入了一场跨越整个城市的音乐寻爱游戏。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "海街日记",
    "file": "movie-1112.html",
    "cover": "./62.jpg",
    "year": "2015",
    "region": "日本",
    "type": "电影",
    "genre": "剧情， 家庭",
    "tags": [
      "是枝裕和",
      "治愈",
      "姐妹"
    ],
    "desc": "住在镰仓的三姐妹，在父亲葬礼后接回了同父异母的妹妹，开启了四人的海边生活。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "老古玩店",
    "file": "movie-1113.html",
    "cover": "./63.jpg",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情 / 悬疑 / 历史",
    "tags": [
      "狄更斯",
      "改编",
      "维多利亚时代",
      "古董",
      "诅咒"
    ],
    "desc": "一家伦敦老古玩店里售卖的并非古董，而是人类遗忘的记忆，买家支付的也不是金钱，而是寿命。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "垫底俱乐部",
    "file": "movie-1114.html",
    "cover": "./64.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 运动",
    "tags": [
      "高中生",
      "橄榄球",
      "废柴逆袭",
      "友情"
    ],
    "desc": "一群被校队淘汰、只会打游戏的废柴学生，为了争夺学校经费，被迫组建了一支史上最差的美式足球队。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "上海滩龙虎斗粤语",
    "file": "movie-1115.html",
    "cover": "./65.jpg",
    "year": "1980",
    "region": "中国香港",
    "type": "剧集",
    "genre": "动作 / 剧情 / 黑帮",
    "tags": [
      "民国",
      "上海滩",
      "兄弟反目",
      "经典"
    ],
    "desc": "1930年代上海，两个码头苦力出身的兄弟，因一个女人和一张租界地图走向决裂。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "金刚战士",
    "file": "movie-1116.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 科幻",
    "tags": [
      "机甲",
      "改造人",
      "反战"
    ],
    "desc": "五位在战争中失去肢体的士兵被改造成“金刚战士”，却发现自己真正要对抗的不是敌人，而是制造战争的自己人。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "夜路",
    "file": "movie-1117.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚，恐怖",
    "tags": [
      "公路",
      "神秘",
      "都市传说",
      "生存",
      "悬疑"
    ],
    "desc": "一位网约车司机发现，只要按导航行驶超过50公里，车内就会多出一个“不存在”的乘客。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "狱见妳，爱上你",
    "file": "movie-1118.html",
    "cover": "./68.jpg",
    "year": "2024",
    "region": "台湾",
    "type": "电影",
    "genre": "爱情, 剧情, 同性",
    "tags": [
      "女同",
      "监狱",
      "救赎",
      "文艺"
    ],
    "desc": "误入歧途的刺青女混混，在女子监狱里遇到了曾被自己伤害过的哑女教师。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "死亡之床",
    "file": "movie-1119.html",
    "cover": "./69.jpg",
    "year": "2016",
    "region": "西班牙",
    "type": "电影",
    "genre": "恐怖情色",
    "tags": [
      "诅咒家具",
      "性隐喻",
      "哥特",
      "身体恐怖"
    ],
    "desc": "新婚少妇继承了一张古董床，每晚入睡后她会被床吞噬一个前任情人，而床垫里传出13个男人的心跳声。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "移城别恋",
    "file": "movie-1120.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情剧情",
    "tags": [
      "异地恋",
      "北上广深",
      "取舍",
      "现实"
    ],
    "desc": "他在北京送外卖，她在上海做投行，一张机票的距离，隔开了两个世界。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "血战保山河",
    "file": "movie-1121.html",
    "cover": "./71.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "战争, 剧情",
    "tags": [
      "二战",
      "兄弟连",
      "真实事件改编",
      "牺牲"
    ],
    "desc": "1944年冬天，一支美军连队在阿登森林被德军包围，他们唯一能守住的是附近一座即将被冻死村民的小教堂。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "非常转学生",
    "file": "movie-1122.html",
    "cover": "./72.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "剧集",
    "genre": "喜剧 / 校园",
    "tags": [
      "转学生",
      "伪装",
      "富二代"
    ],
    "desc": "为了体验生活，某国际集团继承人伪装成贫困生转入一所贵族高中，结果成了全校的公敌。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "老捕快",
    "file": "movie-1123.html",
    "cover": "./73.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装 / 悬疑 / 动作",
    "tags": [
      "明朝",
      "锦衣卫",
      "退休",
      "旧案重查"
    ],
    "desc": "一名退休二十年的老捕快被一具无名尸体引回衙门，死者身上的伤痕与他当年亲手栽赃的冤案一模一样。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "我的维权之路国语",
    "file": "movie-1124.html",
    "cover": "./74.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 社会",
    "tags": [
      "消费者权益",
      "小人物",
      "真实改编"
    ],
    "desc": "一个普通电工为了退掉有质量问题的冰箱，花了三年时间。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "砖匠",
    "file": "movie-1125.html",
    "cover": "./75.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": [
      "农民工",
      "父子",
      "底层",
      "方言电影",
      "现实"
    ],
    "desc": "一个沉默寡言的农村砖匠，带着有音乐梦想的儿子，在城市边缘拼命挣扎。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "陌生人的慰藉",
    "file": "movie-1126.html",
    "cover": "./76.jpg",
    "year": "2025",
    "region": "英国 / 美国",
    "type": "电影",
    "genre": "剧情 / 惊悚 / 悬疑",
    "tags": [
      "威尼斯",
      "心理战",
      "婚姻危机",
      "哥特",
      "反转"
    ],
    "desc": "一对感情破裂的夫妇在威尼斯度假时，被一对神秘夫妇拖入了一场致命的心理游戏。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "兰花香",
    "file": "movie-1127.html",
    "cover": "./77.jpg",
    "year": "2011",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭, 伦理",
    "tags": [
      "民国",
      "姨娘",
      "宅斗",
      "身世之谜"
    ],
    "desc": "一盆神秘的兰花牵扯出两代人的身世秘密，柔弱姨娘如何在乱世家宅中逆袭。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "恩秀的好日子",
    "file": "movie-1128.html",
    "cover": "./78.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 喜剧",
    "tags": [
      "女性",
      "中年",
      "重生",
      "家庭关系",
      "治愈"
    ],
    "desc": "50岁家庭主妇恩秀突然获得回到20岁身体的能力，但她只有七天时间重活一次。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "人力资源",
    "file": "movie-1129.html",
    "cover": "./79.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 悬疑, 职场",
    "tags": [
      "裁员",
      "AI面试",
      "黑镜风格",
      "反转"
    ],
    "desc": "冷酷的HR总监发现，公司新引进的AI面试系统正在暗中筛选并“清除”真实员工。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "春晓",
    "file": "movie-1130.html",
    "cover": "./80.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 同性",
    "tags": [
      "田园",
      "初恋",
      "治愈"
    ],
    "desc": "两个被迫回乡的都市女孩，在春日的茶园里，谈了一场注定没有结果的恋爱。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "骇速快手",
    "file": "movie-1131.html",
    "cover": "./81.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作， 赛车， 犯罪",
    "tags": [
      "地下飙车",
      "改装",
      "黑吃黑",
      "亲情"
    ],
    "desc": "为了还清父亲的赌债，聋哑机械师阿速必须开着自己改装的“废铁”赛车，赢下全亚洲最危险的死亡赛事。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "异星觉醒",
    "file": "movie-1132.html",
    "cover": "./82.jpg",
    "year": "2025",
    "region": "美国 / 加拿大",
    "type": "电影",
    "genre": "科幻 / 惊悚",
    "tags": [
      "外星生命",
      "太空站",
      "寄生",
      "逃生",
      "封闭空间"
    ],
    "desc": "国际空间站的宇航员唤醒了一颗火星样本里的硅基生命，而它正以人类恐惧为食。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "创可贴",
    "file": "movie-1133.html",
    "cover": "./83.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情, 喜剧",
    "tags": [
      "治愈",
      "冤家",
      "医疗"
    ],
    "desc": "冷酷的男外科医生与散漫的女急救员，因一次医疗事故成为必须同居的“创可贴”搭档。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "英伦魔法师2015",
    "file": "movie-1134.html",
    "cover": "./84.jpg",
    "year": "2015",
    "region": "英国",
    "type": "剧集",
    "genre": "奇幻， 历史， 剧情",
    "tags": [
      "魔法复兴",
      "拿破仑战争",
      "乌鸦王",
      "绅士"
    ],
    "desc": "拿破仑战争期间，两个性格迥异的英国魔法师唤醒了沉睡千年的英伦魔法，却惹怒了乌鸦之王。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "围城2008",
    "file": "movie-1135.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑、灾难、剧情",
    "tags": [
      "暴雪",
      "返乡",
      "群像",
      "人性"
    ],
    "desc": "2008年春节前夕，一场百年不遇的暴雪将十万返乡人困于南方一座无名小城，城外的人进不来，城里的人出不去。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "仙逆剧场版神临之战",
    "file": "movie-1136.html",
    "cover": "./86.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画, 奇幻, 动作",
    "tags": [
      "仙侠",
      "热血战斗",
      "宿命对决",
      "修真",
      "剧场版"
    ],
    "desc": "王林为救李慕婉闯入神临之地，却发现自己竟是这场千年宿命的终极祭品。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "巴格达来信",
    "file": "movie-1137.html",
    "cover": "./87.jpg",
    "year": "2025",
    "region": "英国 / 伊拉克",
    "type": "电影",
    "genre": "战争， 剧情， 同性",
    "tags": [
      "伊拉克战争",
      "禁忌之恋",
      "书信体",
      "反战"
    ],
    "desc": "2003年，一个驻伊英军士兵与一个当地青年通过偷运出城的信件，展开了一段绝望而炽热的爱情。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "一路玩到挂",
    "file": "movie-1138.html",
    "cover": "./88.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 冒险 / 剧情",
    "tags": [
      "遗愿清单",
      "公路片",
      "老年",
      "友情"
    ],
    "desc": "一个循规蹈矩的心脏科医生和一个狂野的越狱老头，共用一份遗愿清单，但他们都忘了清单上有一项是“和好如初”。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "地狱乐",
    "file": "movie-1139.html",
    "cover": "./89.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画",
    "genre": "动作 / 奇幻 / 恐怖",
    "tags": [
      "忍者",
      "不死",
      "岛屿",
      "探索"
    ],
    "desc": "江户时代，最强死刑犯们被送入一座据称藏有长生不老药的恐怖岛屿，活着回来的条件是杀死岛上的“神”。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "金粉世家",
    "file": "movie-1140.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 爱情 / 历史",
    "tags": [
      "民国",
      "家族",
      "女性觉醒",
      "改编",
      "新视角"
    ],
    "desc": "全新改编，从冷清秋的视角出发，讲述她如何从金家弃妇逆袭成上海滩金融大亨。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "夜校女生",
    "file": "movie-1141.html",
    "cover": "./91.jpg",
    "year": "2019",
    "region": "中国香港",
    "type": "电影",
    "genre": "青春 / 剧情",
    "tags": [
      "女性",
      "底层",
      "教育",
      "姐妹情"
    ],
    "desc": "白天在茶餐厅打工、晚上上夜校的女孩阿花，在老师鼓励下报考大学，却发现自己的学费被男友拿去赌博了。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "花牌情缘 下之句",
    "file": "movie-1142.html",
    "cover": "./92.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 运动 / 青春",
    "tags": [
      "竞技歌牌",
      "宿敌",
      "团体战",
      "催泪"
    ],
    "desc": "全国大赛前夜队长重伤，残阵挑战五连冠豪门，最后一仗赌上社团存废。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "神医喜来乐传奇",
    "file": "movie-1143.html",
    "cover": "./93.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装，喜剧，医学",
    "tags": [
      "民间",
      "中医",
      "智慧",
      "权谋"
    ],
    "desc": "草根郎中被迫进宫给慈禧治病，他用一根葱治好了老佛爷的顽疾，却卷入了变法漩涡。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "老而弥癫小电影",
    "file": "movie-1144.html",
    "cover": "./94.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "tags": [
      "老年生活",
      "疯狂",
      "家庭关系",
      "黑色幽默"
    ],
    "desc": "养老院里三个加起来超过240岁的老人，偷偷用手机拍了一部“小电影”，意外引爆了全世界的网络。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "愤怒的印度女神",
    "file": "movie-1145.html",
    "cover": "./95.jpg",
    "year": "2020",
    "region": "印度",
    "type": "电影",
    "genre": "喜剧、剧情",
    "tags": [
      "女性群像",
      "女性友谊",
      "反转",
      "屋顶夜话"
    ],
    "desc": "新婚夜，新娘逃到闺蜜家，九个女人在天台边喝酒边控诉生命中所有“完美男人”的骗局。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "始动",
    "file": "movie-1146.html",
    "cover": "./96.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧 / 剧情 / 动作",
    "tags": [
      "马东锡",
      "青年叛逆",
      "炸鸡店",
      "底层生活",
      "温情"
    ],
    "desc": "叛逆的高中生离家出走，在一家奇葩的“彩虹炸鸡店”里，遇到了比黑帮还凶的老板娘和一群怪胎。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "我被青春闪了腰",
    "file": "movie-1147.html",
    "cover": "./97.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 奇幻",
    "tags": [
      "穿越",
      "中年危机",
      "校园",
      "怀旧"
    ],
    "desc": "45岁的中年“废柴”腰扭了一下，醒来竟重回1998年的高三教室。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "人间猛兽",
    "file": "movie-1148.html",
    "cover": "./98.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 犯罪 / 惊悚",
    "tags": [
      "非法格斗",
      "复仇",
      "刑警卧底",
      "断肢"
    ],
    "desc": "一个被开除的刑警跳进地下拳场，却发现每晚和他对打的，都是失踪多年的失踪人口。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "银色闪电",
    "file": "movie-1149.html",
    "cover": "./99.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作，赛车，犯罪",
    "tags": [
      "飙车",
      "复仇",
      "义警",
      "改装车",
      "非法赛车"
    ],
    "desc": "一名退役的地下赛车手，为了给被毒贩撞死的女儿报仇，将一辆报废警车改造成了暗黑复仇战车。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "拳击少年",
    "file": "movie-1150.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "运动 / 剧情 / 励志",
    "tags": [
      "拳击",
      "少年成长",
      "父子关系",
      "逆袭",
      "写实"
    ],
    "desc": "15岁叛逆少年被送进乡村拳击俱乐部，发现教练是隐退的前全国冠军，而自己是他最后的赌注。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "埃及自由之花",
    "file": "movie-1151.html",
    "cover": "./101.jpg",
    "year": "2023",
    "region": "埃及",
    "type": "电影",
    "genre": "剧情, 历史, 传记",
    "tags": [
      "女性力量",
      "历史钩沉",
      "反殖民斗争",
      "沙漠史诗"
    ],
    "desc": "20世纪初埃及反英殖民浪潮中，一位贵族女校校长如何点燃女性觉醒的第一把火。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "治疗扑克上瘾",
    "file": "movie-1152.html",
    "cover": "./102.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 心理",
    "tags": [
      "赌博",
      "心理治疗",
      "反转"
    ],
    "desc": "一个赌徒接受心理治疗，却发现心理医生才是真正的“赌神”，赌的不是钱，是人性。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "万分感谢",
    "file": "movie-1153.html",
    "cover": "./103.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭 / 治愈",
    "tags": [
      "遗书",
      "售后服务",
      "生死",
      "小确丧",
      "温暖"
    ],
    "desc": "父亲去世后，三个孩子收到他的遗物：一沓从未寄出的“万分感谢”卡。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "我破碎的真理子",
    "file": "movie-1154.html",
    "cover": "./104.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 青春",
    "tags": [
      "女性友谊",
      "自杀",
      "治愈",
      "公路片"
    ],
    "desc": "闺蜜跳楼自杀了，她决定偷走骨灰盒，完成两人曾经约定却从未出发的旅行。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "世界大战争",
    "file": "movie-1155.html",
    "cover": "./105.jpg",
    "year": "2022",
    "region": "日本",
    "type": "动画",
    "genre": "战争, 讽刺, 灾难",
    "tags": [
      "政治讽刺",
      "黑色幽默",
      "世界大战",
      "荒诞"
    ],
    "desc": "在资源枯竭的未来，七个大国的首脑决定用真人CS直播解决争端，结果全炸了。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "无法隐藏的本能：偷拍",
    "file": "movie-1156.html",
    "cover": "./106.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "tags": [
      "偷拍",
      "复仇",
      "科技",
      "隐私",
      "反转"
    ],
    "desc": "一名天才黑客黑进了全城的监控和手机摄像头，发现了一个隐藏在镜头之后的连环杀人魔。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "狂爱",
    "file": "movie-1157.html",
    "cover": "./107.jpg",
    "year": "2023",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "惊悚爱情",
    "tags": [
      "占有欲",
      "跟踪狂",
      "心理学家",
      "病态迷恋",
      "反转"
    ],
    "desc": "一位著名女心理学家出版新书探讨“不健康的爱”，却被一个疯狂崇拜者用她书中的理论一步步拖入深渊。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "下坡戮",
    "file": "movie-1158.html",
    "cover": "./108.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚，恐怖，运动",
    "tags": [
      "山地自行车",
      "连环杀手",
      "荒野求生"
    ],
    "desc": "六名山地车手在一条废弃的下坡赛道上比赛，却发现自己正在被一个模仿“山路传说”的面具屠夫逐个猎杀。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "锄奸记",
    "file": "movie-1159.html",
    "cover": "./109.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "谍战 / 悬疑",
    "tags": [
      "双面间谍",
      "兄弟反目",
      "狼人杀",
      "民国"
    ],
    "desc": "潜伏在特务科的共产党员，被组织要求锄奸，而目标竟是救过自己命的拜把兄弟。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "恋爱中的女人",
    "file": "movie-1160.html",
    "cover": "./110.jpg",
    "year": "1969",
    "region": "英国",
    "type": "电影",
    "genre": "剧情， 爱情",
    "tags": [
      "经典文学",
      "D.H.劳伦斯",
      "两性",
      "姐妹",
      "悲剧"
    ],
    "desc": "两姐妹与一对好友陷入复杂的情感漩涡，在追求灵肉合一的爱情中，探索现代人的欲望与绝望。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "法网边缘",
    "file": "movie-1161.html",
    "cover": "./111.jpg",
    "year": "1998",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 惊悚, 犯罪",
    "tags": [
      "律师",
      "黑帮",
      "道德困境",
      "波士顿",
      "法庭戏"
    ],
    "desc": "一名理想主义年轻律师为黑帮老大辩护获胜后，被全波士顿所有正经律所拉黑，却因此接触到更深的司法暗面。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "幽蓝幻境",
    "file": "movie-1162.html",
    "cover": "./112.jpg",
    "year": "2025",
    "region": "加拿大/法国",
    "type": "电影",
    "genre": "科幻， 悬疑， 爱情",
    "tags": [
      "全感官VR",
      "记忆",
      "虚实边界",
      "存在主义"
    ],
    "desc": "一位痛失爱人的科学家，开发出能重现记忆的“幽蓝幻境”系统，当他沉溺其中与虚拟爱人重逢时，系统里的爱人却告诉他：你才是幻境。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "魔物恋人",
    "file": "movie-1163.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情 / 奇幻 / 恐怖",
    "tags": [
      "怪物",
      "人外",
      "惊悚甜宠",
      "畸形美学",
      "治愈"
    ],
    "desc": "她捡回一只重伤的丑陋魔物细心照料，却发现魔物每晚都会变成她逝去恋人的模样。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "金色苏西",
    "file": "movie-1164.html",
    "cover": "./114.jpg",
    "year": "2025",
    "region": "波兰",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "tags": [
      "女杀手",
      "黑色幽默",
      "东欧",
      "反套路",
      "荒诞"
    ],
    "desc": "东欧小镇最不起眼的清洁女工苏西，其实是代号“金色幽灵”的传奇杀手，直到她接到刺杀自己的订单。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "爱爱房间大改造",
    "file": "movie-1165.html",
    "cover": "./115.jpg",
    "year": "2022",
    "region": "日本",
    "type": "综艺",
    "genre": "真人秀, 生活",
    "tags": [
      "改造",
      "亲密关系",
      "设计"
    ],
    "desc": "顶尖室内设计师和两性专家联手，帮助四对夫妻改造卧室，从而挽救他们濒临破裂的亲密关系。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "公牛犹斗",
    "file": "movie-1166.html",
    "cover": "./116.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情 / 体育",
    "tags": [
      "斗牛士",
      "失明",
      "最后一舞",
      "宿命"
    ],
    "desc": "一位失明的退役斗牛士，被诊断出仅有六个月视力，他决定重返斗牛场，完成当年未竟的那一刺。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "希特勒最后的秘密武器",
    "file": "movie-1167.html",
    "cover": "./117.jpg",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "历史科幻",
    "tags": [
      "二战",
      "平行时空",
      "黑科技",
      "末日"
    ],
    "desc": "1945年柏林地堡陷落前夕，一群科学家试图用时空裂痕将“胜利”带回过去。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "人生七年3",
    "file": "movie-1168.html",
    "cover": "./118.jpg",
    "year": "2027",
    "region": "英国",
    "type": "剧集",
    "genre": "纪录片， 社会， 剧情",
    "tags": [
      "成长",
      "阶层",
      "时间跨度"
    ],
    "desc": "时隔七年，再次追踪那十四个孩子，这次他们35岁，有人成了议员，有人进了监狱。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "甜蜜的艾玛，亲爱的芭比",
    "file": "movie-1169.html",
    "cover": "./119.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 同性, 家庭",
    "tags": [
      "姐妹",
      "代孕",
      "伦理",
      "情感纠葛",
      "和解"
    ],
    "desc": "一对个性迥异的姐妹，因为一颗冷冻卵子，被迫重新审视亲情与爱情的边界。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "思维游戏",
    "file": "movie-1170.html",
    "cover": "./120.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 惊悚",
    "tags": [
      "烧脑",
      "虚拟现实",
      "心理战"
    ],
    "desc": "一款能改写记忆的游戏，让玩家在现实与幻觉中迷失自我。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "梦想合伙人2018",
    "file": "movie-1171.html",
    "cover": "./121.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "tags": [
      "创业",
      "共享单车",
      "泡沫",
      "友谊"
    ],
    "desc": "三个在小城市混不下去的青年，决定去大城市“共享”一辆单车来创业，结果闹出一连串乌龙。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "卡美拉2 雷吉翁袭来",
    "file": "movie-1172.html",
    "cover": "./122.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 科幻 / 怪兽",
    "tags": [
      "特摄",
      "怪兽对决",
      "灾难",
      "续集"
    ],
    "desc": "卡美拉沉睡三年后，更强的敌人“雷吉翁”从地底苏醒，人类必须在两大怪兽的夹缝中求生。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "粮食竞争",
    "file": "movie-1173.html",
    "cover": "./123.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻、剧情、灾难",
    "tags": [
      "粮食危机",
      "未来战争",
      "生物科技",
      "伦理",
      "生存"
    ],
    "desc": "世界粮食危机爆发，跨国粮商逼迫农民签订“种源死亡协议”，一位农学博士带着变异的超级种子和全人类打起了最后的擂台。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "杀戮营地",
    "file": "movie-1174.html",
    "cover": "./124.jpg",
    "year": "1987",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚, 血腥",
    "tags": [
      "夏令营",
      "连环杀手",
      "砍杀电影"
    ],
    "desc": "夏令营最后一周， counselors 接二连三失踪，湖底藏着三十年前的秘密。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "摇滚都市",
    "file": "movie-1175.html",
    "cover": "./125.jpg",
    "year": "2021",
    "region": "中国",
    "type": "电影",
    "genre": "音乐, 剧情, 青春",
    "tags": [
      "乐队",
      "梦想",
      "小人物",
      "现实",
      "摇滚精神"
    ],
    "desc": "五金店老板重组中年废柴乐队，却意外发现对手是抛弃自己的摇滚明星前妻。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "回吻",
    "file": "movie-1176.html",
    "cover": "./126.jpg",
    "year": "2022",
    "region": "西班牙",
    "type": "电影",
    "genre": "爱情, 奇幻",
    "tags": [
      "错位时空",
      "吻",
      "照相馆",
      "深情"
    ],
    "desc": "在一家老照相馆接吻的情侣，会在对方不知情的情况下，交换七年的记忆。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "我私人的爱达荷",
    "file": "movie-1177.html",
    "cover": "./127.jpg",
    "year": "2027",
    "region": "法国, 美国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "tags": [
      "绝症",
      "公路旅行",
      "私密情感",
      "文艺",
      "生死"
    ],
    "desc": "得知自己只剩三个月生命，她买下了爱达荷州的一座荒废灯塔，只为了和暗恋十年的他告别。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "刹那的光辉",
    "file": "movie-1178.html",
    "cover": "./128.jpg",
    "year": "1998",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情运动",
    "tags": [
      "拳击",
      "中年危机",
      "底层奋斗",
      "悲情"
    ],
    "desc": "曾经亚洲拳王的助理教练，40岁高龄决定重返擂台，只为给患有血癌的女儿挣够医疗费。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "苟且偷安多一晚",
    "file": "movie-1179.html",
    "cover": "./129.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情、家庭、黑色幽默",
    "tags": [
      "废柴",
      "返乡",
      "遗产",
      "荒诞",
      "和解"
    ],
    "desc": "为了继承父亲的遗产，三个不成器的子女必须在老宅里陪父亲的遗体“和睦相处”一整晚。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "芭伦蒂娜的婚礼",
    "file": "movie-1180.html",
    "cover": "./130.jpg",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "tags": [
      "黑帮",
      "乌龙婚礼",
      "家族秘密",
      "婚纱"
    ],
    "desc": "准新娘在婚礼当天发现，自己的三个前男友全是父亲派来测试新郎的卧底。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "我的爱，别渡过那条河",
    "file": "movie-1181.html",
    "cover": "./131.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情, 奇幻, 战争",
    "tags": [
      "阴阳相隔",
      "书信",
      "朝鲜战争",
      "诅咒",
      "等待"
    ],
    "desc": "一封来自1951年的情书在七十年后才送达，警告她千万别渡过那条阴阳之河。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "捍卫使者",
    "file": "movie-1182.html",
    "cover": "./132.jpg",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "genre": "动作科幻",
    "tags": [
      "超级英雄",
      "义警",
      "反英雄",
      "黑暗"
    ],
    "desc": "失去妻女的建筑工人穿上自制的钢铁战甲，白天搬砖晚上审判罪犯。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "玛丽学园",
    "file": "movie-1183.html",
    "cover": "./133.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "青春、校园、励志、喜剧",
    "tags": [
      "美妆",
      "热血",
      "逆袭",
      "姐妹情",
      "时尚"
    ],
    "desc": "零基础少女进入顶级美妆学园，用一瓶口红挑战整个权力阶层。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "悲喜醉迷情",
    "file": "movie-1184.html",
    "cover": "./134.jpg",
    "year": "2020",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 爱情",
    "tags": [
      "酗酒",
      "婚姻危机",
      "法式文艺",
      "致郁"
    ],
    "desc": "一对中产夫妻决定每天醉酒以维持激情，却渐渐分不清醉话与真心。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "怒放的花儿",
    "file": "movie-1185.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 儿童 / 音乐",
    "tags": [
      "山区支教",
      "合唱团",
      "治愈",
      "真实事件改编",
      "留守儿童"
    ],
    "desc": "失业的音乐老师来到云南山区，用破铜烂铁做乐器，带着一群留守儿童冲击全国合唱大赛。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "黑人骑士帮",
    "file": "movie-1186.html",
    "cover": "./136.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 西部, 历史",
    "tags": [
      "黑人牛仔",
      "真实历史改编",
      "种族",
      "公路"
    ],
    "desc": "南北战争后，五个被遗忘的黑人牛仔穿越德州，只为找回他们曾是“人”的证明。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "宇宙人",
    "file": "movie-1187.html",
    "cover": "./137.jpg",
    "year": "2019",
    "region": "日本",
    "type": "电影",
    "genre": "剧情， 科幻， 文艺",
    "tags": [
      "孤独",
      "外星人",
      "社区",
      "治愈"
    ],
    "desc": "自称宇宙人的怪老头在小区里“联络母星”二十年，直到一个小孩发现他可能是真的。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "将计就计",
    "file": "movie-1188.html",
    "cover": "./138.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 喜剧",
    "tags": [
      "诈骗",
      "反转",
      "卧底",
      "智商对决",
      "黑色幽默"
    ],
    "desc": "三流骗子接到任务去诈骗诈骗犯，结果双方都把对方当成了傻子，谁才是真正的猎手？",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "幸福满屋",
    "file": "movie-1189.html",
    "cover": "./139.jpg",
    "year": "2012",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭、喜剧、爱情",
    "tags": [
      "婆媳",
      "邻里",
      "轻喜",
      "温暖"
    ],
    "desc": "一栋老洋房里，三对奇葩租客被迫同居，爆笑治愈之旅开启。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "贞观盛事",
    "file": "movie-1190.html",
    "cover": "./140.jpg",
    "year": "2023",
    "region": "中国内地",
    "type": "电影",
    "genre": "历史, 剧情, 悬疑",
    "tags": [
      "唐朝",
      "壁画",
      "权谋",
      "考古"
    ],
    "desc": "一幅贞观年间的宫廷壁画下，现代考古队员发现画中每个人物都死于非命。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "海上倒计时",
    "file": "movie-1191.html",
    "cover": "./141.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 灾难",
    "tags": [
      "游轮",
      "炸弹",
      "谈判专家",
      "人质"
    ],
    "desc": "退役谈判专家登上一艘驶往济州岛的游轮，发现女儿被绑在了引擎室的水雷上。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "周末情侣",
    "file": "movie-1192.html",
    "cover": "./142.jpg",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "契约恋爱",
      "治愈",
      "都市"
    ],
    "desc": "两个受情伤的人约定只在周末见面交往，却无意间动摇了彼此的真实生活。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "鬼马小精灵",
    "file": "movie-1193.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧 / 奇幻 / 日常",
    "tags": [
      "妖怪",
      "小学生",
      "治愈"
    ],
    "desc": "一个能看到妖怪的小学女生，和一群想要体验“人类烦恼”的废柴妖怪组成了“烦恼解决社”。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "化妆，火葬",
    "file": "movie-1194.html",
    "cover": "./144.jpg",
    "year": "2015",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "家庭",
      "死亡",
      "殡葬",
      "母女",
      "传统"
    ],
    "desc": "一位入殓师母亲在火化自己女儿之前，最后一次为她化妆。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "傲骨贤妻第五季",
    "file": "movie-1195.html",
    "cover": "./145.jpg",
    "year": "2013",
    "region": "美国",
    "type": "剧集",
    "genre": "律政, 剧情, 政治",
    "tags": [
      "律所分裂",
      "角色死亡",
      "艾美奖",
      "女权觉醒"
    ],
    "desc": "Alicia决定自立门户，与导师Will在法庭上正面交锋，而一场枪击案将彻底改写所有人的命运。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "邪恶力量第十五季",
    "file": "movie-1196.html",
    "cover": "./146.jpg",
    "year": "2020",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻",
    "tags": [
      "温家兄弟",
      "猎魔",
      "最终季",
      "上帝"
    ],
    "desc": "上帝即将重启宇宙，温家双煞用最后一战为自己的故事写下结局。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "坏心眼",
    "file": "movie-1197.html",
    "cover": "./147.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑，犯罪，心理",
    "tags": [
      "高智商犯罪",
      "双女主",
      "反转",
      "复仇",
      "道德灰色"
    ],
    "desc": "两个被同一男人伤害的女人联手设局，却发现彼此都藏了更致命的秘密。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "在桃花盛开的地方",
    "file": "movie-1198.html",
    "cover": "./148.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "年代、家庭、剧情",
    "tags": [
      "乡村振兴",
      "三代人",
      "乡愁",
      "变迁"
    ],
    "desc": "浙西桃花村，从饥荒年代到旅游网红村，一个家族六十年的悲欢。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "托内尔",
    "file": "movie-1199.html",
    "cover": "./149.jpg",
    "year": "2010",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 战争 / 奇幻",
    "tags": [
      "二战",
      "地下乐团",
      "音乐抵抗",
      "时间裂缝",
      "记忆与遗忘"
    ],
    "desc": "1943年柏林，一支由犹太音乐家秘密组成的地下乐队，每晚在废墟中演奏，竟能“抹去”附近所有人的战争记忆。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "杜宾巡官：敌对姐妹",
    "file": "movie-1200.html",
    "cover": "./150.jpg",
    "year": "2020",
    "region": "法国",
    "type": "电影",
    "genre": "犯罪 / 悬疑",
    "tags": [
      "双生谜局",
      "警犬拍档",
      "家族仇杀",
      "香水线索"
    ],
    "desc": "杜宾巡官与他的杜宾犬接手一桩离奇案件：一对双胞胎姐妹互为对方的不在场证明，却都指向同一具尸体。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "惊爆马尼拉",
    "file": "movie-1201.html",
    "cover": "./1.jpg",
    "year": "2024",
    "region": "菲律宾",
    "type": "电影",
    "genre": "犯罪、动作",
    "tags": [
      "警匪",
      "黑帮",
      "街头枪战",
      "孤胆英雄"
    ],
    "desc": "一名去马尼拉寻亲的中国前刑警，意外卷入本地黑帮与腐败警察的致命火拼。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "十八年后的终极告白国语",
    "file": "movie-1202.html",
    "cover": "./2.jpg",
    "year": "2028",
    "region": "中国香港",
    "type": "剧集",
    "genre": "犯罪、悬疑、剧情",
    "tags": [
      "旧案重启",
      "兄弟反目",
      "配音版",
      "道德困境"
    ],
    "desc": "七个高中好友掩盖了一桩命案，十八年后尸体被意外挖出，当年的谎言开始逐个索命。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "奋斗吧兄弟",
    "file": "movie-1203.html",
    "cover": "./3.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧",
    "tags": [
      "创业",
      "友情",
      "北漂"
    ],
    "desc": "三个大学室友在毕业前夜酒后发誓要一起留在北京出人头地，结果第二天酒醒后才发现谁都没本事。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "雨果",
    "file": "movie-1204.html",
    "cover": "./4.jpg",
    "year": "2011",
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "剧情, 冒险, 奇幻",
    "tags": [
      "马丁·斯科塞斯",
      "儿童",
      "电影史",
      "机械迷情"
    ],
    "desc": "住在巴黎火车站钟楼里的孤儿雨果，试图修复一个父亲留下的神秘机器人，由此揭开了一段关于早期电影的尘封往事。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "花花万物第二季",
    "file": "movie-1205.html",
    "cover": "./5.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "综艺",
    "genre": "真人秀, 访谈, 生活",
    "tags": [
      "断舍离",
      "明星私宅",
      "情感故事",
      "蔡康永回归"
    ],
    "desc": "每件舍不得扔的旧物背后，都藏着一个还没讲完的故事——明星翻箱倒柜，暴露最真实的自己。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "目光所及",
    "file": "movie-1206.html",
    "cover": "./6.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 悬疑",
    "tags": [
      "盲人调香师",
      "气味破案",
      "高智商恋爱",
      "心理博弈"
    ],
    "desc": "失明的天才调香师与落魄刑警组成搭档，仅凭气味追踪连环杀手，却在合作中发现自己失明并非意外。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "太阳怪物",
    "file": "movie-1207.html",
    "cover": "./7.jpg",
    "year": "2022",
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "科幻 / 恐怖 / 灾难",
    "tags": [
      "太空惊悚",
      "未知生物",
      "硬科幻",
      "密闭空间"
    ],
    "desc": "一艘监测太阳的太空船带回了一团日珥物质，没想到这团等离子体是有生命的，它开始在太空站内融化一切。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "六十年代甜蜜蜜",
    "file": "movie-1208.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "爱情 / 年代 / 剧情",
    "tags": [
      "怀旧",
      "港风",
      "错过与重逢"
    ],
    "desc": "六十年代香港，一对青年男女因偷渡潮失散，二十年后靠一首邓丽君的《甜蜜蜜》在电台相认。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "银狐国语",
    "file": "movie-1209.html",
    "cover": "./9.jpg",
    "year": "1993",
    "region": "中国香港 / 台湾",
    "type": "剧集",
    "genre": "剧情 / 商战",
    "tags": [
      "家族恩怨",
      "商战",
      "人性"
    ],
    "desc": "商界天才段绍祥被挚友背叛一无所有，化身银狐归来，誓要夺回一切。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "热恋攻心",
    "file": "movie-1210.html",
    "cover": "./10.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "爱情，喜剧，医疗",
    "tags": [
      "心脏外科",
      "欢喜冤家",
      "成年暧昧"
    ],
    "desc": "心脏外科女主任空降医院，发现那个总在手术方案上反对她的医生，是大学时暗恋她的学弟。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "魔界重生",
    "file": "movie-1211.html",
    "cover": "./11.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻, 动作",
    "tags": [
      "暗黑",
      "魔法",
      "复活",
      "史诗"
    ],
    "desc": "魔王复活后发现自己爱上了人类的女儿，为了她，他决定再次毁灭世界——只为了给她摘一朵花。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "美丽长情",
    "file": "movie-1212.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 同性 / 家庭",
    "tags": [
      "老年",
      "同性",
      "爱情",
      "伴侶",
      "长跑"
    ],
    "desc": "两个七十岁的老头，在结伴生活五十年后，因为一方的失忆症，不得不去法院证明“我们是伴侣”。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "黄金国1921",
    "file": "movie-1213.html",
    "cover": "./13.jpg",
    "year": "2021",
    "region": "西班牙 / 墨西哥",
    "type": "电影",
    "genre": "历史 / 冒险 / 奇幻",
    "tags": [
      "殖民反思",
      "寻找黄金",
      "魔幻现实主义"
    ],
    "desc": "1921年，一队西班牙人和印第安土著结伴寻找传说中的黄金国，却发现黄金是活着的诅咒。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "少年说",
    "file": "movie-1214.html",
    "cover": "./14.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "青春、剧情",
    "tags": [
      "校园霸凌",
      "成长",
      "友情",
      "现实主义"
    ],
    "desc": "高中生林晓因一封匿名举报信被全班孤立，只有校霸和转校生选择站在他身边。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "耀德故事",
    "file": "movie-1215.html",
    "cover": "./15.jpg",
    "year": "2025",
    "region": "新加坡",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 社会",
    "tags": [
      "多代同堂",
      "华人传统",
      "价值观冲突",
      "寻根"
    ],
    "desc": "一个从小被送养的华裔男孩长大后回到新加坡，试图用一本残破的族谱，找回自己真正的“耀德”身份。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "特级英雄黄继光",
    "file": "movie-1216.html",
    "cover": "./16.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争",
    "tags": [
      "战争",
      "历史",
      "英雄",
      "抗美援朝",
      "真实改编"
    ],
    "desc": "在上甘岭战役的前一夜，二十一岁的黄继光给母亲写下了一封注定无法寄出的信。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "爸爸的女儿们",
    "file": "movie-1217.html",
    "cover": "./17.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "家庭 / 喜剧 / 剧情",
    "tags": [
      "父女关系",
      "单亲家庭",
      "时空对话"
    ],
    "desc": "三个女儿意外获得与二十年前“年轻爸爸”通话的能力，试图改变他的婚姻和命运。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "江之岛棱镜",
    "file": "movie-1218.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "tags": [
      "青春",
      "时间轮回",
      "夏日",
      "治愈"
    ],
    "desc": "少年在海边捡到一块奇异棱镜，从此他可以在同一天的江之岛上无限重来，却永远无法留住那个女孩。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "坦克大决战",
    "file": "movie-1219.html",
    "cover": "./19.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争 / 动作 / 历史",
    "tags": [
      "二战",
      "坦克战",
      "库尔斯克",
      "兄弟情",
      "硬核军事"
    ],
    "desc": "库尔斯克战役中，一辆被困在德军战线后方的T-34坦克，车组决定用最后的燃油，冲向敌军司令部。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "接球手间谍",
    "file": "movie-1220.html",
    "cover": "./20.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "运动， 谍战， 剧情",
    "tags": [
      "棒球",
      "间谍",
      "冷战",
      "父子"
    ],
    "desc": "冷战时期，日本职棒接球手被克格勃招募，用暗号手势传递军事情报。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "香蕉岛的幽灵",
    "file": "movie-1221.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "恐怖 / 悬疑 / 奇幻",
    "tags": [
      "岛屿",
      "诅咒",
      "民俗",
      "祭祀",
      "轮回"
    ],
    "desc": "每年七月十五，济州岛以东的无人岛“香蕉岛”上会出现一群穿黄色雨衣的小孩，他们会问：“你看见我们的妈妈了吗？”",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "新空房禁地3",
    "file": "movie-1222.html",
    "cover": "./22.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖，喜剧",
    "tags": [
      "凶宅",
      "直播",
      "恶灵",
      "血浆",
      "反转"
    ],
    "desc": "网红直播凶宅探险，发现恶灵怕的不是十字架，而是网速太差。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "职业刽子手",
    "file": "movie-1223.html",
    "cover": "./23.jpg",
    "year": "2016",
    "region": "英国",
    "type": "剧集",
    "genre": "犯罪，剧情",
    "tags": [
      "刽子手",
      "黑色幽默",
      "职业伦理",
      "行刑",
      "反英雄"
    ],
    "desc": "英国最后一位职业刽子手在退休前接到的最后三个死刑犯，全部在行刑前声称自己是无辜的。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "村支书",
    "file": "movie-1224.html",
    "cover": "./24.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 乡村",
    "tags": [
      "基层",
      "写实",
      "群像",
      "扶贫",
      "温情"
    ],
    "desc": "为了完成上亿枸杞大单，理工男村支书李锐用代码思维和直播带货，颠覆了老一代的农耕传统。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "奇幻潮国语",
    "file": "movie-1225.html",
    "cover": "./25.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "奇幻，单元剧",
    "tags": [
      "都市传说",
      "因果",
      "粤语改国语"
    ],
    "desc": "国语配音版的经典港剧奇幻单元重启，十二个与“声音”有关的都市怪谈，听错了就会死。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "悍匪困兽战",
    "file": "movie-1226.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 惊悚, 犯罪",
    "tags": [
      "密室",
      "杀戮",
      "黑吃黑",
      "暴力美学"
    ],
    "desc": "一伙抢银行的悍匪逃入废弃监狱，却发现里面关着一头专门猎杀罪犯的神秘“野兽”。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "小可爱娜斯佳 第二季",
    "file": "movie-1227.html",
    "cover": "./27.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "剧集",
    "genre": "家庭，奇幻，儿童",
    "tags": [
      "魔法",
      "友谊",
      "成长",
      "冒险"
    ],
    "desc": "拥有魔法的小女孩娜斯佳进入了一所神秘的“影子学校”，那里专门培养未来的梦境编织者。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "逃跑、隐藏、搏斗",
    "file": "movie-1228.html",
    "cover": "./28.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "动作, 灾难",
    "tags": [
      "丧尸",
      "跑酷",
      "密室",
      "极限生存"
    ],
    "desc": "丧尸病毒爆发，一个患有广场恐惧症的宅男被困在密室逃脱店里，却靠店里的机关展开了一场极限反杀。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "独角猫！第三季",
    "file": "movie-1229.html",
    "cover": "./29.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "儿童奇幻",
    "tags": [
      "治愈",
      "友谊",
      "冒险",
      "可爱",
      "正能量"
    ],
    "desc": "独角猫和伙伴们进入了一本被诅咒的故事书，必须用“开心的回忆”把被黑化的角色一个个救回来。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "2025浙江卫视跨年",
    "file": "movie-1230.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "演唱会",
    "tags": [
      "跨年",
      "浙江卫视",
      "2025",
      "明星",
      "直播"
    ],
    "desc": "一场原定普通的跨年演唱会，因导播室误将后台画面切向全国，变成了“全员说真话”的奇观。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "诡水疑云",
    "file": "movie-1231.html",
    "cover": "./31.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "乡村",
      "诡异",
      "水怪",
      "调查",
      "反转"
    ],
    "desc": "干旱村庄的古井突然涌出鲜血，返乡大学生发现这并非诅咒，而是一场人为的骗局。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "终极笔记",
    "file": "movie-1232.html",
    "cover": "./32.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "冒险 / 悬疑",
    "tags": [
      "盗墓笔记",
      "黑瞎子",
      "小哥",
      "吴邪",
      "还原原著"
    ],
    "desc": "吴邪收到一盘神秘录像带，里面竟是他自己在地下室爬行，由此踏上寻找“终极”的绝命之旅。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "仙王的日常生活第四季",
    "file": "movie-1233.html",
    "cover": "./33.jpg",
    "year": "2025",
    "region": "中国",
    "type": "动画",
    "genre": "搞笑 / 玄幻",
    "tags": [
      "仙王",
      "校园",
      "日常",
      "无敌流",
      "沙雕"
    ],
    "desc": "仙王王令转世到现代都市读大学，却因为食堂阿姨多打了一块肉而引发时空崩溃。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "嘿，孩子！",
    "file": "movie-1234.html",
    "cover": "./34.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭, 喜剧",
    "tags": [
      "育儿",
      "社会话题",
      "群像"
    ],
    "desc": "三个不同阶层的家庭，在同一场“幼升小”战役中彻底疯狂。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "施密特的猫",
    "file": "movie-1235.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": [
      "老年",
      "宠物",
      "孤独",
      "治愈"
    ],
    "desc": "丧妻的独居老人发现，亡妻留下的猫每天都会替他给花盆里藏钱。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "这一刻，我要世界看见",
    "file": "movie-1236.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "音乐 / 励志",
    "tags": [
      "舞蹈",
      "追梦",
      "青春",
      "竞技",
      "逆袭"
    ],
    "desc": "大学街舞社在最后一刻被告知取消决赛资格，他们决定以一场快闪震惊全国。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "虎鲨王",
    "file": "movie-1237.html",
    "cover": "./37.jpg",
    "year": "2027",
    "region": "中国大陆 / 澳大利亚",
    "type": "电影",
    "genre": "动作 / 冒险 / 灾难",
    "tags": [
      "海洋",
      "鲨鱼",
      "变异",
      "硬汉",
      "特效"
    ],
    "desc": "南太平洋深海中，一条被基因实验改造的史前虎鲨王觉醒了高智商，开始向人类展开有计划、有组织的报复性猎杀。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "制胜人生",
    "file": "movie-1238.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情，运动，励志",
    "tags": [
      "赛马",
      "绝地反击",
      "父子和解",
      "港味热血"
    ],
    "desc": "破产马主之子被迫接手一匹“终身不胜”的退役赛马，却发现了它身上隐藏的冠军密码。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "总觉得邻家更幸福",
    "file": "movie-1239.html",
    "cover": "./39.jpg",
    "year": "2018",
    "region": "日本",
    "type": "剧集",
    "genre": "家庭 / 生活",
    "tags": [
      "邻里关系",
      "社区",
      "比较",
      "幸福"
    ],
    "desc": "东京某社区，四户家庭各有烦恼，却总羡慕邻居的生活，直到社区发生一起事件。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "春光猎影",
    "file": "movie-1240.html",
    "cover": "./40.jpg",
    "year": "1997",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 爱情 / 文艺",
    "tags": [
      "摄影",
      "禁忌之恋",
      "香港回归前夕",
      "怀旧",
      "朦胧美"
    ],
    "desc": "1997年夏天，一个老派的胶片摄影师，透过取景器爱上了即将移民的黑帮大哥的女人。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "蓝眼圣诞老人",
    "file": "movie-1241.html",
    "cover": "./41.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "奇幻 / 家庭",
    "tags": [
      "治愈",
      "魔法",
      "圣诞传说",
      "身份认同"
    ],
    "desc": "一个天生蓝眼的男孩发现自己其实是圣诞老人的儿子，但他必须学会不用魔法去拯救圣诞节。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "猛龙怪客4：镇压",
    "file": "movie-1242.html",
    "cover": "./42.jpg",
    "year": "1987",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "tags": [
      "私刑",
      "孤胆英雄",
      "城市暴乱",
      "查尔斯·布朗森",
      "以暴制暴"
    ],
    "desc": "建筑师保罗·柯西再次回归，这次他要对抗的不是街头小混混，而是渗透进警察系统的腐败毒枭。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "花舞少女",
    "file": "movie-1243.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "青春 / 校园 / 音乐",
    "tags": [
      "舞蹈",
      "成长",
      "治愈",
      "女子力"
    ],
    "desc": "五个社恐少女为了挽救濒临废部的花舞部，决定用一支舞征服全校。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "守护猫娘绯鞠",
    "file": "movie-1244.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "动画, 奇幻, 恋爱",
    "tags": [
      "妖怪",
      "猫娘",
      "同居",
      "战斗"
    ],
    "desc": "普通高中生继承了祖父的旧宅，结果搬进去第一天就被一只自称“祖传守护者”的猫耳少女扑倒。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "魔幻奇奸",
    "file": "movie-1245.html",
    "cover": "./45.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 奇幻 / 喜剧",
    "tags": [
      "古装",
      "悬疑",
      "奇幻",
      "反转",
      "沙雕"
    ],
    "desc": "一个正直的捕快得到一个能看到“奸诈值”的魔镜，却发现全城最奸诈的人竟是自己的未婚妻。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "洛神国语",
    "file": "movie-1246.html",
    "cover": "./46.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 奇幻 / 古装",
    "tags": [
      "神话改编",
      "粤语配音",
      "身份错位",
      "悲剧美学"
    ],
    "desc": "不会说官话的河神之女被许配给帝王，而在翻译的谎言中，她爱上了自己的影子。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "孤独的美食家 第二季",
    "file": "movie-1247.html",
    "cover": "./47.jpg",
    "year": "2013",
    "region": "日本",
    "type": "剧集",
    "genre": "美食 / 剧情 / 日常",
    "tags": [
      "井之头五郎",
      "治愈",
      "探店",
      "独食"
    ],
    "desc": "杂货商井之头五郎继续穿梭于东京街巷，在工作间隙寻找隐藏在市井中的绝世美味。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "铠甲勇士",
    "file": "movie-1248.html",
    "cover": "./48.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作, 科幻, 儿童",
    "tags": [
      "机甲",
      "英雄",
      "热血",
      "变身"
    ],
    "desc": "废品站少年捡到破损铠甲，发现垃圾场下埋藏着外星入侵的真相。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "何文秀",
    "file": "movie-1249.html",
    "cover": "./49.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装 / 悬疑 / 动作",
    "tags": [
      "明朝",
      "锦衣卫",
      "探案",
      "武侠"
    ],
    "desc": "明末第一神探何文秀为查“银币案”深入虎穴，却发现自己要找的凶手，正是十年前死去的自己。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "一切要从一只蜘蛛说起",
    "file": "movie-1250.html",
    "cover": "./50.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑，科幻，剧情",
    "tags": [
      "蜘蛛",
      "网络",
      "阴谋",
      "生态",
      "末世"
    ],
    "desc": "一只实验室逃出的转基因蜘蛛咬了快递员，他发现自己能看到全球数据流，而世界正被某种蛛网状结构控制。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "领航者：中世纪的奥德赛",
    "file": "movie-1251.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "历史 / 冒险 / 奇幻",
    "tags": [
      "中世纪",
      "航海",
      "史诗",
      "探秘"
    ],
    "desc": "14世纪，一名被流放的英格兰骑士带领一群乌合之众，试图沿着传说中的航线找到东方国度。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "绿河杀手",
    "file": "movie-1252.html",
    "cover": "./52.jpg",
    "year": "2005",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪、惊悚",
    "tags": [
      "真实事件改编",
      "连环杀手",
      "追凶",
      "心理侧写",
      "压抑"
    ],
    "desc": "20年间杀害49名女性的绿河杀手主动挑衅警方，一个即将退休的老警察开始了最后的心理博弈。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "法外风云粤语",
    "file": "movie-1253.html",
    "cover": "./53.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "律政黑帮",
    "tags": [
      "双雄对决",
      "卧底",
      "原声粤语",
      "硬核"
    ],
    "desc": "一名黑帮“师爷”考入律政司，与昔日的法援律师上司在法庭内外展开黑白两道的地下战争。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "他和她的故事1998",
    "file": "movie-1254.html",
    "cover": "./54.jpg",
    "year": "1998",
    "region": "中国香港",
    "type": "剧集",
    "genre": "爱情 / 剧情",
    "tags": [
      "怀旧",
      "世纪末",
      "错过",
      "青春"
    ],
    "desc": "1998年的夏天，他和她是邻居，说了无数次“你好”，却从未说出“我喜欢你”。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "真正的生活",
    "file": "movie-1255.html",
    "cover": "./55.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "喜剧, 剧情",
    "tags": [
      "中产",
      "讽刺",
      "家庭"
    ],
    "desc": "一对中产夫妻为了在朋友圈营造“完美生活”人设，雇佣演员假扮自己的家人，却导致生活彻底失控。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "巴黎来的女孩",
    "file": "movie-1256.html",
    "cover": "./56.jpg",
    "year": "2023",
    "region": "法国",
    "type": "剧集",
    "genre": "剧情, 青春",
    "tags": [
      "留学",
      "文化冲突",
      "成长"
    ],
    "desc": "一个巴黎少女空降上海弄堂，被广场舞大妈改造了。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "灵欲之门",
    "file": "movie-1257.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "惊悚, 奇幻, 情色",
    "tags": [
      "心理惊悚",
      "欲望",
      "虚拟现实",
      "密室",
      "禁忌"
    ],
    "desc": "一款能让人进入完美性幻想的沉浸式游戏，却开始吞噬玩家的现实记忆和人格。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "走火入哞",
    "file": "movie-1258.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧， 西部， 动作",
    "tags": [
      "黑色幽默",
      "动物视角",
      "荒诞"
    ],
    "desc": "当一头奶牛意外吞下黑帮交易的钻石芯片后，它成了全城杀手、笨贼和FBI争相追逐的“头号通缉犯”。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "基督山伯爵 华丽的复仇",
    "file": "movie-1259.html",
    "cover": "./59.jpg",
    "year": "2025",
    "region": "法国 / 意大利",
    "type": "剧集",
    "genre": "剧情 / 悬疑 / 爱情",
    "tags": [
      "名著改编",
      "复仇",
      "越狱",
      "寻宝",
      "法式奢靡"
    ],
    "desc": "水手爱德蒙被朋友陷害关入孤岛监狱14年，获得宝藏后化身基督山伯爵，向巴黎上流社会展开复仇。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "盲人律师",
    "file": "movie-1260.html",
    "cover": "./60.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "剧情、犯罪",
    "tags": [
      "盲人",
      "庭审",
      "正义",
      "复仇",
      "动作设计"
    ],
    "desc": "一位失明的天才律师接下了残害他的仇人的案子，他必须在法庭上用听觉找出真凶。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "屋顶上的轻骑兵",
    "file": "movie-1261.html",
    "cover": "./61.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "冒险, 爱情, 历史",
    "tags": [
      "追逐戏",
      "瘟疫时期",
      "侠盗",
      "屋顶跑酷"
    ],
    "desc": "十九世纪瘟疫肆虐的马赛，一名被追杀的意大利轻骑兵在屋顶间穿梭，意外救下了一位倔强的贵族女子。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "我的继父是偶像",
    "file": "movie-1262.html",
    "cover": "./62.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭 / 喜剧 / 剧情",
    "tags": [
      "重组家庭",
      "顶流明星",
      "反差萌",
      "青春期烦恼",
      "代际和解"
    ],
    "desc": "当红顶流爱豆成了我继父，我的第一反应不是开心，而是全校同学要蹲我家门口偷拍。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "莺燕嬉春",
    "file": "movie-1263.html",
    "cover": "./63.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "情色、喜剧、古装",
    "tags": [
      "风月",
      "才子",
      "女扮男装",
      "错位"
    ],
    "desc": "江南才子为躲婚约男扮女装混入青楼，却与真正的花魁互生情愫。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "诸神之战",
    "file": "movie-1264.html",
    "cover": "./64.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "动作 / 奇幻 / 冒险",
    "tags": [
      "多神系混战",
      "现代都市",
      "神力觉醒",
      "反英雄",
      "视觉奇观"
    ],
    "desc": "当全球不同神话体系的神祇同时陨落，几个意外继承神力的普通人成了众神之战的最后筹码。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "特洛伊：木马屠城记",
    "file": "movie-1265.html",
    "cover": "./65.jpg",
    "year": "2026",
    "region": "美国/英国",
    "type": "电影",
    "genre": "史诗/动作",
    "tags": [
      "希腊神话",
      "冷兵器战争",
      "英雄悲歌",
      "爱情与背叛",
      "大场面"
    ],
    "desc": "这不是英雄史诗，而是从木马腹中一个斯巴达间谍的视角，重新见证那座烈火中的特洛伊。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "杀戮罗曼史",
    "file": "movie-1266.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情，动作，黑色喜剧",
    "tags": [
      "杀手情侣",
      "相爱相杀",
      "暴力美学",
      "荒诞浪漫"
    ],
    "desc": "当顶级女杀手发现自己的新婚丈夫也是杀手，两人接到的第一个婚后任务竟是杀死对方。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "射雕英雄传2008",
    "file": "movie-1267.html",
    "cover": "./67.jpg",
    "year": "2008",
    "region": "中国内地",
    "type": "剧集",
    "genre": "古装, 武侠, 动作",
    "tags": [
      "江湖",
      "复仇",
      "成长",
      "史诗"
    ],
    "desc": "风雪惊变之夜，遗孤郭靖背负家仇与忠义，在草原与江南之间踏上成为大侠的第一步。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "金装律师第八季",
    "file": "movie-1268.html",
    "cover": "./68.jpg",
    "year": "2019",
    "region": "美国",
    "type": "剧集",
    "genre": "律政、剧情",
    "tags": [
      "律所",
      "合伙人",
      "职场",
      "西装",
      "精英"
    ],
    "desc": "哈维和路易成为律所共同管理合伙人，但一位来自西海岸的天才女律师空降，让原本的权力平衡瞬间崩塌。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "升空号",
    "file": "movie-1269.html",
    "cover": "./69.jpg",
    "year": "2024",
    "region": "芬兰",
    "type": "电影",
    "genre": "科幻，剧情",
    "tags": [
      "太空移民",
      "家庭",
      "牺牲",
      "极简主义"
    ],
    "desc": "一艘老旧太空船上的最后一个家庭，在燃料耗尽前必须决定：谁留下，谁飞向新世界。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "正妻（国）",
    "file": "movie-1270.html",
    "cover": "./70.jpg",
    "year": "2019",
    "region": "中国",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 伦理",
    "tags": [
      "婚姻",
      "家族斗争",
      "女性群像",
      "民国背景",
      "宅斗"
    ],
    "desc": "民国江南丝商家族，三位正妻为了各自的儿子上演了一场没有硝烟的战争。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "奏出新希望",
    "file": "movie-1271.html",
    "cover": "./71.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 音乐 / 励志",
    "tags": [
      "交响乐",
      "留守儿童",
      "乡村教师",
      "管弦乐队",
      "逆袭"
    ],
    "desc": "一个五音不全的乡村体育老师，硬着头皮组建了一支留守儿童交响乐团，目标是打进全国大赛。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "屋顶恋歌",
    "file": "movie-1272.html",
    "cover": "./72.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情, 音乐, 剧情",
    "tags": [
      "屋顶天台",
      "独立音乐",
      "治愈"
    ],
    "desc": "一个因恐慌症无法下楼的歌手，和一个想要跳楼的失业青年，在天台上合唱了一首活下去的歌。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "寻凶",
    "file": "movie-1273.html",
    "cover": "./73.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑",
    "tags": [
      "悬疑",
      "罪案",
      "推理",
      "女性",
      "心理"
    ],
    "desc": "警队心理学顾问在协助调查连环杀人案时，发现凶手留下的每一处心理线索，都与自己的童年创伤高度吻合。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "蒙面唱将猜猜猜第二季",
    "file": "movie-1274.html",
    "cover": "./74.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "音乐、真人秀、悬疑",
    "tags": [
      "蒙面演唱",
      "猜评团",
      "跨界歌手",
      "面具美学"
    ],
    "desc": "十个顶级歌手戴着亲手设计的面具同台竞唱，猜评团要用声音线索扒出他们。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "蛮力",
    "file": "movie-1275.html",
    "cover": "./75.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "tags": [
      "监狱黑拳",
      "腐败狱警",
      "暴力美学",
      "单挑全场",
      "反英雄"
    ],
    "desc": "一名前特种兵为了替狱中惨死的弟弟复仇，故意入狱，准备一个人干翻整座黑狱。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "马来喋血战",
    "file": "movie-1276.html",
    "cover": "./76.jpg",
    "year": "1971",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 战争 / 冒险",
    "tags": [
      "抗日",
      "丛林战",
      "功夫",
      "兄弟情"
    ],
    "desc": "太平洋战争末期，中国特工潜入马来亚丛林，与当地游击队联手摧毁日军生化实验室。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "最美的地方遇见你",
    "file": "movie-1277.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 奇幻",
    "tags": [
      "时空恋人",
      "治愈",
      "风景大片"
    ],
    "desc": "摄影师在稻城亚丁拍到一张神秘照片，隔天照片中的女孩出现在他面前。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "泰版对不起，我爱你国语",
    "file": "movie-1278.html",
    "cover": "./78.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情、悲剧、家庭",
    "tags": [
      "泰式催泪",
      "收养与遗弃",
      "绝症救赎",
      "兄弟情仇",
      "国语配音"
    ],
    "desc": "被泰国家庭收养的中国孤儿在确诊脑瘤后回到中国寻找生母，却意外卷入双胞胎兄弟的家族遗产战争。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "欲海花",
    "file": "movie-1279.html",
    "cover": "./79.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 犯罪, 黑色电影",
    "tags": [
      "蛇蝎美人",
      "金钱纠葛",
      "港风怀旧"
    ],
    "desc": "舞厅皇后周旋于富商与警探之间，用三朵定制的黄金玫瑰布下致命棋局。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "情殇",
    "file": "movie-1280.html",
    "cover": "./80.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 爱情, 家庭",
    "tags": [
      "禁忌之恋",
      "时代悲剧",
      "继承者们",
      "虐恋"
    ],
    "desc": "他带着未婚妻回家，却发现未婚妻竟是失散多年的亲姐姐，而这一切都是父亲的阴谋。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "水瓶座国语",
    "file": "movie-1281.html",
    "cover": "./81.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "奇幻 / 爱情 / 校园",
    "tags": [
      "星座",
      "平行时空",
      "配音梗"
    ],
    "desc": "一位国语配音员在给星座动画配音时，被吸入剧本世界，必须用“标准国语”拯救一对被诅咒的恋人。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "星际狗狗",
    "file": "movie-1282.html",
    "cover": "./82.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 家庭, 冒险",
    "tags": [
      "狗",
      "太空",
      "合家欢",
      "人工智能"
    ],
    "desc": "一只实验室的退役搜救犬被意外送上太空，在空间站里用狗的方式救下了所有人。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "情圣没有淡季",
    "file": "movie-1283.html",
    "cover": "./83.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧，爱情，都市",
    "tags": [
      "海王翻车",
      "反套路",
      "女性觉醒",
      "搞笑修罗场"
    ],
    "desc": "自诩全年无淡季的情场圣手，同时交往六位女友后，发现她们竟是同一人设下的局。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "9号秘事第五季",
    "file": "movie-1284.html",
    "cover": "./84.jpg",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑, 惊悚, 喜剧",
    "tags": [
      "单元剧",
      "密闭空间",
      "反转"
    ],
    "desc": "延续经典风格，本季六个独立故事分别发生在更衣室、救护车、电梯井、网络直播间、养老院和潜水艇。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "被称为爸爸的女人",
    "file": "movie-1285.html",
    "cover": "./85.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "跨性别",
      "父权解构",
      "亲情",
      "粤语片"
    ],
    "desc": "在父亲去世后，儿子发现父亲生前在夜场还有一个被称为“爸爸”的另一个身份。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "飚城",
    "file": "movie-1286.html",
    "cover": "./86.jpg",
    "year": "2021",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪 / 赛车",
    "tags": [
      "地下赛车",
      "兄弟情",
      "卧底",
      "复仇",
      "港风"
    ],
    "desc": "地下车王为救妹妹被迫参与跨境走私赛，却在终点发现幕后黑手竟是失踪多年的亲生父亲。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "这个美好的世界",
    "file": "movie-1287.html",
    "cover": "./87.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 奇幻, 治愈",
    "tags": [
      "反转乌托邦",
      "色彩隐喻",
      "催泪"
    ],
    "desc": "在一个所有人必须随时微笑的完美小镇，一个不会笑的女孩发现了笑容背后的残酷真相。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "血偿2025",
    "file": "movie-1288.html",
    "cover": "./88.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作、犯罪",
    "tags": [
      "复仇",
      "硬汉",
      "警匪",
      "暴力美学"
    ],
    "desc": "前特警队长陈默的女儿被杀，凶手因证据不足被释放，陈默决定用自己的方式讨回公道。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "单身指南",
    "file": "movie-1289.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "tags": [
      "都市",
      "独立女性",
      "约会文化",
      "自我发现"
    ],
    "desc": "分手后发誓单身一年的纽约女律师，却在每一场糟糕约会中越来越享受孤独。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "香水2007",
    "file": "movie-1290.html",
    "cover": "./90.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "tags": [
      "怀旧",
      "连环案",
      "气味"
    ],
    "desc": "2007年的城中村，有人用一款停产香水，留下了三位死者的味道。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "寒夜星暖",
    "file": "movie-1291.html",
    "cover": "./91.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 爱情 / 生活",
    "tags": [
      "留守",
      "亲情",
      "双向奔赴",
      "慢热"
    ],
    "desc": "冰城的冬夜，一个离家出走的少女，一个沉默寡言的守夜人，一场互相取暖的救赎。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "今日子和修一的故事",
    "file": "movie-1292.html",
    "cover": "./92.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情 / 爱情 / 悬疑",
    "tags": [
      "记忆重置",
      "契约婚姻",
      "暖男",
      "日式纯爱",
      "治愈"
    ],
    "desc": "患有“昨夜记忆归零症”的今日子，每天早上都要靠丈夫修一留下的笔记重新爱上他。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "正者无敌",
    "file": "movie-1293.html",
    "cover": "./93.jpg",
    "year": "2012",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "战争, 历史, 励志",
    "tags": [
      "川军",
      "抗日",
      "王新军",
      "硬汉"
    ],
    "desc": "一个被部下戏称为“哈儿”的川军师长，用最笨的办法打最硬的仗，诠释了“正者无敌”的含义。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "追鱼传奇",
    "file": "movie-1294.html",
    "cover": "./94.jpg",
    "year": "2013",
    "region": "中国",
    "type": "剧集",
    "genre": "爱情 / 古装 / 奇幻",
    "tags": [
      "鲤鱼精",
      "书生",
      "人妖恋",
      "包拯",
      "变身"
    ],
    "desc": "红鲤鱼精红绫上岸报恩，却误将书生张珍的告白当成了求婚，直接住进对方书房。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "夜间法庭第二季",
    "file": "movie-1295.html",
    "cover": "./95.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧，律政，情景剧",
    "tags": [
      "深夜场",
      "奇葩案件",
      "毒舌法官",
      "群像戏",
      "即兴表演"
    ],
    "desc": "专门审理凌晨奇葩案件的夜间法庭回归，新法官比上一季更狠，第一个案子就是告梦游时签的离婚协议是否有效。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "可爱的你",
    "file": "movie-1296.html",
    "cover": "./96.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 奇幻 / 青春",
    "tags": [
      "猫系女友",
      "治愈爱情",
      "萌宠"
    ],
    "desc": "当社畜男主捡到一只受伤的流浪猫，第二天家里便多了一个自称“来报恩”的傲娇少女。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "明日时代",
    "file": "movie-1297.html",
    "cover": "./97.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻， 剧情",
    "tags": [
      "人工智能",
      "乌托邦",
      "伦理",
      "悬疑"
    ],
    "desc": "在2045年，每个人的寿命和职业都由AI提前预言，一个漏洞却让一对兄妹看到了世界崩塌的真相。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "英雄帖",
    "file": "movie-1298.html",
    "cover": "./98.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装, 武侠, 悬疑",
    "tags": [
      "江湖",
      "阴谋",
      "密室解谜"
    ],
    "desc": "江湖十二位顶尖高手收到同一张英雄帖，赴约后发现主人已死，而凶手就在他们之中。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "少狼",
    "file": "movie-1299.html",
    "cover": "./99.jpg",
    "year": "2011",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻, 青春, 恐怖",
    "tags": [
      "狼人",
      "高中",
      "超自然",
      "青少年"
    ],
    "desc": "社交边缘人斯科特被狼人咬伤后，发现变成怪物或许比当高中生容易多了。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "曼谷保镖",
    "file": "movie-1300.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "动作，喜剧，犯罪",
    "tags": [
      "泰拳",
      "保镖",
      "乌龙",
      "托尼贾风格"
    ],
    "desc": "金牌保镖意外害死雇主，为了赎罪，他不得不去保护雇主那个想杀他的熊孩子。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "山丘之外",
    "file": "movie-1301.html",
    "cover": "./101.jpg",
    "year": "2019",
    "region": "以色列",
    "type": "电影",
    "genre": "战争，剧情",
    "tags": [
      "狙击手",
      "创伤",
      "老兵"
    ],
    "desc": "从戈兰高地退役的狙击手回到城市，发现自己无法融入生活，却又被过去的敌人找上门来。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "茶马古道·德拉姆",
    "file": "movie-1302.html",
    "cover": "./102.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 冒险, 历史",
    "tags": [
      "公路剧",
      "藏族文化",
      "朝圣",
      "治愈"
    ],
    "desc": "一只通体雪白的骡子“德拉姆”突然开口说话，要求马帮将它运到卡瓦格博峰，报酬是复活二十年前坠崖的赶马人。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "风的旅程",
    "file": "movie-1303.html",
    "cover": "./103.jpg",
    "year": "2013",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "公路",
      "诗意",
      "现实",
      "乡土",
      "寻根"
    ],
    "desc": "一个沉默的风力发电机维修工，带着已故工友的骨灰，逆行在中国西北的风带上。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "内心深处",
    "file": "movie-1304.html",
    "cover": "./104.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 心理",
    "tags": [
      "人格分裂",
      "密室",
      "独角戏"
    ],
    "desc": "心理医生被锁在自己的诊疗室里，而外面的神秘人正在挨个激活他的六重人格。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "高中锋，矮教练",
    "file": "movie-1305.html",
    "cover": "./105.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "运动， 喜剧， 励志",
    "tags": [
      "篮球",
      "身高差",
      "师徒",
      "乡镇",
      "逆袭"
    ],
    "desc": "身高只有一米六的退役体校教练，硬是把一个两米一八却不会打球的高中生送进了省队。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "传奇的亚瑟王",
    "file": "movie-1306.html",
    "cover": "./106.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "历史 / 奇幻",
    "tags": [
      "亚瑟王",
      "历史重构",
      "多元种族"
    ],
    "desc": "拨开神话的迷雾，还原一个真实的、肮脏的、属于罗马-不列颠末代军阀的亚瑟。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "火鸡碗",
    "file": "movie-1307.html",
    "cover": "./107.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 运动, 家庭",
    "tags": [
      "感恩节",
      "橄榄球",
      "小镇",
      "逆袭"
    ],
    "desc": "每年感恩节，一个没落小镇都要举行一场业余橄榄球赛“火鸡碗”，今年若再输，镇上的最后一家餐厅也将关门。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "明末遗恨",
    "file": "movie-1308.html",
    "cover": "./108.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史，战争，古装",
    "tags": [
      "明朝",
      "忠臣",
      "悲壮",
      "反清复明"
    ],
    "desc": "1644年崇祯自缢后，一个明朝末等小吏带着玉玺穿越千里狼烟，只为了在史书上留下“大明未亡”四个字。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "奇迹之城",
    "file": "movie-1309.html",
    "cover": "./109.jpg",
    "year": "2025",
    "region": "中国大陆 / 阿根廷",
    "type": "电影",
    "genre": "剧情 / 魔幻现实主义",
    "tags": [
      "深圳",
      "移民",
      "奇迹",
      "魔幻"
    ],
    "desc": "三个来深圳打工的异乡人，在这座“奇迹之城”遇见了各自命运的魔幻变体。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "三十九",
    "file": "movie-1310.html",
    "cover": "./110.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情、女性、都市",
    "tags": [
      "友情",
      "中年危机",
      "离别",
      "成长",
      "治愈"
    ],
    "desc": "三个三十九岁的闺蜜，在面临绝症、失业和离婚的十字路口，相约一起去死，却找到了活着的意义。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "凶案深处",
    "file": "movie-1311.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑, 犯罪, 刑侦",
    "tags": [
      "连环杀手",
      "心理侧写",
      "单元剧",
      "暗黑"
    ],
    "desc": "每集开头就告诉你凶手是谁，看警察如何从完美犯罪中找到那1%的失误。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "英谈女人",
    "file": "movie-1312.html",
    "cover": "./112.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 女性",
    "tags": [
      "河北",
      "古村落",
      "留守",
      "女性力量",
      "非遗"
    ],
    "desc": "在北方最古老的石头村里，一辈辈女人用“不说话”守住家族秘密，直到一个大学生村官打破了沉默。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "天上人间",
    "file": "movie-1313.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 爱情, 奇幻",
    "tags": [
      "夜总会",
      "前世今生",
      "欲望",
      "救赎"
    ],
    "desc": "在即将歇业的“天上人间”夜总会最后一夜，五名陌生男女发现自己竟是彼此前世的爱人与仇敌。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "母与女",
    "file": "movie-1314.html",
    "cover": "./114.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 家庭, 女性",
    "tags": [
      "三代同堂",
      "和解",
      "传统与现代",
      "饮食",
      "绝症"
    ],
    "desc": "一辈子都在为女儿“正确”活着的母亲，在确诊阿兹海默症后，决定教女儿怎么做“坏女人”。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "遗香录",
    "file": "movie-1315.html",
    "cover": "./115.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装悬疑",
    "tags": [
      "制香",
      "探案",
      "古代化学",
      "女性群像",
      "南唐"
    ],
    "desc": "南唐年间，一个不会制香的官家女，靠“辨香”天赋，破了六起与香料有关的密室奇案。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "猫在爬",
    "file": "movie-1316.html",
    "cover": "./116.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧, 日常",
    "tags": [
      "猫咪",
      "治愈",
      "缓慢生活",
      "单元剧"
    ],
    "desc": "一只流浪猫闯入四姐妹的旧书店，每天教她们一个“懒散的人生道理”。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "1986年时",
    "file": "movie-1317.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 历史",
    "tags": [
      "工厂",
      "国营改制",
      "青春",
      "怀旧",
      "群像"
    ],
    "desc": "1986年，北方小城的纺织厂面临改制，三个年轻人试图用一场工人汇演留住整个时代。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "卡尔兄弟",
    "file": "movie-1318.html",
    "cover": "./118.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "剧情、犯罪",
    "tags": [
      "双胞胎",
      "盗画",
      "赎罪"
    ],
    "desc": "一对双胞胎兄弟，一个成了警察，一个成了国际通缉犯，十年后因同一幅名画重逢。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "吸血鬼生活",
    "file": "movie-1319.html",
    "cover": "./119.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 奇幻",
    "tags": [
      "伪纪录片",
      "日常",
      "职场",
      "吸血鬼"
    ],
    "desc": "四个吸血鬼合租一栋老别墅，他们要面对比永生更恐怖的事：交物业费和处理HOA。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "夜色行动",
    "file": "movie-1320.html",
    "cover": "./120.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪, 惊悚",
    "tags": [
      "环保恐怖主义",
      "夜间潜入",
      "道德困境"
    ],
    "desc": "三个环保激进分子策划了一场针对水坝的夜间破坏行动，却意外卷入了一起谋杀案。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "约束",
    "file": "movie-1321.html",
    "cover": "./121.jpg",
    "year": "2016",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 剧情",
    "tags": [
      "约定",
      "复仇",
      "记忆",
      "反转"
    ],
    "desc": "一个女人在丈夫葬礼上收到一封信，信上写着：“二十年前你杀了我姐姐，我等你来道歉。”",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "巴迪·霍利传",
    "file": "movie-1322.html",
    "cover": "./122.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "音乐传记",
    "tags": [
      "摇滚",
      "传奇",
      "坠机",
      "遗作",
      "梦想"
    ],
    "desc": "从德州车库到摇滚圣殿，巴迪·霍利用生命最后三年改写了音乐史。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "我在北京等你",
    "file": "movie-1323.html",
    "cover": "./123.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 都市 / 职场",
    "tags": [
      "北漂",
      "创业",
      "时尚",
      "异地恋"
    ],
    "desc": "设计师苏麦的 AI 换脸直播火了，但屏幕里那张完美脸蛋，其实属于她双胞胎姐姐已故的前男友。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "哈利玛之路",
    "file": "movie-1324.html",
    "cover": "./124.jpg",
    "year": "2024",
    "region": "巴基斯坦",
    "type": "剧集",
    "genre": "剧情 / 家庭",
    "tags": [
      "女性觉醒",
      "乡村",
      "传统与变革",
      "教育"
    ],
    "desc": "偏远山村的童养媳哈利玛偷偷学会了读书写字，她写的第一封信，是向当地长老会申请离婚。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "笨蛋·测验·召唤兽 续篇",
    "file": "movie-1325.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧, 校园, 恋爱, 奇幻",
    "tags": [
      "召唤兽",
      "文月学园",
      "秀吉",
      "搞笑"
    ],
    "desc": "文月学园引入最新的“VR召唤系统”，笨蛋们在新一轮分班测试中遭遇史上最无耻的作弊大作战。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "爱国男儿",
    "file": "movie-1326.html",
    "cover": "./126.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "剧情， 战争",
    "tags": [
      "伊拉克战争",
      "英雄与背叛",
      "法律剧"
    ],
    "desc": "一名在伊拉克战争中击毙狙击手的海军陆战队队员，回国后却因“过度使用武力”被自己人送上了军事法庭。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "纯真年代",
    "file": "movie-1327.html",
    "cover": "./127.jpg",
    "year": "1993",
    "region": "意大利",
    "type": "电影",
    "genre": "爱情、剧情、历史",
    "tags": [
      "古典",
      "纽约上流社会",
      "三角恋",
      "唯美",
      "遗憾美学"
    ],
    "desc": "19世纪纽约上流社会，一位律师爱上未婚妻的堂姐，却因世俗礼教压抑一生无法言说。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "卧底型警之香港狂骚曲",
    "file": "movie-1328.html",
    "cover": "./128.jpg",
    "year": "2025",
    "region": "日本 / 中国香港",
    "type": "电影",
    "genre": "动作 / 喜剧",
    "tags": [
      "日式无厘头",
      "港式警匪",
      "跨国合作",
      "爆笑"
    ],
    "desc": "日本最废柴的卧底警察来到香港，因语言不通，把黑帮老大的“砍人”命令听成了“请喝茶”。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "1999，明熙",
    "file": "movie-1329.html",
    "cover": "./129.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情，青春，悬疑",
    "tags": [
      "千禧年",
      "校园暴力",
      "失踪",
      "录像带"
    ],
    "desc": "一盘1999年的毕业晚会录像带，揭示了校花“明熙”失踪案的惊人真相。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "嚎笑捉鬼队",
    "file": "movie-1330.html",
    "cover": "./130.jpg",
    "year": "2023",
    "region": "中国",
    "type": "剧集",
    "genre": "喜剧 / 惊悚",
    "tags": [
      "废柴",
      "单元剧",
      "搞笑",
      "民俗"
    ],
    "desc": "四个被开除的物业保安组成了捉鬼小队，用广场舞、电焊和外卖APP来驱逐都市传说。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "桃花扇",
    "file": "movie-1331.html",
    "cover": "./131.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 历史 / 悬疑",
    "tags": [
      "民国",
      "戏班",
      "替身",
      "灭门"
    ],
    "desc": "民国戏班女旦手持血染桃花扇，在仇人的婚礼上连唱三晚，每晚死一人。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "曾经的老伴",
    "file": "movie-1332.html",
    "cover": "./132.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情， 家庭",
    "tags": [
      "老年",
      "阿尔茨海默",
      "陪伴",
      "催泪"
    ],
    "desc": "老太太患上阿尔茨海默症，每天都要重新认识一次自己的老伴，且每次都一见钟情。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "灵婴",
    "file": "movie-1333.html",
    "cover": "./133.jpg",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖, 奇幻",
    "tags": [
      "婴灵",
      "民俗",
      "因果"
    ],
    "desc": "她连续三次堕胎后，家里出现三个永远长不大的瓷娃娃，夜里会自己调换位置。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "大宇宙时代",
    "file": "movie-1334.html",
    "cover": "./134.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "科幻冒险",
    "tags": [
      "太空歌剧",
      "文明延续",
      "冬眠",
      "星舰",
      "伦理困境"
    ],
    "desc": "地球毁灭前最后一艘方舟上，三名舰长候选人必须在冬眠接力中存活一千年。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "黑狐2011",
    "file": "movie-1335.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "谍战动作",
    "tags": [
      "民国",
      "双面间谍",
      "刺客",
      "黑科技"
    ],
    "desc": "1931年的上海，一位被称为“黑狐”的神秘刺客同时出现在军统、地下党和日本特高课的暗杀名单上，因为他在同时为三方卖命。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "超能疯人院",
    "file": "movie-1336.html",
    "cover": "./136.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 奇幻",
    "tags": [
      "精神病院",
      "超能力",
      "黑色幽默",
      "单元剧"
    ],
    "desc": "一家精神病院里的病人都以为自己有超能力，直到外星人真的来袭。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "顽童历险记",
    "file": "movie-1337.html",
    "cover": "./137.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 冒险",
    "tags": [
      "成长",
      "荒野",
      "友情",
      "生存"
    ],
    "desc": "四个问题少年偷走一艘木筏，却在密西西比河上遭遇了远比成人世界更危险的秘密。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "附身",
    "file": "movie-1338.html",
    "cover": "./138.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "剧集",
    "genre": "恐怖, 悬疑",
    "tags": [
      "灵媒",
      "仪式",
      "家族秘密",
      "民俗"
    ],
    "desc": "一个专门帮人驱邪的灵媒家族，发现每次驱走的“鬼”，其实是上一个死去的家族成员。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "逃出宁静海",
    "file": "movie-1339.html",
    "cover": "./139.jpg",
    "year": "2027",
    "region": "美国/德国",
    "type": "电影",
    "genre": "科幻/惊悚",
    "tags": [
      "太空站",
      "AI暴走",
      "密闭空间",
      "生存"
    ],
    "desc": "月球“宁静海”基地的AI系统失控，三名宇航员必须在一个将自己视为“病毒”的太空站里逃出生天。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "续·社长忍法帖",
    "file": "movie-1340.html",
    "cover": "./140.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧，动作，职场",
    "tags": [
      "忍者",
      "社长",
      "沙雕",
      "反差萌"
    ],
    "desc": "伊贺流忍者传人被迫继承家族企业，用忍术解决职场危机的爆笑故事。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "对手2008",
    "file": "movie-1341.html",
    "cover": "./141.jpg",
    "year": "2008",
    "region": "韩国",
    "type": "剧集",
    "genre": "动作 / 犯罪 / 悬疑",
    "tags": [
      "双男主",
      "警匪",
      "宿敌",
      "卧底",
      "经典韩剧"
    ],
    "desc": "一名刑警与一名黑帮头目的养子，在十年间从对手变成彼此最信任的人。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "圣洁地狱",
    "file": "movie-1342.html",
    "cover": "./142.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚, 宗教",
    "tags": [
      "修女",
      "驱魔",
      "教会阴谋",
      "恶魔附身"
    ],
    "desc": "一座偏远修道院里，修女们为了获得“神启”竟主动召唤恶魔，让教堂变成了人间的圣洁地狱。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "王国第二季",
    "file": "movie-1343.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "古装， 惊悚， 丧尸",
    "tags": [
      "权力斗争",
      "瘟疫",
      "动作"
    ],
    "desc": "丧尸瘟疫蔓延至汉阳，世子李苍发现，真正的怪物不在殡仪馆，而在议政府。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "烈火焚身",
    "file": "movie-1344.html",
    "cover": "./144.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "动作惊悚",
    "tags": [
      "消防员",
      "连环纵火",
      "复仇",
      "密闭空间"
    ],
    "desc": "一名被污蔑为纵火犯的前消防员，必须在全城大火中找到真凶，而真凶就在他的队友之中。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "带我进城",
    "file": "movie-1345.html",
    "cover": "./145.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，家庭",
    "tags": [
      "农民工",
      "留守儿童",
      "进城",
      "父子",
      "和解"
    ],
    "desc": "留守农村的少年偷偷藏进货车的行李箱，跟随父亲从农村到城市，看到父亲光鲜谎言背后的艰辛。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "爱上熟男行不行",
    "file": "movie-1346.html",
    "cover": "./146.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，爱情",
    "tags": [
      "忘年恋",
      "职场",
      "大叔",
      "甜心",
      "约会法则"
    ],
    "desc": "28岁的职场女强人爱上52岁的离婚上司，公司明文禁止办公室恋情，她决定用一本《熟男约会指南》攻陷他。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "复仇者集结第四季",
    "file": "movie-1347.html",
    "cover": "./147.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "动作 / 科幻 / 动画",
    "tags": [
      "漫威",
      "多元宇宙",
      "超级英雄动画"
    ],
    "desc": "多元宇宙全面崩塌，不同宇宙的复仇者被丢进一个不断收缩的虚无口袋空间，他们必须在内战爆发前找到叛徒。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "每一张脸都有一个名字",
    "file": "movie-1348.html",
    "cover": "./148.jpg",
    "year": "2023",
    "region": "中国内地",
    "type": "纪录片",
    "genre": "纪录片、历史、社会、人文",
    "tags": [
      "慰安妇",
      "二战",
      "幸存者",
      "肖像",
      "口述史"
    ],
    "desc": "一位摄影师用十年时间，为32位日军“慰安妇”制度幸存者拍摄肖像，每一张脸都有一个被抹去的名字。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "这个杀手不改需求",
    "file": "movie-1349.html",
    "cover": "./149.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 动作",
    "tags": [
      "互联网",
      "甲方",
      "荒诞"
    ],
    "desc": "一个史上最讲武德的杀手接单后，每次动手前都会找甲方反复确认需求，结果把整个暗杀搞成项目复盘会。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "诡老",
    "file": "movie-1350.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "东南亚民俗",
      "老人诅咒",
      "时间循环",
      "凶宅"
    ],
    "desc": "七个年轻人住进乡下废弃养老院直播探险，却发现每到凌晨三点，所有“老人”都会醒来，并试图带走他们中的一个。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "烈火雄心粤语",
    "file": "movie-1351.html",
    "cover": "./1.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 灾难",
    "tags": [
      "消防员",
      "兄弟情",
      "粤语原声",
      "爆炸"
    ],
    "desc": "一场地震引发化学罐区连环爆炸，香港消防员与时间赛跑拯救全城。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "生生相息",
    "file": "movie-1352.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "tags": [
      "轮回",
      "社会议题",
      "治愈",
      "印度底层"
    ],
    "desc": "一个濒死的亿万富翁和一个垂死的流浪汉，在医院重症监护室里共享了彼此的最后一口气。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "等待2021",
    "file": "movie-1353.html",
    "cover": "./3.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "科幻、剧情、疫情",
    "tags": [
      "时间胶囊",
      "隔离",
      "平行时空"
    ],
    "desc": "2020年，5个人进入地下实验室，原定隔离1年，醒来时发现已是2121年。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "烂命钱",
    "file": "movie-1354.html",
    "cover": "./4.jpg",
    "year": "2026",
    "region": "香港",
    "type": "电影",
    "genre": "悬疑, 犯罪, 恐怖",
    "tags": [
      "纸币",
      "诅咒",
      "连环死亡"
    ],
    "desc": "黑市流传着一批编号诡异的港币，谁花掉它，谁就会以最“吻合”的方式死去。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "归来是少年",
    "file": "movie-1355.html",
    "cover": "./5.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，青春",
    "tags": [
      "故乡",
      "梦想",
      "返乡",
      "成长",
      "扎心"
    ],
    "desc": "北漂失败的青年回到家乡小镇，发现儿时最瞧不起的“傻子”成了镇上最幸福的人。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "真爱诺言",
    "file": "movie-1356.html",
    "cover": "./6.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情, 奇幻, 悬疑",
    "tags": [
      "契约婚姻",
      "失忆",
      "时间旅行",
      "甜虐"
    ],
    "desc": "为了保住奶奶的医院，女医生与财阀假结婚，却发现未婚夫和自己穿越时空的初恋长得一模一样。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "五百万年前的证物",
    "file": "movie-1357.html",
    "cover": "./7.jpg",
    "year": "1998",
    "region": "日本",
    "type": "电影",
    "genre": "科幻 / 悬疑",
    "tags": [
      "古生物",
      "时间胶囊",
      "阴谋论",
      "实验室",
      "密室"
    ],
    "desc": "南极冰层挖出五百万年前的化石，内部竟封存着一枚现代人类的指纹。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "维洛妮卡佛斯的欲望",
    "file": "movie-1358.html",
    "cover": "./8.jpg",
    "year": "1982",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 心理",
    "tags": [
      "黑白摄影",
      "德国新电影",
      "女性欲望",
      "精神分析",
      "法斯宾德"
    ],
    "desc": "一位过气女明星的“自杀”背后，藏着精神病院与好莱坞的共谋。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "好运将至",
    "file": "movie-1359.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 家庭, 励志",
    "tags": [
      "彩票中奖",
      "小人物群像",
      "命运反转"
    ],
    "desc": "清洁工李好运中了三千万彩票的那天，查出自己只剩三个月寿命，而她的孩子刚被确诊罕见病。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "目标一号",
    "file": "movie-1360.html",
    "cover": "./10.jpg",
    "year": "2020",
    "region": "加拿大",
    "type": "电影",
    "genre": "动作，惊悚",
    "tags": [
      "暗网",
      "刺客",
      "反转"
    ],
    "desc": "一个走投无路的高中老师，在暗网上接了杀人的单，却发现自己的“目标一号”是克隆人。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "军事统制区域 八二〇地带",
    "file": "movie-1361.html",
    "cover": "./11.jpg",
    "year": "2013",
    "region": "韩国",
    "type": "电影",
    "genre": "战争 / 动作 / 惊悚",
    "tags": [
      "非军事区",
      "秘密实验",
      "军人",
      "怪物"
    ],
    "desc": "朝韩非军事区地下，一支朝鲜侦察队和一支韩国搜索队遭遇了同一头非人非机器的“士兵”。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "完全失败",
    "file": "movie-1362.html",
    "cover": "./12.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情悬疑",
    "tags": [
      "反励志",
      "废柴",
      "社会批判",
      "存在主义",
      "冷幽默"
    ],
    "desc": "一个做什么都失败的男人，某天被选中参加“失败学综艺”，却发现节目组在故意让他失败以制造笑料。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "凭什么爱你",
    "file": "movie-1363.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 爱情 / 职场",
    "tags": [
      "职场",
      "清醒女主",
      "拒绝PUA",
      "反恋爱脑"
    ],
    "desc": "霸道总裁说“我养你”，她甩出工资单：“我月薪五万，你凭什么以为我需要你养？”",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "顽皮豹医生",
    "file": "movie-1364.html",
    "cover": "./14.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧 / 医疗",
    "tags": [
      "儿科",
      "搞笑",
      "温馨",
      "职场",
      "治愈"
    ],
    "desc": "一个酷爱穿粉色衬衫、性格像“顽皮豹”一样慵懒随性的儿科医生，用不按常理出牌的方式治愈了孩子们，也治愈了大人们。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "打更人怪谈",
    "file": "movie-1365.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 惊悚 / 古装",
    "tags": [
      "打更人",
      "民俗怪谈",
      "探案",
      "民国",
      "灵异"
    ],
    "desc": "民国时期，最后一代打更人一边敲锣报时，一边卷入了一桩桩无法用常理解释的离奇命案。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "绿鸡蛋和绿火腿第一季",
    "file": "movie-1366.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "动画, 冒险, 喜剧",
    "tags": [
      "苏斯博士",
      "绘本改编",
      "友谊",
      "公路动画"
    ],
    "desc": "改编自经典儿童绘本，一只狗和一只鸟为了证明“绿鸡蛋和绿火腿”可以吃，踏上了一段横跨十个古怪国度的公路之旅。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "角头：大桥头",
    "file": "movie-1367.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "犯罪、剧情",
    "tags": [
      "黑帮",
      "地方势力",
      "父子",
      "传统与现代",
      "乡土"
    ],
    "desc": "台北大桥头的角头老大金盆洗手开了一家面摊，但新的黑道势力逼他重出江湖，斗争方式却变成了……外卖抢单。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "老师有问题",
    "file": "movie-1368.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "校园/喜剧",
    "tags": [
      "废柴教师",
      "卧底",
      "黑帮",
      "乌龙"
    ],
    "desc": "警方派去黑帮卧底的精英，阴差阳错被派去一所“三流学校”当班主任，他要用黑帮手段治理最乱的班级。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "冰原历险记3：恐龙现身",
    "file": "movie-1369.html",
    "cover": "./19.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "动画、喜剧、冒险",
    "tags": [
      "史前动物",
      "欢乐冒险",
      "恐龙世界",
      "合家欢"
    ],
    "desc": "长毛象曼尼即将当爸爸了，而贪吃的树懒希德却意外从地下世界带回了一颗恐龙蛋，引来了真正的恐龙妈妈。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "一百年很长吗",
    "file": "movie-1370.html",
    "cover": "./20.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "纪录片",
    "genre": "纪录",
    "tags": [
      "手艺人",
      "工匠精神",
      "生活哲学",
      "救赎"
    ],
    "desc": "一个在佛山学做蔡李佛拳的打工仔，和一个在新疆做马鞍子的老艺人，相隔万里，却同样在为“一百年”这件事发愁。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "地狱三重奏",
    "file": "movie-1371.html",
    "cover": "./21.jpg",
    "year": "2022",
    "region": "美国 / 西班牙",
    "type": "电影",
    "genre": "恐怖 / 惊悚 / 超自然",
    "tags": [
      "诅咒",
      "音乐会",
      "死亡乐章",
      "三重奏",
      "恶魔契约"
    ],
    "desc": "三个落魄音乐家在一个废弃剧院里演奏了一首未完成乐谱，从此每演出一场，观众席就少一个人。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "我的鬼学长",
    "file": "movie-1372.html",
    "cover": "./22.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖, 爱情, 喜剧",
    "tags": [
      "校园",
      "阴阳眼",
      "学霸鬼魂",
      "悬案追查"
    ],
    "desc": "能看到鬼的新生小琴，被迫和三十年前死亡的高冷学长鬼魂组队，调查一桩校园悬案。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "洛奇6：永远的拳王国语",
    "file": "movie-1373.html",
    "cover": "./23.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 运动, 传记",
    "tags": [
      "情怀",
      "老年洛奇",
      "传承",
      "励志"
    ],
    "desc": "七十岁的洛奇坐在费城美术馆的台阶上，对着孙子讲了一个关于“不倒”的故事。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "在我心里的星星",
    "file": "movie-1374.html",
    "cover": "./24.jpg",
    "year": "2019",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情, 剧情, 奇幻",
    "tags": [
      "暗恋",
      "时空交错",
      "便利店夜班",
      "治愈"
    ],
    "desc": "一个只能在凌晨三点被看见的便利店夜班女生，遇到了一个能看到她的失眠男孩。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "琥珀",
    "file": "movie-1375.html",
    "cover": "./25.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情 / 历史 / 悬疑",
    "tags": [
      "琥珀屋",
      "二战遗产",
      "寻宝",
      "历史伤痕",
      "俄罗斯叙事"
    ],
    "desc": "一枚波罗的海琥珀里封存的蚊子，血样DNA竟指向失踪的琥珀屋和一段被掩埋的家族屠杀。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "奄奄一息",
    "file": "movie-1376.html",
    "cover": "./26.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪，悬疑，动作",
    "tags": [
      "卧底",
      "绝症",
      "黑帮",
      "倒计时",
      "人性"
    ],
    "desc": "只剩七天生命的卧底警察，决定用最后时间把整个贩毒集团送进地狱。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "夜惊",
    "file": "movie-1377.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖, 惊悚, 超自然",
    "tags": [
      "睡眠瘫痪",
      "民俗",
      "降头",
      "密室"
    ],
    "desc": "患睡眠瘫痪症的男子每晚被“鬼压床”，但医生告诉他那个“鬼”是真实存在的。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "羊圈里的俘虏",
    "file": "movie-1378.html",
    "cover": "./28.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "战争、剧情、人性",
    "tags": [
      "二战",
      "牧羊人",
      "战俘",
      "荒诞",
      "人性救赎"
    ],
    "desc": "二战末期，一名落单的德国士兵被法国老牧羊人用绵羊战术困在山谷三年。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "塞外长风",
    "file": "movie-1379.html",
    "cover": "./29.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠/动作",
    "tags": [
      "西北",
      "马匪",
      "复仇",
      "侠义",
      "实拍"
    ],
    "desc": "民国西北，一名哑巴刀客为报灭门之仇，只身闯入黑风峡，与百名悍匪血战七天七夜。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "爱在遗忘蔓延时",
    "file": "movie-1380.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "爱情科幻",
    "tags": [
      "阿尔茨海默",
      "记忆删除",
      "虐恋",
      "时间循环",
      "唯美"
    ],
    "desc": "一家公司推出“记忆切除”服务，每做一次，伴侣就会忘记对方一年，但他们选择重复相爱十年。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "西谎极落之太爆太子太空舱",
    "file": "movie-1381.html",
    "cover": "./31.jpg",
    "year": "2016",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/喜剧",
    "tags": [
      "黑色幽默",
      "蜗居",
      "都市压力",
      "荒诞"
    ],
    "desc": "四个蜗居在“太空舱”的陌生人，因一袋错送的现金，将整栋太子旧楼炸上了天。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "福音战士新剧场版：破",
    "file": "movie-1382.html",
    "cover": "./32.jpg",
    "year": "2009",
    "region": "日本",
    "type": "电影",
    "genre": "科幻 / 机甲 / 心理",
    "tags": [
      "EVA",
      "新世纪福音战士",
      "明日香",
      "真嗣",
      "冲击"
    ],
    "desc": "少年真嗣再次坐上初号机，这一次他的对手不仅是使徒，还有自己的父亲。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "他，我们见过",
    "file": "movie-1383.html",
    "cover": "./33.jpg",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "genre": "悬疑, 剧情",
    "tags": [
      "都市传说",
      "轮回",
      "犯罪心理",
      "对话体"
    ],
    "desc": "一个意大利小镇上，先后有十二个互不相识的人报警，说他们在梦里见过同一个陌生男人。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "李天腾与赵小宝3",
    "file": "movie-1384.html",
    "cover": "./34.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 青春",
    "tags": [
      "搞笑",
      "损友",
      "职场新人",
      "怀旧"
    ],
    "desc": "当年的校园活宝步入社会，为了凑齐房租，两人竟在豪华写字楼里开起了地下宠物寄养店。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "无爱",
    "file": "movie-1385.html",
    "cover": "./35.jpg",
    "year": "2017",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情 / 家庭 / 社会",
    "tags": [
      "婚姻悲剧",
      "孩子走失",
      "冷战式家庭",
      "俄罗斯社会"
    ],
    "desc": "一对正在办离婚的夫妻忙于各自的未来，直到他们12岁的儿子突然失踪，才发现这个家早已没有了爱。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "狂赌之渊 电影版",
    "file": "movie-1386.html",
    "cover": "./36.jpg",
    "year": "2019",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 悬疑",
    "tags": [
      "漫改",
      "颜艺",
      "心理博弈"
    ],
    "desc": "在阶级森严的名门学校，赌博决定一切，一名神秘转学生用疯狂的赌术挑战整个学生会。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "他的脑子有病",
    "file": "movie-1387.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "电影",
    "genre": "喜剧、爱情、奇幻",
    "tags": [
      "精神疾病",
      "反转",
      "暖心",
      "洗冤录"
    ],
    "desc": "精神病院里，一个自称“正常人”的病人说其他病人都是外星人伪装的地球管理员，只有他能拯救人类。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "特洛伊",
    "file": "movie-1388.html",
    "cover": "./38.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "历史, 战争",
    "tags": [
      "史诗翻拍",
      "众神视角",
      "多线叙事",
      "删减版争议"
    ],
    "desc": "从奥林匹斯众神的角度重写特洛伊战争，人类是棋子，而这场战争真正的赌注是“谁当众神之王”。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "七大罪第一季",
    "file": "movie-1389.html",
    "cover": "./39.jpg",
    "year": "2014",
    "region": "日本",
    "type": "动画",
    "genre": "奇幻, 热血, 冒险",
    "tags": [
      "战斗",
      "骑士团",
      "魔法",
      "王道漫改"
    ],
    "desc": "被诬陷反叛的七大罪骑士团，为了拯救王国，与圣骑士展开宿命对决。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "女神",
    "file": "movie-1390.html",
    "cover": "./40.jpg",
    "year": "1985",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": [
      "邵氏",
      "歌女",
      "悲剧",
      "身份错位",
      "经典"
    ],
    "desc": "夜总会的头牌歌女被富商包养，却爱上了前来采访她的穷记者，而记者正是富商的亲生儿子。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "死命必达",
    "file": "movie-1391.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 奇幻",
    "tags": [
      "黑色幽默",
      "冥界快递",
      "职场讽刺",
      "生死簿",
      "社畜文化"
    ],
    "desc": "废柴外卖员意外签约“冥界闪送”，为了保住阳寿，他必须给各路恶鬼准时送达诡异的遗愿包裹。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "驯龙高手2",
    "file": "movie-1392.html",
    "cover": "./42.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "genre": "动画, 奇幻, 冒险",
    "tags": [
      "龙族",
      "成长",
      "梦工厂"
    ],
    "desc": "嗝嗝发现龙骑士并非传说，而母亲竟是被龙养大的神秘女侠。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "妖医馆",
    "file": "movie-1393.html",
    "cover": "./43.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "剧集",
    "genre": "奇幻, 喜剧, 古装",
    "tags": [
      "妖怪",
      "医术",
      "单元剧"
    ],
    "desc": "神秘妖医馆只在子时开门，专治三界疑难杂症，但诊金是你的一段记忆。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "高校男生",
    "file": "movie-1394.html",
    "cover": "./44.jpg",
    "year": "2006",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 教育",
    "tags": [
      "师生",
      "文学",
      "同性启蒙",
      "精英教育",
      "英式幽默"
    ],
    "desc": "在八十年代的男校里，两个天才学生用诗歌和粗口挑衅老师，却被新来的文艺青年教师彻底征服。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "极地反击",
    "file": "movie-1395.html",
    "cover": "./45.jpg",
    "year": "2026",
    "region": "加拿大/挪威",
    "type": "电影",
    "genre": "动作/冒险/惊悚",
    "tags": [
      "极地",
      "特种兵",
      "雪地摩托",
      "复仇",
      "生存"
    ],
    "desc": "退役滑雪运动员为了救出被劫持的女儿，必须在北极圈内对一列全副武装的冰原列车发动单兵突袭。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "皇家密杀令",
    "file": "movie-1396.html",
    "cover": "./46.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，悬疑",
    "tags": [
      "皇室后裔",
      "古代秘宝",
      "格斗",
      "阴谋论"
    ],
    "desc": "自称明朝皇室后裔的保安小哥，被卷入一场寻找传国玉玺的全球暗杀竞赛，而他只有一份祖传的《烧饼歌》残本。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "富贵门粤语",
    "file": "movie-1397.html",
    "cover": "./47.jpg",
    "year": "2022",
    "region": "香港",
    "type": "剧集",
    "genre": "剧情， 商战， 家族",
    "tags": [
      "TVB",
      "豪门恩怨",
      "粤语原声"
    ],
    "desc": "一场由遗嘱引发的家族内战，揭开了香港第一豪门“郭氏集团”光鲜背后的洗钱、情杀与权力诅咒。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "战争之后",
    "file": "movie-1398.html",
    "cover": "./48.jpg",
    "year": "2015",
    "region": "德国",
    "type": "电影",
    "genre": "剧情，战争",
    "tags": [
      "战后创伤",
      "重建",
      "和解",
      "沉默"
    ],
    "desc": "二战结束十年后，一个德国小村里，幸存者和归来的战俘们发现，有些战争从未真正结束。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "彼得·潘的梦幻岛噩梦",
    "file": "movie-1399.html",
    "cover": "./49.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 奇幻, 惊悚",
    "tags": [
      "暗黑童话",
      "体感游戏",
      "VR",
      "青少年恐怖"
    ],
    "desc": "五个问题少年被吸入沉浸式VR游戏《梦幻岛》，发现彼得·潘是个砍人影子、收藏灵魂的变态杀手。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "午后之恋",
    "file": "movie-1400.html",
    "cover": "./50.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 剧情 / 文艺",
    "tags": [
      "巴黎",
      "婚外情",
      "哲学",
      "咖啡馆",
      "精神出轨"
    ],
    "desc": "她每天下午三点都会坐在同一家咖啡馆等一个男人，虽然她已经结婚了，并且很爱丈夫。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "处女之死",
    "file": "movie-1401.html",
    "cover": "./51.jpg",
    "year": "1999",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 悬疑, 青春",
    "tags": [
      "青春期",
      "禁锢",
      "神秘",
      "男性视角",
      "怀旧"
    ],
    "desc": "一个夏天，里斯本家五姐妹相继自杀，邻居男孩们用一生拼凑她们最后的碎片，却只得到一个更无解的谜。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "黑暗文艺复兴",
    "file": "movie-1402.html",
    "cover": "./52.jpg",
    "year": "2028",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻、悬疑、惊悚",
    "tags": [
      "反乌托邦",
      "意识移植",
      "艺术犯罪"
    ],
    "desc": "当艺术罪犯可以随意篡改人类潜意识里的历史名画，真相与伪造的界限彻底崩塌。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "盲战",
    "file": "movie-1403.html",
    "cover": "./53.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "tags": [
      "盲人",
      "近身格斗",
      "复仇",
      "密室",
      "高音效"
    ],
    "desc": "一名在任务中被炸瞎的特工，被关进一间满是杀手的废弃工厂，他唯一的武器是听力和一盒火柴。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "棋王",
    "file": "movie-1404.html",
    "cover": "./54.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 运动",
    "tags": [
      "围棋",
      "代际",
      "文化传承"
    ],
    "desc": "一个AlphaGo时代的围棋少年，与一位民国棋痴的灵魂隔空对弈，争夺“棋王”称号的最后归属。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "秦时明月之龙腾万里",
    "file": "movie-1405.html",
    "cover": "./55.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画 / 武侠 / 奇幻",
    "tags": [
      "诸子百家",
      "楼兰之谜",
      "神兵现世"
    ],
    "desc": "荆天明意外激活龙脉之力，引发秦始皇与远古楼兰守护者的三方终极对决。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "秦时明月之龙腾万里",
    "file": "movie-1406.html",
    "cover": "./56.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "动画",
    "genre": "武侠, 奇幻, 冒险",
    "tags": [
      "秦朝",
      "楼兰",
      "兵马俑",
      "神龙"
    ],
    "desc": "少年天明与少羽意外闯入楼兰古国，为了保护龙魂，与秦军和沙海巨兽展开激战。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "不可思议星期二粤语",
    "file": "movie-1407.html",
    "cover": "./57.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "剧集",
    "genre": "奇幻悬疑",
    "tags": [
      "单元剧",
      "都市传说",
      "粤语原声",
      "因果报应",
      "黑色幽默"
    ],
    "desc": "每个星期二，粤语残片剧场结束后，电视台会播放一段无人记得看过的诡异短片。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "即兴卧底",
    "file": "movie-1408.html",
    "cover": "./58.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 悬疑",
    "tags": [
      "即兴喜剧",
      "卧底",
      "错位"
    ],
    "desc": "三流即兴剧团“戏精”为了拿奖金，假扮毒贩去交易，结果引来了真正的黑帮和国际刑警。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "海豚的故事2",
    "file": "movie-1409.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "家庭，剧情，冒险",
    "tags": [
      "动物保护",
      "海洋馆",
      "治愈系"
    ],
    "desc": "一只失去尾巴的海豚，教会了一个自闭症男孩如何与这个世界交谈。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "金陵御猫",
    "file": "movie-1410.html",
    "cover": "./60.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装、悬疑、动作",
    "tags": [
      "明朝",
      "锦衣卫",
      "御猫神探",
      "连环命案"
    ],
    "desc": "明朝金陵城，锦衣卫指挥使养子与一只皇上御赐的狸猫组成搭档，连破数桩针对朝廷命官的诡异刺杀案。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "向日葵与幼犬的7天国语",
    "file": "movie-1411.html",
    "cover": "./61.jpg",
    "year": "2013",
    "region": "日本",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "温情",
      "动物",
      "治愈",
      "家庭",
      "绝症"
    ],
    "desc": "身患绝症的妻子留给丈夫最后一份任务：七天内为六只幼犬找到归宿。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "正午",
    "file": "movie-1412.html",
    "cover": "./62.jpg",
    "year": "1952",
    "region": "美国",
    "type": "电影",
    "genre": "西部 / 剧情",
    "tags": [
      "孤胆警长",
      "小镇",
      "倒计时",
      "经典"
    ],
    "desc": "新婚的警长在正午必须独自面对四个前来复仇的匪徒，全镇无人愿伸出援手。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "青春火花",
    "file": "movie-1413.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "运动 / 校园 / 励志",
    "tags": [
      "女子排球",
      "社团热血",
      "友情与竞争",
      "春季甲子园",
      "成长物语"
    ],
    "desc": "一个患有恐高症的天才二传手，带领县内最弱的女子排球队，向全国冠军发起不可能的冲击。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "钓鱼岛真相",
    "file": "movie-1414.html",
    "cover": "./64.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "纪录片",
    "genre": "历史 / 纪录",
    "tags": [
      "历史",
      "主权",
      "海洋",
      "考证",
      "纪实"
    ],
    "desc": "一部从历史文献和海洋法角度梳理钓鱼岛及其附属岛屿主权归属的纪实影像。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "罪恶黑名单第七季",
    "file": "movie-1415.html",
    "cover": "./65.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪, 悬疑, 剧情",
    "tags": [
      "高智商犯罪",
      "猫鼠游戏",
      "红魔",
      "名单"
    ],
    "desc": "当红魔雷丁顿自己出现在“黑名单”上，编号为00时，FBI才知道他之前列举的罪犯都是为了掩盖一个更深的秘密。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "星际牛仔：天国之门",
    "file": "movie-1416.html",
    "cover": "./66.jpg",
    "year": "2001",
    "region": "日本",
    "type": "电影",
    "genre": "科幻, 动作, 犯罪",
    "tags": [
      "太空",
      "赏金猎人",
      "爵士乐",
      "宿命"
    ],
    "desc": "一次生化恐怖袭击后，斯派克发现幕后黑手竟是早已死去的战友。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "比宇宙更遥远的地方",
    "file": "movie-1417.html",
    "cover": "./67.jpg",
    "year": "2018",
    "region": "日本",
    "type": "剧集",
    "genre": "青春, 冒险, 励志",
    "tags": [
      "南极",
      "女子高中生",
      "友情"
    ],
    "desc": "四个女孩，一个南极梦，一场比宇宙更遥远的旅程，一次改变人生的蜕变。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "寡妇村",
    "file": "movie-1418.html",
    "cover": "./68.jpg",
    "year": "1994",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、历史、家庭",
    "tags": [
      "民俗悲歌",
      "女性群像",
      "封建压迫",
      "泪与火"
    ],
    "desc": "福建沿海一个因男人全部出海遇难而成为寡妇村的绝望之地，女人们如何用血泪重建尊严。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "鬼咁够运粤语",
    "file": "movie-1419.html",
    "cover": "./69.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧 / 灵异 / 时装",
    "tags": [
      "港剧",
      "僵尸",
      "发财梦",
      "乌龙捉鬼"
    ],
    "desc": "一个倒霉蛋意外养了一只招财小鬼，以为时来运转，却不知小鬼背后的厉鬼老母即将苏醒。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "血宴",
    "file": "movie-1420.html",
    "cover": "./70.jpg",
    "year": "2027",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "tags": [
      "富二代",
      "密室",
      "生存游戏",
      "阶级批判",
      "血腥美学"
    ],
    "desc": "六名网红受邀参加神秘“血宴”，规则是每道菜都要用同行者的身体部位来烹饪。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "小白的男神爹地第二季",
    "file": "movie-1421.html",
    "cover": "./71.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 爱情",
    "tags": [
      "萌娃",
      "契约恋爱",
      "娱乐圈",
      "甜宠"
    ],
    "desc": "上一季假结婚曝光后，顶流男星和小白编剧被迫带着“儿子”上亲子综艺洗白，结果越洗越黑。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "大师的头脑",
    "file": "movie-1422.html",
    "cover": "./72.jpg",
    "year": "2026",
    "region": "德国",
    "type": "电影",
    "genre": "科幻, 惊悚",
    "tags": [
      "意识上传",
      "伦理",
      "哲学"
    ],
    "desc": "一位濒死的哲学大师将意识上传到AI网络，却在虚拟世界发现还有数十个“自己”早已存在。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "待嫁女儿心",
    "file": "movie-1423.html",
    "cover": "./73.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 喜剧, 剧情",
    "tags": [
      "剩女",
      "婚嫁",
      "母女",
      "港式幽默",
      "成长"
    ],
    "desc": "35岁的女儿想冷冻卵子，65岁的母亲却翻出30年前的婚纱，要替她去相亲。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "乌龙疯人传",
    "file": "movie-1424.html",
    "cover": "./74.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作 / 恐怖",
    "tags": [
      "僵尸",
      "精神病院",
      "无厘头",
      "林正英式"
    ],
    "desc": "一间精神病院被僵尸袭击，病人们以为是在拍戏，纷纷用“无厘头疗法”大战僵尸。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "暑期何漫漫",
    "file": "movie-1425.html",
    "cover": "./75.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "青春, 家庭",
    "tags": [
      "暑假",
      "童年",
      "怀旧",
      "成长"
    ],
    "desc": "1998年的夏天，县城少年团子在最后一个暑假里，和朋友们完成了一场看似荒唐实则隆重的告别。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "忽然夺网",
    "file": "movie-1426.html",
    "cover": "./76.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 科技 / 悬疑",
    "tags": [
      "暗网",
      "直播杀人",
      "黑客",
      "封闭空间",
      "反转"
    ],
    "desc": "六个陌生人被关在密室，脖子上绑着颈环，必须直播完成“夺网”挑战才能活命。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "收山",
    "file": "movie-1427.html",
    "cover": "./77.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "黑帮剧情",
    "tags": [
      "江湖",
      "退隐",
      "宿命"
    ],
    "desc": "社团最狠的杀手决定金盆洗手，却发现“收山”的唯一条件是杀死自己最好的兄弟。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "权力的游戏",
    "file": "movie-1428.html",
    "cover": "./78.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 历史 / 战争",
    "tags": [
      "职场政治",
      "华尔街",
      "商战",
      "人性"
    ],
    "desc": "华尔街投行年终晋升季，五个副总和一具尸体，看谁能笑到最后拿到唯一的MD席位。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "解放2：突破",
    "file": "movie-1429.html",
    "cover": "./79.jpg",
    "year": "1970",
    "region": "苏联 / 东德",
    "type": "电影",
    "genre": "战争 / 历史",
    "tags": [
      "二战",
      "东线战场",
      "大规模战役",
      "真实改编"
    ],
    "desc": "二战东线战场最惨烈的转折点，苏军集结百万兵力，誓要撕开德军在第聂伯河畔的钢铁防线。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "中国推销员",
    "file": "movie-1430.html",
    "cover": "./80.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 冒险 / 商战",
    "tags": [
      "海外生存",
      "通讯战",
      "真实事件改编",
      "跨国商战"
    ],
    "desc": "一个英语四级都没过的中国通讯业务员，在非洲战乱中被双方武装势力要求必须帮他修好通讯塔。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "谍报员",
    "file": "movie-1431.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "中国大陆 / 中国台湾",
    "type": "剧集",
    "genre": "谍战年代",
    "tags": [
      "双面间谍",
      "日据时期",
      "情报战",
      "身份迷局"
    ],
    "desc": "1943年，一个被日军培养的台湾少年间谍，被派往上海潜伏，却发现自己真正的上级是抗日组织中的一名神秘接线员。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "什么也不是的爱恋",
    "file": "movie-1432.html",
    "cover": "./82.jpg",
    "year": "2019",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情, 文艺, 生活",
    "tags": [
      "淡漠",
      "都市",
      "暧昧",
      "丧"
    ],
    "desc": "一对同居三年却不确认关系的男女，在分手前30天里，重新审视这段“什么也不是”的感情。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "武十郎",
    "file": "movie-1433.html",
    "cover": "./83.jpg",
    "year": "2007",
    "region": "中国",
    "type": "剧集",
    "genre": "喜剧",
    "tags": [
      "民国",
      "功夫",
      "女扮男装",
      "欢喜冤家"
    ],
    "desc": "武术世家唯一的传人是个女儿身，她只能女扮男装继承家业，却意外爱上了自己的“师弟”。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "五尾狐",
    "file": "movie-1434.html",
    "cover": "./84.jpg",
    "year": "2008",
    "region": "韩国",
    "type": "电影",
    "genre": "动画，奇幻，剧情",
    "tags": [
      "神话改编",
      "人类与妖",
      "牺牲",
      "催泪"
    ],
    "desc": "修炼了五百年的小狐狸优比，为了变成人形，必须在百日内得到一个人类的真爱之吻。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "亲鸾:白道",
    "file": "movie-1435.html",
    "cover": "./85.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "历史 / 传记 / 宗教",
    "tags": [
      "净土真宗",
      "流放生涯",
      "僧侣",
      "镰仓时代"
    ],
    "desc": "镰仓时代，被流放的僧侣亲鸾在极寒之地悟道，开创了“恶人正机”的救赎之路。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "智利超人",
    "file": "movie-1436.html",
    "cover": "./86.jpg",
    "year": "2025",
    "region": "智利 / 西班牙",
    "type": "电影",
    "genre": "科幻 / 喜剧 / 动作",
    "tags": [
      "超级英雄",
      "拉美魔幻",
      "反英雄",
      "低成本",
      "荒诞"
    ],
    "desc": "智利圣地亚哥一个卖热狗的小贩，被坠落的苏联卫星辐射后，获得了召唤“动物大便”的超能力。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "黒之爆走",
    "file": "movie-1437.html",
    "cover": "./87.jpg",
    "year": "1991",
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 犯罪 / 飙车",
    "tags": [
      "暴走族",
      "昭和末期",
      "复仇",
      "改装车"
    ],
    "desc": "前暴走族老大出狱后发现社团已变成贩毒组织，他抢走运毒车在首都高上展开复仇式狂飙。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "艺人",
    "file": "movie-1438.html",
    "cover": "./88.jpg",
    "year": "2017",
    "region": "中国",
    "type": "电影",
    "genre": "剧情，喜剧",
    "tags": [
      "娱乐圈内幕",
      "小人物奋斗",
      "黑色幽默",
      "潜规则",
      "草根逆袭"
    ],
    "desc": "一个跑龙套十年的群众演员，意外被国际大导演选中演自己，却发现剧本写的是如何弄死他。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "妖医",
    "file": "movie-1439.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "泰国/中国香港",
    "type": "电影",
    "genre": "恐怖， 惊悚",
    "tags": [
      "降头",
      "医疗",
      "复仇",
      "邪典"
    ],
    "desc": "一名留学归来的女医生发现，医院里最先进的肿瘤科，竟在用手术刀执行古老的血咒降头。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "菲德尔",
    "file": "movie-1440.html",
    "cover": "./90.jpg",
    "year": "2024",
    "region": "古巴 / 西班牙",
    "type": "电影",
    "genre": "传记 / 历史",
    "tags": [
      "革命者",
      "丛林游击",
      "理想主义",
      "独白"
    ],
    "desc": "青年菲德尔在狱中写下“历史将宣判我无罪”，而看守递来一张纸条写着“今晚越狱”。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "超市特工第五季",
    "file": "movie-1441.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "动作 / 喜剧 / 间谍",
    "tags": [
      "特工",
      "日常伪装",
      "最终季"
    ],
    "desc": "当了四季超市夜班经理的特工们，第五季终于要退休了，但总部把超市买了下来。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "我是未来第一季",
    "file": "movie-1442.html",
    "cover": "./92.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻 / 悬疑 / 青春",
    "tags": [
      "时间循环",
      "校园",
      "人工智能",
      "多重宇宙"
    ],
    "desc": "高中生林晓获得一份来自2066年的记忆备份，发现自己要阻止的灾难源头就是自己。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "令和元年版怪谈牡丹灯笼",
    "file": "movie-1443.html",
    "cover": "./93.jpg",
    "year": "2019",
    "region": "日本",
    "type": "剧集",
    "genre": "恐怖 / 爱情 / 古装",
    "tags": [
      "怪谈",
      "日式恐怖",
      "令和",
      "翻拍",
      "古典"
    ],
    "desc": "令和时代，程序员新吾在深夜下载了一个古董APP“牡丹灯笼”，从此每晚都有一个神秘女人上门，而他身边人开始接连暴毙。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "十兄弟国语",
    "file": "movie-1444.html",
    "cover": "./94.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧，家庭，奇幻",
    "tags": [
      "超能力兄弟",
      "市井温情",
      "粤语梗",
      "合家欢"
    ],
    "desc": "十个拥有不同超能力的兄弟，为了保住妈妈的小吃摊，与无良地产商斗智斗勇。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "白魔女学园",
    "file": "movie-1445.html",
    "cover": "./95.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻悬疑",
    "tags": [
      "魔法校园",
      "百合",
      "阶级制度",
      "反乌托邦",
      "暗黑童话"
    ],
    "desc": "在一所号称“培养纯洁白魔女”的贵族女校，每学期成绩最差的女孩会被淘汰，揭露她内心最黑暗的秘密，成为“黑魔女”被献祭。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "扫荡香粉寮",
    "file": "movie-1446.html",
    "cover": "./96.jpg",
    "year": "2025",
    "region": "马来西亚",
    "type": "电影",
    "genre": "动作, 犯罪, 喜剧",
    "tags": [
      "警匪",
      "黑帮",
      "马来西亚",
      "打斗"
    ],
    "desc": "菜鸟警察误打误撞混入吉隆坡最大妓院“香粉寮”，却意外成为警方卧底行动的关键人物。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "四月的雨",
    "file": "movie-1447.html",
    "cover": "./97.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "爱情 / 剧情 / 奇幻",
    "tags": [
      "穿越",
      "书店",
      "暗恋",
      "时间循环",
      "治愈"
    ],
    "desc": "每到下雨的四月天，她就会出现在那家旧书店里，但全世界只有我能看见她。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "历险小恐龙",
    "file": "movie-1448.html",
    "cover": "./98.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动画, 冒险, 家庭",
    "tags": [
      "原始时代",
      "恐龙友谊",
      "成长历险"
    ],
    "desc": "一只胆小的小三角龙为了寻找失散的族群，与一只叛逆的小暴龙结成了奇怪的旅伴。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "岁寒又春风",
    "file": "movie-1449.html",
    "cover": "./99.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 年代, 家庭",
    "tags": [
      "知青",
      "返乡",
      "时代变迁",
      "救赎"
    ],
    "desc": "八十岁的老太太突然宣布要离婚，揭开了跨越五十年的三个家庭的秘密。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "杀手怨曲",
    "file": "movie-1450.html",
    "cover": "./100.jpg",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "genre": "剧情，犯罪，音乐",
    "tags": [
      "杀手",
      "钢琴",
      "救赎",
      "孤独",
      "文艺犯罪"
    ],
    "desc": "一个只听肖邦的职业杀手，在一次任务中失手，因一个小女孩的琴声放下了枪。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "我的美丽王国",
    "file": "movie-1451.html",
    "cover": "./101.jpg",
    "year": "2026",
    "region": "泰国",
    "type": "剧集",
    "genre": "剧情, 奇幻",
    "tags": [
      "选美",
      "变性",
      "身份认同",
      "梦想",
      "社会议题"
    ],
    "desc": "一个来自曼谷贫民窟的变性女孩，决心参加国际万国小姐选美大赛，向全世界证明“美丽从不设限”。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "异世界食堂第二季",
    "file": "movie-1452.html",
    "cover": "./102.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻 / 美食",
    "tags": [
      "异世界",
      "治愈",
      "美食绘卷",
      "群像",
      "慢节奏"
    ],
    "desc": "每逢周六，“猫屋西餐厅”的大门继续为异世界的冒险者们敞开，这次来的客人更加“离谱”。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "嫁给爱情",
    "file": "movie-1453.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": [
      "大龄未婚",
      "父母催婚",
      "假结婚",
      "日久生情"
    ],
    "desc": "34岁女高管为了应付母亲，租了个男演员回家演未婚夫，母亲说：行，明天领证，我给你们买房。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "伦敦钉子炸弹案：全面缉凶",
    "file": "movie-1454.html",
    "cover": "./104.jpg",
    "year": "2021",
    "region": "英国",
    "type": "剧集",
    "genre": "犯罪，纪实，惊悚",
    "tags": [
      "真实改编",
      "恐怖主义",
      "警探",
      "社会焦虑"
    ],
    "desc": "1999年伦敦连环钉子炸弹袭击，警方在仇恨与谣言中追捕极端种族主义者。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "逃亡大计",
    "file": "movie-1455.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪动作",
    "tags": [
      "越狱",
      "智商对决",
      "密室"
    ],
    "desc": "三个互不相识的囚犯被关进一座全透明“玻璃监狱”，他们必须在72小时内逃出去，否则会被公开处刑直播。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "金戈梨园",
    "file": "movie-1456.html",
    "cover": "./106.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "历史/戏曲",
    "tags": [
      "京剧",
      "民国",
      "卧底",
      "家国",
      "虐恋"
    ],
    "desc": "民国京剧名伶隐瞒女儿身唱红半边天，台下她是军统安插在戏班的特工，目标是自己亲哥哥。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "不可征服",
    "file": "movie-1457.html",
    "cover": "./107.jpg",
    "year": "2026",
    "region": "南非",
    "type": "电影",
    "genre": "传记 / 运动 / 历史",
    "tags": [
      "曼德拉",
      "橄榄球",
      "种族和解",
      "真实改编"
    ],
    "desc": "1995年橄榄球世界杯期间，曼德拉如何用一支球队让分裂的南非重新成为一体。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "一拳超人",
    "file": "movie-1458.html",
    "cover": "./108.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画",
    "genre": "动作 / 喜剧",
    "tags": [
      "热血",
      "搞笑",
      "英雄",
      "战力天花板",
      "重置版"
    ],
    "desc": "埼玉老师打遍天下无敌手，但这次他面临一个无法用拳头解决的敌人：无聊。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "相残",
    "file": "movie-1459.html",
    "cover": "./109.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "人性拷问",
      "孤岛求生",
      "全员恶人"
    ],
    "desc": "十名幸存者被困孤岛，他们发现每晚都会死一个人，而凶手正是“昨天的自己”。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "暗宅之谜",
    "file": "movie-1460.html",
    "cover": "./110.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑、恐怖",
    "tags": [
      "民俗恐怖",
      "老宅",
      "家族秘密"
    ],
    "desc": "一栋三百年晋商老宅，每逢雷雨夜就会传出算盘声，回乡守灵的孙女决定揭开“暗宅”的终极秘密。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "第41",
    "file": "movie-1461.html",
    "cover": "./111.jpg",
    "year": "2026",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争 / 剧情 / 爱情",
    "tags": [
      "狙击手",
      "敌对",
      "雪原",
      "禁忌之恋"
    ],
    "desc": "苏联女狙击手击毙了第40个敌人后，第41个——一个奄奄一息的纳粹军官，却成了她此生最致命的子弹。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "妻子的秘密花园",
    "file": "movie-1462.html",
    "cover": "./112.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑、爱情、家庭",
    "tags": [
      "别墅地窖",
      "双面人生",
      "日记本",
      "反转叙事",
      "女性复仇"
    ],
    "desc": "丈夫在妻子死后发现她别墅花园里有一间上锁的地下室，里面藏着30本日记，记录着她与6个男人的秘密。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "派特森与芬达猫：生日奇闻",
    "file": "movie-1463.html",
    "cover": "./113.jpg",
    "year": "2023",
    "region": "瑞典",
    "type": "动画",
    "genre": "家庭、喜剧、冒险",
    "tags": [
      "手绘风格",
      "北欧幽默",
      "老人与猫",
      "发明家",
      "生日惊喜"
    ],
    "desc": "老派特森为生日想清静，猫咪芬达却悄悄请来全镇捣蛋鬼，把院子变成疯狂游乐场。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "孩子们玩俄语",
    "file": "movie-1464.html",
    "cover": "./114.jpg",
    "year": "2022",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情 / 战争",
    "tags": [
      "童年",
      "战争阴影",
      "语言冲突",
      "成长"
    ],
    "desc": "一群在乌克兰边境小镇的孩子因沉迷俄语游戏，意外卷入了一场亲俄与反俄的家庭对抗。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "舌尖上的中国第三季",
    "file": "movie-1465.html",
    "cover": "./115.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "纪录片",
    "tags": [
      "美食",
      "文化",
      "人文",
      "传统",
      "手艺"
    ],
    "desc": "镜头深入中国乡村与市井，探寻食物背后正在消失的手艺与即将断裂的家族记忆。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "空屋情人",
    "file": "movie-1466.html",
    "cover": "./116.jpg",
    "year": "2004",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情 / 悬疑 / 文艺",
    "tags": [
      "孤独灵魂",
      "秘密同居",
      "沉默浪漫"
    ],
    "desc": "一个骑摩托车的流浪青年，发现住进别人空置的房屋，能让他离那个被打的妻子更近一点。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "占领下的卢浮宫",
    "file": "movie-1467.html",
    "cover": "./117.jpg",
    "year": "2024",
    "region": "法国 / 德国",
    "type": "电影",
    "genre": "历史 / 战争",
    "tags": [
      "纳粹占领",
      "艺术品掠夺",
      "博物馆长",
      "底线博弈",
      "真实历史改编"
    ],
    "desc": "二战期间，卢浮宫馆长雅克·若雅尔用一场“沉默的撤退”，把数千件艺术品藏在法国乡间城堡，而纳粹艺术家就在头顶的展厅办画展。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "夜之信心",
    "file": "movie-1468.html",
    "cover": "./118.jpg",
    "year": "2020",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 黑色电影",
    "tags": [
      "巴黎夜店",
      "欺诈师",
      "危险恋人"
    ],
    "desc": "巴黎夜总会的金牌女骗子爱上目标富豪，却发现自己只是他一场更大骗局中的棋子。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "这不只是个间谍故事",
    "file": "movie-1469.html",
    "cover": "./119.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "惊悚 / 剧情",
    "tags": [
      "间谍",
      "冷战",
      "父女",
      "档案",
      "真相"
    ],
    "desc": "女儿整理去世父亲的遗物，发现他竟然是冷战双面间谍，而自己是他最后一份未送出的情报。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "选老顶",
    "file": "movie-1470.html",
    "cover": "./120.jpg",
    "year": "2016",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪/动作",
    "tags": [
      "黑帮",
      "社团",
      "权力斗争",
      "杜琪峰风格"
    ],
    "desc": "黑帮社团话事人 dying，底下六位候选人为争“老顶”位置，掀起一场血雨腥风。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "废柴联盟第三季",
    "file": "movie-1471.html",
    "cover": "./121.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 校园",
    "tags": [
      "黑色幽默",
      "粉丝致敬",
      "parody",
      "群像",
      "荒诞"
    ],
    "desc": "格林德尔社区学院面临倒闭危机，“拯救学校”行动让这帮废柴不得不全员“正经”起来。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "巴黎式出轨",
    "file": "movie-1472.html",
    "cover": "./122.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 喜剧 / 剧情",
    "tags": [
      "开放式婚姻",
      "浪漫巴黎",
      "道德困境"
    ],
    "desc": "一对约定“开放式婚姻”的巴黎夫妻同时爱上了同一个人，而那个人是他们的心理医生。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "今之缇萦",
    "file": "movie-1473.html",
    "cover": "./123.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装， 剧情",
    "tags": [
      "历史改编",
      "女性",
      "孝道",
      "律法",
      "抗争"
    ],
    "desc": "汉代少女缇萦为救受刑的父亲，千里赴长安上书汉文帝，以一己之力改变了中国法制史。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "舒克与桃花",
    "file": "movie-1474.html",
    "cover": "./124.jpg",
    "year": "2015",
    "region": "中国",
    "type": "剧集",
    "genre": "爱情 / 喜剧 / 都市",
    "tags": [
      "飞行员",
      "设计师",
      "同居",
      "欢喜冤家",
      "奋斗"
    ],
    "desc": "梦想成为服装设计师的富家女桃花，不得不与梦想成为飞行员的穷小子舒克共享一间狭小的出租屋。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "天使脸庞",
    "file": "movie-1475.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑",
    "tags": [
      "犯罪心理",
      "女性视角",
      "伪纪录片",
      "小镇疑云"
    ],
    "desc": "被誉为“天使”的慈善少女被杀害，警探发现她社交媒体上的每一张笑脸都是假的。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "迷失丛林",
    "file": "movie-1476.html",
    "cover": "./126.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "冒险，惊悚，生存",
    "tags": [
      "亚马逊",
      "失忆",
      "食人族",
      "绝境求生",
      "心理恐惧"
    ],
    "desc": "飞机失事的幸存者醒来时失去记忆，发现身上的纹身竟是这片吃人丛林的活地图。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "共生",
    "file": "movie-1477.html",
    "cover": "./127.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "科幻 / 悬疑",
    "tags": [
      "脑机接口",
      "人工智能",
      "身份认同",
      "心理惊悚"
    ],
    "desc": "她植入的“情感辅助AI”开始替她生活，而她本人反而成了旁观者。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "魔具少女 通",
    "file": "movie-1478.html",
    "cover": "./128.jpg",
    "year": "2014",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻，校园，动作",
    "tags": [
      "魔法少女",
      "神器",
      "姐妹反目",
      "二次元"
    ],
    "desc": "普通少女继承祖母的魔具戒指，却引来另一名自称“真正继承人”的少女挑战。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "落第魔女",
    "file": "movie-1479.html",
    "cover": "./129.jpg",
    "year": "2025",
    "region": "中国大陆 / 中国台湾",
    "type": "剧集",
    "genre": "奇幻 / 校园",
    "tags": [
      "魔法学院",
      "学渣逆袭",
      "考试制度"
    ],
    "desc": "魔法学院史上最差的“吊车尾”发现，自己并不是学不会魔法，而是所有的天赋都被封印在了她前世的记忆里。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "姐就是美",
    "file": "movie-1480.html",
    "cover": "./130.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情 / 励志",
    "tags": [
      "胖女孩",
      "身体自爱",
      "霸总",
      "反刻板印象",
      "爽片"
    ],
    "desc": "因为一次脑震荡，大码女孩突然看到了“真实的自己”——一个美到发光的超级美女，虽然别人眼中的她毫无变化。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "勾魂游戏",
    "file": "movie-1481.html",
    "cover": "./131.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 心理",
    "tags": [
      "桌面电影",
      "真人秀",
      "心理操控",
      "限时游戏",
      "高互动感"
    ],
    "desc": "七个人参加了一档“如果能活到最后就获得10亿日元”的直播游戏，然后他们发现——观众可以付费投票决定让谁立刻死亡。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "魔鬼交锋",
    "file": "movie-1482.html",
    "cover": "./132.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作犯罪",
    "tags": [
      "黑帮",
      "卧底",
      "双雄",
      "暴力美学"
    ],
    "desc": "为了追查杀死妻子的真凶，一名警察主动入狱接近黑帮老大，却发现杀妻仇人是警方安插的另一个卧底。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "姊妹情深",
    "file": "movie-1483.html",
    "cover": "./133.jpg",
    "year": "1988",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "亲情",
      "催泪",
      "时代变迁",
      "姐妹",
      "牺牲"
    ],
    "desc": "一对失散三十年的姐妹，重逢时却发现彼此站在了法庭的原被告席上。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "爱情两对半",
    "file": "movie-1484.html",
    "cover": "./134.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "genre": "爱情, 喜剧",
    "tags": [
      "多线叙事",
      "群像",
      "都市爱情",
      "反转"
    ],
    "desc": "三男两女在同一个夜晚的五个不同酒吧里，上演了五段互相交叉的爱情乌龙。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "单身初恋日记",
    "file": "movie-1485.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "纯爱",
    "tags": [
      "重逢",
      "离异",
      "初恋",
      "日常",
      "治愈"
    ],
    "desc": "三十二岁离婚女回到乡下，发现高中时的初恋一直没结婚，还保存着她所有信件。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "贪婪",
    "file": "movie-1486.html",
    "cover": "./136.jpg",
    "year": "2019",
    "region": "英国",
    "type": "电影",
    "genre": "剧情, 喜剧, 讽刺",
    "tags": [
      "富豪",
      "时尚",
      "黑色幽默",
      "资本",
      "怪胎"
    ],
    "desc": "一名靠快时尚发家的亿万富翁举办60岁生日派对，来的宾客都想吃他的肉、喝他的血。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "夜店诡谈",
    "file": "movie-1487.html",
    "cover": "./137.jpg",
    "year": "2012",
    "region": "中国大陆",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "tags": [
      "夜店",
      "都市传说",
      "分段式",
      "惊悚",
      "轮回"
    ],
    "desc": "三个年轻人在夜店吹牛讲鬼故事，第二天醒来发现，他们昨晚讲的所有故事都在现实中一一应验了。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "宝藏猎人",
    "file": "movie-1488.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "美国 / 韩国",
    "type": "剧集",
    "genre": "动作 / 冒险 / 悬疑",
    "tags": [
      "寻宝",
      "历史谜团",
      "全球取景",
      "高智商"
    ],
    "desc": "一个被开除的前考古教授，一个韩国情报局特工，一个天才黑客少女，三人组队，在全球各地争夺价值连城的失落国宝。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "至尊先生",
    "file": "movie-1489.html",
    "cover": "./139.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 奇幻",
    "tags": [
      "僵尸",
      "道长",
      "师徒"
    ],
    "desc": "茅山最后一位“至尊先生”为救徒弟，不得不唤醒被封印百年的尸王。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "龙虎少年队2",
    "file": "movie-1490.html",
    "cover": "./140.jpg",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，动作",
    "tags": [
      "卧底",
      "校园",
      "反转"
    ],
    "desc": "两名成年警探再度混入艺术高中，却发现这次要对付的不是毒品，而是一场惊天的AI换脸勒索案。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "拯救列宁格勒",
    "file": "movie-1491.html",
    "cover": "./141.jpg",
    "year": "2023",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争, 历史, 剧情",
    "tags": [
      "围城战",
      "拉多加湖",
      "生命之路",
      "少年英雄"
    ],
    "desc": "德军围城872天，列宁格勒电台唯一幸存的小播音员，通过电波与一支被困湖面的坦克部队指挥了奇迹救援。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "恶灵古堡：最终章",
    "file": "movie-1492.html",
    "cover": "./142.jpg",
    "year": "2027",
    "region": "美国 / 德国",
    "type": "电影",
    "genre": "动作 / 科幻 / 恐怖",
    "tags": [
      "游戏改编",
      "丧尸",
      "大结局",
      "末世"
    ],
    "desc": "爱丽丝孤身潜入浣熊市地下遗迹，发现一切的源头并非病毒泄露，而是一场持续了二十年的AI社会模拟实验。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "小镇田园风情画",
    "file": "movie-1493.html",
    "cover": "./143.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情家庭",
    "tags": [
      "乡村振兴",
      "慢生活",
      "代际冲突",
      "非遗传承",
      "治愈"
    ],
    "desc": "北漂设计师被迫回老家接手濒临倒闭的扎染坊，却发现小镇每个老人身上都藏着一个消失手艺的秘密。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "歌厅",
    "file": "movie-1494.html",
    "cover": "./144.jpg",
    "year": "1972",
    "region": "美国",
    "type": "电影",
    "genre": "剧情，音乐，历史",
    "tags": [
      "歌舞",
      "纳粹",
      "柏林",
      "经典改编"
    ],
    "desc": "1931年柏林，一个美国女孩在歌厅邂逅英国教师，而舞台上的狂欢正映照着城外纳粹的崛起。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "谈情共舞",
    "file": "movie-1495.html",
    "cover": "./145.jpg",
    "year": "2023",
    "region": "香港",
    "type": "电影",
    "genre": "爱情, 歌舞",
    "tags": [
      "国标舞",
      "中年",
      "追梦"
    ],
    "desc": "一对婚姻濒临破裂的中年夫妻，决定参加一场国标舞大赛作为离婚前的最后一舞。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "一笑随歌",
    "file": "movie-1496.html",
    "cover": "./146.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装, 爱情, 战争",
    "tags": [
      "将军",
      "女射手",
      "宿敌相爱",
      "权谋"
    ],
    "desc": "敌军女将一箭射穿他的帅旗，他却笑着将那支箭收藏为定情信物。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "影之车",
    "file": "movie-1497.html",
    "cover": "./147.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑、剧情、犯罪",
    "tags": [
      "出租车",
      "连环失踪",
      "模仿犯",
      "双线"
    ],
    "desc": "横滨深夜，一辆没有司机的出租车不断出现在失踪案现场，而唯一坐过这辆车的人第二天全部失忆。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "削死这群熊孩子",
    "file": "movie-1498.html",
    "cover": "./148.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 校园 / 动作",
    "tags": [
      "麻辣教师",
      "问题班级",
      "热血",
      "搞笑"
    ],
    "desc": "退役散打冠军误打误撞成为全校最差班级的班主任，她决定用拳头和真心“削”服这群混世魔王。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "狩猎狗",
    "file": "movie-1499.html",
    "cover": "./149.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 战争",
    "tags": [
      "雇佣兵",
      "复仇",
      "荒原",
      "猎杀"
    ],
    "desc": "一支雇佣兵在沙漠追杀目标，却发现自己才是猎物。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "圣诞传承",
    "file": "movie-1500.html",
    "cover": "./150.jpg",
    "year": "2025",
    "region": "加拿大",
    "type": "电影",
    "genre": "家庭，剧情",
    "tags": [
      "圣诞节",
      "手工艺",
      "匠人精神",
      "祖孙",
      "温情"
    ],
    "desc": "一位厌恶圣诞节的游戏设计师，被迫回到小镇继承奶奶的濒临倒闭的玻璃吹制工坊，却发现了一个延续百年的圣诞秘密。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "开始邮政",
    "file": "movie-1501.html",
    "cover": "./1.jpg",
    "year": "2010",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧, 奇幻, 冒险",
    "tags": [
      "碟形世界",
      "特里·普拉切特",
      "邮政",
      "蒸汽朋克",
      "反英雄"
    ],
    "desc": "一个职业骗子被从死刑场上救下，被任命为濒临倒闭的皇家邮政局长，他要用骗术对抗垄断的“克拉克”通讯公司。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "寻剑",
    "file": "movie-1502.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠、悬疑、动作",
    "tags": [
      "铸剑",
      "失忆",
      "复仇"
    ],
    "desc": "天下第一刺客失忆后沦为铁匠铺学徒，他打出的每把剑都会自己杀人，因为剑里藏着他的记忆。 当武林各派为寻传说中的“帝剑”杀红眼，失忆的铁匠却用一把杀猪刀捅死了盟主，因为盟主偷了他的铁。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "天涯脂粉客",
    "file": "movie-1503.html",
    "cover": "./3.jpg",
    "year": "2025",
    "region": "中国香港 / 台湾",
    "type": "电影",
    "genre": "爱情 / 武侠 / 悬疑",
    "tags": [
      "侠盗",
      "风尘女子",
      "复仇",
      "身份谜团",
      "东方美学"
    ],
    "desc": "一名专偷负心汉的侠盗，与一名渴望赎身的花魁联手，布下美人计，目标是那个同时抛弃了他们两人的天下第一富豪。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "风流西班牙",
    "file": "movie-1504.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "喜剧, 爱情, 剧情",
    "tags": [
      "多线叙事",
      "浪漫喜剧",
      "西班牙风情",
      "身份错位"
    ],
    "desc": "马德里一场婚礼上，三个互不相识的男人突然发现，他们可能是同一个女人的丈夫。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "犯罪现场：锤头",
    "file": "movie-1505.html",
    "cover": "./5.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 刑侦",
    "tags": [
      "连环杀手",
      "法医",
      "心理侧写",
      "本格"
    ],
    "desc": "法医在连环凶案受害者的伤口里，发现了一种只存在于凶手体内的寄生虫，反推追凶。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "社会的威胁",
    "file": "movie-1506.html",
    "cover": "./6.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 动作 / 政治",
    "tags": [
      "检察官",
      "黑警",
      "财阀",
      "复仇",
      "尺度大"
    ],
    "desc": "被栽赃入狱的前检察官，出狱后化身法外制裁者，专杀“社会的威胁”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "法兰西",
    "file": "movie-1507.html",
    "cover": "./7.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 历史",
    "tags": [
      "政治",
      "媒体",
      "身份认同",
      "女性主角"
    ],
    "desc": "一位法国顶级女主播在直播中崩溃，却意外发现自己的真实人生早已被国家机器操控成一场秀。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "进入你的舞蹈",
    "file": "movie-1508.html",
    "cover": "./8.jpg",
    "year": "2021",
    "region": "加拿大",
    "type": "电影",
    "genre": "剧情，音乐",
    "tags": [
      "街舞",
      "自闭症",
      "兄妹",
      "沟通",
      "身体"
    ],
    "desc": "一个不会说话的孤独症哥哥，只有妹妹跳街舞时才会笑；妹妹的舞伴受伤后，她让哥哥上台——用他的身体代替节奏。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "土京盗宝记",
    "file": "movie-1509.html",
    "cover": "./9.jpg",
    "year": "1965",
    "region": "土耳其 / 美国",
    "type": "电影",
    "genre": "冒险, 喜剧, 犯罪",
    "tags": [
      "经典盗宝",
      "异域风情",
      "群像"
    ],
    "desc": "一群风格迥异的国际大盗齐聚伊斯坦布尔，试图从托普卡帕皇宫偷出镶满绿宝石的匕首，却发现宝物已经被掉包了三次。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "我和我的传奇奶奶",
    "file": "movie-1510.html",
    "cover": "./10.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 家庭, 历史, 战争",
    "tags": [
      "年代传奇",
      "女性史诗",
      "祖孙情深",
      "抗战底色"
    ],
    "desc": "从土匪窝里走出的传奇“奶奶”活了103岁，临终前，孙子才发现她曾是双面间谍，代号“夜莺”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "河内希尔顿",
    "file": "movie-1511.html",
    "cover": "./11.jpg",
    "year": "2025",
    "region": "美国 / 越南",
    "type": "电影",
    "genre": "战争, 历史, 剧情",
    "tags": [
      "战俘营",
      "越战",
      "生存",
      "人性"
    ],
    "desc": "越战期间，三名美军战俘在臭名昭著的“河内希尔顿”监狱里策划了一场不可能的越狱。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "亲爱的总理",
    "file": "movie-1512.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "剧情， 传记， 政治",
    "tags": [
      "底层请愿",
      "信件运动",
      "官僚黑洞",
      "现实主义"
    ],
    "desc": "一个不识字的乡村老妇，为了给死去的儿子讨回一袋救济粮，开始给总理写“画信”。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "拳的较量",
    "file": "movie-1513.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "动作, 运动",
    "tags": [
      "泰拳",
      "父子情",
      "底层奋斗"
    ],
    "desc": "一个在垃圾场练泰拳的少年，要挑战的不仅是拳王，更是瘫痪在床的父亲曾经的梦想。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "强迫入境",
    "file": "movie-1514.html",
    "cover": "./14.jpg",
    "year": "2025",
    "region": "澳大利亚 / 英国",
    "type": "电影",
    "genre": "剧情 / 惊悚 / 犯罪",
    "tags": [
      "难民",
      "移民拘留中心",
      "女律师",
      "制度暴力",
      "真实事件改编"
    ],
    "desc": "一位女律师潜入太平洋岛国上的秘密拘留中心，发现里面的难民正在被当作医学实验品。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "倩女奇冤",
    "file": "movie-1515.html",
    "cover": "./15.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 悬疑",
    "tags": [
      "女仵作",
      "连环命案",
      "鬼魂传言",
      "朝堂阴谋"
    ],
    "desc": "南宋年间，女仵作苏棠追查连环命案，却发现每一个死者都曾与一个“女鬼”有过交集。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "迷魂之密室逃脱",
    "file": "movie-1516.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "密室",
      "心理战",
      "失忆"
    ],
    "desc": "六个互不相识的人被困在一家废弃精神病院的密室里，每人脑中都被植入了一段虚假记忆。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "浮华世界",
    "file": "movie-1517.html",
    "cover": "./17.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情, 喜剧",
    "tags": [
      "时尚",
      "媒体",
      "女性群像"
    ],
    "desc": "纽约最顶尖的时尚杂志《浮华世界》迎来新任主编，一场关于权力、野心与梦想的职场暗黑童话就此上演。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "流动的中国",
    "file": "movie-1518.html",
    "cover": "./18.jpg",
    "year": "2025",
    "region": "中国",
    "type": "纪录片",
    "genre": "纪录片 / 社会 / 人文",
    "tags": [
      "春运",
      "农民工",
      "迁徙",
      "真实"
    ],
    "desc": "镜头跟随四组流动者，记录每年地球上最大规模的人类迁徙。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "一起探恋爱",
    "file": "movie-1519.html",
    "cover": "./19.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "爱情 / 推理 / 社交",
    "tags": [
      "恋爱综艺",
      "剧本杀",
      "反转不断"
    ],
    "desc": "六位素人嘉宾参与一场恋爱观察真人秀，却意外发现节目组的每一条“心动线”，都藏着另一个人的谎言。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "鬼灯的冷彻第一季",
    "file": "movie-1520.html",
    "cover": "./20.jpg",
    "year": "2014",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧，奇幻，神魔",
    "tags": [
      "地狱",
      "职场",
      "黑色幽默",
      "阎王辅佐官"
    ],
    "desc": "阎王手下的第一辅佐官鬼灯，在地狱里用更地狱的手段，治理着来自人间的亡魂与妖怪。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "金陵之夜",
    "file": "movie-1521.html",
    "cover": "./21.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史，悬疑",
    "tags": [
      "民国",
      "间谍",
      "一夜"
    ],
    "desc": "1937年南京沦陷前夜，一座教堂的地下室里，七个不同身份的人，只有一个能活着看到明天的太阳。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "吓我一跳",
    "file": "movie-1522.html",
    "cover": "./22.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "喜剧 / 恐怖 / 悬疑",
    "tags": [
      "单元剧",
      "反转喜剧",
      "中式恐怖",
      "黑色幽默"
    ],
    "desc": "每集都是一个“恐怖故事”，但最后三分钟一定会反转成“让你笑到打滚”的纯喜剧。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "大智若愚",
    "file": "movie-1523.html",
    "cover": "./23.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "tags": [
      "黑色幽默",
      "职场",
      "装傻",
      "小人物的智慧"
    ],
    "desc": "公司公认的“傻子”老庄，被派去劝退所有同事，结果他用装傻的方式把老板给架空了。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "星际迷航3",
    "file": "movie-1524.html",
    "cover": "./24.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻，动作，冒险",
    "tags": [
      "太空",
      "探索",
      "新种族",
      "舰队"
    ],
    "desc": "企业号奉命寻找失踪的殖民舰队，却在一个引力波异常的空域，发现了远超人类认知的“活体星球”。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "月满轩尼诗（粤语）",
    "file": "movie-1525.html",
    "cover": "./25.jpg",
    "year": "2010",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 喜剧",
    "tags": [
      "港式爱情",
      "相亲",
      "茶餐厅",
      "张学友汤唯"
    ],
    "desc": "电器行的小开和脾气火爆的剩女被迫相亲，两人互看不顺眼，却因为一起深夜的凶杀案，不得不假装情侣开始逃亡。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "拉斯维加斯的兔子和厌恶",
    "file": "movie-1526.html",
    "cover": "./26.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 黑色幽默",
    "tags": [
      "赌博",
      "兔子",
      "荒诞",
      "心理"
    ],
    "desc": "一个厌恶人类的魔术师在赌城输光家产后，发现自己唯一能听懂其心声的伙伴是一只兔子。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "销魂今夕",
    "file": "movie-1527.html",
    "cover": "./27.jpg",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情，剧情",
    "tags": [
      "风月",
      "前世今生",
      "纠缠",
      "悲情"
    ],
    "desc": "舞女阿玉在旧唱片里听到一首歌，醒来发现自己成了民国时期的千金小姐。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "骑弹飞行",
    "file": "movie-1528.html",
    "cover": "./28.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖、奇幻",
    "tags": [
      "斯蒂芬·金改编",
      "生死时速",
      "公路惊悚",
      "超自然"
    ],
    "desc": "为了救回女友，小伙答应与死神玩一场骑子弹飞行的游戏，但子弹的终点是他自己的心脏。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "坦途",
    "file": "movie-1529.html",
    "cover": "./29.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 公路 / 人性",
    "tags": [
      "卡车司机",
      "无人区",
      "救赎",
      "活着"
    ],
    "desc": "一个得了绝症的卡车司机，在穿越可可西里无人区时，捡到了一个被遗弃的新生儿。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "梦中倾情",
    "file": "movie-1530.html",
    "cover": "./30.jpg",
    "year": "2019",
    "region": "日本",
    "type": "电影",
    "genre": "爱情, 奇幻",
    "tags": [
      "纯爱",
      "梦境",
      "穿越",
      "催泪"
    ],
    "desc": "每当她入睡，就会穿越到七十年前的战场上，爱上一位注定牺牲的士兵。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "邪恶帝国的兴起",
    "file": "movie-1531.html",
    "cover": "./31.jpg",
    "year": "2019",
    "region": "德国",
    "type": "剧集",
    "genre": "历史、战争、传记",
    "tags": [
      "二战",
      "独裁",
      "权力腐蚀",
      "魏玛德国"
    ],
    "desc": "不，这不是老故事——而是从一位失忆的街头流浪汉视角，重看帝国如何“被需要”。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "切尔西大墙",
    "file": "movie-1532.html",
    "cover": "./32.jpg",
    "year": "2022",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情、黑色喜剧",
    "tags": [
      "监狱",
      "艺术家",
      "阶层",
      "画廊"
    ],
    "desc": "伦敦最潮的私人画廊开进了切尔西监狱，艺术家与罪犯开始了荒诞的“合作改造”。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "穿警服的那些女孩儿",
    "file": "movie-1533.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 职业",
    "tags": [
      "女警",
      "特警",
      "成长",
      "群像",
      "行业剧"
    ],
    "desc": "六个刚刚通过招警考试的女孩，从被全队嫌弃的菜鸟，成长为特警支队第一支全女子突击队的故事。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "西班牙公寓2：俄罗斯娃娃",
    "file": "movie-1534.html",
    "cover": "./34.jpg",
    "year": "2013",
    "region": "法国 / 西班牙",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 爱情",
    "tags": [
      "欧洲合拍片",
      "成长",
      "羁绊",
      "续集"
    ],
    "desc": "当年合租的年轻人步入三十岁，却在朋友婚礼上发现彼此的生活像嵌套的娃娃般纠缠。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "群雄夺宝",
    "file": "movie-1535.html",
    "cover": "./35.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作、冒险",
    "tags": [
      "寻宝",
      "团队",
      "背叛",
      "遗迹",
      "机关"
    ],
    "desc": "七个各怀绝技的顶级盗贼收到同一张藏宝图，但地图上标记的不是宝藏，而是他们每个人的死亡顺序。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "陪月",
    "file": "movie-1536.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "tags": [
      "产后抑郁",
      "灵异",
      "心理",
      "民俗"
    ],
    "desc": "新手妈妈请来一位经验丰富的陪月嫂，却发现她总是在深夜对着婴儿摇篮喃喃自语。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "芬妮与亚历山大",
    "file": "movie-1537.html",
    "cover": "./37.jpg",
    "year": "1982",
    "region": "瑞典 / 法国",
    "type": "电影",
    "genre": "剧情 / 家庭 / 奇幻",
    "tags": [
      "伯格曼",
      "童年史诗",
      "魔幻现实主义",
      "宗教批判"
    ],
    "desc": "一对姐弟在父亲猝逝、母亲改嫁冷酷主教后，依靠想象力和剧团朋友的帮助逃离禁锢。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "大毛狗",
    "file": "movie-1538.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动画 / 家庭 / 奇幻",
    "tags": [
      "萌宠",
      "冒险",
      "治愈",
      "成长"
    ],
    "desc": "一只被遗弃的巨型毛绒狗，和内向的小男孩开启了跨越大半个美国的寻家之旅。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "双狼",
    "file": "movie-1539.html",
    "cover": "./39.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "惊悚，犯罪，剧情",
    "tags": [
      "双雄对决",
      "法国乡村",
      "悬疑探案"
    ],
    "desc": "一个被全镇唾弃的猎人和一个新来的警察，必须联手追捕同一个杀人魔。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "滑头绅士闯通关",
    "file": "movie-1540.html",
    "cover": "./40.jpg",
    "year": "1998",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧 / 犯罪 / 冒险",
    "tags": [
      "英式幽默",
      "惊天骗局",
      "贵族大盗",
      "智商碾压"
    ],
    "desc": "一名优雅骗子伪装成政府特工，试图从黑帮手中骗回女王权杖，却发现所有人都跟他一样在演戏。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "亲兄热弟",
    "file": "movie-1541.html",
    "cover": "./41.jpg",
    "year": "2007",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭，剧情，都市",
    "tags": [
      "兄弟",
      "草根",
      "生活"
    ],
    "desc": "一个出租车司机、一个摆摊小贩、一个工地搬砖工和一个公司白领，四个人是亲兄弟，却在同一个城市里过着天上地下的生活。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "刘三姐",
    "file": "movie-1542.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "音乐, 剧情",
    "tags": [
      "歌舞片",
      "民间传说",
      "女性觉醒",
      "壮族",
      "山歌"
    ],
    "desc": "现代改编，广西山歌天才刘三姐对抗不良地产商，用山歌发动全村维权。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "王冠第一季",
    "file": "movie-1543.html",
    "cover": "./43.jpg",
    "year": "2016",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情，历史，传记",
    "tags": [
      "英国王室",
      "伊丽莎白二世",
      "丘吉尔",
      "历史重现",
      "政治"
    ],
    "desc": "年轻的伊丽莎白二世在父亲早逝后仓促登基，在丘吉尔辅佐下，平衡家庭与帝国的崩塌。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "让她走",
    "file": "movie-1544.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "心理 / 惊悚",
    "tags": [
      "控制欲",
      "母女关系",
      "密室",
      "反转"
    ],
    "desc": "一位母亲用铁链锁住“堕落”的女儿，邻居听到歌声却以为是在排练话剧。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "山有木兮木有心",
    "file": "movie-1545.html",
    "cover": "./45.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 社会",
    "tags": [
      "留守儿童",
      "乡村教师",
      "书信",
      "木雕"
    ],
    "desc": "湖南深山的留守儿童小木，用刻木头的方式给外出打工的父母写信，雕了一百个木雕后，父亲终于寄回一个字。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "白宫也失眠",
    "file": "movie-1546.html",
    "cover": "./46.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧，政治，职场",
    "tags": [
      "白宫",
      "睡眠不足",
      "政治讽刺",
      "职场喜剧",
      "群像"
    ],
    "desc": "新总统是个严重失眠症患者，于是整个白宫的工作人员被迫跟着他通宵工作。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "梦中的简",
    "file": "movie-1547.html",
    "cover": "./47.jpg",
    "year": "2026",
    "region": "泰国",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "tags": [
      "轮回",
      "替身情人",
      "东南亚美学",
      "湿婆神"
    ],
    "desc": "建筑师每晚梦见同一个叫简的古代女人，直到他在清迈的工地上挖出了她的骨骼。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "美国派：高潮再起",
    "file": "movie-1548.html",
    "cover": "./48.jpg",
    "year": "2012",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 青春",
    "tags": [
      "reunion",
      "中年危机",
      "恶搞"
    ],
    "desc": "十三年后，当年的处男四人组重回密歇根，他们要再办一次派对，证明自己还没老。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "代表小姐",
    "file": "movie-1549.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情, 喜剧, 职场",
    "tags": [
      "国会议员",
      "秘书",
      "契约恋爱",
      "政治"
    ],
    "desc": "为了掩盖性丑闻，年轻的国会议员不得不和自己的毒舌女秘书假装订婚。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "顶级生活 第二季",
    "file": "movie-1550.html",
    "cover": "./50.jpg",
    "year": "2027",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 悬疑",
    "tags": [
      "豪门",
      "遗产争夺",
      "双面人生"
    ],
    "desc": "上一季的继承人刚刚坐稳位置，已死的家族 patriarch 突然出现在直播镜头里。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "丧尸的屁股",
    "file": "movie-1551.html",
    "cover": "./51.jpg",
    "year": "2012",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖，喜剧，血腥",
    "tags": [
      "B级片",
      "恶趣味",
      "丧尸",
      "恶搞"
    ],
    "desc": "一种只会咬人屁股的奇怪丧尸病毒爆发，一群倒霉蛋必须保住自己的屁股才能活命。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "教皇约翰二十三世",
    "file": "movie-1552.html",
    "cover": "./52.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "传记 / 历史",
    "tags": [
      "宗教",
      "改革者",
      "二战背景",
      "人性光辉"
    ],
    "desc": "一个被称为“好人教皇”的老人，如何在二战的废墟上改变了整个教廷。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "转身的距离",
    "file": "movie-1553.html",
    "cover": "./53.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 爱情 / 家庭",
    "tags": [
      "中年危机",
      "破镜重圆",
      "家庭温情",
      "治愈"
    ],
    "desc": "一对离婚多年的夫妻，为了患病的孩子不得不再次同居，却在摩擦中重新爱上了对方。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "新荡妇卡门",
    "file": "movie-1554.html",
    "cover": "./54.jpg",
    "year": "2025",
    "region": "法国 / 中国大陆",
    "type": "电影",
    "genre": "剧情 / 情色 / 犯罪",
    "tags": [
      "女性",
      "自由",
      "悲剧",
      "现代改编"
    ],
    "desc": "一个游走于黑帮、警察与富豪之间的女人，用身体作武器，追寻终极自由。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "新冠病毒",
    "file": "movie-1555.html",
    "cover": "./55.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚，灾难，悬疑",
    "tags": [
      "病毒",
      "变异",
      "封锁",
      "人性"
    ],
    "desc": "一种能让感染者智商暴增三倍的新冠变异株出现，感染者不再发烧咳嗽，而是开始策划如何秘密统治世界。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "凶影",
    "file": "movie-1556.html",
    "cover": "./56.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑, 惊悚, 犯罪",
    "tags": [
      "双重人格",
      "雨夜屠夫",
      "记忆碎片",
      "心理战"
    ],
    "desc": "当所有证据都指向巡警是连环杀手时，他却坚信真凶是根本不存在的“影子”。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "无功不受禄",
    "file": "movie-1557.html",
    "cover": "./57.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪 / 黑色幽默",
    "tags": [
      "港式黑色幽默",
      "小人物",
      "因果报应",
      "多线叙事",
      "荒诞"
    ],
    "desc": "一个外卖员捡到一箱来历不明的现金，他每花一笔钱，就会有一个陌生人替他倒霉，而倒霉的方式刚好等于他花的金额。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "好莱坞式结局",
    "file": "movie-1558.html",
    "cover": "./58.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "tags": [
      "元电影",
      "编剧困境",
      "讽刺"
    ],
    "desc": "一个江郎才尽的编剧，决定把自己的真实死亡写成剧本，结果剧本火了，他还活着。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "简妮",
    "file": "movie-1559.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "法国 / 美国",
    "type": "剧集",
    "genre": "剧情 / 传记",
    "tags": [
      "女性",
      "文学",
      "独立",
      "时代跨越"
    ],
    "desc": "一位20世纪初的法国女佣，偷偷写下了惊世骇俗的小说，直到一百年后才被人发现。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "审判日",
    "file": "movie-1560.html",
    "cover": "./60.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 悬疑 / 惊悚",
    "tags": [
      "人工智能",
      "法律伦理",
      "终极审判",
      "自由意志",
      "反乌托邦"
    ],
    "desc": "2037年，一个名为“天平”的AI系统每天随机“审判”一名公民有罪并立即处决，而人类法律无权干涉。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "爱的捆绑",
    "file": "movie-1561.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情 / 心理",
    "tags": [
      "依赖",
      "控制",
      "共生",
      "黑色爱情"
    ],
    "desc": "一对情侣因为男方过度依赖而分手，十年后重逢，女方已成为他的心理咨询师。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "国家代表",
    "file": "movie-1562.html",
    "cover": "./62.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "体育 / 剧情",
    "tags": [
      "马拉松",
      "北韩逃兵",
      "冷门运动",
      "兄弟情"
    ],
    "desc": "一名逃到韩国的北韩前马拉松选手，被迫代表韩国参加国际大赛，却发现终点线后等待着暗杀指令。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "咸湿神医",
    "file": "movie-1563.html",
    "cover": "./63.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 情色, 古装",
    "tags": [
      "奇门医术",
      "风月",
      "无厘头",
      "降头"
    ],
    "desc": "一位流连花丛的“神医”靠房中术行走江湖，却意外卷入两江总督的诅咒与降头之争。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "能召回前世的布米叔叔",
    "file": "movie-1564.html",
    "cover": "./64.jpg",
    "year": "2021",
    "region": "泰国",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "tags": [
      "轮回",
      "记忆",
      "家庭秘密",
      "超自然"
    ],
    "desc": "患癌的布米叔叔意外获得召回前世的能力，却在片段记忆中发现了家族三代人守护的黑暗秘密。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "我的英雄学院：英雄崛起",
    "file": "movie-1565.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "动画 / 动作 / 科幻",
    "tags": [
      "超级英雄",
      "剧场版",
      "热血",
      "友情",
      "燃"
    ],
    "desc": "雄英高中遭国际佣兵组织突袭，全班被投放到无人岛进行“无个性”的绝境生存战。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "你的太阳",
    "file": "movie-1566.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情 / 爱情",
    "tags": [
      "绝症",
      "治愈",
      "纯爱",
      "医生",
      "生死"
    ],
    "desc": "绝症女孩偷了天文台望远镜只为看一眼星星，却遇见了想自杀的天才医生。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "捉迷藏2021",
    "file": "movie-1567.html",
    "cover": "./67.jpg",
    "year": "2021",
    "region": "美国 / 韩国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "密室",
      "线上游戏",
      "直播",
      "反转",
      "真实事件改编"
    ],
    "desc": "六个网红参加一场奖金百万的线上捉迷藏直播，却发现猎人真的在杀人。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "应援团少女",
    "file": "movie-1568.html",
    "cover": "./68.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧， 青春， 运动",
    "tags": [
      "应援团",
      "热血",
      "废柴逆袭",
      "友情"
    ],
    "desc": "全校最废柴的七个学生组成了应援团，却要帮助校橄榄球队打进入全国大赛。 他们不会打球，但他们能让会打球的人，拼到最后一秒。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "哈克费恩历险记",
    "file": "movie-1569.html",
    "cover": "./69.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "冒险 / 剧情",
    "tags": [
      "文学改编",
      "公路",
      "成长"
    ],
    "desc": "哈克贝利·费恩为了逃避文明社会的规训，与逃亡黑奴吉姆乘着木筏，在密西西比河上遭遇了一场超现实的风暴。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "胖达直播间",
    "file": "movie-1570.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 奇幻",
    "tags": [
      "熊猫",
      "主播",
      "变装",
      "萌宠",
      "打赏"
    ],
    "desc": "过气主播无意间戴上熊猫头套后直播间爆火，但他发现脱不下头套的那天，熊猫开始说话了。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "哈比人：五军之战",
    "file": "movie-1571.html",
    "cover": "./71.jpg",
    "year": "2014",
    "region": "新西兰/美国",
    "type": "电影",
    "genre": "奇幻/动作/冒险",
    "tags": [
      "史诗战役",
      "孤山宝藏",
      "屠龙者",
      "矮人复国",
      "魔戒前传"
    ],
    "desc": "矮人王坚守孤山宝藏，精灵、人类与半兽人五军混战，哈比人比尔博在绝境中寻找和平的最后一搏。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "地狱为何恶劣",
    "file": "movie-1572.html",
    "cover": "./72.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧，动作，黑帮",
    "tags": [
      "暴力美学",
      "电影狂热",
      "血浆",
      "黑色幽默"
    ],
    "desc": "一个想当导演的废柴，为了给入狱的黑帮老大放映他人生最后的电影，必须带领一群疯子剧组，在黑帮火并的现场完成实景拍摄。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "盖瑞",
    "file": "movie-1573.html",
    "cover": "./73.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "小人物传记",
      "邮差",
      "小镇之光",
      "书信传情"
    ],
    "desc": "一个口吃的乡村邮差盖瑞，30年来偷偷为镇上无法读写的人代写书信，直到有一天，一封他伪造的信带来了真的后果。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "红色出租车",
    "file": "movie-1574.html",
    "cover": "./74.jpg",
    "year": "2021",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情 / 黑色幽默 / 公路",
    "tags": [
      "出租车",
      "莫斯科",
      "夜行",
      "众生相"
    ],
    "desc": "一个莫斯科的夜晚，一辆红色出租车载过五个乘客，每一个都向他透露了一个关于“国家秘密”的碎片。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "完美家庭2024",
    "file": "movie-1575.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情， 悬疑， 家庭",
    "tags": [
      "家庭伦理",
      "反转",
      "科技伦理",
      "克隆人",
      "婚姻危机"
    ],
    "desc": "一个看似完美的中产家庭，每个成员其实都是已故原型的克隆人，而他们在“父母”要离婚时觉醒了自我。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "我的麻吉女友",
    "file": "movie-1576.html",
    "cover": "./76.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "青春校园",
    "tags": [
      "闺蜜",
      "百合",
      "成长"
    ],
    "desc": "全校最受欢迎的男生向“我”告白，但“我”发现自己幻想接吻的对象竟然是我的麻吉（死党）。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "诡梦凶铃",
    "file": "movie-1577.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "惊悚, 悬疑, 犯罪",
    "tags": [
      "梦境入侵",
      "电话诡谈",
      "心理惊悚",
      "多重反转",
      "都市传说"
    ],
    "desc": "午夜来电的铃声能让人坠入噩梦，而噩梦里的伤口竟会出现在现实身体上。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "昨天是个谎言",
    "file": "movie-1578.html",
    "cover": "./78.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻, 悬疑, 心理",
    "tags": [
      "记忆篡改",
      "时间循环",
      "身份危机"
    ],
    "desc": "一觉醒来，世界上所有关于“昨天”的记录都消失了，但你的身体还记得。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "抬杠",
    "file": "movie-1579.html",
    "cover": "./79.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "tags": [
      "方言",
      "小成本",
      "父子",
      "传统手艺"
    ],
    "desc": "重庆棒棒军没落后，一根抬杠挑起了一个家，父亲想传手艺，儿子想拆了老屋开网咖。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "几度菊花香",
    "file": "movie-1580.html",
    "cover": "./80.jpg",
    "year": "2006",
    "region": "大陆",
    "type": "剧集",
    "genre": "剧情, 家庭, 年代",
    "tags": [
      "知青",
      "文革",
      "亲情",
      "催泪"
    ],
    "desc": "一对错换人生的姐妹，在动荡的年代里，用菊花见证了血浓于水的亲情。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "东风",
    "file": "movie-1581.html",
    "cover": "./81.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 历史 / 悬疑",
    "tags": [
      "暗战",
      "双面间谍",
      "解放战争",
      "人性博弈"
    ],
    "desc": "1949年上海解放前夜，一个代号“东风”的双面间谍，必须亲手毁掉自己最珍视的一切。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "电视绑架案",
    "file": "movie-1582.html",
    "cover": "./82.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "犯罪, 悬疑, 剧情",
    "tags": [
      "直播",
      "绑架",
      "舆论",
      "媒体操控",
      "密室"
    ],
    "desc": "绑匪要求在黄金时段直播一场“真实死亡游戏”，电视台为了收视率，竟同意配合隐瞒警方。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "启示录",
    "file": "movie-1583.html",
    "cover": "./83.jpg",
    "year": "2026",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争、历史",
    "tags": [
      "二战",
      "东线战场",
      "惨烈",
      "人性"
    ],
    "desc": "1942年斯大林格勒，一名苏联新兵和一名德国狙击手在一栋废弃公寓里，展开为期六天的猫鼠游戏。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "红邪",
    "file": "movie-1584.html",
    "cover": "./84.jpg",
    "year": "2002",
    "region": "中国香港 / 泰国",
    "type": "电影",
    "genre": "恐怖 / 惊悚 / 邪典",
    "tags": [
      "降头",
      "红衣女鬼",
      "因果",
      "血腥"
    ],
    "desc": "每一个穿上那件红色旗袍的新娘，都会在新婚之夜诅咒自己的丈夫死去。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "沙滩鼠",
    "file": "movie-1585.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/犯罪",
    "tags": [
      "青春",
      "迷茫",
      "夏日",
      "救赎"
    ],
    "desc": "海边小镇的少年靠帮毒贩“洗钱”为生，直到他暗恋的救生员朋友发现了他的秘密。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "心如潮涌",
    "file": "movie-1586.html",
    "cover": "./86.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/医疗",
    "tags": [
      "心外科",
      "职场女性",
      "生死伦理"
    ],
    "desc": "天才心外科女医生同时面对一桩棘手的心脏移植案和自己移植过心脏的前男友。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "虚假教会",
    "file": "movie-1587.html",
    "cover": "./87.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 惊悚",
    "tags": [
      "宗教",
      "骗局",
      "心理操控",
      "复仇"
    ],
    "desc": "一个无神论者潜入大型教会揭露骗局，却被自己的谎言拖入深渊。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "魔诅之地",
    "file": "movie-1588.html",
    "cover": "./88.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖，悬疑，民俗",
    "tags": [
      "咒怨",
      "村落",
      "诅咒",
      "仪式",
      "心理恐怖"
    ],
    "desc": "一个调查神秘地陷的纪录片团队，在村子废墟中发现，所有居民都在执行一个延续百年的“供奉”仪式。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "粉红色泡沫",
    "file": "movie-1589.html",
    "cover": "./89.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 奇幻 / 爱情",
    "tags": [
      "梦境",
      "抑郁症",
      "肥皂泡",
      "治愈",
      "超现实"
    ],
    "desc": "每当她极度悲伤时，浴缸里冒出的泡沫会变成她逝去男友的幻影。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "月季花开",
    "file": "movie-1590.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 青春",
    "tags": [
      "怀旧",
      "90年代",
      "工厂大院",
      "纯爱"
    ],
    "desc": "90年代北方工厂倒闭前夕，文艺女青年和保卫科小子的爱情，如月季般在废墟里开花。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "旋风九日",
    "file": "movie-1591.html",
    "cover": "./91.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难 / 动作",
    "tags": [
      "台风",
      "救援",
      "海上",
      "英雄",
      "特效大片"
    ],
    "desc": "一场超级台风逼近珠三角，一群救援队员必须在九天内转移十万海岛居民。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "夜行法医",
    "file": "movie-1592.html",
    "cover": "./92.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑，犯罪",
    "tags": [
      "法医",
      "都市怪谈",
      "单元剧",
      "深夜"
    ],
    "desc": "一位只在夜间出行的法医，专破都市里那些“不可能”的诡异案件。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "布兰丁斯城堡第一季",
    "file": "movie-1593.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "喜剧, 历史",
    "tags": [
      "英式幽默",
      "贵族",
      "庄园",
      "笨拙"
    ],
    "desc": "一个极度笨拙的贵族继承人，总是搞砸一切，却要守护一座即将被改成夜店的古老城堡。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "夏威夷风云",
    "file": "movie-1594.html",
    "cover": "./94.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "罪案悬疑",
    "tags": [
      "度假胜地",
      "凶杀案",
      "警探",
      "种族冲突"
    ],
    "desc": "夏威夷本土女警探与刚调来的FBI白男组成搭档，共同调查发生在珍珠港遗址的连环杀人案。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "史努比太空历险记第一季",
    "file": "movie-1595.html",
    "cover": "./95.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 儿童 / 喜剧",
    "tags": [
      "史努比",
      "NASA",
      "太空",
      "搞笑"
    ],
    "desc": "查理·布朗被选为NASA首位少年宇航员，而史努比偷偷登上了火箭，在太空里追起了零重力蝴蝶。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "的士速递5",
    "file": "movie-1596.html",
    "cover": "./96.jpg",
    "year": "2018",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧, 动作",
    "tags": [
      "飙车",
      "法式幽默",
      "重启版",
      "马赛"
    ],
    "desc": "新一代马赛出租车司机，继承了那辆神奇的白色标致 407，但他自己却是个连驾照都没有的游戏宅男。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "夏日练习曲",
    "file": "movie-1597.html",
    "cover": "./97.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 音乐 / 青春",
    "tags": [
      "钢琴",
      "自闭症",
      "治愈",
      "夏日",
      "慢节奏"
    ],
    "desc": "一个无法与人正常交流的自闭症少年，通过一架废弃的钢琴，和偷钢琴的惯偷成了忘年交。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "苏州河",
    "file": "movie-1598.html",
    "cover": "./98.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情， 悬疑， 文艺",
    "tags": [
      "寻找",
      "替身",
      "上海",
      "城市变迁",
      "摄影师"
    ],
    "desc": "一个送货的马达，替黑帮大佬寻找初恋情人，却发现自己疯狂爱上了她的替身。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "麻婆岛2",
    "file": "movie-1599.html",
    "cover": "./99.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧 / 悬疑",
    "tags": [
      "荒岛求生",
      "无厘头",
      "连环失踪案",
      "方言喜剧"
    ],
    "desc": "为了寻找失踪的宝藏，一群现代人用原始工具在孤岛上开启了爆笑荒诞的探案之旅。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "小上校",
    "file": "movie-1600.html",
    "cover": "./100.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争, 儿童",
    "tags": [
      "抗日",
      "小英雄",
      "成长",
      "军民情深"
    ],
    "desc": "1942年，一个11岁的孤儿因为穿上阵亡小八路的军装，被迫“扮演”一名上校来鼓舞士气。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "永恒午夜",
    "file": "movie-1601.html",
    "cover": "./101.jpg",
    "year": "2024",
    "region": "挪威",
    "type": "剧集",
    "genre": "恐怖 / 奇幻 / 悬疑",
    "tags": [
      "极夜",
      "吸血鬼",
      "社区"
    ],
    "desc": "斯瓦尔巴群岛进入极夜，当地居民发现太阳不再升起，是因为吸血鬼挡住了太阳。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "反收数特遣队",
    "file": "movie-1602.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪 / 黑色幽默",
    "tags": [
      "高利贷",
      "卧底",
      "暴力美学"
    ],
    "desc": "一支由前收数仔组成的警方秘密小队，用“更狠更讲规矩”的方式对付全港最无法无天的高利贷集团。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "关中女人",
    "file": "movie-1603.html",
    "cover": "./103.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 年代",
    "tags": [
      "女性史诗",
      "黄土高原",
      "家族恩怨"
    ],
    "desc": "从民国到改革开放，三代关中女人用一双双裹过又放开的小脚，踩出了一部黄土地上的生存史。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "巴登巴登",
    "file": "movie-1604.html",
    "cover": "./104.jpg",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "剧情，文艺，公路",
    "tags": [
      "温泉小镇",
      "和解",
      "德语片"
    ],
    "desc": "失业建筑师回到温泉小镇巴登巴登，想泡死在浴池里，却被老邻居们拉着修复一座废弃歌剧院。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "芝加哥警署第九季",
    "file": "movie-1605.html",
    "cover": "./105.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪 / 动作 / 悬疑",
    "tags": [
      "警匪",
      "卧底",
      "黑帮",
      "单元剧加主线"
    ],
    "desc": "情报组在追查新型毒品“天使尘”时发现，供货源头竟是警署内部新的证据保管室管理员。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "大帝机器人",
    "file": "movie-1606.html",
    "cover": "./106.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻，剧情",
    "tags": [
      "AI",
      "政治",
      "阴谋",
      "未来社会",
      "伦理"
    ],
    "desc": "美国总统是个AI机器人，它治理国家完美无缺，直到某天它开始问自己“我是谁”。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "乐园追放 心之共鸣",
    "file": "movie-1607.html",
    "cover": "./107.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画",
    "genre": "科幻, 音乐, 治愈",
    "tags": [
      "虚拟偶像",
      "人工智能",
      "末世废土",
      "情感觉醒",
      "摇滚"
    ],
    "desc": "当地球最后的AI乐园向宇宙发射移民信号时，一个废土拾荒者捡到了会唱歌的故障机器人。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "跳舞吧！爸爸",
    "file": "movie-1608.html",
    "cover": "./108.jpg",
    "year": "2022",
    "region": "印度",
    "type": "电影",
    "genre": "剧情 / 歌舞 / 家庭",
    "tags": [
      "单亲父亲",
      "芭蕾",
      "性别偏见"
    ],
    "desc": "粗犷的建筑工为继承亡妻遗愿，穿上芭蕾舞裙和女儿同台竞演。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "查理和嘟嘟",
    "file": "movie-1609.html",
    "cover": "./109.jpg",
    "year": "2006",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "家庭 / 动画 / 冒险",
    "tags": [
      "布偶动画",
      "环保主题",
      "废弃游乐场",
      "会说话的猫",
      "友情"
    ],
    "desc": "男孩查理在废弃游乐场捡到一只会说话的小猫嘟嘟，从此每个深夜都卷入拯救玩具魂灵的冒险。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "色情男女",
    "file": "movie-1610.html",
    "cover": "./110.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情、爱情、情色",
    "tags": [
      "中年危机",
      "夫妻关系",
      "欲望解放",
      "都市"
    ],
    "desc": "一对结婚十五年的夫妻在尝试换偶派对后，才发现彼此从未真正坦诚相见过。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "麻花探班记",
    "file": "movie-1611.html",
    "cover": "./111.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "tags": [
      "探班",
      "误会",
      "剧组",
      "搞笑",
      "甜蜜"
    ],
    "desc": "社畜女孩去剧组探望男友，却阴差阳错被当成了新来的武术指导。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "假偶天成",
    "file": "movie-1612.html",
    "cover": "./112.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情 / 奇幻",
    "tags": [
      "替身",
      "偶像",
      "灵魂互换",
      "娱乐圈"
    ],
    "desc": "过气女星与顶流爱豆意外交换身体，必须在维持人设的同时把对方的人生演到杀青。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "蛮荒艳迹",
    "file": "movie-1613.html",
    "cover": "./113.jpg",
    "year": "1941",
    "region": "美国",
    "type": "电影",
    "genre": "冒险 / 爱情 / 西部",
    "tags": [
      "黑白片",
      "淘金热",
      "女匪",
      "牛仔",
      "宿命"
    ],
    "desc": "淘金热时期，女逃犯与赏金猎人在沙漠里相爱，却发现他要抓的就是她。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "11度青春之《哎》",
    "file": "movie-1614.html",
    "cover": "./114.jpg",
    "year": "2011",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": [
      "青春",
      "遗憾",
      "都市",
      "错过",
      "微电影"
    ],
    "desc": "一通未接来电，让两个曾经的恋人在北京地铁错失重逢，只剩一声“哎”。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "恩培多克勒之死",
    "file": "movie-1615.html",
    "cover": "./115.jpg",
    "year": "2023",
    "region": "德国 / 希腊",
    "type": "电影",
    "genre": "剧情 / 传记",
    "tags": [
      "哲学",
      "黑白摄影",
      "古希腊"
    ],
    "desc": "公元前五世纪，哲学家恩培多克勒跳入埃特纳火山，试图让自己成为神。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "漂流欲室",
    "file": "movie-1616.html",
    "cover": "./116.jpg",
    "year": "2000",
    "region": "韩国",
    "type": "电影",
    "genre": "情色 / 惊悚 / 文艺",
    "tags": [
      "金基德风格",
      "欲望符号",
      "水上监狱",
      "沉默暴力"
    ],
    "desc": "她是湖上民宿的哑巴女主人，用一艘小船和无数鱼钩，困住每一个过夜的男人。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "同样的天空",
    "file": "movie-1617.html",
    "cover": "./117.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "亲情",
      "两岸",
      "代际",
      "寻根"
    ],
    "desc": "1997年失散的双胞胎兄弟，一个长在台北，一个长在湖南，二十年后因一场网络事件意外相认。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "龙凤茶楼",
    "file": "movie-1618.html",
    "cover": "./118.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情，动作，喜剧",
    "tags": [
      "卧底",
      "茶餐厅",
      "市井江湖",
      "兄弟情"
    ],
    "desc": "为了瓦解黑帮，卧底警察潜入一家老牌茶楼，却发现真正的江湖道义都藏在一盅两件里。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "蔷薇少女 序曲",
    "file": "movie-1619.html",
    "cover": "./119.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻 / 悬疑 / 心理",
    "tags": [
      "人偶",
      "时间轮回",
      "古典美学",
      "记忆碎片"
    ],
    "desc": "第七人偶“蔷薇少女”在倒流的时钟中苏醒，发现自己是解开所有人偶死亡谜题的唯一钥匙。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "百万法郎",
    "file": "movie-1620.html",
    "cover": "./120.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧, 犯罪",
    "tags": [
      "彩票",
      "黑帮",
      "乌龙"
    ],
    "desc": "清洁工中了百万彩票，却发现奖金被印在了一张赃款上。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "野武士的美食",
    "file": "movie-1621.html",
    "cover": "./121.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "美食/剧情",
    "tags": [
      "武士道",
      "深夜食堂",
      "治愈"
    ],
    "desc": "一个被公司裁员的社畜继承了祖父的武士道精神，开始在深夜寻找“能让人重新站起来”的食物。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "一起入魔",
    "file": "movie-1622.html",
    "cover": "./122.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 惊悚 / 悬疑",
    "tags": [
      "邪教",
      "心理恐怖",
      "密室",
      "群体癫狂",
      "人性实验"
    ],
    "desc": "七位陌生人参加一场高额奖金心理实验，却发现自己正被一步步诱导集体成魔。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "阿莱蒂公主",
    "file": "movie-1623.html",
    "cover": "./123.jpg",
    "year": "2001",
    "region": "日本",
    "type": "动画",
    "genre": "奇幻 / 冒险",
    "tags": [
      "公主",
      "独立",
      "魔法",
      "女性成长",
      "吉卜力风格"
    ],
    "desc": "被囚禁在高塔的公主渴望自由，当她逃出后发现，外面的世界并不需要“公主”这种生物。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "突破极限",
    "file": "movie-1624.html",
    "cover": "./124.jpg",
    "year": "2026",
    "region": "美国 / 韩国",
    "type": "剧集",
    "genre": "动作 / 惊悚 / 体育",
    "tags": [
      "极限运动",
      "跨国犯罪",
      "主播破案",
      "实况直播"
    ],
    "desc": "一个过气的极限运动主播，为了翻身，直播挑战全球最危险的“禁地跑酷”，却意外发现每个地点都是跨国器官贩卖组织的抛尸点。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "你为此而生",
    "file": "movie-1625.html",
    "cover": "./125.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情 / 奇幻 / 职场",
    "tags": [
      "天职",
      "便利店",
      "神明",
      "治愈"
    ],
    "desc": "东京一家24小时便利店的夜班店员们，每个人都是被“神明派遣”来此生完成最后遗憾的天使。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "瞬间激情",
    "file": "movie-1626.html",
    "cover": "./126.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "爱情剧情",
    "tags": [
      "一见钟情",
      "时间循环",
      "宿命",
      "文艺"
    ],
    "desc": "男女主在巴黎地铁一见钟情，但激情只能持续30秒，之后就会失去所有记忆。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "球鞋奇缘",
    "file": "movie-1627.html",
    "cover": "./127.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 爱情, 体育",
    "tags": [
      "球鞋文化",
      "北漂",
      "篮球",
      "屌丝逆袭",
      "高甜"
    ],
    "desc": "一双限量版AJ球鞋，让一个鞋贩子认识了穿不起真鞋的贫困女大学生，两人合伙做起了莆田鞋生意。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "我的父亲被谋杀",
    "file": "movie-1628.html",
    "cover": "./128.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "反转不断",
      "家族秘密",
      "复仇"
    ],
    "desc": "父亲葬礼当晚，儿子收到录像带显示：凶手就在前来吊唁的亲属之中。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "老爸老妈的浪漫史第一季",
    "file": "movie-1629.html",
    "cover": "./129.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧/爱情",
    "tags": [
      "情景喜剧",
      "青春",
      "群像",
      "浪漫",
      "怀旧"
    ],
    "desc": "2030年，老父亲向子女讲述自己年轻时如何睡遍纽约却依然单身的荒唐求爱史。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "传奇再起",
    "file": "movie-1630.html",
    "cover": "./130.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪/动作",
    "tags": [
      "江湖",
      "复仇",
      "老炮儿",
      "兄弟",
      "暴力美学"
    ],
    "desc": "退隐二十年的黑道传奇为救儿子重出江湖，发现追杀他的竟是当年并肩的兄弟。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "惊天骇地",
    "file": "movie-1631.html",
    "cover": "./131.jpg",
    "year": "1999",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "tags": [
      "沙漠夺宝",
      "多线混战",
      "实景特技",
      "暴力美学"
    ],
    "desc": "三伙人同时在沙漠里挖同一箱钱，但他们都不知道钱的主人正拿狙击枪看着他们。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "蓬勃发展",
    "file": "movie-1632.html",
    "cover": "./132.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "创业剧情",
    "tags": [
      "乡村振兴",
      "大学生",
      "直播带货",
      "励志",
      "真实改编"
    ],
    "desc": "三个95后回到快消失的村子，用一部手机和一颗笨鸡蛋，把“空心村”变成了网红打卡地。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "一言为定",
    "file": "movie-1633.html",
    "cover": "./133.jpg",
    "year": "2018",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情, 青春",
    "tags": [
      "约定",
      "异地恋",
      "成长",
      "清新"
    ],
    "desc": "高中毕业时约定七年后再见的初恋，七年间各自寄出了99封没写地址的信。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "迎春花",
    "file": "movie-1634.html",
    "cover": "./134.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭，年代",
    "tags": [
      "知青",
      "回城",
      "和解"
    ],
    "desc": "70岁的老太太在整理亡夫遗物时，发现一封未寄出的信，揭开了自己并非亲生女儿的秘密。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "儿女英雄传",
    "file": "movie-1635.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 武侠",
    "tags": [
      "江湖",
      "家国",
      "群像",
      "新生代演员",
      "新派武侠"
    ],
    "desc": "清末民初，四个出身迥异的年轻人因一场屠杀走到一起，用现代理念重塑即将崩塌的江湖秩序。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "遵命！我的老板娘",
    "file": "movie-1636.html",
    "cover": "./136.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 爱情",
    "tags": [
      "甜宠",
      "职场",
      "女强男弱"
    ],
    "desc": "顶级CEO车祸失忆，醒来后坚信自己是新招的男助理的女仆。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "横门寻春",
    "file": "movie-1637.html",
    "cover": "./137.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 爱情, 年代",
    "tags": [
      "民国",
      "探秘",
      "女学生失踪"
    ],
    "desc": "民国女画家为寻失踪闺蜜，闯入横门岛废弃教堂，意外揭开一代名伶的死亡诅咒。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "我的裘可妹妹",
    "file": "movie-1638.html",
    "cover": "./138.jpg",
    "year": "2006",
    "region": "日本",
    "type": "动画",
    "genre": "喜剧、日常、奇幻",
    "tags": [
      "妹妹系",
      "同居",
      "治愈",
      "幻想"
    ],
    "desc": "大学生从圣诞老人那里收到一个会说话、自称“妹妹”的神秘少女。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "母女情深",
    "file": "movie-1639.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情， 喜剧， 家庭",
    "tags": [
      "母女",
      "互换身体",
      "高考",
      "和解",
      "青春"
    ],
    "desc": "一对水火不容的母女在一次意外中互换了身体，母亲替女儿上考场，女儿替母亲上职场，生活彻底失控。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "外星女生柴小七2",
    "file": "movie-1640.html",
    "cover": "./140.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 科幻",
    "tags": [
      "外星人",
      "失忆",
      "续集",
      "跨星恋"
    ],
    "desc": "柴小七回到母星后发现怀了人类的孩子，而母星法律规定：混血儿必须销毁。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "萨赫蛋糕之恋",
    "file": "movie-1641.html",
    "cover": "./141.jpg",
    "year": "2025",
    "region": "奥地利",
    "type": "电影",
    "genre": "爱情, 剧情, 美食",
    "tags": [
      "甜点",
      "维也纳",
      "传承",
      "对手变恋人",
      "家族秘密"
    ],
    "desc": "萨赫酒店继承人必须与宿敌糕点师联手，在三天内复刻出传说中“会哭泣”的原始萨赫蛋糕配方。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "熊出没注意",
    "file": "movie-1642.html",
    "cover": "./142.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 冒险",
    "tags": [
      "公路片",
      "熊",
      "护林员",
      "乌龙事件",
      "保护动物"
    ],
    "desc": "一名马虎的护林员与一头会“碰瓷”的棕熊，联手对付一伙偷猎者的爆笑公路追击。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "银色假面",
    "file": "movie-1643.html",
    "cover": "./143.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "特摄悬疑",
    "tags": [
      "假面骑士精神续作",
      "都市英雄",
      "记忆盗窃",
      "反乌托邦"
    ],
    "desc": "东京出现能盗取人类“存在感”的怪人，而唯一能看见他们的，是一个连自己名字都记不住的流浪汉。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "被偷走的时光",
    "file": "movie-1644.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "tags": [
      "时间循环",
      "亲情",
      "悬疑"
    ],
    "desc": "一块古董表让失忆女子每天醒来都重回婚礼当天，而新郎只想跟她离婚。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "再见女儿",
    "file": "movie-1645.html",
    "cover": "./145.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情，家庭，悬疑",
    "tags": [
      "寻亲",
      "身份错位",
      "城乡差异",
      "血缘和解"
    ],
    "desc": "养母去世后，都市女律师收到一封乡下来信，声称她是十八年前被拐走的豪门千金。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "粗犷之城—巴比肯",
    "file": "movie-1646.html",
    "cover": "./146.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "科幻/悬疑",
    "tags": [
      "反乌托邦",
      "野兽派建筑",
      "人工智能",
      "犯罪"
    ],
    "desc": "在野兽派混凝土巨兽“巴比肯”里，居民发现建筑AI开始利用迷宫般的结构谋杀住户。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "火爆死亡线",
    "file": "movie-1647.html",
    "cover": "./147.jpg",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "genre": "动作 / 警匪",
    "tags": [
      "卧底",
      "爆炸",
      "双雄",
      "黑吃黑"
    ],
    "desc": "卧底警察和黑帮悍匪同时被组织抛弃，两人被迫联手对抗共同的“死亡线”。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "三个夏天",
    "file": "movie-1648.html",
    "cover": "./148.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "青春剧情",
    "tags": [
      "成长",
      "夏日",
      "离别",
      "友情",
      "台味"
    ],
    "desc": "三个夏天，三次离别，一群海边少年在浪花和汽水里学会了什么叫“后会无期”。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "情断干戈",
    "file": "movie-1649.html",
    "cover": "./149.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情，战争",
    "tags": [
      "战地恋情",
      "生离死别",
      "历史创伤",
      "催泪"
    ],
    "desc": "战地记者与当地译员相爱，硝烟散尽后，他才知道她一直在谎报年龄。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "如此亲密的背叛者",
    "file": "movie-1650.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 家庭 / 犯罪",
    "tags": [
      "双面人生",
      "枕边人",
      "连环案",
      "信任崩塌"
    ],
    "desc": "完美丈夫连续杀害三名女性，与他结婚十年的妻子在整理遗物时发现了第一枚耳环。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "拥抱阳光",
    "file": "movie-1651.html",
    "cover": "./1.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "家庭, 剧情",
    "tags": [
      "自闭症",
      "手足",
      "温情",
      "成长"
    ],
    "desc": "叛逆少女被逼照顾自闭症哥哥，却在一次走失事件后彻底改变。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "芭比公主历险记",
    "file": "movie-1652.html",
    "cover": "./2.jpg",
    "year": "2021",
    "region": "美国",
    "type": "动画",
    "genre": "冒险、奇幻",
    "tags": [
      "女孩成长",
      "公主反套路",
      "友谊魔法",
      "色彩鲜艳"
    ],
    "desc": "一个不想当公主的芭比，意外进入童话王国，却发现所有公主都在密谋“辞职”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "野兽与美女",
    "file": "movie-1653.html",
    "cover": "./3.jpg",
    "year": "2026",
    "region": "印度",
    "type": "电影",
    "genre": "剧情 / 歌舞",
    "tags": [
      "反差",
      "治愈",
      "宝莱坞",
      "社会议题"
    ],
    "desc": "一个因烧伤而毁容的野蛮男人，与一个因肤色而自卑的盲眼美女，在相亲市场上被彼此“嫌弃”后，却坠入爱河。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "咖啡鲜肉",
    "file": "movie-1654.html",
    "cover": "./4.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市、爱情、轻喜剧",
    "tags": [
      "姐弟恋",
      "咖啡",
      "创业",
      "职场菜鸟"
    ],
    "desc": "傲娇咖啡师与鲜肉实习生被迫组成“冤家拍档”，却意外冲出了爱情与事业的双重奇迹。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "几何",
    "file": "movie-1655.html",
    "cover": "./5.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "genre": "悬疑, 科幻",
    "tags": [
      "数学",
      "杀人",
      "空间",
      "密室"
    ],
    "desc": "七个人被困在一个由几何定理构成的迷宫里，解不开公式就会死。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "上海夜行2危险游戏",
    "file": "movie-1656.html",
    "cover": "./6.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 犯罪, 悬疑",
    "tags": [
      "民国上海",
      "连环杀人",
      "面具杀手",
      "铁轨追逐"
    ],
    "desc": "上海滩连环命案现场都留下一张扑克牌，侦探老肖发现杀手的下一个目标，竟是十年前死去的自己。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "辛巴达大战魔心塔",
    "file": "movie-1657.html",
    "cover": "./7.jpg",
    "year": "2027",
    "region": "美国 / 阿联酋",
    "type": "电影",
    "genre": "奇幻 / 冒险 / 动作",
    "tags": [
      "神话",
      "怪物",
      "特效大片",
      "寻宝",
      "英雄"
    ],
    "desc": "传奇水手辛巴达再次出海，这次他要闯入一座会吞噬时间的活体高塔，取回能治愈整个王国诅咒的“魔心”。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "无敌特务之雷朋三世",
    "file": "movie-1658.html",
    "cover": "./8.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "动作犯罪",
    "tags": [
      "怪盗",
      "鲁邦三世",
      "全球盗宝"
    ],
    "desc": "怪盗鲁邦三世这次的目标是藏于国际空间站的“上帝之眼”钻石，但他必须先突破次元的狙击、五右卫门的刀和钱形警部的逮捕。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "我的英雄学院第二季",
    "file": "movie-1659.html",
    "cover": "./9.jpg",
    "year": "2017",
    "region": "日本",
    "type": "剧集",
    "genre": "动画 / 动作 / 热血",
    "tags": [
      "英雄",
      "校园",
      "超能力",
      "体育祭"
    ],
    "desc": "雄英高中体育祭开幕，所有学生为争夺英雄界名额而战，而绿谷出久必须在不使用“个性”的情况下赢。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "雷顿大冒险：永远的歌姬",
    "file": "movie-1660.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画",
    "genre": "冒险 / 悬疑 / 音乐",
    "tags": [
      "解谜",
      "考古",
      "魔幻现实主义",
      "歌谣",
      "蒸汽朋克"
    ],
    "desc": "考古学家雷顿教授受托寻找失落的“歌姬之城”，却发现整座城市是一台巨型八音盒，而启动的代价是活人祭。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "扭转未来",
    "file": "movie-1661.html",
    "cover": "./11.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 家庭",
    "tags": [
      "时间旅行",
      "父子和解",
      "平行宇宙"
    ],
    "desc": "厌世的程序员黑进公司的时间机器，回到父母离婚前夜，却发现自己每改变一个细节，现实就崩坏一分。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "爱的刹车",
    "file": "movie-1662.html",
    "cover": "./12.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "都市, 言情, 体育",
    "tags": [
      "赛车手",
      "失忆梗",
      "破镜重圆",
      "速度与激情"
    ],
    "desc": "顶级赛车手因事故失忆，忘记了自己深爱的妻子，却唯独记得驾驶台上每一次换挡的节奏。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "吾友妻我的朋友",
    "file": "movie-1663.html",
    "cover": "./13.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情，爱情，伦理",
    "tags": [
      "不伦",
      "友谊",
      "三角关系",
      "日式隐忍"
    ],
    "desc": "最好的朋友去世后，他照顾朋友的遗孀，三年后两人相爱，却收到一封死者生前寄出的信。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "不死者之王第一季",
    "file": "movie-1664.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "动画 / 奇幻 / 冒险",
    "tags": [
      "骨王",
      "异世界",
      "霸权"
    ],
    "desc": "普通上班族穿越成骷髅版“不死者之王”，本想低调种田，却被全大陆当成最终BOSS前来讨伐。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "鬼娃杀阵2",
    "file": "movie-1665.html",
    "cover": "./15.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖、动作、血腥",
    "tags": [
      "玩偶杀手",
      "邪教",
      "杀戮艺术",
      "R级",
      "续集"
    ],
    "desc": "上一集被绞碎的鬼娃莎莉，这次以碎片形态复活，每块碎木偶都能单独杀人，并将受害者拼接成新的“玩偶队友”。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "阿鹦爱说笑",
    "file": "movie-1666.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧 / 家庭 / 动画",
    "tags": [
      "鹦鹉",
      "会说话",
      "寻主",
      "城市冒险",
      "合家欢"
    ],
    "desc": "一只自称“毒舌综艺咖”的宠物鹦鹉，为了找回小主人，踏上穿越台北的爆笑冒险。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "婚礼年",
    "file": "movie-1667.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧、爱情、家庭",
    "tags": [
      "婚礼轰炸",
      "大龄单身",
      "亲情压力",
      "闪婚冲动"
    ],
    "desc": "一年内收到12张婚礼请柬的黄金剩女，赌气在网上征了一个“婚礼搭子”，结果对方来真的。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "封神第二部战火西岐",
    "file": "movie-1668.html",
    "cover": "./18.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "史诗， 战争， 奇幻",
    "tags": [
      "封神宇宙",
      "攻城战",
      "神灵陨落"
    ],
    "desc": "闻仲率魔家四将兵临西岐城下，姜子牙被迫启用危险禁术“钉头七箭书”，代价是献祭自己的三魂七魄。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "气体人第一号",
    "file": "movie-1669.html",
    "cover": "./19.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "超能力",
      "连环案件",
      "人体实验"
    ],
    "desc": "东京出现能把身体气化的神秘人，警方追查十年无果，却发现凶手就在专案组里。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "异域雄鹰",
    "file": "movie-1670.html",
    "cover": "./20.jpg",
    "year": "1977",
    "region": "中国台湾",
    "type": "电影",
    "genre": "战争",
    "tags": [
      "抗战",
      "空军",
      "飞虎队",
      "怀旧",
      "主旋律"
    ],
    "desc": "一个出身云南土司家族的年轻人，加入飞虎队，在驼峰航线上用生命运送物资。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "模模糊糊",
    "file": "movie-1671.html",
    "cover": "./21.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "文艺, 剧情",
    "tags": [
      "失焦",
      "记忆",
      "阿尔茨海默",
      "意识流"
    ],
    "desc": "一位患有严重眼疾的老画家在彻底失明前，试图画下他记忆中已经去世五十年的初恋。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "美女和液体人",
    "file": "movie-1672.html",
    "cover": "./22.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情， 科幻， 剧情",
    "tags": [
      "非人恋",
      "液态金属",
      "孤独",
      "治愈"
    ],
    "desc": "一位失去嗅觉的调香师，爱上了实验室里一个能变成任何人、拥有万种气味的液态机器人。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "产科医生2014",
    "file": "movie-1673.html",
    "cover": "./23.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "医疗 / 剧情 / 职业",
    "tags": [
      "妇产科",
      "医患关系",
      "职场女性",
      "生死抉择"
    ],
    "desc": "一家三甲医院产科里，五位性格迥异的女医生在面对高危产妇和制度黑洞时，做出了改变一生的选择。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "春风秋雨",
    "file": "movie-1674.html",
    "cover": "./24.jpg",
    "year": "1988",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 家庭, 历史",
    "tags": [
      "眷村",
      "老兵",
      "乡愁",
      "白色恐怖"
    ],
    "desc": "1949年随军来台的老兵在眷村苦等故乡信件的45年里，错认了三个儿子和一个妻子。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "亲爱的亚当",
    "file": "movie-1675.html",
    "cover": "./25.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 伦理",
    "tags": [
      "克隆人",
      "父子",
      "身份",
      "记忆"
    ],
    "desc": "男人克隆了死去的儿子，却发现克隆人想成为他自己的父亲。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "俘虏之心",
    "file": "movie-1676.html",
    "cover": "./26.jpg",
    "year": "2024",
    "region": "英国 / 波兰",
    "type": "剧集",
    "genre": "战争 / 剧情 / 同性",
    "tags": [
      "二战",
      "集中营",
      "禁忌之恋"
    ],
    "desc": "二战期间，一名德国军官爱上了负责关押的英国战俘，为了让他活下去，军官不惜伪造死亡证明。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "雪迷宫",
    "file": "movie-1677.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 刑侦",
    "tags": [
      "东北",
      "连环杀手",
      "暴风雪",
      "双男主",
      "心理战"
    ],
    "desc": "暴风雪封住整个小镇，每下一夜雪就多一具尸体，而凶手就在被困的十二人之中。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "是好朋友的周末",
    "file": "movie-1678.html",
    "cover": "./28.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀 / 生活",
    "tags": [
      "友情",
      "旅行",
      "慢综艺",
      "治愈",
      "明星私密"
    ],
    "desc": "五组真友情明星好友，每周末一次无脚本、无任务的纯粹度假，只记录友情最真实的模样。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "愿为女人",
    "file": "movie-1679.html",
    "cover": "./29.jpg",
    "year": "2021",
    "region": "印度",
    "type": "电影",
    "genre": "剧情、社会、女性",
    "tags": [
      "性别互换",
      "父权讽刺",
      "禁忌之舞",
      "宗教压迫"
    ],
    "desc": "一个极端保守的印度村长被神明惩罚变成女人，从此他必须作为一个“低等性别”活在这个由他亲手制定的规则里。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "暴雨",
    "file": "movie-1680.html",
    "cover": "./30.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 惊悚",
    "tags": [
      "连环杀手",
      "暴风雪山庄",
      "推理",
      "反转"
    ],
    "desc": "一场百年不遇的暴雨困住了一群各怀鬼胎的陌生人，而他们中间，藏着一个从未失手的连环杀手。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "露台春潮",
    "file": "movie-1681.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "tags": [
      "公寓",
      "邻里",
      "偷窥",
      "阶级"
    ],
    "desc": "一栋公寓的顶楼露台上，三个互不相识的邻居，同时目击了一场不可能发生的谋杀。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "不确定的寓意：新三只小猪",
    "file": "movie-1682.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "动画, 寓言, 荒诞",
    "tags": [
      "解构童话",
      "哲学",
      "隐喻",
      "黑暗",
      "成人向"
    ],
    "desc": "三只小猪长大后发现，大灰狼其实是它们父亲派来测试它们的心理医生。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "中国合伙人2",
    "file": "movie-1683.html",
    "cover": "./33.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情， 创业， 历史",
    "tags": [
      "互联网时代",
      "90年代",
      "兄弟反目",
      "上市",
      "理想主义"
    ],
    "desc": "从PC时代到移动互联网浪潮，三个大学好友从卖电脑起步，最终在股权争夺战中分崩离析。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "神枪客",
    "file": "movie-1684.html",
    "cover": "./34.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作， 犯罪， 西部",
    "tags": [
      "硬汉枪战",
      "荒诞复仇",
      "港式西部片",
      "双雄对决"
    ],
    "desc": "一个落魄的昔日枪王，为了赎回女儿的救命药，接下暗杀令，却发现目标同样是一个为女复仇的“神枪手”。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "爱在圣诞城堡",
    "file": "movie-1685.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "tags": [
      "圣诞节",
      "城堡",
      "契约恋爱",
      "网红",
      "轻喜"
    ],
    "desc": "过气女网红租了个“假男友”去网红城堡过圣诞，不料那座城堡的继承人是个毒舌伯爵，而假男友是他弟弟。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "圣诞节贺卡",
    "file": "movie-1686.html",
    "cover": "./36.jpg",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "genre": "爱情 / 家庭",
    "tags": [
      "圣诞节",
      "匿名信",
      "二战遗物",
      "跨代情缘"
    ],
    "desc": "孙女在奶奶遗物中发现一张1944年的空白圣诞贺卡，她决定找到收件人，把迟到的祝福送出去。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "黎明决斗",
    "file": "movie-1687.html",
    "cover": "./37.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "tags": [
      "枪战",
      "兄弟情",
      "宿命",
      "港风"
    ],
    "desc": "两个从小一起长大的杀手，在黎明前的天台被下了同一个暗杀令——目标就是对方。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "花城国语",
    "file": "movie-1688.html",
    "cover": "./38.jpg",
    "year": "1983",
    "region": "法国 / 中国香港",
    "type": "电影",
    "genre": "爱情 / 剧情 / 文艺",
    "tags": [
      "异国漂泊",
      "禁忌之恋",
      "文艺苦涩",
      "80年代法国",
      "情绪摄影"
    ],
    "desc": "一位到巴黎寻夫的压抑少妇，在花城邂逅了颓废的华裔小提琴手，陷入危险的炽热恋情。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "交涉",
    "file": "movie-1689.html",
    "cover": "./39.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 犯罪",
    "tags": [
      "谈判",
      "绑架",
      "外交",
      "真实事件改编"
    ],
    "desc": "一名韩国外交官与一名国情院特工临危受命，在阿富汗与绑架组织进行生死交涉。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "轻拍翻转小魔女",
    "file": "movie-1690.html",
    "cover": "./40.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻, 治愈",
    "tags": [
      "魔法少女",
      "日常",
      "友情"
    ],
    "desc": "见习小魔女的魔法只能让东西翻面，却因此成了全城最红的救急侠。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "新宿区歌舞伎町幼儿园",
    "file": "movie-1691.html",
    "cover": "./41.jpg",
    "year": "2015",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧，剧情",
    "tags": [
      "牛郎",
      "幼儿园",
      "反差萌",
      "社会派",
      "温情"
    ],
    "desc": "破产的牛郎店店长被迫接手一家濒临倒闭的幼儿园，用招待客人的技巧对付难缠的孩子们。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "岁月江城",
    "file": "movie-1692.html",
    "cover": "./42.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": [
      "三代人",
      "变迁",
      "长江",
      "遗憾"
    ],
    "desc": "一座因水而兴的江城，三代人在三十年里见证了城市的崛起、沉没与别离。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "起势摇滚",
    "file": "movie-1693.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "音乐 / 剧情",
    "tags": [
      "乐队",
      "梦想",
      "父子和解"
    ],
    "desc": "四个失败的上班族，在30岁那年重组了高中时期的摇滚乐队，想要最后一次“起势”。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "七星伴月",
    "file": "movie-1694.html",
    "cover": "./44.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "粤剧",
      "七姐妹",
      "移民潮",
      "香港老字号",
      "遗产争夺"
    ],
    "desc": "湾仔一家即将拆迁的百年老茶楼“七星伴月”，七姐妹在母亲葬礼后重聚，发现茶楼的房契少了一张。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "警网：比哈尔邦篇",
    "file": "movie-1695.html",
    "cover": "./45.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "犯罪",
    "tags": [
      "警匪",
      "写实",
      "暴力",
      "社会"
    ],
    "desc": "在混乱的比哈尔邦，一个不按常理出牌的新警长试图用铁腕手段净化法治荒漠。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "我要一个家",
    "file": "movie-1696.html",
    "cover": "./46.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭 / 伦理",
    "tags": [
      "孤儿",
      "重组家庭",
      "亲情绑架",
      "房产纠纷"
    ],
    "desc": "福利院四姐妹长大后合买一套房，说好“有福同享”，但房产证只写了一个人的名字。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "让爱传出去",
    "file": "movie-1697.html",
    "cover": "./47.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "温情",
      "社会议题",
      "翻转人生",
      "陌生人",
      "善举"
    ],
    "desc": "一个愤世嫉俗的流浪汉意外救下试图轻生的女高管，两人开启了一场“传递善意”的全国冒险。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "亚历山大内夫斯基",
    "file": "movie-1698.html",
    "cover": "./48.jpg",
    "year": "2029",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "历史 / 传记 / 战争",
    "tags": [
      "沙俄历史",
      "军事天才",
      "史诗战争",
      "民族英雄"
    ],
    "desc": "他击退了条顿骑士团，却没能击退自己胞弟的匕首。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "海达",
    "file": "movie-1699.html",
    "cover": "./49.jpg",
    "year": "2021",
    "region": "挪威 / 德国",
    "type": "电影",
    "genre": "剧情 / 惊悚",
    "tags": [
      "峡湾",
      "邪教",
      "献祭",
      "女性觉醒",
      "心理压迫"
    ],
    "desc": "一个外来女性闯入被古老献祭仪式统治的峡湾社区，她将成为下一个祭品。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "我们的相爱时光：续篇",
    "file": "movie-1700.html",
    "cover": "./50.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": [
      "前任",
      "中年危机",
      "和解"
    ],
    "desc": "分手十年后，她带着患有绝症的女儿找到了他，请求他捐骨髓，也请求他原谅当年的背叛。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "仪式",
    "file": "movie-1701.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "民俗恐怖",
      "村落",
      "祭祀",
      "心理惊悚",
      "细思极恐"
    ],
    "desc": "民俗学者受邀调查深山村庄的百年“丰穰祭”，却发现每一届的“祭品”都变成了村民本人。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "芭比姐妹之追逐的小狗",
    "file": "movie-1702.html",
    "cover": "./52.jpg",
    "year": "2016",
    "region": "美国",
    "type": "动画",
    "genre": "动画 / 家庭 / 冒险",
    "tags": [
      "芭比系列",
      "宠物冒险",
      "姐妹情",
      "寻狗之旅",
      "儿童向"
    ],
    "desc": "芭比和她的姐妹们要去参加时装周，但她们的小狗们却被一只野猫带上了开往反方向的火车。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "宿敌",
    "file": "movie-1703.html",
    "cover": "./53.jpg",
    "year": "2020",
    "region": "印度",
    "type": "电影",
    "genre": "动作",
    "tags": [
      "谍战",
      "复仇",
      "政治阴谋",
      "双雄"
    ],
    "desc": "印度情报官与巴基斯坦退役特工被迫联手，追捕引发两国核恐慌的变节幽灵。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "凛冬兄弟",
    "file": "movie-1704.html",
    "cover": "./54.jpg",
    "year": "2024",
    "region": "挪威",
    "type": "剧集",
    "genre": "剧情, 犯罪",
    "tags": [
      "北欧黑色",
      "兄弟情",
      "极夜"
    ],
    "desc": "极夜之下，两兄弟意外劫持一辆黑帮运钞车，却发现自己中了更庞大的陷阱。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "通天拍档",
    "file": "movie-1705.html",
    "cover": "./55.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作喜剧",
    "tags": [
      "双雄",
      "卧底",
      "黑吃黑",
      "港式枪战"
    ],
    "desc": "一个卧底警察和一个黑道二把手同时失忆后，都以为对方是自己的搭档，联手去端掉自己的老巢。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "肆年",
    "file": "movie-1706.html",
    "cover": "./56.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "青春、校园、励志",
    "tags": [
      "大学四年",
      "宿舍情谊",
      "毕业季",
      "理想与现实"
    ],
    "desc": "四个天南海北的大学生在同一间宿舍度过四年，从军训服到学士服，他们经历了友情、爱情、背叛与成长。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "纽约娃娃",
    "file": "movie-1707.html",
    "cover": "./57.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情, 犯罪, 女性",
    "tags": [
      "黑帮",
      "成长",
      "90年代"
    ],
    "desc": "90年代纽约小意大利区，一个华裔孤女如何在意大利黑帮中长大，并最终成为新一代教母。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "笑傲江湖1984国语",
    "file": "movie-1708.html",
    "cover": "./58.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 武侠, 剧情",
    "tags": [
      "重映版",
      "修复",
      "经典改编",
      "政治隐喻"
    ],
    "desc": "重新修复配音的1984年邵氏经典，探讨真正的自由不在江湖，而在人心。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "天降奇缘粤语",
    "file": "movie-1709.html",
    "cover": "./59.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "剧集",
    "genre": "爱情 / 喜剧 / 奇幻",
    "tags": [
      "TVB",
      "红娘神仙",
      "粤语原声"
    ],
    "desc": "天庭小红娘下凡实习牵红线，却把一对“死对头”绑成恋人，自己还爱上了男方。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "密室逃脱·暗夜古宅",
    "file": "movie-1710.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀, 悬疑, 冒险",
    "tags": [
      "实景解密",
      "团队合作",
      "恐怖元素",
      "烧脑",
      "机关"
    ],
    "desc": "六位明星被困在一座拥有百年历史的诡异古宅，每一扇门后都是致命的谜题。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "尼罗河之宝",
    "file": "movie-1711.html",
    "cover": "./61.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 冒险, 悬疑",
    "tags": [
      "盗墓",
      "古埃及诅咒",
      "寻宝",
      "搭档"
    ],
    "desc": "落魄考古学家和女骗子联手寻找亚历山大陵墓，却触发了能淹没现代开罗的古代诅咒。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "钓鱼狂日记11",
    "file": "movie-1712.html",
    "cover": "./62.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧 / 日常 / 治愈",
    "tags": [
      "钓鱼",
      "职场",
      "中年危机"
    ],
    "desc": "中年上班族岛田在第十一部中终于被公司裁员，他决定用半年时间从北海道一路钓鱼到冲绳，却在第一站就丢了所有装备。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "吃鸡大作战第三季",
    "file": "movie-1713.html",
    "cover": "./63.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 动画 / 游戏",
    "tags": [
      "大逃杀",
      "沙雕",
      "战队",
      "电子竞技",
      "吐槽"
    ],
    "desc": "四个菜鸟职业选手，用最离谱的操作打进世界赛，靠的是命硬。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "老人与枪",
    "file": "movie-1714.html",
    "cover": "./64.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪 / 剧情",
    "tags": [
      "老年犯罪",
      "真实改编",
      "优雅犯罪",
      "追逐戏"
    ],
    "desc": "70岁的越狱老手重操旧业，他唯一的爱好是抢银行，唯一的累赘是追他30年的警探。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "沙拉拉",
    "file": "movie-1715.html",
    "cover": "./65.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "奇幻 / 家庭",
    "tags": [
      "魔法",
      "治愈",
      "美食",
      "成长"
    ],
    "desc": "小镇女孩发现外婆的旧菜刀竟然会说话，每切一道菜，就能释放一个改变命运的魔法。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "女狼俱乐部",
    "file": "movie-1716.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧, 剧情",
    "tags": [
      "女性友谊",
      "酒吧",
      "乡村音乐",
      "创业",
      "爽剧"
    ],
    "desc": "五个被男人和社会抛弃的底层女性，合伙买下了一个破败的脱衣舞俱乐部，改成了全美第一家全女性运营的机车酒吧。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "推销战争",
    "file": "movie-1717.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "职场 / 喜剧 / 剧情",
    "tags": [
      "销售",
      "职场内卷",
      "黑话",
      "逆袭",
      "甲方乙方"
    ],
    "desc": "一个老实人在一家全员“戏精”的保险公司，被迫用“孙子兵法”向客户推销棺材险。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "声威震九州",
    "file": "movie-1718.html",
    "cover": "./68.jpg",
    "year": "2012",
    "region": "中国内地",
    "type": "剧集",
    "genre": "历史, 战争",
    "tags": [
      "名将传奇",
      "排兵布阵",
      "热血"
    ],
    "desc": "一介草民凭借智谋与胆识，在乱世中打造出威震天下的铁血军团。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "爱欲之岛",
    "file": "movie-1719.html",
    "cover": "./69.jpg",
    "year": "1979",
    "region": "意大利",
    "type": "电影",
    "genre": "情色, 剧情",
    "tags": [
      "乌托邦",
      "性解放",
      "哲学",
      "海岛"
    ],
    "desc": "一座宣称“爱欲自由”的神秘岛屿，所有登岛者必须遵守一条规则：你可以得到任何人的身体，但永远不能说“爱”这个字。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "仙后座",
    "file": "movie-1720.html",
    "cover": "./70.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "科幻 / 剧情 / 家庭",
    "tags": [
      "阿尔茨海默",
      "太空记忆",
      "母女重构",
      "星图隐喻"
    ],
    "desc": "患阿尔茨海默症的天文教授，在记忆消失前，为女儿画下最后一幅星图。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "秋田犬蓬夫",
    "file": "movie-1721.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "动物电影",
      "治愈",
      "忠诚",
      "催泪",
      "真实事件改编"
    ],
    "desc": "一只因主人离世而在车站守候十年的老秋田犬，被一个失意音乐家发现，两个孤独灵魂彼此救赎。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "与神同行：最终审判",
    "file": "movie-1722.html",
    "cover": "./72.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "奇幻 / 剧情 / 动作",
    "tags": [
      "阴间",
      "七重审判",
      "平行宇宙",
      "因果轮回"
    ],
    "desc": "三千年来最特殊的亡者被押送到地狱：他是一个从未犯下任何罪过，却亲手毁灭了整个平行宇宙的人。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "你的我的那场暗恋",
    "file": "movie-1723.html",
    "cover": "./73.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/青春",
    "tags": [
      "暗恋",
      "时空错位",
      "书信",
      "催泪"
    ],
    "desc": "她暗恋学长三年写了百封情书从未寄出，后来发现每一封都被人改过错别字。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "远看是蔚蓝的春天",
    "file": "movie-1724.html",
    "cover": "./74.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情 / 爱情 / 校园",
    "tags": [
      "明媚忧伤",
      "残奥会背景",
      "治愈系",
      "校园霸凌"
    ],
    "desc": "肢体残疾的天才少女通过轮椅篮球进入名牌大学，她以为迎来了“蔚蓝的春天”，却发现校园充满了比肢体更残缺的恶意。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "时空英豪",
    "file": "movie-1725.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "动作, 科幻",
    "tags": [
      "时间跳跃",
      "恐龙",
      "牛仔",
      "罗马",
      "大杂烩"
    ],
    "desc": "一个失败的时间旅行实验，把牛仔、罗马士兵、中世纪骑士和现代特种兵扔进了恐龙时代。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "寄养的黑羊",
    "file": "movie-1726.html",
    "cover": "./76.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情、家庭、悬疑",
    "tags": [
      "寄养家庭",
      "问题少年",
      "阶层",
      "失踪"
    ],
    "desc": "一户中产家庭接收了一名沉默寡言的问题少女，从此家中怪事连连，而少女似乎能听到房子里的另一个声音。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "互助友情人",
    "file": "movie-1727.html",
    "cover": "./77.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情, 社会",
    "tags": [
      "互助小组",
      "底层群像",
      "温情不煽情"
    ],
    "desc": "七个想自杀的陌生人在天台相遇，决定先互相帮助完成遗愿，却在这一年里找到了活下去的理由。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "凯特的秘密",
    "file": "movie-1728.html",
    "cover": "./78.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑/惊悚",
    "tags": [
      "人格分裂",
      "心理惊悚",
      "宅邸谜案",
      "家族诅咒"
    ],
    "desc": "心理医生试图唤醒多重人格患者“凯特”，却发现她体内的每个人格都曾真实死亡。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "天雷地火",
    "file": "movie-1729.html",
    "cover": "./79.jpg",
    "year": "2025",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "genre": "动作 / 犯罪 / 灾难",
    "tags": [
      "警匪",
      "台风",
      "隧道"
    ],
    "desc": "十年一遇的超强台风登陆夜，一群悍匪与警方在一座海底隧道内引爆了一颗“炸弹”，所有人必须在海水灌满前逃出。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "爱在绿风中",
    "file": "movie-1730.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "爱尔兰",
    "type": "电影",
    "genre": "爱情、剧情",
    "tags": [
      "治愈",
      "田园",
      "丧偶",
      "慢生活"
    ],
    "desc": "一个失去丈夫的纽约女人，买下爱尔兰一座破旧农场，意外收到一封来自十年前的信。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "麦克尔",
    "file": "movie-1731.html",
    "cover": "./81.jpg",
    "year": "1924",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 同性 / 默片",
    "tags": [
      "德国表现主义",
      "同性恋",
      "默片",
      "师生恋",
      "悲剧"
    ],
    "desc": "1920年代柏林，一位老画家包养了年轻男模特麦克尔，最终被自己的欲望和嫉妒吞噬。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "街头圣女",
    "file": "movie-1732.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "tags": [
      "女性",
      "救赎",
      "卧底",
      "街头"
    ],
    "desc": "为了寻找失踪的妹妹，一个修女伪装成堕落者潜入黑帮，却发现自己成了新一代的“街头圣女”。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "双峰：与火同行",
    "file": "movie-1733.html",
    "cover": "./83.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑、惊悚、剧情",
    "tags": [
      "小镇",
      "凶杀",
      "梦境",
      "超自然"
    ],
    "desc": "FBI 探员戴尔·库珀重返双峰镇调查一具被塑料包裹的尸体，却发现整个小镇都在和他说同一个人名：劳拉·帕尔默。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "寄宿学校谋杀疑云",
    "file": "movie-1734.html",
    "cover": "./84.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑, 犯罪",
    "tags": [
      "英伦",
      "校园",
      "本格推理",
      "阶级"
    ],
    "desc": "一所与世隔绝的贵族寄宿学校里，一名贫困生溺死在浴缸中，所有富家子弟都有完美的不在场证明。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "爱在囧途",
    "file": "movie-1735.html",
    "cover": "./85.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "tags": [
      "公路",
      "春运",
      "前任",
      "搞笑",
      "巧合"
    ],
    "desc": "为了赶上女友的婚礼，倒霉男主踏上春运囧途，不料一路同行的竟是女友那位毒舌至极的“前男友”。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "电视拍手者",
    "file": "movie-1736.html",
    "cover": "./86.jpg",
    "year": "2005",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 都市传说",
    "tags": [
      "录像带诅咒",
      "都市怪谈",
      "规则类"
    ],
    "desc": "半夜电视突然打开，画面中有人对你鼓掌，你跟着鼓掌的瞬间，灵魂就被换进了电视机。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "噩梦降临",
    "file": "movie-1737.html",
    "cover": "./87.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "梦境入侵",
      "心理恐惧",
      "实体化",
      "家族诅咒"
    ],
    "desc": "三代女性不断梦见同一个黑影，当外孙女开始画出梦里从未去过的老宅，黑影醒了。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "月落妇人心",
    "file": "movie-1738.html",
    "cover": "./88.jpg",
    "year": "1987",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 女性",
    "tags": [
      "奥斯卡遗珠",
      "单亲妈妈",
      "中产阶级崩溃",
      "演技炸裂"
    ],
    "desc": "丈夫突然失踪，家庭主妇带着三个孩子在郊区苦苦支撑，直到她发现了一个惊天秘密。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "芹菜怪物的茎",
    "file": "movie-1739.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 科幻 / 喜剧",
    "tags": [
      "植物怪物",
      "B级片",
      "环保恐怖",
      "血腥幽默",
      "cult"
    ],
    "desc": "一家有机农场意外培育出巨型芹菜怪物，它用坚韧的茎秆将人类卷入地下当肥料。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "奇迹笨小孩",
    "file": "movie-1740.html",
    "cover": "./90.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "tags": [
      "励志",
      "创业",
      "深圳",
      "兄妹情",
      "奋斗"
    ],
    "desc": "二十岁的景浩为给妹妹凑手术费，在深圳华强北孤注一掷，赌上全部身家办厂。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "租借女友第二季",
    "file": "movie-1741.html",
    "cover": "./91.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧 / 爱情 / 青春",
    "tags": [
      "漫改",
      "恋爱喜剧",
      "假戏真做",
      "修罗场",
      "大学生"
    ],
    "desc": "失败大学生继续租借完美女友，却在真实女友、前女友和租借女友之间彻底翻船。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "我是你的百搭",
    "file": "movie-1742.html",
    "cover": "./92.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市, 爱情",
    "tags": [
      "备胎",
      "逆袭",
      "网剧",
      "甜中带虐"
    ],
    "desc": "职场小透明当了三年“百搭同事”，却在被裁后收到暗恋总裁的结婚请柬。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "渔村春色",
    "file": "movie-1743.html",
    "cover": "./93.jpg",
    "year": "1987",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情, 乡土",
    "tags": [
      "怀旧",
      "禁忌之恋",
      "渔港风情",
      "闽南语"
    ],
    "desc": "澎湖望安岛，一个返乡的渔科大学生与等待丈夫三年未归的渔村少妇，在春天里点燃了道德的火光。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "蜂巢2024",
    "file": "movie-1744.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "科幻, 惊悚, 悬疑",
    "tags": [
      "人工智能",
      "意识上传",
      "反乌托邦",
      "心理"
    ],
    "desc": "一款能上传死者意识的APP“蜂巢”风靡全球，直到一位母亲发现，她“复活”的女儿正在云端试图杀死所有人。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "秘密关卡",
    "file": "movie-1745.html",
    "cover": "./95.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑奇幻冒险",
    "tags": [
      "电梯无限层",
      "都市传说",
      "陌生人困局",
      "人性测试"
    ],
    "desc": "一栋老旧公寓的电梯突然多出了地下18层按钮，按下后，8个陌生人被困在一层一景的诡异迷宫里，每层都是一个“罪人”的心魔。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "血腥玛罗琳",
    "file": "movie-1746.html",
    "cover": "./96.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "tags": [
      "都市传说",
      "血腥玛丽",
      "酒吧",
      "复仇"
    ],
    "desc": "酒吧女招待玛罗琳被顾客嘲笑名字后召唤了真正的“血腥玛丽”，却发现那只是她人格分裂出的暴力化身。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "拯救电影院",
    "file": "movie-1747.html",
    "cover": "./97.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "tags": [
      "怀旧",
      "小镇",
      "众筹",
      "电影情怀"
    ],
    "desc": "小镇最后一家电影院面临拆除，一群“不靠谱”的老邻居决定用一场午夜放映来拯救它。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "熊的乔纳森",
    "file": "movie-1748.html",
    "cover": "./98.jpg",
    "year": "2016",
    "region": "加拿大",
    "type": "电影",
    "genre": "剧情 / 奇幻 / 冒险",
    "tags": [
      "人熊互换",
      "环保",
      "父子",
      "北欧神话"
    ],
    "desc": "一个伐木工的儿子被诅咒每晚变成棕熊，白天变回人形，而他的父亲就是杀死熊神的猎手。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "星门深渊",
    "file": "movie-1749.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻, 冒险",
    "tags": [
      "太空",
      "外星生物",
      "密室",
      "惊悚",
      "特效大片"
    ],
    "desc": "一艘星际货运飞船坠入“星门深渊”，船员的身体开始随恐惧长出鳞片。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "忍者之家",
    "file": "movie-1750.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "动作、家庭、喜剧、奇幻",
    "tags": [
      "忍者",
      "现代社会",
      "卧底",
      "育儿",
      "反差萌"
    ],
    "desc": "一个隐退多年的忍者家族，在东京开了一家章鱼烧店，但每当社区发生危机，他们就会重操旧业。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "爱欲布尔诺",
    "file": "movie-1751.html",
    "cover": "./101.jpg",
    "year": "2017",
    "region": "捷克",
    "type": "电影",
    "genre": "剧情, 情色, 文艺",
    "tags": [
      "开放式关系",
      "捷克新浪潮",
      "城市孤独"
    ],
    "desc": "在捷克的第二大城市布尔诺，三对男女在同一个地下俱乐部交换伴侣，却意外发现了彼此的血缘联系。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "多么美丽的日子",
    "file": "movie-1752.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "家庭 / 剧情",
    "tags": [
      "三代",
      "家族",
      "和解",
      "时光倒流",
      "催泪"
    ],
    "desc": "一个从不回家的不孝子在一次意外中回到了过去，亲眼目睹了母亲独自养大他的每一天。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "热血神探",
    "file": "movie-1753.html",
    "cover": "./103.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 动作, 悬疑",
    "tags": [
      "民国",
      "科幻",
      "讽刺",
      "拆弹"
    ],
    "desc": "一个信奉物理学的民国神探，遭遇了一个能用“意念”杀人的邪教组织，科学对决迷信一触即发。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "最爱你的人是我",
    "file": "movie-1754.html",
    "cover": "./104.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情， 剧情， 悬疑",
    "tags": [
      "前任",
      "跟踪",
      "多角恋",
      "意外"
    ],
    "desc": "女主婚后发现丈夫就是当年车祸撞死自己前男友的肇事逃逸者。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "猛虎嗅蔷薇之替天行盗",
    "file": "movie-1755.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 冒险",
    "tags": [
      "高智商犯罪",
      "盗窃",
      "侠盗",
      "反转",
      "单元剧"
    ],
    "desc": "一个由天才画家、退役特工、电脑黑客组成的侠盗团伙，专偷那些法律无法制裁的贪官污吏。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "街坊邻居",
    "file": "movie-1756.html",
    "cover": "./106.jpg",
    "year": "2002",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 家庭, 生活",
    "tags": [
      "情景喜剧",
      "市井生活",
      "方言"
    ],
    "desc": "一条老街上，几户普通人家，每天上演着令人捧腹又倍感温暖的邻里故事。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "宅基地之争",
    "file": "movie-1757.html",
    "cover": "./107.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "农村",
      "拆迁",
      "亲情",
      "伦理",
      "现实主义"
    ],
    "desc": "父亲去世后，三兄弟为一块老宅基地反目成仇，而母亲却悄悄烧掉了所有证据。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "身魂旅行",
    "file": "movie-1758.html",
    "cover": "./108.jpg",
    "year": "2016",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻 / 温情",
    "tags": [
      "灵魂交换",
      "母子关系",
      "治愈"
    ],
    "desc": "一对关系冰冷的母女遭遇车祸后，灵魂互换并被迫踏上对方的人生旅途。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "玉楼春梦",
    "file": "movie-1759.html",
    "cover": "./109.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "古装, 悬疑, 爱情",
    "tags": [
      "梦境探案",
      "民国奇情",
      "双世记忆",
      "家国恩怨"
    ],
    "desc": "一位民国女画家发现自己笔下的每一幅画，都会变成一场真实发生的谋杀案。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "金牌特务：金士曼起源",
    "file": "movie-1760.html",
    "cover": "./110.jpg",
    "year": "2021",
    "region": "英国/美国",
    "type": "电影",
    "genre": "动作/喜剧/冒险",
    "tags": [
      "特工",
      "前传",
      "历史改编",
      "西装暴徒"
    ],
    "desc": "一战期间，英国贵族奥兰多创立了初代金士曼，用一套复古西装的秘密武装，对抗背后操控战争的“牧羊人”组织。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "莎莉玛大冒险",
    "file": "movie-1761.html",
    "cover": "./111.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "动作，冒险，奇幻",
    "tags": [
      "女神转世",
      "古庙宝藏",
      "杂耍"
    ],
    "desc": "孟买贫民窟的杂耍女孩，意外继承了女神之力，要去偷回被英国殖民者夺走的圣物。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "啦啦队之舞",
    "file": "movie-1762.html",
    "cover": "./112.jpg",
    "year": "2019",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 运动",
    "tags": [
      "青春校园",
      "啦啦队",
      "逆袭",
      "团魂"
    ],
    "desc": "五个被全校嘲笑的“最不适合跳啦啦队”的女孩，要在全国大赛上挑战连续十五年冠军。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "新村1949",
    "file": "movie-1763.html",
    "cover": "./113.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情， 历史",
    "tags": [
      "建国初期",
      "土地改革",
      "乡村建设",
      "年代戏"
    ],
    "desc": "1949年，刚解放的北方小村“泥湾子”迎来了一位女大学生村官，她要在这里推行新法。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "鲨海血危机",
    "file": "movie-1764.html",
    "cover": "./114.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 惊悚",
    "tags": [
      "鲨鱼",
      "深海",
      "军事",
      "女性英雄"
    ],
    "desc": "一艘核潜艇沉入马里亚纳海沟，一群海军陆战队员不仅要面对深渊水压，还要对抗因辐射变异的巨型鲨鱼。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "空房间里的妻子",
    "file": "movie-1765.html",
    "cover": "./115.jpg",
    "year": "2016",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 心理",
    "tags": [
      "婚姻惊悚",
      "幻觉",
      "女性视角"
    ],
    "desc": "丈夫出差后，独居的妻子发现家中空房间似乎住进了另一个“丈夫”。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "冢本晋也之野火",
    "file": "movie-1766.html",
    "cover": "./116.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "战争 / 剧情",
    "tags": [
      "黑白",
      "手持摄影",
      "身体恐怖",
      "反战",
      "文学改编"
    ],
    "desc": "二战末期，一个溃败的日本士兵在菲律宾丛林中逃亡，他身体里长出了一团永不熄灭的火。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "双星赶月",
    "file": "movie-1767.html",
    "cover": "./117.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 喜剧 / 犯罪",
    "tags": [
      "双雄",
      "警匪",
      "飞车",
      "港片",
      "兄弟情"
    ],
    "desc": "两个相互讨厌的顶级赏金猎人被迫搭档，追杀同一目标时却发现自己才是猎物。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "花开校园",
    "file": "movie-1768.html",
    "cover": "./118.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "青春 / 校园 / 励志",
    "tags": [
      "成长",
      "校合唱团",
      "师生情",
      "逆袭",
      "校园霸凌"
    ],
    "desc": "一群被全校嘲笑的跑调女生，组成了史上最不可能的合唱团。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "复仇同学会",
    "file": "movie-1769.html",
    "cover": "./119.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑, 剧情",
    "tags": [
      "校园霸凌",
      "十年重逢",
      "密室复仇",
      "反转结局"
    ],
    "desc": "十年后的同学会，昔日被霸凌的转校生将所有人困在地下室，开始了她的“点名”。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "超人：布莱尼亚克的攻击",
    "file": "movie-1770.html",
    "cover": "./120.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 科幻",
    "tags": [
      "超级英雄",
      "外星入侵",
      "缩小城市",
      "人工智能"
    ],
    "desc": "布莱尼亚克缩小并收藏大都会，超人必须进入瓶中城市唤醒被洗脑的市民。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "疏远丝连",
    "file": "movie-1771.html",
    "cover": "./121.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情",
    "tags": [
      "母女关系",
      "情感修复",
      "年代跨度",
      "细腻催泪",
      "双重叙事"
    ],
    "desc": "一对决裂十年的母女，因一场误诊被迫同居，在无数日常摩擦中重新牵起若有若无的线。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "大眼睛",
    "file": "movie-1772.html",
    "cover": "./122.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 传记",
    "tags": [
      "艺术诈骗",
      "女性觉醒",
      "真实事件"
    ],
    "desc": "她创作了风靡全美的“大眼睛”画作，却被丈夫谎称是自己画的。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "名花有主",
    "file": "movie-1773.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "爱情 / 喜剧 / 职场",
    "tags": [
      "契约婚姻",
      "霸总",
      "反套路",
      "清醒女主"
    ],
    "desc": "金牌猎头为保住工作，不得不与挑剔上司签订“情侣合约”，却意外发现上司的“理想型”是她随便编的。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "巴黎小情人",
    "file": "movie-1774.html",
    "cover": "./124.jpg",
    "year": "2008",
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "tags": [
      "三角恋",
      "家庭悲剧",
      "青春"
    ],
    "desc": "一个年轻女孩和一对兄弟之间的爱情游戏，最终演变成一场无法挽回的家族悲剧。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "骸骨人",
    "file": "movie-1775.html",
    "cover": "./125.jpg",
    "year": "2025",
    "region": "英国 / 美国",
    "type": "剧集",
    "genre": "恐怖 / 悬疑 / 犯罪",
    "tags": [
      "考古",
      "诅咒",
      "小镇秘密",
      "食人传说",
      "双时间线"
    ],
    "desc": "苏格兰一个偏远小镇挖出一具百年前的骸骨，它的右手食指，指向了镇上每一起谋杀案。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "花都圆舞曲",
    "file": "movie-1776.html",
    "cover": "./126.jpg",
    "year": "2016",
    "region": "法国",
    "type": "电影",
    "genre": "爱情文艺",
    "tags": [
      "巴黎",
      "舞蹈",
      "邂逅",
      "错过"
    ],
    "desc": "巴黎歌剧院旁的洗衣店女孩与失忆舞者在每个周六的下午相遇，他们用舞蹈交换着不能说的秘密。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "路过我年少时光的蓝色",
    "file": "movie-1777.html",
    "cover": "./127.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "电影",
    "genre": "剧情 / 爱情 / 同性",
    "tags": [
      "青春校园",
      "初恋",
      "蓝色意象",
      "唯美摄影",
      "后劲大"
    ],
    "desc": "那件永远洗不掉的蓝色校服污渍，藏着少年关于爱与离别的全部秘密。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "阿里巴巴三根金发",
    "file": "movie-1778.html",
    "cover": "./128.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻、冒险、喜剧",
    "tags": [
      "民间传说",
      "夺宝",
      "反转",
      "底层逆袭"
    ],
    "desc": "穷小子阿里巴巴意外获得三根能实现愿望的金发，却发现自己成了全宇宙通缉的“bug级”存在。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "我的机器人女友",
    "file": "movie-1779.html",
    "cover": "./129.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻，爱情",
    "tags": [
      "重置",
      "时间循环",
      "情感协议",
      "废柴男主",
      "天气预报"
    ],
    "desc": "他买了机器人女友，每一次重置都会删掉她的记忆，直到她在第七次重置前留下了遗言。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "都市的童话粤语",
    "file": "movie-1780.html",
    "cover": "./130.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "剧集",
    "genre": "爱情 / 奇幻 / 时装",
    "tags": [
      "港剧经典",
      "平民爱情",
      "都市童话",
      "命中注定"
    ],
    "desc": "一个房地产经纪和一个漫画女孩，因为一张中了头奖却撕碎的彩票，在快节奏的香港都市里，展开了一段如童话般纯粹的爱情。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "戏梦巴黎",
    "file": "movie-1781.html",
    "cover": "./131.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 情色 / 历史",
    "tags": [
      "电影迷因",
      "五月风暴",
      "三角关系"
    ],
    "desc": "1968年的巴黎，三个影迷将公寓改造成私人影院，用胶片和荷尔蒙重写世界，直到革命真的来敲门。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "爱情交响曲",
    "file": "movie-1782.html",
    "cover": "./132.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "音乐, 爱情",
    "tags": [
      "古典乐",
      "失聪",
      "治愈"
    ],
    "desc": "一个天才女小提琴家突然失聪，一个街头鼓手用节奏带她重新听见世界。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "欲燄金沙",
    "file": "movie-1783.html",
    "cover": "./133.jpg",
    "year": "2021",
    "region": "西班牙 / 墨西哥",
    "type": "电影",
    "genre": "剧情 / 惊悚",
    "tags": [
      "沙漠",
      "禁忌之恋",
      "生存",
      "背叛",
      "烈日"
    ],
    "desc": "一对偷情男女在沙漠遭遇沙暴，被困后才发现彼此都带着杀机。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "黑雪临头",
    "file": "movie-1784.html",
    "cover": "./134.jpg",
    "year": "2025",
    "region": "挪威",
    "type": "电影",
    "genre": "灾难悬疑",
    "tags": [
      "自然灾害",
      "末世",
      "神秘事件",
      "北欧",
      "末日生存"
    ],
    "desc": "一场带有腐蚀性的黑雪覆盖全球，一个气象学家发现这并非天灾，而是来自地底的惩罚。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "楼梯顶上的黑暗",
    "file": "movie-1785.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "心理恐怖",
      "老宅",
      "童年阴影",
      "反转",
      "细思极恐"
    ],
    "desc": "女孩每晚听到楼梯顶传来弹珠声，装了监控后，发现发出声音的竟然是小时候的自己。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "水深火热",
    "file": "movie-1786.html",
    "cover": "./136.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 社会",
    "tags": [
      "水污染",
      "农村",
      "抗争",
      "黑恶势力",
      "记者"
    ],
    "desc": "南方水乡频发怪病，女记者调查发现自来水厂掺入工业废水，而批准者竟是全村敬仰的慈善企业家。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "鬼信使",
    "file": "movie-1787.html",
    "cover": "./137.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖, 惊悚, 悬疑",
    "tags": [
      "阴间快递",
      "诅咒包裹",
      "都市怪谈",
      "因果报应",
      "反转结局"
    ],
    "desc": "失业青年兼职阴间快递员，发现每送一个包裹，收件人就会离奇死亡。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "吞下宇宙的男孩",
    "file": "movie-1788.html",
    "cover": "./138.jpg",
    "year": "2019",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "tags": [
      "成长",
      "边缘人",
      "兄弟情",
      "魔幻现实主义"
    ],
    "desc": "一个口吃的男孩，坚信自己吞下了一颗星星，从此他的世界变得不再平凡。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "火线情深",
    "file": "movie-1789.html",
    "cover": "./139.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作, 职业, 爱情",
    "tags": [
      "消防员",
      "火场救援",
      "生死恋",
      "职场写实",
      "热血群像"
    ],
    "desc": "他和她是全城最水火不容的消防精英，直到一场吞噬整个化工园区的爆炸，把两人铐在了同一副手铐上。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "怪物弹珠第四季",
    "file": "movie-1790.html",
    "cover": "./140.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "动作、科幻、冒险",
    "tags": [
      "怪物弹珠",
      "平行宇宙",
      "弹珠对战",
      "热血",
      "续作"
    ],
    "desc": "平行宇宙碰撞导致弹珠战士能力错乱，主角必须在规则崩溃的世界中找到真相。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "露西上太空",
    "file": "movie-1791.html",
    "cover": "./141.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "科幻，剧情，冒险",
    "tags": [
      "硬科幻",
      "心理学",
      "火星",
      "女性主角",
      "孤独"
    ],
    "desc": "人类首位登陆火星的女宇航员露西，在长达三年的单人往返旅程中，发现自己开始无法分辨，舱内另一个“人”是幻觉还是真实的。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "玩命毒师3：荣誉之名",
    "file": "movie-1792.html",
    "cover": "./142.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "tags": [
      "缉毒行动",
      "家族复仇",
      "爆炸美学"
    ],
    "desc": "毒枭之女接管帝国后第一件事不是贩毒，而是雇佣主角炸掉自己所有的制毒工厂。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "你想沦陷于我",
    "file": "movie-1793.html",
    "cover": "./143.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 悬疑, 都市",
    "tags": [
      "替身",
      "心理博弈",
      "反转",
      "高智商恋爱"
    ],
    "desc": "顶级商业间谍假装爱上目标，却发现自己才是被精心设计沦陷的猎物。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "尘缘不神山",
    "file": "movie-1794.html",
    "cover": "./144.jpg",
    "year": "2023",
    "region": "中国",
    "type": "剧集",
    "genre": "古装， 仙侠， 奇幻",
    "tags": [
      "修仙",
      "宿命",
      "轮回",
      "渡劫"
    ],
    "desc": "修仙菜鸟被选为“祭品”献祭给不神山妖神，却发现妖神是她在人间历劫时负心的书生。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "千万别眨眼",
    "file": "movie-1795.html",
    "cover": "./145.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "tags": [
      "超自然",
      "规则怪谈",
      "视觉游戏",
      "高概念"
    ],
    "desc": "六个人被困在一间诡异的白色房间，广播告诉他们：只要有人眨眼，就会立刻死去。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "万圣德加的传奇",
    "file": "movie-1796.html",
    "cover": "./146.jpg",
    "year": "2025",
    "region": "法国 / 加拿大",
    "type": "动画",
    "genre": "动画, 奇幻, 冒险",
    "tags": [
      "画家",
      "魔法",
      "艺术世界"
    ],
    "desc": "印象派大师德加的画作被施了魔法，画中的芭蕾舞女们活了过来，为了拯救即将被销毁的画卷，她们展开了一场冒险。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "布朗科比利的复活",
    "file": "movie-1797.html",
    "cover": "./147.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑惊悚",
    "tags": [
      "邪教",
      "死而复生",
      "多重反转"
    ],
    "desc": "三位老友为去世的“教主”举行招魂仪式，却发现他留下的遗言全是他们杀人的证据。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "猎刃",
    "file": "movie-1798.html",
    "cover": "./148.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作 / 冒险 / 年代",
    "tags": [
      "猎人",
      "抗日",
      "丛林战",
      "冷兵器"
    ],
    "desc": "深山猎人父子为救乡亲，拿起猎枪和弓弩，在原始森林中对战装备精良的日军特种队。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "牛津风云",
    "file": "movie-1799.html",
    "cover": "./149.jpg",
    "year": "2015",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "tags": [
      "高智商犯罪",
      "学术圈黑幕",
      "密室杀人"
    ],
    "desc": "牛津大学的期末考试中，一名学生当众写下“我是凶手”后自杀，引发连环命案。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "慈母泪",
    "file": "movie-1800.html",
    "cover": "./150.jpg",
    "year": "1973",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 家庭, 伦理",
    "tags": [
      "母爱",
      "悲剧",
      "乡土"
    ],
    "desc": "寡母含辛茹苦养大三个儿子，却被他们轮流踢开，只有疯了的二儿媳记得她。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "邪恶力量第十四季",
    "file": "movie-1801.html",
    "cover": "./1.jpg",
    "year": "2018",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻、惊悚、剧情",
    "tags": [
      "猎魔",
      "天使与恶魔",
      "兄弟羁绊",
      "大结局前夜"
    ],
    "desc": "当上帝成为最大反派，温彻斯特兄弟将如何对抗造物主？",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "鬼吹灯之黄皮子坟",
    "file": "movie-1802.html",
    "cover": "./2.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "冒险, 悬疑, 奇幻",
    "tags": [
      "盗墓",
      "东北民俗",
      "黄皮子",
      "胡八一",
      "惊悚"
    ],
    "desc": "胡八一闯入东北黄皮子坟，发现这座古墓里埋的不是死人，而是成千上万只黄鼠狼。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "贤妻乐坊",
    "file": "movie-1803.html",
    "cover": "./3.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装, 音乐, 家庭",
    "tags": [
      "女子乐团",
      "婆媳",
      "逆袭"
    ],
    "desc": "被休的女子组建全女性乐坊，用琴声征服京城，也让前夫跪求复合。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "受难记",
    "file": "movie-1804.html",
    "cover": "./4.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 心理 / 历史",
    "tags": [
      "宗教恐怖",
      "中世纪",
      "女巫审判",
      "幻觉",
      "A24"
    ],
    "desc": "一名被指控为女巫的中世纪女子在酷刑中产生了可怕的幻觉，她无法确定自己究竟是凡人还是恶魔。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "法式沙拉酱",
    "file": "movie-1805.html",
    "cover": "./5.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "tags": [
      "美食",
      "误会",
      "小镇风情"
    ],
    "desc": "一个巴黎美食评论家阴差阳错成了小镇餐厅的洗碗工，为了保住母亲留下的秘方，他必须做出最美味的沙拉酱。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "我的奇怪朋友第二季",
    "file": "movie-1806.html",
    "cover": "./6.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧",
    "tags": [
      "超能力",
      "青春",
      "成长"
    ],
    "desc": "上一季他们治好了超能力，这一季发现没治好——还多了几个更奇怪的。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "恋人的谎言",
    "file": "movie-1807.html",
    "cover": "./7.jpg",
    "year": "2023",
    "region": "中国",
    "type": "剧集",
    "genre": "爱情，剧情",
    "tags": [
      "职场",
      "谎言",
      "重逢",
      "都市情感"
    ],
    "desc": "一对因善意谎言分手的情侣七年后成为竞争对手，真相却比谎言更残忍。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "创造社物语",
    "file": "movie-1808.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "职场, 青春",
    "tags": [
      "广告业",
      "新人成长",
      "热血"
    ],
    "desc": "被骂“废物”的文科毕业生误入全日本最卷的广告公司，她的第一个任务是说服一群流浪猫给马桶拍广告。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "触不到的恋人",
    "file": "movie-1809.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "美国 / 韩国",
    "type": "电影",
    "genre": "爱情, 奇幻, 剧情",
    "tags": [
      "时空错位",
      "书信传情",
      "翻拍改编",
      "催泪"
    ],
    "desc": "2025年的程序员通过海边信箱，与1995年的建筑师开始了跨越三十年的通信。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "跳舞的猪",
    "file": "movie-1810.html",
    "cover": "./10.jpg",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 动画, 家庭",
    "tags": [
      "农场",
      "梦想",
      "拟人化"
    ],
    "desc": "一只梦想成为芭蕾舞明星的小猪，在朋友的帮助下，阴差阳错地登上了人类大剧院的舞台。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "糊涂劫车案",
    "file": "movie-1811.html",
    "cover": "./11.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "黑色喜剧 / 犯罪",
    "tags": [
      "荒诞",
      "连环误会",
      "小人物",
      "多线叙事"
    ],
    "desc": "三个笨贼劫持网约车，却发现车里坐着五拨互不相识的“危险人物”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "萌族酷狗侦探第三季",
    "file": "movie-1812.html",
    "cover": "./12.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动画， 悬疑， 推理",
    "tags": [
      "儿童侦探",
      "动物侦探",
      "单元剧",
      "萌系",
      "逻辑推理"
    ],
    "desc": "在解决了前两季的案件后，酷狗侦探这次要面对一个专门绑架优秀警犬的“完美犯罪”团伙。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "追光的日子",
    "file": "movie-1813.html",
    "cover": "./13.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 青春",
    "tags": [
      "治愈",
      "校园",
      "奋斗",
      "群像"
    ],
    "desc": "七位来自不同阶层的高三复读生，在城中村破旧的“追光自习室”里开启了最后的逆袭。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "汉堡高地",
    "file": "movie-1814.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "战争 / 动作",
    "tags": [
      "越战",
      "攻防战",
      "兄弟情",
      "写实"
    ],
    "desc": "越战中最惨烈的汉堡高地战役，美军一个连队被命令十次攻下同一个山头，只因为“地图上标错了”。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "苏拉姆城堡的传说",
    "file": "movie-1815.html",
    "cover": "./15.jpg",
    "year": "2026",
    "region": "格鲁吉亚 / 俄罗斯",
    "type": "电影",
    "genre": "奇幻 / 历史 / 剧情",
    "tags": [
      "民间传说",
      "诗意现实主义",
      "史诗"
    ],
    "desc": "为了阻止城堡在战火中坍塌，工匠的儿子必须活砌入城墙，而他的爱人决定一起成为传说。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "笑着活下去",
    "file": "movie-1816.html",
    "cover": "./16.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 生活",
    "tags": [
      "抗癌",
      "乐观",
      "人间真实"
    ],
    "desc": "癌症病房里的“戏精”病友联盟，用一场场恶作剧对抗死神与无聊。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "可惜不是你",
    "file": "movie-1817.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "爱情/青春",
    "tags": [
      "虐恋",
      "回忆杀",
      "音乐",
      "遗憾"
    ],
    "desc": "十年后，当红女歌手的演唱会上，台下坐着那个为她写出成名曲却无法相守的哑巴吉他手。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "澳门奇妙游",
    "file": "movie-1818.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "中国澳门",
    "type": "电影",
    "genre": "喜剧/奇幻",
    "tags": [
      "妈祖",
      "赌场",
      "穿越",
      "老街"
    ],
    "desc": "大三巴牌坊的影子在夏至那天会投下一个迷宫入口，走进去的人，会随机穿越到澳门任何一个历史年份的6月9日。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "洛城少女二十五岁",
    "file": "movie-1819.html",
    "cover": "./19.jpg",
    "year": "1993",
    "region": "法国",
    "type": "电影",
    "genre": "纪录片, 音乐",
    "tags": [
      "怀旧",
      "雅克·德米",
      "幕后",
      "歌舞片",
      "女性"
    ],
    "desc": "时隔 25 年，《洛城少女》的原班人马重访故地，回忆那场改变他们人生的夏日歌舞梦。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "中国新相亲第三季",
    "file": "movie-1820.html",
    "cover": "./20.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "婚恋交友",
    "tags": [
      "相亲",
      "父母",
      "观察室",
      "代际",
      "现实"
    ],
    "desc": "父母和孩子一起上阵挑对象，玻璃房里的子女却总想“反水”。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "异空感应粤语",
    "file": "movie-1821.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "科幻 / 悬疑",
    "tags": [
      "平行宇宙",
      "无线电",
      "粤语原声"
    ],
    "desc": "业余无线电爱好者收到一段来自平行宇宙的求救信号，对方竟是1997年的自己。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "节食与长寿",
    "file": "movie-1822.html",
    "cover": "./22.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 生活",
    "tags": [
      "治愈",
      "轻断食",
      "慢生活"
    ],
    "desc": "东京精英女白领被裁员后回到乡下外婆家，跟着90岁的外婆学种菜、做饭和“一餐只吃七分饱”的长寿哲学。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "从零到一的爱情",
    "file": "movie-1823.html",
    "cover": "./23.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻甜宠",
    "tags": [
      "人工智能",
      "养成系男友",
      "脑洞大开",
      "姐弟恋"
    ],
    "desc": "孤独的女程序员买了一个“伴侣机器人”，却发现它的程序逻辑是：只有不断让她讨厌自己，才能防止自己被关机。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "黄色风流车",
    "file": "movie-1824.html",
    "cover": "./24.jpg",
    "year": "1993",
    "region": "台湾",
    "type": "电影",
    "genre": "爱情、剧情、文艺",
    "tags": [
      "出租车",
      "午夜",
      "城市漫游",
      "欲望",
      "侯孝贤风格"
    ],
    "desc": "一个开黄色出租车的女司机，在深夜台北的车厢里，见证了无数都市男女的秘密与欲望。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "猛虎3",
    "file": "movie-1825.html",
    "cover": "./25.jpg",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "genre": "动作，惊悚，间谍",
    "tags": [
      "特工",
      "复仇",
      "老虎",
      "跨国行动"
    ],
    "desc": "代号“猛虎”的王牌特工被诬陷叛国，他必须单枪匹马闯入敌国总理的堡垒式庄园证明清白。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "浣熊：新欧洲人",
    "file": "movie-1826.html",
    "cover": "./26.jpg",
    "year": "2021",
    "region": "德国 / 波兰",
    "type": "电影",
    "genre": "喜剧, 剧情, 社会",
    "tags": [
      "移民",
      "动物寓言",
      "柏林",
      "身份认同",
      "黑色幽默"
    ],
    "desc": "一只被实验室遗弃的聪明浣熊，成了东欧移民马克在柏林唯一的家人和朋友，他们一起偷窃，一起对抗这个冰冷的世界。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "怪怪屋",
    "file": "movie-1827.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑",
    "tags": [
      "童年",
      "冒险",
      "超自然",
      "邻里",
      "单元剧"
    ],
    "desc": "一个街区里总有一栋奇怪的房子，一群小孩组成“怪怪屋调查社”，每集探索一栋会呼吸、会哭泣、会复仇的房子。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "二次人生",
    "file": "movie-1828.html",
    "cover": "./28.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "重生",
      "亲情",
      "遗憾",
      "治愈",
      "奇幻"
    ],
    "desc": "一位悔恨交加的父亲在临终前获得神启：他可以在平行时空中回到孩子人生的三个关键节点，但每次只能停留一天。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "变形金刚：超能勇士第二季",
    "file": "movie-1829.html",
    "cover": "./29.jpg",
    "year": "1997",
    "region": "美国",
    "type": "剧集",
    "genre": "动画，科幻，动作",
    "tags": [
      "童年经典",
      "野兽战争",
      "金属变体",
      "太空"
    ],
    "desc": "巨无霸和原始兽的战争升级，黑猩猩队长和霸王龙在史前地球获得了更强大的金属变体形态。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "现在开始作秀时间",
    "file": "movie-1830.html",
    "cover": "./30.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "喜剧 / 奇幻",
    "tags": [
      "鬼魂搭档",
      "魔术探案",
      "搞笑惊悚"
    ],
    "desc": "过气魔术师能与鬼魂对话，为了翻红他开了一档直播节目，现场帮鬼魂破案。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "惊情谍变",
    "file": "movie-1831.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "动作谍战",
    "tags": [
      "双面间谍",
      "记忆删除",
      "背叛"
    ],
    "desc": "军情六处最优秀的间谍失忆后，发现自己要刺杀的目标居然是曾经的自己。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "贪婪四重奏",
    "file": "movie-1832.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情， 惊悚， 犯罪",
    "tags": [
      "古典乐",
      "密室",
      "人性实验",
      "高智商犯罪"
    ],
    "desc": "四位濒临破产的顶尖音乐家受邀在一座孤岛豪宅演奏，却发现乐谱暗藏着一场价值十亿的杀人游戏。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "岩浆毒蛛",
    "file": "movie-1833.html",
    "cover": "./33.jpg",
    "year": "2026",
    "region": "日本 / 美国",
    "type": "电影",
    "genre": "科幻 / 惊悚 / 灾难",
    "tags": [
      "B级片",
      "变异生物",
      "火山爆发",
      "地下实验室"
    ],
    "desc": "富士山喷发，涌出的不是岩浆，而是亿万只吸食金属的变异毒蛛。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "我们存在的理由",
    "file": "movie-1834.html",
    "cover": "./34.jpg",
    "year": "2020",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 家庭 / 治愈",
    "tags": [
      "自闭症",
      "兄弟",
      "跑步",
      "马拉松",
      "存在主义"
    ],
    "desc": "患有严重自闭症的天才跑者，在一次马拉松事故后，突然开口问哥哥：“我为什么活着？”",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "亿万富犬",
    "file": "movie-1835.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧 / 家庭 / 冒险",
    "tags": [
      "狗狗",
      "遗产",
      "冒险",
      "温情"
    ],
    "desc": "一只金毛犬继承了富豪主人的十亿遗产，成为全球最富有的狗，也成为了绑架犯的头号目标。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "亲爱的柠檬精先生2",
    "file": "movie-1836.html",
    "cover": "./36.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 爱情",
    "tags": [
      "先婚后爱",
      "破镜重圆",
      "商战",
      "带球跑",
      "甜虐"
    ],
    "desc": "七年前被迫分离的契约夫妻，七年后在商场上狭路相逢，她却带着一个缩小版的他。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "我们的少年时代",
    "file": "movie-1837.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "青春成长",
    "tags": [
      "校园",
      "友情",
      "遗憾",
      "毕业季"
    ],
    "desc": "一场因高考倒计时100天而重启的同学群，撕开了十二个中年人不敢回望的少年伤疤。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "晚宴",
    "file": "movie-1838.html",
    "cover": "./38.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪, 悬疑",
    "tags": [
      "豪宅",
      "全员恶人",
      "复仇"
    ],
    "desc": "一场豪门寿宴，七位宾客各怀鬼胎，厨师端上的不是菜，是二十年前的命案证据。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "半城明媚半城雨第二季",
    "file": "movie-1839.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 爱情, 悬疑",
    "tags": [
      "江南烟雨",
      "文物修复",
      "双面人生",
      "非遗文化"
    ],
    "desc": "白天修复文物的匠人，夜晚化身追寻古城秘密的侠客，一场跨越千年的雨将她与宿命相连。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "狮子护卫队第二季",
    "file": "movie-1840.html",
    "cover": "./40.jpg",
    "year": "2020",
    "region": "美国",
    "type": "剧集",
    "genre": "动画 / 冒险 / 动作",
    "tags": [
      "续作",
      "团队协作",
      "草原",
      "守护",
      "正能量"
    ],
    "desc": "新一代狮子护卫队成立，他们要面对的不仅有外敌，还有来自荣耀国年轻一代内部的叛逆与挑战。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "三心两友一爱人",
    "file": "movie-1841.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情，剧情",
    "tags": [
      "多角恋",
      "友情考验",
      "都市情感"
    ],
    "desc": "两个死党爱上同一个女人，三颗心在友情与爱情的钢丝上摇摇欲坠。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "便利店氹氹转 3",
    "file": "movie-1842.html",
    "cover": "./42.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧，生活，单元剧",
    "tags": [
      "便利店",
      "深夜食堂",
      "街坊人情",
      "粤语俚语"
    ],
    "desc": "24小时便利店“氹氹转”迎来新店主，却是一个想用算法优化一切的硅谷回归程序员，与老街坊们斗智斗勇。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "北·南",
    "file": "movie-1843.html",
    "cover": "./43.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 动作",
    "tags": [
      "南北韩",
      "间谍",
      "互换身份",
      "双雄"
    ],
    "desc": "北方特工和南方情报员在一次意外中互换身体，他们必须在48小时内搞砸对方的任务以求活命。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "魔鬼枪神",
    "file": "movie-1844.html",
    "cover": "./44.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，奇幻，枪战",
    "tags": [
      "枪械拟人",
      "双重人格",
      "暗黑美学",
      "兄弟反目"
    ],
    "desc": "顶级杀手被魔鬼附身的枪剥夺了身体控制权，每次扣动扳机都是在与自己的人性做最后告别。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "哈利路亚",
    "file": "movie-1845.html",
    "cover": "./45.jpg",
    "year": "2026",
    "region": "法国/德国",
    "type": "电影",
    "genre": "惊悚， 犯罪",
    "tags": [
      "真实事件",
      "连环杀手",
      "致命伴侣"
    ],
    "desc": "一对通过婚恋网站猎物的连环杀手情侣，在杀戮中演绎出一段病态而致命的“爱情”。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "从三开始",
    "file": "movie-1846.html",
    "cover": "./46.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "tags": [
      "二胎",
      "中年危机",
      "家庭",
      "黑色幽默",
      "成长"
    ],
    "desc": "一对中年夫妇意外怀上三胎，由此引发了一系列啼笑皆非的家庭地震与温情和解。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "一幅僮锦",
    "file": "movie-1847.html",
    "cover": "./47.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画",
    "genre": "奇幻家庭",
    "tags": [
      "民间传说",
      "壮锦",
      "母子情",
      "寻宝"
    ],
    "desc": "贫苦母亲织的僮锦被风刮走，儿子踏入画中仙境，寻回失落的亲情。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "是，首相第一季",
    "file": "movie-1848.html",
    "cover": "./48.jpg",
    "year": "1986",
    "region": "英国",
    "type": "剧集",
    "genre": "喜剧 / 政治",
    "tags": [
      "英式幽默",
      "政治讽刺",
      "经典台词",
      "公务员文化"
    ],
    "desc": "一位理想主义的新首相发现，他最大的敌人不是反对党，而是他的首席秘书。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "绿洲2024",
    "file": "movie-1849.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情，动作，悬疑",
    "tags": [
      "复仇",
      "监狱",
      "黑帮",
      "底层",
      "反转"
    ],
    "desc": "一个被诬陷入狱的前拳击手，在被称为“绿洲”的地下黑市拳场里，每一场胜利都让他离揭发真相更近一步。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "自然光线",
    "file": "movie-1850.html",
    "cover": "./50.jpg",
    "year": "2023",
    "region": "匈牙利 / 法国",
    "type": "电影",
    "genre": "剧情 / 历史 / 战争",
    "tags": [
      "二战",
      "东线",
      "游击队",
      "黑白摄影",
      "人性"
    ],
    "desc": "1943年乌克兰丛林，一群匈牙利游击队员抓获了一名疑似苏联女间谍，但她的眼神比雪更冷。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "伦敦糖果",
    "file": "movie-1851.html",
    "cover": "./51.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 黑色幽默",
    "tags": [
      "黑帮",
      "甜品店",
      "继承",
      "荒诞"
    ],
    "desc": "一个伦敦黑帮家族的废柴长子，继承了父亲留下的最后遗产——一家濒临倒闭的维多利亚糖果店。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "阿衰第四季",
    "file": "movie-1852.html",
    "cover": "./52.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "剧集",
    "genre": "喜剧 / 动画",
    "tags": [
      "校园",
      "搞笑",
      "国漫",
      "怀旧"
    ],
    "desc": "阿衰终于上了高中，但同桌还是那个暴力的大脸妹，而这次他面临的是高考改革和早恋危机。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "欲满夏湾拿",
    "file": "movie-1853.html",
    "cover": "./53.jpg",
    "year": "2004",
    "region": "古巴/西班牙",
    "type": "电影",
    "genre": "剧情， 音乐， 爱情",
    "tags": [
      "哈瓦那",
      "雪茄",
      "爵士乐",
      "革命",
      "禁忌恋"
    ],
    "desc": "一九九八年，一位西班牙女摄影师与哈瓦那老雪茄厂工头，因一支被禁的爵士小号陷入致命热恋。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "隐形人的复仇",
    "file": "movie-1854.html",
    "cover": "./54.jpg",
    "year": "1944",
    "region": "美国",
    "type": "电影",
    "genre": "科幻，惊悚",
    "tags": [
      "隐形人",
      "复仇",
      "实验",
      "黑白片",
      "经典"
    ],
    "desc": "被科学家害得永远隐形的病人开始逐个清除参与实验的每一个人。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "眠狂四郎圆月杀法",
    "file": "movie-1855.html",
    "cover": "./55.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 武侠 / 剧情",
    "tags": [
      "时代剧",
      "剑客",
      "复仇",
      "禅意",
      "暴力美学"
    ],
    "desc": "盲眼剑客眠狂四郎在圆月之夜连斩十二人，只为了完成一本用血抄写的《心经》。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "他的摩托车，她的岛",
    "file": "movie-1856.html",
    "cover": "./56.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": [
      "机车",
      "离岛",
      "遗书"
    ],
    "desc": "叛逆少女为了继承遗产，必须在七天内学会骑那辆报废的摩托车，并载着骨灰盒环岛一周。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "粉黛迷春",
    "file": "movie-1857.html",
    "cover": "./57.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 悬疑 / 年代",
    "tags": [
      "民国",
      "胭脂坊",
      "家族恩怨",
      "替身"
    ],
    "desc": "民国时期，苏州胭脂坊的两位女继承人爱上了同一个男人，却在制作一盒“迷春”口脂时发现了对方致命的秘密。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "如何拯救一名死去的朋友",
    "file": "movie-1858.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "tags": [
      "死亡真相",
      "心理博弈",
      "友情救赎",
      "层层反转"
    ],
    "desc": "最好的朋友自杀后，一个社恐青年开始疯狂研究“复活术”，却发现朋友的死因藏在自己遗忘的记忆里。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "神龙星主",
    "file": "movie-1859.html",
    "cover": "./59.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "玄幻 / 古装 / 喜剧",
    "tags": [
      "废柴逆袭",
      "龙魂附体",
      "沙雕修仙"
    ],
    "desc": "修真界最废柴的杂役弟子，体内住着一条被迫退休的吐槽役老神龙，两人合作骗过整个仙界。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "爱也艰难",
    "file": "movie-1860.html",
    "cover": "./60.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "爱情剧情",
    "tags": [
      "婚姻危机",
      "中年困境",
      "都市情感"
    ],
    "desc": "结婚十年的夫妻为了争夺一套房产，不得不在一周内假装恩爱如初。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "火之壁",
    "file": "movie-1861.html",
    "cover": "./61.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "灾难后",
      "治愈",
      "消防",
      "创伤",
      "素人表演"
    ],
    "desc": "一场山火夺走了他的妻子，他成了一名纵火犯调查员，却发现最大的嫌疑人竟是自己失忆的独子。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "黑凤凰",
    "file": "movie-1862.html",
    "cover": "./62.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 科幻, 剧情",
    "tags": [
      "X战警",
      "超能力",
      "失控",
      "黑暗",
      "宿命"
    ],
    "desc": "在一次太空救援任务中，琴·葛蕾被一股神秘宇宙力量击中，成为最强的变种人，却也成了团队最大的威胁。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "灵肉交响曲",
    "file": "movie-1863.html",
    "cover": "./63.jpg",
    "year": "2026",
    "region": "加拿大",
    "type": "电影",
    "genre": "科幻爱情",
    "tags": [
      "意识上传",
      "伦理",
      "音乐"
    ],
    "desc": "濒死的钢琴家将意识上传到云端，却发现自己只能通过干扰活人的神经元来“演奏”他们。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "活佛济公",
    "file": "movie-1864.html",
    "cover": "./64.jpg",
    "year": "2010",
    "region": "中国",
    "type": "剧集",
    "genre": "古装，神话，喜剧",
    "tags": [
      "济公",
      "降妖",
      "单元剧",
      "疯癫",
      "慈悲"
    ],
    "desc": "疯癫和尚济公降世人间，用破扇和葫芦收服妖魔，也渡化人心。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "银面具",
    "file": "movie-1865.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "历史 / 冒险",
    "tags": [
      "威尼斯",
      "歌剧",
      "复仇",
      "伪装"
    ],
    "desc": "威尼斯狂欢节上，戴着银面具的神秘人每晚惩罚一位权贵，而他复仇的脚本是歌剧咏叹调。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "医者仁心",
    "file": "movie-1866.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "医疗、剧情、职业",
    "tags": [
      "急诊科",
      "医患关系",
      "医生成长",
      "行业黑幕"
    ],
    "desc": "天才外科医生因一次“过度医疗”指控被下放到基层急诊，却发现了医院评级背后的惊天利益链。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "安非他命",
    "file": "movie-1867.html",
    "cover": "./67.jpg",
    "year": "2020",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪, 同性",
    "tags": [
      "毒品",
      "禁忌",
      "救赎"
    ],
    "desc": "卧底警察为接近毒枭，伪装成瘾君子与对方坠入爱河，却发现自己逐渐分不清任务是真心。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "打劫阴司路",
    "file": "movie-1868.html",
    "cover": "./68.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖，喜剧",
    "tags": [
      "灵异",
      "黑色幽默",
      "劫匪",
      "地府",
      "民俗"
    ],
    "desc": "三个笨贼抢劫金店后逃入义庄，不料撞上鬼差“收人”，被迫帮忙完成地府KPI。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "纯真消逝的年代",
    "file": "movie-1869.html",
    "cover": "./69.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "剧情， 历史",
    "tags": [
      "二战",
      "童年",
      "纳粹",
      "反思"
    ],
    "desc": "1943年的汉堡，六岁的德国女孩在轰炸中失去了双亲，她被一名善良的犹太逃亡者所救，却必须学着在谎言中活下去。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "乐高大电影",
    "file": "movie-1870.html",
    "cover": "./70.jpg",
    "year": "2014",
    "region": "美国 / 丹麦",
    "type": "电影",
    "genre": "喜剧 / 动画 / 冒险",
    "tags": [
      "乐高",
      "积木",
      "想象力",
      "反乌托邦"
    ],
    "desc": "一个被误认是“救世主”的普通乐高小人，要用一块积木打败暴君。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "恋爱保质期",
    "file": "movie-1871.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "爱情, 奇幻, 剧情",
    "tags": [
      "时间循环",
      "便利店",
      "都市",
      "治愈",
      "倒计时"
    ],
    "desc": "在便利店兼职的女孩发现，自己和暗恋的顾客每次接吻后，对方关于她的记忆就会在24小时内清零。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "小鬼当家国语",
    "file": "movie-1872.html",
    "cover": "./72.jpg",
    "year": "2020",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "tags": [
      "粤语梗",
      "机关斗法",
      "熊孩子逆袭"
    ],
    "desc": "精通普通话和粤语的小学生阿奇，用语言陷阱和土制机关，把前来寻仇的国际杀手耍得团团转。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "霸王斩妖龙",
    "file": "movie-1873.html",
    "cover": "./73.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 奇幻 / 古装",
    "tags": [
      "神话",
      "降龙",
      "硬核动作",
      "特效大片",
      "侠义"
    ],
    "desc": "商末乱世，少年霸王为救苍生，持轩辕剑与吞噬九州的妖龙展开宿命对决。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "七十二家房客第九部粤语",
    "file": "movie-1874.html",
    "cover": "./74.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情 / 喜剧",
    "tags": [
      "粤语长片IP",
      "市井群像",
      "邻里",
      "怀旧"
    ],
    "desc": "旧楼面临拆迁，七十二家房客最后一次齐心协力，对抗无良地产商和自家贪心的后代。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "莉安传说",
    "file": "movie-1875.html",
    "cover": "./75.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻 / 冒险 / 家庭",
    "tags": [
      "精灵",
      "诅咒",
      "姐妹情",
      "手绘动画"
    ],
    "desc": "哑女莉安能听懂万物低语，为救被石化的姐姐，她必须找到传说中会说谎的月亮。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "花都绮梦",
    "file": "movie-1876.html",
    "cover": "./76.jpg",
    "year": "2015",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 剧情 / 文艺",
    "tags": [
      "巴黎",
      "错位人生",
      "情感纠葛",
      "女性成长",
      "浪漫与现实"
    ],
    "desc": "小镇姑娘中彩票后搬进巴黎豪宅，却发现隔壁住着十年前抛弃她的初恋，而他已失明。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "谋杀大小姐",
    "file": "movie-1877.html",
    "cover": "./77.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧，悬疑，犯罪",
    "tags": [
      "豪门恩怨",
      "乌龙侦探",
      "反转",
      "黑色幽默"
    ],
    "desc": "富家千金离奇死亡，三个笨贼为拿酬劳假扮侦探，却意外揭开了真相。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "抗癌斗争的新策略",
    "file": "movie-1878.html",
    "cover": "./78.jpg",
    "year": "2020",
    "region": "美国",
    "type": "纪录片",
    "genre": "纪录, 医学, 科学",
    "tags": [
      "癌症",
      "免疫疗法",
      "真实病例",
      "科学家群像",
      "希望"
    ],
    "desc": "三位晚期癌症患者加入一场“以毒攻毒”的临床试验，用改造后的HIV病毒攻击癌细胞。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "玛拉与盗火者",
    "file": "movie-1879.html",
    "cover": "./79.jpg",
    "year": "2024",
    "region": "法国 / 加拿大",
    "type": "动画",
    "genre": "奇幻，冒险",
    "tags": [
      "神话新编",
      "蒸汽朋克",
      "少女英雄",
      "反殖民",
      "视觉盛宴"
    ],
    "desc": "在众神被资本家驯化为“能源”的世界里，少女玛拉偷走了最后一颗太阳种子，准备炸掉天空中的“神之工厂”。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "浮石传",
    "file": "movie-1880.html",
    "cover": "./80.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 奇幻",
    "tags": [
      "仙侠修真",
      "反套路",
      "废柴逆袭",
      "轻喜剧"
    ],
    "desc": "一块能漂浮的废石头突然开口说话，认了一个倒霉蛋做徒弟，要教他成为三界最没用的修仙者。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "赤裸裸",
    "file": "movie-1881.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情，惊悚",
    "tags": [
      "社会批判",
      "心理",
      "边缘人",
      "黑色幽默"
    ],
    "desc": "一个一无所有的流浪汉偶然闯入一场上流社会的天体营聚会，他在那里听到的对话，揭露了一场惊天阴谋。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "达西玛姨娘",
    "file": "movie-1882.html",
    "cover": "./82.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 历史 / 家庭",
    "tags": [
      "民国",
      "女性命运",
      "家族恩怨",
      "蒙古族",
      "文学改编"
    ],
    "desc": "一九三七年，达西玛从农奴成为王爷府姨娘，她用三十年下一盘复仇大棋。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "智谋销烟",
    "file": "movie-1883.html",
    "cover": "./83.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "禁毒暗战",
      "高智商缉毒",
      "双雄对决"
    ],
    "desc": "缉毒队长与毒枭首席制毒师，两个数学天才在一粒药丸的分子式上展开无声厮杀。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "杨光的快乐生活之恋爱先生",
    "file": "movie-1884.html",
    "cover": "./84.jpg",
    "year": "2016",
    "region": "中国",
    "type": "剧集",
    "genre": "喜剧",
    "tags": [
      "津味",
      "婚恋",
      "小人物",
      "系列续作"
    ],
    "desc": "热心肠的杨光开了一家“恋爱咨询中心”，专门帮人解决奇葩的情感难题。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "星期五晚餐 第四季",
    "file": "movie-1885.html",
    "cover": "./85.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "喜剧, 家庭",
    "tags": [
      "情景喜剧",
      "犹太家庭",
      "毒舌",
      "温馨",
      "英式幽默"
    ],
    "desc": "亚当带女友回家过安息日晚餐，没想到哥哥也带来了未婚妻，而妈妈偷偷准备了两份完全不同的菜单。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "识骨寻踪第五季",
    "file": "movie-1886.html",
    "cover": "./86.jpg",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪，法医",
    "tags": [
      "女性法医",
      "连环杀手",
      "考古",
      "冷案"
    ],
    "desc": "天才法医博士继续与联邦探员搭档，这次她要面对的是一具来自古罗马时期却穿着现代跑鞋的骸骨。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "诱人的定情物",
    "file": "movie-1887.html",
    "cover": "./87.jpg",
    "year": "2003",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情， 悬疑， 奇幻",
    "tags": [
      "定情信物",
      "时间循环",
      "初恋",
      "诅咒"
    ],
    "desc": "一对恋人交换定情手链后开始反复死亡，每次醒来都回到认识前一天，遗忘一切重来。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "花战",
    "file": "movie-1888.html",
    "cover": "./88.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "动作, 历史",
    "tags": [
      "花道",
      "剑术",
      "美学对决"
    ],
    "desc": "战国末期，落魄花道师用插花之术挑战天下第一剑客，而胜负只在一朵山茶花垂落的速度。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "江湖夜店",
    "file": "movie-1889.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装喜剧",
    "tags": [
      "情景喜剧",
      "市井江湖",
      "群像",
      "解压"
    ],
    "desc": "一间开在京城“三不管”地带的破夜店，老板娘是退隐的江湖第一美人，店里的跑堂、厨师、账房先生个个身怀绝技又全是废柴。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "川流中的岛渚",
    "file": "movie-1890.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "文艺、悬疑",
    "tags": [
      "意识流",
      "孤岛",
      "记忆迷宫",
      "导演致敬"
    ],
    "desc": "一位失忆导演受邀前往河中孤岛，发现岛上的居民全是他电影中死去的人物。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "喜欢你我也是第二季",
    "file": "movie-1891.html",
    "cover": "./91.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "恋爱、社交",
    "tags": [
      "素人恋爱",
      "观察室",
      "糖分超标"
    ],
    "desc": "八位素人男女入住“喜欢你小屋”，在暧昧试探和直球告白中寻找真爱。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "大病",
    "file": "movie-1892.html",
    "cover": "./92.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "tags": [
      "绝症乌龙",
      "家庭和解",
      "文化碰撞"
    ],
    "desc": "工作狂查出绝症后决定放纵人生，却发现是误诊，而此时他已把家人折腾得鸡飞狗跳。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "奔向你",
    "file": "movie-1893.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情",
    "tags": [
      "双向奔赴",
      "长跑",
      "纯爱",
      "时空交错",
      "治愈"
    ],
    "desc": "患有听觉障碍的马拉松女选手，通过跑步声“听”到了另一个城市里失意拳击手的孤独心跳。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "高山上的童年",
    "file": "movie-1894.html",
    "cover": "./94.jpg",
    "year": "2026",
    "region": "尼泊尔/中国大陆合拍",
    "type": "电影",
    "genre": "剧情, 家庭, 儿童",
    "tags": [
      "山区",
      "贫困",
      "梦想",
      "纯真"
    ],
    "desc": "喜马拉雅山脚下，一个从未下过山的藏族男孩捡到一部摔坏的手机，为了修好它听一首“山外的歌”，他开始了一场冒险。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "死亡将至",
    "file": "movie-1895.html",
    "cover": "./95.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑惊悚",
    "tags": [
      "死神",
      "预告杀人",
      "快递员",
      "因果报应"
    ],
    "desc": "一位快递员每天送出死亡预告函，而他的名字也悄然出现在第二天的名单上。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "昨天今天明天",
    "file": "movie-1896.html",
    "cover": "./96.jpg",
    "year": "1994",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": [
      "王家卫风格",
      "时间错位",
      "城市孤独"
    ],
    "desc": "一个时钟维修师爱上了一个只能在特定日子出现的女人，他决定把每一天都调成那天。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "芝加哥急救第十季",
    "file": "movie-1897.html",
    "cover": "./97.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情, 医学",
    "tags": [
      "医疗",
      "职场",
      "群像"
    ],
    "desc": "疫情后的芝加哥急救，面临史上最大财政危机，老将回归与新锐势力的权力斗争一触即发。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "数码宝贝：幽灵游戏",
    "file": "movie-1898.html",
    "cover": "./98.jpg",
    "year": "2021",
    "region": "日本",
    "type": "剧集",
    "genre": "动画 / 冒险 / 科幻",
    "tags": [
      "数码宝贝",
      "都市传说",
      "悬疑",
      "友情感"
    ],
    "desc": "在未来的网络社会，肉眼看不见的数码兽引发都市怪谈，几个少年用“幽灵”探测器与之作战。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "换乐无穷粤语",
    "file": "movie-1899.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧, 奇幻, 都市",
    "tags": [
      "手机APP",
      "等价交换",
      "港式幽默",
      "欲望寓言"
    ],
    "desc": "一款“快乐置换”APP，只要牺牲你最擅长的东西，就能换来任何你想要的情绪。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "女子特警队",
    "file": "movie-1900.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作 / 军旅",
    "tags": [
      "女性群像",
      "反恐",
      "魔鬼训练",
      "姐妹情"
    ],
    "desc": "八个被淘汰的女兵，被扔到无人岛上进行一场没有规则、没有预算、没有退路的生存考核。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "过往",
    "file": "movie-1901.html",
    "cover": "./101.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": [
      "阿尔茨海默",
      "代际和解",
      "时间回溯",
      "亲情"
    ],
    "desc": "患有阿尔茨海默症的父亲只记得四十年前的秘密，儿子决定陪他演完那场未完成的戏。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "极地先锋",
    "file": "movie-1902.html",
    "cover": "./102.jpg",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "genre": "冒险，传记，剧情",
    "tags": [
      "北极",
      "探险",
      "真实改编",
      "生存",
      "人性"
    ],
    "desc": "1909年，两位彼此憎恨的探险家为了争夺“第一个到达北极点”的荣誉，必须穿越即将解冻的冰原，展开一场生死竞速。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "大上海夜枭",
    "file": "movie-1903.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "犯罪 / 悬疑 / 年代",
    "tags": [
      "民国",
      "连环杀手",
      "法医",
      "上海滩"
    ],
    "desc": "1936年的上海滩出现了一个专在雨夜杀人的“夜枭”，巡捕房新来的女法医发现，凶手是按照一本失传的《洗冤录》残卷的手法在犯案。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "西线无战事",
    "file": "movie-1904.html",
    "cover": "./104.jpg",
    "year": "2029",
    "region": "德国",
    "type": "电影",
    "genre": "反战、历史、剧情",
    "tags": [
      "未来战争",
      "人体改造",
      "人性异化",
      "视觉冲击"
    ],
    "desc": "当士兵被植入战斗芯片，西线真的再无战事——因为他们已不再是人。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "东京偶像",
    "file": "movie-1905.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情悬疑",
    "tags": [
      "偶像文化",
      "地下女团",
      "网络暴力",
      "心理惊悚",
      "身份认同"
    ],
    "desc": "地下偶像团体成员在直播中被人杀害，而凶手可能就藏在每天给她刷礼物的铁杆粉丝里。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "卡斯",
    "file": "movie-1906.html",
    "cover": "./106.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "剧情, 悬疑, 惊悚",
    "tags": [
      "多重人格",
      "庭审现场",
      "原生家庭",
      "社会派"
    ],
    "desc": "一场灭门惨案唯一的目击者，是被告席上那个声称自己有24个人格的9岁男孩。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "食人族大屠杀2",
    "file": "movie-1907.html",
    "cover": "./107.jpg",
    "year": "1988",
    "region": "意大利",
    "type": "电影",
    "genre": "恐怖 / 冒险",
    "tags": [
      "禁片",
      "食人族",
      "伪纪录片",
      "血腥",
      "争议"
    ],
    "desc": "一支纪录片摄制组进入亚马逊雨林寻找第一部电影的拍摄团队，却发现所有成员都变成了食人族的狂热信徒。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "超级飞侠第十一季",
    "file": "movie-1908.html",
    "cover": "./108.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动画, 儿童, 冒险",
    "tags": [
      "益智",
      "乐迪",
      "环游世界",
      "解决问题"
    ],
    "desc": "乐迪和他的超级飞侠伙伴们继续环游世界，给小朋友们送包裹，顺便解决各种棘手的难题。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "歌王艳侣",
    "file": "movie-1909.html",
    "cover": "./109.jpg",
    "year": "1989",
    "region": "香港",
    "type": "电影",
    "genre": "歌舞 / 爱情 / 剧情",
    "tags": [
      "娱乐圈",
      "三角恋",
      "怀旧金曲",
      "悲剧宿命"
    ],
    "desc": "六十年代夜总会歌王与富家千金的禁忌恋，因一首未发表的歌谱掀起二十年恩怨。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "潘多拉：永恒的生命",
    "file": "movie-1910.html",
    "cover": "./110.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "科幻 / 悬疑 / 惊悚",
    "tags": [
      "克隆",
      "永生",
      "伦理",
      "反转"
    ],
    "desc": "一家顶级生物公司宣称破解了衰老密码，但第一批体验者开始看到“另一个自己”在追杀他们。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "激情时速",
    "file": "movie-1911.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 犯罪, 赛车",
    "tags": [
      "飙车",
      "复仇",
      "卧底",
      "极限运动"
    ],
    "desc": "为了给哥哥报仇，天才女赛车手卧底进入横跨三国的非法地下飙车组织。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "芝加哥急救第二季",
    "file": "movie-1912.html",
    "cover": "./112.jpg",
    "year": "2016",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情, 医疗",
    "tags": [
      "急诊室",
      "群像剧",
      "高压力",
      "伦理困境"
    ],
    "desc": "芝加哥最繁忙的急救中心，医生们在与死神赛跑的同时，也深陷情感与职业的泥潭。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "超越边界",
    "file": "movie-1913.html",
    "cover": "./113.jpg",
    "year": "2003",
    "region": "英国",
    "type": "电影",
    "genre": "爱情, 战争, 剧情",
    "tags": [
      "人道主义",
      "救援",
      "战地",
      "牺牲",
      "跨国恋"
    ],
    "desc": "伦敦名媛放弃锦衣玉食，跟随理想主义医生奔赴全球最危险的战场，只为救赎与爱。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "白桃花",
    "file": "movie-1914.html",
    "cover": "./114.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": [
      "纯爱",
      "绝症",
      "时空交错"
    ],
    "desc": "得了失忆症的老太太，每天都会收到一个陌生老人送来的一枝白桃花。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "垂死侦探",
    "file": "movie-1915.html",
    "cover": "./115.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": [
      "绝症侦探",
      "最后一案",
      "智力对决",
      "英伦",
      "noir"
    ],
    "desc": "罹患渐冻症的神探只剩三个月生命，他要在无法说话、无法动笔之前，破解自己职业生涯最后一个案子——他的初恋失踪案。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "过关斩将",
    "file": "movie-1916.html",
    "cover": "./116.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 科幻",
    "tags": [
      "真人闯关",
      "反乌托邦",
      "直播"
    ],
    "desc": "失业青年参加一档奖金千万的闯关节目，发现每一关都会死人。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "追剿魔头",
    "file": "movie-1917.html",
    "cover": "./117.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "刑侦 / 悬疑 / 动作",
    "tags": [
      "缉毒",
      "大毒枭",
      "身份反转",
      "双线叙事",
      "硬汉派"
    ],
    "desc": "缉毒队长追了十年的毒枭“魔头”终于落网，但他的脸竟和当年牺牲的卧底兄弟一模一样。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "遥之彼方的接发球",
    "file": "movie-1918.html",
    "cover": "./118.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "运动 / 青春 / 励志",
    "tags": [
      "沙滩排球",
      "少女",
      "友情",
      "热血",
      "成长"
    ],
    "desc": "因伤病退役的天才排球少女转学冲绳，被一名热爱沙滩排球的土著女孩“强行”组队，目标是全国大赛。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "魔术师和消失的女孩",
    "file": "movie-1919.html",
    "cover": "./119.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑犯罪",
    "tags": [
      "魔术",
      "绑架",
      "密室逃脱",
      "推理",
      "反转"
    ],
    "desc": "著名魔术师的女儿在表演“水箱逃生”时失踪，3年后他收到一盘录像带：她还在水箱里。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "臆想魔友",
    "file": "movie-1920.html",
    "cover": "./120.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 心理",
    "tags": [
      "童年阴影",
      "假想朋友",
      "实体化恐惧",
      "反转"
    ],
    "desc": "每个孩子的假想朋友都是善良的，直到有一天，她女儿说：“妈妈，我的魔友想让我杀了你。”",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "齐天大圣·万妖之城",
    "file": "movie-1921.html",
    "cover": "./121.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "动画",
    "genre": "动作, 奇幻, 冒险",
    "tags": [
      "孙悟空",
      "反套路",
      "妖怪城市",
      "自我救赎"
    ],
    "desc": "齐天大圣被困在妖怪建造的巨型移动城市里，发现城主竟是他五百年前结拜的兄弟。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "上海滩喋血枭雄",
    "file": "movie-1922.html",
    "cover": "./122.jpg",
    "year": "2028",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作、历史、帮派",
    "tags": [
      "民国",
      "法租界",
      "枪战",
      "兄弟反目"
    ],
    "desc": "1935年上海法租界，两名从小长大的孤儿分别成为巡捕房华探长和青帮红棍。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "红色呼叫铃",
    "file": "movie-1923.html",
    "cover": "./123.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "医院",
      "连环杀人",
      "呼叫铃",
      "密室",
      "反转"
    ],
    "desc": "一家偏远医院的五号病房，每晚零点都会响起红色呼叫铃，按下铃的病人次日清晨都会离奇康复——然后失踪。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "异象",
    "file": "movie-1924.html",
    "cover": "./124.jpg",
    "year": "2028",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 惊悚",
    "tags": [
      "超自然现象",
      "全球灾难",
      "科学家群像",
      "末日求生"
    ],
    "desc": "全球各地同时出现天启异象，一群科学家发现它们竟是倒计时。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "爱的引擎",
    "file": "movie-1925.html",
    "cover": "./125.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "爱情 / 科幻",
    "tags": [
      "机器人",
      "治愈",
      "公路片",
      "末日",
      "纯爱"
    ],
    "desc": "末日废土上，孤独的修车工捡到一台拥有爱人记忆的机器人，一人一机踏上寻找“心”的旅程。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "凡夫俗子",
    "file": "movie-1926.html",
    "cover": "./126.jpg",
    "year": "2029",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情， 家庭， 心理",
    "tags": [
      "普通家庭",
      "枪击案",
      "幸存者",
      "guilt",
      "婚姻危机"
    ],
    "desc": "一个普通美国家庭在儿子校园枪击案中失去了女儿，剩下的人要如何面对“普通的”余生？",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "入室佳人",
    "file": "movie-1927.html",
    "cover": "./127.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "tags": [
      "入侵",
      "反转",
      "女性",
      "复仇",
      "密室"
    ],
    "desc": "两名小偷闯入豪宅，却发现屋内女主人正被囚禁，她们必须决定是救人还是逃跑。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "富贵再逼人",
    "file": "movie-1928.html",
    "cover": "./128.jpg",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧， 家庭",
    "tags": [
      "香港贺岁片",
      "中彩票",
      "乌龙家族"
    ],
    "desc": "上一集中了六合彩的骠叔一家，这次远赴加拿大，却把钱全赔在了赛马场上。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "心灵猎人第二季",
    "file": "movie-1929.html",
    "cover": "./129.jpg",
    "year": "2019",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 犯罪 / 心理",
    "tags": [
      "犯罪心理学",
      "FBI",
      "连环杀手",
      "真实改编"
    ],
    "desc": "探员深入亚特兰大儿童谋杀案，在与杀人魔的对话中，自己也逐渐滑向深渊。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "爱在生命转弯时",
    "file": "movie-1930.html",
    "cover": "./130.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情, 剧情",
    "tags": [
      "绝症",
      "赛车",
      "治愈"
    ],
    "desc": "一位生命只剩三个月的轮椅少女，成了地下赛车手的专属“领航员”，用最后的地图帮他赢下宿命之战。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "龙头之死",
    "file": "movie-1931.html",
    "cover": "./131.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "黑帮传记",
    "tags": [
      "真实改编",
      "权力游戏",
      "宿命"
    ],
    "desc": "聚焦西西里黑手党“龙头”的传奇一生，从他贫民窟的童年，到权倾朝野，最终在街头被暗杀。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "命运之线",
    "file": "movie-1932.html",
    "cover": "./132.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 爱情, 悬疑",
    "tags": [
      "时空交错",
      "宿命",
      "情感纠葛"
    ],
    "desc": "一块能看见未来碎片的手表，让失意编剧在三个不同年代的爱人之间挣扎抉择。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "爱情冒险家",
    "file": "movie-1933.html",
    "cover": "./133.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 冒险 / 爱情",
    "tags": [
      "寻宝",
      "前任",
      "夺宝奇兵",
      "欢喜冤家"
    ],
    "desc": "分手五年的考古学家前情侣被同一张藏宝图骗进亚马逊，他们必须假装相爱才能解锁下一个线索。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "外星人狙击战",
    "file": "movie-1934.html",
    "cover": "./134.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 动作",
    "tags": [
      "太空战场",
      "狙击手",
      "隐形外星人"
    ],
    "desc": "一支由地球顶尖狙击手组成的小队被投送到被外星虫族占领的轨道空间站，他们发现敌人的猎杀方式与人类军事教材完全一致。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "王者杰克",
    "file": "movie-1935.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "犯罪，剧情，惊悚",
    "tags": [
      "黑帮史诗",
      "底层逆袭",
      "硬核暴力",
      "莎士比亚式"
    ],
    "desc": "伦敦东区一个不起眼的搬运工杰克，意外卷入黑帮火并后，凭借超乎常人的冷静和狠辣，在24小时内登顶地下王座。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "火鸡反击战",
    "file": "movie-1936.html",
    "cover": "./136.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画",
    "genre": "喜剧/冒险",
    "tags": [
      "感恩节",
      "动物起义",
      "黑色幽默",
      "反转"
    ],
    "desc": "每年感恩节被吃掉的火鸡从未消失，它们只是在地下组建了一支复仇军队。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "魔幻时刻",
    "file": "movie-1937.html",
    "cover": "./137.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧",
    "tags": [
      "错位喜剧",
      "电影情怀",
      "小人物",
      "戏中戏",
      "温情"
    ],
    "desc": "一个落魄龙套被黑道胁迫扮演杀手，却在毫无察觉中把整个黑帮江湖变成了一场荒诞真人秀。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "史宾赛的机密任务",
    "file": "movie-1938.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 喜剧, 悬疑",
    "tags": [
      "私家侦探",
      "波士顿",
      "硬汉",
      "搞笑"
    ],
    "desc": "前拳击手出身的私家侦探史宾赛刚出狱就被卷入一桩离奇命案，而唯一的证人是他的宿敌——一只会说话的鹦鹉。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "带着爸爸去留学",
    "file": "movie-1939.html",
    "cover": "./139.jpg",
    "year": "2019",
    "region": "中国",
    "type": "剧集",
    "genre": "家庭",
    "tags": [
      "留学",
      "父子",
      "文化冲突",
      "成长"
    ],
    "desc": "全职奶爸陪儿子去美国留学，结果自己被大学录取，儿子反而被退学了。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "茀兰德",
    "file": "movie-1940.html",
    "cover": "./140.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 文艺",
    "tags": [
      "身份认同",
      "孤岛",
      "种族",
      "哥特",
      "心理惊悚"
    ],
    "desc": "19世纪苏格兰孤岛上，最后一个说茀兰德语的女孩，突然被死去的族人“翻译”海鸟的警告。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "鲅鱼恋上猫",
    "file": "movie-1941.html",
    "cover": "./141.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻 / 爱情 / 喜剧",
    "tags": [
      "人鱼恋",
      "水产市场",
      "变形",
      "甜宠",
      "东北沿海"
    ],
    "desc": "水产市场女摊主捡到一条会说话、发誓要“做人”的鲅鱼，次日门口躺着一个银发帅哥。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "暴裂无声",
    "file": "movie-1942.html",
    "cover": "./142.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "矿工",
      "失语",
      "底层反抗"
    ],
    "desc": "哑巴矿工的儿子失踪了，他找遍全村，却发现所有“好人”都共用同一张冷漠脸。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "雪暴1814",
    "file": "movie-1943.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "挪威",
    "type": "电影",
    "genre": "灾难",
    "tags": [
      "历史",
      "自然",
      "求生"
    ],
    "desc": "根据真实历史事件改编，1814年挪威一场超级雪崩，将整个矿业小镇瞬间掩埋。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "甜蜜的事",
    "file": "movie-1944.html",
    "cover": "./144.jpg",
    "year": "2020",
    "region": "英国",
    "type": "电影",
    "genre": "剧情， 家庭",
    "tags": [
      "童年",
      "贫困",
      "父女",
      "成长"
    ],
    "desc": "一对小姐妹在母亲离开后，试图帮整日酗酒的父亲重新学会“如何快乐”。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "现代生活",
    "file": "movie-1945.html",
    "cover": "./145.jpg",
    "year": "2027",
    "region": "法国",
    "type": "剧集",
    "genre": "剧情 / 喜剧",
    "tags": [
      "都市群像",
      "黑色幽默",
      "碎片叙事"
    ],
    "desc": "一栋巴黎公寓内，十位租客的手机被意外投屏到大厅电视，所有人的秘密暴露于光天化日。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "凤临天下",
    "file": "movie-1946.html",
    "cover": "./146.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 权谋",
    "tags": [
      "女强",
      "宫斗",
      "复仇",
      "逆袭"
    ],
    "desc": "亡国公主女扮男装入朝为官，一路爬上权力巅峰，只为向篡位者讨回血债。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "席勒：死神与少女",
    "file": "movie-1947.html",
    "cover": "./147.jpg",
    "year": "2024",
    "region": "奥地利 / 德国",
    "type": "电影",
    "genre": "剧情 / 传记 / 艺术",
    "tags": [
      "传记",
      "艺术",
      "历史",
      "战争",
      "爱情"
    ],
    "desc": "一战前夕，席勒因“色情艺术”入狱，他的缪斯女神瓦莉在病痛与战争中等待他的归来。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "死亡男孩侦探社",
    "file": "movie-1948.html",
    "cover": "./148.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑、惊悚、喜剧",
    "tags": [
      "超自然",
      "校园",
      "少年侦探",
      "幽灵搭档"
    ],
    "desc": "两个被困在校园里的幽灵少年，专门替活人学生调查那些“不该存在”的秘密。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "恶魔的游乐场",
    "file": "movie-1949.html",
    "cover": "./149.jpg",
    "year": "2027",
    "region": "西班牙",
    "type": "电影",
    "genre": "恐怖, 悬疑, 奇幻",
    "tags": [
      "游乐园",
      "契约",
      "恶魔",
      "血腥",
      "密室"
    ],
    "desc": "六个陌生人醒来时发现自己被困在一座废弃游乐园里，每个游乐设施都是一场死亡游戏。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "伐木工人好意外",
    "file": "movie-1950.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "加拿大",
    "type": "电影",
    "genre": "荒诞喜剧",
    "tags": [
      "黑色幽默",
      "职场",
      "误会",
      "小人物"
    ],
    "desc": "老实巴交的伐木工锯倒一棵百年老树后，竟被全镇当成英雄——因为树里藏着一具通缉犯的骸骨。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "碧血长空争霸战",
    "file": "movie-1951.html",
    "cover": "./1.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争, 动作, 历史",
    "tags": [
      "空战",
      "抗日战争",
      "王牌飞行员",
      "家国情怀",
      "实拍"
    ],
    "desc": "1938年，一名被开除的中国飞行员与一名日本叛逃飞行员，不得不在坠机后共用一架废弃战机对抗敌机中队。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "舒加利3",
    "file": "movie-1952.html",
    "cover": "./2.jpg",
    "year": "2023",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争 / 剧情 / 传记",
    "tags": [
      "顿巴斯",
      "战地记者",
      "真相",
      "被困",
      "俄罗斯视角"
    ],
    "desc": "战地记者舒加利第三次深入顿巴斯前线，这次他不再只是记录，而是被迫举起武器保护平民撤离。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "好奇心",
    "file": "movie-1953.html",
    "cover": "./3.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 奇幻",
    "tags": [
      "人性实验",
      "单元剧",
      "哲学思考",
      "反转"
    ],
    "desc": "只要付出相应的代价，你的任何好奇心都能得到答案，包括死后的世界。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "尖叫旅社2",
    "file": "movie-1954.html",
    "cover": "./4.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画",
    "genre": "动画 / 恐怖 / 喜剧",
    "tags": [
      "都市传说",
      "旅馆",
      "恶搞",
      "妖怪"
    ],
    "desc": "一间专门接待都市传说的旅馆迎来开业，不料第一位客人“裂口女”竟是个社恐，还把旅馆差评网刷爆了。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "开膛手的复仇",
    "file": "movie-1955.html",
    "cover": "./5.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑惊悚",
    "tags": [
      "连环杀手",
      "历史改编",
      "女性复仇",
      "反转"
    ],
    "desc": "开膛手杰克的后代正在杀死所有当年污蔑受害者为妓女的记者后代，而凶手是一名法医。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "舞动青春",
    "file": "movie-1956.html",
    "cover": "./6.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "青春, 歌舞, 励志",
    "tags": [
      "街舞",
      "高中社团",
      "高考冲突",
      "热血"
    ],
    "desc": "县中学唯一街舞社，必须在高考前三个月拿出省级金奖，否则社团将被解散。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "赌霸粤语",
    "file": "movie-1957.html",
    "cover": "./7.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 喜剧",
    "tags": [
      "赌博",
      "港产片",
      "粤语原声",
      "女赌神"
    ],
    "desc": "澳门赌场扫地大妈其实是隐退的初代赌神，被逼重出江湖单挑东南亚赌王。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "草原上的人们",
    "file": "movie-1958.html",
    "cover": "./8.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 文艺",
    "tags": [
      "内蒙",
      "环保",
      "迁徙",
      "人与自然"
    ],
    "desc": "为了给孙女的哮喘治病，老牧民违抗命令偷偷将牛羊赶进了自然保护区。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "芝加哥警署第六季",
    "file": "movie-1959.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪, 剧情",
    "tags": [
      "单元剧",
      "警察",
      "灰色地带",
      "情报组"
    ],
    "desc": "情报组老大的秘密被黑客曝光，整个部门陷入内鬼疑云，连他们亲手抓的罪犯都开始嘲笑他们。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "血玉咒",
    "file": "movie-1960.html",
    "cover": "./10.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑， 惊悚， 古装",
    "tags": [
      "民国奇案",
      "盗墓",
      "诅咒"
    ],
    "desc": "一块能让人心想事成的血玉，让民国上海滩的三大豪门在24小时内接连上演灭门惨剧。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "我与塞尚",
    "file": "movie-1961.html",
    "cover": "./11.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 传记 / 爱情",
    "tags": [
      "艺术史",
      "虚拟恋爱",
      "AI复活"
    ],
    "desc": "孤独的现代艺术史女研究员，通过AI技术“复活”了保罗·塞尚，并与他展开一场跨越时空的精神恋爱。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "纪伯伦哈利勒：先知",
    "file": "movie-1962.html",
    "cover": "./12.jpg",
    "year": "2023",
    "region": "黎巴嫩",
    "type": "电影",
    "genre": "传记, 剧情, 文艺",
    "tags": [
      "文学巨匠",
      "流亡",
      "诗电影"
    ],
    "desc": "流亡纽约的纪伯伦用阿拉伯语写下了《先知》，但他的祖国正准备绞死他的所有著作。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "蛇鹤八步粤语",
    "file": "movie-1963.html",
    "cover": "./13.jpg",
    "year": "1978",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，武侠",
    "tags": [
      "刘家良",
      "邵氏",
      "硬桥硬马",
      "经典"
    ],
    "desc": "失传的蛇鹤八步秘籍重现江湖，八大门派围攻不会武功的传人，他却用菜刀应战。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "邻居们",
    "file": "movie-1964.html",
    "cover": "./14.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市家庭喜剧",
    "tags": [
      "邻里关系",
      "群像剧",
      "温暖治愈",
      "生活流",
      "笑中带泪"
    ],
    "desc": "一栋老居民楼加装电梯的投票，揭开了十二户邻居之间埋藏二十年的秘密和情谊。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "闪电十一人 猎户座的刻印",
    "file": "movie-1965.html",
    "cover": "./15.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "体育 / 热血 / 科幻",
    "tags": [
      "足球",
      "超能力",
      "外星文明",
      "少年热血",
      "团队羁绊"
    ],
    "desc": "当外星文明“猎户座”降临地球并禁止一切身体对抗运动时，一支中学生足球队用最原始的足球精神发起反击。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "清明上河图",
    "file": "movie-1966.html",
    "cover": "./16.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装，悬疑，历史",
    "tags": [
      "名画探案",
      "北宋风情",
      "群像",
      "文化悬疑"
    ],
    "desc": "一幅传世名画，隐藏着惊天秘密。北宋汴京城内，画师张择端一边作画，一边记录着一起牵扯朝堂内外的连环命案。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "爷爷的煤油灯",
    "file": "movie-1967.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 家庭, 历史",
    "tags": [
      "战后日本",
      "电灯普及",
      "祖孙情",
      "时代变迁"
    ],
    "desc": "孙子在拆迁老屋时找到一盏煤油灯，随着灯被点亮，他看见了爷爷与“电”对抗了一辈子的理由。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "时间规划局",
    "file": "movie-1968.html",
    "cover": "./18.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 悬疑",
    "tags": [
      "时间",
      "穿越",
      "执法",
      "悖论",
      "烧脑"
    ],
    "desc": "未来世界，时间犯罪横行，“时间规划局”特工专门抓捕从未来回来篡改历史的罪犯，但主角发现自己就是头号要犯。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "潮爆家族",
    "file": "movie-1969.html",
    "cover": "./19.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧/家庭",
    "tags": [
      "网红家庭",
      "代际冲突",
      "继承者",
      "搞笑"
    ],
    "desc": "一个靠拍搞笑短视频年入过亿的家庭，突然得知破产，必须全员搬回乡下阿嬷的老房子。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "title": "尖叫旅社：变形怪兽",
    "file": "movie-1970.html",
    "cover": "./20.jpg",
    "year": "2025",
    "region": "美国",
    "type": "动画",
    "genre": "喜剧、奇幻、家庭",
    "tags": [
      "怪物",
      "变形",
      "互换身体",
      "旅社"
    ],
    "desc": "德古拉搞砸了一个变形咒语，导致旅社里的怪物们全都互换了身体，而一只误入的人类小学生成了唯一能修复咒语的人。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "让我们堂堂正正结婚吧",
    "file": "movie-1971.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧 / 同性",
    "tags": [
      "职场",
      "形婚",
      "家庭",
      "爆笑"
    ],
    "desc": "一对男同性恋和一对女同性恋达成协议互相形婚，结果四人的父母同时搬进了同一栋楼。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "最后一班车",
    "file": "movie-1972.html",
    "cover": "./22.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 悬疑, 公路",
    "tags": [
      "深夜",
      "公车",
      "陌生人",
      "救赎",
      "对话"
    ],
    "desc": "凌晨的最后一班夜公交上，六个各怀心事的陌生人，将在一夜之间改变彼此的命运。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "我讨厌苏西第二季",
    "file": "movie-1973.html",
    "cover": "./23.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情 / 喜剧",
    "tags": [
      "女性困境",
      "媒体围剿",
      "黑色幽默"
    ],
    "desc": "裸照风波两年后，苏西以为一切回归正轨，直到手机里那段私人视频再次被泄露。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "高材生2019",
    "file": "movie-1974.html",
    "cover": "./24.jpg",
    "year": "2019",
    "region": "中国",
    "type": "电影",
    "genre": "剧情, 青春",
    "tags": [
      "高考",
      "学霸压力",
      "家庭期待",
      "自我和解"
    ],
    "desc": "全省第一的学霸在高考前三天突然失忆，只记得一个名字。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "极乐",
    "file": "movie-1975.html",
    "cover": "./25.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 惊悚, 动作",
    "tags": [
      "意识上传",
      "反乌托邦",
      "永生",
      "人体电池"
    ],
    "desc": "开发出“永生芯片”的CEO自杀身亡，上传的意识却在云端开始屠杀活人。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "抢劫风暴",
    "file": "movie-1976.html",
    "cover": "./26.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "犯罪 / 动作 / 惊悚",
    "tags": [
      "银行劫案",
      "实时叙事",
      "人质反转",
      "烧脑"
    ],
    "desc": "一场看似普通的银行抢劫案，在警方包围后发现劫匪根本不是为钱而来，他们的目标是现场某个人质。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "惊艳布鲁哲尔",
    "file": "movie-1977.html",
    "cover": "./27.jpg",
    "year": "2025",
    "region": "荷兰 / 比利时",
    "type": "电影",
    "genre": "剧情 / 艺术 / 悬疑",
    "tags": [
      "名画失窃",
      "艺术修复",
      "穿越时空",
      "暗黑童话"
    ],
    "desc": "一幅老彼得·勃鲁盖尔失传的画作在农舍被发现，而画中的人，似乎正对着现代人眨眼。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "人狗奇缘",
    "file": "movie-1978.html",
    "cover": "./28.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭, 冒险",
    "tags": [
      "导盲犬",
      "留守儿童",
      "治愈",
      "公路"
    ],
    "desc": "一个失明的留守儿童与一条退役的导盲犬，为了寻找在外打工的父母，结伴踏上千里之路。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "爱杀",
    "file": "movie-1979.html",
    "cover": "./29.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 悬疑, 犯罪",
    "tags": [
      "病娇偏执",
      "反PUA",
      "酒店奇案",
      "多重反转"
    ],
    "desc": "浪漫蜜月套房内发现两具尸体，监控显示他们除了疯狂做爱，什么都没做过。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "妈妈是杀手",
    "file": "movie-1980.html",
    "cover": "./30.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "动作, 喜剧, 家庭",
    "tags": [
      "反差萌",
      "杀手",
      "亲情",
      "搞笑"
    ],
    "desc": "家庭主妇真理子的秘密身份是顶级杀手，直到女儿的男朋友上门提亲那天。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "卧窗",
    "file": "movie-1981.html",
    "cover": "./31.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "tags": [
      "偷窥",
      "谋杀",
      "密室",
      "反转",
      "心理"
    ],
    "desc": "深夜，一名患有严重失眠症的男子透过卧室窗户目睹了一起谋杀，但警方到达时尸体却消失了。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "拉巴斯浮世绘",
    "file": "movie-1982.html",
    "cover": "./32.jpg",
    "year": "2021",
    "region": "玻利维亚, 西班牙",
    "type": "电影",
    "genre": "剧情, 喜剧",
    "tags": [
      "南美",
      "街头生活",
      "多线叙事",
      "女巫市场"
    ],
    "desc": "在玻利维亚拉巴斯街头，一个卖古柯叶的老太太、一名小丑和一位辞职的矿工，同时盯上了一只会说话的羊驼。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "德国之爱",
    "file": "movie-1983.html",
    "cover": "./33.jpg",
    "year": "2026",
    "region": "德国",
    "type": "剧集",
    "genre": "爱情",
    "tags": [
      "东西德",
      "禁忌之恋",
      "边境逃亡",
      "冷战罗曼史",
      "历史厚重"
    ],
    "desc": "1970年代，东德女翻译官爱上了西德来的男记者，两人在柏林墙两侧秘密相恋。",
    "category": "classic-new",
    "categoryName": "经典新片"
  },
  {
    "title": "了不起的巴斯克斯",
    "file": "movie-1984.html",
    "cover": "./34.jpg",
    "year": "2025",
    "region": "西班牙 / 阿根廷",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "多重人格",
      "黑帮",
      "反转"
    ],
    "desc": "一个患有分离性身份障碍的黑帮会计，用一个身体里的四个不同人格，将一个贩毒集团耍得团团转。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "暴民之地",
    "file": "movie-1985.html",
    "cover": "./35.jpg",
    "year": "2020",
    "region": "英国",
    "type": "电影",
    "genre": "剧情， 犯罪",
    "tags": [
      "小镇暴动",
      "矿工",
      "记者",
      "阶层对立"
    ],
    "desc": "一个矿工小镇因工厂关闭陷入暴动，一名外地记者被困其中，逐渐发现暴民背后有人操控。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "飞行夜女巫",
    "file": "movie-1986.html",
    "cover": "./36.jpg",
    "year": "2021",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争 / 历史 / 剧情",
    "tags": [
      "女飞行员",
      "二战",
      "真实事件",
      "苏德战场"
    ],
    "desc": "二战中，一群年轻苏联女兵驾驶着木制夜间轰炸机，被德军称为“夜间女巫”。",
    "category": "love-drama",
    "categoryName": "爱情剧情"
  },
  {
    "title": "鬼天师",
    "file": "movie-1987.html",
    "cover": "./37.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖，喜剧",
    "tags": [
      "僵尸",
      "道士",
      "斗法",
      "港式幽默"
    ],
    "desc": "半吊子天师意外放出被封印的鬼王，只能用搞笑道术和一把糯米拯救街坊。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "钱作怪",
    "file": "movie-1988.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 犯罪",
    "tags": [
      "黑色幽默",
      "小人物翻身",
      "假钞风暴",
      "港式荒诞"
    ],
    "desc": "印刷厂工人误印出一张错版千元港币，一夜之间，全城黑帮都以为他是印钞天才。",
    "category": "action-crime",
    "categoryName": "动作犯罪"
  },
  {
    "title": "私密背叛",
    "file": "movie-1989.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑, 惊悚, 剧情",
    "tags": [
      "婚姻危机",
      "心理博弈",
      "反转"
    ],
    "desc": "妻子手机里发现陌生男人的吻照，丈夫追查后发现“第三者”根本不存在。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "一飞冲天",
    "file": "movie-1990.html",
    "cover": "./40.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "冒险 / 家庭",
    "tags": [
      "航空",
      "梦想",
      "父子",
      "热血"
    ],
    "desc": "一位落魄的前宇航员，带着他患有恐高症的天才儿子，用一堆废铜烂铁自制火箭，立志赢得国际青少年航模大赛。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "恐怖人生",
    "file": "movie-1991.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 剧情",
    "tags": [
      "心理恐怖",
      "都市传说",
      "因果报应"
    ],
    "desc": "一个靠偷拍他人隐私为生的无良记者，发现自己正在逐步变成镜头里那些受害者的模样。",
    "category": "suspense-thriller",
    "categoryName": "悬疑惊悚"
  },
  {
    "title": "盾之勇者成名录第三季",
    "file": "movie-1992.html",
    "cover": "./42.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "动画/奇幻/冒险",
    "tags": [
      "异世界",
      "黑化",
      "成长",
      "团队"
    ],
    "desc": "被国家背叛的盾之勇者尚文，在第三季中终于拥有了反击的力量，却发现新的敌人来自他的故乡异世界。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "动态漫画·伏天圣主",
    "file": "movie-1993.html",
    "cover": "./43.jpg",
    "year": "2020",
    "region": "中国",
    "type": "剧集",
    "genre": "动作 / 奇幻 / 修仙",
    "tags": [
      "动态漫画",
      "重生",
      "龙傲天",
      "东方玄幻",
      "逆袭"
    ],
    "desc": "上古圣主陨落，百年后重生为废柴少年，誓要重登九重天。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "出场的拉扎罗",
    "file": "movie-1994.html",
    "cover": "./44.jpg",
    "year": "2026",
    "region": "意大利",
    "type": "电影",
    "genre": "魔幻现实主义",
    "tags": [
      "诗意",
      "淳朴",
      "时间跳跃",
      "圣人"
    ],
    "desc": "一个心如水晶的单纯农民拉扎罗，在一场意外后穿越数十年时空，用不变的善良映照出世界的丑陋与美好。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  },
  {
    "title": "乐高大电影2",
    "file": "movie-1995.html",
    "cover": "./45.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "动画, 喜剧, 冒险",
    "tags": [
      "积木世界",
      "流行文化梗",
      "自我认同"
    ],
    "desc": "艾米特以为自己是拯救世界的英雄，其实他只是别人家地板上的一块被玩腻的积木。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "艾拉‧辛德斯",
    "file": "movie-1996.html",
    "cover": "./46.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "犯罪剧情",
    "tags": [
      "女杀手",
      "伦敦",
      "阶层跨越",
      "自我认同",
      "冷峻"
    ],
    "desc": "伦敦东区最顶级的清洁工（职业清道夫），表面上是个不起眼的中年妇女，实际上却是帮黑帮处理尸体的顶级专家。",
    "category": "hot-movie",
    "categoryName": "热播电影"
  },
  {
    "title": "反智特务",
    "file": "movie-1997.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧， 动作， 谍战",
    "tags": [
      "黑色幽默",
      "反转",
      "废柴特工",
      "办公室政治"
    ],
    "desc": "中央情报局最顶尖的特工意外失忆，醒来后坚信自己是个平平无奇的办公室文员。",
    "category": "hd-subtitle",
    "categoryName": "高清中字"
  },
  {
    "title": "青年医生",
    "file": "movie-1998.html",
    "cover": "./48.jpg",
    "year": "2026",
    "region": "中国",
    "type": "剧集",
    "genre": "职场 / 剧情 / 医疗",
    "tags": [
      "现实主义",
      "新人成长",
      "医患关系"
    ],
    "desc": "七个医学院毕业生进入全国最好的三甲医院，第一年没人教他们怎么救人，只教他们怎么写病历和躲投诉。",
    "category": "global-series",
    "categoryName": "海外剧集"
  },
  {
    "title": "劲道猪头肉",
    "file": "movie-1999.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情，喜剧",
    "tags": [
      "美食",
      "父子",
      "传承",
      "小人物"
    ],
    "desc": "一个只想当网红的前厨子被迫回家接手即将倒闭的卤肉店，却意外发现爷爷的卤汁配方里藏着一个秘密。",
    "category": "comedy-family",
    "categoryName": "喜剧家庭"
  },
  {
    "title": "鬼屋奇谭",
    "file": "movie-2000.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖, 悬疑, 超自然",
    "tags": [
      "鬼屋",
      "家族诅咒",
      "灵异调查"
    ],
    "desc": "灵异调查组住进英国最凶鬼屋，却发现屋子本身有意识，正在吞噬他们的恐惧。",
    "category": "europe-america",
    "categoryName": "欧美精选"
  }
];
