"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[935],{8830:function(e,r,t){t.d(r,{Bt:function(){return p},SU:function(){return u},Y5:function(){return l},y:function(){return v},z1:function(){return f}});var n=t(5861),a=t(7757),c=t.n(a),o=t(1912),s="https://api.themoviedb.org/3",i="53e87cb9c08783511c6675cb8902a46b",u=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.Z.get("".concat(s,"/trending/all/day?api_key=").concat(i)),console.log("popularMoviesList in fetchPopularMovies",r),e.abrupt("return",r);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.Z.get("".concat(s,"/movie/").concat(r,"?api_key=").concat(i)),console.log("movieDetails in fetchMovieDetails:",t),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.Z.get("".concat(s,"/movie/").concat(r,"/credits?api_key=").concat(i)),console.log("castData in fetchCast :",t),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.Z.get("".concat(s,"/movie/").concat(r,"/reviews?api_key=").concat(i)),console.log("movieReviews in fetchReviews",t),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.Z.get("".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(r)),console.log(t),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},7935:function(e,r,t){t.r(r),t.d(r,{default:function(){return _}});var n=t(5861),a=t(9439),c=t(7757),o=t.n(c),s=t(2791),i=t(8830),u=t(7689),l="Reviews_reviewsContainer__bHfUv",v="Reviews_noReviewsMessage__jL7xa",p="Reviews_errorMessage__YpIaY",f="Reviews_reviewsList__hDAQA",h="Reviews_reviewListItem__Kbkhg",d="Reviews_reviewAuthor__f4lkL",w="Reviews_reviewContext__Rcspb",m=t(184),_=function(){var e,r,t,c=(0,s.useState)(null),_=(0,a.Z)(c,2),g=_[0],k=_[1],x=(0,s.useState)([]),y=(0,a.Z)(x,2),b=y[0],Z=y[1],R=(0,u.UO)();return console.log("params:",R),(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Bt)(R.movieId);case 3:if(r=e.sent,console.log("response.data.results in Reviews : ",r.data),r){e.next=8;break}return Promise.reject(new Error("Something wrong. Try to reload this page.")),e.abrupt("return",(0,m.jsx)("p",{className:p,children:"Something wrong. Try to reload this page."}));case 8:Z(r.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),k(e.t0);case 14:return e.prev=14,e.finish(14);case 16:case 17:case"end":return e.stop()}}),e,null,[[0,11,14,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[R.movieId]),(0,m.jsxs)("div",{className:l,children:[g&&(0,m.jsx)("h1",{className:p,children:" Something wrong. Try to reload this page."}),0===(null===b||void 0===b||null===(e=b.results)||void 0===e?void 0:e.length)&&(0,m.jsx)("h1",{className:v,children:"Sorry, this movie has not any review "}),(null===b||void 0===b||null===(r=b.results)||void 0===r?void 0:r.length)>0&&(0,m.jsx)("ul",{className:f,children:null===b||void 0===b||null===(t=b.results)||void 0===t?void 0:t.map((function(e){return(0,m.jsxs)("li",{className:h,children:[(0,m.jsxs)("h2",{className:d,children:["Author: ",e.author]}),(0,m.jsx)("p",{className:w,children:e.content})]},e.id)}))})]})}}}]);
//# sourceMappingURL=935.ddc39b5b.chunk.js.map