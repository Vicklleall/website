const CONTENT=[{t:'详解 GameMaker 表面混色奇怪的原因',l:'/p/a?t3',a:'文章',h:'/p/?0',v:'6389e7695fee9f4325e8df3a',i:'//test1.jsdelivr.net/gh/vicklleall/website@gkkzk/p/t3/img/0.png',p:'如果你在 GameMaker 的表面上绘制半透明图像，你会发现表面被“腐蚀”了。当你尝试还原 GM 自带的画图时，你会发现试遍所有混色方法也无法实现。为何 GM 的表面混色这么奇怪？',u:'2022-12-03',c:'2022-12-03'},{t:'如何举办游戏速通大会？FASF后台大揭秘！',l:'/p/a?t2',a:'文章',h:'/p/?0',v:'63467e8906e24022ea911546',i:'//test1.jsdelivr.net/gh/vicklleall/website@gkkzk/p/t2/img/0.png',p:'Fangame Summer Feast 是国内一年一度的 I Wanna 大会，有着自己的官网、报名系统、直播框架，你知道这一切是如何实现的吗？',u:'2022-11-30',c:'2022-10-12'},{t:'在网页上弹钢琴 - WebAudio API',l:'/p/a?t1',a:'教程',h:'/p/?1',v:'6281e8610e0e0f71f88de736',i:'//test1.jsdelivr.net/gh/vicklleall/website@gkkzk/p/img/t1.png',p:'Web Audio API 提供了在 Web 上控制音频的一个非常有效通用的系统，使用 Web Audio API，我们能在 Web 上实现数字音乐引擎，从而实现在网页上弹钢琴！',u:'2022-05-16',c:'2022-03-08'},{t:'【长流程综合IW】I wanna be the M 2',l:'/game/a?iwbtm2',a:'游戏',h:'/game/',v:'5bde43a567f3560062008dd1',i:'//test1.jsdelivr.net/gh/vicklleall/website@gkkzk/game/iwbtm2/img/title.png',p:'I wanna be the M 2 是一款长流程综合 I wanna，拥有丰富的关卡内容，多样的创意玩法，精良的游戏系统（比起上一作简直是质的飞跃），另外还有不同难度版本，萌新大佬都适合！',u:'2020-08-17',c:'2019-07-17'},{t:'【分享】我的 I wanna 制作历程',l:'/p/a?1',a:'文章',h:'/p/?0',v:'5bde47affb4ffe005d563834',i:'//test1.jsdelivr.net/gh/vicklleall/website@gkkzk/p/1/img/S0.webp',p:'时间过得真快啊，制作 I wanna 已经有五年的时间了。这五年也是有许多感想与体会，就来和大家分享一下我的制作历程吧。',u:'2018-12-30',c:'2018-10-30'},{t:'【旧作IW】I wanna be the M',l:'/game/a?iwbtm',a:'游戏',h:'/game/',v:'5bde4745fb4ffe0066cfed6d',i:'//test1.jsdelivr.net/gh/vicklleall/website@gkkzk/game/iwbtm/img/title.webp',p:'I wanna be the M 是一款坑向综合 I wanna，由于是当初新人时期的作品，后来也没想过重置，所以游戏质量较低（黑历史，现在看来真的是渣作），不过还是放出来吧╮(╯▽╰)╭',u:'2018-10-14',c:'2015-03-20'}],Item=e=>{let a=Ele('div','box item'),t={href:e.l};return e.l.startsWith('http')&&(t.target='_blank'),'【'!==e.t[0]&&(e.t=' '+e.t),a.style.backgroundImage=`url(${e.i})`,a.ap(Ele('a','A',0,t),Ele('h4','NW bbl').ap(Ele('a','I S T cat '+e.h.slice(1,2),0,{href:e.h}).txt(e.a),Ele('a','S T shl',0,t).txt(e.t),Ele('span','view info R',e.v)),Ele('p','desc').txt(e.p),Ele('div','A info').ap(Ele('span').txt('更新日期：'+e.u),Ele('span').txt('发布日期：'+e.c))),a};