{document.title=DATA.n+' 游戏 - Vicklleall';const t=location.pathname.slice(1)+'img/';let e=Ele('div','box g-h'),l=Ele('div','box g-m'),i=Ele('div'),a=Ele('div','con page'),p=Ele('div','con page');i.style.backgroundImage=`url(//cdn.jsdelivr.net/gh/vicklleall/website@gbkw8/${t+'head.webp'})`,e.ap(Ele('h2').ap(Ele('div','bbg').txt(DATA.n).ap(Ele('span','R info view add',DATA.z))),i.ap(Ele('p','tri').txt('分类：'+DATA.c),Ele('p','tri').txt('作者：'+DATA.a),Ele('p','tri').txt('测试：'+DATA.t),Ele('p','tri').txt('发布日期：'+DATA.p),Ele('p','tri').txt('更新日期：'+DATA.u),Ele('p','tri').txt('最新版本：'+DATA.v))),p.ap(Ele('h4').txt('游戏截图'));let A=0;for(let e in DATA.i){let l=Ele('div','img-b');for(;A<=DATA.i[e];A++){let e=Ele('img');e.src=("url(//cdn.jsdelivr.net/gh/vicklleall/website@gbkw8/"+(t+A+'.webp')).slice(4),l.ap(e)}p.ap(Ele('h6','info').txt(e),l)}l.ap(Ele('div','tab-a TC').ap(Ele('div','tab S T').txt('游戏介绍'),Ele('div','tab S T').txt('游戏截图'),Ele('div','tab S T').txt('游戏下载')),a.html('<h4>游戏简介</h4>'+DATA.d),p,Ele('div','con page').html('<h4>游戏下载</h4>'+DATA.s)),bindTab(l);for(let t of t$('h5',a))t.aC('tri','NW');for(let t of t$('h6',a))t.aC('info');wrap.append(e,l)}