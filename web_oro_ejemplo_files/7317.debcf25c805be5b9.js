(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7317,1461],{31577:function(e,t,n){"use strict";var r,i;n.d(t,{Z:function(){return r}}),(i=r||(r={})).title="_consensus_estimates",i.gaugeText="_consensus_title",i.analystsConsensus="_consensus_title_h2",i.strongBuy="_Currencies_Strong_Buy",i.buy="_moving_avarge_tool_buy",i.neutral="_Currencies_Neutral",i.sell="_moving_avarge_tool_sell",i.strongSell="_Currencies_Strong_Sell",i.upside="_invpro_modelTemplateRestrictedDemoLabelUpside",i.downside="_invpro_fair_value_summary_cell_label_downside",i.average="_consensus_avg",i.high="_consensus_price_target_high",i.low="_consensus_price_target_low",i.lastPrice="_Price",i.analystCount="_invpro_revenueAndEpsForecastsTableHeaderNumberOfAnalysts",i.analysts="_analysts",i.technical="_Technical",i.more="_More",i.explore="_technical_explore",i.daily="_pivot_tool_daily",i.weekly="_Weekly",i.monthly="_pivot_tool_monthly",i.time_period_1d="_time_period_1d",i.time_period_1w="_time_period_1w",i.time_period_1m="_time_period_1m"},98099:function(e,t,n){"use strict";n.d(t,{a:function(){return d},t:function(){return p}});var r=n(67294),i=n(94184),a=n.n(i),o=n(63569),l=n(9475),_=n.n(l),s=n(63716),c=n(31577),u=n(85893);function p(e){return e===s.gP.StrongSell?c.Z.strongSell:e===s.gP.Sell?c.Z.sell:e===s.gP.Neutral?c.Z.neutral:e===s.gP.Buy?c.Z.buy:e===s.gP.StrongBuy?c.Z.strongBuy:""}var d=function(e){var t=e.conclusion,n=e.isVersion2,i=e.isDesktop,l=e.className,d=e.shadow,m=e.hideLabels,g=e.size,v=void 0===g?"medium":g,y=(0,o.Z)().t,x=(0,r.useMemo)(function(){switch(v){case"small":return{gaugeContainer:"!w-[250px] !h-[80px]",gauge:"!w-[85px] !h-[42.5px]",arrow:"!bottom-[40px] !left-[39.5px] !h-[26px]",circle:"!top-[58px] !bottom-[19px]",separator:"!h-[42px] !left-[41px]",indicator:"!w-[79px] !h-[79px] !top-[3px] !left-[3px]",indicatorShadow:"!w-[67px] !h-[67px] !top-[9px] !left-[9px]"};case"medium":default:return{gaugeContainer:"!w-[300px] !h-[106px]",gauge:"!w-[136px] !h-[68px]",arrow:"!bottom-[65px] !left-[64.5px] !h-[42px]",circle:"!top-[84px] !bottom-[19px]",separator:"!h-[68px] !left-[67px]",indicator:"!w-[130px] !h-[130px] !top-[3px] !left-[3px]",indicatorShadow:"!w-[118px] !h-[118px] !top-[9px] !left-[9px]"};case"large":return{gaugeContainer:"!w-[375px] !h-[135px] mobileOnly:!w-[300px] mobileOnly:!h-[106px]",gauge:"!w-[204px] !h-[102px] mobileOnly:!w-[136px] mobileOnly:!h-[68px]",arrow:"!bottom-[101px] !left-[98px] !h-[60px] mobileOnly:!bottom-[65px] mobileOnly:!left-[64.5px] mobileOnly:!h-[42px]",circle:"!top-[113px] !bottom-[19px] mobileOnly:!top-[84px] mobileOnly:!bottom-[19px]",separator:"!h-[106px] !left-[100px] !w-[4px] mobileOnly:!h-[68px] mobileOnly:!left-[67px] mobileOnly:!w-[3px]",indicator:"!w-[198px] !h-[198px] !top-[3px] !left-[3px] mobileOnly:!w-[130px] mobileOnly:!h-[130px] mobileOnly:!top-[3px] mobileOnly:!left-[3px]",indicatorShadow:"!w-[174px] !h-[174px] !top-[15px] !left-[15px] mobileOnly:!w-[118px] mobileOnly:!h-[118px] mobileOnly:!top-[9px] mobileOnly:!left-[9px]"}}},[v]),h=(0,r.useMemo)(function(){var e="large"===v;switch(t){case s.gP.Sell:case s.gP.StrongSell:return e?"text-white bg-negative-main":"text-negative-main bg-negative-light";case s.gP.Buy:case s.gP.StrongBuy:return e?"text-white bg-positive-main":"text-positive-main bg-positive-light";default:return e?"text-white bg-[#5B616E]":"text-primary bg-primary-light"}},[t]);return(0,u.jsxs)("div",{className:a()("flex flex-col items-center shrink text-center",i?"ml-6":"self-center ml-0",_().gaugeView,l),children:[(0,u.jsxs)("div",{className:a()(_().gaugeContainer,n&&x.gaugeContainer),"data-c":t,children:[(0,u.jsxs)("div",{className:a()(_().gauge,n&&x.gauge),children:[Array.from({length:5}).map(function(e,t){return(0,u.jsx)("div",{className:_().bar,"data-i":t},t)}),Array.from({length:4}).map(function(e,t){return(0,u.jsx)("div",{className:a()(_().separator,n&&x.separator),"data-i":t},t)}),(0,u.jsx)("div",{className:a()(_().indicator,n&&x.indicator),children:(0,u.jsx)("div",{className:a()(_().arrow,n&&x.arrow)})})]}),d&&(0,u.jsxs)("div",{className:a()(_().gauge," !absolute !opacity-20 ",n&&x.gauge),children:[Array.from({length:5}).map(function(e,t){return(0,u.jsx)("div",{className:_().bar,"data-i":t},t)}),Array.from({length:4}).map(function(e,t){return(0,u.jsx)("div",{className:a()(_().separator,n&&x.separator),"data-i":t},t)}),(0,u.jsx)("div",{className:a()(_().indicator,n&&x.indicatorShadow)})]}),(0,u.jsx)("div",{className:a()(_().circle,n&&x.circle)}),(0,u.jsx)("div",{className:a()(_().strongSell,n&&"!left-[14px] !bottom-[19px]",{hidden:m}),children:y(c.Z.strongSell)}),(0,u.jsx)("div",{className:a()(_().sell,n&&"!left-[37px] !top-[15px]",{hidden:m}),children:y(c.Z.sell)}),(0,u.jsx)("div",{className:a()(_().neutral,n&&"!-top-[11px]",{hidden:m}),children:y(c.Z.neutral)}),(0,u.jsx)("div",{className:a()(_().buy,n&&"!right-[38px] !top-[15px]",{hidden:m}),children:y(c.Z.buy)}),(0,u.jsx)("div",{className:a()(_().strongBuy,n&&"!right-[14px] !bottom-[19px]",{hidden:m}),children:y(c.Z.strongBuy)})]}),(0,u.jsx)("div",{className:a()("rounded-full px-4 py-1.5 text-center mb-6 mt-1 ".concat(n?"font-semibold leading-5 -mt-2.5":"font-bold leading-4"),h),children:y(p(t))}),!n&&(0,u.jsx)("div",{className:"text-center text-xs leading-3 text-gray-500 mb-1",children:y(c.Z.analystsConsensus)})]})}},63716:function(e,t,n){"use strict";n.d(t,{NI:function(){return s},gP:function(){return a},mx:function(){return _}});var r,i,a,o=n(59499),l=n(45541);(r=a||(a={}))[r.StrongSell=0]="StrongSell",r[r.Sell=1]="Sell",r[r.Neutral=2]="Neutral",r[r.Buy=3]="Buy",r[r.StrongBuy=4]="StrongBuy",r[r.NotApplicable=5]="NotApplicable";var _={strong_sell:a.StrongSell,sell:a.Sell,neutral:a.Neutral,buy:a.Buy,strong_buy:a.StrongBuy},s=(i={},(0,o.Z)(i,l.U.Neutral,"text-primary"),(0,o.Z)(i,l.U.Up,"text-positive-main"),(0,o.Z)(i,l.U.Down,"text-negative-main"),i)},71461:function(e,t,n){"use strict";var r,i,a,o,l,_,s,c;n.d(t,{$X:function(){return r},J6:function(){return i},f2:function(){return a},qb:function(){return o}}),(l=r||(r={})).Area="mountain",l.Candlestick="candle",(_=i||(i={})).Minute="minute",_.Second="second",_.Day="day",_.Week="week",_.Month="month",_.Year="year",(s=a||(a={})).OneMinute="PT1M",s.FiveMinute="PT5M",s.FifteenMinute="PT15M",s.ThirtyMinute="PT30M",s.OneHour="PT1H",s.FiveHour="PT5H",s.OneDay="P1D",s.OneWeek="P1W",s.OneMonth="P1M",s.ThreeMonths="P3M",s.SixMonths="P6M",s.OneYear="P1Y",s.ThreeYears="P3Y",s.FiveYears="P5Y",s.Max="MAX",(c=o||(o={})).Quarterly="Quarterly",c.Annual="Annual"},33898:function(e,t,n){"use strict";n.d(t,{C:function(){return c}}),n(67294);var r=n(22995),i=n(98105),a=n(85977),o=n(99331),l=n(83250),_=n(52825),s=n(85893),c=(0,i.Pi)(function(e){var t=e.description,n=(0,o.o)().dataStore.instrumentStore,i=(0,r.Z)().parser,c=(0,l.Qi)(n.instrument,i),u=a.Z.replace(t,c);return(0,s.jsx)(_.k,{description:u})})},34050:function(e,t,n){"use strict";n.d(t,{yW:function(){return V},g_:function(){return C},Lb:function(){return R},g0:function(){return D}});var r,i,a=n(59499);n(67294);var o=n(84609),l=n(66206),_=n(35766),s=n(22995),c=n(28616),u=n(63569),p=n(74001),d=n(49430),m=n.n(d),g=n(58813),v=n(85893),y=function(e){var t=e.date,n=(0,g.Z)();return(0,v.jsx)(v.Fragment,{children:n(t)})},x=n(31454),h=n(99331),f=n(23074),b=n(29311);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var E=function(e){var t=e.value,n=e.precision,r=void 0===n?p.uN:n,i=e.noValue,a=e.prefix,l=e.suffix;if(null!=t){var _=(0,o.q)().formatNumberToLocalString(t,r);return(0,v.jsxs)("span",{className:m()["dd-numeric"],children:[(0,v.jsx)("span",{children:a}),(0,v.jsx)("span",{children:_}),(0,v.jsx)("span",{children:l})]})}return(0,v.jsx)(T,{noValue:i})},G=function(e){var t=e.values,n=e.keyInfoOptions,r=P(t,null==n?void 0:n.zeroValAllowed),i=(0,u.Z)().t;return(0,v.jsxs)(v.Fragment,{children:[null!=r?i(r):(0,v.jsx)(T,{})," "]})},N=function(e){var t=e.values,n=e.keyInfoOptions,r=S(t,null==n?void 0:n.zeroValAllowed);return null!=n&&n.fallbackString&&null===r?(0,v.jsx)(G,{values:[t[1]]}):(0,v.jsx)(E,{value:r,precision:null==n?void 0:n.precision})},w=function(e){var t=e.values,n=e.keyInfoOptions,r=S(t,null==n?void 0:n.zeroValAllowed);return(0,v.jsx)(E,{value:r,precision:null==n?void 0:n.precision,suffix:"%"})},O=function(e){var t=e.values,n=e.keyInfoOptions,r=S(t,null==n?void 0:n.zeroValAllowed),i=S(t,null==n?void 0:n.zeroValAllowed);return null===r||null===i?(0,v.jsx)(T,{}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(E,{value:r,precision:null==n?void 0:n.precision}),(0,v.jsx)("span",{className:"ml-1 mr-1",children:"-"}),(0,v.jsx)(E,{value:i,precision:null==n?void 0:n.precision})]})},A=function(e){var t=e.values,n=e.keyInfoOptions,r=S(t,null==n?void 0:n.zeroValAllowed),i=P(t),a=r?l.Z.getAbbreviatedNumber(r):null;return(0,v.jsx)(E,{value:a&&a.number,prefix:i||"",suffix:a&&a.suffix||"",precision:null==n?void 0:n.precision})},j=function(e){var t=e.values,n=e.keyInfoOptions,r=P(t);if(null!=r){var i=(0,s.Z)({ignoreTimezone:null==n?void 0:n.ignoreTimezone}).parser,a=i?i.getLocalDateInFormat(r,null==n?void 0:n.formatting):r;return(0,v.jsx)(v.Fragment,{children:a})}return(0,v.jsx)(T,{})},T=function(e){var t=e.noValue;return(0,v.jsx)(v.Fragment,{children:void 0===t?"-":t})},S=function(e,t){return e&&"number"==typeof e[0]&&(t||0!==e[0])?e.shift():null},P=function(e,t){if(e&&e[0]&&"string"==typeof e[0]){var n=parseFloat(e[0]);if(t||0!==n)return e.shift()}return null},I=n(54652),C="earnings",V="dividends",R=(r={},(0,a.Z)(r,I.G.CONTRACT_SIZE,G),(0,a.Z)(r,I.G.MONTHS,G),(0,a.Z)(r,I.G.EXPIRATION_DATE,function(e){var t=P(e.values);return null!=t?(0,v.jsx)(y,{date:t}):(0,v.jsx)(T,{})}),(0,a.Z)(r,I.G.POINT_VALUE,G),(0,a.Z)(r,I.G.ROLLOVER,j),(0,a.Z)(r,I.G.SETTLEMENT_DATE,j),(0,a.Z)(r,I.G.SETTLEMENT_TYPE,G),(0,a.Z)(r,I.G.TICK_SIZE,N),(0,a.Z)(r,I.G.TICK_VALUE,N),(0,a.Z)(r,I.G.BASE_SYMBOL,G),(0,a.Z)(r,I.G.RATIO,N),(0,a.Z)(r,I.G.VOLUME,N),(0,a.Z)(r,I.G.PREV,N),(0,a.Z)(r,I.G.OPEN,N),(0,a.Z)(r,I.G.AVG_VOL,N),(0,a.Z)(r,I.G.EPS,N),(0,a.Z)(r,I.G.SHARES,N),(0,a.Z)(r,I.G.BETA,N),(0,a.Z)(r,I.G.DAILY_RANGE,O),(0,a.Z)(r,I.G.WEEK_RANGE,O),(0,a.Z)(r,I.G.BID_ASK,function(e){var t=e.values,n=e.keyInfoOptions,r=S(t,null==n?void 0:n.zeroValAllowed),i=S(t,null==n?void 0:n.zeroValAllowed);return null===r||null===i?(0,v.jsx)(T,{}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(E,{value:r,precision:null==n?void 0:n.precision}),(0,v.jsx)("span",{className:"ml-1 mr-1",children:" / "}),(0,v.jsx)(E,{value:i,precision:null==n?void 0:n.precision})]})}),(0,a.Z)(r,I.G.VOLUME_24H,A),(0,a.Z)(r,I.G.CRYPTO_MARKET_CAP,A),(0,a.Z)(r,I.G.RETURN,w),(0,a.Z)(r,I.G.DIVIDEND,function(e){var t=e.values,n=e.keyInfoOptions,r=e.baseRoute,i=e.openNewTab,a=S(t,null==n?void 0:n.zeroValAllowed),o=S(t,null==n?void 0:n.zeroValAllowed),l=(null!=a||null!=o)&&r,s=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(E,{value:a,noValue:"N/A",precision:null==n?void 0:n.precision}),(0,v.jsxs)("div",{className:"ml-1",children:[(0,v.jsx)("span",{children:"("}),(0,v.jsx)(E,{value:o,noValue:"N/A",precision:null==n?void 0:n.precision,suffix:"%"}),(0,v.jsx)("span",{children:")"})]})]});return l?(0,v.jsx)(c.r,k(k({"data-test":"link-dividends",href:(0,_.t)(r,V),className:"flex"},i?{target:"_blank"}:{}),{},{children:s})):(0,v.jsx)("div",{className:"flex",children:s})}),(0,a.Z)(r,I.G.MARKET_CAP,function(e){var t=e.values,n=e.keyInfoOptions,r=(0,h.o)().dataStore.instrumentStore.investingProSlug,i=(0,u.Z)().t,a=(0,b.FG)().sendTagManagerEvent,o=S(t,null==n?void 0:n.zeroValAllowed),_=o?l.Z.getAbbreviatedNumber(o):null,s="/pro/".concat(r,"/explorer/marketcap?entry=ks_market_cap_hook&");return(0,v.jsx)(c.r,{href:s,suppressHydrationWarning:!0,target:"_blank",title:i(f.W.marketCap),onClick:function(e){var t,n,r;return e.preventDefault(),null===(t=window)||void 0===t||null===(n=t.localStorage)||void 0===n||null===(r=n.setItem)||void 0===r||r.call(n,"investing.referralComponent","ks_market_cap_hook"),a(b.eg.GTM_EVENT,{event_name_cd:"click_on_investing_pro_premium_hook",GA_event_category:"inv pro premium",GA_event_action:"click on investing pro hook",GA_event_label:"ks_market_cap_hook",action_cd:"click",object:"link",product_feature:"none",ui_template:"47-above_the_fold_line-market cap",event_cd_description1:"destination URL",event_cd_value1:s,referral_component:"ks_market_cap_hook"}),window.open(s,"_blank"),!1},children:(0,v.jsx)(E,{value:_&&_.number,suffix:_&&_.suffix||"",precision:null==n?void 0:n.precision})})}),(0,a.Z)(r,I.G.MAX_SUPPLY,A),(0,a.Z)(r,I.G.CIRCULATING_SUPPLY,A),(0,a.Z)(r,I.G.ONE_WEEK_CHANGE,w),(0,a.Z)(r,I.G.ONE_MONTH_CHANGE,w),(0,a.Z)(r,I.G.ONE_YEAR_CHANGE,w),(0,a.Z)(r,I.G.YTD_CHANGE,w),(0,a.Z)(r,I.G.RANK,G),(0,a.Z)(r,I.G.REVENUE,A),(0,a.Z)(r,I.G.EARNING,function(e){var t=e.values,n=e.keyInfoOptions,r=e.openNewTab,i=P(t);if(null!=i){var a=(0,_.t)(i,C);return(0,v.jsx)(c.r,k(k({"data-test":"link-key-info",href:a,suppressHydrationWarning:!0},r?{target:"_blank"}:{}),{},{children:(0,v.jsx)(j,{values:t,keyInfoOptions:n})}))}return(0,v.jsx)(T,{})}),(0,a.Z)(r,I.G.BID,N),(0,a.Z)(r,I.G.ASK,N),(0,a.Z)(r,I.G.ISIN,G),(0,a.Z)(r,I.G.MATURITY_DATE,function(e){var t=e.values,n=e.keyInfoOptions,r=P(t);if(null!=r){var i=new Date(r),a=(0,x.q)(i)?i:r,o=(0,s.Z)({ignoreTimezone:null==n?void 0:n.ignoreTimezone}).parser,l=o?o.getLocalDateInFormat(a,null==n?void 0:n.formatting):r;return(0,v.jsx)(v.Fragment,{children:l})}return(0,v.jsx)(T,{})}),(0,a.Z)(r,I.G.OPEN_PRICE,N),(0,a.Z)(r,I.G.COUPON,N),(0,a.Z)(r,I.G.COUPON_TYPE,G),(0,a.Z)(r,I.G.COUPON_FREQUENCY,G),(0,a.Z)(r,I.G.NEXT_COUPON_DATE,j),(0,a.Z)(r,I.G.RATING,G),(0,a.Z)(r,I.G.DURATION,G),(0,a.Z)(r,I.G.YIELD,G),(0,a.Z)(r,I.G.ISSUE_DATE,j),(0,a.Z)(r,I.G.PRICE,N),(0,a.Z)(r,I.G.PRICE_RANGE,O),(0,a.Z)(r,I.G.ROI_TTM,N),(0,a.Z)(r,I.G.DIVIDENDS_TTM,N),(0,a.Z)(r,I.G.DIVIDEND_YIELD,w),(0,a.Z)(r,I.G.TOTAL_ASSETS,G),(0,a.Z)(r,I.G.ASSET_TYPE,G),r),D=(i={},(0,a.Z)(i,I.G.VOLUME,{zeroValAllowed:!0,precision:0}),(0,a.Z)(i,I.G.PREV,{precision:0}),(0,a.Z)(i,I.G.OPEN,{precision:0}),(0,a.Z)(i,I.G.AVG_VOL,{precision:0}),(0,a.Z)(i,I.G.EPS,{zeroValAllowed:!0,precision:0}),(0,a.Z)(i,I.G.SHARES,{precision:0}),(0,a.Z)(i,I.G.BETA,{zeroValAllowed:!0,precision:0}),(0,a.Z)(i,I.G.DAILY_RANGE,{precision:0}),(0,a.Z)(i,I.G.WEEK_RANGE,{zeroValAllowed:!0,precision:0}),(0,a.Z)(i,I.G.RETURN,{zeroValAllowed:!0,precision:0}),(0,a.Z)(i,I.G.DIVIDEND,{zeroValAllowed:!0}),(0,a.Z)(i,I.G.MARKET_CAP,{precision:0}),(0,a.Z)(i,I.G.TICK_VALUE,{precision:0}),(0,a.Z)(i,I.G.TICK_SIZE,{precision:0,fallbackString:!0}),(0,a.Z)(i,I.G.REVENUE,{zeroValAllowed:!0,precision:0}),(0,a.Z)(i,I.G.EARNING,{formatting:{year:"numeric",month:"short",day:"2-digit"}}),(0,a.Z)(i,I.G.EXPIRATION_DATE,{formatting:{year:"2-digit",month:"short"}}),(0,a.Z)(i,I.G.BID,{precision:0}),(0,a.Z)(i,I.G.ASK,{precision:0}),(0,a.Z)(i,I.G.ROLLOVER,{ignoreTimezone:!0,formatting:{year:"numeric",month:"2-digit",day:"2-digit"}}),(0,a.Z)(i,I.G.SETTLEMENT_DATE,{ignoreTimezone:!0,formatting:{year:"numeric",month:"2-digit",day:"2-digit"}}),(0,a.Z)(i,I.G.MATURITY_DATE,{ignoreTimezone:!0,formatting:{year:"numeric",month:"2-digit",day:"2-digit"}}),i)},23074:function(e,t,n){"use strict";n.d(t,{J:function(){return p},W:function(){return u}});var r,i,a=n(94184),o=n.n(a);(r=i||(i={})).prev_close="_instr_data_prev_close",r.daily_range="_instr_data_daily_range",r.revenue="_instr_revenue",r.open="_instr_data_open",r["52_wk_range"]="_instr_52_wk_range",r.actual_eps="_Actual_EPS",r.volume="_instr_data_volume",r.volume_24h="_crypto_24h_Volume",r.crypto_market_cap="_crypto_market_cap",r.max_supply="_crypto_max_supply",r.circulating_supply="_crypto_circulating_supply",r.change_7d="_chg_percent_7D",r.one_month_change="_Sentiments_Timeframe_1_Month",r.one_year_change="_1_Year",r.ytd_change="_YTD",r.rank="_web_crypto_rank",r.market_cap="_instr_market_cap",r.dividend="_instr_dividend",r.avg_volume="_instr_avg_volume",r.ratio="_instr_pe_ratio",r.beta="_instr_beta",r.one_year_return="_instr_one_year_return",r.sharesout="_instr_sharesout",r.next_earning_date="_instr_next_earning_date",r.tick_size="_instr_tick_size",r.instrument_month="_Months",r.contract_size="_instr_contract_size",r.tick_value="_instr_tick_value",r.settlement_type="_instr_settlement_type",r.settlement_date="_futures_settlement_day",r.point_value="_contract_point_value",r.rollover_day="_last_rollover_day",r.base_symbol="_instr_instrument_base_symbol",r.month_date="_instr_instrument_month",r.maturity_date="_instr_maturity_date",r.type="_instr_instrument_type",r.open_price="_instr_open_price",r.coupon="_instr_coupon",r.coupon_frequency="_coupon_frequency",r.next_coupon_date="_next_coupon_date",r.rating="_bonds_rating",r.duration="_duration",r.yield="_Yield",r.issue_date="_issue_date",r.price="_instr_price",r.price_range="_instr_price_range",r.settlement_cash="_SettlementPhysical",r.settlement_physical="_SettlementCash",r.bid="_instr_bid",r.ask="_instr_ask",r.bid_ask="_instr_data_bid_ask",r.roi_ttm="_instr_roi",r.dividends_ttm="_instr_dividendttm",r.dividend_yield="_instr_dividendsyield",r.total_assets="_instr_totalassets",r.asset_type="_asset_type",r.div_semi_annual="_div_semi_annual";var l=n(45646);n(67294);var _=n(63569),s=n(34050),c=n(85893),u={prevClose:i.prev_close,dailyRange:i.daily_range,revenue:i.revenue,open:i.open,weekRange:i["52_wk_range"],eps:i.actual_eps,volume:i.volume,volume24h:i.volume_24h,marketCap:i.market_cap,cryptoMarketCap:i.crypto_market_cap,oneWeekChange:i.change_7d,oneMonthChange:i.one_month_change,oneYearChange:i.one_year_change,ytdChange:i.ytd_change,rank:i.rank,maxSupply:i.max_supply,circulatingSupply:i.circulating_supply,bidAsk:i.bid_ask,dividend:i.dividend,avgVolume:i.avg_volume,ratio:i.ratio,beta:i.beta,oneYearReturn:i.one_year_return,sharesOutstanding:i.sharesout,nextEarningDate:i.next_earning_date,tick_size:i.tick_size,instrument_month:i.instrument_month,contract_size:i.contract_size,tick_value:i.tick_value,settlement_type:i.settlement_type,settlement_date:i.settlement_date,point_value:i.point_value,rollover_day:i.rollover_day,base_symbol:i.base_symbol,month_date:i.month_date,bid:i.bid,ask:i.ask,bid_ask:i.bid_ask,isin:l.Z.isin,maturity_date:i.maturity_date,open_price:i.open_price,coupon:i.coupon,type:i.type,coupon_frequency:i.coupon_frequency,next_coupon_date:i.next_coupon_date,rating:i.rating,duration:i.duration,yield:i.yield,issue_date:i.issue_date,price:i.price,price_range:i.price_range,roi_ttm:i.roi_ttm,dividends_ttm:i.dividends_ttm,dividend_yield:i.dividend_yield,total_assets:i.total_assets,asset_type:i.asset_type},p=function(e){var t=e.keyInfoArr,n=(0,_.Z)().t;return(0,c.jsx)("dl",{className:o()("grid","mobile:grid-cols-1","desktop:grid-cols-3","gap-x-5","mobile:p-2","mobile:bg-background-surface","text-xs"),"data-test":"key-info",children:null==t?void 0:t.map(function(e){var t=s.Lb[e.name],r=s.g0[e.name],i=u[e.name];return(0,c.jsxs)("div",{className:o()("flex","justify-between","border-b","py-2","desktop:py-0.5"),children:[(0,c.jsx)("dt",{children:n(i)}),(0,c.jsx)("dd",{"data-test":e.name,className:"font-bold",children:(0,c.jsx)(t,{values:e.values,keyInfoOptions:r})})]},i)})})}},97460:function(e,t,n){"use strict";var r,i;n.d(t,{Z:function(){return r}}),(i=r||(r={})).time_period_1day="_time_period_1day",i.time_period_1week="_time_period_1week",i.time_period_1month="_time_period_1month",i.time_period_3months="_time_period_3months",i.time_period_6months="_time_period_6months",i.time_period_1year="_time_period_1year",i.time_period_5years="_time_period_5years",i.time_period_max="_time_period_max",i.technicalChart="_technicalChart",i.equity_dividend="_equity_dividend",i.ex_div_date="_ex_div_date",i.payment_date="_payment_date",i.stock_split="_chart_stock_split",i.split_ratio="_split_ratio",i.open="_chart_candle_open_price",i.Close="_chart_candle_close_price",i.High="_chart_candle_high_price",i.Low="_chart_candle_low_price",i.chart_candle_volume="_chart_candle_volume",i.candlestick_chart="_candlestick_chart",i.area_chart="_area_chart",i.jschart_interval_title_60="_jschart_interval_title_60",i.jschart_interval_title_300="_jschart_interval_title_300",i.jschart_interval_title_900="_jschart_interval_title_900",i.jschart_interval_title_1800="_jschart_interval_title_1800",i.jschart_interval_title_3600="_jschart_interval_title_3600",i.jschart_interval_title_18000="_jschart_interval_title_18000",i.Daily="_Daily",i.Weekly="_Weekly",i.Monthly="_Monthly",i.show_hide_news="_show_hide_news"},9475:function(e){e.exports={gaugeView:"analyst-price-target_gaugeView__yP3BV",gaugeContainer:"analyst-price-target_gaugeContainer__F_79r",gauge:"analyst-price-target_gauge__mc_8B",bar:"analyst-price-target_bar__nhotN",separator:"analyst-price-target_separator__682r6",indicator:"analyst-price-target_indicator__dhPLO",circle:"analyst-price-target_circle__ykYoV",arrow:"analyst-price-target_arrow__ZRmAZ",strongSell:"analyst-price-target_strongSell__OtkYw",sell:"analyst-price-target_sell__umjJy",neutral:"analyst-price-target_neutral__L8xm4",buy:"analyst-price-target_buy__5XS2x",strongBuy:"analyst-price-target_strongBuy__QaJ8j",textGreen:"analyst-price-target_textGreen__u0EDw",altColors:"analyst-price-target_altColors__4qNMt",textGray:"analyst-price-target_textGray__Jn1OI",textRed:"analyst-price-target_textRed___zMN4",changePercent:"analyst-price-target_changePercent__Cm3qt"}},49430:function(e){e.exports={"dd-numeric":"key-info_dd-numeric__ZQFIs"}},46022:function(e){e.exports={"chart-placeholder":"OverviewChartContainer_chart-placeholder__mBfv6"}}}]);