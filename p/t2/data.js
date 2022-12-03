const DATA={t:'如何举办一次游戏速通大会？FASF后台大揭秘！',z:'63467e8906e24022ea911546',u:'2022-11-30',c:'2022-10-12',l:['CC BY 4.0','https://creativecommons.org/licenses/by/4.0/'],h:"<p><img class='R' src='//test1.jsdelivr.net/gh/vicklleall/website@gkkzk/p/t2/img/0.png' style='margin-left:12px'>Fangame Summer Feast 是国内一年一度的 I Wanna 大会，有着自己的官网、报名系统、直播框架，你知道这一切是如何实现的吗？作为大会的唯一开发人员（惨），接下来就跟着我一起来看看FASF的后台到底是什么样的吧！</p><p class='cm'>本文持续<del>随缘</del>更新</p><h4>起源</h4><p>2019年8月某天，当把 I Wanna Pull Down The Castle 推到 git 仓库之后：</p><p class='cm'>Vicklleall：可以建个iwfasf.github.io仓库做githubpages<br/>Ghost：可以把大会游戏都放上去√</p><p>然后大会网站就诞生了。当时时间表还是内嵌的 Horaro 页面。众所周知，2019年及之前的大会所有的报名都是手动处理，直播框架也是手动填信息，相当麻烦，于是在之后某天：</p><p class='cm'>Vicklleall：我觉得可以做个表单系统，报名后直接生成时间表<br/>Ghost：相对这个来说 我更想弄的是obs的一键切换那套东西（<br/>Ghost：想做成agdq那种效果来着<br/>Vicklleall：就是把每个项目列出来，点击切换那种吗<br/>Ghost：对，后台控制做到全放服务器上跑<br/>Vicklleall：之后做个管理页面，直播框架填写的内容就可以直接从数据库获取了</p><p>就这样，报名系统和直播框架提上日程了。一年之后，FASF2020 就用上了整套新框架。</p><h4>架构</h4><p>先上一张整体架构图：</p><svg viewBox=\"0 0 602 462\" style=\"width:100%;height:462px;margin:.5em 0\"><style>foreignObject{width:100%;height:100%}foreignObject>div>div{position:absolute;width:98px;height:0;margin-left:2px;padding-top:363px;display:flex;align-items:center;justify-content:center;font-size:12px}path{fill:none;stroke:#000}ellipse{fill:none;stroke:#000;stroke-width:2}ellipse+path{stroke:#666}</style><path d=\"M93.13 173.55l95.74-85.1\"/><path d=\"M89.21 177.04l2.9-7.27 1.02 3.78 3.63 1.45zM192.79 84.96l-2.9 7.27-1.02-3.78-3.63-1.45z\"/><path d=\"M107.37 211h67.26\"/><path d=\"M102.12 211l7-3.5-1.75 3.5 1.75 3.5zM179.88 211l-7 3.5 1.75-3.5-1.75-3.5z\"/><path d=\"M188.87 248.45l-95.66 85.19\"/><path d=\"M192.79 244.96l-2.9 7.27-1.02-3.78-3.63-1.45zM89.29 337.14l2.9-7.27 1.02 3.77 3.64 1.45z\"/><path d=\"M391 101v53.63\"/><path d=\"M391 159.88l-3.5-7 3.5 1.75 3.5-1.75z\"/><path d=\"M101 51h73.63\"/><path d=\"M179.88 51l-7 3.5 1.75-3.5-1.75-3.5z\"/><path d=\"M107.37 371h67.26\"/><path d=\"M102.12 371l7-3.5-1.75 3.5 1.75 3.5zM179.88 371l-7 3.5 1.75-3.5-1.75-3.5z\"/><path d=\"M281 371h53.63\"/><path d=\"M339.88 371l-7 3.5 1.75-3.5-1.75-3.5z\"/><path d=\"M501 51h-53.63\"/><path d=\"M442.12 51l7-3.5-1.75 3.5 1.75 3.5z\"/><path d=\"M391 261v53.63\"/><path d=\"M391 319.88l-3.5-7 3.5 1.75 3.5-1.75z\"/><path d=\"M441 371h53.63\"/><path d=\"M499.88 371l-7 3.5 1.75-3.5-1.75-3.5z\"/><path d=\"M551 421q0 40-250 40T51 427.37\"/><path d=\"M51 422.12l3.5 7-3.5-1.75-3.5 1.75z\"/><ellipse cx=\"391\" cy=\"371\" rx=\"50\" ry=\"50\"/><path d=\"M354 378h74\"/><ellipse cx=\"231\" cy=\"371\" rx=\"50\" ry=\"50\"/><path d=\"M194 378h74\"/><ellipse cx=\"391\" cy=\"211\" rx=\"50\" ry=\"50\"/><path d=\"M354 218h74\"/><ellipse cx=\"391\" cy=\"51\" rx=\"50\" ry=\"50\"/><path d=\"M514 58h74M354 58h74\"/><ellipse cx=\"551\" cy=\"51\" rx=\"50\" ry=\"50\"/><ellipse cx=\"551\" cy=\"371\" rx=\"50\" ry=\"50\"/><ellipse cx=\"51\" cy=\"371\" rx=\"50\" ry=\"50\"/><path d=\"M14 378h74\"/><ellipse cx=\"51\" cy=\"51\" rx=\"50\" ry=\"50\"/><ellipse cx=\"231\" cy=\"51\" rx=\"50\" ry=\"50\"/><ellipse cx=\"51\" cy=\"211\" rx=\"50\" ry=\"50\"/><path d=\"M14 218h74\"/><ellipse cx=\"231\" cy=\"211\" rx=\"50\" ry=\"50\"/><foreignObject><div xmlns=\"http://www.w3.org/1999/xhtml\"><div style=\"width:68px;padding-top:141px;margin-left:122px\">API</div><div style=\"width:58px;padding-top:196px;margin-left:112px\">API</div><div style=\"width:68px;padding-top:301px;margin-left:142px\">WebSocket</div><div style=\"width:78px;padding-top:356px;margin-left:102px\">WebSocket</div><div style=\"width:78px;padding-top:66px;margin-left:432px\">rtmp</div><div style=\"width:38px;padding-top:131px;margin-left:392px\">rtmp</div><div style=\"width:58px;padding-top:392px;margin-left:362px\">OBS</div><div style=\"margin-left:342px;font-size:14px\">最终画面</div><div style=\"width:58px;padding-top:392px;margin-left:202px\">h5+css+js</div><div style=\"margin-left:182px;font-size:14px\">直播框架</div><div style=\"width:58px;padding-top:232px;margin-left:362px\">VLC</div><div style=\"padding-top:203px;margin-left:342px;font-size:14px\">收流画面</div><div style=\"width:58px;padding-top:72px;margin-left:362px\">Nginx</div><div style=\"padding-top:43px;margin-left:342px;font-size:14px\">推流服务器</div><div style=\"width:58px;padding-top:72px;margin-left:522px\">OBS</div><div style=\"padding-top:43px;margin-left:502px;font-size:14px\">选手推流</div><div style=\"width:48px;padding-top:291px;margin-left:392px\">OBS源</div><div style=\"width:58px;padding-top:356px;margin-left:282px\">OBS源</div><div style=\"padding-top:371px;margin-left:502px;font-size:14px\">B站直播间</div><div style=\"width:58px;padding-top:392px;margin-left:22px\">NodeJS</div><div style=\"font-size:14px\">后台服务器</div><div style=\"padding-top:53px;margin-left:2px;font-size:14px\">静态网站<br/>托管服务</div><div style=\"padding-top:51px;margin-left:182px;font-size:14px\">网站</div><div style=\"width:58px;padding-top:232px;margin-left:22px\"><div>LeanCloud</div></div><div style=\"padding-top:203px;font-size:14px\">数据库</div><div style=\"padding-top:211px;margin-left:182px;font-size:14px\">控制台</div><div style=\"width:158px;padding-top:446px;margin-left:222px\">WebSocket 弹幕交互</div><div style=\"width:68px;padding-top:121px;margin-left:72px\">报名系统</div><div style=\"width:78px;padding-top:231px;margin-left:102px\">报名管理</div><div style=\"width:68px;padding-top:291px;margin-left:72px\">直播控制</div><div style=\"width:78px;padding-top:391px;margin-left:102px\">直播控制</div></div></foreignObject></svg><p>这张图描述了整个大会系统的实现流程，下面就来分别介绍各个节点</p><h5>网站</h5><p>大会官网是纯手撸的html+css+js，没有使用任何框架。静态页面托管在<a href='https://cloud.tencent.com/product/cos'>腾讯云COS</a>，静态资源放在GitHub上，使用 <a href='https://www.jsdelivr.com/'>jsDelivr</a> 免费CDN（这也是有时大会官网会崩的原因，jsDelivr在国内并不稳定，但是免费好用的CDN仅此一家啊！！）。而每年大会的介绍、时间表、作品、评论，以及项目报名，这一部分是与数据库交互的。</p><p class='cm'>为什么要这么设计，而不是直接部署在服务器？</p><p>要在国内服务器部署网站，是需要备案的（<del>麻烦</del>）。而且最重要的原因是，省钱！省钱！省钱！这样一来网站的开销就只有域名费了。</p><h5>数据库</h5><p>数据库是实现报名系统的核心。大会使用了免费且开箱即用的 <a href='https://www.leancloud.cn/'>LeanCloud</a> 平台（还是省钱！）。设计好各种接口，网站通过API和数据库交互，大家就可以注册账号，提交报名了。</p><img src='//test1.jsdelivr.net/gh/vicklleall/website@gkkzk/p/t2/img/1.png' class='c'/><p class='label'>图为LeanCloud中储存的数据</p><p>数据有地方存了，但是怎么管理呢？直接编辑数据库里的数据过于麻烦，所以我们还需要一个写控制台来方便地管理所有数据。</p><h5>控制台</h5><h5>直播框架</h5><h5>推流服务器</h5>"};window.$p();