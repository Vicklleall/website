function bindSlide(t,i,e,l){let s=i+'px';css(t,{width:s,height:e+'px'});let h=Ele('div','slide A'),a=Ele('ul','A slide-t');h.i=0,h.l=l.length,h.w=i,h.style.width=i*h.l+'px',l.forEach((t,i)=>{let e=Ele('a','I'),l=Ele('div','I S');css(e,{width:s,backgroundImage:`url(//fastly.jsdelivr.net/gh/vicklleall/website@gi28f/${t.i})`}),e.href=t.u,t.u.startsWith('http')&&(e.target='_blank'),h.ap(e),l.i=i,l.onmouseover=function(){h.update(this.i)},a.ap(l)}),h.update=function(t){clearTimeout(this.t);let i=this.nextSibling.children;i[this.i].rC('ON'),t>=this.l&&(t=0),i[this.i=t].aC('ON'),this.style.left=-t*this.w+'px',this.t=setTimeout((t,i)=>t.update(i),6e3,this,t+1)},t.ap(h,a),h.update(0)}