(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17],{7126:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/genre/[genre]",function(){return s(9003)}])},2730:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var n=s(5893),r=s(1664),l=s.n(r),a=s(1163),i=s(3737),c=function(e){var t=e.className;return(0,n.jsxs)("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t,children:[(0,n.jsx)("path",{d:"M257.498 293.782L277.084 389.793H419.004L391.023 293.782H257.498Z",fill:"#E50914"}),(0,n.jsx)("path",{d:"M97.7692 289.197L76.673 389.793H272.903L253.317 293.782L97.7692 289.197Z",fill:"#E50914"}),(0,n.jsx)("path",{d:"M189.869 0H313.317L123.448 499.725H0L189.869 0Z",fill:"#B1060F"}),(0,n.jsx)("path",{d:"M317.467 0H189.869L384.402 512H512L317.467 0Z",fill:"#E50914"}),(0,n.jsx)("path",{d:"M248.226 293.526L267.987 389.56H295.529L291.137 293.526H248.226Z",fill:"#E50914"})]})},o=function(){var e=(0,a.useRouter)();return(0,n.jsxs)("header",{className:"sticky top-0 z-[51] flex h-12 w-full items-center bg-gray-900 shadow-md",style:{background:"transparent"},children:[(0,n.jsx)(l(),{href:"/",passHref:!0,children:(0,n.jsx)("a",{children:(0,n.jsx)(c,{className:"ml-4 h-7 w-7 cursor-pointer sm:ml-6"})})}),(0,n.jsxs)("div",{className:"ml-4 flex items-center rounded bg-gray-50 py-[1px] px-2 sm:ml-6",children:[(0,n.jsx)(i.Z,{className:"h-4 w-4"}),(0,n.jsx)("input",{className:"w-44 bg-transparent p-1 text-sm text-black placeholder-gray-400 outline-none sm:w-56 md:w-64 lg:w-72",placeholder:"Search for Anime to watch",onKeyPress:function(t){"Enter"===t.key&&e.push("/search?keyword=".concat(t.currentTarget.value))}})]})]})}},3998:function(e,t,s){"use strict";var n=s(5893),r=s(5675),l=s.n(r),a=s(1664),i=s.n(a),c=s(2426);t.Z=function(e){var t=e.anime,s=t.title.romaji||t.title.english;return(0,n.jsx)(i(),{href:"/anime/".concat(t.id),passHref:!0,children:(0,n.jsx)("a",{className:"w-46 transform p-2 transition duration-300 ease-out hover:scale-105 sm:w-56",style:{margin:"0"},children:(0,n.jsxs)("div",{className:"aspect-w-7 aspect-h-9 relative w-40 sm:w-52",style:{position:"relative",textShadow:"1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",height:"60vh"},children:[(0,n.jsx)(l(),{alt:"Cover Image",src:t.coverImage.large||t.coverImage.medium,layout:"fill",objectFit:"cover",objectPosition:"center",className:"rounded-md",placeholder:"blur",style:{borderRadius:"0"},blurDataURL:"data:image/svg+xml;base64,".concat((0,c.YE)(t.coverImage.color))}),(0,n.jsx)("div",{className:"cardTitle",style:{position:"absolute",fontSize:"1.2vw",display:"flex"},children:(0,n.jsx)("p",{className:"mt-2 h-9 text-sm font-bold text-white line-clamp-2",style:{alignSelf:"flex-end",marginLeft:"2%",marginBottom:"1%"},children:s})})]})})})}},9003:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return o}});var n=s(5893),r=s(1163),l=s(2962),a=s(3998),i=s(2730),c=s(361),o=!0;t.default=function(e){var t=e.searchResults,s=(0,r.useRouter)().query.genre;return c.Z.finish(),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.PB,{title:"Animes for Genre ".concat(s," | Animeflix")}),(0,n.jsx)(i.Z,{}),(0,n.jsxs)("p",{className:"mt-4 ml-3 text-base font-semibold text-white sm:ml-6 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",children:["Found ",t.length," results for Genre ",s]}),(0,n.jsx)("div",{className:"mt-2 grid grid-cols-2 place-items-center gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6",children:t.map((function(e){return(0,n.jsx)(a.Z,{anime:e},e.id)}))})]})}},2426:function(e,t,s){"use strict";s.d(t,{YE:function(){return r}});var n=s(8764).Buffer,r=function(e){return t=function(e){return'\n  <svg width="1" height="1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <rect width="1" height="1" style="fill:'.concat(e,";stroke-width:3;stroke:").concat(e,'" />\n  </svg>\n')}(e),n.from(t).toString("base64");var t}}},function(e){e.O(0,[232,774,888,179],(function(){return t=7126,e(e.s=t);var t}));var t=e.O();_N_E=t}]);