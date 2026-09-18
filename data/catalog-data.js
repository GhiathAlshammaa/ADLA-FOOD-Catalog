// Edit catalog content here. Keep product ids stable; SKUs identify variants within each product.
// Images: use a normal relative path, or leave empty for the existing placeholder.
// Availability defaults to true; false prevents adding the product/variant.
// featured is editorial metadata; the current grid continues to show all products.
// whatsappNumber is reserved for future activation; sending remains disabled.
window.catalogData = {
  "settings": {
    "brandName": "ADLA FOOD",
    "subtitle": "كتالوغ الطلب المباشر",
    "pageTitle": "ADLA FOOD — كتالوج الطلب المباشر",
    "logo": "assets/logo/adla-food.png",
    "whatsappNumber": "",
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
      "orderNote": "إرسال الطلب غير مفعّل في النسخة التجريبية. لم يتم إرسال أي طلب.",
      "product": "منتج",
      "products": "منتجات"
    },
    "unitNames": {
      "غ": "غرام"
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
      "name": "مخللات",
      "order": 1
    },
    {
      "id": "sauces",
      "name": "صلصات",
      "order": 2
    },
    {
      "id": "dry",
      "name": "مواد جافة",
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
      "name": "أرز وحبوب",
      "order": 6
    },
    {
      "id": "legumes",
      "name": "بقوليات",
      "order": 7
    },
    {
      "id": "canned",
      "name": "معلبات",
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
          "sku": "P1-07",
          "size": {
            "value": 660,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 18,
          "image": "",
          "available": true
        },
        {
          "sku": "P1-03",
          "size": {
            "value": 1350,
            "unit": "غ"
          },
          "unitsPerCarton": 6,
          "price": 22,
          "image": "",
          "available": true
        },
        {
          "sku": "P1-01",
          "size": {
            "value": 2800,
            "unit": "غ"
          },
          "unitsPerCarton": 4,
          "price": 26,
          "image": "",
          "available": true
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
          "price": 50,
          "image": "",
          "available": true
        },
        {
          "sku": "P3-10",
          "size": {
            "value": 1000,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 72,
          "image": "",
          "available": true
        },
        {
          "sku": "P3-11",
          "size": {
            "value": 2800,
            "unit": "غ"
          },
          "unitsPerCarton": 4,
          "price": 64,
          "image": "",
          "available": true
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
          "price": 24,
          "image": "",
          "available": true
        },
        {
          "sku": "P2-02",
          "size": {
            "value": 1000,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 33,
          "image": "",
          "available": true
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
          "price": 32,
          "image": "",
          "available": true
        },
        {
          "sku": "P3-05",
          "size": {
            "value": 700,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 50,
          "image": "",
          "available": true
        },
        {
          "sku": "P3-08",
          "size": {
            "value": 1800,
            "unit": "غ"
          },
          "unitsPerCarton": 6,
          "price": 58,
          "image": "",
          "available": true
        }
      ]
    },
    {
      "id": "pickled-peppers",
      "name": "مخلل فليفلة",
      "category": "pickles",
      "searchTerms": [
        "فلفل"
      ],
      "featured": true,
      "available": true,
      "variants": [
        {
          "sku": "P1-06",
          "size": {
            "value": 660,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 18,
          "image": "",
          "available": true
        },
        {
          "sku": "P1-07",
          "size": {
            "value": 1000,
            "unit": "غ"
          },
          "unitsPerCarton": 12,
          "price": 30,
          "image": "",
          "available": true
        },
        {
          "sku": "P1-08",
          "size": {
            "value": 2800,
            "unit": "غ"
          },
          "unitsPerCarton": 4,
          "price": 34,
          "image": "",
          "available": true
        }
      ]
    }
  ]
};
