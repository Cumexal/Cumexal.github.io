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
        title: "CUMEXAL",              // 浏览器标签页标题
        brand: "CUMEXAL",              // 导航栏左上角品牌名
        description: "打破常规，重构逻辑", // 站点描述（SEO用）
    },

    // ==========================================
    //  2. 首页大标题 (Hero 区域)
    // ==========================================
    hero: {
        // 大标题 —— 支持 HTML 标签，<br> 可换行
        title: "CODE<br><span class=\"text-transparent\" style=\"-webkit-text-stroke: 2px var(--primary);\">LOGIC</span>",
        subtitle: "打破常规，重构逻辑",                      // 副标题（彩色小字）
        bgTitle: "FRAGMENT",                               // 背景衬底大字（很大很淡的那个）
    },

    // ==========================================
    //  3. 导航栏
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
    //  4. 首页 · 技术栈展示 (左下碎片块)
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
    //  5. 首页 · 最新日志 (右下碎片块)
    // ==========================================
    latestLog: {
        title: "Latest<br>Log_",  // 区块标题（支持 HTML）
        content: "智能球门",       // 日志内容文字
        link: "/archives/",       // 点击整块跳转的链接
    },

    // ==========================================
    //  6. 文档 / 归档页卡片
    //    ─────────────────────────────
    //    这里的每条数据会渲染成一张卡片，
    //    title / description / date / tags / link 都可在下方配置。
    //
    //    注意：
    //    - 如果此数组为空或不存在，则自动回退使用 Hexo 文章列表
    //    - link 可以指向站内文章，也可以指向外部链接
    // ==========================================
    documents: [
        {
            title: "数字碎片：设计者的自我重构",                            // 卡片标题
            description: "现代网页设计正在抛弃死板的网格，转向更加自由、充满动感的碎片化风格...", // 卡片摘要
            date: "2026-05-12",                                           // 日期（显示在卡片上）
            tags: ["设计", "UI/UX", "CSS"],                               // 标签列表
            link: "/2026/05/09/digital-fragments-design/",                // 点击卡片跳转链接
            coverImage: "",                                               // 可选：封面图 URL（留空则不显示）
        },
        {
            title: "探索硬件开发的边界：ESP-IDF 与 STM32",
            description: "在物联网快速发展的今天，如何优雅地驱动硬件成了一个关键问题。本文将带你深入探索 ESP-IDF 的底层架构，并对比 STM32 的传统开发模式，寻找最高效的代码逻辑。",
            date: "2026-05-11",
            tags: ["硬件", "嵌入式", "C语言"],
            link: "/2026/05/09/hardware-exploration/",
            coverImage: "",
        },
        {
            title: "测试文章 1",
            description: "这是一个测试文档...",
            date: "2026-05-10",
            tags: ["测试"],
            link: "/2026/05/09/test-post-1/",
            coverImage: "",
        },
        {
            title: "测试文章 2",
            description: "这是另一个测试文档...",
            date: "2026-05-09",
            tags: ["测试"],
            link: "/2026/05/09/test-post-2/",
            coverImage: "",
        },
        {
            title: "测试文章 3",
            description: "这是第三个测试文档...",
            date: "2026-05-08",
            tags: ["测试"],
            link: "/2026/05/09/test-post-3/",
            coverImage: "",
        },
    ],

    // ==========================================
    //  7. 友链展示页
    //    ─────────────────────────────
    //    每项渲染为一张横躺的友链卡片
    // ==========================================
    links: [
        {
            name: "林克",                                                       // 显示名称
            url: "https://github.com",                                          // 点击跳转链接
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",   // 头像图片 URL
            desc: "探索代码宇宙的边界",                                          // 描述文字
            tags: ["前端", "设计", "全栈"],                                     // 标签列表
        },
        {
            name: "Zelda",
            url: "https://stackoverflow.com",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zelda",
            desc: "硬件极客，寻找真理",
            tags: ["硬件", "IoT", "嵌入式"],
        },
        {
            name: "Sam",
            url: "https://twitter.com",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam",
            desc: "记录数字碎片与日常",
            tags: ["UI/UX", "摄影"],
        },
    ],

    // ==========================================
    //  8. 创意风格配置
    //    修改颜色可以改变整个站点的视觉风格
    // ==========================================
    style: {
        primaryColor: "#FF3E00",    // 主色（当前为橙红色）
        accentColor: "#00E5FF",    // 强调色（当前为青蓝色）
        animationSpeed: "0.8s",   // 全局动画持续时间
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
