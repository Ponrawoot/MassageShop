export interface ShopItem {
    id: string,
    name: string,
    priceLevel: number,
    address: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string
}

export interface ShopJson {
    count: number
    data: ShopItem[]
}