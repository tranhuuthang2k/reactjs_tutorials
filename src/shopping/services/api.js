let getDataProducts = {
  featured: [
    {
      id: 13,
      cate_id: 2,
      name: "Samsung Galaxy Note 20 Ultra",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/220522/samsung-galaxy-note-20-ultra-5g-051920-101934-600x600.jpg",
      price: 24900000,
    },
    {
      id: 14,
      cate_id: 2,
      name: "Samsung Galaxy Note 20 Ultra 5G",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/225063/samsung-galaxy-note-20-ultra-5g-063420-123447-600x600.jpg",
      price: 27900000,
    },
    {
      id: 15,
      cate_id: 2,
      name: "Samsung Galaxy S20+",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/217936/samsung-galaxy-s20-plus-600x600-fix-600x600.jpg",
      price: 18900000,
    },
    {
      id: 16,
      cate_id: 2,
      name: "Samsung Galaxy Note 10+",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/206176/TimerThumb/samsung-galaxy-note-10-plus-(22).jpg",
      price: 15290000,
    },
  ],
  latest: [
    {
      id: 21,
      cate_id: 3,
      name: "OPPO Reno4",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/222596/oppo-reno4-275620-035629-600x600.jpg",
      price: 7210000,
    },
    {
      id: 22,
      cate_id: 3,
      name: "OPPO Find X2",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/198150/oppo-find-x2-blue-600x600-600x600.jpg",
      price: 19900000,
    },
    {
      id: 23,
      cate_id: 3,
      name: "OPPO Reno3 Pro",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/216172/oppo-reno3-pro-den-600x600-200x200.jpg",
      price: 8490000,
    },
    {
      id: 24,
      cate_id: 3,
      name: "OPPO Reno4 Pro",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/223497/oppo-reno4-pro-274720-034747-600x600.jpg",
      price: 10190000,
    },
  ],
  top_selling: [
    {
      id: 1,
      cate_id: 1,
      name: "iPhone 11 64GB",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-600x600.jpg",
      price: 20990000,
    },
    {
      id: 2,
      cate_id: 1,
      name: "iPhone 11 Pro Max 512GB",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-600x600.jpg",
      price: 41990000,
    },
    {
      id: 3,
      cate_id: 1,
      name: "iPhone 11 Pro Max 256GB",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-black-600x600.jpg",
      price: 37990000,
    },
    {
      id: 4,
      cate_id: 1,
      name: "iPhone 11 Pro 256GB",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/210655/iphone-11-pro-256gb-black-600x600.jpg",
      price: 34990000,
    },
  ],
};
const getDataProductById = async (id) => {
  id = parseInt(id);
  let data = {};
  data = getDataProducts.featured.find((item) => item.id === id);
  if (data === undefined) {
    data = getDataProducts.latest.find((item) => item.id === id);
    if (data === undefined) {
      data = getDataProducts.top_selling.find((item) => item.id === id);
    }
  }
  return data;
};
export const api = {
  getDataProducts,
  getDataProductById,
};
