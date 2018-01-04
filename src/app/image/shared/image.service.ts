import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
    visibleImages = [];
    getImages() {
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id:number) {
        return IMAGES.slice(0).find(image => image.id == id); 
    }
}

const IMAGES = [
    {"id": 1, "category": "pixel", "caption": "Google Pixel 2 XL", "url": "assets/img/pixel.jpg"},
    {"id": 2, "category": "iphone", "caption": "Apple iPhone X", "url": "assets/img/iphone.jpg"},
    {"id": 3, "category": "macbook", "caption": "Apple Macbook", "url": "assets/img/macbook.jpg"},
    {"id": 4, "category": "xbox", "caption": "Microsoft Xbox One X", "url": "assets/img/xbox.jpg"},
    {"id": 5, "category": "playstation", "caption": "Sony Playstation 4", "url": "assets/img/ps4.jpg"},
    {"id": 6, "category": "dslr", "caption": "Canon 5D Mark III", "url": "assets/img/canon.jpg"}
    
]