export interface Cart {
    items: CartItem[];
}

export interface CartItem {
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
    id: number;
}