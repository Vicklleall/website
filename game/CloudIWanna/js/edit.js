edit=!0;const REC=!1,REP=!1;function GameEnd(){END=!0,GO.style.visibility='hidden',GC.style.visibility='visible',GUI.style.transition="opacity 1s 0.4s",GUI.style.visibility='visible',GUI.style.opacity='1',GCobj[0].style.right='420px',GCobj[1].style.left='420px',GCobj[2].innerText="⏱️ Time: "+Time.innerText,GCobj[3].innerText="💀 Deaths: "+Death.innerText,setTimeout("GCobj[0].style.top='-60px';GCobj[1].style.top='-60px';GCobj[2].style.top='80px';GCobj[3].style.top='160px'",1200)}function showGrid(e){e?(GS.innerText='网格(On)',grid.style.color='#222',grid.style.borderColor='#666',Gshow.style.display='block'):(GS.innerText='网格(Off)',grid.style.color='#AAA',grid.style.borderColor='#CCC',Gshow.style.display='none')}LOAD(),make=$('make'),run=$('run'),mode=$('mode'),protect=document.getElementsByClassName('pt'),PViewX=0,PViewY=0,mode.onclick=function(){if(!NowGame)return!1;if(edit=!edit,edit){room_load(!0,!0),grid.on=!0,showGrid(grid.on),this.innerHTML="<span>▶️运行</span>",run.style.display='none',make.style.display='inline-block';for(var e=protect.length;e--;)protect[e].style.display='none';ViewX=PViewX,ViewY=PViewY,toVX=ViewX,toVY=ViewY,RViewX=ViewX,RViewY=ViewY,sfbg.clearRect(0,0,800,608)}else{for(e=protect.length;e--;)protect[e].style.display='block';saveRoom(),tiles.width=RoomW,tiles.height=RoomH,room_load(!0,!0),END=!1,grid.on=!1,showGrid(grid.on),this.innerHTML="<span>📝编辑</span>",make.style.display='none',run.style.display='inline-block',Time.time=0,Death.death=0,Time.cTime=Date.now(),PViewX=ViewX,PViewY=ViewY,ViewX=ViewSX,ViewY=ViewSY,RViewX=ViewX,RViewY=ViewY,toVX=ViewX,toVY=ViewY,activate()}BGx=0,BGy=0,BKEF=[],saveEf=[]},grid=$('grid'),grid.on=!0,GS=$('GS'),Gs=grid.children,Gs.value=32,Gshow=$('Gshow'),showGrid(!0),GS.onclick=()=>{grid.on=!grid.on,showGrid(grid.on)};for(var i=1;i<Gs.length;i++)Gs[i].onclick=function(){Gs.value=Number(this.innerText),setGrid()};function setGrid(){Gshow.style.backgroundSize=`100% ${Gs.value}px,${Gs.value}px 100%,100% 608px,800px,100%`}px=$('px'),py=$('py'),pa=$('pa'),CreateObj='',canPut=!1,OC=document.getElementsByClassName('OC');for(i=0;i<OC.length;i++)OC[i].title&&(OC[i].ins=OC[i].title,OC[i].title=''),OC[i].onclick=function(){CreateObj=this.id;for(var e=0;e<OC.length;e++)OC[e].style.borderColor='#CCC';this.style.borderColor='hsl(50,80%,60%)'},OC[i].onmouseover=function(){objMouse.style.display='block',this.ins?objMouse.innerText=`${this.id} （请勿逐个摆放）`:objMouse.innerText=this.id},OC[i].onmouseout=()=>{objMouse.style.display='none'};function mouse(e){return e.pageX||e.pageY?{x:e.pageX,y:e.pageY}:{x:e.clientX+document.body.scrollLeft-document.body.clientLeft,y:e.clientY+document.body.scrollTop-document.body.clientTop}}function selectObj(e,t,s,o){return pos_obj(e,t,water)||pos_obj(e,t,warp)||pos_obj(e,t,trigger)||pos_obj(e,t,Rcherry)||pos_obj(e,t,shooter)||pos_obj(e,t,cherry)||pos_obj(e,t,platform)||pos_obj(e,t,GMColObj)||pos_obj(e,t,GMStepObj)||pos_obj(e,t,conveyor)||pos_obj(e,t,board)||pos_obj(e,t,Walljump)||pos_obj(e,t,block)||pos_obj(e,t,spike)||pos_obj(e,t,field)}function destroy_place(e,t,s,o){for(var r=s.length;r--;)if(s[r].__proto__.constructor===o){var a=0,i=0;switch(s[r].__proto__.constructor.name){case'objSpring':a=16,i=16;break;case'objTrampoline':a=16,i=32-(sprTp[0].height>>1)}s[r].x===e+a&&s[r].y===t+i&&destroy(s[r].obj_ind,s[r].id)}}function mouseObj(e){if(2===e.button){var t=selectObj(mouseTX,mouseTY);t&&destroy(t.obj_ind,t.id)}else if(canPut&&0===e.button&&CreateObj)if('Player Start'==CreateObj)startX=mouseX+17,startY=mouseY+23,saveX=startX,saveY=startY;else if('Warp End'==CreateObj)warpEnd=new objWarp(mouseX,mouseY,!0);else if('Rounding Cherry'===CreateObj)Rcherry.push(new objRoundingCherry(mouseX,mouseY)),ico[2].click(),setPro(Rcherry[Rcherry.length-1]);else if('Spike Gear'===CreateObj)Rcherry.push(new objSpikeGear(mouseX,mouseY)),ico[2].click(),setPro(Rcherry[Rcherry.length-1]);else if(CreateObj.includes('Split')){let e=CreateObj[0];shooter.push(new objShooter(mouseX,mouseY,'T'==e?1:'R'==e?2:'P'==e?3:'H'==e?4:0)),ico[2].click(),setPro(shooter[shooter.length-1])}else if(CreateObj.includes('Spike')){for(var s=32-16*CreateObj.includes('Mini'),o=180*CreateObj.includes('Down')+90*CreateObj.includes('Left')+270*CreateObj.includes('Right'),r=spike.length;r--;)spike[r].x===mouseX&&spike[r].y===mouseY&&spike[r].img_ang===o&&spike[r].w===s&&spike[r].h===s&&destroy(spike,spike[r].id);spike.push(new objSpike(mouseX,mouseY,o)),32!==s&&spike[spike.length-1].setScale(s,s)}else if(CreateObj.includes('Wall Jump')){var a=18*CreateObj.includes('Left');for(r=Walljump.length;r--;)Walljump[r].x===mouseX+a&&Walljump[r].y===mouseY&&destroy(Walljump,Walljump[r].id);Walljump.push(new objWallJump(mouseX+a,mouseY,(a-9)/9))}else if(CreateObj.includes('Conveyor')){var i=Number(CreateObj.includes('Down')||CreateObj.includes('Up')),n=1-2*(CreateObj.includes('Left')||CreateObj.includes('Up'));destroy_place(mouseX,mouseY,conveyor,objConveyor);r=conveyor.push(new objConveyor(mouseX,mouseY));DragObj=conveyor[r-1],DragObj.fx=i,DragObj.spd=Conveyor*n}else if(CreateObj.includes('Fake')){var c;switch(destroy_place(mouseX,mouseY,GMColObj,objFake),CreateObj){case'Fake Floor':c=0;break;case'Fake Block':c=1;break;case'Fake Platform':c=2}GMColObj.push(new objFake(mouseX,mouseY,c))}else{var l=NameToObj(CreateObj);switch(destroy_place(mouseX,mouseY,l.obj,l.f),CreateObj){case'Warp':case'Board':l.obj.push(new l.f(mouseX,mouseY)),ico[2].click(),setPro(l.obj[l.obj.length-1]);break;case'Block':case'Water':case'Ice Block':case'Trigger':l.obj.push(new l.f(mouseX,mouseY,32,32)),DragObj=l.obj[l.obj.length-1];break;case'Triple Jump':l.obj.push(new l.f(mouseX,mouseY,2));break;case'Double Jump':l.obj.push(new l.f(mouseX,mouseY,1));break;case'Single Jump':l.obj.push(new l.f(mouseX,mouseY,0));break;case'Infinite Jump':l.obj.push(new l.f(mouseX,mouseY,1/0));break;case'Low Gravity':l.obj.push(new l.f(mouseX,mouseY,32,32,0)),DragObj=l.obj[l.obj.length-1];break;case'High Gravity':l.obj.push(new l.f(mouseX,mouseY,32,32,1)),DragObj=l.obj[l.obj.length-1];break;case'Fast Speed':l.obj.push(new l.f(mouseX,mouseY,32,32,2)),DragObj=l.obj[l.obj.length-1];break;case'Slow Speed':l.obj.push(new l.f(mouseX,mouseY,32,32,3)),DragObj=l.obj[l.obj.length-1];break;case'Spring':l.obj.push(new l.f(mouseX+16,mouseY+16,0));break;case'Trampoline':l.obj.push(new l.f(mouseX+16,mouseY+32-(sprTp[0].height>>1),0));break;default:l.obj.push(new l.f(mouseX,mouseY))}}}function NameToObj(e){switch(e){case'Block':return{obj:block,f:objBlock};case'Ice Block':return{obj:block,f:objIceBlock};case'Breakable Block':return{obj:block,f:objBreakableBlock};case'Delicious Fruit':return{obj:cherry,f:objCherry};case'Platform':return{obj:platform,f:objPlatform};case'Water':return{obj:water,f:objWater};case'Warp':return{obj:warp,f:objWarp};case'Save Point':return{obj:GMStepObj,f:objSavePoint};case'Crate':return{obj:block,f:objCrate};case'Board':return{obj:board,f:objBoard};case'Jump Refresher':return{obj:GMColObj,f:objJumpRefresher};case'Spring':return{obj:GMColObj,f:objSpring};case'Trampoline':return{obj:GMColObj,f:objTrampoline};case'Triple Jump':case'Double Jump':case'Single Jump':case'Infinite Jump':return{obj:GMColObj,f:objJumpChanger};case'Low Gravity':case'High Gravity':case'Fast Speed':case'Slow Speed':return{obj:field,f:objField};case'Trigger':return{obj:trigger,f:objTrigger}}}function getObjSpr(){switch(CreateObj){case'Block':case'Ice Block':return{spr:sprFloor};case'Breakable Block':return{spr:sprBBlock};case'Spike Up':return{spr:sprSpike};case'Spike Down':return{spr:sprSpike,ang:180,Ox:32,Oy:32};case'Spike Left':return{spr:sprSpike,ang:90,Ox:32};case'Spike Right':return{spr:sprSpike,ang:270,Oy:32};case'Mini Spike Up':return{spr:sprSpike,sc:.5};case'Mini Spike Down':return{spr:sprSpike,ang:180,sc:.5,Ox:16,Oy:16};case'Mini Spike Left':return{spr:sprSpike,ang:90,sc:.5,Ox:16};case'Mini Spike Right':return{spr:sprSpike,ang:270,sc:.5,Oy:16};case'Delicious Fruit':return{spr:sprCherry,Ox:10,Oy:12};case'Platform':case'Water':case'Crate':case'Board':case'Trigger':return{spr:window['spr'+CreateObj]};case'Wall Jump Right':return{spr:sprWallJump};case'Wall Jump Left':return{spr:sprWallJump,Ox:-18};case'Save Point':return{spr:sprSave};case'Player Start':return{spr:sprPlayerStart};case'Warp End':case'Warp':return{spr:sprWarp};case'Rounding Cherry':return{spr:sprRCherry,Ox:10,Oy:12};case'Spike Gear':return{spr:sprSG,Ox:12,Oy:12};case'Jump Refresher':return{spr:sprJR,Ox:sprJR[0].width>>1,Oy:sprJR[0].height>>1};case'Spring':return{spr:sprSpring,Ox:sprSpring[0].width>>-15,Oy:sprSpring[0].height>>-15};case'Trampoline':return{spr:sprTp,Ox:0,Oy:sprTp[0].height-32};case'Conveyor Up':return{spr:sprConveyor,ang:90,Ox:32};case'Conveyor Down':return{spr:sprConveyor,ang:270,Oy:32};case'Conveyor Left':return{spr:sprConveyor,ang:180,Ox:32,Oy:32};case'Conveyor Right':return{spr:sprConveyor};case'Triple Jump':return{spr:sprTJump};case'Double Jump':return{spr:sprDJump};case'Single Jump':return{spr:sprSJump};case'Infinite Jump':return{spr:sprIJump};case'Low Gravity':return{spr:sprLGrav};case'High Gravity':return{spr:sprHGrav};case'Fast Speed':return{spr:sprFSpd};case'Slow Speed':return{spr:sprSSpd};case'Fake Floor':return{spr:sprFloor};case'Fake Block':return{spr:sprBlock};case'Fake Platform':return{spr:sprPlatform};case'Circular Split':return{spr:sprShooter,Ox:12,Oy:12};case'Triangle Split':return{spr:sprShooter,Ox:12,Oy:12,ind:1};case'Rectangle Split':return{spr:sprShooter,Ox:12,Oy:12,ind:2};case'Pentagon Split':return{spr:sprShooter,Ox:12,Oy:12,ind:3};case'Hexagon Split':return{spr:sprShooter,Ox:12,Oy:12,ind:4}}return!1}function setPro(e){var t=e.__proto__.constructor.name;nowObj=e;var s='objShooter'===t?e.spr[e.mode]:e.spr[0];pObjSpr.style.setProperty('background-image',"url('"+s.src+"')"),pObjSpr.style.setProperty('background-position','center'),pObjName.innerText=t,pObjId.innerText='id:'+e.id;var o="<span>位置: </span><span>x:</span><input id='x' type='number'/><span>y:</span><input id='y' type='number'/>";switch(t){case'objWarp':o+="<br/><span>传送点: </span><span>x:</span><input id='warpX' type='number'/><span>y:</span><input id='warpY' type='number'/><span>注：Kid中心坐标为(17,23)</span><br/><span>过渡效果:</span><input id='k' type='number' min='0' max='3'/><span>( 0=淡入淡出 1=传送 2=旋转矩形 3=无 )";break;case'objBlock':case'objIceBlock':case'objWater':case'objField':case'objTrigger':o+="<br/><span>大小: </span><span>w:</span><input class='sc' id='w' type='number' min='32' max='800'/><span>h:</span><input class='sc' id='h' type='number' min='32' max='800'/>";break;case'objSpike':o+="<span>角度: </span><input id='img_ang' type='number' min='0' name='360'/><br/><span>大小: </span><span>w:</span><input class='sc' id='w' type='number' min='16'/><span>h:</span><input class='sc' id='h' type='number' min='16'/>";break;case'objCherry':case'objPlatform':o+="<br/><span>速度: </span><span>hspeed:</span><input id='hspeed' type='number' step='1'/><span>vspeed:</span><input id='vspeed' type='number' step='1'/>";break;case'objWallJump':1===e.side?(pObjSpr.style.setProperty('background-position','22px 4px'),o+='<span>方向：Left</span>'):(pObjSpr.style.setProperty('background-position','4px 4px'),o+='<span>方向：Right</span>');break;case'objRoundingCherry':o+="<span>数量: </span><input id='n' type='number' min='1'/><br/><span>半径：</span><input id='r' type='number' min='0'/><span>转速：</span><input id='spd' type='number' step='1'/><span>初始角度：</span><input id='ang' type='number' min='0' name='360'/>";break;case'objSpikeGear':o+="<span>数量: </span><input id='n' type='number' min='1'/><br/><span>大小：</span><input id='r' type='number' min='16'/><span>转速：</span><input id='spd' type='number' step='1'/><span>初始角度：</span><input id='ang' type='number' min='0' name='360'/>";break;case'objShooter':o+="<span>数量: </span><input id='n' type='number' min='1'/><br/><span>速度：</span><input id='spd' type='number' min='0.1' step='0.1'/><span>时间点：</span><input id='t' type='number' step='1'/><span>初始角度：</span><input id='ang' type='number' min='0' name='360'/>";break;case'objSpring':case'objTrampoline':o+="<span>角度: </span><input id='ang' type='number' min='0' name='360'/><span>弹力: </span><input id='spd' type='number' min='0'/>";break;case'objBoard':o+="<br/><span>内容: </span><textarea id='txt' maxlength='200'/>";break;case'objConveyor':o+="<span>速度: </span><input id='spd' type='number' step='1'/><span>长度: </span><input id='CW' type='number' min='32'/>"}pObj.innerHTML=o;var r=pObj.getElementsByTagName('input');pObjPro=[];for(var a=0;a<r.length;a++)'number'==r[a].type&&(r[a].mod=Number(r[a].name),r[a].num=Number(r[a].step),r[a].step='0.00000000000000001',r[a].onchange=function(){if(''!==this.min&&(this.value=Math.max(this.value,this.min)),''!==this.max&&(this.value=Math.min(this.value,this.max)),this.mod>0&&(this.value=this.value%this.mod),'n'===this.id&&e.evDes&&e.evDes(),NaN!==this.value&&(e[this.id]=Number(Number(this.value).toFixed(this.num))),'spd'===this.id)switch(e.__proto__.constructor.name){case'objSpring':Spring=e[this.id];break;case'objTrampoline':Trampoline=e[this.id];break;case'objConveyor':Conveyor=Math.abs(e[this.id])}else'k'===this.id&&(Trans=e[this.id]);'sc'===this.className&&e.setScale(e.w,e.h)}),pObjPro.push(r[a]);(r=pObj.getElementsByTagName('textarea')).length>0&&(r[0].onchange=function(){e[this.id]=this.value},pObjPro.push(r[0]))}function resetPro(){pObjSpr.style.setProperty('background-image','none'),pObjName.innerText='未选择物体',pObjId.innerText='',pObj.innerHTML='',nowObj=void 0}function removeH(e){'H'===e.className.charAt(e.className.length-1)&&(e.className=e.className.slice(0,e.className.length-2))}mouseX=0,mouseY=0,mouseTX=0,mouseTY=0,objMouse=$('objMouse'),window.onmousemove=e=>{if(e=e||window.event,mouse_x=mouse(e).x,mouse_y=mouse(e).y,'block'===ShowGUI.style.display){if(void 0!==Cchs.Dw)cGC.sc=Math.max(96,Math.min(dUp.height-Number(Cchs.style.top.slice(0,-2)),dUp.width-Number(Cchs.style.left.slice(0,-2)),mouse_x-Cchs.Dw,mouse_y-Cchs.Dh)),Cchs.style.width=`${cGC.sc}px`,Cchs.style.height=`${cGC.sc}px`;else if(void 0!==Cchs.Dx){var t=mouse_x-Cchs.Dx,s=mouse_y-Cchs.Dy;t=Math.min(dUp.width-Number(Cchs.style.width.slice(0,-2)),Math.max(0,t)),s=Math.min(dUp.height-Number(Cchs.style.height.slice(0,-2)),Math.max(0,s)),Cchs.style.left=`${t}px`,Cchs.style.top=`${s}px`}return!1}var o=scrn.getBoundingClientRect();if(mouseTX=mouse_x-o.left-1+ViewX,mouseTY=mouse_y-o.top-1+ViewY,mouse_x-1>o.left&&mouse_x+1<o.right&&mouse_y-1>o.top&&mouse_y+1<o.bottom){if(mouseX=Math.floor(mouseTX/Gs.value)*Gs.value,mouseY=Math.floor(mouseTY/Gs.value)*Gs.value,objMouse.style.display='block',objMouse.innerText='('+mouseX+','+mouseY+')',edit)if('0px'===tab[2].style.left||'0px'==tab[1].style.left&&keyboard_check(vk_ctrl))mouseCheck&&(0===ev_mouse.button?DragObj&&(DragObj.x=mouseX+DragX,DragObj.y=mouseY+DragY):keyboard_check(vk_shift)&&mouseObj(ev_mouse));else if('0px'===tab[1].style.left&&(canPut=!0,mouseCheck)){var r=!0;0===ev_mouse.button&&DragObj&&(DragObj.setScale(mouseX-DragObj.x+32,mouseY-DragObj.y+32),r=!1),r&&keyboard_check(vk_shift)&&mouseObj(ev_mouse)}}else'0px'===tab[3].style.left&&mouseCheck&&slider.dragi>=0&&(oSlider[slider.dragi].style.left=Math.min(100,Math.max(0,(mouse_x-slider.pos.left-6)/1.72))+'%',setGra()),objMouse.innerText.includes('(')&&(objMouse.style.display='none'),canPut=!1;'block'===objMouse.style.display&&(objMouse.style.left=`${mouse_x+4}px`,objMouse.style.top=mouse_y-24+"px"),edit&&(HBar.on?ViewX=Math.max(0,Math.min(RoomW-800,(mouse_x-HBar.DragX)/800*RoomW+HBar.VX)):VBar.on&&(ViewY=Math.max(0,Math.min(RoomH-608,(mouse_y-VBar.DragY)/608*RoomH+VBar.VY))))},mouseCheck=!1,window.onmousedown=e=>{if(e=e||window.event,ev_mouse=e,0!==e.button&&2!==e.button||(mouseCheck=!0,mouseDownX=mouseX,mouseDownY=mouseY),edit)if('0px'==tab[2].style.left||'0px'==tab[1].style.left&&keyboard_check(vk_ctrl)){if(0===e.button){var t=mouseTX-ViewX,s=mouseTY-ViewY;if(t>0&&s>0&&t<800&&s<608)(o=selectObj(mouseTX,mouseTY))?(setPro(o),DragObj=o,DragX=o.x-mouseDownX,DragY=o.y-mouseDownY):resetPro()}else if(2===e.button){var o;(o=selectObj(mouseTX,mouseTY))&&destroy(o.obj_ind,o.id)}}else mouseObj(e)},window.onmouseup=()=>{mouseCheck=!1,slider.dragi=-1,DragObj=void 0,HBar.on=!1,VBar.on=!1,void 0===Cchs.Dw&&void 0===Cchs.Dx||(cGCc.clearRect(0,0,96,96),cGCc.drawImage(dUp,Number(Cchs.style.left.slice(0,-2)),Number(Cchs.style.top.slice(0,-2)),cGC.sc,cGC.sc,0,0,96,96),Cchs.Dw=void 0,Cchs.Dx=void 0,document.body.style.cursor='default')},window.oncontextmenu=e=>{(e=e||window.event).preventDefault()},pObj=$('pObj'),pObjSpr=$('pObjSpr'),pObjName=$('pObjName'),pObjId=$('pObjId'),pObjPro=null,nowObj=null,ShowGUI=$('ShowBack'),ShowTitle=$('ShowTitle'),BoxCt=$('BoxCt'),oRoomW=$('RoomW'),oRoomH=$('RoomH'),RoomW=800,RoomH=608,oRoomW.onchange=function(){try{this.value=Math.max(800,Math.min(4e3,this.value)).toFixed(0)}catch(e){this.value=800}RoomW=Number(this.value),ViewX>RoomW-800&&(ViewX=0)},oRoomH.onchange=function(){try{this.value=Math.max(608,Math.min(3040,this.value)).toFixed(0)}catch(e){this.value=608}RoomH=Number(this.value),ViewY>RoomH-608&&(ViewY=0)},RoomOut=$('OutMode').getElementsByClassName('chsBox');for(let e=RoomOut.length;e--;)RoomOut[e].ind=e,RoomOut[e].onclick=function(){for(let e=RoomOut.length;e--;)removeH(RoomOut[e]);this.className+=' H',OutMode=this.ind};oView=$('ViewMode').getElementsByClassName('chsBox');for(let e=oView.length;e--;)oView[e].ind=e,oView[e].onclick=function(){for(let e=oView.length;e--;)removeH(oView[e]);this.className+=' H',ViewMode=this.ind};oViewX=$('ViewX'),oViewY=$('ViewY'),ViewSX=0,ViewSY=0,oViewX.onchange=function(){try{this.value=Number(this.value).toFixed(0)}catch(e){this.value=0}ViewSX=Number(this.value)},oViewY.onchange=function(){try{this.value=Number(this.value).toFixed(0)}catch(e){this.value=0}ViewSY=Number(this.value)},HBar=$('HBar'),VBar=$('VBar'),HBar.onmousedown=function(){this.on=!0,this.DragX=mouse_x,this.VX=ViewX},VBar.onmousedown=function(){this.on=!0,this.DragY=mouse_y,this.VY=ViewY},BGMid=$('BGMid'),BGMid.value='22776365',BGMid.onchange=function(){oBGM.src=`https://music.163.com/song/media/outer/url?id=${this.value}.mp3`,BGMplay.click()},DefBGM=document.getElementsByClassName('bgmn');for(i=DefBGM.length;i--;)DefBGM[i].onclick=function(){BGMid.value=this.innerText,BGMid.onchange()};function setSPR(e,t,s){e.innerHTML='';var o=t[0].cloneNode();if('CANVAS'===t[0].tagName){o.getContext('2d').drawImage(t[0],0,0)}if(t===sprJR||t===sprCherry?o.style.top=16-(o.height>>1)+"px":t===sprTp&&(o.style.top=32-o.height+"px"),e.appendChild(o),s){var r=s[0].cloneNode();if('CANVAS'===s[0].tagName){r.getContext('2d').drawImage(s[0],0,0)}s===sprWallJump&&(r.style.left='24px'),e.appendChild(r)}}function resetSPR(){setSPR(oSPR[0],sprSpike),setSPR(oSPR[4],sprPlayerIdle),setSPR(oSPR[8],sprSave),setSPR(oSPR[1],sprFloor),setSPR(oSPR[5],sprPlatform),setSPR(oSPR[6],sprCherry),setSPR(oSPR[2],sprBlock,sprWallJump),setSPR(oSPR[3],sprBlock),setSPR(oSPR[9],sprWater),setSPR(oSPR[10],sprWarp),setSPR(oSPR[12],sprBoard),setSPR(oSPR[13],sprFloor,sprIce),setSPR(oSPR[14],sprJR),setSPR(oSPR[16],sprCrate),setSPR(oSPR[17],sprFloor,sprConveyor),setSPR(oSPR[20],sprTp),setSPR(oSPR[24],sprSpring)}function setTheme(e){for(let e=ObjT.length;e--;)removeH(ObjT[e]);ObjT[e].className+=' H',Theme=e,loadSkin(AllTheme[e])}SPR=$('spr'),(()=>{var e='';for(let t=0;t<32;t+=4)e+="<div class='vl'><div class='spr'></div><div class='spr'></div><div class='spr'></div><div class='spr'></div></div>";SPR.innerHTML=e})(),oSPR=SPR.getElementsByClassName('spr'),Theme=2,theme=$('theme'),ObjT=theme.children,ObjT[2].onclick=()=>{loadGra('linear-gradient(180deg,rgb(248,248,248) 0%,rgb(255,255,255) 100%)'),setTheme(2)},ObjT[3].onclick=()=>{loadGra('linear-gradient(180deg,rgb(47,47,47) 0%,rgb(106,106,106) 100%)'),setTheme(3)},ObjT[4].onclick=()=>{setTheme(4),setBKCol('#80FFFF')},ObjT[5].onclick=()=>{setTheme(5),setBKImg('Guy02')},ObjT[6].onclick=()=>{setTheme(6),setBKImg('K3S5',-1,-1)},ObjT[7].onclick=()=>{loadGra('linear-gradient(180deg,rgb(180,20,20) 0%,rgb(120,0,0) 100%)'),setTheme(7)},ObjT[8].onclick=()=>{setTheme(8),setBKImg('Darejar')},ObjT[9].onclick=()=>{setTheme(9),setBKImg('Adventure')},ObjT[10].onclick=()=>{setTheme(10),setBKImg('Hanamogeta')},ObjT[11].onclick=()=>{setTheme(11),setBKImg('Shadowlink57')},ObjT[12].onclick=()=>{setTheme(12),setBKImg('Hibikusuku')},ObjT[13].onclick=()=>{setTheme(13),setBKImg('Kamirin')},ObjT[14].onclick=()=>{setTheme(14),setBKImg('MELTDOWN')},ObjT[15].onclick=()=>{setTheme(15),setBKImg('NANGS8')},ObjT[16].onclick=()=>{setTheme(16),setBKImg('uhuhu3')},ObjT[17].onclick=()=>{setTheme(17),setBKImg('Midnight')},ObjT[0].onclick=function(){ShowGUI.style.display='block',ShowTitle.innerText='选择主题色',BoxCt.innerHTML="<div class='chsSpr'></div><div class='chsSpr'></div><div class='chsSpr'></div><div class='chsSpr'></div><div class='chsSpr'></div><div class='chsSpr'></div><div class='chsSpr'></div><div class='chsSpr'></div>";var e=BoxCt.children;e[0].col='#000000',e[0].col2='#FFFFFF',e[0].col3='#CCCCCC',e[1].col='#FFFFFF',e[1].col2='#000000',e[1].col3='#666666',e[2].col='#DDDDDD',e[2].col2='#AAAAAA',e[2].col3='#CCCCCC',e[3].col='#888888',e[3].col2='#555555',e[3].col3='#707070',e[4].col='#F4D3E9',e[4].col2='#FFACD6',e[4].col3='#FF88C4',e[5].col='#DAFFFF',e[5].col2='#95E4FF',e[5].col3='#62D8FF',e[6].col='#FFFFC8',e[6].col2='#F5E869',e[6].col3='#F4DD0B',e[7].col='#CCFFDE',e[7].col2='#80FFB3',e[7].col3='#00FF93';for(var t=e.length;t--;)e[t].style.backgroundColor=e[t].col,e[t].style.backgroundImage=`linear-gradient(63.435deg,${e[t].col2} 50%,transparent 50%),linear-gradient(-63.435deg,${e[t].col2} 50%,transparent 50%)`,e[t].style.backgroundRepeat='no-repeat',e[t].style.backgroundPosition='22px 6px,6px 6px',e[t].style.backgroundSize='16px 32px',e[t].onclick=function(){setBKCol(this.col);for(let e=ObjT.length;e--;)removeH(ObjT[e]);ObjT[0].className+=' H',Theme=0,SprCol=this.col2,SprCol2=this.col3,setSprCol(SprCol,SprCol2,0)}},ObjT[1].onclick=function(){ShowGUI.style.display='block',ShowTitle.innerText='选择主题色',BoxCt.innerHTML="<div class='chsSpr'></div><div class='chsSpr'></div><div class='chsSpr'></div><div class='chsSpr'></div><div class='chsSpr'></div><div class='chsSpr'></div>";var e=BoxCt.children;e[0].col='#000000',e[0].col2='#FFFFFF',e[1].col='#FFFFFF',e[1].col2='#000000',e[2].col='#FFFFFF',e[2].col2='#808080',e[3].col='#000000',e[3].col2='#88A0B0',e[4].col='#FFFFFF',e[4].col2='#E7C858',e[5].col='#1A001A',e[5].col2='#B622BA';for(var t=e.length;t--;)e[t].style.backgroundColor=e[t].col,e[t].style.backgroundImage=`linear-gradient(180deg,${e[t].col2} 1px,transparent 1px),linear-gradient(180deg,${e[t].col2} 1px,transparent 1px),linear-gradient(90deg,${e[t].col2} 1px,transparent 1px),linear-gradient(90deg,${e[t].col2} 1px,transparent 1px)`,e[t].style.backgroundRepeat='no-repeat',e[t].style.backgroundPosition='6px 6px,6px 37px,6px 6px,37px 6px',e[t].style.backgroundSize='32px 32px',e[t].onclick=function(){setBKCol(this.col);for(let e=ObjT.length;e--;)removeH(ObjT[e]);ObjT[1].className+=' H',Theme=1,SprCol=this.col2,SprCol2=this.col2,setSprCol(SprCol,SprCol2,1)}},SetSpr=$('spr'),ObjSpr=SetSpr.getElementsByClassName('spr');for(i=ObjSpr.length;i--;)ObjSpr[i].onclick=()=>{ShowGUI.style.display='block',ShowTitle.innerText='设置贴图',BoxCt.innerHTML=''};function CloseShow(){ShowGUI.style.display='none'}BackGround=$('back'),sfbg=BackGround.getContext('2d'),BGMode=1,setBK=$('setBK'),chsBox=setBK.getElementsByClassName('chsBox');for(i=0;i<chsBox.length;i++){chsBox[i].tab=[],chsBox[i].chs=[];for(var c=chsBox[i].parentElement.children,a=0,ii=0;ii<c.length;ii++)c[ii].className.includes('chsBox')?(chsBox[i].chs.push(c[ii]),c[ii].ind=a,a+=1):c[ii].className.includes('chsTab')&&chsBox[i].tab.push(c[ii]);chsBox[i].onclick=function(){this.chs.forEach(e=>removeH(e)),this.className+=' H';for(var e=0;e<this.tab.length;e++)e===this.ind?this.tab[this.ind].style.display='block':this.tab[e].style.display='none';if(this.id)switch(this.id){case'C0':BGMode=0,setBKCol(bkCol.style.background);break;case'C1':$('C1'+GraMode).click();break;case'C10':BGMode=1,GraMode=0,setGra();break;case'C11':BGMode=2,GraMode=1,setGra();break;case'C20':let e=BackGround.style.background.match(/url.*\)/);e&&(BackGround.style.background=e[0]),BGhspd=Number(oBGhspd.value),BGvspd=Number(oBGvspd.value);break;case'C21':let t=BackGround.style.background.match(/url.*\)/);t&&(BackGround.style.background=`${t[0]} 0 0 /${RoomW}px ${RoomH}px`),BGhspd=0,BGvspd=0;break;case'C22':let s=BackGround.style.background.match(/url.*\)/);s&&(BackGround.style.background=s[0]+'center no-repeat'),BGhspd=0,BGvspd=0}}}function setBKCol(e){chsBox[0].click(),$('C0').click(),bkCol.style.background=e,BackGround.style.background=e}function setGra(){var e=Array.from(oSlider);e.sort((e,t)=>parseFloat(e.style.left)-parseFloat(t.style.left));for(var t='',s=0;s<e.length;s++)t+=','+e[s].style.backgroundColor+' '+e[s].style.left;bkedit.style.background='linear-gradient(90deg'+t+')',GraMode?BackGround.style.background='radial-gradient(ellipse'+t+')':BackGround.style.background='linear-gradient('+slider.deg+'deg'+t+')'}function loadGra(e){chsBox[0].click(),$('C1').click();var t=e.match(/\d+deg/);null===t?2===BGMode&&(GraMode=1):(GraMode=0,slider.deg=parseInt(t[0]),NaN===slider.deg&&(slider.deg=0),BGang.value=slider.deg);var s=e.match(/rgb.*?\)/g),o=e.match(/\d+(\.\d+)?%/g),r=e.match(/rgb.*\)/);slider.innerHTML='';for(var a=0;a<s.length;a++)slider.innerHTML+="<div><div class='tri'></div></div>",oSlider=slider.children,oSlider[a].style.backgroundColor=s[a],oSlider[a].style.left=o[a];slider.set(),bkedit.style.background='linear-gradient(90deg,'+r,BackGround.style.background=e}function setBKImg(e,t=0,s=0){var o=e.match(/url.*\)/);(BackGround.style.background=o?o[0]:`url(//cdn.jsdelivr.net/gh/vicklleall/website@g3isv/game/CloudIWanna/img/spr/${e}/BG.png)`,e.match(/\/ \d+px/))?$('C21').click():e.match(/center/)?$('C22').click():(oBGhspd.value=t,oBGvspd.value=s,$('C20').click());BGMode=3,chsBox[1].click()}function covRGB(e){var t=e.match(/\d+/g);return t?'#'+(Number(t[0])<<16|Number(t[1])<<8|Number(t[2])).toString(16).padStart(6,'00000'):e}bkCol=$('bkCol'),bkCol.style.background='#FFFFFF',bkCol.onclick=function(){ObjCol.onchange=function(){setBKCol(this.value)},ObjCol.value=covRGB(this.style.background),ObjCol.click()},bkedit=$('bkedit'),GraMode=0,slider=$('slider'),oSlider=slider.children,slider.dragi=-1,slider.deg=0,ObjCol=$('ObjCol'),slider.set=function(){for(var e=0;e<oSlider.length;e++)oSlider[e].ind=e,oSlider[e].onmousedown=function(e){0===(e=e||window.event).button?(slider.pos=slider.getBoundingClientRect(),slider.dragi=this.ind):2===e.button&&oSlider.length>2&&(slider.removeChild(this),slider.set(),slider.dragi=-1,setGra())},oSlider[e].ondblclick=function(){ObjCol.ind=this.ind,ObjCol.onchange=function(){oSlider[this.ind].style.backgroundColor=ObjCol.value,setGra()},ObjCol.value=covRGB(oSlider[this.ind].style.backgroundColor),ObjCol.click()}},slider.set(),setGra(),slider.onmousedown=e=>{if(-1==slider.dragi&&0===e.button){slider.pos=slider.getBoundingClientRect();var t=Math.min(100,Math.max(0,(mouse_x-slider.pos.left-6)/1.72));slider.innerHTML+="<div style='left:"+t+"%;background-color:#FFF'><div class='tri'></div></div>",oSlider=slider.children,slider.set(),slider.dragi=oSlider.length-1,setGra()}},BGang=$('BGang'),BGang.onchange=()=>{slider.deg=Number(BGang.value),NaN===slider.deg&&(slider.deg=0),setGra()},oBGhspd=$('BGhspd'),oBGvspd=$('BGvspd'),oBGhspd.onchange=function(){BGhspd=Number(this.value)},oBGvspd.onchange=function(){BGvspd=Number(this.value)},BGhspd=0,BGvspd=0,oBGhspd.value=0,oBGvspd.value=0,efcol=$('efcol'),efcol.style.background='#FFFFFF',efcol.onclick=function(){ObjCol.onchange=function(){efcol.style.background=this.value},ObjCol.value=covRGB(this.style.background),ObjCol.click()},effects=$('effects').getElementsByTagName('input'),haveEf=$('haveEf');for(i=effects.length;i--;)effects[i].ind=i,effects[i].onchange=function(){if(NaN===Number(this.value)&&(this.value=''),0===this.ind&&''===this.value)return haveEf.style.color='',haveEf.style.pointerEvents='',!0;this.min&&(this.value=Math.max(this.min,this.value)),this.max&&(this.value=Math.min(this.max,this.value)),1==this.step?this.value=Number(this.value).toFixed(0):this.value=Number(this.value).toFixed(1),0===this.ind&&(haveEf.style.color='#000',haveEf.style.pointerEvents='auto')};function NtS(e){return String.fromCharCode(e+100)}function cStr(e,t){return t&&(e*=Math.pow(10,t)),e<0?NtS(1)+NtS(Math.abs(e)+100):NtS(e+100)}function setStr(e,t,s,o){var r=e.findIndex(e=>1==e.indexOf(t));r<0?o?e.push(t+cStr(s.x)+cStr(s.y)):e.push(NtS(0)+t+cStr(s.x)+cStr(s.y)):e[r]+=cStr(s.x)+cStr(s.y)}function concatArr(e,t,s){return t.length>0&&(e.push(NtS(s)),t[0]=t[0].slice(1),e=e.concat(t),t.splice(0)),e}function saveStr(e,t,s){var o='';t.forEach(e=>o+=e),t.splice(0),s[e]=o}function strWH(e){return cStr(e.w+(e.h>>5))}function checkSize(){var e=0;return block.forEach(t=>e+=1),e>400?(alert('Block数量过多，请修改'),!1):(e=0,spike.forEach(t=>e+=1),Rcherry.forEach(t=>{'objSpikeGear'==t.__proto__.constructor.name&&(e+=t.n)}),e>800?(alert('Spike数量过多，请修改'),!1):(e=0,platform.forEach(t=>e+=1),e>200?(alert('Platform数量过多，请修改'),!1):(e=0,cherry.forEach(t=>e+=1),Rcherry.forEach(t=>{'objRoundingCherry'==t.__proto__.constructor.name&&(e+=t.n)}),e>500?(alert('Cherry数量过多，请修改'),!1):(e=0,conveyor.forEach(t=>e+=1),e>100?(alert('Conveyor数量过多，请修改'),!1):(e=0,warp.forEach(t=>e+=1),!(e>100)||(alert('Warp数量过多，请修改'),!1))))))}function saveRoom(e){switch(saveData={},saveData.V='0.500',saveData.N=GameName.value,saveData.R=cStr(RoomW)+cStr(RoomH)+cStr(startX)+cStr(startY)+cStr(warpEnd.x)+cStr(warpEnd.y)+cStr(OutMode)+cStr(ViewMode)+cStr(ViewSX)+cStr(ViewSY),saveData.T=NtS(Theme),0===Theme?saveData.T+=SprCol+SprCol2:1===Theme&&(saveData.T+=SprCol),BGMode){case 0:saveData.BG=NtS(BGMode)+BackGround.style.background;break;case 1:case 2:saveData.BG=NtS(BGMode)+BackGround.style.backgroundImage;break;case 3:saveData.BG=NtS(BGMode)+BackGround.style.background,0===BGhspd&&0===BGvspd||(saveData.BG+=` h${BGhspd}v${BGvspd}`)}if(saveData.BGM=BGMid.value,saveData.E=effects[0].value,''!==saveData.E){for(let e=1;e<7;e++)saveData.E+=NtS(Number(effects[e].value)/Number(effects[e].step||.1));saveData.E+=effects[7].value+covRGB(efcol.style.background)}var t=[],s=[],o=[];block.forEach(e=>{switch(e.__proto__.constructor.name){case'objBlock':setStr(t,strWH(e),e);break;case'objIceBlock':setStr(s,strWH(e),e)}}),t=concatArr(t,s,11),water.forEach(e=>setStr(s,strWH(e),e)),t=concatArr(t,s,10),field.forEach(e=>{switch(e.f){case 0:setStr(s,strWH(e),e);break;case 1:setStr(o,strWH(e),e)}}),t=concatArr(t,s,12),t=concatArr(t,o,13),field.forEach(e=>{switch(e.f){case 2:setStr(s,strWH(e),e);break;case 3:setStr(o,strWH(e),e)}}),t=concatArr(t,s,14),saveStr('B',t=concatArr(t,o,15),saveData),spike.forEach(e=>{'objSpike'===e.__proto__.constructor.name&&setStr(t,cStr(e.w)+cStr(e.h)+cStr(e.img_ang),e)}),saveStr('S',t,saveData),GMStepObj.forEach(e=>{switch(e.__proto__.constructor.name){case'objSavePoint':setStr(t,NtS(10),e,!0)}}),Walljump.forEach(e=>setStr(t,NtS(12+e.side),e,!0)),block.forEach(e=>{switch(e.__proto__.constructor.name){case'objCrate':setStr(t,NtS(12),e,!0);break;case'objBreakableBlock':setStr(t,NtS(22),e,!0)}}),GMColObj.forEach(e=>{switch(e.__proto__.constructor.name){case'objJumpRefresher':setStr(t,NtS(14),e,!0);break;case'objJumpChanger':setStr(t,NtS(15+Math.min(e.num,3)),e,!0);break;case'objFake':setStr(t,NtS(19+e.ind),e,!0)}}),saveStr('O',t,saveData),platform.forEach(e=>setStr(t,cStr(e.hspeed,1)+cStr(e.vspeed,1),e)),cherry.forEach(e=>{void 0===e.rid&&setStr(s,cStr(e.hspeed,1)+cStr(e.vspeed,1),e)}),t=concatArr(t,s,10),GMColObj.forEach(e=>{switch(e.__proto__.constructor.name){case'objSpring':setStr(s,cStr(e.ang)+cStr(e.spd),e);break;case'objTrampoline':setStr(o,cStr(e.ang)+cStr(e.spd),e)}}),t=concatArr(t,s,11),t=concatArr(t,o,12),conveyor.forEach(e=>{0===e.fx?setStr(s,cStr(e._w)+cStr(e.spd,1),e):setStr(o,cStr(e._w)+cStr(e.spd,1),e)}),t=concatArr(t,s,13),saveStr('O2',t=concatArr(t,o,14),saveData),warp.forEach(e=>setStr(t,cStr(e.warpX)+cStr(e.warpY)+cStr(e.k),e)),saveStr('O3',t,saveData),Rcherry.forEach(e=>{setStr(t,NtS(10+('objSpikeGear'===e.__proto__.constructor.name))+cStr(e.n)+cStr(e.r)+cStr(e.spd,1)+cStr(e.ang),e,!0)}),shooter.forEach(e=>{setStr(t,NtS(12+e.mode)+cStr(e.n)+cStr(e.spd,1)+cStr(e.t)+cStr(e.ang),e,!0)}),saveStr('O4',t,saveData),board.forEach(e=>{t.push(NtS(-100)+cStr(e.x)+cStr(e.y)+e.txt)}),saveStr('Bd',t,saveData),e&&(localStorage.setItem(NowGame,JSON.stringify(saveData)),alert("保存成功！"))}function cNum(e,t){return VER<.4?t?(e.charCodeAt()-100)/Math.pow(10,t):e.charCodeAt()-100:t?(e.charCodeAt()-200)/Math.pow(10,t):e.charCodeAt()-200}function StN(e){return VER<.4?e.charCodeAt():e.charCodeAt()-100}function loadRoom(e){if(VER=Number(saveData.V),e){GameName.value=saveData.N||'';var t=saveData.T;if(t){Theme=StN(t.charAt(0));for(let e=ObjT.length;e--;)removeH(ObjT[e]);ObjT[Theme].className+=' H',0===Theme?(SprCol=t.slice(1,8),SprCol2=t.slice(8,15),setSprCol(SprCol,SprCol2,0)):1===Theme?(SprCol=t.slice(1,8),SprCol2=SprCol,setSprCol(SprCol,SprCol2,1)):ObjT[Theme].click()}resetSPR(),BGMid.value=saveData.BGM||'29482950',BGMid.onchange()}var s=saveData.R;if(s.length<10)for(s=cStr(800)+cStr(608)+s;s.length<10;)s+=cStr(0);RoomW=cNum(s.charAt(0)),RoomH=cNum(s.charAt(1)),oRoomW.value=RoomW,oRoomH.value=RoomH,startX=cNum(s.charAt(2)),startY=cNum(s.charAt(3)),warpEnd=new objWarp(cNum(s.charAt(4)),cNum(s.charAt(5)),!0),RoomOut[cNum(s.charAt(6))].click(),oView[cNum(s.charAt(7))].click(),ViewSX=cNum(s.charAt(8)),ViewSY=cNum(s.charAt(9)),oViewX.value=ViewSX,oViewY.value=ViewSY;var o=saveData.BG;if(o){BGMode=StN(o.charAt(0)),o=o.slice(1);for(let e=0;e<chsBox.length;e++)removeH(chsBox[e]);switch(BGMode){case 0:setBKCol(o);break;case 1:case 2:loadGra(o);break;case 3:let e=o.match(/h-*\d+\.*\d*v-*\d+\.*\d*/);var r=0,a=0;e&&(r=e[0].match(/h-*\d+\.*\d*/)[0].slice(1),a=e[0].match(/v-*\d+\.*\d*/)[0].slice(1)),setBKImg(o,r,a)}}if(saveData.E&&''!==saveData.E){effects[0].value=saveData.E.charAt(0),effects[0].onchange(),effects[7].value=saveData.E.charAt(7),effects[7].onchange(),EF[0]=Number(effects[0].value),EF[7]=Number(effects[7].value);for(let e=1;e<7;e++)EF[e]=StN(saveData.E.charAt(e))*(effects[e].step||.1),effects[e].value=EF[e],effects[e].onchange();EF[8]=saveData.E.slice(8),efcol.style.background=EF[8],EF[0]>3&&EFSprinit()}else EF=[],effects[0].value='',effects[0].onchange();readRoom(saveData)}function download(e,t){var s=document.createElement('a');s.download=t,s.style.display='none';var o=new Blob([JSON.stringify(e)]);s.href=URL.createObjectURL(o),document.body.appendChild(s),s.click(),document.body.removeChild(s)}function DLGame(){if(void 0!==saveData){saveRoom();var e=saveData.N;''===e&&(e='Untitled'),download(saveData,e+'.iw')}}GameName=$('GameName');var ipGame=document.createElement('input');function LDGame(){ipGame.value='',ipGame.click()}function ULGame(){if(!currentUser.get("emailVerified"))return alert('您的账号尚未验证，无法发布游戏'),!1;if(!currentUser.get('Exp')||currentUser.get('Exp')<20)return alert('用户等级达到3级才能发布游戏哦！'),!1;if(saveRoom(),''===saveData.N)return ico[0].click(),alert('请填写游戏标题！'),!1;alert('注意事项：\n1.请勿发布单刺阵图\n2.游戏质量不能太低（不合格会被删除）\n3.合理设置挑战成就，确保游戏能够通关\n4.警告：房间内物体过多会卡顿！！（必要时会采取删除措施）'),ShowGUI.style.display='block',ShowTitle.innerText='发布游戏',BoxCt.innerHTML=`<h2>游戏名<span style='color:#000;font-weight:bold;margin-left:8px'>${saveData.N}</span></h2>\n<div style='position:absolute;left:112px'>\n\t<h2>游戏简介</h2>\n\t<textarea id='GIn'></textarea>\n</div>\n<h2>游戏封面</h2>\n<div id='GCover'><img id='CImg' alt=''/>➕</div>\n<h2 style='display:inline-block'>游戏分类</h2>\n<div class='chsBox'>Needle</div><div class='chsBox'>Trap</div><div class='chsBox'>Gimmick</div><br/>\n<h2 style='display:inline-block'>挑战成就</h2>\n<span>时间:</span><input type='number' id='at'/><span style='margin-right:10px'>s</span><span>死亡:</span><input type='number' id='ad'/>\n<div id='UP'>发布</div>`,$('at').onchange=function(){try{var e=Math.abs(Math.round(Number(this.value)));NaN!==e&&(this.value=e)}catch(e){this.value=''}},$('ad').onchange=$('at').onchange;var e=$('GIn');e.maxLength=200,$('GCover').onclick=()=>{ipGC.value='',ipGC.click()},$('UP').onclick=()=>''===CImg.src?(alert('请设置游戏封面！'),!1):null===t?(alert('请选择游戏分类！'),!1):''===e.value?(alert('请填写游戏简介！'),!1):void function(){if(!checkSize())return!1;var s=new AV.Object('Game'),o=new AV.Object('GRoom'),r=saveData;o.set('V',r.V),o.set('R',r.R),o.set('T',r.T),o.set('BG',r.BG),o.set('B',r.B),o.set('S',r.S),o.set('O',r.O),o.set('O2',r.O2),o.set('O3',r.O3),o.set('O4',r.O4),o.set('Bd',r.Bd),o.set('BGM',r.BGM),o.set('E',r.E),''!==$('at').value&&o.set('CT',Number($('at').value));''!==$('ad').value&&o.set('CD',Number($('ad').value));s.set('Name',r.N),s.set('A',AV.User.current()),s.set('I',e.value),s.set('C',t),s.set('Room',o),s.set('Cover',CImg.src),s.set('Index',Date.now()),s.save().then(()=>{alert("✅ 发布成功！"),CloseShow()},e=>{alert('发布失败')})}();var t=null,s=BoxCt.getElementsByClassName('chsBox');for(let e=s.length;e--;)s[e].ind=e,s[e].onclick=function(){for(let e=s.length;e--;)removeH(s[e]);this.className+=' H',t=this.ind}}ipGame.type='file',ipGame.accept='.iw',ipGame.style.display='none',ipGame.onchange=function(){var e=this.files[0],t=new FileReader;t.readAsText(e),t.onload=function(){try{var e=JSON.parse(this.result);saveData=e,room_load(!0,!1,!0)}catch(e){console.log(e),alert('文件读取错误！')}}},document.body.appendChild(ipGame),ipGC=document.createElement('input'),ipGC.type='file',ipGC.accept='image/*',ipGC.style.display='none',cGC=$('cGC'),cGCc=cGC.getContext('2d'),dUp=$('dUp'),dUpc=dUp.getContext('2d'),Cchs=$('Cchs'),Cchs.onmousemove=function(){if(void 0===this.Dw&&void 0===this.Dx){var e=this.getBoundingClientRect();mouse_x>e.right-20&&mouse_y>e.bottom-20?document.body.style.cursor='se-resize':document.body.style.cursor='move'}},Cchs.onmouseout=function(){void 0===this.Dw&&void 0===this.Dx&&(document.body.style.cursor='default')},Cchs.onmousedown=function(){var e=this.getBoundingClientRect();mouse_x>e.right-20&&mouse_y>e.bottom-20?(this.Dw=mouse_x-cGC.sc,this.Dh=mouse_y-cGC.sc,document.body.style.cursor='se-resize'):(this.Dx=mouse_x-Number(this.style.left.slice(0,-2)),this.Dy=mouse_y-Number(this.style.top.slice(0,-2)),document.body.style.cursor='move')},ipGC.onchange=function(){var e=this.files[0],t=new FileReader;t.readAsDataURL(e),t.onload=function(){try{var e=new Image;e.style.imageRendering='auto',e.onload=function(){if(this.width<96||this.height<96)return alert('图片宽高不能小于96像素！'),!1;for(;this.width>1024||this.height>1024;)this.width=this.width>>1,this.height=this.height>>1;dUp.width=this.width,dUp.height=this.height,dUpc.drawImage(this,0,0,dUp.width,dUp.height),cGC.sc=Math.min(dUp.width,dUp.height),Cchs.style.width=`${cGC.sc}px`,Cchs.style.height=`${cGC.sc}px`;var e=(dUp.width-cGC.sc)/2,t=(dUp.height-cGC.sc)/2;Cchs.style.left=`${e}px`,Cchs.style.top=`${t}px`,cGCc.clearRect(0,0,96,96),cGCc.drawImage(dUp,e,t,cGC.sc,cGC.sc,0,0,96,96);var s=$('CUp').getElementsByTagName('div');s[0].onclick=()=>{var e=cGC.toDataURL('image/webp',1);e.length>9e3?$('CImg').src=cGC.toDataURL('image/webp',.92):$('CImg').src=e,$('CBK').style.display='none'},s[1].onclick=()=>{$('CBK').style.display='none'},$('CBK').style.display='block'},e.src=this.result}catch(e){console.log(e),alert('文件读取错误！')}}},document.body.appendChild(ipGC);