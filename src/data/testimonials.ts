// Tourist feedback — genuine reviews from the original Irina International Tours
// site (torontotrip.com/feedback), lightly trimmed for length. These are the
// company's own customer testimonials, carried over to the rebuilt site, with
// Russian translations so the language toggle swaps them in place.

export interface Testimonial {
  name: string
  nameRu?: string
  trip: string
  tripRu: string
  text: string
  textRu: string
  featured?: boolean
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Liliya Burgess',
    trip: '20 years a client',
    tripRu: '20 лет с нами',
    featured: true,
    text: `Dear Irina, thank you very much to you and your company! We have been clients for twenty years, and all these years we've had an amazing time travelling with you. We were learning, we were growing, we had great times. Never give up, despite the uncertain times. Looking forward to more exciting trips! ~ Burgess Family`,
    textRu: `Дорогая Ирина, огромное спасибо вам и вашей компании! Мы клиенты уже двадцать лет, и все эти годы прекрасно путешествуем с вами. Мы узнавали новое, мы росли, мы чудесно проводили время. Не сдавайтесь, несмотря на непростые времена. С нетерпением ждём новых увлекательных поездок! ~ Семья Burgess`,
  },
  {
    name: 'Nataliya Bantsur',
    trip: 'New York',
    tripRu: 'Нью-Йорк',
    featured: true,
    text: `Thank you very much for the nice, well organized trip to New York that gave us an opportunity to see a lot in such a short period of time. Special thank you to Andrew and Inna — their incredible knowledge and experience made our trip unforgettable. We shared our experience with many of our friends and they would like to travel with you as well.`,
    textRu: `Большое спасибо за прекрасно организованную поездку в Нью-Йорк, которая дала нам возможность увидеть так много за такое короткое время. Особая благодарность Андрею и Инне — их невероятные знания и опыт сделали поездку незабываемой. Мы поделились впечатлениями со многими друзьями, и они тоже хотят путешествовать с вами.`,
  },
  {
    name: 'Nick Tolkachov',
    trip: 'New York City',
    tripRu: 'Нью-Йорк',
    text: `Thank you very much for a great weekend in New York City with Andrew and John. Keep up the good work. Excellent service!!! — Nick, Nataliya and Alex, Mississauga`,
    textRu: `Большое спасибо за прекрасные выходные в Нью-Йорке с Андреем и Джоном. Так держать! Отличный сервис!!! — Ник, Наталья и Алекс, Миссиссога`,
  },
  {
    name: 'Oxana',
    trip: 'Washington',
    tripRu: 'Вашингтон',
    text: `Just want to say thank you for the trip. We liked it and are looking forward to the next vacation with you. Andrey has a lot of funny stories to entertain us during the long way to Washington — and he is a great guide with a deep knowledge of USA history. Thanks, Oxana.`,
    textRu: `Просто хочу сказать спасибо за поездку. Нам понравилось, и мы с нетерпением ждём следующего отпуска с вами. У Андрея много весёлых историй, чтобы развлечь нас в долгой дороге до Вашингтона, и он замечательный гид с глубоким знанием истории США. Спасибо, Оксана.`,
  },
  {
    name: 'Olga Martchenko',
    trip: 'Atlantic Provinces',
    tripRu: 'Атлантические провинции',
    text: `Dear Irina, the Atlantic Provinces tour was perfect! Thank you for organizing it for us. Please send a big thanks to our guides Olga and Arina, and to our bus driver Jack. I was very impressed by Olga Kaminiar's professionalism, knowledge and diplomacy. I am looking forward to taking another of your tours soon.`,
    textRu: `Дорогая Ирина, тур «Атлантические провинции» был великолепен! Спасибо, что организовали его для нас. Передайте большое спасибо нашим гидам Ольге и Арине, а также водителю Джеку. Меня очень впечатлили профессионализм, знания и тактичность Ольги Каминяр. С нетерпением жду следующего тура.`,
  },
  {
    name: 'Tamara Kapinus',
    trip: 'With gratitude',
    tripRu: 'С благодарностью',
    text: `Thanks for the wonderful time, excellent service and attention!`,
    textRu: `Спасибо за чудесное время, отличный сервис и внимание!`,
  },
  {
    name: 'Michael Khazanovich',
    trip: 'Portugal',
    tripRu: 'Португалия',
    text: `My wife and I recently came back from a ten-day trip to Portugal. It was a delight to get acquainted with such a warm country, in both the literal and figurative sense. It was our fascinating and charming guide, Maria, who laid the foundation for our interest in Portugal. I would like to take this opportunity to congratulate her.`,
    textRu: `Недавно мы с женой вернулись из десятидневной поездки в Португалию. Было огромной радостью познакомиться с такой тёплой страной — в прямом и переносном смысле. Именно наш увлекательный и обаятельный гид Мария заложила основу нашего интереса к Португалии. Хочу воспользоваться возможностью и поблагодарить её.`,
  },
  {
    name: 'Olga Tchaoussov',
    trip: 'Portugal',
    tripRu: 'Португалия',
    text: `Hello all! I would like to thank you so much for arranging the tour in Portugal. My husband and I enjoyed it — it was interesting and so well organized. We got a lot of positive emotions and some knowledge of the Portuguese culture.`,
    textRu: `Здравствуйте! Огромное спасибо за организованный тур в Португалию. Мы с мужем получили удовольствие — было интересно и прекрасно организовано. Мы получили массу положительных эмоций и узнали о португальской культуре.`,
  },
  {
    name: 'Elena & Evgueni Nazarov',
    trip: 'Italy · flights',
    tripRu: 'Италия · авиабилеты',
    text: `I would like to thank you very much for your help and support to resend us new flight tickets from Italy to Toronto. We were very impressed with your professionalism and assistance. Going forward we will definitely continue to be your clients and recommend your company to everybody.`,
    textRu: `Хочу поблагодарить вас за помощь и поддержку — за то, что переоформили нам новые авиабилеты из Италии в Торонто. Нас очень впечатлил ваш профессионализм. Мы и впредь будем вашими клиентами и будем рекомендовать вашу компанию всем.`,
  },
  {
    name: 'Jeff Gutnik',
    trip: 'Europe · Italy',
    tripRu: 'Европа · Италия',
    text: `I would like to express my sincere thanks to IITours, and especially to Irina, for the arrangements made for me while touring Europe — the wonderful, warm Michelangelo Hotel in Montecatini Terme and excellent guided bus tours to Siena, San Gimignano and others. Another positive: an excellent group of nice, intelligent, warm people. Thank you. — Jeff`,
    textRu: `Хочу выразить искреннюю благодарность IITours и особенно Ирине за организацию моего путешествия по Европе — тёплый отель Michelangelo в Монтекатини-Терме и отличные экскурсии в Сиену, Сан-Джиминьяно и другие города. И ещё — прекрасная группа милых, умных, душевных людей. Спасибо. — Джефф`,
  },
  {
    name: 'Mickey Rubin',
    trip: 'Italy · Toronto',
    tripRu: 'Италия · Торонто',
    text: `The trip to Italy was amazing!! I would definitely book future tours with IIT!`,
    textRu: `Поездка в Италию была изумительной!! Обязательно буду бронировать туры с IIT и впредь!`,
  },
  {
    name: 'Galina and Vladimir Burdenko',
    trip: 'Ottawa · Montreal · Quebec',
    tripRu: 'Оттава · Монреаль · Квебек',
    text: `Dear Irina! We would like to express our appreciation and admiration for your guide Olga and for a well organized and very informative tour with the Russian-speaking group on the route Toronto – Ottawa – Montreal – Quebec City. This speaks volumes about the high professional level of your company. We hope for further cooperation.`,
    textRu: `Дорогая Ирина! Хотим выразить признательность вашему гиду Ольге за прекрасно организованный и очень познавательный тур с русскоязычной группой по маршруту Торонто – Оттава – Монреаль – Квебек. Это говорит о высоком профессиональном уровне вашей компании. Надеемся на дальнейшее сотрудничество.`,
  },
  {
    name: 'Marina and Vitaly Gorelik',
    trip: 'French Canada',
    tripRu: 'Французская Канада',
    text: `I would like to thank you for a wonderful trip you provided for us a week ago. My husband and I had such a great time in French Canada. Special thanks to Marc, our tour guide — a very nice, intelligent person, very knowledgeable about Canada's history. Everything was so organized. I would recommend your company to all my friends.`,
    textRu: `Хочу поблагодарить вас за чудесную поездку неделю назад. Мы с мужем прекрасно провели время во Французской Канаде. Особое спасибо нашему гиду Марку — очень приятному, умному человеку, прекрасно знающему историю Канады. Всё было так организовано. Буду рекомендовать вашу компанию всем друзьям.`,
  },
  {
    name: 'Fanya Epstein',
    trip: 'Niagara · French Canada',
    tripRu: 'Ниагара · Французская Канада',
    text: `I was in Toronto a week ago. I had amazing trips to Niagara Falls, to French Canada (3 days) and a 1-day trip in Toronto. Thank you so much — wonderful country! Special thanks to Mark for an unforgettable trip to French Canada.`,
    textRu: `Я была в Торонто неделю назад. У меня были замечательные поездки на Ниагарский водопад, во Французскую Канаду (3 дня) и однодневная по Торонто. Огромное спасибо — чудесная страна! Особое спасибо Марку за незабываемую поездку во Французскую Канаду.`,
  },
  {
    name: 'Ella and Sasha',
    trip: 'French Canada · honeymoon',
    tripRu: 'Французская Канада · медовый месяц',
    text: `On behalf of me and my husband, a big thank you for the trip we just went on — our honeymoon. We went to French Canada for 3 days with Olga. She is a great tour guide; she kept us very informed and entertained, and is a very nice lady at heart. All was great, the bus driver as well!`,
    textRu: `От имени меня и моего мужа — большое спасибо за поездку, в которую мы только что съездили: это был наш медовый месяц. Мы ездили во Французскую Канаду на 3 дня с Ольгой. Она замечательный гид: держала нас в курсе и развлекала, и она очень добрый человек. Всё было прекрасно, и водитель тоже!`,
  },
  {
    name: 'Elena Brailovskaya',
    trip: '9-day tour',
    tripRu: '9-дневный тур',
    text: `Dear Olechka, thanks a lot for the fantastic trip! We had such a great time and saw so many unforgettable, absolutely incredible places. Your knowledge, intelligence, patience and people skills made these nine days really special, and we will remember this trip as one of the best vacations we ever had.`,
    textRu: `Дорогая Олечка, огромное спасибо за фантастическую поездку! Мы прекрасно провели время и увидели столько незабываемых, совершенно невероятных мест. Ваши знания, ум, терпение и умение общаться с людьми сделали эти девять дней по-настоящему особенными — это один из лучших отпусков в нашей жизни.`,
  },
  {
    name: 'Tatyana',
    trip: 'French Canada',
    tripRu: 'Французская Канада',
    text: `I want to express my gratitude to our tour guide Olga for an exciting and informative tour. Thanks to Olga, we learned a lot about Canada and the cities and provinces we visited. We were all very impressed. Thank you for your professionalism and attention. Special thanks to our driver Chris.`,
    textRu: `Хочу выразить благодарность нашему гиду Ольге за увлекательный и познавательный тур. Благодаря Ольге мы много узнали о Канаде, о городах и провинциях, которые посетили. Мы все были под большим впечатлением. Спасибо за профессионализм и внимание. Особое спасибо водителю Крису.`,
  },
  {
    name: 'Alla Shushkovskaya',
    trip: '30,000 Islands · Niagara',
    tripRu: '30 000 островов · Ниагара',
    text: `This year we used your agency once again — a "30,000 Islands" tour and a "Niagara Falls" tour. The guides were different but the driver was the same: Felix was all about care, attention, courtesy and gallantry! Many thanks for your professionalism and love for your work. I've met several of your guides — all wonderful professionals.`,
    textRu: `В этом году мы вновь воспользовались услугами вашего агентства — тур «30 000 островов» и «Ниагарский водопад». Гиды были разные, а водитель один — Феликс был воплощением заботы, внимания и галантности! Большое спасибо за профессионализм и любовь к своему делу. Я встречала нескольких ваших гидов — все прекрасные профессионалы.`,
  },
  {
    name: 'Vladimir Suslov',
    trip: 'Montreal',
    tripRu: 'Монреаль',
    text: `I took your tour quite reluctantly, following my friend's advice. The first day I was tired and thought I'd sleep on the bus to Montreal. But when I heard our tour guide, I was wide awake. The more I heard his stories, the more I liked them — fascinated and intrigued by his steady narrative, timely jokes and wealth of information.`,
    textRu: `Я согласился на ваш тур довольно неохотно, по совету друга. В первый день я устал и думал, что посплю в автобусе до Монреаля. Но услышав голос нашего гида, я понял, что совершенно проснулся. Чем больше я слушал его рассказы, тем больше они мне нравились — меня заворожили его неспешное повествование, шутки и обилие информации.`,
  },
  {
    name: 'Nina Pomerantseva',
    trip: 'Toronto · Niagara',
    tripRu: 'Торонто · Ниагара',
    text: `We were in Toronto and booked two sightseeing tours — Toronto City and Niagara Falls. We would like to emphasize the outstanding knowledge of our guide Ludmila, who showed us the most interesting places we would have missed on our own, and told us the history of the city from its establishment until today.`,
    textRu: `Мы были в Торонто и заказали две экскурсии — по Торонто и на Ниагарский водопад. Хотим отметить выдающиеся знания нашего гида Людмилы, которая показала нам самые интересные места, которые мы пропустили бы сами, и рассказала историю города с его основания до наших дней.`,
  },
  {
    name: 'Larisa and Alexander',
    trip: '4-day tour',
    tripRu: '4-дневный тур',
    text: `The long-awaited vacation went by, and we still stay in a festive holiday mood — thanks to another unforgettable 4-day tour by Irina International Tours. This time we invited our friends from Israel and planned our vacation around the tour, and we did not regret it. Everything was organized at the highest, most professional level.`,
    textRu: `Долгожданный отпуск пролетел, а мы всё ещё в праздничном настроении — благодаря очередному незабываемому 4-дневному туру от Irina International Tours. В этот раз мы пригласили друзей из Израиля и спланировали отпуск вокруг тура — и не пожалели. Всё было организовано на высочайшем, профессиональном уровне.`,
  },
  {
    name: 'Leonid and Elena',
    trip: 'Ottawa · Montreal · Quebec',
    tripRu: 'Оттава · Монреаль · Квебек',
    text: `We took the Toronto – Ottawa – Montreal – Quebec City tour with your guide Olga. It's difficult to express the depth of my appreciation for this trip and for Olga. Thanks to her knowledge, skills and charisma, we fell in love with Canada. We usually prefer to travel on our own, but we were really surprised in a good way!`,
    textRu: `Мы взяли тур Торонто – Оттава – Монреаль – Квебек с вашим гидом Ольгой. Трудно выразить всю глубину моей благодарности за эту поездку и за Ольгу. Благодаря её знаниям, мастерству и обаянию мы влюбились в Канаду. Обычно мы предпочитаем путешествовать самостоятельно, но были приятно удивлены!`,
  },
  {
    name: 'Galina',
    trip: 'Canada & New York',
    tripRu: 'Канада и Нью-Йорк',
    text: `Thank you so much for two unforgettable tours across Canada and to New York. These tours are not only about historical places and attractions — they are a journey through time. You had a wonderful ability to compress time; every day was so full of events and information that it seemed to last much longer.`,
    textRu: `Огромное спасибо за два незабываемых тура по Канаде и в Нью-Йорк. Эти туры — не только посещение исторических мест, это путешествие во времени. Вы обладаете удивительной способностью «сжимать» время: каждый день был так насыщен событиями и информацией, что казался гораздо длиннее.`,
  },
  {
    name: 'Alexey and Veronica',
    trip: 'Russian-guided tours',
    tripRu: 'Туры с русским гидом',
    text: `Thank you so much for the exciting trip — a lot of information, a lot of highlights. There is a special reason why we love Russian-speaking tour guides: they tell you who built a house, when and why, not just what it costs. Thank you.`,
    textRu: `Огромное спасибо за увлекательную поездку — много информации, много ярких моментов. Есть особая причина, почему мы любим русскоязычных гидов: они рассказывают, кто построил дом, когда и зачем, а не только сколько он стоит. Спасибо.`,
  },
  {
    name: 'Victoria Reyzenson',
    trip: '30,000 Islands · Toronto',
    tripRu: '30 000 островов · Торонто',
    text: `When I came to Canada for the first time, I wanted to see as much as possible. My friends advised me to visit Irina International Tours, where I was lucky to meet Galina. She informed me in great detail about each tour, which helped me make a choice — very helpful, patient and charming. I took two tours: "30,000 Islands" and Toronto.`,
    textRu: `Когда я впервые приехала в Канаду, мне хотелось увидеть как можно больше. Друзья посоветовали обратиться в Irina International Tours, где мне посчастливилось встретить Галину. Она подробно рассказала о каждом туре, что помогло мне с выбором — очень внимательная, терпеливая и обаятельная. Я взяла два тура: «30 000 островов» и Торонто.`,
  },
  {
    name: 'Pavel and Irina Mazurenko',
    trip: 'French Canada · 1000 Islands',
    tripRu: 'Французская Канада · 1000 островов',
    text: `This October my husband and I went on the "French Canada and the 1000 Islands" tour. Thanks to her high professionalism, our guide Olga made it very exciting, informative and interesting — we had so much fun! Our group was unified by Olga's profound knowledge of Canada, its history and the sites we visited.`,
    textRu: `В октябре мы с мужем съездили в тур «Французская Канада и 1000 островов». Благодаря высокому профессионализму нашего гида Ольги тур был очень увлекательным, познавательным и интересным — мы прекрасно провели время! Нашу группу объединили глубокие знания Ольги о Канаде, её истории и местах, которые мы посетили.`,
  },
  {
    name: 'Igor',
    trip: 'Toronto City Tour · from Jerusalem',
    tripRu: 'Тур по Торонто · из Иерусалима',
    text: `My name is Igor; I'm from Moscow and now live in Jerusalem. Recently I spent 6 days in Toronto, and my friends booked me your Toronto City Tour. I'd heard a lot of negative things about Toronto, but I'm glad to say their opinion was wrong — thank you to Irina, your tour guide, for a wonderful tour.`,
    textRu: `Меня зовут Игорь; я родом из Москвы, а сейчас живу в Иерусалиме. Недавно я провёл 6 дней в Торонто, и друзья забронировали мне обзорный тур по городу. Я слышал много негативного о Торонто, но рад сказать, что их мнение было неверным — спасибо вашему гиду Ирине за чудесную экскурсию.`,
  },
  {
    name: 'From the Group of Grateful Tourists',
    nameRu: 'От группы благодарных туристов',
    trip: 'Boston · New York · Washington',
    tripRu: 'Бостон · Нью-Йорк · Вашингтон',
    text: `We are tourists from different parts of the former Soviet Union, and we were very happy with your Canada tours. Many thanks to Andrey, our tour guide, for his attention and professional attitude during the New York – Washington tour. On behalf of the Boston – New York – Washington group, we thank him for his deep knowledge of the history of the cities and museums.`,
    textRu: `Мы туристы из разных уголков бывшего Советского Союза, и мы были очень довольны вашими турами по Канаде. Большое спасибо нашему гиду Андрею за внимание и профессионализм во время тура Нью-Йорк – Вашингтон. От имени группы Бостон – Нью-Йорк – Вашингтон благодарим его за глубокие знания истории городов и музеев.`,
  },
]
