const doc=document,i$=t=>doc.getElementById(t),c$=(t,c=doc)=>c.getElementsByClassName(t),t$=(t,c=doc)=>c.getElementsByTagName(t),css=(t,c,e=-1,s)=>{if(void 0!==t.length)for(let l=t.length;l--;)Object.assign(t[l].style,l===e?s:c);else Object.assign(t.style,c)},LCTask=[],LC=t=>{if(window.AV)return t();LCTask.push(t)},Ele=(t,c,e,s)=>{let l=doc.createElement(t);return c&&(l.className=c),e&&(l.id=e),s&&Object.assign(l,s),l},Icon=t=>`<svg><use href='#-${t}'></use></svg>`,bindTab=t=>{let c=c$('tab',t),e=c$('con',t);t.tab=c[0];for(let s=c.length;s--;)c[s].con=e[s],c[s].onclick=function(){t.tab.rC('ON'),t.tab.con.rC('ON'),t.tab=this,this.aC('ON'),this.con.aC('ON')};t.tab.onclick()};{const t=HTMLElement.prototype;t.txt=function(t){return this.innerText=t,this},t.html=function(t){return this.innerHTML=t,this},t.hC=function(t){return this.classList.contains(t)},t.aC=function(...t){this.classList.add(...t)},t.rC=function(...t){this.classList.remove(...t)},t.ap=function(...t){return this.append(...t),this}}doc.head.innerHTML+="<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none;\"><symbol id=\"-download\" viewBox=\"0 0 80 80\"><path d=\"M71 40c0 17.1-13.9 31-31 31S9 57.1 9 40 22.9 9 40 9s31 13.9 31 31zM34.5 25.5V40h-8.9c-.8 0-1.5.7-1.5 1.5 0 .4.2.8.5 1.1l14.3 14.2c.5.6 1.4.6 2 .1l.1-.1 14.4-14.2c.6-.6.6-1.5.1-2.1-.3-.3-.7-.5-1.2-.5h-8.8V25.5c0-.8-.7-1.5-1.5-1.5h-8c-.8 0-1.5.7-1.5 1.5z\"/></symbol><symbol id=\"-game\" viewBox=\"0 0 80 80\"><path d=\"M60 20H20C9 20 0 29 0 40s9 20 20 20c5.4 0 10.5-2.2 14.3-6h11.4c7.7 7.9 20.4 8 28.3.3s8-20.4.3-28.3c-3.8-3.8-8.9-6-14.3-6zM32 42.5c0 .8-.7 1.5-1.5 1.5H24v6.5c0 .8-.7 1.5-1.5 1.5h-5c-.8 0-1.5-.7-1.5-1.5V44H9.5c-.8 0-1.5-.7-1.5-1.5v-5c0-.8.7-1.5 1.5-1.5H16v-6.5c0-.8.7-1.5 1.5-1.5h5c.8 0 1.5.7 1.5 1.5V36h6.5c.8 0 1.5.7 1.5 1.5v5zM55 51c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm10-10c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z\"/></symbol><symbol id=\"-home\" viewBox=\"0 0 80 80\"><path d=\"M39 26.5l-23 19V66c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V54c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V45.5l-23-19c-.6-.4-1.4-.4-2 0zm36.4 12.9L65 30.8V13.5c0-.8-.7-1.5-1.5-1.5h-7c-.8 0-1.5.7-1.5 1.5v9.1l-11.2-9.2a5.78 5.78 0 0 0-7.6 0l-31.7 26c-.6.6-.7 1.4-.2 2.1l3.2 3.9c.5.6 1.3.8 2 .3.1 0 .1-.1.1-.1L39 21.4c.6-.4 1.4-.4 2 0l29.4 24.2c.6.5 1.4.5 2-.1l.1-.1 3.2-3.9c.5-.6.4-1.5-.3-2.1z\"/></symbol><symbol id=\"-menu\" viewBox=\"0 0 80 80\"><path d=\"M14 24.5h52c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2H14c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2zm0 20h52c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2H14c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2zm0 20h52c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2H14c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2z\"/></symbol><symbol id=\"-music\" viewBox=\"0 0 80 80\"><path d=\"M72 12c0-2.2-1.8-4-4-4-.4 0-.8.1-1.2.2L26.8 20c-1.7.5-2.8 2.1-2.8 3.8v32.7c-1.3-.3-2.7-.5-4-.5-6.6 0-12 3.6-12 8s5.4 8 12 8 12-3.6 12-8V34.8l32-9.4v23.1c-1.3-.3-2.7-.5-4-.5-6.6 0-12 3.6-12 8s5.4 8 12 8 12-3.6 12-8V12z\"/></symbol><symbol id=\"-tool\" viewBox=\"0 0 80 80\"><path d=\"M70.6 57.5L56 42.8c-2.8-2.8-7.1-3.5-10.7-1.7L32 27.8V20L16 8l-8 8 12 16h7.8l13.3 13.3c-1.8 3.6-1.1 7.9 1.7 10.7l14.7 14.6c1.7 1.8 4.5 1.9 6.4.2l.2-.2 6.5-6.6c1.8-1.6 1.9-4.4.3-6.2l-.3-.3zM49.5 36.1c3.5 0 6.8 1.4 9.3 3.9l2.5 2.4c2-.8 3.9-2.1 5.4-3.7 4.5-4.5 6.3-11 4.8-17.1-.2-.8-1.1-1.2-1.9-1-.2.1-.4.2-.6.4l-9.3 9.3-8.5-1.5-1.4-8.4 9.3-9.3c.6-.7.5-1.7-.2-2.3-.2-.2-.4-.3-.6-.3-6.1-1.5-12.6.3-17 4.8-3.5 3.4-5.3 8.1-5.2 12.9l10.3 10.3c1-.3 2-.4 3.1-.4zm-13 10.3l-7.1-7.1-19.1 19c-2.8 3.5-2.3 8.6 1.1 11.4 3 2.5 7.3 2.5 10.3 0l15.4-15.5c-1-2.5-1.2-5.2-.6-7.8zM16 67c-1.6-.1-2.9-1.4-3-3 0-1.7 1.3-3 3-3s3 1.3 3 3-1.4 3-3 3z\"/></symbol><symbol id=\"-fold\" viewBox=\"0 0 32 32\"><path d=\"M13.5 27c-.4 0-.8-.1-1.1-.4l-9-9c-.6-.6-.6-1.5 0-2.1l9-9c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-7.9 7.9 7.9 7.9c.6.6.6 1.5 0 2.1-.2.4-.6.5-1 .5zM27.5 27c-.4 0-.8-.1-1.1-.4l-9-9c-.6-.6-.6-1.5 0-2.1l9-9c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-7.9 7.9 7.9 7.9c.6.6.6 1.5 0 2.1-.2.4-.6.5-1 .5z\"/></symbol><symbol id=\"-board\" viewBox=\"1 1 30 30\"><path d=\"M24.1 5.1h-3.8v-1c0-.5-.4-1-1-1h-.1c-.5 0-1 .4-1 1V5H13v-.9c0-.5-.4-1-1-1h-.1c-.5 0-1 .4-1 1V5H7.1C6 5.1 5 6 5 7.1v20.6c0 1.1.9 2.1 2.1 2.1h17c1.1 0 2.1-.9 2.1-2.1V7.1c0-1.1-1-2-2.1-2zm-13.2 2v.6c0 .5.4 1 1 1h.1c.5 0 1-.4 1-1v-.6h5.3v.6c0 .5.4 1 1 1h.1c.5 0 1-.4 1-1v-.6h3.9v3.5h-17V7.1h3.6zm13.2 20.6h-17v-15h17v15z\"/><path d=\"M19.7 16.6h-8.2c-.6 0-1 .5-1 1s.5 1 1 1h8.2c.6 0 1-.5 1-1s-.4-1-1-1zm0 3.9h-8.2c-.6 0-1 .5-1 1 0 .6.5 1 1 1h8.2c.6 0 1-.5 1-1 0-.6-.4-1-1-1z\"/></symbol><symbol id=\"-arr\" viewBox=\"0 0 32 32\"><path d=\"M14.5 26c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l6.9-6.9-6.9-6.9c-.6-.6-.6-1.5 0-2.1.6-.6 1.5-.6 2.1 0l8 8c.6.6.6 1.5 0 2.1l-8 8c-.2.2-.6.3-1 .3z\"/></symbol><symbol id=\"-review\" viewBox=\"1 1 30 30\"><path d=\"M17.9 13.2c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3c.7 0 1.2-.6 1.2-1.3s-.5-1.3-1.2-1.3zm-8.7 0c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3c.7 0 1.2-.6 1.2-1.3s-.6-1.3-1.2-1.3zm18.7-2.4c-1.5-2.1-3.6-3.4-5.9-4.1-.5-.6-1.1-1.1-1.8-1.6-5.1-3.7-12.3-2.6-16 2.5-3 4.2-2.9 9.7.2 13.7V25.7c.2.5.7.8 1.3.7l4-1.2c1 .4 2.1.6 3.2.6 2.8 2 6.4 2.6 9.8 1.5l4 1.3h.3c.6 0 1-.4 1-1v-4.2c2.7-3.6 2.7-8.8-.1-12.6zM10.1 23l-.4-.2-3.1 1v-3.3l-.3-.3C3.7 17 3.5 12.4 6 9c3-4.1 8.8-5 12.9-2.1 4.1 3 5 8.8 2.1 12.9-2.5 3.4-7 4.7-10.9 3.2zm15.8-.6l-.3.3V26l-3.1-1-.4.2c-1.8.6-3.6.7-5.3.2 2.3-.7 4.4-2.1 5.9-4.2 2.4-3.3 2.8-7.4 1.4-10.9.7.5 1.4 1.2 1.9 1.9 2.4 3 2.3 7.3-.1 10.2zm-12.4-9.2c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3c.7 0 1.2-.6 1.2-1.3s-.5-1.3-1.2-1.3z\"/></symbol><symbol id=\"-dl\" viewBox=\"0 1 32 32\"><path d=\"M26.9 14.5c.2-.6.3-1.1.3-1.7 0-2.7-2.1-4.8-4.8-4.8-.9 0-1.9.3-2.7.8-2.2-3.8-7.1-5.2-10.9-3-2.5 1.4-4 4.1-4 7v.4C1 14.5-.9 18.6.4 22.4c1 2.9 3.7 4.8 6.8 4.8h18.4c3.5 0 6.4-2.9 6.4-6.4 0-3-2.1-5.7-5.1-6.3zM20.2 19L15 24.2c-.3.3-.8.3-1.1 0L8.6 19c-.3-.3-.3-.8 0-1.1.2-.2.4-.2.6-.2h3.3V12c0-.4.4-.8.8-.8h2.4c.4 0 .8.4.8.8v5.6h3.3c.4 0 .8.3.8.8-.1.2-.2.4-.4.6z\"/></symbol></svg>";{let t=Ele('div','F');css(t,{width:'100%',height:0,zIndex:9});let c=Ele('div','head','head'),e=Ele('div','nav F','nav'),s=Ele('div','footer A TC','footer');[['首页','home','/'],['文章','menu','/p/'],['游戏','game','/game/'],['音乐','music','/music/'],['工具','tool','/tool/'],['下载','download','/download/']].forEach((t,c)=>{let s=Ele('li','S sbl T RC');s.innerHTML=`<div class='cico'><svg><use href='#-${t[1]}'></use></svg></div><span>${t[0]}</span>`,s.onclick=()=>location.href=t[2],(c&&location.pathname.startsWith(t[2])||location.pathname==t[2])&&s.aC('ON'),e.ap(s)});let l=Ele('div','A S sbl T');l.innerHTML=Icon('fold'),css(l,{bottom:0,boxSizing:'border-box',width:'100%',paddingRight:'0.75em',textAlign:'right',color:'var(--789)'}),l.onclick=function(){let c=i$('wrap').style;clearTimeout(this.t),t.hC('fold')?(t.rC('fold'),this.firstChild.style.transform='',c.transition='top 0.5s, left 0.5s',this.t=setTimeout(t=>t.transition='',500,c)):(t.aC('fold'),this.firstChild.style.transform='scaleX(-1)',c.transition='')};let o=i$('wrap');o.before(t.ap(c,e.ap(l))),o.ap(s.txt('©2018-2021 Vicklleall')),LC(()=>{let t=c$('view add');if(t.length)for(let c of t){let t=sessionStorage.getItem(c.id);if(t)c.txt('浏览：'+t);else{let t=AV.Object.createWithoutData('Views',c.id);t.increment('views',1),t.save(null,{fetchWhenSave:!0}).then(t=>{let e=t.get('views');c.txt('浏览：'+e),sessionStorage.setItem(c.id,e)})}}else c$('view').length&&new AV.Query('Views').equalTo('dl',!1).find().then(t=>t.forEach(t=>{let c=i$(t.id);c&&c.txt('浏览：'+t.get('views'))}))});let i=0;window.onresize=()=>{if(window.innerWidth===i)return;i=window.innerWidth,screen.width&&(doc.body.style.zoom=Math.max(1,screen.width/1280));let t=Math.round(window.innerWidth/doc.body.offsetWidth*10)/10;doc.body.style.zoom=t,doc.body.style.setProperty('--head',`max(${48/t}px, ${7.8125/t}vw)`)},window.onresize()}