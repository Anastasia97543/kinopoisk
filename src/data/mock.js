import firstCard from '../assets/cards/first-card.png'
import secondCard from '../assets/cards/second-card.png'
import thirdCard from '../assets/cards/third-card.png'

export const NAV_LINKS = [
  { id: 'films', label: 'Фильмы', href: '#films' },
  { id: 'series', label: 'Сериалы', href: '#series' },
  { id: 'collections', label: 'Подборки', href: '#collections' },
]

export const PREMIERES = [
  {
    id: 1,
    title: 'Бесстыжие',
    subtitle: '11 сезон. Финал',
    badge: 'Премьера',
    date: '12 декабря',
    poster: firstCard,
  },
  {
    id: 2,
    title: 'Мегамозг',
    subtitle: 'Против Синдикат',
    badge: 'Премьера',
    date: '18 декабря',
    poster: secondCard,
  },
  {
    id: 3,
    title: 'Однажды в лесу',
    subtitle: 'Фильм Люка Жаке',
    badge: 'Скоро',
    date: '13 ноября',
    poster: thirdCard,
  },
]
