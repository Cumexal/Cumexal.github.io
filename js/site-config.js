/**
 * 博客全局配置中心
 * 可以在此集中修改所有文案、图片及关键交互参数
 */

const SiteConfig = {
    // 基础信息区
    hero: {
        title: "\r\nSYSYTEM", // 首页标题
        subtitle: "打破常规，重构逻辑", // 首页副标题
        background: "/images/banner.jpg" // 首页背景图
    },

    // 导航区
    nav: {
        links: [
            { name: "文档", url: "/archives/" },
            { name: "友链", url: "/links/" },
            { name: "关于", url: "/about/" }
        ]
    },

    // 创意风格配置区
    style: {
        primaryColor: "#FF3E00", // 大胆色彩
        accentColor: "#00E5FF",  // 创意点缀
        animationSpeed: "0.8s"   // 动画持续时间
    },

    // 友链展示
    links: [
        { 
            name: "林克", 
            url: "https://github.com", 
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix", 
            desc: "探索代码宇宙的边界",
            tags: ["前端", "设计", "全栈"]
        },
        { 
            name: "Zelda", 
            url: "https://stackoverflow.com", 
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zelda", 
            desc: "硬件极客，寻找真理",
            tags: ["硬件", "IoT", "嵌入式"]
        },
        { 
            name: "Sam", 
            url: "https://twitter.com", 
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam", 
            desc: "记录数字碎片与日常",
            tags: ["UI/UX", "摄影"]
        }
    ]
};

// 如果在浏览器环境使用，将其挂载到全局
if (typeof window !== 'undefined') {
    window.SiteConfig = SiteConfig;
}

// 如果在 Node 环境使用 (Hexo 生成时)，导出它
if (typeof module !== 'undefined') {
    module.exports = SiteConfig;
}
