let getDataProducts = {
  featured: [
    {
      id: 13,
      cate_id: 2,
      name: "ALASKA NÂU ĐỰC ĐẸP TRAI",
      image:
        "https://matpetfamily.com/wp-content/uploads/2021/02/141761959_1886256061522469_7166974700884504968_o-270x270.jpg",
      price: 24900000,
      imageList: [
        "https://matpetfamily.com/wp-content/uploads/2019/12/72835561_1437995923015154_7605397220103290880_n-270x270.jpg",
        "https://matpetfamily.com/wp-content/uploads/2020/05/95168083_1619595481521863_3931317646317846528_o-270x270.jpg",
      ],
    },
    {
      id: 14,
      cate_id: 2,
      name: "HUSKY ĐẠI NGÁO Ú NU",
      image:
        "https://matpetfamily.com/wp-content/uploads/2019/12/72835561_1437995923015154_7605397220103290880_n-270x270.jpg",
      price: 950000,
    },
    {
      id: 15,
      cate_id: 2,
      name: "HUSKY SIÊU CUTE",
      image:
        "https://matpetfamily.com/wp-content/uploads/2020/05/95168083_1619595481521863_3931317646317846528_o-270x270.jpg",
      price: 12000000,
    },
    {
      id: 16,
      cate_id: 2,
      name: "ALASKA HỒNG PHẤN",
      image:
        "https://matpetfamily.com/wp-content/uploads/2019/12/58380293_1288041901343891_3760072627301908480_o_1536x2048-270x270.jpg",
      price: 15290000,
    },
  ],
  latest: [
    {
      id: 21,
      cate_id: 3,
      name: "SAM Ú",
      image:
        "https://matpetfamily.com/wp-content/uploads/2021/08/02AE5D02-7F68-4F40-9852-F59485DA2878-270x270.jpeg",
      price: 13000000,
    },
    {
      id: 22,
      cate_id: 4,
      name: "GOLDEN VÀNG XINH",
      image:
        "https://matpetfamily.com/wp-content/uploads/2021/08/C9337040-7567-4A71-A7B1-9253A9B97B49-270x270.jpeg",
      price: 12000000,
    },
    {
      id: 23,
      cate_id: 4,
      name: "SAMOYED TRẮNG",
      image:
        "https://matpetfamily.com/wp-content/uploads/2021/08/E108C762-8859-4BFC-A960-158AA0244009-270x270.jpeg",
      price: 12000000,
    },
    {
      id: 24,
      cate_id: 3,
      name: "BÉ MẬP",
      image:
        "https://matpetfamily.com/wp-content/uploads/2021/08/825FAE74-BC64-4E7F-A9A1-CF6E6C8DBBAC-270x270.jpeg",
      price: 15000000,
    },
  ],
  top_selling: [
    {
      id: 1,
      cate_id: 1,
      name: "CORGI",
      image:
        "https://matpetfamily.com/wp-content/uploads/2020/06/104880540_1680368778777866_4728987718140571475_o-270x270.jpg",
      price: 25000000,
    },
    {
      id: 2,
      cate_id: 1,
      name: "CORGI Ú NU SIÊU XINH",
      image:
        "https://matpetfamily.com/wp-content/uploads/2019/12/75462468_1446520615496018_4012590135639015424_n201-270x270.jpg",
      price: 123000000,
    },
    {
      id: 3,
      cate_id: 1,
      name: "Corgi quấn tai siêu xinh",
      image:
        "https://matpetfamily.com/wp-content/uploads/2020/12/125294770_1830620010419408_604014806922630964_o-1-270x270.jpg",
      price: 13000000,
    },
    {
      id: 4,
      cate_id: 1,
      name: "2 BÉ CORGI MAX CUTE",
      image:
        "https://matpetfamily.com/wp-content/uploads/2020/12/131975744_1857499307731478_1840493530693442423_o-270x270.jpg",
      price: 7000000,
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
