/**
 * ============================================
 *  CUMEXAL 博客 · 全局配置中心
 * ============================================
 *
 *  修改此文件即可更新整个博客的展示内容。
 *  所有对外展示的文案、图片、链接、文件引用都在这里配置。
 *
 *  使用方式：
 *  - 浏览器中通过 window.SiteConfig 访问
 *  - page 模板中直接使用 SiteConfig 变量
 *
 *  每一项都配有中文注释，按需修改即可。
 * ============================================
 */

const SiteConfig = {

    // ==========================================
    //  1. 站点基础信息
    // ==========================================
    site: {
        title: "C U M E X A L",              // 浏览器标签页标题
        brand: "C U M E X A L",              // 导航栏左上角品牌名
        description: "打破常规，重构逻辑", // 站点描述（SEO用）
    },

    // ==========================================
    //  2. 首页大标题 (Hero 区域)
    // ==========================================
    hero: {
        title: "CODE<br><span class=\"text-transparent\" style=\"-webkit-text-stroke: 2px var(--primary);\">LOGIC</span>",
        subtitle: "打破常规，重构逻辑",     // 副标题（彩色小字）
        bgTitle: "CMXL",             // 背景衬底大字（很大很淡的那个）
    },

    // ==========================================
    //  3. 头像配置
    //    PC端显示在右上角，移动端自动适配
    // ==========================================
    avatar: {
        image: "/images/CUMEXAL.jpg",     // 头像图片路径
        borderColor: "var(--accent)",     // 边框颜色
        size: 36,                         // PC端尺寸(px) 36 = 9rem = 144px
    },

    // ==========================================
    //  4. 导航栏
    // ==========================================
    nav: {
        links: [
            // 格式：{ name: "显示名称", url: "跳转链接" }
            { name: "文档", url: "/archives/" },
            { name: "友链", url: "/links/" },
            { name: "关于", url: "/about/" },
        ],
    },

    // ==========================================
    //  5. 首页 · 技术栈展示 (左下碎片块)
    // ==========================================
    techStack: {
        title: "// TECH_STACK",   // 区块标题
        items: [                  // 列表项 —— 每项一行
            "嵌入式",
            "硬件",
            "物联网",
            "计算机",
        ],
    },

    // ==========================================
    //  6. 首页 · 最新日志 (右下碎片块)
    //     自动绑定最新文档，无需手动配置
    //     如果需要覆盖，可取消注释下面的配置
    // ==========================================
    // latestLog: {
    //     title: "Latest<br>Log_",
    //     content: "智能球门",
    //     link: "/archives/",
    // },

    // ==========================================
    //  7. 文档 / 归档页卡片
    //     自动扫描 source/docs/ 下的所有文档生成卡片，
    //     无需手动配置。下方数组保留为兜底数据，
    //     当 docs 文件夹为空时才会使用。
    // ==========================================

    // 归档页背景衬底大字
    documentsBgTitle: "ARCHIVES",

    // documents: [
    //     {
    //         title: "足球无人机积分系统",                            // 卡片标题
    //         description: "现代网页设计正在抛弃死板的网格，转向更加自由、充满动感的碎片化风格...", // 卡片摘要
    //         date: "2026-05-12",                                           // 日期（显示在卡片上）
    //         tags: ["设计", "UI/UX", "CSS"],                               // 标签列表
    //         link: "/docs/football-drone/",                // 点击卡片跳转链接
    //         coverImage: "",                                               // 可选：封面图 URL（留空则不显示）
    //     },
    //     {
    //         title: "探索硬件开发的边界：ESP-IDF 与 STM32",
    //         description: "在物联网快速发展的今天，如何优雅地驱动硬件成了一个关键问题。本文将带你深入探索 ESP-IDF 的底层架构，并对比 STM32 的传统开发模式，寻找最高效的代码逻辑。",
    //         date: "2026-05-11",
    //         tags: ["硬件", "嵌入式", "C语言"],
    //         link: "/2026/05/09/hardware-exploration/",
    //         coverImage: "",
    //     },
    //     {
    //         title: "测试文章 1",
    //         description: "这是一个测试文档...",
    //         date: "2026-05-10",
    //         tags: ["测试"],
    //         link: "/2026/05/09/test-post-1/",
    //         coverImage: "",
    //     },
    //     {
    //         title: "测试文章 2",
    //         description: "这是另一个测试文档...",
    //         date: "2026-05-09",
    //         tags: ["测试"],
    //         link: "/2026/05/09/test-post-2/",
    //         coverImage: "",
    //     },
    //     {
    //         title: "测试文章 3",
    //         description: "这是第三个测试文档...",
    //         date: "2026-05-08",
    //         tags: ["测试"],
    //         link: "/2026/05/09/test-post-3/",
    //         coverImage: "",
    //     },
    // ],

    // ==========================================
    //  8. 友链展示页
    //    ─────────────────────────────
    //    每项渲染为一张横躺的友链卡片
    // ==========================================

    // 友链页背景衬底大字
    linksBgTitle: "FRIENDS",

    links: [
        {
            name: "OceanMonkeyScience",
            url: "https://ocean-monkey.github.io",
            avatar: "/images/OceanMonkeyScience.png",
            desc: "海猴科技",
            tags: ["科研", "开发" , "团队"],
        },
        {
            name: "dokidoki",                                                       // 显示名称
            url: "https://dokiuu.github.io",                                          // 点击跳转链接
            avatar: "/images/dokiuu.jpg",   // 头像图片 URL
            desc: "探索代码宇宙的边界",                                          // 描述文字
            tags: ["算法", "C++", "人工智能"],                                     // 标签列表
        },
        {
            name: "qerhaps",
            url: "https://github.com/qerhaps",
            avatar: "/images/qerhaps.jpg",
            desc: "明天开始努力",
            tags: ["电子", "废物", "海大"],
        },
    ],

    // ==========================================
    //  9. 创意风格配置
    //    修改颜色可以改变整个站点的视觉风格
    // ==========================================
    style: {
        primaryColor: "#FF3E00",    // 主色（当前为橙红色）
        accentColor: "#00E5FF",    // 强调色（当前为青蓝色）
        animationSpeed: "0.8s",   // 全局动画持续时间
    },

    // ==========================================
    //  10. 关于页面
    //      ─────────────────────────────
    //      页面所有文案都在这里配置
    // ==========================================
    about: {
        // 是否启用关于页面
        enabled: true,

        // 页面标题
        title: "About_",

        // 背景衬底大字（很大很淡的那个）
        bgTitle: "ABOUT",

        // 站点启用日期（用于自动计算已运行天数）
        startDate: "2026-05-09",

        // 个人资料
        profile: {
            avatar: "/images/CUMEXAL.jpg",   // 头像图片路径
            name: "CUMEXAL",                  // 显示名称
            description: "打破常规，重构逻辑", // 个人简介（支持 HTML）
        },

        // 统计卡片（数值由 Hexo 构建时自动计算 & localStorage 统计）
        stats: {
            runtime: { label: "运行天数" },   // 已运行时间
            visits:  { label: "访问次数" },   // 访问次数
            words:   { label: "本站字数" },   // 总字数
            articles:{ label: "文章数量" },   // 文章数量
        },

        // 外链按钮（可随意增删）
        links: [
            {
                name: "GitHub",
                url: "https://github.com/CUMEXAL",
                icon: "github",          // 内置图标: github | mail | twitter | globe
                color: "#fff",
            },
            {
                name: "Oshwhub",
                url: "https://oshwhub.com/cmxl/works",
                icon: "/images/oshwhub.svg",          // 自定义图标
                color: "#fff",
            },
            {
                name: "Bilibili",
                url: "https://space.bilibili.com/509574917",
                icon: "/images/bilibili.svg",          // 自定义图标
                color: "#fff",
            },
        ],
    },

    // ==========================================
    //  11. 首页通知弹窗
    //      第一次加载页面时居中弹窗
    //      enabled: false 即可关闭
    // ==========================================
    popup: {
        enabled: false,                       // true = 显示, false = 关闭
        themeColor: "#FF69B4",               // 主题色（粉色）
        bgGradient: "linear-gradient(145deg, #1a0a12 0%, #2d0f1f 40%, #1a0a12 100%)", // 卡片背景渐变
        glowColor: "rgba(255,105,180,0.4)", // 发光色
        title: "🌸 母亲节快乐 🌸",           // 弹窗标题（支持 emoji）
        message: [
            "愿时光对您温柔以待",
            "愿岁月让您笑靥如花",
        ],
        signature: "—— 楚",
    },
};

// 浏览器环境挂载到全局
if (typeof window !== 'undefined') {
    window.SiteConfig = SiteConfig;
}

// Node 环境导出 (Hexo 构建时使用)
if (typeof module !== 'undefined') {
    module.exports = SiteConfig;
}
