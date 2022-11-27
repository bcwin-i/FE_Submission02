const orders = [
  {
    created_at: "2020-04-25T20:53:17.898202",
    currency: "$",
    customer: {
      address: {
        city: "Norfolk",
        street: "Rosemary",
        zipcode: "46947",
      },
      id: "1cca5412-d526-ff11-d08a-25a663c43972",
      name: "Carolin",
      surname: "Kinney",
    },
    id: "302bb628-2622-74a9-8901-63900a26355b",
    product: {
      id: "5d914873-aae5-940b-ca10-c343aa7b5f67",
      image:
        "https://images.unsplash.com/photo-1484980742600-93fbca072174?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Intercontinental Manufacturing Company Blue Fenugreek Loquat Gummies",
      quantity: 78,
    },
    status: "shipped",
    total: 1245,
  },
  {
    created_at: "2021-08-19T11:16:23.364986",
    currency: "$",
    customer: {
      address: {
        city: "Redwood City",
        street: "Hitchcock",
        zipcode: "61334",
      },
      id: "60933353-59c0-b1e5-36f8-ee03557cec1e",
      name: "Reita",
      surname: "Burks",
    },
    id: "997a1fb4-62ef-3aa5-b7f6-1aecc4ab8d6a",
    product: {
      id: "f9d71283-cd9c-90cb-32a3-1f46fc1bd0d9",
      image:
        "https://images.unsplash.com/photo-1484980742600-93fbca072174?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Helping Hand Chervil Cola Nut Cotton Candy",
      quantity: 17,
    },
    status: "processing",
    total: 5714,
  },
  {
    created_at: "2020-09-09T19:10:42.871803",
    currency: "$",
    customer: {
      address: {
        city: "Darien",
        street: "Sonoma",
        zipcode: "70897",
      },
      id: "32fc065c-5141-d46d-ae8b-91d674665b29",
      name: "Hung",
      surname: "Norton",
    },
    id: "eaed8074-ff83-a10d-7f42-23948a4d9c30",
    product: {
      id: "01d67a6e-aa62-02ce-0c86-ba20432b6987",
      image:
        "https://images.unsplash.com/photo-1484980742600-93fbca072174?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Dun Rite Lawn Maintenance Peruvian Pepper Duku Snack",
      quantity: 31,
    },
    status: "shipped",
    total: 4962,
  },
  {
    created_at: "2020-03-03T18:20:44.027960",
    currency: "$",
    customer: {
      address: {
        city: "Spartanburg",
        street: "Campus",
        zipcode: "80242",
      },
      id: "6fe01d6f-1919-5d33-57bc-b050693d4886",
      name: "Del",
      surname: "Travis",
    },
    id: "5148f390-1112-148c-2429-7f461e756a6b",
    product: {
      id: "52df8503-7a5d-7729-18ad-a96c34266265",
      image:
        "https://images.unsplash.com/photo-1484980742600-93fbca072174?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjMy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Amerigroup Cardamom Northern Highbush Blueberry Cotton Candy",
      quantity: 82,
    },
    status: "shipped",
    total: 6828,
  },
  {
    created_at: "2021-06-16T09:09:44.472686",
    currency: "$",
    customer: {
      address: {
        city: "Durango",
        street: "Vara",
        zipcode: "69133",
      },
      id: "98c1a9b0-2fa9-3c04-45d5-72bbb44a20af",
      name: "Issac",
      surname: "Parrish",
    },
    id: "fc377d40-3e44-53cb-0237-635b56474aff",
    product: {
      id: "931ce454-847c-a5c8-cf94-d8f104aa6640",
      image:
        "https://images.unsplash.com/photo-1627812003105-89a42ad68d04?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjMy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "System Star Ajwain Marionberry Pretzels",
      quantity: 15,
    },
    status: "delivered",
    total: 2219,
  },
  {
    created_at: "2020-03-03T14:22:01.513701",
    currency: "$",
    customer: {
      address: {
        city: "Livonia",
        street: "Post",
        zipcode: "87796",
      },
      id: "4424fb72-6a11-212a-6f80-1b78a5f81b9a",
      name: "Shad",
      surname: "Payne",
    },
    id: "746ea6a0-6f66-07cd-f0de-9da479ce829d",
    product: {
      id: "7ca58c7a-0f76-51a9-1178-f56c9a04e491",
      image:
        "https://images.unsplash.com/photo-1627812003105-89a42ad68d04?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Miller Brewing Lesser Calamint Luma Apiculata Snack",
      quantity: 68,
    },
    status: "shipped",
    total: 9055,
  },
  {
    created_at: "2020-10-02T12:09:43.079842",
    currency: "$",
    customer: {
      address: {
        city: "Royal Palm Beach",
        street: "Paraiso",
        zipcode: "23725",
      },
      id: "a09358a4-9cc5-2644-15d5-ec248cbe83ac",
      name: "Sharda",
      surname: "Bush",
    },
    id: "af91c248-cdc8-cb22-e1ee-4e98f9d8d45d",
    product: {
      id: "5e31d0ee-be06-dba3-9301-564270aea780",
      image:
        "https://images.unsplash.com/photo-1627812003105-89a42ad68d04?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Entergy Allspice Bacupari Cotton Candy",
      quantity: 61,
    },
    status: "processing",
    total: 6018,
  },
  {
    created_at: "2020-09-14T18:07:15.061989",
    currency: "$",
    customer: {
      address: {
        city: "Southfield",
        street: "Glenhaven",
        zipcode: "21852",
      },
      id: "bdbd3096-fef4-f8f2-2832-ffac9e9bd533",
      name: "Tyesha",
      surname: "Harding",
    },
    id: "9f37141e-9d4d-5003-f907-b82b4a93f892",
    product: {
      id: "4ca167f9-f203-dbae-a70d-b9c1e162c7ff",
      image:
        "https://images.unsplash.com/photo-1627812003105-89a42ad68d04?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Quest Technology Service Culantro Myrciaria Floribunda Drops",
      quantity: 35,
    },
    status: "processing",
    total: 6028,
  },
  {
    created_at: "2021-09-11T07:58:34.329928",
    currency: "$",
    customer: {
      address: {
        city: "Gretna",
        street: "Lysette",
        zipcode: "01332",
      },
      id: "af152e68-e53e-0e8a-c848-325059fe7a02",
      name: "Hugo",
      surname: "Cortez",
    },
    id: "d4edd9c4-f07f-753b-e94c-3cf9f3e5fa9c",
    product: {
      id: "3778470b-edb6-a6ea-7e30-79e62ddbe465",
      image:
        "https://images.unsplash.com/photo-1627812003105-89a42ad68d04?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjM1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Afforda Safflower Goji Candy",
      quantity: 97,
    },
    status: "processing",
    total: 1212,
  },
  {
    created_at: "2020-09-02T20:44:09.840635",
    currency: "$",
    customer: {
      address: {
        city: "Beloit",
        street: "Dormitory",
        zipcode: "39789",
      },
      id: "849f856a-a7c7-8f16-2445-f96f5bb5109e",
      name: "Cris",
      surname: "Pierce",
    },
    id: "6937a571-7ad3-1132-4ef0-0a20f1caf713",
    product: {
      id: "20a7cef9-1760-5ed1-b195-bbe3daa50811",
      image:
        "https://images.unsplash.com/photo-1627812003105-89a42ad68d04?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjM1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Garden Master Saigon Cinnamon Dabai Drops",
      quantity: 29,
    },
    status: "delivered",
    total: 7639,
  },
  {
    created_at: "2020-01-18T09:21:42.876908",
    currency: "$",
    customer: {
      address: {
        city: "St. Paul",
        street: "Paraiso",
        zipcode: "09052",
      },
      id: "9b2e434a-c226-02ba-34d0-e5aa0c230fb9",
      name: "Oralee",
      surname: "Conway",
    },
    id: "e82d34b1-28c2-cb9f-dc5d-1e5b8476977b",
    product: {
      id: "91f33da2-8741-4b3a-7848-c62afec9bb30",
      image:
        "https://images.unsplash.com/photo-1627812003105-89a42ad68d04?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjM1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Six Flags Jasmine Flowers Confederate Huckleberry Cotton Candy",
      quantity: 94,
    },
    status: "processing",
    total: 3437,
  },
  {
    created_at: "2020-08-19T07:15:11.416897",
    currency: "$",
    customer: {
      address: {
        city: "Los Angeles",
        street: "Britton",
        zipcode: "94786",
      },
      id: "d0aa0ed1-59d5-cffa-c9e9-b10c42c3713f",
      name: "Rikki",
      surname: "Woodward",
    },
    id: "6773fc79-08dd-c25d-3f3a-457a2bccb646",
    product: {
      id: "a1483a8d-e9fe-31f7-4046-b0c062165221",
      image:
        "https://images.unsplash.com/photo-1627812003105-89a42ad68d04?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjM2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Martin Marietta Materials Saigon Cinnamon Duku Pretzels",
      quantity: 62,
    },
    status: "delivered",
    total: 2787,
  },
  {
    created_at: "2021-07-03T19:28:40.667218",
    currency: "$",
    customer: {
      address: {
        city: "Hopkinsville",
        street: "Hahn",
        zipcode: "82902",
      },
      id: "61040144-c3bf-abf6-fb1c-2f19619a3b2e",
      name: "Aleen",
      surname: "Roberts",
    },
    id: "cce0ae4d-f4c4-7040-f195-1f7fef5a58c8",
    product: {
      id: "d64ea0d6-cb5d-da1e-1a30-e91d81e2490f",
      image:
        "https://images.unsplash.com/photo-1627812003105-89a42ad68d04?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjM2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Bfg Technologies Costmary Bilimbi Candy",
      quantity: 18,
    },
    status: "shipped",
    total: 9658,
  },
  {
    created_at: "2020-09-17T04:38:01.353522",
    currency: "$",
    customer: {
      address: {
        city: "Dallas",
        street: "Marshall",
        zipcode: "19486",
      },
      id: "f3bd3d4b-5461-d49a-7d2b-dca6dc089f2a",
      name: "Brain",
      surname: "Garza",
    },
    id: "5244dc89-a885-3a8a-8afb-c9cc539abc27",
    product: {
      id: "17a5b140-07d8-84d9-c046-62fd318398f2",
      image:
        "https://images.unsplash.com/photo-1627812003105-89a42ad68d04?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjM2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Devon Energy Curry Leaf Berberis Gummies",
      quantity: 47,
    },
    status: "shipped",
    total: 1723,
  },
  {
    created_at: "2021-02-19T13:29:49.311709",
    currency: "$",
    customer: {
      address: {
        city: "Central Point",
        street: "Hulbert",
        zipcode: "30215",
      },
      id: "3a5a8a3e-1ef8-526a-81ee-3339e587bb83",
      name: "Tuan",
      surname: "Delacruz",
    },
    id: "3939417e-d44e-1cc4-659e-92e70eaa791d",
    product: {
      id: "7979c5d7-cb59-dc74-b989-3f1a9662625f",
      image:
        "https://images.unsplash.com/photo-1627812003105-89a42ad68d04?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Copeland'S Cilantro Cocky Apple Cotton Candy",
      quantity: 72,
    },
    status: "processing",
    total: 8143,
  },
  {
    created_at: "2020-02-04T07:44:54.095154",
    currency: "$",
    customer: {
      address: {
        city: "Pittsburgh",
        street: "Getz",
        zipcode: "55482",
      },
      id: "c3909a2e-07d8-89f0-67a1-239a38b92706",
      name: "Chong",
      surname: "Pennington",
    },
    id: "825c6a45-5666-d8fa-44fb-67509de5ec0f",
    product: {
      id: "18635ae3-4d20-e13d-44c4-4103eb5c6be9",
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Group O Clove Luma Apiculata Pretzels",
      quantity: 95,
    },
    status: "delivered",
    total: 3398,
  },
  {
    created_at: "2020-02-06T01:15:02.586244",
    currency: "$",
    customer: {
      address: {
        city: "Findlay",
        street: "Ruth",
        zipcode: "78170",
      },
      id: "77d2c6a3-9f34-3617-b281-d50de89c7b9c",
      name: "Miguelina",
      surname: "Maxwell",
    },
    id: "7e97ecb7-e6fc-8bb2-9fa0-ced1a85e2362",
    product: {
      id: "d529a6f1-8bc7-768a-6d5b-fa4d4a2e4bbf",
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjM4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Dun Rite Lawn Care Jimbu Kei Apple Gummies",
      quantity: 91,
    },
    status: "shipped",
    total: 5777,
  },
  {
    created_at: "2021-12-21T04:14:59.359936",
    currency: "$",
    customer: {
      address: {
        city: "Woodburn",
        street: "Munich",
        zipcode: "73125",
      },
      id: "caa6c1c5-8810-f720-993f-62dca9ebde63",
      name: "Elliott",
      surname: "Hodge",
    },
    id: "e8cf40d9-086f-45c1-7486-5056b87a2dee",
    product: {
      id: "3f3b31a5-8600-eef4-64c1-5dd71ab52994",
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjM4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Ncr Corporation Paracress Keule Snack",
      quantity: 75,
    },
    status: "delivered",
    total: 5725,
  },
  {
    created_at: "2020-01-04T03:51:15.911990",
    currency: "$",
    customer: {
      address: {
        city: "Owatonna",
        street: "Loomis",
        zipcode: "46806",
      },
      id: "cee28eaf-c1b5-f722-be25-fbe51b04ec70",
      name: "Laverne",
      surname: "Bartlett",
    },
    id: "b860be32-bd4f-1764-652e-56b95119ee26",
    product: {
      id: "392f34d7-bcb5-6b2b-e3f8-bae03b8f9fd2",
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjM4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Brinker International Boldo Barbadine Cotton Candy",
      quantity: 28,
    },
    status: "shipped",
    total: 9171,
  },
  {
    created_at: "2021-11-26T07:15:10.800644",
    currency: "$",
    customer: {
      address: {
        city: "West Chicago",
        street: "Entrada",
        zipcode: "86876",
      },
      id: "9fe64835-7386-8db8-a254-78d7b0edb482",
      name: "Jennell",
      surname: "Hernandez",
    },
    id: "195bb13e-5164-65c1-e267-2275bb02b782",
    product: {
      id: "381e9fae-d103-9bcf-6e13-2624435b9163",
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjM5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Westat Saffron Kakadu Plum Pretzels",
      quantity: 29,
    },
    status: "processing",
    total: 6786,
  },
  {
    created_at: "2021-01-25T08:14:03.881908",
    currency: "$",
    customer: {
      address: {
        city: "Honolulu",
        street: "English",
        zipcode: "72485",
      },
      id: "086b32aa-5d75-44cd-28f5-033e73301df9",
      name: "Deane",
      surname: "Carter",
    },
    id: "b879dbfd-bd52-ed30-496c-4d23a2871114",
    product: {
      id: "b5287dbc-cfb1-7e10-df90-5e38eb006747",
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjM5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Zappos.Com Cumin Grape Snack",
      quantity: 48,
    },
    status: "processing",
    total: 2450,
  },
  {
    created_at: "2021-03-08T01:19:53.215507",
    currency: "$",
    customer: {
      address: {
        city: "Raleigh",
        street: "Vienna",
        zipcode: "14713",
      },
      id: "6c8c0f56-82e3-4040-305a-3501cc6fcba1",
      name: "Mauro",
      surname: "Marshall",
    },
    id: "eef318e3-2734-d1bf-e637-c58b69d95d35",
    product: {
      id: "5d755334-f054-9163-c5bc-c4bc465c3c29",
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjM5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Dish Network Borage Coco Plum Gum",
      quantity: 74,
    },
    status: "delivered",
    total: 4347,
  },
  {
    created_at: "2020-09-01T11:39:26.371889",
    currency: "$",
    customer: {
      address: {
        city: "Del City",
        street: "Granada",
        zipcode: "00453",
      },
      id: "0cc9aed4-4600-ef52-f15b-70c5e15726c9",
      name: "Retta",
      surname: "Bowen",
    },
    id: "73691bf2-b698-6a8e-cbff-943b698137e7",
    product: {
      id: "5d79b876-8788-a3e0-b03b-6bba53891bd0",
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Kbr Jimbu Lime Drops",
      quantity: 94,
    },
    status: "delivered",
    total: 6198,
  },
  {
    created_at: "2021-08-19T08:03:57.675565",
    currency: "$",
    customer: {
      address: {
        city: "Fort Worth",
        street: "Morrell",
        zipcode: "27812",
      },
      id: "11229c36-22d3-5d97-3a2f-aa5f6caa34d9",
      name: "Hosea",
      surname: "Pickett",
    },
    id: "c9895618-3395-bfa6-44ce-70e02d664637",
    product: {
      id: "18faa0ed-0753-aa3f-b246-2fbe063742fc",
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Mars Incorporated Alexanders Clementine Candy",
      quantity: 81,
    },
    status: "delivered",
    total: 1848,
  },
  {
    created_at: "2020-06-09T03:44:33.686356",
    currency: "$",
    customer: {
      address: {
        city: "Walnut Creek",
        street: "Carolina",
        zipcode: "26709",
      },
      id: "d7ae33d7-3f70-6837-773f-d4a4bb956bf6",
      name: "Jenice",
      surname: "Poole",
    },
    id: "3233fad8-0187-8647-e018-3b5c6977081b",
    product: {
      id: "a97ba68b-0a0c-87b7-353a-6001e6452025",
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Apple Inc. Chives Blue Tongue Pretzels",
      quantity: 44,
    },
    status: "delivered",
    total: 8228,
  },
  {
    created_at: "2020-05-09T13:04:51.171964",
    currency: "$",
    customer: {
      address: {
        city: "Bakersfield",
        street: "Persia",
        zipcode: "69439",
      },
      id: "75422c4b-a4d9-4737-8150-30ab385aace9",
      name: "Yajaira",
      surname: "Snow",
    },
    id: "cd3010cb-6c44-dda5-19c5-c9137e6e7f8a",
    product: {
      id: "f225796a-fe13-c3a0-2f9f-f42684c75df0",
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Taco Tico Alligator Pepper Desert Lime Snack",
      quantity: 13,
    },
    status: "shipped",
    total: 8392,
  },
  {
    created_at: "2020-07-11T07:12:29.975971",
    currency: "$",
    customer: {
      address: {
        city: "Willmar",
        street: "Wiese",
        zipcode: "06368",
      },
      id: "b4f0afc1-4af5-912d-e939-1cb981e0306e",
      name: "Jesusita",
      surname: "Schultz",
    },
    id: "1c10e98a-7eb9-a85a-1534-97cd23205c37",
    product: {
      id: "e92106d8-935f-b0de-c234-d73feabf1b80",
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Autozone Avocado Leaf Bacuri Snack",
      quantity: 87,
    },
    status: "delivered",
    total: 7706,
  },
  {
    created_at: "2021-10-14T14:34:45.719839",
    currency: "$",
    customer: {
      address: {
        city: "Collinsville",
        street: "Towerside",
        zipcode: "24242",
      },
      id: "26d5eb69-e5d6-88ff-7430-5f87459d4a1c",
      name: "Kenneth",
      surname: "Lynn",
    },
    id: "b33de7ff-e57c-a683-dd89-3f8db54a6570",
    product: {
      id: "2f030a3d-053e-df52-322c-2d616dfd2d92",
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "First Choice Garden Maintenance Peppermint Gum Leaf Lingonberry Gummies",
      quantity: 58,
    },
    status: "delivered",
    total: 1810,
  },
  {
    created_at: "2020-12-16T21:59:31.373499",
    currency: "$",
    customer: {
      address: {
        city: "Cortland",
        street: "Diamond Cove",
        zipcode: "22192",
      },
      id: "3f739f56-5183-495b-f306-9b5724b5ed5e",
      name: "Ollie",
      surname: "Knight",
    },
    id: "c17136ee-d705-0d12-f204-47677b64718d",
    product: {
      id: "b898f8f1-c562-2cc3-a50a-ffd1c5b4549f",
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Utstarcom Juniper Berry Goji Pretzels",
      quantity: 28,
    },
    status: "shipped",
    total: 2955,
  },
  {
    created_at: "2021-09-20T20:31:48.515683",
    currency: "$",
    customer: {
      address: {
        city: "Stevens Point",
        street: "Hawes",
        zipcode: "97878",
      },
      id: "0bb69696-0147-0fbc-06c6-e0948e28aeb8",
      name: "Irvin",
      surname: "Stanton",
    },
    id: "9751bf0a-e67d-b0a6-84b0-6c697dd53fd9",
    product: {
      id: "278fa90c-1278-3fdd-e737-cda88ed75b64",
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Johnson & Johnson Avens Karkalla Snack",
      quantity: 82,
    },
    status: "delivered",
    total: 7600,
  },
  {
    created_at: "2021-08-22T05:53:10.466648",
    currency: "$",
    customer: {
      address: {
        city: "Savage",
        street: "Bannan",
        zipcode: "00674",
      },
      id: "d0fe21b0-121c-2e49-6823-ed74ea2af56a",
      name: "An",
      surname: "Garrison",
    },
    id: "f42ef310-2f8a-aa40-c7e8-9ee856d618b5",
    product: {
      id: "6de68aee-c913-ff94-debd-32ca83b5dd31",
      image:
        "https://images.unsplash.com/photo-1581798269145-7512508289b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Life Map Planners Curry Leaf Durian Snack",
      quantity: 39,
    },
    status: "delivered",
    total: 5606,
  },
  {
    created_at: "2021-12-01T08:14:21.434388",
    currency: "$",
    customer: {
      address: {
        city: "Fort Pierce",
        street: "Paul",
        zipcode: "27764",
      },
      id: "4459b6b1-cfa7-531b-c75e-e1b0785167cd",
      name: "Rochell",
      surname: "Morrison",
    },
    id: "568f2d48-d84e-8e91-3bba-cd99513d3c76",
    product: {
      id: "85e6c1e4-fff9-dee9-615a-91f1e825058d",
      image:
        "https://images.unsplash.com/photo-1581798269145-7512508289b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Adaptec Anise Bacupari Bar",
      quantity: 82,
    },
    status: "processing",
    total: 2646,
  },
  {
    created_at: "2020-01-15T18:08:39.635382",
    currency: "$",
    customer: {
      address: {
        city: "Post Falls",
        street: "Trader Vic",
        zipcode: "16195",
      },
      id: "3110a836-1b83-f12f-39e5-430e29e9c572",
      name: "Sung",
      surname: "Soto",
    },
    id: "ab22c14e-3162-75b9-4ecb-f7988271db31",
    product: {
      id: "6f43924b-3157-4b54-f3b1-053d28c0e0d3",
      image:
        "https://images.unsplash.com/photo-1581798269145-7512508289b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Vitagee Peppermint Gum Leaf Kepel Pretzels",
      quantity: 80,
    },
    status: "delivered",
    total: 7337,
  },
  {
    created_at: "2021-07-01T07:08:39.511788",
    currency: "$",
    customer: {
      address: {
        city: "Boulder",
        street: "India",
        zipcode: "92982",
      },
      id: "49d94853-3045-5ba4-d7a9-597af9b6f8f3",
      name: "Rosamaria",
      surname: "Macdonald",
    },
    id: "01d7e883-a1d2-58c2-857a-a25443877400",
    product: {
      id: "e152ddf1-d912-1794-e4d7-bcda01aeed1c",
      image:
        "https://images.unsplash.com/photo-1581798269145-7512508289b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Pro Star Asarabacca Elderberry Cotton Candy",
      quantity: 46,
    },
    status: "shipped",
    total: 1236,
  },
  {
    created_at: "2021-03-13T13:28:09.429374",
    currency: "$",
    customer: {
      address: {
        city: "Shelby",
        street: "Decker",
        zipcode: "61236",
      },
      id: "d7ded305-5da1-1f1c-4f1a-696a0f6984aa",
      name: "Carlos",
      surname: "Marks",
    },
    id: "666b4610-be76-7187-81a3-c5c6cf8d7240",
    product: {
      id: "c86243f1-4dbf-51c8-c13f-b7db81e7603f",
      image:
        "https://images.unsplash.com/photo-1581798269145-7512508289b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQ0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "World Of Fun Licorice, Liquorice Dragonfrui Snack",
      quantity: 75,
    },
    status: "processing",
    total: 4082,
  },
  {
    created_at: "2020-07-01T12:20:58.001389",
    currency: "$",
    customer: {
      address: {
        city: "South Burlington",
        street: "Galvez",
        zipcode: "95693",
      },
      id: "5e301a2b-e693-b4e0-31a8-86c3a7f7f339",
      name: "Ethyl",
      surname: "Johnson",
    },
    id: "dd3b6b8a-f285-cf3f-ab18-f48ef99f5883",
    product: {
      id: "04dd1906-bcfd-a593-ca7b-c4c0809071b0",
      image:
        "https://images.unsplash.com/photo-1581798269145-7512508289b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQ0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Qualcomm Cudweed Biriba Pretzels",
      quantity: 69,
    },
    status: "shipped",
    total: 5008,
  },
  {
    created_at: "2020-07-19T15:06:35.418804",
    currency: "$",
    customer: {
      address: {
        city: "Thornton",
        street: "Gilman",
        zipcode: "37273",
      },
      id: "d3d93c2b-0774-6041-c3dd-9a79d38c8992",
      name: "Beckie",
      surname: "Flowers",
    },
    id: "42413204-45be-d32b-ddbc-a456208866d4",
    product: {
      id: "60116c15-ee52-1476-b406-78963ef82218",
      image:
        "https://images.unsplash.com/photo-1581798269145-7512508289b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQ1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Just For Fun Blue Fenugreek Marionberry Cotton Candy",
      quantity: 29,
    },
    status: "shipped",
    total: 7500,
  },
  {
    created_at: "2020-12-26T16:15:10.333716",
    currency: "$",
    customer: {
      address: {
        city: "Atlanta",
        street: "Balmy",
        zipcode: "66121",
      },
      id: "c3f7cef0-d8e0-b7a4-d318-4dfddfa27152",
      name: "Carey",
      surname: "Pennington",
    },
    id: "2bb401a4-ffb1-0d2b-0248-94311235a811",
    product: {
      id: "fd45a724-edef-fc20-9522-f40d4ca4360c",
      image:
        "https://images.unsplash.com/photo-1581798269145-7512508289b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQ1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Muscle Factory Angelica Jostaberry Gummies",
      quantity: 90,
    },
    status: "shipped",
    total: 1595,
  },
  {
    created_at: "2020-09-08T21:51:56.085876",
    currency: "$",
    customer: {
      address: {
        city: "Albany",
        street: "Ney",
        zipcode: "11886",
      },
      id: "7fbc6545-fb86-f13f-3793-cc7c59216a82",
      name: "William",
      surname: "Mcintosh",
    },
    id: "867173cd-8ed2-5394-b75c-049ab73a3e8b",
    product: {
      id: "dcf0e6f7-5ae4-dcb3-30ee-9e1fae1ce7bf",
      image:
        "https://images.unsplash.com/photo-1581798269145-7512508289b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQ1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Belle Lady Shiso Dewberry Candy",
      quantity: 24,
    },
    status: "processing",
    total: 7035,
  },
  {
    created_at: "2020-11-27T06:07:31.222997",
    currency: "$",
    customer: {
      address: {
        city: "Bonney Lake",
        street: "Croaker",
        zipcode: "14984",
      },
      id: "f1225918-f34a-1518-f514-cbe54e63ed41",
      name: "Lawanna",
      surname: "Zamora",
    },
    id: "3938fde4-1cad-119b-05fe-f8af26158e24",
    product: {
      id: "5c016a5f-e447-cc2f-16b7-86c052122244",
      image:
        "https://images.unsplash.com/photo-1581798269145-7512508289b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQ2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Alliant Techsystems Sassafras Bacuri Pretzels",
      quantity: 56,
    },
    status: "shipped",
    total: 4933,
  },
  {
    created_at: "2020-12-22T23:45:47.283861",
    currency: "$",
    customer: {
      address: {
        city: "Morristown",
        street: "Friedell",
        zipcode: "74912",
      },
      id: "0bc127f5-509e-b6a6-cd03-0a7d6a8a5555",
      name: "Jerold",
      surname: "Wynn",
    },
    id: "212f55ed-467e-9d90-b6fa-63a53a366d5e",
    product: {
      id: "0110b925-34f1-ec13-88fe-9c979bc03a9b",
      image:
        "https://images.unsplash.com/photo-1581798269145-7512508289b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQ2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Journal Communications Clary Cocona Gummies",
      quantity: 83,
    },
    status: "processing",
    total: 4390,
  },
  {
    created_at: "2020-05-01T10:40:36.835617",
    currency: "$",
    customer: {
      address: {
        city: "South Holland",
        street: "Warner",
        zipcode: "22653",
      },
      id: "a4dd6ca0-6c78-09d6-764c-d74dae3a0fa3",
      name: "Amado",
      surname: "Kramer",
    },
    id: "7e16a9c9-529b-d846-cda7-7d4e556c170a",
    product: {
      id: "868c29f8-1c23-e1bb-fc86-b2a75164aec8",
      image:
        "https://images.unsplash.com/photo-1581798269145-7512508289b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQ2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Road Runner Lawn Services Lovage Gac Cotton Candy",
      quantity: 96,
    },
    status: "processing",
    total: 5164,
  },
  {
    created_at: "2021-12-20T12:23:26.984244",
    currency: "$",
    customer: {
      address: {
        city: "Alameda",
        street: "Rex",
        zipcode: "64555",
      },
      id: "5c458381-672d-90fb-4253-700d603c4aab",
      name: "Fallon",
      surname: "Lawson",
    },
    id: "63a05fcd-a486-5e93-76f9-39f99eee8148",
    product: {
      id: "07dfd4da-3f25-5f7f-16d0-80f3841cbbc0",
      image:
        "https://images.unsplash.com/photo-1581798269145-7512508289b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQ3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Baldor Electric Company Cudweed Triphasia Brassii Candy",
      quantity: 65,
    },
    status: "processing",
    total: 1235,
  },
  {
    created_at: "2020-10-21T20:46:31.013980",
    currency: "$",
    customer: {
      address: {
        city: "Bend",
        street: "Kent",
        zipcode: "81003",
      },
      id: "a934859e-7bd0-5029-5d05-70add8890f5e",
      name: "Burma",
      surname: "Willis",
    },
    id: "c32587b9-8b0d-7253-bd97-3bd1e84fa87a",
    product: {
      id: "7886a6af-aef3-e259-0363-e5da9f37a359",
      image:
        "https://images.unsplash.com/photo-1581798269145-7512508289b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQ3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Liberty Wealth Planners Jasmine Flowers Eugenia Uniflora Candy",
      quantity: 87,
    },
    status: "delivered",
    total: 7407,
  },
  {
    created_at: "2021-01-27T04:54:03.745553",
    currency: "$",
    customer: {
      address: {
        city: "Willoughby",
        street: "Indiana",
        zipcode: "64223",
      },
      id: "078ffc35-4a48-0fab-6454-c14d804a82f0",
      name: "Pura",
      surname: "Rocha",
    },
    id: "4af2bb3c-2adf-b031-2114-960a57f5334c",
    product: {
      id: "82645709-0c98-0373-6ac1-d227ded9d4a7",
      image:
        "https://images.unsplash.com/photo-1581798269145-7512508289b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQ3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Chicago Bridge & Iron Company Saigon Cinnamon Bog Bilberry Drops",
      quantity: 44,
    },
    status: "delivered",
    total: 4609,
  },
  {
    created_at: "2021-08-18T04:35:28.559308",
    currency: "$",
    customer: {
      address: {
        city: "Los Gatos",
        street: "Fresno",
        zipcode: "20325",
      },
      id: "8a977f2d-a98a-bfb8-9000-cbfa30f0be2b",
      name: "Shalon",
      surname: "Vazquez",
    },
    id: "c46f985a-3295-f8c1-ec9d-ba458ed671ed",
    product: {
      id: "e44e19b3-4cd2-8ada-21b2-b576381571aa",
      image:
        "https://images.unsplash.com/photo-1534119139482-b530a7f9a98b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQ4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Citrix Allspice Cocky Apple Drops",
      quantity: 75,
    },
    status: "processing",
    total: 9637,
  },
  {
    created_at: "2021-03-31T09:11:31.790233",
    currency: "$",
    customer: {
      address: {
        city: "Stockton",
        street: "Ward",
        zipcode: "47312",
      },
      id: "8422e423-ead9-815e-9c88-2b2c80522914",
      name: "Rob",
      surname: "Osborne",
    },
    id: "d975b53d-d55a-6786-6180-6af1c6910ffa",
    product: {
      id: "d8c4341b-1d68-af39-de7a-4c92aee34cf7",
      image:
        "https://images.unsplash.com/photo-1534119139482-b530a7f9a98b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQ4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Helios Air Cilantro Blackberry Bar",
      quantity: 35,
    },
    status: "delivered",
    total: 1520,
  },
  {
    created_at: "2021-02-18T08:19:52.542427",
    currency: "$",
    customer: {
      address: {
        city: "Duncan",
        street: "Dorantes",
        zipcode: "19431",
      },
      id: "b52d9d68-2658-c863-6da1-b0a40acf4c7c",
      name: "Kasi",
      surname: "Joyce",
    },
    id: "2cf474fd-35aa-23ec-1674-0844b2f80210",
    product: {
      id: "03ff45ea-ed6f-5288-014e-d323383a1d7a",
      image:
        "https://images.unsplash.com/photo-1534119139482-b530a7f9a98b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQ5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "American Broadcasting Company Sassafras Cryptocarya Alba Bar",
      quantity: 21,
    },
    status: "processing",
    total: 5688,
  },
  {
    created_at: "2021-02-12T10:46:29.650220",
    currency: "$",
    customer: {
      address: {
        city: "Reynoldsburg",
        street: "Retiro",
        zipcode: "89468",
      },
      id: "6ee508c5-2ff6-da6d-bce3-45249e17da19",
      name: "Merissa",
      surname: "Pickett",
    },
    id: "2fe629f0-cbd0-077d-dfad-3bddaf44d460",
    product: {
      id: "826c0293-674b-7970-de70-43f560c14816",
      image:
        "https://images.unsplash.com/photo-1534119139482-b530a7f9a98b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQ5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Monk Home Funding Services Allspice Hackberry Drops",
      quantity: 3,
    },
    status: "processing",
    total: 5181,
  },
  {
    created_at: "2021-03-11T09:55:50.121745",
    currency: "$",
    customer: {
      address: {
        city: "Bridgeton",
        street: "Douglass",
        zipcode: "08752",
      },
      id: "3f504107-a9ca-62f9-87f3-274cb237c657",
      name: "Frances",
      surname: "Richardson",
    },
    id: "e99dff09-c850-da49-ec25-63a5059f4811",
    product: {
      id: "c589632f-d8d2-4b90-23c8-ed31cbfe0954",
      image:
        "https://images.unsplash.com/photo-1534119139482-b530a7f9a98b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FuZHl8fHx8fHwxNjQwNjM1NjQ5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
      name: "Chem-Dry Clary Grape Snack",
      quantity: 84,
    },
    status: "delivered",
    total: 4675,
  },
];

