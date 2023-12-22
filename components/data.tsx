export interface Item {
    url: string
    title: string
    introduction: string
    price: number
    image: string
}


export const items: Item[][] =
    [[], [],
    [
        {
            url: "plan3/item1",
            title: "和平島海上活動體驗！VR獨木舟體驗活動券",
            introduction: "渴望在家中感受此項海上活動嗎？現在，透過我們的線上VR獨木舟體驗券，您可以在不需海域環境及不需更換任何裝備的情況下，沉浸虛擬及划槳的體驗中！",
            price: 100,
            image: "plan3/canoe.jpg",
        },
        {
            url: "plan3/item2",
            title: "遊歷和平島夢幻體驗！線上VR獨木舟遊玩券",
            introduction: "追溯古今，探索過去的每一刻，我們引以為傲地呈現線上歷史故事導覽服務。這不僅是一次博物館之旅，更是一趟穿越時光的冒險。透過深情的語音解說，您將被引領進入歷史的繁星點點中，聆聽每一個激動人心的故事，重現歷史的風華。",
            price: 100,
            image: "plan3/museum.jpg",
        },
        {
            url: "plan3/item3",
            title: "搭上時光機探索和平島！線上語音故事券(博物館互動限定)",
            introduction: "踏上和平島的奇幻之旅，體驗知名在地景點。我們為您量身打造的暢遊和平島知名景點特色行程，將帶您進入各景點展區，搭配歷史特色互動遊戲，更加認識場景裡史背景集故事！",
            price: 200,
            image: "plan3/gamemap.jpg",
        },
    ], [], []
    ]