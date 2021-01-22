_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"1aeJ":function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/tutorials/use-avif-in-nextjs",function(){return i("fddT")}])},fddT:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return h}));var o=i("nKUr"),n=i("zlmg"),a=i("hPTu"),s=i("vBjH"),r=i("Ne+F");function h(){return Object(o.jsxs)(n.a,{postdata:r.n,posts:[r.j,r.g,r.l],children:["So, you're expecting some colossal blog post? Well, it won't happen. The blog you are currently reading uses the latest version of both React and NextJS. Not only that, but the bundler automatically detects AVIF files and treats them accordingly. We didn't have to do anything for this work. That's what we call a top-notch service, gentlemen!",Object(o.jsx)("h2",{children:"That's it?"}),'Yes. This approach is sometimes referred to as "GG EZ". You must simply include the AVIF files in your project and insert them via the usual methods using HTML or CSS. No configuration is required, however, you must make sure that next.config.js includes the following:',Object(o.jsx)(s.a,{language:"javascript",children:'const images = require("next-images");\nmodule.exports = withImages()'}),"Next.JS will handle all the bullshit behind the scenes for you.",Object(o.jsx)("h2",{children:"You gotta be kidding me"}),'The team behind Next.JS has been working on improving the way images are processed since version 10.0.0. They are now offering both a built-in image component and Automatic Image Optimization service. They describe their image component as "an extension of the HTML img element, evolved for the modern web."Why, you may be wondering? Well, images in this component are resized, optimized, and automatically served in the right format based on the device and browser of the visitor. For example, you would not deliver a high-resolution image to a Nintendo Gameboy. Furthermore, the images that are lazy-loaded are supporting the Core Web Vitals by not shifting their layouts. Besides, this service may also be used when the server containing the images of the website is a CDN rather than a server hosted by the website.',Object(o.jsx)("h2",{children:"Use the Next.JS image component"}),"All in all, it's a simple \"put this image into your project, add it with the component and we do all the conversion and optimization. That's perfect for lazy people like us. Booyah!",Object(o.jsx)(s.a,{language:"javascript",children:'import Image from \'next/image\'\n(..)\n      <Image\n        src="/yourmum.jpg"\n        alt="Picture of your mum"\n        width={9001}\n        height={0}\n      />\n(..)'}),Object(o.jsx)("h2",{children:"The component is not com..plete"}),"While it does convert images into newer formats, it yet does not do the same for AVIF. There's a ",Object(o.jsx)(a.a,{link:"https://github.com/vercel/next.js/pull/20381",text:"canary version"})," on Github which references AVIF on more than one occasion, so hopefully we will see this supported in future releases. As a final note, the images loaded through CSS do not get optimized, although we are praying this will be the case in future releases.",Object(o.jsx)("h2",{children:"Next Optimized Images"}),"Until that point, if you rely heavily on CSS images, you can use the third-party plugin in Next.JS called"," ",Object(o.jsx)(a.a,{text:"next-optimized-images",link:"https://github.com/cyrilwanner/next-optimized-images"}),". It has many additional features, and it supports loading images with CSS, which is very useful for our use-case. Yet, the plugin does not yet support AVIF as well. Still, the author is currently working on a complete rewrite of the entire plugin, and a canary version is already published. We've linked to the plugin in the sources below."]})}}},[["1aeJ",0,1,2,3,4,5]]]);