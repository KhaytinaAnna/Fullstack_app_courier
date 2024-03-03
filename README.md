# Сайт для взаимодействия с курьерами

Возможны три роли при входе н сайт: курьер, админ и руководитель. У каждой роли будет своя страничка-аккаунт, где можно задавать свои данные (типа ФИО, телефон, и тд). Админы могут назначать заказы курьерам. Составлять заказаы, смотреть адрес доставки, назанчать курьеров на заказ, тослеживать их, регистрировать новых курьеров и тд. Сами курьеры будут видеть назначенные им заказы, историю заказов, а так же можно посмотреть местоположение цели на карте.
Руководитель может отслеживать, сколько доставлено заказов - тоже "следить за курьерами"

Ссылка на figma: https://www.figma.com/file/Q3fykloJ3gXVcJclSSZnIO/Untitled?type=design&node-id=0%3A1&mode=design&t=mEoK2Ipn886Zx9MO-1

Чтобы запустить проект:
$ yarn install
$ yarn build
$ yarn start

Переходим в браузер и вводим localhost:3000. Нам откроется меню. Чтобы зайти в соответствующую роль, можно ввести 
админ: admin@mail.ru (111111)
курьер: courier@mail.ru (111111)
руководитель: chief@mail.ru (111111)