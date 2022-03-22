import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
    code: 0,
    msg: "",
    data: [{
            id: "2",
            midImg: "https://pic2.zhimg.com/v2-6e00704f7d7f424bbe6db463b180ebf7_r.jpg?source=172ae18b",
            bigImg: "https://pic2.zhimg.com/v2-6e00704f7d7f424bbe6db463b180ebf7_r.jpg?source=172ae18b",
            title: "FOLKLORE",
            description: "Reconcile with yourself",
        },
        {
            id: "1",
            midImg: "https://pic4.zhimg.com/v2-8d582f719682562e52d462517485a877_r.jpg?source=172ae18b",
            bigImg: "https://pic4.zhimg.com/v2-8d582f719682562e52d462517485a877_r.jpg?source=172ae18b",
            title: "LOVE",
            description: "Even if it's a paper ring, I'll marry you",
        },
        {
            id: "3",
            midImg: "https://tse1-mm.cn.bing.net/th/id/R-C.af06a6eff136fb19808213ec98504a33?rik=aMcR6SxU5GBb3w&riu=http%3a%2f%2fi2.hdslb.com%2fbfs%2farchive%2f22a2cf89a630dd29db223c42ac894dd2d161e534.jpg&ehk=7VNdUVgnYmoiGGK8n049YOeZpTYWS%2b0Le4XZ5kQj8AA%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
            bigImg: "https://tse1-mm.cn.bing.net/th/id/R-C.af06a6eff136fb19808213ec98504a33?rik=aMcR6SxU5GBb3w&riu=http%3a%2f%2fi2.hdslb.com%2fbfs%2farchive%2f22a2cf89a630dd29db223c42ac894dd2d161e534.jpg&ehk=7VNdUVgnYmoiGGK8n049YOeZpTYWS%2b0Le4XZ5kQj8AA%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
            title: "REPUTATION",
            description: "I am the Queen",
        },
    ],
});