let size = 50;

document.addEventListener("DOMContentLoaded", function (event) {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let query = params; // "some_value"
  console.log("Query", { page: query.page, search: query.q });
  let page = query.page || 1
  // Page 1 of 3
  const paginarionLabel = getElementById("paginarionLabel")
  if(paginarionLabel){
    paginarionLabel.innerHTML = `Page ${page} of ${size}`
  }
  displayBestSeller();
});

function dateFormat(date) {
  var str = date;
  var dt = new Date(str + "Z");
  return dt.toUTCString();
}

function displayBestSeller() {
  const constainer = getElementById("orderTable");
  console.log("Orders: ", orders.length);
  let rows = "";
  if (constainer)
    orders.map(
      (data, index) =>
        (rows += `
      <tr key=${index} style="background-color: ${
          index % 2 ? "rgba(0,0,0,0.1)" : "white"
        }">
              <td class="col1">
               ${data.product.name}
              </td>
              <td class="col2">
              ${dateFormat(data.created_at)}
              </td>
              <td class="col3">${data.currency + " " + data.total}</td>
              <td class="col4" style="color: ${
                data.status === "processing"
                  ? "red"
                  : data.status === "delivered"
                  ? "green"
                  : "black"
              }; text-transform: capitalize">${data.status}</td>
            </tr> `)
    );

  constainer.innerHTML += rows;
}
