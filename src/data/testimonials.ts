// Tourist feedback. Names are drawn from the original feedback page;
// review text is representative sample copy for the demo.

export interface Testimonial {
  name: string
  trip: string
  text: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Nataliya Bantsur',
    trip: 'New York City',
    text: 'Thank you very much for the nice, well organized trip to New York that gave us an opportunity to see a lot in such a short period of time. Special thank you to Andrew and Inna — their incredible knowledge and experience made our trip unforgettable. We shared our experience with many of our friends and they would like to travel with you as well.',
  },
  {
    name: 'Michael Khazanovich',
    trip: 'Atlantic Canada',
    text: 'Everything was thought through — comfortable hotels, a wonderful guide and a route that showed us the very best of the Maritimes. We will definitely travel with Irina International Tours again.',
  },
  {
    name: 'Elena & Evgueni Nazarov',
    trip: 'Classic Italy',
    text: 'Our trip to Italy exceeded every expectation. The group was small and friendly, the tour director was attentive, and we saw far more than we ever could have on our own. Highly recommended.',
  },
  {
    name: 'Galina and Vladimir Burdenko',
    trip: 'Quebec & Montreal',
    text: 'A perfectly paced three days through French Canada. Warm, professional and genuinely caring service from start to finish — thank you!',
  },
  {
    name: 'Marina and Vitaly Gorelik',
    trip: 'Greece & the Islands',
    text: 'Santorini at sunset, the Acropolis, and a guide who knew every story — this was the holiday of a lifetime. Thank you to the whole IIT team.',
  },
  {
    name: 'Victoria Reyzenson',
    trip: 'Niagara Falls Day Tour',
    text: 'Even as a day trip it felt special. Smooth, friendly and great value. The perfect introduction to travelling with Irina International Tours.',
  },
  {
    name: 'Pavel and Irina Mazurenko',
    trip: 'Germany’s Romantic Road',
    text: 'Storybook towns, castles and wonderful company. The organisation was flawless and the tour director made everyone feel at home.',
  },
  {
    name: 'Leonid and Elena',
    trip: 'Christmas in New York',
    text: 'A magical few days in Manhattan over the holidays. The lights, the city tour and the free time were balanced just right. We came home delighted.',
  },
]
