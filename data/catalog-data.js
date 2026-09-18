// Edit catalog content here. Keep product ids stable; SKUs identify variants within each product.
// Images: use a normal relative path, or leave empty for the existing placeholder.
// Availability defaults to true; false prevents adding the product/variant.
// featured is editorial metadata; the current grid continues to show all products.
// whatsappNumber: international digits only (no +, spaces or hyphens). Blank disables handoff.
// Source: ALSAADAH_Product_Price_List.pdf, pages 2–13. sourcePage is the physical PDF page.
// expectedImage is documentation only; image stays empty until a real photo is uploaded.
// priceUnit: kg orders one listed 1 kg unit; unitsPerCarton: 1 is the order-unit normalization, not a claimed carton.
window.catalogData = {
  "settings": {
    "brandName": "ADLA FOOD",
    "subtitle": "كتالوغ الطلب المباشر",
    "pageTitle": "ADLA FOOD — كتالوج الطلب المباشر",
    "logo": "assets/logo/adla-food.png",
    "whatsappNumber": "436609243210",
    "currency": "€",
    "labels": {
      "searchPlaceholder": "ابحث باسم المنتج أو الكود",
      "chooseCategory": "اختر الفئة",
      "featuredTitle": "المنتجات الأكثر طلبًا",
      "emptyResults": "لا توجد منتجات مطابقة",
      "basketTitle": "سلة الطلب",
      "sendWhatsApp": "إرسال الطلب عبر واتساب",
      "sendWhatsAppShort": "إرسال على واتساب",
      "imageUnavailable": "صورة المنتج غير متوفرة",
      "available": "متوفر",
      "unavailable": "غير متوفر",
      "code": "الكود",
      "cartonPrice": "سعر الكرتونة",
      "remove": "حذف",
      "total": "الإجمالي",
      "carton": "كرتونة",
      "cartonsInOrder": "كرتونة في الطلب",
      "emptyOrder": "الطلب فارغ",
      "emptyBasket": "السلة فارغة",
      "emptyBasketHint": "أضف بعض المنتجات للبدء بالطلب",
      "orderDetailsTitle": "بيانات الطلب",
      "marketNameLabel": "اسم الماركت",
      "marketNamePlaceholder": "الشام ماركت",
      "marketNameRequired": "يرجى إدخال اسم الماركت",
      "orderNoteLabel": "ملاحظة على الطلب",
      "orderNotePlaceholder": "يرجى التوصيل بعد الساعة 14:00",
      "continueOrder": "متابعة وإرسال الطلب",
      "orderReady": "جاهز للإرسال",
      "openWhatsApp": "فتح واتساب وإرسال الطلب",
      "backToOrder": "رجوع",
      "closeOrder": "إغلاق بيانات الطلب",
      "orderIdLabel": "رقم الطلب",
      "orderDateLabel": "التاريخ",
      "marketLabel": "الماركت",
      "orderDetailsLabel": "تفاصيل الطلب",
      "totalCartonsLabel": "إجمالي الكراتين",
      "orderTotalLabel": "إجمالي الطلب",
      "whatsappNumberMissing": "رقم واتساب الطلبات غير محدد حاليًا.",
      "whatsappNumberInvalid": "يرجى ضبط رقم واتساب الطلبات بأرقام دولية فقط.",
      "newOrderLabel": "طلب جديد",
      "quantityLabel": "الكمية",
      "lineTotalLabel": "المجموع",
      "unitsPerCartonLabel": "عدد الوحدات في الكرتونة",
      "product": "منتج",
      "products": "منتجات",
      "kgPrice": "سعر الكيلو",
      "kg": "كغ",
      "orderUnits": "وحدة طلب",
      "orderUnitsInOrder": "وحدة في الطلب",
      "totalOrderUnitsLabel": "إجمالي وحدات الطلب"
    },
    "unitNames": {
      "غ": "غرام",
      "كغ": "كيلوغرام",
      "مل": "ملليلتر"
    },
    "serviceStrip": [
      "أسعار جملة",
      "توصيل سريع",
      "طلب واتساب"
    ]
  },
  "categories": [
    {
      "id": "all",
      "name": "الكل",
      "order": 0
    },
    {
      "id": "pickles",
      "name": "مخللات ومحفوظات",
      "order": 1
    },
    {
      "id": "sauces",
      "name": "صلصات ومعاجين",
      "order": 2
    },
    {
      "id": "dry",
      "name": "توابل ومواد جافة",
      "order": 3
    },
    {
      "id": "seeds",
      "name": "مكسرات وبذور",
      "order": 4
    },
    {
      "id": "olives",
      "name": "زيتون",
      "order": 5
    },
    {
      "id": "rice",
      "name": "حبوب ومواد طبخ",
      "order": 6
    },
    {
      "id": "legumes",
      "name": "بقوليات ومعلبات",
      "order": 7
    },
    {
      "id": "canned",
      "name": "معلبات وأطعمة جاهزة",
      "order": 8
    },
    {
      "id": "sweets",
      "name": "حلويات",
      "order": 9
    },
    {
      "id": "drinks",
      "name": "مشروبات",
      "order": 10
    },
    {
      "id": "herbs",
      "name": "أعشاب ومجففات",
      "order": 3.5
    },
    {
      "id": "cooking-flavors",
      "name": "ماء ونكهات طبخ",
      "order": 8.1
    },
    {
      "id": "condiments",
      "name": "خل وصلصات",
      "order": 8.2
    }
  ],
  "products": [
    {
      "id": "grape-leaves",
      "name": "ورق عنب",
      "category": "pickles",
      "featured": true,
      "available": true,
      "variants": [
        {
          "sku": "P1-02",
          "size": {
            "value": 660,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 22.0,
          "image": "",
          "available": true,
          "sourcePage": 2,
          "packageType": "زجاج",
          "unitPrice": 1.83,
          "expectedImage": "assets/images/products/grape-leaves/grape-leaves-660g.webp"
        },
        {
          "sku": "P1-03",
          "size": {
            "value": 1250,
            "unit": "غ"
          },
          "unitsPerCarton": 6,
          "price": 22.0,
          "image": "",
          "available": true,
          "sourcePage": 2,
          "packageType": "زجاج",
          "unitPrice": 3.67,
          "expectedImage": "assets/images/products/grape-leaves/grape-leaves-1250g.webp"
        },
        {
          "sku": "P1-01",
          "size": {
            "value": 2800,
            "unit": "غ"
          },
          "unitsPerCarton": 4,
          "price": 26.0,
          "image": "",
          "available": true,
          "sourcePage": 2,
          "packageType": "زجاج",
          "unitPrice": 6.5,
          "expectedImage": "assets/images/products/grape-leaves/grape-leaves-2800g-p1-01.webp"
        },
        {
          "sku": "P1-04",
          "size": {
            "value": 2800,
            "unit": "غ"
          },
          "unitsPerCarton": 6,
          "price": 36.0,
          "image": "",
          "available": true,
          "sourcePage": 2,
          "packageType": "بلاستيك",
          "unitPrice": 6.0,
          "expectedImage": "assets/images/products/grape-leaves/grape-leaves-2800g-p1-04.webp"
        },
        {
          "sku": "P1-05",
          "size": {
            "value": 1000,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 33.0,
          "image": "",
          "available": true,
          "sourcePage": 2,
          "packageType": "زجاج",
          "unitPrice": 2.75,
          "expectedImage": "assets/images/products/grape-leaves/grape-leaves-1000g.webp"
        }
      ]
    },
    {
      "id": "makdous",
      "name": "مكدوس",
      "category": "pickles",
      "featured": true,
      "available": true,
      "variants": [
        {
          "sku": "P3-09",
          "size": {
            "value": 660,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 50.0,
          "image": "",
          "available": true,
          "sourcePage": 3,
          "packageType": "زجاج",
          "unitPrice": 4.17,
          "expectedImage": "assets/images/products/makdous/makdous-660g-p3-09.webp"
        },
        {
          "sku": "P3-10",
          "size": {
            "value": 1000,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 72.0,
          "image": "",
          "available": true,
          "sourcePage": 3,
          "packageType": "زجاج",
          "unitPrice": 6.0,
          "expectedImage": "assets/images/products/makdous/makdous-1000g.webp"
        },
        {
          "sku": "P3-11",
          "size": {
            "value": 2800,
            "unit": "غ"
          },
          "unitsPerCarton": 4,
          "price": 64.0,
          "image": "",
          "available": true,
          "sourcePage": 3,
          "packageType": "زجاج",
          "unitPrice": 16.0,
          "expectedImage": "assets/images/products/makdous/makdous-2800g.webp"
        },
        {
          "sku": "P1-10",
          "size": {
            "value": 660,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 18.0,
          "image": "",
          "available": true,
          "sourcePage": 2,
          "packageType": "زجاج",
          "unitPrice": 1.5,
          "expectedImage": "assets/images/products/makdous/makdous-660g-p1-10.webp"
        }
      ]
    },
    {
      "id": "pepper-paste",
      "name": "دبس فليفلة",
      "category": "sauces",
      "featured": true,
      "available": true,
      "variants": [
        {
          "sku": "P2-01",
          "size": {
            "value": 660,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 24.0,
          "image": "",
          "available": true,
          "sourcePage": 4,
          "packageType": "زجاج",
          "unitPrice": 2.0,
          "expectedImage": "assets/images/products/pepper-paste/pepper-paste-660g.webp"
        },
        {
          "sku": "P2-02",
          "size": {
            "value": 1000,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 33.0,
          "image": "",
          "available": true,
          "sourcePage": 4,
          "packageType": "زجاج",
          "unitPrice": 2.75,
          "expectedImage": "assets/images/products/pepper-paste/pepper-paste-1000g.webp"
        }
      ]
    },
    {
      "id": "tahini",
      "name": "طحينة",
      "category": "sauces",
      "featured": true,
      "available": true,
      "variants": [
        {
          "sku": "P3-04",
          "size": {
            "value": 350,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 32.0,
          "image": "",
          "available": true,
          "sourcePage": 4,
          "packageType": "بلاستيك",
          "unitPrice": 2.67,
          "expectedImage": "assets/images/products/tahini/tahini-350g-p3-04.webp"
        },
        {
          "sku": "P3-05",
          "size": {
            "value": 700,
            "unit": "غ"
          },
          "unitsPerCarton": 8,
          "price": 36.0,
          "image": "",
          "available": true,
          "sourcePage": 4,
          "packageType": "بلاستيك",
          "unitPrice": 4.5,
          "expectedImage": "assets/images/products/tahini/tahini-700g-p3-05.webp"
        },
        {
          "sku": "P3-08",
          "size": {
            "value": 1800,
            "unit": "غ"
          },
          "unitsPerCarton": 6,
          "price": 58.0,
          "image": "",
          "available": true,
          "sourcePage": 4,
          "packageType": "بلاستيك",
          "unitPrice": 9.67,
          "expectedImage": "assets/images/products/tahini/tahini-1800g.webp"
        },
        {
          "sku": "P3-06",
          "size": {
            "value": 350,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 32.0,
          "image": "",
          "available": true,
          "sourcePage": 4,
          "packageType": "بلاستيك",
          "unitPrice": 2.67,
          "expectedImage": "assets/images/products/tahini/tahini-350g-p3-06.webp"
        },
        {
          "sku": "P3-07",
          "size": {
            "value": 700,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 50.0,
          "image": "",
          "available": true,
          "sourcePage": 4,
          "packageType": "بلاستيك",
          "unitPrice": 4.17,
          "expectedImage": "assets/images/products/tahini/tahini-700g-p3-07.webp"
        }
      ]
    },
    {
      "id": "pickled-peppers",
      "name": "فلفل فليفلة حورانية",
      "category": "pickles",
      "featured": true,
      "available": true,
      "variants": [
        {
          "sku": "P2-12",
          "size": {
            "value": 660,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 18.0,
          "image": "",
          "available": true,
          "sourcePage": 3,
          "unitPrice": 1.5,
          "expectedImage": "assets/images/products/pickled-peppers/pickled-peppers-660g.webp"
        },
        {
          "sku": "P2-13",
          "size": {
            "value": 1000,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 30.0,
          "image": "",
          "available": true,
          "sourcePage": 3,
          "unitPrice": 2.5,
          "expectedImage": "assets/images/products/pickled-peppers/pickled-peppers-1000g.webp"
        }
      ],
      "searchTerms": [
        "مخلل فليفلة",
        "فلفل"
      ]
    },
    {
      "id": "pickled-turnips",
      "name": "لفت",
      "category": "pickles",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-06",
          "size": {
            "value": 660,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 18.0,
          "image": "",
          "available": true,
          "sourcePage": 2,
          "packageType": "زجاج",
          "unitPrice": 1.5,
          "expectedImage": "assets/images/products/pickled-turnips/pickled-turnips-660g.webp"
        },
        {
          "sku": "P1-07",
          "size": {
            "value": 1000,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 30.0,
          "image": "",
          "available": true,
          "sourcePage": 2,
          "packageType": "زجاج",
          "unitPrice": 2.5,
          "expectedImage": "assets/images/products/pickled-turnips/pickled-turnips-1000g.webp"
        },
        {
          "sku": "P1-08",
          "size": {
            "value": 1250,
            "unit": "غ"
          },
          "unitsPerCarton": 6,
          "price": 18.0,
          "image": "",
          "available": true,
          "sourcePage": 2,
          "packageType": "زجاج",
          "unitPrice": 3.0,
          "expectedImage": "assets/images/products/pickled-turnips/pickled-turnips-1250g.webp"
        },
        {
          "sku": "P1-09",
          "size": {
            "value": 2800,
            "unit": "غ"
          },
          "unitsPerCarton": 4,
          "price": 20.0,
          "image": "",
          "available": true,
          "sourcePage": 2,
          "packageType": "زجاج",
          "unitPrice": 5.0,
          "expectedImage": "assets/images/products/pickled-turnips/pickled-turnips-2800g.webp"
        }
      ]
    },
    {
      "id": "mixed-pickles",
      "name": "مخلل مشكل",
      "category": "pickles",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-11",
          "size": {
            "value": 1250,
            "unit": "غ"
          },
          "unitsPerCarton": 6,
          "price": 18.0,
          "image": "",
          "available": true,
          "sourcePage": 2,
          "packageType": "زجاج",
          "unitPrice": 3.0,
          "expectedImage": "assets/images/products/mixed-pickles/mixed-pickles-1250g.webp"
        },
        {
          "sku": "P1-12",
          "size": {
            "value": 1000,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 30.0,
          "image": "",
          "available": true,
          "sourcePage": 2,
          "packageType": "زجاج",
          "unitPrice": 2.5,
          "expectedImage": "assets/images/products/mixed-pickles/mixed-pickles-1000g.webp"
        },
        {
          "sku": "P1-13",
          "size": {
            "value": 2800,
            "unit": "غ"
          },
          "unitsPerCarton": 4,
          "price": 42.0,
          "image": "",
          "available": true,
          "sourcePage": 2,
          "packageType": "زجاج",
          "unitPrice": 10.5,
          "expectedImage": "assets/images/products/mixed-pickles/mixed-pickles-2800g.webp"
        }
      ]
    },
    {
      "id": "artichokes",
      "name": "أرضي شوكي",
      "category": "pickles",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P2-07",
          "size": {
            "value": 2800,
            "unit": "غ"
          },
          "unitsPerCarton": 4,
          "price": 34.0,
          "image": "",
          "available": true,
          "sourcePage": 2,
          "packageType": "زجاج",
          "unitPrice": 8.5,
          "expectedImage": "assets/images/products/artichokes/artichokes-2800g.webp"
        }
      ]
    },
    {
      "id": "olives",
      "name": "زيتون",
      "category": "olives",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P2-08",
          "size": {
            "value": 1000,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 33.0,
          "image": "",
          "available": true,
          "sourcePage": 3,
          "packageType": "زجاج",
          "unitPrice": 2.75,
          "expectedImage": "assets/images/products/olives/olives-1000g.webp"
        },
        {
          "sku": "P2-09",
          "size": {
            "value": 2800,
            "unit": "غ"
          },
          "unitsPerCarton": 4,
          "price": 33.0,
          "image": "",
          "available": true,
          "sourcePage": 3,
          "packageType": "زجاج",
          "unitPrice": 8.25,
          "expectedImage": "assets/images/products/olives/olives-2800g.webp"
        },
        {
          "sku": "P2-10",
          "size": {
            "value": 2700,
            "unit": "غ"
          },
          "unitsPerCarton": 6,
          "price": 42.0,
          "image": "",
          "available": true,
          "sourcePage": 3,
          "packageType": "بلاستيك",
          "unitPrice": 7.0,
          "expectedImage": "assets/images/products/olives/olives-2700g.webp"
        }
      ]
    },
    {
      "id": "jalapeno-peppers",
      "name": "فلفل فليفلة هالبينو",
      "category": "pickles",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P2-11",
          "size": {
            "value": 660,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 20.0,
          "image": "",
          "available": true,
          "sourcePage": 3,
          "unitPrice": 1.67,
          "expectedImage": "assets/images/products/jalapeno-peppers/jalapeno-peppers-660g.webp"
        }
      ]
    },
    {
      "id": "olive-salad",
      "name": "سلطة زيتون",
      "category": "pickles",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P2-15",
          "size": {
            "value": 660,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 30.0,
          "image": "",
          "available": true,
          "sourcePage": 3,
          "unitPrice": 2.5,
          "expectedImage": "assets/images/products/olive-salad/olive-salad-660g.webp"
        }
      ]
    },
    {
      "id": "pickled-cucumbers",
      "name": "خيار",
      "category": "pickles",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P3-24",
          "size": {
            "value": 660,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 20.0,
          "image": "",
          "available": true,
          "sourcePage": 3,
          "packageType": "زجاج",
          "unitPrice": 1.67,
          "expectedImage": "assets/images/products/pickled-cucumbers/pickled-cucumbers-660g.webp"
        },
        {
          "sku": "P3-25",
          "size": {
            "value": 1000,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 33.0,
          "image": "",
          "available": true,
          "sourcePage": 3,
          "packageType": "زجاج",
          "unitPrice": 2.75,
          "expectedImage": "assets/images/products/pickled-cucumbers/pickled-cucumbers-1000g.webp"
        },
        {
          "sku": "P3-26",
          "size": {
            "value": 2800,
            "unit": "غ"
          },
          "unitsPerCarton": 4,
          "price": 22.0,
          "image": "",
          "available": true,
          "sourcePage": 3,
          "packageType": "زجاج",
          "unitPrice": 5.5,
          "expectedImage": "assets/images/products/pickled-cucumbers/pickled-cucumbers-2800g.webp"
        }
      ]
    },
    {
      "id": "tomato-paste",
      "name": "معجون طماطم",
      "category": "sauces",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P3-01",
          "size": {
            "value": 660,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 20.0,
          "image": "",
          "available": true,
          "sourcePage": 4,
          "packageType": "زجاج",
          "unitPrice": 1.67,
          "expectedImage": "assets/images/products/tomato-paste/tomato-paste-660g.webp"
        },
        {
          "sku": "P3-02",
          "size": {
            "value": 800,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 22.0,
          "image": "",
          "available": true,
          "sourcePage": 4,
          "packageType": "معدن",
          "unitPrice": 1.83,
          "expectedImage": "assets/images/products/tomato-paste/tomato-paste-800g.webp"
        },
        {
          "sku": "P3-03",
          "size": {
            "value": 1000,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 30.0,
          "image": "",
          "available": true,
          "sourcePage": 4,
          "packageType": "زجاج",
          "unitPrice": 2.5,
          "expectedImage": "assets/images/products/tomato-paste/tomato-paste-1000g.webp"
        }
      ]
    },
    {
      "id": "pomegranate-molasses",
      "name": "دبس رمان",
      "category": "sauces",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P3-18",
          "size": {
            "value": 700,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 30.0,
          "image": "",
          "available": true,
          "sourcePage": 4,
          "packageType": "بلاستيك",
          "unitPrice": 2.5,
          "expectedImage": "assets/images/products/pomegranate-molasses/pomegranate-molasses-700g.webp"
        }
      ]
    },
    {
      "id": "foul-medammes",
      "name": "فول مدمس",
      "category": "legumes",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P2-03",
          "size": {
            "value": 400,
            "unit": "غ"
          },
          "unitsPerCarton": 24,
          "price": 12.0,
          "image": "",
          "available": true,
          "sourcePage": 5,
          "packageType": "معدن",
          "unitPrice": 0.5,
          "expectedImage": "assets/images/products/foul-medammes/foul-medammes-400g.webp"
        }
      ]
    },
    {
      "id": "chickpeas",
      "name": "حمص حب",
      "category": "legumes",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P2-04",
          "size": {
            "value": 400,
            "unit": "غ"
          },
          "unitsPerCarton": 24,
          "price": 17.0,
          "image": "",
          "available": true,
          "sourcePage": 5,
          "packageType": "معدن",
          "unitPrice": 0.71,
          "expectedImage": "assets/images/products/chickpeas/chickpeas-400g.webp"
        }
      ]
    },
    {
      "id": "broad-beans",
      "name": "فول باجلا",
      "category": "legumes",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P2-05",
          "size": {
            "value": 800,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 17.0,
          "image": "",
          "available": true,
          "sourcePage": 5,
          "packageType": "معدن",
          "unitPrice": 1.42,
          "expectedImage": "assets/images/products/broad-beans/broad-beans-800g.webp"
        }
      ]
    },
    {
      "id": "baba-ghanoush",
      "name": "متبل بابا غنوج",
      "category": "canned",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P2-14",
          "size": {
            "value": 400,
            "unit": "غ"
          },
          "unitsPerCarton": 24,
          "price": 30.0,
          "image": "",
          "available": true,
          "sourcePage": 6,
          "unitPrice": 1.25,
          "expectedImage": "assets/images/products/baba-ghanoush/baba-ghanoush-400g.webp"
        }
      ]
    },
    {
      "id": "yalanji-pomegranate",
      "name": "يالانجي دبس رمان",
      "category": "canned",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P3-12",
          "size": {
            "value": 400,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 25.0,
          "image": "",
          "available": true,
          "sourcePage": 6,
          "packageType": "معدن",
          "unitPrice": 2.08,
          "expectedImage": "assets/images/products/yalanji-pomegranate/yalanji-pomegranate-400g.webp"
        }
      ]
    },
    {
      "id": "yalanji-lemon",
      "name": "يالانجي ليمون",
      "category": "canned",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P3-13",
          "size": {
            "value": 400,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 25.0,
          "image": "",
          "available": true,
          "sourcePage": 6,
          "packageType": "معدن",
          "unitPrice": 2.08,
          "expectedImage": "assets/images/products/yalanji-lemon/yalanji-lemon-400g.webp"
        }
      ]
    },
    {
      "id": "grilled-eggplant",
      "name": "باذنجان مشوي",
      "category": "canned",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P3-19",
          "size": {
            "value": 1000,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 33.0,
          "image": "",
          "available": true,
          "sourcePage": 6,
          "packageType": "زجاج",
          "unitPrice": 2.75,
          "expectedImage": "assets/images/products/grilled-eggplant/grilled-eggplant-1000g.webp"
        },
        {
          "sku": "P3-20",
          "size": {
            "value": 2800,
            "unit": "غ"
          },
          "unitsPerCarton": 4,
          "price": 33.0,
          "image": "",
          "available": true,
          "sourcePage": 6,
          "packageType": "زجاج",
          "unitPrice": 8.25,
          "expectedImage": "assets/images/products/grilled-eggplant/grilled-eggplant-2800g.webp"
        }
      ]
    },
    {
      "id": "falafel-mix",
      "name": "فلافل خلطة",
      "category": "canned",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P3-22",
          "size": {
            "value": 400,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 25.0,
          "image": "",
          "available": true,
          "sourcePage": 6,
          "packageType": "كرتون",
          "unitPrice": 2.08,
          "expectedImage": "assets/images/products/falafel-mix/falafel-mix-400g.webp"
        }
      ]
    },
    {
      "id": "nigella-seeds",
      "name": "حبة البركة",
      "category": "dry",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-14",
          "size": {
            "value": 1,
            "unit": "كغ"
          },
          "unitsPerCarton": 1,
          "price": 7.5,
          "image": "",
          "available": true,
          "sourcePage": 7,
          "packageType": "كيلو",
          "priceUnit": "kg",
          "expectedImage": "assets/images/products/nigella-seeds/nigella-seeds-1kg.webp"
        }
      ]
    },
    {
      "id": "sesame",
      "name": "سمسم",
      "category": "dry",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-15",
          "size": {
            "value": 1,
            "unit": "كغ"
          },
          "unitsPerCarton": 1,
          "price": 9.0,
          "image": "",
          "available": true,
          "sourcePage": 7,
          "packageType": "كيلو",
          "priceUnit": "kg",
          "expectedImage": "assets/images/products/sesame/sesame-1kg.webp"
        }
      ]
    },
    {
      "id": "curry",
      "name": "كاري",
      "category": "dry",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-16",
          "size": {
            "value": 1,
            "unit": "كغ"
          },
          "unitsPerCarton": 1,
          "price": 8.5,
          "image": "",
          "available": true,
          "sourcePage": 7,
          "packageType": "كيلو",
          "priceUnit": "kg",
          "expectedImage": "assets/images/products/curry/curry-1kg.webp"
        }
      ]
    },
    {
      "id": "ginger-powder",
      "name": "زنجبيل بودرة",
      "category": "dry",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-17",
          "size": {
            "value": 1,
            "unit": "كغ"
          },
          "unitsPerCarton": 1,
          "price": 9.0,
          "image": "",
          "available": true,
          "sourcePage": 7,
          "packageType": "كيلو",
          "priceUnit": "kg",
          "expectedImage": "assets/images/products/ginger-powder/ginger-powder-1kg.webp"
        }
      ]
    },
    {
      "id": "ground-cinnamon",
      "name": "قرفة مطحونة",
      "category": "dry",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-18",
          "size": {
            "value": 1,
            "unit": "كغ"
          },
          "unitsPerCarton": 1,
          "price": 6.5,
          "image": "",
          "available": true,
          "sourcePage": 7,
          "packageType": "كيلو",
          "priceUnit": "kg",
          "expectedImage": "assets/images/products/ground-cinnamon/ground-cinnamon-1kg.webp"
        }
      ]
    },
    {
      "id": "ground-cumin",
      "name": "كمون مطحون",
      "category": "dry",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-19",
          "size": {
            "value": 1,
            "unit": "كغ"
          },
          "unitsPerCarton": 1,
          "price": 10.0,
          "image": "",
          "available": true,
          "sourcePage": 7,
          "packageType": "كيلو",
          "priceUnit": "kg",
          "expectedImage": "assets/images/products/ground-cumin/ground-cumin-1kg.webp"
        }
      ]
    },
    {
      "id": "ground-sumac",
      "name": "سماق مطحون",
      "category": "dry",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-20",
          "size": {
            "value": 1,
            "unit": "كغ"
          },
          "unitsPerCarton": 1,
          "price": 14.0,
          "image": "",
          "available": true,
          "sourcePage": 7,
          "packageType": "كيلو",
          "priceUnit": "kg",
          "expectedImage": "assets/images/products/ground-sumac/ground-sumac-1kg.webp"
        }
      ]
    },
    {
      "id": "ground-black-pepper",
      "name": "فلفل أسود مطحون",
      "category": "dry",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-21",
          "size": {
            "value": 1,
            "unit": "كغ"
          },
          "unitsPerCarton": 1,
          "price": 15.0,
          "image": "",
          "available": true,
          "sourcePage": 7,
          "packageType": "كيلو",
          "priceUnit": "kg",
          "expectedImage": "assets/images/products/ground-black-pepper/ground-black-pepper-1kg.webp"
        }
      ]
    },
    {
      "id": "ground-fenugreek",
      "name": "حلبة مطحونة",
      "category": "dry",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-22",
          "size": {
            "value": 1,
            "unit": "كغ"
          },
          "unitsPerCarton": 1,
          "price": 6.0,
          "image": "",
          "available": true,
          "sourcePage": 7,
          "packageType": "كيلو",
          "priceUnit": "kg",
          "expectedImage": "assets/images/products/ground-fenugreek/ground-fenugreek-1kg.webp"
        }
      ]
    },
    {
      "id": "whole-cloves",
      "name": "قرنفل حب",
      "category": "dry",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-23",
          "size": {
            "value": 1,
            "unit": "كغ"
          },
          "unitsPerCarton": 1,
          "price": 25.0,
          "image": "",
          "available": true,
          "sourcePage": 7,
          "packageType": "كيلو",
          "priceUnit": "kg",
          "expectedImage": "assets/images/products/whole-cloves/whole-cloves-1kg.webp"
        }
      ]
    },
    {
      "id": "coconut",
      "name": "جوز الهند",
      "category": "dry",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-26",
          "size": {
            "value": 1,
            "unit": "كغ"
          },
          "unitsPerCarton": 1,
          "price": 12.0,
          "image": "",
          "available": true,
          "sourcePage": 7,
          "packageType": "كيلو",
          "priceUnit": "kg",
          "expectedImage": "assets/images/products/coconut/coconut-1kg.webp"
        }
      ]
    },
    {
      "id": "ground-cardamom",
      "name": "هيل مطحون",
      "category": "dry",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-29",
          "size": {
            "value": 1,
            "unit": "كغ"
          },
          "unitsPerCarton": 1,
          "price": 40.0,
          "image": "",
          "available": true,
          "sourcePage": 7,
          "packageType": "كيلو",
          "priceUnit": "kg",
          "expectedImage": "assets/images/products/ground-cardamom/ground-cardamom-1kg.webp"
        }
      ]
    },
    {
      "id": "turmeric",
      "name": "كركم",
      "category": "dry",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-30",
          "size": {
            "value": 1,
            "unit": "كغ"
          },
          "unitsPerCarton": 1,
          "price": 9.0,
          "image": "",
          "available": true,
          "sourcePage": 8,
          "packageType": "كيلو",
          "priceUnit": "kg",
          "expectedImage": "assets/images/products/turmeric/turmeric-1kg.webp"
        }
      ]
    },
    {
      "id": "ground-pepper",
      "name": "فليفلة مطحونة",
      "category": "dry",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-31",
          "size": {
            "value": 1,
            "unit": "كغ"
          },
          "unitsPerCarton": 1,
          "price": 8.5,
          "image": "",
          "available": true,
          "sourcePage": 8,
          "packageType": "كيلو",
          "priceUnit": "kg",
          "expectedImage": "assets/images/products/ground-pepper/ground-pepper-1kg.webp"
        }
      ]
    },
    {
      "id": "gum-arabic",
      "name": "صمغ عربي",
      "category": "dry",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-33",
          "size": {
            "value": 1,
            "unit": "كغ"
          },
          "unitsPerCarton": 1,
          "price": 27.0,
          "image": "",
          "available": true,
          "sourcePage": 8,
          "packageType": "كيلو",
          "priceUnit": "kg",
          "expectedImage": "assets/images/products/gum-arabic/gum-arabic-1kg.webp"
        }
      ]
    },
    {
      "id": "cinnamon-sticks",
      "name": "قرفة عيدان",
      "category": "dry",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-24",
          "size": {
            "value": 125,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 22.0,
          "image": "",
          "available": true,
          "sourcePage": 7,
          "packageType": "عبوة",
          "unitPrice": 1.83,
          "expectedImage": "assets/images/products/cinnamon-sticks/cinnamon-sticks-125g.webp"
        }
      ]
    },
    {
      "id": "cinnamon-cigars",
      "name": "قرفة سيجار",
      "category": "dry",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-25",
          "size": {
            "value": 150,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 28.0,
          "image": "",
          "available": true,
          "sourcePage": 7,
          "packageType": "عبوة",
          "unitPrice": 2.33,
          "expectedImage": "assets/images/products/cinnamon-cigars/cinnamon-cigars-150g.webp"
        }
      ]
    },
    {
      "id": "cumin",
      "name": "كمون",
      "category": "dry",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P2-06",
          "size": {
            "value": 350,
            "unit": "غ"
          },
          "unitsPerCarton": 24,
          "price": 36.0,
          "image": "",
          "available": true,
          "sourcePage": 8,
          "packageType": "كرتون",
          "unitPrice": 1.5,
          "expectedImage": "assets/images/products/cumin/cumin-350g.webp"
        }
      ]
    },
    {
      "id": "sidr-leaves",
      "name": "ورق سدر",
      "category": "herbs",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-32",
          "size": {
            "value": 1,
            "unit": "كغ"
          },
          "unitsPerCarton": 1,
          "price": 16.0,
          "image": "",
          "available": true,
          "sourcePage": 9,
          "packageType": "كيلو",
          "priceUnit": "kg",
          "expectedImage": "assets/images/products/sidr-leaves/sidr-leaves-1kg.webp"
        }
      ]
    },
    {
      "id": "bay-leaves",
      "name": "ورق غار",
      "category": "herbs",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-34",
          "size": {
            "value": 70,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 18.0,
          "image": "",
          "available": true,
          "sourcePage": 9,
          "packageType": "عبوة",
          "unitPrice": 1.5,
          "expectedImage": "assets/images/products/bay-leaves/bay-leaves-70g.webp"
        }
      ]
    },
    {
      "id": "dried-lemon",
      "name": "ليمون مجفف",
      "category": "herbs",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-35",
          "size": {
            "value": 130,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 18.0,
          "image": "",
          "available": true,
          "sourcePage": 9,
          "packageType": "عبوة",
          "unitPrice": 1.5,
          "expectedImage": "assets/images/products/dried-lemon/dried-lemon-130g.webp"
        }
      ]
    },
    {
      "id": "molokhia",
      "name": "ملوخية",
      "category": "herbs",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P3-21",
          "size": {
            "value": 200,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 30.0,
          "image": "",
          "available": true,
          "sourcePage": 9,
          "packageType": "كرتون",
          "unitPrice": 2.5,
          "expectedImage": "assets/images/products/molokhia/molokhia-200g.webp"
        }
      ]
    },
    {
      "id": "semolina",
      "name": "سميد",
      "category": "rice",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-28",
          "size": {
            "value": 1,
            "unit": "كغ"
          },
          "unitsPerCarton": 1,
          "price": 10.0,
          "image": "",
          "available": true,
          "sourcePage": 10,
          "packageType": "كيلو",
          "priceUnit": "kg",
          "expectedImage": "assets/images/products/semolina/semolina-1kg.webp"
        }
      ]
    },
    {
      "id": "starch",
      "name": "نشا",
      "category": "rice",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P3-23",
          "size": {
            "value": 350,
            "unit": "غ"
          },
          "unitsPerCarton": 24,
          "price": 32.0,
          "image": "",
          "available": true,
          "sourcePage": 10,
          "packageType": "كرتون",
          "unitPrice": 1.33,
          "expectedImage": "assets/images/products/starch/starch-350g.webp"
        }
      ]
    },
    {
      "id": "green-pistachios",
      "name": "فستق أخضر",
      "category": "seeds",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P1-27",
          "size": {
            "value": 150,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 20.0,
          "image": "",
          "available": true,
          "sourcePage": 11,
          "packageType": "عبوة",
          "unitPrice": 1.67,
          "expectedImage": "assets/images/products/green-pistachios/green-pistachios-150g.webp"
        }
      ]
    },
    {
      "id": "orange-blossom-water",
      "name": "ماء زهر",
      "category": "cooking-flavors",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P3-14",
          "size": {
            "value": 250,
            "unit": "مل"
          },
          "unitsPerCarton": 12,
          "price": 15.0,
          "image": "",
          "available": true,
          "sourcePage": 12,
          "packageType": "زجاج",
          "unitPrice": 1.25,
          "expectedImage": "assets/images/products/orange-blossom-water/orange-blossom-water-250ml.webp"
        }
      ]
    },
    {
      "id": "rose-water",
      "name": "ماء ورد",
      "category": "cooking-flavors",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P3-15",
          "size": {
            "value": 250,
            "unit": "مل"
          },
          "unitsPerCarton": 12,
          "price": 15.0,
          "image": "",
          "available": true,
          "sourcePage": 12,
          "packageType": "زجاج",
          "unitPrice": 1.25,
          "expectedImage": "assets/images/products/rose-water/rose-water-250ml.webp"
        }
      ]
    },
    {
      "id": "apple-vinegar",
      "name": "خل تفاح",
      "category": "condiments",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P3-16",
          "size": {
            "value": 250,
            "unit": "مل"
          },
          "unitsPerCarton": 12,
          "price": 18.0,
          "image": "",
          "available": true,
          "sourcePage": 13,
          "packageType": "زجاج",
          "unitPrice": 1.5,
          "expectedImage": "assets/images/products/apple-vinegar/apple-vinegar-250ml.webp"
        }
      ]
    },
    {
      "id": "white-vinegar",
      "name": "خل أبيض",
      "category": "condiments",
      "featured": false,
      "available": true,
      "variants": [
        {
          "sku": "P3-17",
          "size": {
            "value": 900,
            "unit": "مل"
          },
          "unitsPerCarton": 12,
          "price": 13.0,
          "image": "",
          "available": true,
          "sourcePage": 13,
          "packageType": "بلاستيك",
          "unitPrice": 1.08,
          "expectedImage": "assets/images/products/white-vinegar/white-vinegar-900ml.webp"
        }
      ]
    }
  ]
};
