angular.module('app').constant('translations', {
    //translation data
    interface: {
        ru: {
            currency: '{{value}} ₴',
            header: {
                name: 'Спадок',
                logo: 'Благотворительный фонд "Спадок"',
                nav: { about: 'О нас', projects: 'Проекты', partners: 'Партнёры', contacts: 'Контакты' },
            },
            videos: "Видео с проектов",
            subscription: "Подпишись на рассылку проектов",
            feedback: "Возникли ли у вас вопросы или предложения?",
            reviews: "Отзывы",
            partners: "Наши партнёры",
            noProjects: 'Нет проектов',
            directives: {
                projectItem: {
                    button: "о проекте",
                    money: 'необходимо'
                },
                userItem: {
                    responsible: 'Ответственное лицо:',
                    email: 'Электронный адрес:',
                    phones: 'Телефон(ы):',
                    showContacts: 'Показать контакты'
                },
                partnerItem: {
                    helped: 'Помогли',
                    expand: 'развернуть',
                    contract: 'свернуть'
                },
                stats: {
                    toBeginning: 'до начала',
                    wasCompletedOn: 'назад завершен',
                    left: 'осталось собрать'
                }
            },
            pages: {
                main: {
                    aboutDetailed: "подробнее",
                    projectsAbout: "о проекте"
                },
                about: {
                    header: "Наша миссия - помощь нуждающимся",
                    ourCommunity: "Наше сообщество",
                    ourMission: "Наша миссия",
                    ourTeam: "Наша команда",
                    lookVideo: "Посмотреть видео"
                },
                projects: {
                    header: "Проекты",
                    selectButtons: { active: "активные", completed: "реализованные" }
                },
                project: {
                    lookVideo: "Посмотреть видео",
                    aboutProject: "О проекте",
                    purpose: "История и цель проекта",
                    subprojects: "Подпроекты",
                    donate: "пожертвовать",
                    collected: "собрано (с {{total}})"
                },
                partners: {
                    header: "Наши Партнёры"
                },
                contacts: {
                    address: "Адрес",
                    phone: "Телефон",
                    email: "E-mail"
                }
            },
            shared: {
                subscription: {
                    header: 'Подпишись на рассылку проектов',
                    inscription: 'Подписка даёт возможность получать информацию о появлении новых проектов и событий. Ваша личная информация остаётся конфиденциальной.'
                }
            }
        },
        uk: {
            currency: '{{value}} ₴',
            header: {
                name: 'Спадок',
                logo: 'Благодійний фонд "Спадок"',
                nav: { about: 'Про нас', projects: 'Проекти', partners: 'Партнеры', contacts: 'Контакти' },
            },
            videos: "Відео з проектів",
            subscription: "Підпишись на розсилку проектів",
            feedback: "Чи виникли у вас питання або пропозиції?",
            reviews: "Відгуки",
            partners: "Наші партнери",
            noProjects: 'Нема проектів',
            directives: {
                projectItem: {
                    button: "про проект",
                    money: 'необхідно'
                },
                userItem: {
                    responsible: 'Відповідальна особа:',
                    email: 'Електронна адреса:',
                    phones: 'Телефон(и):',
                    showContacts: 'Показати контакти'
                },
                partnerItem: {
                    helped: 'Допомогли',
                    expand: 'розгорнути',
                    contract: 'згорнути'
                },
                stats: {
                    toBeginning: 'до початку',
                    wasCompletedOn: 'назад завершений',
                    left: 'залишилось зібрати'
                }
            },
            pages: {
                main: {
                    aboutDetailed: "детальніше",
                    projectsAbout: "про проект"
                },
                about: {
                    header: "Наша міссія - допомога потребуючим",
                    ourCommunity: "Наша спільнота",
                    ourMission: "Наша міссія",
                    ourTeam: "Наша команда",
                    lookVideo: "Подивитися відео"
                },
                projects: {
                    header: "Проекти",
                    selectButtons: { active: "активні", completed: "реалізовані" }
                },
                project: {
                    lookVideo: "Подивитися відео",
                    aboutProject: "Про проект",
                    purpose: "Історія та ціль проекта",
                    subprojects: "Підпроекти",
                    donate: "пожертвувати",
                    collected: "зібрано (з {{total}})"
                },
                partners: {
                    header: "Наші партнери"
                },
                contacts: {
                    address: "Адреса",
                    phone: "Телефон",
                    email: "E-mail"
                }
            },
            shared: {
                subscription: {
                    header: 'Підпишись на розсилку проектів',
                    inscription: 'Підписка дає можливість отримувати інформацію про появу нових проектів і подій. Ваша особиста інформація залишається конфіденційною'
                }
            }
        },
        en: {
            currency: '{{value}} €',
            header: {
                name: 'Spadok',
                logo: 'A Charitable Foundation "Spadok"',
                nav: {about: 'About', projects: 'Projects', partners: 'Partners', contacts: 'Contacts'}
            },
            videos: "Videos",
            subscription: "Subscribe",
            feedback: "Do you have any feedback?",
            reviews: "Reviews",
            partners: "Our Partners",
            noProjects: 'No projects here',
            directives: {
                projectItem: {
                    button: "about",
                    money: 'necessary'
                },
                userItem: {
                    responsible: 'Responsible person:',
                    email: 'Email:',
                    phones: 'Phone(s):',
                    showContacts: 'Show contacts'
                },
                partnerItem: {
                    helped: 'Helped',
                    expand: 'expand',
                    contract: 'contract'
                },
                stats: {
                    toBeginning: 'to start',
                    wasCompletedOn: 'ago was finished',
                    left: 'left to collect'
                }
            },
            pages: {
                main: {
                    aboutDetailed: "more",
                    projectsAbout: "about"
                },
                about: {
                    header: "Our goal is to help people in need",
                    ourCommunity: "Our Community",
                    ourMission: "Our Goal",
                    ourTeam: "Our Team",
                    lookVideo: "Watch Video"
                },
                projects: {
                    header: "Projects",
                    selectButtons: {active: "active", completed: "completed"}
                },
                project: {
                    lookVideo: "Watch Video",
                    aboutProject: "About Project",
                    purpose: "History and Purpose of the Project",
                    subprojects: "Subproject",
                    donate: "donate",
                    collected: "collected (out of {{total}})"
                },
                partners: {
                    header: "Our Partners"
                },
                contacts: {
                    address: "Address",
                    phone: "Phone",
                    email: "E-mail"
                }
            },
            shared: {
                subscription: {
                    header: 'Subscribe on Projects',
                    inscription: 'Subscription lets to receive information about new projects and events. Your personal information remains confidential.'
                }
            }
        }
    },
    modals: {
        ru: {
            partners: {
                name: "стать партнёром",
                header: "Заполните партнёрские данные",
                placeholders: [
                    {placeholder: "Имя", type: "text", key: "name", value: ""},
                    {placeholder: "Организация", type: "text", key: "organization", value: ""},
                    {placeholder: "Email", type: "email", key: "email", value: ""},
                    {placeholder: "Сообщение*", type: '', key: "message", value: ""}
                ],
                action: "отправить",
                message: "Предложение о партнёрстве отправлено.",
                callerButtonText: "стать партнёром"
            },
            reviews: {
                name: "оставить отзыв",
                header: "Ваш отзыв очень важен для нас",
                placeholders: [
                    {placeholder: "Имя", type: "text", key: "name", value: ""},
                    {placeholder: "Род занятия", type: "text", key: "occupation", value: ""},
                    {placeholder: "Email", type: "email", key: "email", value: ""},
                    {placeholder: "Отзыв*", type: '', key: "message", value: ""}
                ],
                action: "отправить",
                message: "Ваш отзыв был успешно отправлен. Ожидайте, пожалуйста, его проверки.",
                callerButtonText: "оставить отзыв"
            },
            contacts: {
                name: "Написать нам",
                header: "Есть ли у вас вопроссы или предложения?",
                placeholders: [
                    {placeholder: "Имя", type: "text", key: "name", value: ""},
                    {placeholder: "Email", type: "email", key: "email", value: ""},
                    {placeholder: "Вопросы и предложения*", type: '', key: "message", value: ""}
                ],
                action: "отправить",
                message: "Ваше сообщение отправлено.",
                callerButtonText: "написать нам"
            },
            team: {
                name: "вступить в команду",
                header: "Бобро пожаловать в нашу команду",
                placeholders: [
                    {placeholder: "Имя", type: "text", key: "name", value: ""},
                    {placeholder: "Род занятия", type: "text", key: "occupation", value: ""},
                    {placeholder: "Email", type: "email", key: "email", value: ""},
                    { placeholder: "Сообщение*", type: '', key: "message", value: "" }
                ],
                action: "отправить",
                message: "Предложение о волонтёрстве. Ожидайте, пожалуйста, ответа.",
                callerButtonText: "вступить в команду"
            }
        },
        uk: {
            partners: {
                name: "стать партнёром",
                header: "Заполните партнёрские данные",
                placeholders: [
                    { placeholder: "Имя", type: "text", key: "name", value: "" },
                    { placeholder: "Организация", type: "text", key: "organization", value: "" },
                    { placeholder: "Email", type: "email", key: "email", value: "" },
                    { placeholder: "Сообщение*", type: '', key: "message", value: "" }
                ],
                action: "отправить",
                message: "Предложение о партнёрстве отправлено.",
                callerButtonText: "стать партнёром"
            },
            reviews: {
                name: "оставить отзыв",
                header: "Ваш отзыв очень важен для нас",
                placeholders: [
                    { placeholder: "Имя", type: "text", key: "name", value: "" },
                    { placeholder: "Род занятия", type: "text", key: "occupation", value: "" },
                    { placeholder: "Email", type: "email", key: "email", value: "" },
                    { placeholder: "Отзыв*", type: '', key: "message", value: "" }
                ],
                action: "отправить",
                message: "Ваш відгук був успішно відправлений. Очікуйте, будь ласка, на його перевірку.",
                callerButtonText: "оставить отзыв"
            },
            contacts: {
                name: "Написать нам",
                header: "Есть ли у вас вопроссы или предложения?",
                placeholders: [
                    { placeholder: "Имя", type: "text", key: "name", value: "" },
                    { placeholder: "Email", type: "email", key: "email", value: "" },
                    { placeholder: "Вопросы и предложения*", type: '', key: "message", value: "" }
                ],
                action: "отправить",
                message: "Ваше сообщение отправлено.",
                callerButtonText: "написать нам"
            },
            team: {
                name: "вступить в команду",
                header: "Бобро пожаловать в нашу команду",
                placeholders: [
                    { placeholder: "Имя", type: "text", key: "name", value: "" },
                    { placeholder: "Род занятия", type: "text", key: "occupation", value: "" },
                    { placeholder: "Email", type: "email", key: "email", value: "" },
                    { placeholder: "Повідомлення*", type: '', key: "message", value: "" }
                ],
                action: "отправить",
                message: "Пропозиція про волонтество успішно відправлена. Очікуйте, будь ласка, на відповідь.",
                callerButtonText: "вступить в команду"
            }
        },
        en: {
            partners: {
                name: "become a partner",
                header: "Please fill partner data",
                placeholders: [
                    {placeholder: "Name", type: "text", key: "name", value: ""},
                    {placeholder: "Organization", type: "text", key: "organization", value: ""},
                    {placeholder: "Email", type: "email", key: "email", value: ""},
                    {placeholder: "Message*", type: '', key: "message", value: ""}
                ],
                action: "send",
                message: "Your partnership proposal was successfully sent.. Please wait for response if needed.",
                callerButtonText: "become a partner"
            },
            reviews: {
                name: "write a review",
                header: "Your review is very valuable for us",
                placeholders: [
                    {placeholder: "Name", type: "text", key: "name", value: ""},
                    {placeholder: "Occupation", type: "text", key: "occupation", value: ""},
                    {placeholder: "Email", type: "email", key: "email", value: ""},
                    {placeholder: "Review*", type: '', key: "message", value: ""}
                ],
                action: "send",
                message: "Your review was successfully sent. Please wait for its moderation.",
                callerButtonText: "write a review"
            },
            contacts: {
                name: "write to us",
                header: "Do you have any questions or suggestions?",
                placeholders: [
                    {placeholder: "Name", type: "text", key: "name", value: ""},
                    {placeholder: "Email", type: "email", key: "email", value: ""},
                    {placeholder: "Questions and suggestions*", type: '', key: "message", value: ""}
                ],
                action: "send",
                message: "Your message was sent.",
                callerButtonText: "write to us"
            },
            team: {
                name: "join us",
                header: "Welcome to our team",
                placeholders: [
                    {placeholder: "Name", type: "text", key: "name", value: ""},
                    {placeholder: "Occupation", type: "text", key: "occupation", value: ""},
                    {placeholder: "Email", type: "email", key: "email", value: ""},
                    { placeholder: "Message*", type: '', key: "message", value: "" }
                ],
                action: "send",
                message: "Your proposal was successfully sent. Please wait for an answer.",
                callerButtonText: "join us"
            }
        }
    },

    //filter & translation data
    stats: {
        ru: {
            man: [
                {ends: '0|1|5|6|7|8|9', out: 'человек'},
                {ends: '2|3|4', out: 'человека'},
                {is: '11|12|13|14|15|16|17|18|19|20|21', out: 'человек'}
            ],
            volunteer: [
                {ends: '1', out: 'волонтёр'},
                {ends: '2|3|4', out: 'волонтёра'},
                {ends: '0|5|6|7|8|9', out: 'волонтёров'},
                {is: '11|12|13|14|15|16|17|18|19|20', out: 'волонтёров'}
            ],
            day: [
                {ends: '1', out: 'день'},
                {ends: '2|3|4', out: 'дня'},
                {ends: '0|5|6|7|8|9', out: 'дней'},
                {is: '11|12|13|14|15|16|17|18|19|20|21', out: 'дней'}
            ],
            donated: [
                {ends: '0|1|2|3|4|5|6|7|8|9', out: 'внесли средства'},
                {is: '1', out: 'внёс средства'}
            ],
            project: [
                { ends: '0|2|3|4|5|6|7|8|9', out: 'проектам' },
                { ends: '1', out: 'проекту' },
                { is: '11', out: 'проектам' }
            ]
        },
        uk: {
            man: [
                { ends: '0|5|6|7|8|9', out: 'людей' },
                { ends: '1', out: 'людина' },
                { ends: '2|3|4', out: 'людини' },
                { is: '11|12|13|14|15|16|17|18|19', out: 'людей' }
            ],
            volunteer: [
                { ends: '1', out: 'волонтёр' },
                { ends: '2|3|4', out: 'волонтёра' },
                { ends: '0|5|6|7|8|9', out: 'волонтёров' },
                { is: '11|12|13|14|15|16|17|18|19|20', out: 'волонтёров' }
            ],
            day: [
                { ends: '1', out: 'день' },
                { ends: '2|3|4', out: 'дня' },
                { ends: '0|5|6|7|8|9', out: 'дней' },
                { is: '11|12|13|14|15|16|17|18|19|20|21', out: 'дней' }
            ],
            donated: [
                { ends: '0|1|2|3|4|5|6|7|8|9', out: 'внесли средства' },
                { is: '1', out: 'внёс средства' }
            ],
            project: [
                { ends: '0|2|3|4|5|6|7|8|9', out: 'проектам' },
                { ends: '1', out: 'проекту' },
                { is: '11', out: 'проектам' }
            ]
        },
        en: {
             man: [
                 {ends: '0|1|2|3|4|5|6|7|8|9', out: 'person'},
                 {is: '1', out: 'person'}
             ],
             volunteer: [
                 {ends: '0|1|2|3|4|5|6|7|8|9', out: 'volunteers'},
                 {is: '1', out: 'volunteer'}
             ],
             day: [
                 {ends: '0|1|2|3|4|5|6|7|8|9', out: 'days'},
                 {is: '1', out: 'day'}
             ],
             donated: [
                 {ends: '0|1|2|3|4|5|6|7|8|9', out: 'donated'}
             ],
             project: [
                 { ends: '0|1|2|3|4|5|6|7|8|9', out: 'projects' },
                 { is: '1', out: 'project' }
             ]
         }
    }
});