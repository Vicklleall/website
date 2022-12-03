const DATA={t:'详解 GameMaker 表面混色奇怪的原因',z:'6389e7695fee9f4325e8df3a',u:'2022-12-03',c:'2022-12-03',l:['CC BY 4.0','https://creativecommons.org/licenses/by/4.0/'],h:"<p>如果你在 GameMaker 的表面(Surface)上绘制半透明图像，你会发现表面被“腐蚀”了。当你尝试还原 GM 自带的画图时，你会发现试遍所有混色方法也无法实现。为何 GM 的表面混色这么奇怪？</p><div class='TC'><img width=480 src='//test1.jsdelivr.net/gh/vicklleall/website@gkkzk/p/t3/img/1.png'/></div><p class='label'>先绘制不透明、半透明黑色，再绘制半透明白色圆。左为直接绘制，右为先绘制到表面再绘制到屏幕</p><p>先说结论：这不是你的问题，这是设计失误，原因是 GameMaker 绘制时颜色<b>没有预乘Alpha</b></p><p class='cm'>注：本文仅讨论正常颜色混合模式，即 source-over</p><h4>现象产生的原因</h4><p>GameMaker 的默认的混合模式<span class='code-il'>bm_normal</span>，也就是<span class='code-il'>(bm_src_alpha, bm_inv_src_alpha)</span>，按照 GM 的颜色混合方法，计算的公式如下：$$\\begin{align}RGB&=RGB_{src}*A_{src}+RGB_{dst}*(1-A_{src})\\\\A&=A_{src}*A_{src}+A_{dst}*(1-A_{src})\\end{align}$$其中 $RGB_{src}$ 和 $A_{src}$ 是要画上去的颜色和透明度，$RGB_{dst}$ 和 $A_{dst}$ 是表面上已有的颜色和透明度(Alpha值)。</p><p>注意公式中 Alpha 值的计算，假设现在画布上 $A_{dst}=1$，我们绘制一个半透明图像 $A_{src}=0.5$，计算得到最终透明度为 $0.5*0.5+1*(1-0.5)=0.75$，表面颜色变成了半透明，被“腐蚀”了。更进一步，假如现在表面是空的，我们绘制一个透明度为 $0.5$ 的图像，画出来的透明度竟然是 $0.5*0.5+0*(1-0.5)=0.25$ ???</p><p>不仅仅是 Alpha 值问题，我们再来看一下颜色计算。假设表面之前是不透明的白色，$RGB_{dst}=1$，$A_{dst}=1$，我们现在画一个半透明的黑色上去，$RGB_{src}=0$，$A_{src}=0.5$，此时得到的最终颜色 $RGB=0*0.5+1*(1-0.5)=0.5$；那如果表面之前是半透明的白色，$A_{dst}=0.1$，你会发现我们画完黑色之后依然是 $RGB=0*0.5+1*(1-0.5)=0.5$，两种情况得到的 $RGB$ 值竟然是一样的 ???</p><p><b>事实上，上面的计算公式是错误的。</b>仔细想想，一是 $A_{dst}$ 没有出现在 $RGB$ 值的计算中，二是 $A_{src} * A_{src}$ 是在算什么玩意儿。</p><p>那为什么不在表面上绘制就是正常的呢？这是因为<b>绘制到窗口上的透明度始终为1</b>，也就是说 $A$ 和 $A_{dst}$ 始终是1（详细的分析下一节会提到）。而表面是带有透明度的，于是这错误的计算方法就原形毕露了。</p><h4>正确的混合公式</h4><p>现在我们知道了 GM 表面混色奇怪是因为混色计算错误，那正确的颜色混合公式是什么呢？</p><p>$$\\begin{align}RGB'&=RGB_{src}*A_{src}+RGB_{dst}*A_{dst}*(1-A_{src})\\\\A&=A_{src}+A_{dst}*(1-A_{src})\\end{align}$$</p><p>上面这个就是正确的颜色混合公式。等等，为什么是 $RGB'$ ？这是因为计算得到的这个 $RGB'$ 并不是真正的 $RGB$ 值，而是 $RGB'=RGB*A$，为方便理解，我们可以假设 $RGB_{src}=RGB_{dst}$，于是就有 $RGB'=RGB*A_{src}+RGB*A_{dst}*(1-A_{src})=RGB*A$。也就是说，<b>我们通过这个公式计算出来的颜色，是乘了透明度的颜色。</b></p><p>接下来我们来验证一下这个公式在表面上的正确性。考虑这样一个绘制场景：先绘制透明度为0.5的白色，再绘制透明度为0.5的黑色（窗口背景为黑色），预期的结果应当是 $RGB=0.25$。</p><p class='cm'>直接绘制到窗口</p><p>窗口的透明度始终为1，因此我们只用计算颜色：$$\\begin{align}RGB_1&=1_{(白色)}*0.5+0*1*(1-0.5)=0.5\\\\RGB_2&=0_{(黑色)}*0.5+0.5_{(RGB_1)}*1*(1-0.5)=0.25\\end{align}$$</p><p class='cm'>先绘制到表面再绘制到窗口</p><p>首先绘制白色到表面：$$\\begin{align}RGB_1'&=1*0.5+0*0*(1-0.5)=0.5\\\\A_1&=0.5+0*(1-0.5)=0.5\\end{align}$$</p><p>注意这里的 $RGB_1'=RGB_1*A_1$，所以接下来绘制黑色时：$$\\begin{align}RGB_2'&=0*0.5+RGB_1*A_1*(1-0.5)=0.25\\\\A_2&=0.5+A_1*(1-0.5)=0.75\\end{align}$$</p><p>随后将表面绘制到屏幕上：$$RGB=RGB_2*A_2+0*1*(1-A_2)=RGB_2'=0.25$$</p><p>可以看到，两种方法的颜色一致，符合预期。</p><p class='cr'>（可能有点绕，别急，自己动手算一算，慢慢消化）</p><p>现在我们回过头来看上一节提到的绘制到窗口上的情况，$A_{dst}$ 始终为1，代入上面的公式就变成了$$RGB'=RGB_{src}*A_{src}+RGB_{dst}*(1-A_{src})$$</p><p>这不就是一开始<span class='code-il'>(bm_src_alpha, bm_inv_src_alpha)</span>的公式吗，这就解释了为什么在绘制到窗口时，用一开始的那个公式计算没问题。</p><h4>预乘Alpha</h4><p>前面的计算过程中，我们一直使用的是 $RGB'$，也就是 $RGB$ 和 $A$ 相乘的值。我们代入展开颜色混合公式观察一下：$$\\begin{align}\\textcolor{red}{R*A}=R'&=\\textcolor{red}{R_{src}*A_{src}}+\\textcolor{red}{R_{dst}*A_{dst}}*(1-A_{src})\\\\\\textcolor{green}{G*A}=G'&=\\textcolor{green}{G_{src}*A_{src}}+\\textcolor{green}{G_{dst}*A_{dst}}*(1-A_{src})\\\\\\textcolor{blue}{B*A}=B'&=\\textcolor{blue}{B_{src}*A_{src}}+\\textcolor{blue}{B_{dst}*A_{dst}}*(1-A_{src})\\\\A&=A_{src}+A_{dst}*(1-A_{src})\\end{align}$$</p><p>发现了吗，所有的颜色都是以 $RGB*A$ 的形式出现的，那我们可以直接给所有颜色预乘 Alpha 值，都替换成 $RGB'$ 就得到了：$$\\begin{align}RGB'&=RGB'_{src}+RGB'_{dst}*(1-A_{src})\\\\A&=A_{src}+A_{dst}*(1-A_{src})\\end{align}$$</p><p>这就意味着，<b>使用乘了 Alpha 值的颜色进行计算，得到的也是乘了 Alpha 的颜色。</b>预乘 Alpha 的颜色运算是封闭的，无需进行任何转换，都使用乘了 Alpha 的颜色进行计算得到的就是正确的结果！</p><p>上面的公式中，$RGB'_{dst}$ 来自于上一次绘制的结果，自然是预乘 Alpha 的颜色，因此我们需要保证的只是 $RGB'_{src}$ 也是预乘 Alpha 的颜色，也就是说，<b>每个要画上去的颜色都要预乘 Alpha</b>。GameMaker 并没有给我们提供预乘 Alpha，不过幸运的是，我们可以用 shader 来实现。例如在 glsl 的 fragment shader 中，我们只需要在最后加上一行代码：</p><div class='code'>gl_FragColor.rgb *= gl_FragColor.a;</div><p>需要注意的是，仅当要画上去的是原始颜色时，我们才需要加这样一行代码去实现预乘。当我们把一个表面绘制到屏幕上时，由于表面上是已经混合好的 $RGB'$，本身就是预乘 Alpha 的颜色了，这种情况我们就不需要再乘一次。</p><p>除此之外，我们还可以观察到，上面的公式可以写成下面这种形式：$$\\begin{align}RGB'&=RGB'_{src}*1+RGB'_{dst}*(1-A_{src})\\\\A&=A_{src}*1+A_{dst}*(1-A_{src})\\end{align}$$</p><p>这意味着，在预乘 Alpha 的计算下，正常混合模式的混合因素为 $(1,1-A_{src})$，因此我们要把<span class='code-il'>bm_normal</span>改成<span class='code-il'>(bm_one, bm_inv_src_alpha)</span>。</p><h5>在 GMS 上实现预乘 Alpha</h5><p>我们新建一个 shader，取名<span class='code-il'>premultipliedAlpha</span>，然后在 fragment 的 main 函数最后加上那行代码：</p><div class='code'>void main() {\n    gl_FragColor = v_vColour * texture2D(gm_BaseTexture, v_vTexcoord);\n    gl_FragColor.rgb *= gl_FragColor.a;\n}</div><p>然后在游戏一开始，我们改变其绘制行为：</p><div class='code'>shader_set(premultipliedAlpha);\ndraw_set_blend_mode_ext(bm_one, bm_inv_src_alpha);</div><p>前面提到了，表面已经是预乘 Alpha 的颜色，不需要用到前面的 shader，所以我们包装一下表面绘制函数，新建一个<span class='code-il code-F'>draw_surface_premultiplied</span>脚本：</p><div class='code'>shader_reset(); // 恢复到默认shader\ndraw_surface(argument0, argument1, argument2);\nshader_set(premultipliedAlpha); // 画完表面再改回我们的shader</div><p>然后我们就可以正常绘制了：</p><div class='code'>// 直接绘制到屏幕\n...\nif (!surface_exists(surf)) {\n    surf = surface_create(320, 320);\n    surface_set_target(surf);\n    draw_clear_alpha(0, 0);\n    // 绘制到表面\n    ...\n    surface_reset_target();\n}\ndraw_surface_premultiplied(surf, 320, 0);</div><p>经过我们的修改，直接绘制和先绘制到表面再绘制到屏幕，结果完全一致：</p><div class='TC'><img width=480 src='//test1.jsdelivr.net/gh/vicklleall/website@gkkzk/p/t3/img/2.png'/></div>",hl:{K:/void/g,P:/[bg]m_\w+|premultipliedAlpha|argument\d/g,M:/gl_\w+/g},tex:!0};window.$p();