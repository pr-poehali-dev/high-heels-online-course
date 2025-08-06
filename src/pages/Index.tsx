import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-black tracking-tight">
              HIGH MOVE
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="text-gray-600 hover:text-primary transition-colors">Курсы</a>
              <a href="#schedule" className="text-gray-600 hover:text-primary transition-colors">Расписание</a>
              <a href="#instructor" className="text-gray-600 hover:text-primary transition-colors">Преподаватель</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Цены</a>
              <Button className="bg-primary hover:bg-primary/90">
                Записаться
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-secondary/20 to-primary/10">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Icon name="Radio" size={16} className="mr-2" />
              Прямые трансляции
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold text-black mb-6 tracking-tight">
              HIGH
              <br />
              <span className="text-primary">MOVE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Онлайн курсы танцев на высоких каблуках с прямыми трансляциями в реальном времени
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 hover:border-primary hover:text-primary px-8 py-6 text-lg">
                <Icon name="Calendar" size={20} className="mr-2" />
                Расписание
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-red-600/20 text-red-400 border-red-600/30">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                LIVE
              </Badge>
              <h2 className="text-4xl font-bold mb-6">Занятия в прямом эфире</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Участвуйте в живых тренировках с персональной обратной связью от преподавателя. 
                Интерактивные уроки с возможностью задать вопросы в реальном времени.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-primary mr-3" />
                  <span>Живое общение с преподавателем</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Users" size={20} className="text-primary mr-3" />
                  <span>Группы до 15 человек</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="text-primary mr-3" />
                  <span>Занятия по 60 минут</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <img 
                  src="/img/690a4079-962e-42ba-8a8c-ac624d6e034b.jpg" 
                  alt="Live Stream" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
                      <span className="text-sm font-medium">В эфире • 24 участника</span>
                    </div>
                    <Button size="sm" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                      <Icon name="Play" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-black mb-6">Наши курсы</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Профессиональные программы обучения танцам на высоких каблуках для всех уровней подготовки
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Базовый курс",
                level: "Начинающий",
                duration: "4 недели",
                price: "5 990 ₽",
                features: ["Основы движений", "Работа с балансом", "8 живых уроков", "Записи занятий"]
              },
              {
                title: "Продвинутый",
                level: "Средний",
                duration: "6 недель", 
                price: "8 990 ₽",
                features: ["Сложные комбинации", "Хореография", "12 живых уроков", "Персональная обратная связь"],
                popular: true
              },
              {
                title: "Мастер-класс",
                level: "Профи",
                duration: "8 недель",
                price: "12 990 ₽", 
                features: ["Авторская хореография", "Работа со стилем", "16 живых уроков", "Индивидуальные консультации"]
              }
            ].map((course, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-all duration-300 hover:scale-105 ${course.popular ? 'ring-2 ring-primary' : ''}`}>
                {course.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{course.level}</Badge>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-4">{course.price}</div>
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="Check" size={16} className="text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={course.popular ? "default" : "outline"}>
                    Выбрать курс
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-black mb-6">Расписание занятий</h2>
            <p className="text-gray-600 text-lg">Выберите удобное время для живых тренировок</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {[
                { day: "Понедельник", time: "19:00", level: "Базовый", spots: "5 мест" },
                { day: "Среда", time: "20:00", level: "Продвинутый", spots: "3 места" },
                { day: "Пятница", time: "18:30", level: "Мастер-класс", spots: "2 места" },
                { day: "Суббота", time: "11:00", level: "Базовый", spots: "8 мест" },
                { day: "Воскресенье", time: "16:00", level: "Продвинутый", spots: "6 мест" }
              ].map((slot, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="text-lg font-semibold w-24">{slot.day}</div>
                        <div className="flex items-center text-gray-600">
                          <Icon name="Clock" size={16} className="mr-2" />
                          {slot.time}
                        </div>
                        <Badge variant="outline">{slot.level}</Badge>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">{slot.spots}</span>
                        <Button size="sm">Записаться</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold text-black mb-6">Ваш преподаватель</h2>
                <h3 className="text-2xl text-primary mb-4">Анна Михайлова</h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Мастер спорта по танцам, 8 лет опыта преподавания. Специализируется на танцах 
                  на высоких каблуках и женской пластике. Ученица ведущих танцевальных школ Европы.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Icon name="Award" size={20} className="text-primary mr-3" />
                    <span>Сертифицированный преподаватель High Heels</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Users" size={20} className="text-primary mr-3" />
                    <span>Более 500 учениц</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Star" size={20} className="text-primary mr-3" />
                    <span>Рейтинг 4.9/5</span>
                  </div>
                </div>
                <Button size="lg" variant="outline">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Задать вопрос
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="/img/102dfa39-4258-4588-b672-252c1cd5be6f.jpg" 
                  alt="Instructor" 
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-black mb-6">Отзывы учениц</h2>
            <p className="text-gray-600 text-lg">Что говорят наши студентки о курсе</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Мария К.",
                review: "Потрясающий курс! За месяц научилась уверенно двигаться на каблуках. Анна объясняет очень понятно.",
                rating: 5
              },
              {
                name: "Елена В.", 
                review: "Прямые трансляции - это что-то невероятное. Можно сразу получить обратную связь и исправить ошибки.",
                rating: 5
              },
              {
                name: "Анастасия Д.",
                review: "Рекомендую всем девушкам! Курс помог мне стать более уверенной и грациозной. Спасибо, Анна!",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.review}"</p>
                  <div className="font-semibold text-black">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">HIGH MOVE</div>
              <p className="text-gray-400">
                Онлайн школа танцев на высоких каблуках с живыми трансляциями
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Базовый курс</li>
                <li>Продвинутый</li>
                <li>Мастер-класс</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О преподавателе</li>
                <li>Расписание</li>
                <li>Отзывы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Icon name="Instagram" size={16} className="mr-2" />
                  @highmove_official
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@highmove.ru
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 High Move. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;