let menu = {
    breakfast: {
        name: 'Breakfast',
        arabic_name: 'الفطار',
        notes: 'The breakfast is available till 1 PM',
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
                    'Falafel Bastirma, Boiled Eggs fried in Ghee, Alexandrian Fava Beans, Cheese and Tomato, Tea',
                arabic_description: 'فالافل بالبسطرمة، بيض مدحرج، فول إسكندراني، جبنة بالطماطم، شاي'
            },

            'full-stomach-breakfast': {
                name: 'Full Stomach Breakfast',
                arabic_name: 'فطار متين',
                price: '55',
                description: 'Fava Beans with Butter, Egg with Bastirma, Cheese, Falafel, Coffee',
                arabic_description: 'فول بالزبدة، بيض بالبسطرمة، فالفل بالجبنة، قهوة'
            },

            'basic-breakfast': {
                name: 'Basic Breakfast',
                arabic_name: 'فطار تقليدي',
                price: '35',
                description: 'Fava Beans with Lemon and Oil, Falafel, Cheese, Tea',
                arabic_description: 'فول بالزيت والليمون، فالافل، جبنة، شاي'
            },

            'sweet-tooth-breakfast': {
                name: 'Sweet Tooth Breakfast',
                arabic_name: 'الفطار الحلو',
                price: '55',
                description: 'Halawa and Cream, Jam, Grilled Halloum, Orange Juice',
                arabic_description: 'حالوة بالقشطة، مربى، حلوم مشوي، عصير برتقال'
            },

            'zeit-w-lamoon-breakfast': {
                name: 'Zeit W Lamoon Breakfast',
                arabic_name: 'فطار زيت و ليمون',
                price: '55',
                description:
                    'Fava beans Zeit W Lamoon Special, Spicy Stuffed Falafel, Cheesy French Fries, Tea with Mint',
                arabic_description:
                    'فول مطعم زيت و ليمون، فالافل محشية (حارة)، بطاطس محمرة بالجبنة، شاي نعناع'
            }
        }
    },

    appetizer: {
        name: 'Appetizer',
        arabic_name: 'مقبلات',
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
                price: '16',
                description: '',
                arabic_description: ''
            },

            sambosa: {
                name: 'Sambosa Cheese and Bastirma',
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
        meals: {
            'green-salad': {
                name: 'Green Salad',
                arabic_name: 'سلطة بلدي',
                price: '18',
                description: '',
                arabic_description: ''
            },

            'caesar-salad': {
                name: 'Caesar Salad',
                arabic_name: 'سلطة سيزر',
                price: '25',
                description: '',
                arabic_description: ''
            },

            taboulah: {
                name: 'Taboulah',
                arabic_name: 'تبولة',
                price: '18',
                description: '',
                arabic_description: ''
            },

            fattouch: {
                name: 'Fattouch',
                arabic_name: 'فتوش',
                price: '18',
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
                price: '12',
                description: '',
                arabic_description: ''
            },

            'yoghurt-salad-apple': {
                name: 'Yoghurt Salad with Apple and Honey',
                arabic_name: 'سلطة زبادي بالعسل و التفاح',
                price: '17',
                description: '',
                arabic_description: ''
            }
        }
    },

    soup: {
        name: 'Soup',
        arabic_name: 'شربة',
        meals: {
            'chicken-cream': {
                name: 'Chicken Cream and Mushroom',
                arabic_name: 'شربة كريمة الدجاج و الفطر',
                price: '22',
                description: '',
                arabic_description: ''
            },

            orzo: {
                name: 'Orzo',
                arabic_name: 'شربة لسان عصفور',
                price: '14',
                description: '',
                arabic_description: ''
            },

            kawarea: {
                name: 'Kawarea',
                arabic_name: 'شربة كوارع',
                price: '32',
                description: '',
                arabic_description: ''
            },

            'vegetable-soup': {
                name: 'Vegatable Soup',
                arabic_name: 'شربة خضار',
                price: '18',
                description: '',
                arabic_description: ''
            },

            'pigeon-soup': {
                name: 'Pigeon Soup',
                arabic_name: 'شربة حمام',
                price: '35',
                description: '',
                arabic_description: ''
            }
        }
    }
};
