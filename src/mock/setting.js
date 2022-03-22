import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://pic4.zhimg.com/v2-c0146a87c5108c58564fa5f85d8ffebb_b.jpg",
        siteTitle: "Taylor Swift",
        github: "https://github.com/JunjieChu",
        qq: "1195416601",
        qqQrCode: "https://pic4.zhimg.com/v2-c0146a87c5108c58564fa5f85d8ffebb_b.jpg",
        weixin: "ACHU",
        weixinQrCode: "https://pic4.zhimg.com/v2-c0146a87c5108c58564fa5f85d8ffebb_b.jpg",
        mail: "const.junjiechu@gmial.com",
        icp: "黑ICP备17001719号",
        githubName: "JunjieChu",
        favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
    },
});