var routerController = (app) => {
    const fs = require('fs');
    const mailgun = require('mailgun-js');
    const parseEmail = require('./services/parseEmailService');

    app.post('/sendmail', function (req, res) {
        if (req.body.key === 'spadOk') {
            var data = parseEmail(req.body);
            var apiKey = 'key-a30feefc607588d47ddace28b4f0c355';
            var domain = 'spadok.net';
            var body = `
ВНИМАНИЕ! Даный получатель (no-reply@spadok.net) не имеет входящего ящика. Если отправитель указал email, используйте функцию "переслать" и введите в поле адреса укзанный адрес ${data.email}
Имя: ${data.name || 'Пользователь не указал имени'};
Организация (для партнёров): ${data.organization};
Род занятий (для потенциальных волонтёров): ${data.occupation};
Обратный адрес: ${data.email || 'Пользователь не указал обратного электронного адреса'};

Текст: ${data.message}
                `
            var email = {
                from: 'no-reply@spadok.net',
                to: data.source,
                subject: data.subject,
                text: body
            }
            var sender = mailgun({ apiKey: apiKey, domain: domain });

            sender.messages().send(email, (err, body) => {
                if (err) {
                    res.status(500).json(err)
                } else {
                    res.status(200).json(body);
                }
            })
        } else {
            res.status(200).send('Invalid key')
        }
    })

    app.get('/health', function (req, res) {
        res.writeHead(200);
        res.end('1');
    });

    app.get('/*', function (req, res) {
        fs.readFile('./static/dist/index.html', 'UTF8', (err, data) => {
            if (err) throw err;
            res.send(data);
        })
    });
};

module.exports = routerController;