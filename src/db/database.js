// Simple in-memory database implementation that can be exported to JSON
// This can be opened with DB Browser or similar tools

class Database {
  constructor() {
    this.users = [];
    this.products = [];
    this.orders = [];
    this.cart = [];
    
    // Initialize with some sample data
    this.initSampleData();
  }

  initSampleData() {
    // Sample products
    this.products = [
      {
        id: 1,
        name: "Nike Air Force 1 Mid EasyOn",
        brand: "Nike",
        price: 90,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true,
        description: "Sure, this looks like a classic AF-1, but there's one very helpful difference. Can you spot it? To make these easier to put on, we added elastic laces and a tailgate heel that stretches and expands for an easy slip-in-and-go experience. Nike Air units and a rubber outsole add classic AF-1 cushioning and durability so you're always ready to play.",
        mainImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw164031a0/nk/d1f/6/7/f/2/b/d1f67f2b_0e72_43b6_a159_1a9cdeb62170.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
        images: [
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwcf837aa3/nk/5fa/9/2/6/8/9/5fa92689_353c_4867_9b3f_c18d9e528f98.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8515e5cc/nk/86c/c/a/9/5/4/86cca954_b34f_4130_b5d9_63caed25f26b.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },
      {
        id: 2,
        name: "Nike Air Force 1 Mid EasyOn",
        brand: "Nike",
        price: 90,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true,
        description: "Sure, this looks like a classic AF-1, but there's one very helpful difference. Can you spot it? To make these easier to put on, we added elastic laces and a tailgate heel that stretches and expands for an easy slip-in-and-go experience. Nike Air units and a rubber outsole add classic AF-1 cushioning and durability so you're always ready to play.",
        mainImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw164031a0/nk/d1f/6/7/f/2/b/d1f67f2b_0e72_43b6_a159_1a9cdeb62170.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
        images: [
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwcf837aa3/nk/5fa/9/2/6/8/9/5fa92689_353c_4867_9b3f_c18d9e528f98.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8515e5cc/nk/86c/c/a/9/5/4/86cca954_b34f_4130_b5d9_63caed25f26b.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },
      {
        id: 3,
        name: "Nike Air Force 1 Mid EasyOn",
        brand: "Nike",
        price: 90,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true,
        description: "Sure, this looks like a classic AF-1, but there's one very helpful difference. Can you spot it? To make these easier to put on, we added elastic laces and a tailgate heel that stretches and expands for an easy slip-in-and-go experience. Nike Air units and a rubber outsole add classic AF-1 cushioning and durability so you're always ready to play.",
        mainImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw164031a0/nk/d1f/6/7/f/2/b/d1f67f2b_0e72_43b6_a159_1a9cdeb62170.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
        images: [
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwcf837aa3/nk/5fa/9/2/6/8/9/5fa92689_353c_4867_9b3f_c18d9e528f98.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8515e5cc/nk/86c/c/a/9/5/4/86cca954_b34f_4130_b5d9_63caed25f26b.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },
      {
        id: 4,
        name: "Nike Air Force 1 Mid EasyOn",
        brand: "Nike",
        price: 90,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true,
        description: "Sure, this looks like a classic AF-1, but there's one very helpful difference. Can you spot it? To make these easier to put on, we added elastic laces and a tailgate heel that stretches and expands for an easy slip-in-and-go experience. Nike Air units and a rubber outsole add classic AF-1 cushioning and durability so you're always ready to play.",
        mainImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw164031a0/nk/d1f/6/7/f/2/b/d1f67f2b_0e72_43b6_a159_1a9cdeb62170.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
        images: [
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwcf837aa3/nk/5fa/9/2/6/8/9/5fa92689_353c_4867_9b3f_c18d9e528f98.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8515e5cc/nk/86c/c/a/9/5/4/86cca954_b34f_4130_b5d9_63caed25f26b.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },
      {
        id: 5,
        name: "Nike Air Force 1 Mid EasyOn",
        brand: "Nike",
        price: 90,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true,
        description: "Sure, this looks like a classic AF-1, but there's one very helpful difference. Can you spot it? To make these easier to put on, we added elastic laces and a tailgate heel that stretches and expands for an easy slip-in-and-go experience. Nike Air units and a rubber outsole add classic AF-1 cushioning and durability so you're always ready to play.",
        mainImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw164031a0/nk/d1f/6/7/f/2/b/d1f67f2b_0e72_43b6_a159_1a9cdeb62170.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
        images: [
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwcf837aa3/nk/5fa/9/2/6/8/9/5fa92689_353c_4867_9b3f_c18d9e528f98.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8515e5cc/nk/86c/c/a/9/5/4/86cca954_b34f_4130_b5d9_63caed25f26b.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },
      {
        id: 6,
        name: "Nike Air Force 1 Mid EasyOn",
        brand: "Nike",
        price: 90,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true,
        description: "Sure, this looks like a classic AF-1, but there's one very helpful difference. Can you spot it? To make these easier to put on, we added elastic laces and a tailgate heel that stretches and expands for an easy slip-in-and-go experience. Nike Air units and a rubber outsole add classic AF-1 cushioning and durability so you're always ready to play.",
        mainImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw164031a0/nk/d1f/6/7/f/2/b/d1f67f2b_0e72_43b6_a159_1a9cdeb62170.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
        images: [
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwcf837aa3/nk/5fa/9/2/6/8/9/5fa92689_353c_4867_9b3f_c18d9e528f98.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8515e5cc/nk/86c/c/a/9/5/4/86cca954_b34f_4130_b5d9_63caed25f26b.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },
      {
        id: 7,
        name: "Nike Air Force 1 Mid EasyOn",
        brand: "Nike",
        price: 90,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true,
        description: "Sure, this looks like a classic AF-1, but there's one very helpful difference. Can you spot it? To make these easier to put on, we added elastic laces and a tailgate heel that stretches and expands for an easy slip-in-and-go experience. Nike Air units and a rubber outsole add classic AF-1 cushioning and durability so you're always ready to play.",
        mainImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw164031a0/nk/d1f/6/7/f/2/b/d1f67f2b_0e72_43b6_a159_1a9cdeb62170.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
        images: [
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwcf837aa3/nk/5fa/9/2/6/8/9/5fa92689_353c_4867_9b3f_c18d9e528f98.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8515e5cc/nk/86c/c/a/9/5/4/86cca954_b34f_4130_b5d9_63caed25f26b.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },
      {
        id: 8,
        name: "Nike Air Force 1 Mid EasyOn",
        brand: "Nike",
        price: 90,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true,
        description: "Sure, this looks like a classic AF-1, but there's one very helpful difference. Can you spot it? To make these easier to put on, we added elastic laces and a tailgate heel that stretches and expands for an easy slip-in-and-go experience. Nike Air units and a rubber outsole add classic AF-1 cushioning and durability so you're always ready to play.",
        mainImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw164031a0/nk/d1f/6/7/f/2/b/d1f67f2b_0e72_43b6_a159_1a9cdeb62170.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
        images: [
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwcf837aa3/nk/5fa/9/2/6/8/9/5fa92689_353c_4867_9b3f_c18d9e528f98.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8515e5cc/nk/86c/c/a/9/5/4/86cca954_b34f_4130_b5d9_63caed25f26b.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },
      {
        id: 8,
        name: "Nike Air Force 1 Mid EasyOn",
        brand: "Nike",
        price: 90,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true,
        description: "Sure, this looks like a classic AF-1, but there's one very helpful difference. Can you spot it? To make these easier to put on, we added elastic laces and a tailgate heel that stretches and expands for an easy slip-in-and-go experience. Nike Air units and a rubber outsole add classic AF-1 cushioning and durability so you're always ready to play.",
        mainImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw164031a0/nk/d1f/6/7/f/2/b/d1f67f2b_0e72_43b6_a159_1a9cdeb62170.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
        images: [
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwcf837aa3/nk/5fa/9/2/6/8/9/5fa92689_353c_4867_9b3f_c18d9e528f98.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8515e5cc/nk/86c/c/a/9/5/4/86cca954_b34f_4130_b5d9_63caed25f26b.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },
      {
        id: 9,
        name: "Nike Air Force 1 Mid EasyOn",
        brand: "Nike",
        price: 90,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true,
        description: "Sure, this looks like a classic AF-1, but there's one very helpful difference. Can you spot it? To make these easier to put on, we added elastic laces and a tailgate heel that stretches and expands for an easy slip-in-and-go experience. Nike Air units and a rubber outsole add classic AF-1 cushioning and durability so you're always ready to play.",
        mainImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw164031a0/nk/d1f/6/7/f/2/b/d1f67f2b_0e72_43b6_a159_1a9cdeb62170.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
        images: [
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwcf837aa3/nk/5fa/9/2/6/8/9/5fa92689_353c_4867_9b3f_c18d9e528f98.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8515e5cc/nk/86c/c/a/9/5/4/86cca954_b34f_4130_b5d9_63caed25f26b.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },
      {
        id: 10,
        name: "Nike Air Force 1 Mid EasyOn",
        brand: "Nike",
        price: 90,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true,
        description: "Sure, this looks like a classic AF-1, but there's one very helpful difference. Can you spot it? To make these easier to put on, we added elastic laces and a tailgate heel that stretches and expands for an easy slip-in-and-go experience. Nike Air units and a rubber outsole add classic AF-1 cushioning and durability so you're always ready to play.",
        mainImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw164031a0/nk/d1f/6/7/f/2/b/d1f67f2b_0e72_43b6_a159_1a9cdeb62170.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
        images: [
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwcf837aa3/nk/5fa/9/2/6/8/9/5fa92689_353c_4867_9b3f_c18d9e528f98.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8515e5cc/nk/86c/c/a/9/5/4/86cca954_b34f_4130_b5d9_63caed25f26b.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },
      {
        id: 11,
        name: "Nike Air Force 1 Mid EasyOn",
        brand: "Nike",
        price: 90,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true,
        description: "Sure, this looks like a classic AF-1, but there's one very helpful difference. Can you spot it? To make these easier to put on, we added elastic laces and a tailgate heel that stretches and expands for an easy slip-in-and-go experience. Nike Air units and a rubber outsole add classic AF-1 cushioning and durability so you're always ready to play.",
        mainImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw164031a0/nk/d1f/6/7/f/2/b/d1f67f2b_0e72_43b6_a159_1a9cdeb62170.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
        images: [
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwcf837aa3/nk/5fa/9/2/6/8/9/5fa92689_353c_4867_9b3f_c18d9e528f98.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8515e5cc/nk/86c/c/a/9/5/4/86cca954_b34f_4130_b5d9_63caed25f26b.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },
      {
        id: 12,
        name: "Nike Air Force 1 Mid EasyOn",
        brand: "Nike",
        price: 90,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true,
        description: "Sure, this looks like a classic AF-1, but there's one very helpful difference. Can you spot it? To make these easier to put on, we added elastic laces and a tailgate heel that stretches and expands for an easy slip-in-and-go experience. Nike Air units and a rubber outsole add classic AF-1 cushioning and durability so you're always ready to play.",
        mainImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw164031a0/nk/d1f/6/7/f/2/b/d1f67f2b_0e72_43b6_a159_1a9cdeb62170.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
        images: [
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwcf837aa3/nk/5fa/9/2/6/8/9/5fa92689_353c_4867_9b3f_c18d9e528f98.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8515e5cc/nk/86c/c/a/9/5/4/86cca954_b34f_4130_b5d9_63caed25f26b.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },
      {
        id: 13,
        name: "Nike Air Force 1 Mid EasyOn",
        brand: "Nike",
        price: 90,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true,
        description: "Sure, this looks like a classic AF-1, but there's one very helpful difference. Can you spot it? To make these easier to put on, we added elastic laces and a tailgate heel that stretches and expands for an easy slip-in-and-go experience. Nike Air units and a rubber outsole add classic AF-1 cushioning and durability so you're always ready to play.",
        mainImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw164031a0/nk/d1f/6/7/f/2/b/d1f67f2b_0e72_43b6_a159_1a9cdeb62170.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
        images: [
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwcf837aa3/nk/5fa/9/2/6/8/9/5fa92689_353c_4867_9b3f_c18d9e528f98.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8515e5cc/nk/86c/c/a/9/5/4/86cca954_b34f_4130_b5d9_63caed25f26b.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },
      {
        id: 14,
        name: "Nike Air Force 1 Mid EasyOn",
        brand: "Nike",
        price: 90,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true,
        description: "Sure, this looks like a classic AF-1, but there's one very helpful difference. Can you spot it? To make these easier to put on, we added elastic laces and a tailgate heel that stretches and expands for an easy slip-in-and-go experience. Nike Air units and a rubber outsole add classic AF-1 cushioning and durability so you're always ready to play.",
        mainImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw164031a0/nk/d1f/6/7/f/2/b/d1f67f2b_0e72_43b6_a159_1a9cdeb62170.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
        images: [
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwcf837aa3/nk/5fa/9/2/6/8/9/5fa92689_353c_4867_9b3f_c18d9e528f98.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8515e5cc/nk/86c/c/a/9/5/4/86cca954_b34f_4130_b5d9_63caed25f26b.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },
      {
        id: 15,
        name: "Nike Air Force 1 Mid EasyOn",
        brand: "Nike",
        price: 90,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true,
        description: "Sure, this looks like a classic AF-1, but there's one very helpful difference. Can you spot it? To make these easier to put on, we added elastic laces and a tailgate heel that stretches and expands for an easy slip-in-and-go experience. Nike Air units and a rubber outsole add classic AF-1 cushioning and durability so you're always ready to play.",
        mainImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw164031a0/nk/d1f/6/7/f/2/b/d1f67f2b_0e72_43b6_a159_1a9cdeb62170.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
        images: [
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwcf837aa3/nk/5fa/9/2/6/8/9/5fa92689_353c_4867_9b3f_c18d9e528f98.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8515e5cc/nk/86c/c/a/9/5/4/86cca954_b34f_4130_b5d9_63caed25f26b.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },
      {
        id: 16,
        name: "Nike Air Force 1 Mid EasyOn",
        brand: "Nike",
        price: 90,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true,
        description: "Sure, this looks like a classic AF-1, but there's one very helpful difference. Can you spot it? To make these easier to put on, we added elastic laces and a tailgate heel that stretches and expands for an easy slip-in-and-go experience. Nike Air units and a rubber outsole add classic AF-1 cushioning and durability so you're always ready to play.",
        mainImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw164031a0/nk/d1f/6/7/f/2/b/d1f67f2b_0e72_43b6_a159_1a9cdeb62170.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
        images: [
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwcf837aa3/nk/5fa/9/2/6/8/9/5fa92689_353c_4867_9b3f_c18d9e528f98.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8515e5cc/nk/86c/c/a/9/5/4/86cca954_b34f_4130_b5d9_63caed25f26b.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },
      {
        id: 17,
        name: "Nike Air Force 1 Mid EasyOn",
        brand: "Nike",
        price: 90,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        inStock: true,
        description: "Sure, this looks like a classic AF-1, but there's one very helpful difference. Can you spot it? To make these easier to put on, we added elastic laces and a tailgate heel that stretches and expands for an easy slip-in-and-go experience. Nike Air units and a rubber outsole add classic AF-1 cushioning and durability so you're always ready to play.",
        mainImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw164031a0/nk/d1f/6/7/f/2/b/d1f67f2b_0e72_43b6_a159_1a9cdeb62170.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
        images: [
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw517220d0/nk/79c/6/a/2/c/f/79c6a2cf_83c0_4cc7_b380_d572ee5edc01.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwcf837aa3/nk/5fa/9/2/6/8/9/5fa92689_353c_4867_9b3f_c18d9e528f98.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8515e5cc/nk/86c/c/a/9/5/4/86cca954_b34f_4130_b5d9_63caed25f26b.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },

    ];
  }

  // регистрация нового пользователя
  registerUser(user) {
    // Проверяем, существует ли уже пользователь с таким email
    const existingUser = this.users.find(u => u.email === user.email);
    if (existingUser) {
      throw new Error('Пользователь с таким адресом электронной почты уже существует');
    }
    // новый пользователя с уникальным id
    const newUser = {
      id: this.users.length + 1,
      ...user,
      orders: [] //массив заказов
    };
    // добавляем пользователя в базу
    this.users.push(newUser);
    return newUser;
  }
  //авторизация пользователя
  loginUser(email, password) {
    // ищем по почте и паролю
    const user = this.users.find(u => u.email === email && u.password === password);
    if (!user) {
      throw new Error('Неверный адрес электронной почты или пароль');
    }
    return user;
  }

  // получаем товар
  getAllProducts() {
    return this.products;
  }
  // id товара
  getProductById(id) {
    return this.products.find(p => p.id === id);
  }
// бренд
  getProductsByBrand(brand) {
    return this.products.filter(p => p.brand === brand);
  }
  // поиск товара по названию или бренду
  searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return this.products.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) || 
      p.brand.toLowerCase().includes(lowerQuery)
    );
  }
  //фильтр товаров по бренд, наличие, размеру
  filterProducts(filters) {
    let filtered = [...this.products];
    
    if (filters.brand) {
      filtered = filtered.filter(p => p.brand === filters.brand);
    }
    
    if (filters.inStock !== undefined) {
      filtered = filtered.filter(p => p.inStock === filters.inStock);
    }
    
    if (filters.size) {
      filtered = filtered.filter(p => p.sizes.includes(filters.size));
    }
    
    return filtered;
  }

  // добавляем в корзину
  addToCart(userId, productId, size) {
    const product = this.getProductById(productId);
    if (!product) {
      throw new Error('Товар не найден');
    }
    
    const cartItem = {
      id: Date.now(), // уникальный id для каждого товара
      userId,
      productId,
      size,
      product: { ...product } // копия товара
    };
    
    this.cart.push(cartItem);
    return this.getCartByUserId(userId);
  }
  /// удаляем товар из корзины
  removeFromCart(userId, cartItemId) {
    this.cart = this.cart.filter(item => !(item.userId === userId && item.id === cartItemId));
    return this.getCartByUserId(userId);
  }
// получение корзины пользователя
  getCartByUserId(userId) {
    return this.cart.filter(item => item.userId === userId);
  }
// очистка корзины
  clearCart(userId) {
    this.cart = this.cart.filter(item => item.userId !== userId);
    return [];
  }

  // создание заказа
  createOrder(userId, address) {
    const user = this.users.find(u => u.id === userId);
    if (!user) {
      throw new Error('Пользователь не найден');
    }
    
    const cartItems = this.getCartByUserId(userId);
    if (cartItems.length === 0) {
      throw new Error('Корзина пуста');
    }
    
    const order = {
      id: this.orders.length + 1,
      userId,
      items: cartItems,
      address,
      date: new Date().toISOString(), //дата заказа
      status: 'Pending',
      totalAmount: cartItems.reduce((sum, item) => sum + item.product.price, 0) // сумма заказа
    };
    
    this.orders.push(order);
    user.orders.push(order.id);
    this.clearCart(userId);
    
    return order;
  }
//  заказы пользователя
  getOrdersByUserId(userId) {
    return this.orders.filter(order => order.userId === userId);
  }
  // заказа по ID
  getOrderById(id) {
    return this.orders.find(order => order.id === id);
  }

  // Экспорт данных в JSON
  exportToJSON() {
    return JSON.stringify({
      users: this.users,
      products: this.products,
      orders: this.orders,
      cart: this.cart
    }, null, 2);
  }

  // Импорт данных из JSON
  importFromJSON(json) {
    const data = JSON.parse(json);
    this.users = data.users || [];
    this.products = data.products || [];
    this.orders = data.orders || [];
    this.cart = data.cart || [];
  }
}

// Создание и экспорт единственного экземпляра класса Database
const db = new Database();
export default db;