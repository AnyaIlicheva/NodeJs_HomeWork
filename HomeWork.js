const http = require('http');
let CounterFirst = 0;
let ContentSecond = 0;

  const server = http.createServer((req, res) => { //функция обработчик
    console.log('Запрос получен');

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        CounterFirst++;
        res.end(`<h1>Корневая страница</h1>
            <p>Просмотров: ${CounterFirst}</p>
            <a href='/about'>Ссылка на страницу /about</a>`) 
            //метод end - метод передачи контента
    } else if (req.url === '/about') { //Проверяем url на соответствие строке
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        ContentSecond++;
        res.end(`<h1>Страница about!</h1>
            <p>Просмотров: ${ContentSecond}</p>
            <a href='/'>Ссылка на страницу /</a>`)
    }
    //Обработка несуществующих URL
        else {
            res.writeHead(404, {
                'Content-Type': 'text/html; charset=UTF-8',
            });
            res.end('<h1>Страница не найдена!</h1>')
        }
    
  });
  const port = 3000;

  server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
  });