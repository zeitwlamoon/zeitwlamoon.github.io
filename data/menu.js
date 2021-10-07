const menu = {
    breakfast: {
        name: 'Breakfast',
        arabic_name: 'الفطار',
        notes: 'The breakfast is available till 1 PM',
        images: {
            'alexandrian-beans': 'فول إسكندراني',
            'pastrami-falafel': 'فلافل بالبسطرمة',
            'yogurt-with-apple-and-honey-salad': 'زبادي بالتفاح و العسل'
        },
        meals: {
            'healthy-breakfast': {
                name: 'Healthy Breakfast',
                arabic_name: 'فطار صحي',
                price: '55',
                description:
                    'Labneh with Olive Oil and Zaatar, Scrambled Eggs with Olives, Yoghurt with Apple and Honey, Orange Juice',
                arabic_description:
                    'لبنة بزيت الزيتون و الزعتر، بيض مخفوق بالزيتون، زبادي بالتفاح و العسل، عصير برتقال'
            },

            'alexandrian-breakfast': {
                name: 'Alexandrian Breakfast',
                arabic_name: 'فطار إسكندراني',
                price: '55',
                description:
                    'Falafel Pastrami, Boiled Eggs fried in Ghee, Alexandrian Fava Beans, Tea',
                arabic_description: 'فلافل بالبسطرمة، بيض مدحرج، فول إسكندراني، شاي'
            },

            'full-stomach-breakfast': {
                name: 'Full Stomach Breakfast',
                arabic_name: 'فطار متين',
                price: '55',
                description: 'Fava Beans with Butter, Egg with Pastrami, Cheese, Falafel, Coffee',
                arabic_description: 'فول بالزبدة، بيض بالبسطرمة، فلافل بالجبنة، قهوة'
            },

            'basic-breakfast': {
                name: 'Basic Breakfast',
                arabic_name: 'فطار تقليدي',
                price: '35',
                description: 'Fava Beans with Lemon and Oil, Falafel, Cheese, Tea',
                arabic_description: 'فول بالزيت والليمون، فلافل، جبنة، شاي'
            },

            'sweet-tooth-breakfast': {
                name: 'Sweet Tooth Breakfast',
                arabic_name: 'الفطار الحلو',
                price: '55',
                description: 'Halawa and Cream, Jam, Grilled Halloum, Orange Juice',
                arabic_description: 'حلاوة بالقشطة، مربى، حلوم مشوي، عصير برتقال'
            },

            'zeit-w-lamoon-breakfast': {
                name: 'Zeit W Lamoon Breakfast',
                arabic_name: 'فطار زيت و ليمون',
                price: '65',
                description:
                    'Fava beans Zeit W Lamoon Special, Cheese and Tomato, Spicy Stuffed Falafel, Cheesy French Fries, Tea with Mint',
                arabic_description:
                    'فول مطعم زيت و ليمون، فلافل محشية (حارة)، بطاطس محمرة بالجبنة، شاي نعناع، جبنة بالطماطم'
            }
        }
    },

    appetizer: {
        name: 'Appetizer',
        arabic_name: 'مقبلات',
        images: {
            'marinated-tomato': 'طماطم متبلة'
        },
        meals: {
            'baba-ghanouj': {
                name: 'Baba Ghanouj',
                arabic_name: 'بابا غنوج',
                price: '22',
                description: '',
                arabic_description: ''
            },

            hummus: {
                name: 'Hummus',
                arabic_name: 'حمص',
                price: '18',
                description: '',
                arabic_description: ''
            },

            sambosa: {
                name: 'Sambosa Cheese and Pastrami',
                arabic_name: 'سمبوسة جبنة و بسطرمة',
                price: '16',
                description: '',
                arabic_description: ''
            },

            taheena: {
                name: 'Taheena',
                arabic_name: 'طحينة',
                price: '16',
                description: '',
                arabic_description: ''
            },

            'chicken-liver-pomegranate': {
                name: 'Chicken Livers with Pomegranate Molasses',
                arabic_name: 'كبدة فراخ بدبس الرمان',
                price: '26',
                description: '',
                arabic_description: ''
            },

            'chicken-liver-mazalika': {
                name: 'Chicken Livers with Mazalika Style',
                arabic_name: 'كبدة فراخ مزاليكا',
                price: '26',
                description: '',
                arabic_description: ''
            },

            'french-fries': {
                name: 'French Fries',
                arabic_name: 'بطاطس محمرة',
                price: '14',
                description: '',
                arabic_description: ''
            },

            'melted-cheese-fries': {
                name: 'Melted Cheese Fries',
                arabic_name: 'بطاطس بالجبنة السايحة',
                price: '21',
                description: '',
                arabic_description: ''
            },

            'marinated-tomato': {
                name: 'Marinated Tomato',
                arabic_name: 'طماطم متبلة',
                price: '16',
                description: '',
                arabic_description: ''
            }
        }
    },

    salad: {
        name: 'Salad',
        arabic_name: 'السلطات',
        images: {
            'caesar-salad': 'سلطة سيزر',
            'rocca-salad': 'سلطة جرجير',
            'yogurt-with-apple-and-honey-salad': 'سلطة زبادي بالعسل و التفاح',
            'yogurt-with-cucumber-salad': 'سلطة زبادي بالخيار',
            tabouleh: 'تبولة'
        },
        meals: {
            'green-salad': {
                name: 'Green Salad',
                arabic_name: 'سلطة بلدي',
                price: '22',
                description: '',
                arabic_description: ''
            },

            'caesar-salad': {
                name: 'Caesar Salad',
                arabic_name: 'سلطة سيزر',
                price: '35',
                description: '',
                arabic_description: ''
            },

            tabouleh: {
                name: 'Tabouleh',
                arabic_name: 'تبولة',
                price: '24',
                description: '',
                arabic_description: ''
            },

            fattouch: {
                name: 'Fattouch',
                arabic_name: 'فتوش',
                price: '24',
                description: '',
                arabic_description: ''
            },

            'rocca-salad': {
                name: 'Rocca Salad',
                arabic_name: 'سلطة جرجير',
                price: '28',
                description: '',
                arabic_description: ''
            },

            'yoghurt-salad-cucumber': {
                name: 'Yoghurt Salad with Cucumber',
                arabic_name: 'سلطة زبادي بالخيار',
                price: '16',
                description: '',
                arabic_description: ''
            },

            'yoghurt-salad-apple': {
                name: 'Yoghurt Salad with Apple and Honey',
                arabic_name: 'سلطة زبادي بالعسل و التفاح',
                price: '20',
                description: '',
                arabic_description: ''
            }
        }
    },

    soup: {
        name: 'Soup',
        arabic_name: 'شوربة',
        meals: {
            'chicken-cream': {
                name: 'Chicken Cream and Mushroom',
                arabic_name: 'شوربة كريمة الدجاج و الفطر',
                price: '25',
                description: '',
                arabic_description: ''
            },

            orzo: {
                name: 'Orzo',
                arabic_name: 'شوربة لسان عصفور',
                price: '15',
                description: '',
                arabic_description: ''
            },

            kawarea: {
                name: 'Kawarea',
                arabic_name: 'شوربة كوارع',
                price: '32',
                description: '',
                arabic_description: ''
            },

            'vegetable-soup': {
                name: 'Vegatable Soup',
                arabic_name: 'شوربة خضار',
                price: '20',
                description: '',
                arabic_description: ''
            },

            'pigeon-soup': {
                name: 'Pigeon Soup',
                arabic_name: 'شوربة حمام',
                price: '35',
                description: '',
                arabic_description: ''
            }
        }
    },

    street: {
        name: 'Street Food Corner',
        arabic_name: 'يالا شعبي',
        images: {
            'pastrami-falafel': 'فلافل بسطرمة',
            'sausage-beans': 'فول بالسجق',
            'red-sauce-beans': 'فول بالصلصة',
            'eggplant-with-vinegar-and-garlic': 'باذنجان بالخل والثوم',
            'breaded-kawarea': 'كوارع بانيه',
            mesakaa: 'مسقعة'
        },
        meals: {
            falafel: {
                name: 'Falafel (Sandwich - Plate)',
                arabic_name: 'فلافل (سندويتش - طبق)',
                price: '10 - 16',
                description: '',
                arabic_description: ''
            },

            'stuffed-falafel': {
                name: 'Stuffed Falafel',
                arabic_name: 'فلافل محشية',
                price: '11 - 19',
                description: '',
                arabic_description: ''
            },

            'falafel-pastrami': {
                name: 'Falafel with Pastrami',
                arabic_name: 'فلافل بسطرمة',
                price: '13 - 21',
                description: '',
                arabic_description: ''
            },

            'beans-oil': {
                name: 'Fava Beans with Oil',
                arabic_name: 'فول بالزيت',
                price: '10 - 16',
                description: '',
                arabic_description: ''
            },

            'beans-sauce': {
                name: 'Fava Beans with Red Sauce',
                arabic_name: 'فول بالصلصة',
                price: '10 - 16',
                description: '',
                arabic_description: ''
            },

            'beans-sausage': {
                name: 'Fava Beans with Sausage',
                arabic_name: 'فول بالسجق',
                price: '13 - 22',
                description: '',
                arabic_description: ''
            },

            'beans-ghee': {
                name: 'Fava Beans with Ghee',
                arabic_name: 'فول بالسمنة',
                price: '10 - 16',
                description: '',
                arabic_description: ''
            },

            'beans-alexandian': {
                name: 'Alexandrian Fava Beans',
                arabic_name: 'فول إسكندراني',
                price: '10 - 16',
                description: '',
                arabic_description: ''
            },

            'beans-zwl': {
                name: 'Fava Beans Zeit w Lamoon Style',
                arabic_name: 'فول مطعم زيت وليمون',
                price: '10 - 16',
                description: '',
                arabic_description: ''
            },

            eggplant: {
                name: 'Eggplant with Vinegar and Garlic',
                arabic_name: 'باذنجان بالخل والثوم',
                price: '12 - 22',
                description: '',
                arabic_description: ''
            },

            mesakaa: {
                name: 'Mesakaa',
                arabic_name: 'مسقعة',
                price: '12 - 24',
                description: '',
                arabic_description: ''
            },

            'egg-pastrami': {
                name: 'Egg with Pastrami',
                arabic_name: 'بيض بالبسطرمة',
                price: '15 - 27',
                description: '',
                arabic_description: ''
            },

            shakshouka: {
                name: 'Shakshouka',
                arabic_name: 'شكشوكة',
                price: '14 - 24',
                description: '',
                arabic_description: ''
            },

            'mashed-potato': {
                name: 'Mashed Potato',
                arabic_name: 'بطاطس مهروسة',
                price: '10 - 16',
                description: '',
                arabic_description: ''
            },

            'fries-cheese': {
                name: 'French Fries with Cheese',
                arabic_name: 'بطاطس محمرة بالجبنة',
                price: '12 - 21',
                description: '',
                arabic_description: ''
            },

            'cheese-tomato': {
                name: 'Cheese and Tomato',
                arabic_name: 'جبنة و طماطم',
                price: '10 - 16',
                description: '',
                arabic_description: ''
            },

            'labaneh-zaatar': {
                name: 'Labaneh and Zaatar',
                arabic_name: 'لبنة وزعتر',
                price: '10 - 16',
                description: '',
                arabic_description: ''
            },

            'baba-ghanouj-street': {
                name: 'Baba Ghanouj',
                arabic_name: 'بابا غنوج',
                price: '14 - 22',
                description: '',
                arabic_description: ''
            },

            sakalans: {
                name: 'Sakalans',
                arabic_name: 'سكالانس',
                price: '17',
                description: 'Halawa with Cream',
                arabic_description: 'حلاوة بالقشطة'
            },

            dynamite: {
                name: 'Dynamite',
                arabic_name: 'ديناميت',
                price: '17',
                description: 'Fava Beans, Boiled Eggs, Eggplant, Falafel and Fries',
                arabic_description: 'فول، بيض مسلوق، فلافل، باذنجان، بطاطس محمرة'
            },

            'fried-mix': {
                name: 'Fried Mix',
                arabic_name: 'مقالي مشكلة',
                price: '15 - 27',
                description: 'Cauliflower, Eggplant, Fries',
                arabic_description: 'قرنبيط، باذنجان، بطاطس'
            },

            'alexandrian-livers': {
                name: 'Alexandrian Livers',
                arabic_name: 'كبدة إسكندراني',
                price: '16 - 38',
                description: '',
                arabic_description: ''
            },

            'alexandrian-sausage': {
                name: 'Alexandrian Sausage',
                arabic_name: 'سجق إسكندراني',
                price: '16 - 38',
                description: '',
                arabic_description: ''
            },

            'breaded-brain': {
                name: 'Breaded Brain',
                arabic_name: 'مخ بانيه',
                price: '16 - 38',
                description: '',
                arabic_description: ''
            },

            'breaded-kawarea': {
                name: 'Breaded Kawarea',
                arabic_name: 'كوارع بانيه',
                price: '20 - 39',
                description: '',
                arabic_description: ''
            }
        }
    },

    sandwiches: {
        name: 'Zeit W Lamoon Sandwiches',
        arabic_name: 'سندوتشات زيت و ليمون',
        images: {
            hawawshi: 'حواوشي'
        },
        meals: {
            'grilled-sausage': {
                name: 'Grilled Sausage',
                arabic_name: 'سجق مشوي',
                price: '24',
                description: '',
                arabic_description: ''
            },

            'chicken-zinger': {
                name: 'Chicken Zinger',
                arabic_name: 'دجاج زنجر',
                price: '24',
                description: '',
                arabic_description: ''
            },

            'chicken-paneed': {
                name: 'Paneed Chicken',
                arabic_name: 'فراخ بانيه',
                price: '24',
                description: '',
                arabic_description: ''
            },

            kofta: {
                name: 'Kofta',
                arabic_name: 'كفتة لحم',
                price: '26',
                description: '',
                arabic_description: ''
            },

            'shish-tawook': {
                name: 'Shish Tawook',
                arabic_name: 'شيش طاووق',
                price: '24',
                description: '',
                arabic_description: ''
            },

            'grilled-meat': {
                name: 'Grilled Meat',
                arabic_name: 'لحم مشوي',
                price: '28',
                description: '',
                arabic_description: ''
            },

            tarb: {
                name: 'Tarb',
                arabic_name: 'طرب',
                price: '27',
                description: '',
                arabic_description: ''
            },

            'fried-shrimps': {
                name: 'Fried Shrimps',
                arabic_name: 'جمبري مقلي',
                price: '45',
                description: '',
                arabic_description: ''
            },

            'beef-fajita': {
                name: 'Beef Fajita',
                arabic_name: 'فاهيتا لحم',
                price: '25',
                description: '',
                arabic_description: ''
            },

            'chicken-fajita': {
                name: 'Chicken Fajita',
                arabic_name: 'فاهيتا دجاج',
                price: '25',
                description: '',
                arabic_description: ''
            },

            hawawshi: {
                name: 'Hawawshi',
                arabic_name: 'حواوشي',
                price: '37',
                description: '',
                arabic_description: ''
            }
        }
    },

    shawarma: {
        name: 'Shawarma',
        arabic_name: 'شاورما',
        images: {
            'beef-shawerma-sandwich': 'شاورما لحم',
            'egyptian-style-beef-shawarma-in-a-bun': 'شاورما لحم عيش كايزر'
        },
        meals: {
            'beef-shawarma-sandwich-s': {
                name: 'Beef Shawarma Sandwich (small)',
                arabic_name: 'شاورما لحم',
                price: '13',
                description: 'Small Arabic Bread',
                arabic_description: 'خبز عربي صغير'
            },

            'chicken-shawarma-sandwich-s': {
                name: 'Chicken Shawarma Sandwich (small)',
                arabic_name: 'شاورما دجاج',
                price: '11',
                description: 'Small Arabic Bread',
                arabic_description: 'خبز عربي صغير'
            },

            'beef-shawarma-sandwich-l': {
                name: 'Beef Shawarma Sandwich (large)',
                arabic_name: 'شاورما لحم',
                price: '21',
                description: 'Large Arabic Bread',
                arabic_description: 'خبز عربي كبير'
            },

            'chicken-shawarma-sandwich-l': {
                name: 'Chicken Shawarma Sandwich (large)',
                arabic_name: 'شاورما دجاج',
                price: '20',
                description: 'Large Arabic Bread',
                arabic_description: 'خبز عربي كبير'
            },

            'beef-shawarma-sandwich-f': {
                name: 'Beef Shawarma Sandwich with Fries (Saj Bread)',
                arabic_name: 'شاورما لحم مع بطاطس',
                price: '39',
                description: 'Saj Bread',
                arabic_description: 'خبز صاج'
            },

            'chicken-shawarma-sandwich-f': {
                name: 'Chicken Shawarma Sandwich with Fries (Saj Bread)',
                arabic_name: 'شاورما دجاج مع بطاطس',
                price: '37',
                description: 'Saj Bread',
                arabic_description: 'خبز صاج'
            },

            'beef-shawarma-platter': {
                name: 'Beef Shawarma Platter',
                arabic_name: 'طبق شاورما لحم',
                price: '40',
                description: '',
                arabic_description: ''
            },

            'chicken-shawarma-platter': {
                name: 'Chicken Shawarma Platter',
                arabic_name: 'طبق شاورما دجاج',
                price: '37',
                description: '',
                arabic_description: ''
            },

            'mix-shawarma-platter': {
                name: 'Mix Shawarma Platter',
                arabic_name: 'طبق شاورما ميكس',
                price: '43',
                description: '',
                arabic_description: ''
            },

            'beef-shawarma-bun': {
                name: 'Beef Shawarma in a Bun',
                arabic_name: 'شاورما لحم عيش كايزر',
                price: '13',
                description: 'Egyptian Style',
                arabic_description: 'الطريقة المصرية'
            }
        }
    },

    koshary: {
        name: 'Koshary',
        arabic_name: 'كشري',
        images: {
            koshary: 'كشري',
            'liver-koshary': 'كشري بالكبدة',
            'beef-shawerma-koshary': '(دجاج) كشري بالشاورما',
            'chicken-shawerma-koshary': 'كشري بالشاورما (لحم)'
        },
        meals: {
            'koshary-normal': {
                name: 'Koshary',
                arabic_name: 'كشري',
                price: '22',
                description: '',
                arabic_description: ''
            },

            'koshary-livers': {
                name: 'Koshary with Livers',
                arabic_name: 'كشري بالكبدة',
                price: '33',
                description: '',
                arabic_description: ''
            },

            'koshary-shawarma': {
                name: 'Koshary with Shawarma',
                arabic_name: 'كشري بالشاورما',
                price: '33',
                description: '',
                arabic_description: ''
            },

            'koshary-sausage': {
                name: 'Koshary with Sausage',
                arabic_name: 'كشري بالسجق',
                price: '33',
                description: '',
                arabic_description: ''
            },

            'koshary-meat': {
                name: 'Koshary with Meat',
                arabic_name: 'كشري باللحم المفروم',
                price: '33',
                description: '',
                arabic_description: ''
            }
        }
    },

    pasta: {
        name: 'Pasta',
        arabic_name: 'مكرونات',
        images: {
            'white-sauce-pasta-with-chicken-and-mushroom': 'مكرونة المشروم و الدجاج بصوص الكريمة',
            'spaghetti-bolognese': 'سباجيتي بولونيز',
            'egyptian-bechamel': 'مكرونة باشاميل'
        },
        meals: {
            bolognese: {
                name: 'Spaghetti Bolognese',
                arabic_name: 'سباجيتي بولونيز',
                price: '38',
                description: '',
                arabic_description: ''
            },

            'white-sauce': {
                name: 'White Sauce Pasta with Chicken and Mushroom',
                arabic_name: 'مكرونة المشروم و الدجاج بصوص الكريمة',
                price: '43',
                description: '',
                arabic_description: ''
            },

            negresco: {
                name: 'Chicken Negresco Pasta',
                arabic_name: 'نجريسكو',
                price: '38',
                description: '',
                arabic_description: ''
            },

            bashamel: {
                name: 'Egyptian Style Bechamel Pasta',
                arabic_name: 'مكرونة باشاميل',
                price: '38',
                description: '',
                arabic_description: ''
            }
        }
    },

    rice: {
        name: 'Rice',
        arabic_name: 'أرز',
        images: {
            'liver-rice': 'أرز بالكبد'
        },
        meals: {
            'white-rice': {
                name: 'White Rice',
                arabic_name: 'أرز أبيض',
                price: '14',
                description: '',
                arabic_description: ''
            },

            'white-rice-vermicelli': {
                name: 'White Rice and Vermicelli',
                arabic_name: 'أرز بالشعرية',
                price: '14',
                description: '',
                arabic_description: ''
            },

            'rice-nuts': {
                name: 'Rice with Nuts',
                arabic_name: 'أرز بالمكسرات',
                price: '20',
                description: '',
                arabic_description: ''
            },

            'rice-livers': {
                name: 'Rice with Livers',
                arabic_name: 'أرز بالكبد',
                price: '20',
                description: '',
                arabic_description: ''
            },

            basmati: {
                name: 'Plain Basmati Rice',
                arabic_name: 'أرز بسمتي سادة',
                price: '14',
                description: '',
                arabic_description: ''
            }
        }
    },

    'main-dish': {
        name: 'Main Dish',
        arabic_name: 'الأطباق الرئيسية',
        images: {
            'potato-tajine': 'بطاطس في الفرن',
            molokheya: 'ملوخية',
            'orzo-with-meat-tajine': 'طاجن لسان عصفور باللحم',
            'akawi-with-onion-tajine': 'طاجن عكاوي بالبصل',
            'egyptian-beef-piccata-with-mushroom': 'بيكاتا لحم صوص مشروم',
            'stuffed-pigeon': 'حمام محشي',
            mombar: 'ممبار'
        },
        meals: {
            'oven-potato': {
                name: 'Oven Potato',
                arabic_name: 'بطاطس في الفرن',
                price: '30 - 40 - 45',
                description: 'Plain - Chicken - Meat',
                arabic_description: 'سادة - بالدجاج - باللحم'
            },

            okra: {
                name: 'Okra',
                arabic_name: 'بامية',
                price: '30 - 45',
                description: 'Plain - Meat',
                arabic_description: 'سادة - باللحم'
            },

            molokheya: {
                name: 'Molokheya',
                arabic_name: 'ملوخية',
                price: '25 - 35 - 45',
                description: 'Plain - Chicken - Meat',
                arabic_description: 'سادة - بالدجاج - باللحم'
            },

            'moskaa-bechamel': {
                name: 'Moskaa Bechamel',
                arabic_name: 'مسقعة بشاميل',
                price: '45',
                description: '',
                arabic_description: ''
            },

            'chicken-curry': {
                name: 'Chicken Curry with Pineapple',
                arabic_name: 'دجاج بالكاري و الأناناس',
                price: '50',
                description: '',
                arabic_description: ''
            },

            'chicken-escalope': {
                name: 'Chicken Escalope',
                arabic_name: 'أسكالوب دجاج',
                price: '45',
                description: '',
                arabic_description: ''
            },

            'orzo-chicken': {
                name: 'Tajine Orzo with Chicken',
                arabic_name: 'طاجن لسان عصفور بالدجاج',
                price: '40',
                description: '',
                arabic_description: ''
            },

            'orzo-meat': {
                name: 'Tajine Orzo with Meat',
                arabic_name: 'طاجن لسان عصفور باللحم',
                price: '45',
                description: '',
                arabic_description: ''
            },

            'orzo-akawi': {
                name: 'Tajine Orzo with Akawi',
                arabic_name: 'طاجن لسان عصفور بالعكاوي',
                price: '45',
                description: '',
                arabic_description: ''
            },

            'akawi-onion': {
                name: 'Tajine Akawi with Onion',
                arabic_name: 'طاجن عكاوي بالبصل',
                price: '45',
                description: '',
                arabic_description: ''
            },

            'lamb-mouza': {
                name: 'Tajine Lamb Mouza',
                arabic_name: 'طاجن موزة ضاني',
                price: '70',
                description: '',
                arabic_description: ''
            },

            'lamb-mouza-grilled': {
                name: 'Grilled Lamb Mouza',
                arabic_name: 'موزة ضاني مشوية',
                price: '70',
                description: '',
                arabic_description: ''
            },

            'beef-piccata': {
                name: 'Beef Picatta with Mushroom',
                arabic_name: 'بيكاتا لحم صوص مشروم',
                price: '60',
                description: '',
                arabic_description: ''
            },

            'chicken-picatta': {
                name: 'Chicken Picatta with Mushroom',
                arabic_name: 'بيكاتا دجاج صوص مشروم',
                price: '55',
                description: '',
                arabic_description: ''
            },

            'stuffed-pigeon': {
                name: 'Stuffed Pigeon',
                arabic_name: 'حمام محشي',
                price: '60 - 110',
                description: 'Single - Double',
                arabic_description: 'فرد - زوج'
            },

            'grilled-pigeon': {
                name: 'Grilled Pigeon',
                arabic_name: 'حمام مشوي',
                price: '60 - 110',
                description: 'Single - Double',
                arabic_description: 'فرد - زوج'
            },

            'rokak-meat': {
                name: 'Rokak with Minced Meat',
                arabic_name: 'رقاق باللحم المفروم',
                price: '38',
                description: '',
                arabic_description: ''
            },

            mombar: {
                name: 'Mombar - Rice Stuffed Sausage',
                arabic_name: 'ممبار',
                price: '35',
                description: '',
                arabic_description: ''
            },

            'vine-leaves': {
                name: 'Vine Leaves Stuffed with Seasoned Rice',
                arabic_name: 'محشي ورق عنب',
                price: '30',
                description: '',
                arabic_description: ''
            },

            'stuffed-cabbage': {
                name: 'Stuffed Cabbage',
                arabic_name: 'محشي كرنب',
                price: '30',
                description: '',
                arabic_description: ''
            }
        }
    },

    grill: {
        name: 'From The Grill',
        arabic_name: 'من الشواية',
        images: {
            'shish-tawook': 'شيش طاووق',
            tarb: 'طرب'
        },
        meals: {
            'meat-kofta': {
                name: 'Meat Kofta (Plate - 0.5 kg - 1 kg)',
                arabic_name: 'كفتة لحم (طبق - 0.5 كلغ - 1 كلغ)',
                price: '60 - 96 - 165',
                description: '',
                arabic_description: ''
            },

            'meat-kebab': {
                name: 'Meat Kebab',
                arabic_name: 'كباب لحم',
                price: '65 - 104 - 170',
                description: '',
                arabic_description: ''
            },

            'shish-tawook-grill': {
                name: 'Shish Tawook',
                arabic_name: 'شيش طاووق',
                price: '45 - 72 - 115',
                description: '',
                arabic_description: ''
            },

            'tarb-grill': {
                name: 'Tarb',
                arabic_name: 'طرب',
                price: '80 - 128 - 185',
                description: '',
                arabic_description: ''
            },

            'mix-grill': {
                name: 'Mix Grill',
                arabic_name: 'ميكس جريل',
                price: '70 - 112 - 170',
                description: '',
                arabic_description: ''
            },

            'kebab-kofta': {
                name: 'Kebab and Kofta',
                arabic_name: 'كباب وكفتة',
                price: '65 - 104 - 170',
                description: '',
                arabic_description: ''
            },

            'kofta-tarb': {
                name: 'Kofta and Tarb',
                arabic_name: 'كفتة وطرب',
                price: '75 - 120 - 180',
                description: '',
                arabic_description: ''
            },

            'chops-tarb': {
                name: 'Lamb Chops and Tarb',
                arabic_name: 'ريش وطرب',
                price: '75 - 120 - 180',
                description: '',
                arabic_description: ''
            },

            ribs: {
                name: 'Ribs',
                arabic_name: 'ريش',
                price: '80 - 128 - 185',
                description: '',
                arabic_description: ''
            },

            'half-grilled-chicken-boneless': {
                name: 'Boneless Half-Grilled Chicken',
                arabic_name: 'نصف دجاجة مسحب',
                price: '41',
                description: '',
                arabic_description: ''
            },

            'half-grilled-chicken': {
                name: 'Half-Grilled Chicken',
                arabic_name: 'نصف دجاجة مشوية (بالعظم)',
                price: '35',
                description: '',
                arabic_description: ''
            },

            'whole-grilled-chicken': {
                name: 'Whole Grilled Chicken',
                arabic_name: 'دجاجة مشوية',
                price: '55',
                description: '',
                arabic_description: ''
            }
        }
    },

    fatteh: {
        name: 'Fatteh',
        arabic_name: 'فتة',
        images: {
            'chicken-fatteh-with-yogurt': 'فتة فراخ بالزبادي',
            'egyptian-style-fatteh-with-garlic-and-vinegar-and-lamb-shank':
                'فتة مصري بالخل و الثوم مع موزة ضاني'
        },
        meals: {
            'fatteh-plain': {
                name: 'Egyptian Style Fatteh with Garlic and Vinegar (Plain)',
                arabic_name: 'فتة مصري بالخل و الثوم (سادة)',
                price: '30',
                description: '',
                arabic_description: ''
            },

            'fatteh-lamb': {
                name: 'Egyptian Style Fatteh with Garlic, Vinegar and Lamb Mouza',
                arabic_name: 'فتة مصري بالخل و الثوم مع موزة ضاني',
                price: '70',
                description: '',
                arabic_description: ''
            },

            'fatteh-meat': {
                name: 'Egyptian Style Fatteh with Garlic, Vinegar and Meat Cubes',
                arabic_name: 'فتة مصري بالخل و الثوم مع قطع لحم',
                price: '60',
                description: '',
                arabic_description: ''
            },

            'fatteh-kawarea': {
                name: 'Kawarea Fatteh',
                arabic_name: 'فتة كوارع',
                price: '55',
                description: '',
                arabic_description: ''
            },

            'fatteh-chicken': {
                name: 'Chicken Fatteh with Yoghurt',
                arabic_name: 'فتة فراخ بالزبادي',
                price: '50',
                description: '',
                arabic_description: ''
            },

            'fatteh-shawarma': {
                name: 'Shawrma Fatteh',
                arabic_name: 'فتة شاورما',
                price: '50',
                description: '',
                arabic_description: ''
            }
        }
    },

    'savory-feteer': {
        name: 'Savory Feteer',
        arabic_name: 'فطير حادق',
        images: {
            'mix-cheese-feteer': 'فطير مشكل جبنة',
            'mix-vegetables-and-cheese-feteer': 'فطير مشكل خضروات مع جبنة'
        },
        meals: {
            'mix-cheese': {
                name: 'Mix Cheese (Medium - Large)',
                arabic_name: 'مشكل جبنة (متوسط - كبير)',
                price: '39 - 70',
                description: '',
                arabic_description: ''
            },

            'mix-veggies': {
                name: 'Mix Veggies and Cheese',
                arabic_name: 'مشكل خضروات مع جبنة',
                price: '32 - 60',
                description: '',
                arabic_description: ''
            },

            'mix-meat': {
                name: 'Mix Meat with Cheese',
                arabic_name: 'مشكل لحم بالجبنة',
                price: '49 - 88',
                description: '',
                arabic_description: ''
            },

            'romy-cheese': {
                name: 'Romy Cheese',
                arabic_name: 'جبنة رومي',
                price: '34 - 61',
                description: '',
                arabic_description: ''
            },

            'sausage-cheese': {
                name: 'Sausage with Cheese',
                arabic_name: 'سجق وجبنة',
                price: '49 - 88',
                description: '',
                arabic_description: ''
            },

            'hotdog-cheese': {
                name: 'Hotdog with Cheese',
                arabic_name: 'نقانق وجبنة',
                price: '32 - 60',
                description: '',
                arabic_description: ''
            },

            'chicken-cheese': {
                name: 'Chicken with Cheese',
                arabic_name: 'دجاج وجبنة',
                price: '45 - 81',
                description: '',
                arabic_description: ''
            },

            'pastrami-cheese': {
                name: 'Pastrami with Cheese',
                arabic_name: 'بسطرمة وجبنة',
                price: '49 - 88',
                description: '',
                arabic_description: ''
            },

            tuna: {
                name: 'Tuna',
                arabic_name: 'تونه',
                price: '42 - 75',
                description: '',
                arabic_description: ''
            },

            'eastern-pizza': {
                name: 'Eastern pizza',
                arabic_name: 'بيتزا شرقي',
                price: '75',
                description: '',
                arabic_description: ''
            },

            meshaltet: {
                name: 'Meshaltet',
                arabic_name: 'مشلتت',
                price: '75',
                description: '',
                arabic_description: ''
            }
        }
    },

    'sweet-feteer': {
        name: 'Sweet Feteer',
        arabic_name: 'فطير حلو',
        images: {
            'sugar-feteer': 'فطير سكر',
            'sugar-and-milk-feteer': 'فطير سكر وحليب',
            'nutella-feteer': 'فطير نوتيلا'
        },
        meals: {
            sugar: {
                name: 'Sugar (Medium - Large)',
                arabic_name: 'سكر (متوسط - كبير)',
                price: '20 - 38',
                description: '',
                arabic_description: ''
            },

            'sugar-milk': {
                name: 'Sugar and Milk',
                arabic_name: 'سكر وحليب',
                price: '20 - 38',
                description: '',
                arabic_description: ''
            },

            'cream-honey': {
                name: 'Cream and Honey or Sugar',
                arabic_name: 'قشطة وسكر أو عسل',
                price: '36 - 68',
                description: '',
                arabic_description: ''
            },

            nutella: {
                name: 'Nutella',
                arabic_name: 'نوتيلا',
                price: '34 - 65',
                description: '',
                arabic_description: ''
            },

            'craft-honey': {
                name: 'Craft and Honey',
                arabic_name: 'كرافت و عسل',
                price: '34 - 65',
                description: '',
                arabic_description: ''
            },

            'fruits-cream': {
                name: 'Fruits and Creams',
                arabic_name: 'فواكه و كريمة',
                price: '39 - 75',
                description: '',
                arabic_description: ''
            }
        }
    },

    manakeesh: {
        name: 'Manakeesh',
        arabic_name: 'مناقيش',
        meals: {
            zaatar: {
                name: 'Zaatar',
                arabic_name: 'زعتر',
                price: '16',
                description: '',
                arabic_description: ''
            },

            labneh: {
                name: 'Labneh',
                arabic_name: 'لبنة',
                price: '16',
                description: '',
                arabic_description: ''
            },

            'labneh-zaatar': {
                name: 'Labneh and Zaatar',
                arabic_name: 'لبنة و زعتر',
                price: '18',
                description: '',
                arabic_description: ''
            },

            'akawi-cheese': {
                name: 'Akawi Cheese',
                arabic_name: 'جبنة عكاوي',
                price: '16',
                description: '',
                arabic_description: ''
            }
        }
    },

    'hot-drinks': {
        name: 'Hot Drinks',
        arabic_name: 'مشروبات ساخنة',
        meals: {
            tea: {
                name: 'Tea',
                arabic_name: 'شاي',
                price: '10',
                description: '',
                arabic_description: ''
            },

            'tea-milk': {
                name: 'Tea with Milk',
                arabic_name: 'شاي بحليب',
                price: '12',
                description: '',
                arabic_description: ''
            },

            'turkish-coffee': {
                name: 'Turkish Coffee',
                arabic_name: 'قهوة تركي',
                price: '12',
                description: '',
                arabic_description: ''
            },

            mocha: {
                name: 'Mocha',
                arabic_name: 'موكا',
                price: '22',
                description: '',
                arabic_description: ''
            },

            latte: {
                name: 'Latte',
                arabic_name: 'لاتيه',
                price: '20',
                description: '',
                arabic_description: ''
            },

            cappuccino: {
                name: 'Cappuccino',
                arabic_name: 'كابتشينو',
                price: '17',
                description: '',
                arabic_description: ''
            },

            espresso: {
                name: 'Espresso',
                arabic_name: 'إسبريسو',
                price: '12',
                description: '',
                arabic_description: ''
            },

            'double-espresso': {
                name: 'Double Espresso',
                arabic_name: 'إسبريسو دوبل',
                price: '14',
                description: '',
                arabic_description: ''
            },

            'hot-chocolate': {
                name: 'Hot Chocolate',
                arabic_name: 'شيكولاتة ساخنة',
                price: '25',
                description: '',
                arabic_description: ''
            },

            cinnamon: {
                name: 'Cinnamon with Milk',
                arabic_name: 'قرفة بالحليب',
                price: '18',
                description: '',
                arabic_description: ''
            },

            sahlab: {
                name: 'Sahlab',
                arabic_name: 'سحلب',
                price: '18',
                description: '',
                arabic_description: ''
            },

            'green-tea': {
                name: 'Green Tea',
                arabic_name: 'شاي أخضر',
                price: '10',
                description: '',
                arabic_description: ''
            },

            'moroccan-tea': {
                name: 'Moroccan Tea',
                arabic_name: 'شاي مغربي',
                price: '22',
                description: '',
                arabic_description: ''
            }
        }
    },

    dessert: {
        name: 'Dessert',
        arabic_name: 'الحلو',
        meals: {
            'rice-pudding': {
                name: 'Rice Pudding',
                arabic_name: 'رز بلبن (حليب)',
                price: '20',
                description: '',
                arabic_description: ''
            },

            muhalabeya: {
                name: 'Muhalabeya',
                arabic_name: 'مهلبية',
                price: '20',
                description: '',
                arabic_description: ''
            },

            'um-ali': {
                name: 'Um Ali',
                arabic_name: 'أم علي',
                price: '27',
                description: '',
                arabic_description: ''
            },

            'fruit-salad': {
                name: 'Fruit Salad',
                arabic_name: 'فروت سلاط',
                price: '32',
                description: '',
                arabic_description: ''
            },

            'fruits-platter': {
                name: 'Fruits Platter',
                arabic_name: 'طبق فواكه',
                price: '44',
                description: '',
                arabic_description: ''
            }
        }
    },

    'cold-drinks': {
        name: 'Cold Drinks',
        arabic_name: 'مشروبات ساقعة',
        images: {
            'lemon-mint-mojito': 'موهيتو ليمون نعناع'
        },
        meals: {
            'still-water': {
                name: 'Still Water - Small',
                arabic_name: 'مياة معدنيه صغيره',
                price: '6',
                description: '',
                arabic_description: ''
            },

            'soft-drink': {
                name: 'Soft Drink',
                arabic_name: 'مشروبات غازية',
                price: '11',
                description: 'Pepsi, Seven Up or Miranda',
                arabic_description: 'بيبسي، سيفن أب، ميرندا'
            },

            'ice-tea': {
                name: 'Ice Tea',
                arabic_name: 'شاي مثلج',
                price: '12',
                description: '',
                arabic_description: ''
            },

            'orange-juice': {
                name: 'Orange Juice',
                arabic_name: 'عصير برتقال',
                price: '25',
                description: '',
                arabic_description: ''
            },

            'watermelon-juice': {
                name: 'Watermelon Juice',
                arabic_name: 'عصير بطيخ',
                price: '25',
                description: '',
                arabic_description: ''
            },

            avocado: {
                name: 'Avocado with Honey and Nuts',
                arabic_name: 'أفوكادو مع عسل و مكسرات',
                price: '29',
                description: '',
                arabic_description: ''
            },

            'mango-juice': {
                name: 'Mango Juice',
                arabic_name: 'عصير مانجو',
                price: '25',
                description: '',
                arabic_description: ''
            },

            lemon: {
                name: 'Lemon and Mint',
                arabic_name: 'ليمون و نعناع',
                price: '25',
                description: '',
                arabic_description: ''
            },

            'strawberry-juice': {
                name: 'Strawberry Juice',
                arabic_name: 'عصير فراولة',
                price: '25',
                description: '',
                arabic_description: ''
            },

            'banana-milk': {
                name: 'Banana with Milk',
                arabic_name: 'موز بالحليب',
                price: '25',
                description: '',
                arabic_description: ''
            },

            'guava-milk': {
                name: 'Guava with Milk',
                arabic_name: 'جوافة بالحليب',
                price: '25',
                description: '',
                arabic_description: ''
            },

            'pomgrenate-juice': {
                name: 'Pomgrenate Juice',
                arabic_name: 'عصير رمان',
                price: '29',
                description: '',
                arabic_description: ''
            },

            'pineapple-juice': {
                name: 'Pineapple Juice',
                arabic_name: 'عصير أناناس',
                price: '25',
                description: '',
                arabic_description: ''
            },

            cocktails: {
                name: 'Cocktails',
                arabic_name: 'عصير كوكتيل',
                price: '29',
                description: '',
                arabic_description: ''
            },

            karkadeeh: {
                name: 'Karkadeeh',
                arabic_name: 'كركادية',
                price: '19',
                description: '',
                arabic_description: ''
            },

            'passion-mojito': {
                name: 'Passion Fruit Mojito',
                arabic_name: 'موهيتو باشون فروت',
                price: '29',
                description: '',
                arabic_description: ''
            },

            'strawberry-mojito': {
                name: 'Strawberry Mojito',
                arabic_name: 'موهيتو فراولة',
                price: '27',
                description: '',
                arabic_description: ''
            },

            'lemon-mojito': {
                name: 'Lemon Mint Mojito',
                arabic_name: 'موهيتو ليمون نعناع',
                price: '27',
                description: '',
                arabic_description: ''
            },

            'soda-blue': {
                name: 'Soda Blue',
                arabic_name: 'صودا بلو',
                price: '27',
                description: '',
                arabic_description: ''
            },

            'cherry-cola': {
                name: 'Cherry Cola',
                arabic_name: 'شيري كوا',
                price: '27',
                description: '',
                arabic_description: ''
            },

            milkshake: {
                name: 'Milkshake',
                arabic_name: 'ميلك شيك',
                price: '29',
                description: '',
                arabic_description: ''
            },

            'milkshake-mango': {
                name: 'Milkshake Mango',
                arabic_name: 'ميلك شيك عصير مانجو',
                price: '29',
                description: '',
                arabic_description: ''
            },

            'milkshake-strawberry': {
                name: 'Milkshake Strawberry',
                arabic_name: 'ميلك شيك فراولة',
                price: '29',
                description: '',
                arabic_description: ''
            },

            'milkshake-vanilla': {
                name: 'Milkshake Vanilla',
                arabic_name: 'ميلك شيك فانيليا',
                price: '29',
                description: '',
                arabic_description: ''
            },

            'milkshake-chocolate': {
                name: 'Milkshake Chocolate',
                arabic_name: 'ميلك شيك شيكولاته',
                price: '29',
                description: '',
                arabic_description: ''
            },

            'milkshake-oreo': {
                name: 'Milkshake Oreo',
                arabic_name: 'ميلك شيك أوريو',
                price: '29',
                description: '',
                arabic_description: ''
            },

            'milkshake-caramel': {
                name: 'Milkshake Caramel',
                arabic_name: 'ميلك شيك كراميل',
                price: '29',
                description: '',
                arabic_description: ''
            },

            'iced-mocha': {
                name: 'Iced Mocha',
                arabic_name: 'ايس موكا',
                price: '25',
                description: '',
                arabic_description: ''
            },

            'iced-frappuccino': {
                name: 'Iced Frappuccino',
                arabic_name: 'ايس فرابيتشيبو',
                price: '25',
                description: '',
                arabic_description: ''
            },

            'iced-latte': {
                name: 'Iced Latte',
                arabic_name: 'ايس لاتيه',
                price: '25',
                description: '',
                arabic_description: ''
            },

            'iced-chocolate': {
                name: 'Iced Chocolate',
                arabic_name: 'شيكولاتة مثلجة',
                price: '25',
                description: '',
                arabic_description: ''
            }
        }
    }
};
