

export interface OutfitRecommendation {
  id: string;
  items: string;
  materials: string;
  colors: string;
  budget: string;
  reason: string;
  image?: string;
}

export interface KnobCategory {
  title: string;
  description: string;
  scenarios: {
    title: string;
    description: string;
    outfits: OutfitRecommendation[];
  }[];
}

export interface DetailedGuide {
  knobs: KnobCategory[];
}

export interface PatternData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  colorTheme: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
  tags: string[];
  illustration: string; // Placeholder for image URL
  mechanism: {
    title: string;
    points: {
      label: string;
      desc: string;
    }[];
    dataGraph?: {
      label: string;
      value: string;
    };
  };
  outfitExample: {
    items: string[];
    materials: string;
    colors: string;
  };
  detailedGuide?: DetailedGuide;
}

export const patterns: PatternData[] = [
  {
    id: "athflow",
    title: "Athflow",
    subtitle: "舒适护盾 / Comfort Shield",
    description: "运动休闲与正装元素的混搭，强调面料舒适、亲肤和能缓解情绪的“安慰毯”功能。",
    colorTheme: {
      primary: "#E0E4E8", // Light Gray
      secondary: "#8C9BA5", // Indigo
      accent: "#C4A484", // Camel
      bg: "bg-slate-100",
    },
    tags: ["低刺激材质", "情绪缓和", "跨场景适配"],
    illustration: "/images/athflow/mood-calm.jpg",
    mechanism: {
      title: "情绪修复机制",
      points: [
        { label: "触觉疗愈", desc: "羊毛、针织等软糯材质降低身体警觉，减少皮质醇分泌。" },
        { label: "色彩心理", desc: "灰、黑、深蓝等低调色调提供安全感，避免过度兴奋。" },
        { label: "场景流动", desc: "适应居家办公与临时外出的无缝切换，减少决策焦虑。" }
      ],
      dataGraph: {
        label: "焦虑降低",
        value: "30%"
      }
    },
    outfitExample: {
      items: ["羊毛针织衫", "灰色休闲裤", "卡其色宽松风衣", "米色运动鞋"],
      materials: "羊毛混纺, 棉质混纺",
      colors: "卡其 / 灰 / 米"
    },
    detailedGuide: {
      knobs: [
        {
          title: "情绪旋钮",
          description: "根据不同情绪场景给出穿搭示例，每套含单品清单、材质、配色和预算，并说明搭配亮点。",
          scenarios: [
            {
              title: "忧郁/低落",
              description: "心情低落时，选择柔软、包裹感强的单品来安慰自己。配色以灰、驼、深蓝等沉稳色为主。",
              outfits: [
                {
                  id: "mood-low-1",
                  items: "深蓝羊毛衫, 灰色直筒休闲裤, 卡其色宽松风衣, 米色运动鞋, 黑色单肩包, 银色细项链",
                  materials: "羊毛/棉/涤纶混纺",
                  colors: "卡其/灰/深蓝",
                  budget: "中（800）",
                  reason: "羊毛衫和风衣提供温暖包裹感，银色项链作为金属点缀提升精致度。",
                  image: "/images/athflow/mood-low.jpg"
                },
                {
                  id: "mood-low-2",
                  items: "灰色抓绒卫衣, 黑色运动裤, 深蓝羽绒服, 黑色雪地靴, 灰色双肩背包, 驼色针织帽",
                  materials: "抓绒/棉/羽绒",
                  colors: "黑/灰/深蓝",
                  budget: "高（>2000）",
                  reason: "抓绒与羽绒提供极致保暖与安全感，适合极度需要被包裹的时刻。"
                },
                {
                  id: "mood-low-3",
                  items: "米白宽松针织衫, 驼色阔腿裤, 黑色中长棉服, 棕色高帮帆布鞋, 灰色托特包, 金色手链",
                  materials: "针织/棉/尼龙",
                  colors: "驼/米白/黑",
                  budget: "高（>2000）",
                  reason: "宽松针织与阔腿裤减少束缚感，大地色系带来视觉温暖。"
                }
              ]
            },
            {
              title: "平静/安逸",
              description: "平和心境下，选择清新浅色和舒适剪裁的搭配。面料以棉、亚麻、轻薄针织为主。",
              outfits: [
                {
                  id: "mood-calm-1",
                  items: "米色宽松针织衫, 白色九分裤, 浅灰西装外套, 米白板鞋, 棕色托特包, 珍珠耳钉",
                  materials: "羊毛混纺/棉",
                  colors: "米色/灰色/白",
                  budget: "中（800）",
                  reason: "灰白配色清新简约，珍珠耳钉增添一丝优雅。",
                  image: "/images/athflow/mood-calm.jpg"
                },
                {
                  id: "mood-calm-2",
                  items: "浅蓝圆领T恤, 深灰休闲裤, 白色针织开衫, 灰色运动鞋, 灰蓝腰包, 银色项链",
                  materials: "棉/棉/针织",
                  colors: "浅蓝/灰",
                  budget: "低（<500）",
                  reason: "蓝白灰的冷色调组合，视觉降温，维持内心平静。"
                }
              ]
            },
            {
              title: "轻松/愉悦",
              description: "心情愉悦时，可大胆加入亮色或趣味单品。在Athflow舒适基底上，选用彩色上衣或印花元素。",
              outfits: [
                {
                  id: "mood-happy-1",
                  items: "亮黄卫衣, 深蓝牛仔裤, 浅灰针织开衫, 白色板鞋, 藏蓝双肩包, 红色格纹围巾",
                  materials: "棉/牛仔/针织",
                  colors: "黄/蓝/红",
                  budget: "低（<500）",
                  reason: "亮黄与红色围巾形成活力撞色，表达愉悦心情。",
                  image: "/images/athflow/mood-happy.jpg"
                },
                {
                  id: "mood-happy-2",
                  items: "红色条纹T恤, 黑色休闲裤, 军绿色机能夹克, 黑色运动鞋, 黑色腰包, 金属项链",
                  materials: "棉/棉/尼龙",
                  colors: "红/绿/黑",
                  budget: "中（1200）",
                  reason: "红绿对比色与机能风混搭，充满动感与个性。"
                }
              ]
            }
          ]
        },
        {
          title: "职业旋钮",
          description: "不同职业场合对穿着正式度有不同要求，但统一在Athflow/Sadwear基调下体现舒适与专业。",
          scenarios: [
            {
              title: "正式职场",
              description: "职场场合需得体专业，但可在舒适底色中增添正式元素。选择合身西装外套、修身裤装等单品。",
              outfits: [
                {
                  id: "career-formal-1",
                  items: "白衬衫, 深灰西装裤, 黑色西装外套, 黑色皮鞋, 黑色公文包, 银色手表",
                  materials: "棉/羊毛混纺",
                  colors: "黑/灰/白",
                  budget: "中（1500）",
                  reason: "传统黑白灰搭配稳重内敛，舒适材质的西装外套使得Athflow混搭更自然。",
                  image: "/images/athflow/career-formal.jpg"
                },
                {
                  id: "career-formal-2",
                  items: "浅蓝针织衫, 黑色直筒休闲裤, 藏蓝大衣, 黑色乐福鞋, 棕色托特包, 领带/丝巾",
                  materials: "羊毛/棉混/皮革",
                  colors: "蓝/黑/棕",
                  budget: "中（1200）",
                  reason: "针织衫替代衬衫，保留正式感的同时增加亲和力与舒适度。"
                }
              ]
            },
            {
              title: "创意行业",
              description: "创意/设计等行业允许更灵活的穿搭。基本保持极简中性色调，可大胆添加个性单品。",
              outfits: [
                {
                  id: "career-creative-1",
                  items: "牛仔衬衫, 黑色束脚裤, 灰色皮夹克, 白色运动鞋, 黑色斜跨包, 金属项链",
                  materials: "牛仔/皮革/棉",
                  colors: "牛仔蓝/黑",
                  budget: "低（<500）",
                  reason: "皮夹克与束脚裤的混搭，展现创意行业的自由与不羁。",
                  image: "/images/athflow/career-creative.jpg"
                },
                {
                  id: "career-creative-2",
                  items: "白色长款T恤, 卡其宽松裤, 深蓝针织大衣, 灰色运动鞋, 亮黄单肩包, 棒球帽",
                  materials: "棉/混纺",
                  colors: "白/卡其/黄",
                  budget: "中（1000）",
                  reason: "亮黄包作为点缀在中性色中突出创意个性，棒球帽增加街头感。"
                }
              ]
            }
          ]
        },
        {
          title: "城市场景",
          description: "不同城市类型对穿衣舒适度和风格氛围有不同要求。",
          scenarios: [
            {
              title: "寒冷城市",
              description: "严寒环境下注重保暖性和层次感。主要使用羊毛大衣、羽绒服、加绒卫衣等厚实单品。",
              outfits: [
                {
                  id: "city-cold-1",
                  items: "黑色抓绒卫衣, 灰色羊毛直筒裤, 军绿色羽绒服, 黑色雪地靴, 黑色双肩包, 灰色毛线围巾",
                  materials: "棉/羊毛/羽绒",
                  colors: "军绿/黑/灰",
                  budget: "高（>2000）",
                  reason: "多层叠穿与羽绒服确保在寒冷中依然保持温暖与行动自如。",
                  image: "/images/athflow/city-cold.jpg"
                }
              ]
            },
            {
              title: "温暖城市",
              description: "暖冬城市气温适中，多选轻薄外套或针织衫。配色可以更明亮。",
              outfits: [
                {
                  id: "city-warm-1",
                  items: "白色亚麻衬衫, 浅卡其休闲裤, 淡粉色针织开衫, 米白帆布鞋, 棕色挎包, 浅蓝丝巾",
                  materials: "亚麻/棉",
                  colors: "白/卡其/粉",
                  budget: "低（<500）",
                  reason: "亚麻与浅色系组合，透气清爽，适应温暖气候。",
                  image: "/images/athflow/city-warm.jpg"
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "minimalist",
    title: "Minimalist",
    subtitle: "边界重建 / Boundary Reconstruction",
    description: "追求简洁干练的剪裁和柔和中性色，通过去性化剪裁和结构美学建立职业与个人的边界。",
    colorTheme: {
      primary: "#F5F5F5", // Off-white
      secondary: "#333333", // Black
      accent: "#666666", // Dark Gray
      bg: "bg-stone-50",
    },
    tags: ["去性化剪裁", "边界加固", "结构美学"],
    illustration: "https://picsum.photos/seed/minimalist/400/600",
    mechanism: {
      title: "边界加固逻辑",
      points: [
        { label: "Less is More", desc: "摒弃繁复图案，通过利落线条构建心理防御。" },
        { label: "中性力量", desc: "模糊性别特征，强调专业性与独立性。" },
        { label: "克制点缀", desc: "小面积金属配饰（如银色细表）提升秩序感。" }
      ],
      dataGraph: {
        label: "专注度提升",
        value: "45%"
      }
    },
    outfitExample: {
      items: ["白色衬衫", "深蓝西装直筒裤", "灰色西装外套", "黑色皮鞋"],
      materials: "棉, 羊毛混纺",
      colors: "白 / 深蓝 / 灰"
    }
  },
  {
    id: "y2k",
    title: "Y2K / Creative",
    subtitle: "自我重启 / Self-Restart",
    description: "高饱和色与趣味元素的碰撞，通过视觉冲击打破沉闷，实现情绪的瞬间激活与重启。",
    colorTheme: {
      primary: "#FFFFFF", // White
      secondary: "#FF69B4", // Hot Pink
      accent: "#00FF00", // Neon Green
      bg: "bg-white",
    },
    tags: ["高饱和色", "反羞耻", "场景管理"],
    illustration: "https://picsum.photos/seed/y2k/400/600",
    mechanism: {
      title: "多巴胺激活",
      points: [
        { label: "视觉冲击", desc: "亮色（如亮黄、薄荷绿）刺激多巴胺分泌，提振心情。" },
        { label: "自我表达", desc: "印花、露肤剪裁打破常规，释放压抑情绪。" },
        { label: "局部点亮", desc: "在基础色中加入亮色配饰（如彩色围巾），平衡得体与个性。" }
      ],
      dataGraph: {
        label: "活力指数",
        value: "85%"
      }
    },
    outfitExample: {
      items: ["彩色印花T恤", "黑色宽松休闲裤", "黑色皮夹克", "白色高帮帆布鞋"],
      materials: "棉, 真皮",
      colors: "彩 / 黑 / 白"
    }
  }
];

