export interface Item {
    url: string
    title: string
    cardDiscription: string
    content: string
    price: number
    image: string
}


export const items: Item[][] =
    [[], [],
    [
        {
            url: "plan3/item1",
            title: "商城",
            cardDiscription: "擺放子計畫提供商品及票劵，使用者透過網路下單購買",
            content: "擺放子計畫提供商品及票劵，使用者透過網路下單購買",
            price: 2999,
            image: "plan3/item1.png",
        },
        {
            url: "plan3/item2",
            title: "博物館",
            cardDiscription: "結合個子計畫，將人文歷史生態保育等介紹展示。",
            content: "結合個子計畫，將人文歷史生態保育等介紹展示。",
            price: 599,
            image: "plan3/item2.png",
        },
        {
            url: "plan3/item3",
            title: "獨木舟體驗",
            cardDiscription: "讓使用者透過VR裝置及電腦設備，體驗獨木舟活動",
            content: "讓使用者透過VR裝置及電腦設備，體驗獨木舟活動",
            price: 3999,
            image: "plan3/item3.png",

        },
        {
            url: "plan3/item4",
            title: "後端登入",
            cardDiscription: "提供FB、LINE、GOOGLE第三方登入，保障登入安全性",
            content: "提供FB、LINE、GOOGLE第三方登入，保障登入安全性",
            price: 499,
            image: "plan3/item4.png",

        },
    ], [], []
    ]