const app = Vue.createApp({
    data() {
      return {
        // the date my career started (change to yours)
        careerStartDate: 2009,
  
        // the date copyright started (change to yours)
        copyrightStartDate: 2021,
  
        // for the template theme
        appTheme: 'light_theme',
        savedTheme: null,
  
        // flag to toggle the preloader
        isPreloading: true,
  
        // toast notifications array
        notifications: [],
  
        // manage loading spinner status
        ajaxLoading: [],
  
        // for minimizing the header on scrolling down
        startMinimizingHeaderAt: 100,
        isHeaderBig: true,
        // for toggling the header on scrolling down
        lastScrollPosition: 0,
        isHeaderHidden: false,
        // for scroll to top button
        startShowingScrollTopBtnAt: 600,
        isScrollTopBtnDisplayed: false,
  
        // flag to toggle focus style class
        isAnyFocus: false,
  
        // flag to toggle nav menu
        isNavMenuOpen: false,
  
        // list of nav links to loop through it
        navLinks: [
          {
            url: 'index.html#hero',
            title: { en: 'Home', ar: 'الرئيسية' }
          }, {
            url: 'index.html#about',
            title: { en: 'About', ar: 'من أنا' }
          }, {
            url: 'index.html#skills',
            title: { en: 'Skills', ar: 'مهاراتي' }
          }, {
            url: 'index.html#portfolio',
            title: { en: 'Portfolio', ar: 'أعمالي' }
          }, {
            url: 'index.html#contact',
            title: { en: 'Contact', ar: 'اتصل بي' }
          }
        ],
  
        // flag to toggle between skills types in skills section
        skillsType: '',
  
        // list of skills items to loop through it
        skillsItems: [
          {
            imgUrl: 'assets/images/skills/html5.png',
            title: 'HTML5'
          }, {
            imgUrl: 'assets/images/skills/css3.png',
            title: 'CSS3'
          }, {
            imgUrl: 'assets/images/skills/javascript.png',
            title: 'JavaScript'
          }, {
            imgUrl: 'assets/images/skills/typescript.png',
            title: 'TypeScript'
          }, {
            imgUrl: 'assets/images/skills/jquery.png',
            title: 'jQuery'
          }, {
            imgUrl: 'assets/images/skills/bootstrap.png',
            title: 'Bootstrap'
          }, {
            imgUrl: 'assets/images/skills/angular.png',
            title: 'Angular'
          }, {
            imgUrl: 'assets/images/skills/react.png',
            title: 'React'
          }, {
            imgUrl: 'assets/images/skills/vue.png',
            title: 'Vue'
          }, {
            imgUrl: 'assets/images/skills/firebase.png',
            title: 'Firebase'
          }, {
            imgUrl: 'assets/images/skills/pugjs.png',
            title: 'PugJS'
          }, {
            imgUrl: 'assets/images/skills/sass.png',
            title: 'SASS'
          }
        ],
  
        // list of tools items to loop through it
        toolsItems: [
          {
            imgUrl: 'assets/images/skills/ajax.png',
            title: 'Ajax'
          }, {
            imgUrl: 'assets/images/skills/gulp.png',
            title: 'Gulp'
          }, {
            imgUrl: 'assets/images/skills/webpack.png',
            title: 'Webpack'
          }, {
            imgUrl: 'assets/images/skills/git.png',
            title: 'Git (Github)'
          }, {
            imgUrl: 'assets/images/skills/npm.png',
            title: 'Npm'
          }, {
            imgUrl: 'assets/images/skills/command.png',
            title: 'Command Line'
          }, {
            imgUrl: 'assets/images/skills/vs-code.png',
            title: 'VS Code'
          }, {
            imgUrl: 'assets/images/skills/trello.png',
            title: 'Trello'
          }, {
            imgUrl: 'assets/images/skills/clickup.png',
            title: 'ClickUp'
          }, {
            imgUrl: 'assets/images/skills/slack.png',
            title: 'Slack'
          }, {
            imgUrl: 'assets/images/skills/photoshop.png',
            title: 'Photoshop'
          }, {
            imgUrl: 'assets/images/skills/adobe-xd.png',
            title: 'Adobe XD'
          }
        ],
  
        // list of experience items to loop through it
        experienceItems: [
          {
            date: '2009',
            companyName: { en: 'Google Inc.', ar: 'شركة جوجل' },
            jobTitle: { en: 'Front-End Developer', ar: 'مطور الواجهة الأمامية' },
            desc: {
              en: 'Monitored technical aspects of the front-end delivery for projects.',
              ar: 'مراقبة الجوانب الفنية لتطوير الواجهات الأمامية للمشاريع.'
            }
          }, {
            date: '2011',
            companyName: { en: 'Facebook Inc.', ar: 'شركة فيسبوك' },
            jobTitle: { en: 'Full Stack Developer', ar: 'مطوّر الويب المتكامل' },
            desc: {
              en: 'Collaborate with creative and development teams on the execution of ideas.',
              ar: 'تعاونت مع الفرق الإبداعية في تطوير وتنفيذ أفكار مبتكرة.'
            }
          }, {
            date: '2013',
            companyName: { en: 'Envato Inc.', ar: 'شركة انفاتو' },
            jobTitle: { en: 'UI/UX Developer', ar: 'مطور UI/UX' },
            desc: {
              en: 'Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript.',
              ar: 'تم تحويل تخطيطات Photoshop إلى صفحات ويب باستخدام HTML و CSS و JavaScript.'
            }
          }, {
            date: '2015',
            companyName: { en: 'Google Inc.', ar: 'شركة جوجل' },
            jobTitle: { en: 'Front-End Developer', ar: 'مطور الواجهة الأمامية' },
            desc: {
              en: 'Monitored technical aspects of the front-end delivery for projects.',
              ar: 'مراقبة الجوانب الفنية لتطوير الواجهات الأمامية للمشاريع.'
            }
          }, {
            date: '2017',
            companyName: { en: 'Facebook Inc.', ar: 'شركة فيسبوك' },
            jobTitle: { en: 'Full Stack Developer', ar: 'مطوّر الويب المتكامل' },
            desc: {
              en: 'Collaborate with creative and development teams on the execution of ideas.',
              ar: 'تعاونت مع الفرق الإبداعية في تطوير وتنفيذ أفكار مبتكرة.'
            }
          }, {
            date: '2019',
            companyName: { en: 'Google Inc.', ar: 'شركة جوجل' },
            jobTitle: { en: 'Front-End Developer', ar: 'مطور الواجهة الأمامية' },
            desc: {
              en: 'Monitored technical aspects of the front-end delivery for projects.',
              ar: 'مراقبة الجوانب الفنية لتطوير الواجهات الأمامية للمشاريع.'
            }
          }, {
            date: '2021',
            companyName: { en: 'Facebook Inc.', ar: 'شركة فيسبوك' },
            jobTitle: { en: 'Full Stack Developer', ar: 'مطوّر الويب المتكامل' },
            desc: {
              en: 'Collaborate with creative and development teams on the execution of ideas.',
              ar: 'تعاونت مع الفرق الإبداعية في تطوير وتنفيذ أفكار مبتكرة.'
            }
          }, {}, {}
        ],
  
        // current page of portfolio items
        portfolioItemsPage: 1,
  
        // portfolio items per page
        itemsPerPage: 7,
  
        // portfolio items filter by type
        filters: ['All', 'HTML', 'Angular', 'Vue'],
        currentFilter: 'All',
  
        // portfolio archive name
        portfolioArchiveName: '',
  
        // list of portfolio items to loop through it
        allPortfolioItems: [
          {
            id: 1,
            url: 'single-portfolio.html?id=1',
            imgUrl: 'assets/images/portfolio/brain.jpeg',
            title: { en: 'AARP Staying Sharp', ar: 'هنا عنوان المشروع 1' },
            date: { en: 'April 2019', ar: 'أبريل 2021' },
            desc: {
              en: 'Staying Sharp is a program that provides evidence-based information and actions you can take to maintain and improve your brain health as you age. Choose from articles, recipes, activities, videos and fun brain games designed to fit into your daily routine. Create your own plan by saving the actions that inspire you.',
              ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
            },
            category: 'React',
            tools: ['HTML', 'React Js', 'AEM Contexthub', 'AEM', 'CSS', 'SCSS', 'JavaScript', 'Webpack', 'deque'],
            screenshots: {
              img1: {
                url: 'assets/images/single-portfolio/brain.jpeg',
                caption: { en: 'Brain Health', ar: 'تسمية توضيحية 5' }
              },
              img2: {
                url: 'assets/images/single-portfolio/brain2.png',
                caption: { en: 'Brain Assessment', ar: 'تسمية توضيحية 4' }
              },
              img3: {
                url: 'assets/images/single-portfolio/brain3.jpeg',
                caption: { en: 'Brain related Articles', ar: 'تسمية توضيحية 3' }
              },
              img4: {
                url: 'assets/images/single-portfolio/single-portfolio-2.png',
                caption: { en: 'Brain Activities', ar: 'تسمية توضيحية 2' }
              },
              img5: {
                url: 'assets/images/single-portfolio/single-portfolio-1.png',
                caption: { en: 'Brain Games', ar: 'تسمية توضيحية 1' }
              }
            }
          }, {
            id: 2,
            url: 'single-portfolio.html?id=2',
            imgUrl: 'assets/images/portfolio/travel.jpeg',
            title: { en: 'Redawning', ar: 'هنا عنوان المشروع 2' },
            date: { en: 'April 2018', ar: 'أبريل 2021' },
            desc: {
              en: 'vacation rental partner to the travel industry.RedAwning is password protected booking tool that gives travel advisors, tour operators, and other industry partners access to over 140,000 vacation rentals worldwide.',
              ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
            },
            category: 'React',
            tools: ['HTML', 'React', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'AJAX', 'NodeJs', 'MongoDB'],
            screenshots: {
              img1: {
                url: 'assets/images/single-portfolio/travel.jpeg',
                caption: { en: 'Vaccation Homes', ar: 'تسمية توضيحية 5' }
              },
              img2: {
                url: 'assets/images/single-portfolio/travel1.jpeg',
                caption: { en: 'Vaccation Homes', ar: 'تسمية توضيحية 4' }
              },
              img3: {
                url: 'assets/images/single-portfolio/travel2.png',
                caption: { en: 'Travel', ar: 'تسمية توضيحية 3' }
              },
              img4: {
                url: 'assets/images/single-portfolio/single-portfolio-5.png',
                caption: { en: 'travel advisors', ar: 'تسمية توضيحية 2' }
              },
              img5: {
                  url: 'assets/images/single-portfolio/travel4.png',
                  caption: { en: 'vacation rentals', ar: 'تسمية توضيحية 2' }
                },
          
            }
          }, {
            id: 3,
            url: 'single-portfolio.html?id=3',
            imgUrl: 'assets/images/portfolio/leasestar3.jpeg',
            title: { en: 'Leasestar Marketing', ar: 'هنا عنوان المشروع 3' },
            date: { en: 'April 2015', ar: 'أبريل 2021' },
            desc: {
              en: 'RealPage provides a technology platform that enables real estate owners and managers to change how people experience and use rental space. Clients use the platform to gain transparency into asset performance, leverage data insights and monetize space to create incremental yields.',
              ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
            },
            category: 'Angular',
            tools: ['HTML', 'Angular', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Materialize', 'AJAX'],
            screenshots: {
              img1: {
                url: 'assets/images/single-portfolio/leasestar.jpeg',
                caption: { en: 'Generate Revenue', ar: 'تسمية توضيحية 5' }
              },
              img2: {
                url: 'assets/images/single-portfolio/leasestar1.jpeg',
                caption: { en: 'Marketing Data', ar: 'تسمية توضيحية 4' }
              },
              img3: {
                url: 'assets/images/single-portfolio/leasestar2.jpeg',
                caption: { en: 'Attractive Marketing Dashboard', ar: 'تسمية توضيحية 3' }
              },
              img4: {
                url: 'assets/images/single-portfolio/leasestar3.jpeg',
                caption: { en: 'Generate More Leads', ar: 'تسمية توضيحية 2' }
              },
              img5: {
                url: 'assets/images/single-portfolio/leasestar4.jpeg',
                caption: { en: 'Lead Generations', ar: 'تسمية توضيحية 1' }
              }
            }
          }, {
            id: 4,
            url: 'single-portfolio.html?id=4',
            imgUrl: 'assets/images/portfolio/apollo4.png',
            title: { en: 'Apollo Edu', ar: 'هنا عنوان المشروع 4' },
            date: { en: 'March 2014', ar: 'أبريل 2021' },
            desc: {
              en: 'The apollo edu is an open-enrollment institution of higher Learning There students study online on their campus solutions.',
              ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
            },
            category: 'HTML',
            tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'TailwindCSS', 'AJAX', 'Angular', 'NodeJs', 'MongoDB'],
            screenshots: {
              img1: {
                url: 'assets/images/single-portfolio/apollo1.jpeg',
                caption: { en: 'OnlineCourses', ar: 'تسمية توضيحية 4' }
              },
              img2: {
                url: 'assets/images/single-portfolio/apollo2.jpeg',
                caption: { en: 'Online Education Service', ar: 'تسمية توضيحية 3' }
              },
              img3: {
                url: 'assets/images/single-portfolio/apollo3.jpeg',
                caption: { en: 'Online Training', ar: 'تسمية توضيحية 2' }
              },
              img4: {
                url: 'assets/images/single-portfolio/apollo4.png',
                caption: { en: 'Educations Service', ar: 'تسمية توضيحية 1' }
              }
            }
          }, {
            id: 5,
            url: 'single-portfolio.html?id=5',
            imgUrl: 'assets/images/portfolio/apollo2.jpeg',
            title: { en: 'University of Phenoix', ar: 'هنا عنوان المشروع 5' },
            date: { en: 'April 2013', ar: 'أبريل 2021' },
            desc: {
              en: 'The University of Phoenix is an open-enrollment institution of higher Learning There students study online on their campus solutions.',
              ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
            },
            category: 'Angular',
            tools: ['HTML', 'Angular', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Bootstrap', 'AJAX', 'AEM'],
            screenshots: {
              img1: {
                url: 'assets/images/single-portfolio/apollo1.jpeg',
                caption: { en: 'OnlineCourses', ar: 'تسمية توضيحية 4' }
              },
              img2: {
                url: 'assets/images/single-portfolio/apollo2.jpeg',
                caption: { en: 'Online Education Service', ar: 'تسمية توضيحية 3' }
              },
              img3: {
                url: 'assets/images/single-portfolio/apollo3.jpeg',
                caption: { en: 'Online Training', ar: 'تسمية توضيحية 2' }
              },
              img4: {
                url: 'assets/images/single-portfolio/apollo4.png',
                caption: { en: 'Educations Service', ar: 'تسمية توضيحية 1' }
              }
            }
          }, {
            id: 6,
            url: 'single-portfolio.html?id=6',
            imgUrl: 'assets/images/portfolio/paychex3.jpeg',
            title: { en: 'Paychex', ar: 'هنا عنوان المشروع 6' },
            date: { en: 'july 2012', ar: 'أبريل 2021' },
            desc: {
              en: 'Paychex has HR solutions to fit the needs of any size business, from startup to enterprise. Let Paychex help you take your business where it needs to go.',
              ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
            },
            category: 'HTML',
            tools: ['HTML', 'Perl', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Materialize', 'AJAX', 'TeamSite'],
            screenshots: {
              img1: {
                url: 'assets/images/single-portfolio/paychex1.png',
                caption: { en: 'HR Services', ar: 'تسمية توضيحية 5' }
              },
              img2: {
                url: 'assets/images/single-portfolio/paychex2.jpeg',
                caption: { en: 'Partner Solutions', ar: 'تسمية توضيحية 4' }
              },
              img3: {
                url: 'assets/images/single-portfolio/paychex3.jpeg',
                caption: { en: 'Business Solutions', ar: 'تسمية توضيحية 3' }
              },
              img4: {
                url: 'assets/images/single-portfolio/paychex4.jpeg',
                caption: { en: 'HR Process', ar: 'تسمية توضيحية 2' }
              },
              img5: {
                url: 'assets/images/single-portfolio/paychex5.jpg',
                caption: { en: 'HR Solutions', ar: 'تسمية توضيحية 1' }
              }
            }
          }, {
            id: 7,
            url: 'single-portfolio.html?id=7',
            imgUrl: 'assets/images/portfolio/wedding.jpeg',
            title: { en: 'BWW Wedding Planner', ar: 'هنا عنوان المشروع 7' },
            date: { en: 'August 2013', ar: 'أبريل 2021' },
            desc: {
              en: 'BWW wedding planner is company based on India provides various wedding events services',
              ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
            },
            category: 'HTML',
            tools: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Bootstrap', 'AJAX'],
            screenshots: {
              img1: {
                url: 'assets/images/single-portfolio/wedding1.jpeg',
                caption: { en: 'Wedding Events Services', ar: 'تسمية توضيحية 5' }
              },
              img2: {
                url: 'assets/images/single-portfolio/wedding.jpeg',
                caption: { en: 'Bridal/Groom Wear', ar: 'تسمية توضيحية 4' }
              },
              img3: {
                url: 'assets/images/single-portfolio/wedding2.jpeg',
                caption: { en: 'Photographers', ar: 'تسمية توضيحية 3' }
              },
              img4: {
                url: 'assets/images/single-portfolio/wedding3.png',
                caption: { en: 'Invitation Cards', ar: 'تسمية توضيحية 2' }
              },
              img5: {
                url: 'assets/images/single-portfolio/wedding4.png',
                caption: { en: 'Catering Services', ar: 'تسمية توضيحية 1' }
              }
            }
          }, {
            id: 8,
            url: 'single-portfolio.html?id=8',
            imgUrl: 'assets/images/portfolio/gamma.jpg',
            title: { en: 'Gamma Game', ar: 'هنا عنوان المشروع 8' },
            date: { en: 'April 2021', ar: 'أبريل 2021' },
            desc: {
              en: 'Gamma Game is mobile based games supports for all mobile versions',
              ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
            },
            category: 'React',
            tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'AJAX', 'NodeJs',],
            screenshots: {
              img1: {
                url: 'assets/images/single-portfolio/gamma.jpg',
                caption: { en: 'Game Screen', ar: 'تسمية توضيحية 5' }
              },
              img2: {
                url: 'assets/images/single-portfolio/gamma1.png',
                caption: { en: 'Game Screen', ar: 'تسمية توضيحية 4' }
              },
              img3: {
                url: 'assets/images/single-portfolio/gamma2.png',
                caption: { en: 'Game Screen', ar: 'تسمية توضيحية 3' }
              },
              img4: {
                url: 'assets/images/single-portfolio/gamma3.png',
                caption: { en: 'Game Screen', ar: 'تسمية توضيحية 2' }
              }
            
            }
          }, {
            id: 9,
            url: 'single-portfolio.html?id=9',
            imgUrl: 'assets/images/portfolio/webreview.jpeg',
            title: { en: 'A Conclusive Approach To Analyze Web Reviews Through Maximal Phrase Based Technique', ar: 'هنا عنوان المشروع 9' },
            date: { en: 'April 2012', ar: 'أبريل 2021' },
            desc: {
              en: 'Its a conclusive approach to analyze comments or reviews about a product/searched term from the web. In this paper we explore the use of phrases occurring maximally in text as properties for sentiment classification of product reviews. The approach does not rely on predefined sentiment lexicons, and the motivation for this is that potentially every word could be considered as expressing something positive and/or negative in different situations, and that the context and the personal attitude of the opinion holder should be taken into consideration while determining the polarity of the phrase, instead of doing this out of a particular context.',
              ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
            },
            category: 'HTML',
            tools: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Python', 'AJAX', 'Java'],
            screenshots: {
              img1: {
                url: 'assets/images/single-portfolio/webreview.png',
                caption: { en: 'Text Mining', ar: 'تسمية توضيحية 5' }
              },
              img2: {
                url: 'assets/images/single-portfolio/webreview.jpeg',
                caption: { en: 'Text Analysis', ar: 'تسمية توضيحية 4' }
              },
              img3: {
                url: 'assets/images/single-portfolio/webreview3.png',
                caption: { en: 'Sentiment Review', ar: 'تسمية توضيحية 3' }
              },
              img4: {
                url: 'assets/images/single-portfolio/webreview2.jpeg',
                caption: { en: 'Deep Mining', ar: 'تسمية توضيحية 2' }
              },
              img5: {
                url: 'assets/images/single-portfolio/single-portfolio-1.png',
                caption: { en: 'Deep Analysis', ar: 'تسمية توضيحية 1' }
              }
            }
          }, {
            id: 10,
            url: 'single-portfolio.html?id=10',
            imgUrl: 'assets/images/portfolio/apollo4.png',
            title: { en: 'Careers Tools', ar: 'هنا عنوان المشروع 10' },
            date: { en: 'April 2013', ar: 'أبريل 2021' },
            desc: {
              en: `This is one of the major projects for University of Phoenix which provides guidance about the career
              opportunities, Market analysis, build resumes, Career resources and community to the military and
              nonmilitary students. University students can build their careers and hunting their dream jobs.`,
              ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
            },
            category: 'HTML',
            tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Bootstrap', 'AJAX', 'Angular', 'NodeJs', 'MongoDB'],
            
          }, {
            id: 11,
            url: 'single-portfolio.html?id=11',
            imgUrl: 'assets/images/portfolio/jobsearch.jpeg',
            title: { en: 'Job Search - University of phoenix(Responsive)', ar: 'هنا عنوان المشروع 11' },
            date: { en: 'April 2021', ar: 'أبريل 2021' },
            desc: {
              en: 'This tool exploring exciting job opportunities from leading employers across the nation through the Phoenix Career Services Employer Portal. Here, hundreds of employers across the country and in many different industries provide lists of career and internship opportunities and information about their corporate culture and mission.',
              ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
            },
            category: 'HTML',
            tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'TailwindCSS', 'AJAX', 'Angular', 'Firebase'],
        
          }, {
            id: 12,
            url: 'single-portfolio.html?id=12',
            imgUrl: 'assets/images/portfolio/search.jpeg',
            title: { en: 'Search Engine Marketing', ar: 'هنا عنوان المشروع 12' },
            date: { en: 'April 2021', ar: 'أبريل 2021' },
            desc: {
              en: 'we develop Search engine marketing (SEM) webpage for University of Phoenix. It helps in the form of Internet marketing that involves the promotion of their features by increasing their visibility in search engine results pages (SERPs) through optimization and advertising.',
              ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
            },
            category: 'Angular',
            tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Materialize', 'AJAX', 'Vue', 'NodeJs', 'MongoDB'],
            
          }, {
            id: 13,
            url: 'single-portfolio.html?id=13',
            imgUrl: 'assets/images/portfolio/resume.jpeg',
            title: { en: 'Resume Builder', ar: 'هنا عنوان المشروع 13' },
            date: { en: 'April 2021', ar: 'أبريل 2021' },
            desc: {
              en: 'Online Tool for Building Resume from Scratch using web',
              ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
            },
            category: 'Angular',
            tools: ['HTML',  'CSS', 'SCSS', 'JavaScript', 'Gulp', 'TailwindCSS', 'AJAX', 'Angular', 'Firebase'],
            
          }, {
            id: 14,
            url: 'single-portfolio.html?id=14',
            imgUrl: 'assets/images/portfolio/clickplay.png',
            title: { en: 'Click-play', ar: 'هنا عنوان المشروع 15' },
            date: { en: 'April 2017', ar: 'أبريل 2021' },
            desc: {
              en: 'Click-play is a marketplace where user can sell their service like freelancer, upwork etc',
              ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
            },
            category: 'React',
            tools: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Materialize', 'AJAX', 'React', 'Firebase'],
            screenshots: {
              img1: {
                url: 'assets/images/single-portfolio/single-portfolio-5.png',
                caption: { en: 'Freelancer Skills', ar: 'تسمية توضيحية 5' }
              },
              img2: {
                url: 'assets/images/single-portfolio/single-portfolio-4.png',
                caption: { en: 'Pay for your Skills', ar: 'تسمية توضيحية 4' }
              },
              img3: {
                url: 'assets/images/single-portfolio/single-portfolio-3.png',
                caption: { en: 'Payment Managment', ar: 'تسمية توضيحية 3' }
              },
              img4: {
                url: 'assets/images/single-portfolio/single-portfolio-2.png',
                caption: { en: 'Work Management', ar: 'تسمية توضيحية 2' }
              },
              img5: {
                url: 'assets/images/single-portfolio/single-portfolio-1.png',
                caption: { en: 'Upgrade Skills', ar: 'تسمية توضيحية 1' }
              }
            }
          }, {
            id: 15,
            url: 'single-portfolio.html?id=15',
            imgUrl: 'assets/images/portfolio/class1.jpeg',
            title: { en: 'Next Gen classified', ar: 'هنا عنوان المشروع 16' },
            date: { en: 'April 2015', ar: 'أبريل 2021' },
            desc: {
              en: 'Next Gen classified is like "buyers and sellers marketplace like eBay"',
              ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
            },
            category: 'Angular',
            tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Bootstrap', 'AJAX', 'NodeJs', 'MongoDB'],
            screenshots: {
              img1: {
                url: 'assets/images/single-portfolio/class.jpg',
                caption: { en: 'Classified Services', ar: 'تسمية توضيحية 5' }
              },
              img2: {
                url: 'assets/images/single-portfolio/class1.jpeg',
                caption: { en: 'Product Explore', ar: 'تسمية توضيحية 4' }
              },
              img3: {
                url: 'assets/images/single-portfolio/class2.png',
                caption: { en: 'Marketplace', ar: 'تسمية توضيحية 3' }
              },
              img4: {
                url: 'assets/images/single-portfolio/class3.png',
                caption: { en: 'More Leads', ar: 'تسمية توضيحية 2' }
              },
              img5: {
                url: 'assets/images/single-portfolio/class4.jpeg',
                caption: { en: 'Social Sharing', ar: 'تسمية توضيحية 1' }
              }
            }
          }, {
            id: 16,
            url: 'single-portfolio.html?id=16',
            imgUrl: 'assets/images/portfolio/portfolio-6.png',
            title: { en: 'EasySign Solutions', ar: 'هنا عنوان المشروع 17' },
            date: { en: 'April 2014', ar: 'أبريل 2021' },
            desc: {
              en: 'EasySign Solutions is an Indian logistics company that provides courier delivery services.',
              ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
            },
            category: 'Angular',
            tools: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'TailwindCSS', 'AJAX', 'Angular', 'Firebase'],
            
          }, {
            id: 17,
            url: 'single-portfolio.html?id=17',
            imgUrl: 'assets/images/portfolio/slambook.png',
            title: { en: 'Slambook', ar: 'هنا عنوان المشروع 18' },
            date: { en: 'Nov 2015', ar: 'أبريل 2021' },
            desc: {
              en: 'Slambook app provides user freindly UX for capturing old memories into digital world',
              ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
            },
            category: 'React',
            tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Materialize', 'AJAX', 'React', 'NodeJs', 'MongoDB'],
            screenshots: {
              img1: {
                url: 'assets/images/single-portfolio/slambook.png',
                caption: { en: 'Slambook', ar: 'تسمية توضيحية 5' }
              },
              img2: {
                url: 'assets/images/single-portfolio/slambook1.png',
                caption: { en: 'Share Memories', ar: 'تسمية توضيحية 4' }
              },
              img3: {
                url: 'assets/images/single-portfolio/slambook2.jpeg',
                caption: { en: 'Capture Memories', ar: 'تسمية توضيحية 3' }
              },
              img4: {
                url: 'assets/images/single-portfolio/slambook3.png',
                caption: { en: 'Report', ar: 'تسمية توضيحية 2' }
              },
             
            }
          }
        ].reverse(),
  
        // viewed portfolio items
        portfolioItems: [],
  
        // list of testimonials items to loop through it
        testimonialsItems: [
          {
            imgUrl: 'assets/images/testimonials/rakesh.jpeg',
            quoteContent: {
              en: 'Sourabh is a very enthusiastic person as well as a technical guy at his best. He is very confident, self motivated and knowledgeable in his area of work. He is also fun to work with and a good team player. I wish him all the best in his endeavors.',
              ar: 'محمد يقدم خدمات مذهلة في تطوير الويب، ولديه فريق محترف يجعل التعامل معهم مطمئن للغاية. أوصي بفريقهم للجميع.'
            },
            quoteAuthor: { en: 'Rakesh Jha', ar: 'جابر العواني' },
            jobTitle: { en: 'Minimalist | Human | Software & Technology', ar: 'مصور فوتوغرافي' }
          }, {
            imgUrl: 'assets/images/testimonials/narsimlu.png',
            quoteContent: {
              en: 'Sourabh is very good team player and hard worker. I am very be comfortable while working with him.',
              ar: 'محمد مطور محترف للغاية يقدم دائمًا نتائج عالية الجودة ، وهو دائمًا موجود للمساعدة. نتطلع إلى العمل معه في مشاريع أخرى.'
            },
            quoteAuthor: { en: 'Narsimlu Katam', ar: 'مصطفى الخليفي' },
            jobTitle: { en: 'AEM Developer Lead', ar: 'أخصائي SEO' }
          }, 
          {
            imgUrl: 'assets/images/testimonials/sumit.jpeg',
            quoteContent: {
              en: 'Sourabh is a great project partner, I really enjoyed as worked with him.. This is very timely as I am about to write my first recommendation for a colleague. Sourabh is extremely enthusiastic about his work which is infectious. I certainly would recommend him for any helps in projects or discussions.',
              ar: 'فريق ممتاز للعمل معه. إيجابي دائمًا للعثور على الحل الأنسب. هم إحدى شركات تطوير الويب المحترفة التي تقدم خدمات رائعة.'
            },
            quoteAuthor: { en: 'Sumit Munot', ar: 'حسون القلال' },
            jobTitle: { en: 'Delivery Manager at NeoSOFT Technologies', ar: 'مدير المشاريع' }
          },
          {
            imgUrl: 'assets/images/testimonials/cameron.png',
            quoteContent: {
              en: `Over the time Mr. Sen has worked under my per-view as Lead UX for AARP I have watched him improve in both his technical and  
              interpersonal skills. In his quest for personal improvement he has taken up a larger role in the Staying Sharp project to become a  
              true team player and a fountain of knowledge. He has been thoughtful in his contributions and provided quality insights in his role. 
              I have leaned on him for leadership in on-boarding of new team members. has done wonders in this area, and ensured that new
              developers aren't left behind.`,
              ar: 'عمل محمد في عدد كبير من المشاريع لأجلنا وكان دائمًا يفوق توقعاتنا. مطور متخصص وموهوب ونسعد دائمًا بالعمل معه.'
            },
            quoteAuthor: { en: 'Cameron Leaslie', ar: 'عباس العنابي' },
            jobTitle: { en: 'Head of UX at AARP', ar: 'مدير مبيعات' }
          }, {
            imgUrl: 'assets/images/testimonials/chandra.jpeg',
            quoteContent: {
              en: 'sourabh is one of the best UI developers i have come across. He can do a lot with his never say die attitude. I wish him good luck for his future endeavors.',
              ar: 'يمكنني الاعتماد على خدمات محمد دائمًا وخاصة إذا كنت بحاجة إلى إنجاز مشروعي في أقل وقت وبأفضل نتيجة ممكنة. أنا عميل منتظم لديه وآمل أن نواصل عملنا معا دائمًا.'
            },
            quoteAuthor: { en: 'Siddharth Chandra', ar: 'سمير النجار' },
            jobTitle: { en: 'Founder at onlineone.in', ar: 'آرت دايركتور' }
          }, 
          {
            imgUrl: 'assets/images/testimonials/ceo.jpeg',
            quoteContent: {
              en: `Sourabh is one of the most thoughtful, knowledgeable and professional people in UI Development. He is got a passion for the design, development and testing of enterprise software, his understanding of the issues, his original ideas and his thorough execution. I have enjoyed all of our encounters and recommend him very highly`,
              ar: 'يمكنني الاعتماد على خدمات محمد دائمًا وخاصة إذا كنت بحاجة إلى إنجاز مشروعي في أقل وقت وبأفضل نتيجة ممكنة. أنا عميل منتظم لديه وآمل أن نواصل عملنا معا دائمًا.'
            },
            quoteAuthor: { en: 'Shaik UI', ar: 'سمير النجار' },
            jobTitle: { en: 'Software Consultant at Saudi Aramco', ar: 'آرت دايركتور' }
          }, 
          {
            imgUrl: 'assets/images/testimonials/ramana.jpeg',
            quoteContent: {
              en: `Sourabh is one cool guy to work with. His thought process is very constructive and impressive.`,
              ar: 'يمكنني الاعتماد على خدمات محمد دائمًا وخاصة إذا كنت بحاجة إلى إنجاز مشروعي في أقل وقت وبأفضل نتيجة ممكنة. أنا عميل منتظم لديه وآمل أن نواصل عملنا معا دائمًا.'
            },
            quoteAuthor: { en: 'Ramana Yalla', ar: 'سمير النجار' },
            jobTitle: { en: 'Front End Lead', ar: 'آرت دايركتور' }
          }, 
          {
            imgUrl: 'assets/images/testimonials/ramakrishna.jpeg',
            quoteContent: {
              en: `I have been working with Sourabh for more than 2 years. He is very responsible person in his assignments and takes initiative in all his or team works. He has really a very good technical skills than his experience. He is self motivated, hard worker and decent sometimes.`,
              ar: 'يمكنني الاعتماد على خدمات محمد دائمًا وخاصة إذا كنت بحاجة إلى إنجاز مشروعي في أقل وقت وبأفضل نتيجة ممكنة. أنا عميل منتظم لديه وآمل أن نواصل عملنا معا دائمًا.'
            },
            quoteAuthor: { en: 'Ramakrishna Katteragandla', ar: 'سمير النجار' },
            jobTitle: { en: 'Manager, Web Development, Logitech G', ar: 'آرت دايركتور' }
          }, 
         
          {
            imgUrl: 'assets/images/testimonials/shyam.jpeg',
            quoteContent: {
              en: `Sourabh is very professional, always delivers high quality results, and is always there to help.He is very responsible person in his assignments and takes initiative in all his or team works. He has really a very good technical skills than his experience.`,
              ar: 'يمكنني الاعتماد على خدمات محمد دائمًا وخاصة إذا كنت بحاجة إلى إنجاز مشروعي في أقل وقت وبأفضل نتيجة ممكنة. أنا عميل منتظم لديه وآمل أن نواصل عملنا معا دائمًا.'
            },
            quoteAuthor: { en: 'Shyam Shroff', ar: 'سمير النجار' },
            jobTitle: { en: 'Javascript Enthusiast, Loves Web', ar: 'آرت دايركتور' }
          }, 
          {
            imgUrl: 'assets/images/testimonials/agni.jpeg',
            quoteContent: {
              en: `Sourabh is very professional, always delivers high quality results, and is always there to help. Look forward to working with him in other projects.`,
              ar: 'يمكنني الاعتماد على خدمات محمد دائمًا وخاصة إذا كنت بحاجة إلى إنجاز مشروعي في أقل وقت وبأفضل نتيجة ممكنة. أنا عميل منتظم لديه وآمل أن نواصل عملنا معا دائمًا.'
            },
            quoteAuthor: { en: 'Agni Chattopadhyay', ar: 'سمير النجار' },
            jobTitle: { en: 'Application Developer | Ex-Siemens | Ex-Fujitsu', ar: 'آرت دايركتور' }
          }, 
         
          {
            imgUrl: 'assets/images/testimonials/ceo.png',
            quoteContent: {
              en: `I wanted to write you a personal note to thank you for all of your hard work, especially the past year. We have a unique and  
              rigorous appraisal process that take into consideration your performance on project work, practice work and overall impact to   
              TA Digital - and your feedback was fantastic. It is admirable to see one’s feedback achieving their goals, but it is rather inspiring 
          to go above and beyond. I want to assure you that your efforts and performance are not overlooked by anyone at TA Digital,
         Thank you for your commitment and excellence.
      `,
              ar: 'يمكنني الاعتماد على خدمات محمد دائمًا وخاصة إذا كنت بحاجة إلى إنجاز مشروعي في أقل وقت وبأفضل نتيجة ممكنة. أنا عميل منتظم لديه وآمل أن نواصل عملنا معا دائمًا.'
            },
            quoteAuthor: { en: 'Ali', ar: 'سمير النجار' },
            jobTitle: { en: 'CTO at TA Digital', ar: 'آرت دايركتور' }
          }, 
          {
            imgUrl: 'assets/images/testimonials/maheswar.jpeg',
            quoteContent: {
              en: `I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!`,
              ar: 'يمكنني الاعتماد على خدمات محمد دائمًا وخاصة إذا كنت بحاجة إلى إنجاز مشروعي في أقل وقت وبأفضل نتيجة ممكنة. أنا عميل منتظم لديه وآمل أن نواصل عملنا معا دائمًا.'
            },
            quoteAuthor: { en: 'Maheshwar Mahajan', ar: 'سمير النجار' },
            jobTitle: { en: 'Freelancer | Web Software Engineer', ar: 'آرت دايركتور' }
          }, 
          
        ]
      }
    },
    created() {
      // get a theme to use
      this.getAppTheme();
    },
    mounted() {
      if (window.innerWidth >= 992) {
        // initialize circle cursor
        this.initCircleCursor();
  
        // apply pan effect hero image
        this.heroImgPanEffect();
  
        // initialize VanillaTilt library in portfolio section
        this.initializeTilt();
      }
  
      // nav menu tab trap
      this.navMenuTabTrap();
  
      // hide the preloader screen after loading
      window.addEventListener('load', () => this.isPreloading = false);
  
      // scrolling options
      this.scrollingOptions();
      document.addEventListener('scroll', () => this.scrollingOptions());
  
      // initialize popper.js plugin
      document.querySelectorAll('.has-ultimate-tooltip').forEach(el => {
        Popper.createPopper(el, el.querySelector('.ultimate-tooltip'), {
          placement: 'top',
          modifiers: [{ name: 'offset', options: { offset: [0, 30] }}]
        });
      });
  
      // get portfolio items
      this.getPortfolioItems();
  
      // init glightbox plugin
      const lightbox = new GLightbox({
        autoplayVideos: false,
      });
  
      // initialize the first displayed type of skills
      this.initSkillsFirstType();
    },
    methods: {
      // initialize circle cursor
      initCircleCursor() {
        const app = this.$refs.appRef;
        const outer = this.$refs.circleCursorOuter;
        const inner = this.$refs.circleCursorInner;
  
        // return if disabled
        if (!outer || !inner) { return; }
  
        app.addEventListener('mousemove', e => {
          // make the circles follow the cursor
          outer.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);
          inner.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);
  
          // add link hover style
          (e.target.closest('a') || e.target.closest('button') || e.target.closest('.link-hover')) ? inner.classList.add('cursor-link-hover') : inner.classList.remove('cursor-link-hover');
        });
  
        app.addEventListener('click', () => {
          // add pulse effect on click
          inner.classList.add('cursor-click-effect');
          setTimeout(() => inner.classList.remove('cursor-click-effect'), 200);
        });
      },
  
      // get a theme to use
      getAppTheme() {
        // get the saved theme from the localStorage
        const storageSavedTheme = localStorage.getItem('nafieSavedTheme');
      
        // Check to see if there a saved theme
        if (storageSavedTheme) {
          this.savedTheme = storageSavedTheme;
      
        } else {
          // So, try to get the browser default theme or make your own default
      
          // Check to see if Media-Queries are supported
          if (window.matchMedia) {
      
            // Check if the dark-mode Media-Query matches
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
              this.savedTheme = 'dark_theme';
            } else { this.savedTheme = 'light_theme'; }
      
          } else {
            // Default (when Media-Queries are not supported)
            this.savedTheme = this.appTheme;
          }
        }
      
        // save the new theme in the localStorage
        localStorage.setItem('nafieSavedTheme', this.savedTheme);
      },
  
      // detect the theme changes
      changeAppTheme() {
        (this.savedTheme === 'light_theme') ? this.savedTheme = 'dark_theme' : this.savedTheme = 'light_theme';
  
        // save the new theme in the localStorage
        localStorage.setItem('nafieSavedTheme', this.savedTheme);
      },
  
      // toggle nav menu
      toggleNavMenu() {
        this.isNavMenuOpen = !this.isNavMenuOpen;
        this.isNavMenuOpen ? this.openNavMenu() : this.closeNavMenu();
      },
  
      // open nav menu
      openNavMenu() {
        const bodyEl = document.getElementsByTagName('body')[0];
  
        this.isNavMenuOpen = true;
  
        bodyEl.setAttribute('style', 'overflow-y: hidden;');
  
        // set focus on nav menu
        this.$refs.headerNav.querySelector('.desktop-menu-content').focus();
      },
  
      // close nav menu
      closeNavMenu() {
        const bodyEl = document.getElementsByTagName('body')[0];
  
        this.isNavMenuOpen = false;
  
        bodyEl.removeAttribute('style');
  
        // set focus on nav menu toggle button
        this.$refs.navMenuToggleBtn.focus();
      },
  
      // nav menu tab trap
      navMenuTabTrap() {
        const nav = this.$refs.headerNav;
        const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
        let firstTabStop;
        let lastTabStop;
        let isFirstTabStop;
        let isLastTabStop;
  
        document.addEventListener('keyup', e => {
          if (nav.classList.contains('menu-open')) {
            // get first & last focusable elements in the side menu for the tab trap
            const visibleFocusableEls = [...nav.querySelectorAll(focusableElementsString)]
              .filter(el => window.getComputedStyle(el).getPropertyValue('visibility') !== 'hidden');
            firstTabStop = visibleFocusableEls[0];
            lastTabStop = visibleFocusableEls[visibleFocusableEls.length -1];
  
            if (e.code === 'Tab') {
              if (e.shiftKey) /* shift + tab */ {
                // if this is the first item, move to the last item
                isFirstTabStop && lastTabStop.focus();
              } else /* tab */ {
                // if this is the last item, go back to the first item
                isLastTabStop && firstTabStop.focus();
              }
  
              // close nav menu on Escape button press
            } else if (e.code === 'Escape') { this.toggleNavMenu(); }
  
            // get current active element
            const activeEl = document.activeElement;
  
            // check if last item or not
            isLastTabStop = (activeEl === lastTabStop) ? true : false;
  
            // check if first item or not
            isFirstTabStop = (activeEl === firstTabStop) ? true : false;
          }
        });
      },
  
      // apply pan effect hero image
      heroImgPanEffect() {
        const parent = this.$refs.heroSection;
  
        // return if disabled
        if (!parent || !parent.getAttribute('data-paneffect')) { return; }
  
        const layer1 = parent.querySelectorAll('.layer')[0];
        const layer2 = parent.querySelectorAll('.layer')[1];
  
        parent.addEventListener('mousemove', (e) => {
          const x = ((e.x - parent.getBoundingClientRect().x) / parent.offsetWidth) * 100;
          const y = ((e.y - parent.getBoundingClientRect().y) / parent.offsetHeight) * 100;
  
          parent.classList.add('parallax-animation');
  
          layer1.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
          layer2.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
        });
      },
  
      // scrolling options
      scrollingOptions() {
        const scrollPosition = window.pageYOffset;
      
        // check for current scroll position to minimize the header
        this.isHeaderBig = (scrollPosition >= this.startMinimizingHeaderAt) ? false : true;
      
        // check for current scroll position to toggle the header
        this.isHeaderHidden = ((scrollPosition > 100) && (scrollPosition > this.lastScrollPosition)) ? true : false;
        this.lastScrollPosition = scrollPosition;
      
        // check for current scroll position to show the scrollTop button
        this.isScrollTopBtnDisplayed = (scrollPosition >= this.startShowingScrollTopBtnAt) ? true : false;
      },
  
      // scroll to top
      scrollToTop() {
        window.scroll({ top: 0, behavior: 'smooth' });
      },
  
      // initialize the first displayed type of skills
      initSkillsFirstType() {
        const skillsSwitchBtn = this.$refs.skillsSwitchBtn;
  
        // return if disabled
        if (!skillsSwitchBtn) { return; }
  
        this.skillsType = skillsSwitchBtn.querySelector('input').value;
      },
  
      // initialize VanillaTilt library in portfolio section
      initializeTilt() {
        const portfolioItems = this.$refs.portfolioItems;
  
        // return if disabled
        if (!portfolioItems) { return; }
  
        VanillaTilt.init(portfolioItems.querySelectorAll('.portfolio-item'), {
          max: 8,
          speed: 400,
          glare: true,
          'max-glare': 0.3
        });
      },
  
      // get portfolio items
      getPortfolioItems() {
        const itemsArr = this.allPortfolioItems
          .filter(item => {
            const urlParams = new URLSearchParams(window.location.search);
            const tax = urlParams.get('tax');
  
            if (tax) {
              if (tax === 'cat') {
                const cat = urlParams.get('cat');
  
                this.portfolioArchiveName = cat;
                return item.category === cat;
  
              } else if (tax === 'tools') {
                const tool = urlParams.get('tools');
  
                this.portfolioArchiveName = tool;
                return item.tools.includes(tool);
              }
  
            } else {
              return this.currentFilter === 'All' || item.category === this.currentFilter;
            }
          })
          .slice(this.filteredPortfolioItems.length, this.portfolioItemsPage * this.itemsPerPage);
  
        // check if have works or not
        if (itemsArr.length) {
          this.portfolioItems.push(...itemsArr);
  
          // initialize VanillaTilt for new items
          setTimeout(() => this.portfolioItemsPage > 1 && this.initializeTilt(), 0);
  
          this.portfolioItemsPage++;
  
        } else {
  
          // show message "No works" to the user
          this.setNotify({
            className: 'danger',
            msg: this.$refs.portfolioItems.getAttribute('data-no-works-msg'),
            time: 3000
          });
        }
      },
  
      // filter portfolio items
      filterPortfolioItems(filter) {
        this.currentFilter = filter;
        this.portfolioItemsPage = 1;
  
        if (this.filteredPortfolioItems.length) {
          // initialize VanillaTilt for new items
          setTimeout(() => this.initializeTilt(), 0);
  
        } else {
          // get new portfolio items
          this.getPortfolioItems();
        }
      },
  
      // contact form validation
      contactFormValidation() {
  
        // contact form
        const contactForm = this.$refs.contactForm;
  
        // form controls
        const name        = contactForm.querySelector('input[name="name"]');
        const email       = contactForm.querySelector('input[name="email"]');
        const phone       = contactForm.querySelector('input[name="phone"]');
        const message     = contactForm.querySelector('textarea');
  
        // form validation status
        let errors = {
          name: { required: true, minLength: true },
          email: { required: true, invalid: true },
          phone: { invalid: true },
          message: { required: true }
        };
  
        /* --------------- */
        /* name validation */
        /* --------------- */
  
        // required validation
        if (name.value === '') {
          errors.name.required = true;
          this.setNotify({
            id: 'nameRequired',
            className: 'danger',
            msg: name.closest('.control').querySelector('.errors-msgs .required').value
          });
  
        } else {
          errors.name.required = false;
          this.dismissNotify('nameRequired');
        }
  
        // minlength validation
        if (name.value.length > 0 && name.value.length < name.getAttribute('minlength')) {
          errors.name.minLength = true;
          this.setNotify({
            id: 'nameMinLength',
            className: 'danger',
            msg: name.closest('.control').querySelector('.errors-msgs .minLength').value
          });
  
        } else {
          errors.name.minLength = false;
          this.dismissNotify('nameMinLength');
        }
  
        // toggle invalid errors & style classes
        if (Object.keys(errors.name).some(err => errors.name[err] === true)) {
          name.classList.remove('valid');
          name.classList.add('invalid');
        } else {
          name.classList.remove('invalid');
          name.classList.add('valid');
        }
  
        /* ---------------- */
        /* email validation */
        /* ---------------- */
  
        // required validation
        if (email.value === '') {
          errors.email.required = true;
          this.setNotify({
            id: 'emailRequired',
            className: 'danger',
            msg: email.closest('.control').querySelector('.errors-msgs .required').value
          });
  
        } else {
          errors.email.required = false;
          this.dismissNotify('emailRequired');
        }
  
        // email validation
        if (email.value.length > 0 && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
          errors.email.invalid = true;
          this.setNotify({
            id: 'emailInvalid',
            className: 'danger',
            msg: email.closest('.control').querySelector('.errors-msgs .invalid').value
          });
  
        } else {
          errors.email.invalid = false;
          this.dismissNotify('emailInvalid');
        }
  
        // toggle invalid errors & style classes
        if (Object.keys(errors.email).some(err => errors.email[err] === true)) {
          email.classList.remove('valid');
          email.classList.add('invalid');
        } else {
          email.classList.remove('invalid');
          email.classList.add('valid');
        }
  
        /* ---------------- */
        /* phone validation */
        /* ---------------- */
  
        // phone validation
        if (phone.value.length > 0 && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.value)) {
          errors.phone.invalid = true;
          this.setNotify({
            id: 'phoneInvalid',
            className: 'danger',
            msg: phone.closest('.control').querySelector('.errors-msgs .invalid').value
          });
  
        } else {
          errors.phone.invalid = false;
          this.dismissNotify('phoneInvalid');
        }
  
        // toggle invalid errors & style classes
        if (Object.keys(errors.phone).some(err => errors.phone[err] === true)) {
          phone.classList.remove('valid');
          phone.classList.add('invalid');
        } else {
          phone.classList.remove('invalid');
          phone.classList.add('valid');
        }
  
        /* ------------------ */
        /* message validation */
        /* ------------------ */
  
        // required validation
        if (message.value === '') {
          errors.message.required = true;
          this.setNotify({
            id: 'messageRequired',
            className: 'danger',
            msg: message.closest('.control').querySelector('.errors-msgs .required').value
          });
  
        } else {
          errors.message.required = false;
          this.dismissNotify('messageRequired');
        }
  
        // toggle invalid errors & style classes
        if (Object.keys(errors.message).some(err => errors.message[err] === true)) {
          message.classList.remove('valid');
          message.classList.add('invalid');
        } else {
          message.classList.remove('invalid');
          message.classList.add('valid');
        }
  
        // send the message if the form is valid
        (!Object.values(errors).some(control => Object.values(control).some(Boolean))) && this.sendContactFormMessage(contactForm);
      },
  
      // send message from contact form
      sendContactFormMessage(form) {
        const url = form.getAttribute('action');
        const formData = new FormData(form);
  
        // start loading spinner
        this.startLoading();
  
        // send post request
        fetch(url, { method: 'POST', body: formData })
          .then(res => res.text())
          .then(data => {
            if (data === 'success') {
              // show success message
              this.setNotify({ className: 'success', msg: form.getAttribute('data-success-msg'), time: 5000 });
  
              // reset all form inputs
              form.reset();
  
              // remove inputs valid classes
              form.querySelectorAll('.valid').forEach(el => el.classList.remove('valid'));
  
            } else if (data === 'error') {
              // show error message
              this.setNotify({ className: 'danger', msg: form.getAttribute('data-err-msg'), time: 5000 });
            }
  
            // end loading spinner
            this.endLoading();
  
            console.log(data);
          })
          .catch(err => console.log(err));
      },
  
      // show messages by toast notifications
      setNotify({id, className, msg, time}) {
        const notify = {
          id: id || `${Date.now()}${this.notifications.length}`,
          className,
          msg,
          time
        };
  
        if (id) {
          (!this.notifications.some(e => e.id === id)) && this.notifications.push(notify);
  
        } else { this.notifications.push(notify); }
  
        // remove this notification from the array after (n) seconds
        time && setTimeout(() => this.dismissNotify(notify.id), time);
      },
  
      // dismiss the notifications
      dismissNotify(id) {
        const index = this.notifications.findIndex(notify => notify.id === id);
        (index > -1) && this.notifications.splice(index, 1);
      },
  
      // add ajax loading spinner
      startLoading() {
        this.ajaxLoading.push(true);
      },
  
      // remove ajax loading spinner
      endLoading() {
        this.ajaxLoading.pop();
      }
    },
    computed: {
      // flag to toggle ajax loading spinner
      isAjaxLoading() {
        return this.ajaxLoading.some(state => state === true);
      },
  
      // get the total years of experience
      experienceYears() {
        return new Date(new Date() - new Date(String(this.careerStartDate))).getFullYear() - 1970;
      },
  
      // split experience items into chunks of 3 items
      experienceChunks() {
        return [...Array(Math.ceil(this.experienceItems.length / 3))].map(() => this.experienceItems.splice(0, 3));
      },
  
      // filtered portfolio items
      filteredPortfolioItems() {
        const urlParams = new URLSearchParams(window.location.search);
        const tax = urlParams.get('tax');
  
        if (tax) {
          return this.portfolioItems;
  
        } else {
          return this.portfolioItems.filter(item => this.currentFilter === 'All' || item.category === this.currentFilter);
        }
      },
  
      // get single portfolio item
      getSinglePortfolioItem() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
  
        return this.allPortfolioItems.find(item => item.id == id);
      },
  
      // get the total years of copyright
      copyrightDate() {
        const yearsDuration = new Date(new Date() - new Date(String(this.copyrightStartDate))).getFullYear() - 1970;
        return yearsDuration === 0 ? this.copyrightStartDate : `${this.copyrightStartDate} - ${this.copyrightStartDate + yearsDuration}`;
      }
    },
    directives: {
      // clone directive
      clone: {
        mounted(el) {
          el.parentNode.insertBefore(el.cloneNode(true), el.nextSibling);
        }
      },
  
      // add stagger delay to children elements
      staggerdelay: {
        mounted(el, binding) {
          [...el.children].forEach((child, i) => {
            child.setAttribute('style', `animation-delay: ${(i + 1) * (binding.value || 100)}ms`);
          });
        }
      },
  
      // tooltip directive
      tooltip: {
        mounted(el, binding) {
          el.classList.add('has-tooltip');
          el.insertAdjacentHTML('beforeend', `<div class="custom-tooltip custom-tooltip-${binding.value.dir}">${binding.value.text}</div>`);
        }
      }
    }
  });
  app.mount('#app');
  