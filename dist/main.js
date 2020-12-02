(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(645),r=n.n(i)()((function(e){return e[1]}));r.push([e.id,".projectHub {\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  justify-content: center;\n  border: solid 1px green;\n}\n\n.hidden {\n  display: none !important; \n}\n\n.projectDisplay {\n  border: 1px solid maroon;\n  padding-top: 15px;\n}\n\n.projectFormContainer{\n  display: flex;\n  flex-direction: column;\n}\n\n.nameInput {\n  margin-bottom: 15px;\n}\n\n.objInput\n\n.projectTitle {\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.projectDisplayer {\n  border: 1px solid red;\n  margin: 10px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 25px;\n  padding: 10px;\n}\n\n.poDisplayer {\n  border: 1px solid blue;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 18px;\n}\n\n.pGenInfo {\n  text-align: center;\n  border: 1px solid lavender;\n  display: flex;\n  margin-top: 15px;\n  flex-direction: row;\n  font-size: 15px;\n}\n\n.pDescription {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.pName {\n  width: 33%;\n  padding-right: 10px;\n  border-right: solid 1px;\n}\n\n.pSDate {\n  width: 33%;\n  padding-right: 10px;\n  padding-left: 10px;\n  border-right: solid 1px;\n  border-left: 1px solid;\n}\n\n.pFDate {\n  width: 33%;\n  padding-right: 10px;\n  padding-left: 10px;\n  border-right: solid 1px;\n  border-left: 1px solid;\n}\n\n.editButton {\n  width: 100%;\n}\n\n.editForm {\n  display: flex;\n  flex-direction: column;\n  padding-top: 15px;\n}\n\n.formInput {\n  height: 150px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n.formInputDate {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n.pAContainer {\n  border: solid 1px purple;\n}\n\n.smallAContainer {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid black;\n\n}\n\n.aGenInfo {\n  width: 100%;\n  display: flex;\n\n}\n\n.aTitle {\n  width: 33%;\n}\n\n.aDescription {\n  width: 100%;\n}\n\n.aDueDate {\n  width: 33%;\n}\n\n.aPriority {\n  width: 33%;\n}\n",""]);const d=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(r[s]=!0)}for(var o=0;o<e.length;o++){var a=[].concat(e[o]);i&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},379:(e,t,n)=>{var i,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),d=[];function s(e){for(var t=-1,n=0;n<d.length;n++)if(d[n].identifier===e){t=n;break}return t}function o(e,t){for(var n={},i=[],r=0;r<e.length;r++){var o=e[r],a=t.base?o[0]+t.base:o[0],c=n[a]||0,l="".concat(a," ").concat(c);n[a]=c+1;var p=s(l),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==p?(d[p].references++,d[p].updater(u)):d.push({identifier:l,updater:b(u,t),references:1}),i.push(l)}return i}function a(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var d=n.nc;d&&(i.nonce=d)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var c,l=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function p(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var d=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(d,s[t]):e.appendChild(d)}}function u(e,t,n){var i=n.css,r=n.media,d=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),d&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,h=0;function b(e,t){var n,i,r;if(t.singleton){var d=h++;n=m||(m=a(t)),i=p.bind(null,n,d,!1),r=p.bind(null,n,d,!0)}else n=a(t),i=u.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=o(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=s(n[i]);d[r].references--}for(var a=o(e,t),c=0;c<n.length;c++){var l=s(n[c]);0===d[l].references&&(d[l].updater(),d.splice(l,1))}n=a}}}}},t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),i=n(426);t()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const r=(e,t,n)=>{if(null==document.getElementById(`smallContainer${t}${e}`)){const i=document.getElementById("pAContainer"+t),r=document.createElement("div"),d=document.createElement("div"),s=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div");s.innerHTML=n.getTitle,o.innerHTML=n.getDescription,a.innerHTML=n.getDueDate,c.innerHTML=n.getPriority,d.setAttribute("class","aGenInfo"),s.setAttribute("class","aTitle"),o.setAttribute("class","aDescription"),a.setAttribute("class","aDueDate"),c.setAttribute("class","aPriority"),r.setAttribute("id",`smallContainer${t}${e}`),r.setAttribute("class","smallAContainer"),d.appendChild(s),d.appendChild(a),d.appendChild(c),r.appendChild(d),r.appendChild(o),i.appendChild(r)}},d=(e,t,n,i,r,d)=>{if(null==document.getElementById(""+t)){let o=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div"),p=document.createElement("div"),u=document.createElement("div"),m=document.createElement("div"),h=document.createElement("div");const b=document.createElement("input"),g=document.createElement("input"),v=document.createElement("input"),A=document.createElement("input"),f=document.createElement("button"),y=document.createElement("button"),E=document.createElement("button");E.addEventListener("click",s),E.innerHTML="Add a new Activity",E.setAttribute("id",""+t),b.setAttribute("id","nameInput"+t),b.setAttribute("type","text"),b.setAttribute("placeholder","Name"),b.setAttribute("class","formInputSmall"),g.setAttribute("id","objInput"+t),g.setAttribute("type","text"),g.setAttribute("placeholder","Objective"),g.setAttribute("class","formInput"),v.setAttribute("id","descInput"+t),v.setAttribute("type","text"),v.setAttribute("placeholder","Description"),v.setAttribute("class","formInput"),A.setAttribute("id","cDateInput"+t),A.setAttribute("type","date"),A.setAttribute("class","formInputDate"),f.innerHTML="Edit",f.setAttribute("id","editButton"+t),f.setAttribute("class","editButton"),f.addEventListener("click",r),y.setAttribute("id","subEdit"+t),y.setAttribute("class","subEdits"),y.innerHTML="EDIT",y.addEventListener("click",i),h.appendChild(b),h.appendChild(g),h.appendChild(v),h.appendChild(A),h.appendChild(y),h.setAttribute("class","editForm hidden"),h.setAttribute("id",`editForm${t} `),c.setAttribute("class","pDescription"),c.setAttribute("id","pDescription"+t),l.setAttribute("class","pGenInfo"),p.setAttribute("class","pName"),p.setAttribute("id","pName"+t),p.innerHTML=n[t].getName,u.setAttribute("class","pSDate"),u.setAttribute("id","pSDate"+t),u.innerHTML=n[t].getStartDate,m.setAttribute("class","pFDate"),m.setAttribute("id","pFDate"+t),m.innerHTML=n[t].getCompletionDate,c.innerHTML=n[t].getDescription,l.appendChild(p),l.appendChild(u),l.appendChild(m),a.setAttribute("class","poDisplayer"),a.setAttribute("id","poDisplayer"+t),a.innerHTML=n[t].getObjective,o.setAttribute("class","projectDisplayer"),o.setAttribute("id",""+t),o.appendChild(l),o.appendChild(a),o.appendChild(c),o.appendChild(h),o.appendChild(((e,t)=>{const n=document.createElement("div"),i=document.createElement("div"),r=document.createElement("input"),d=document.createElement("input"),s=document.createElement("input"),o=document.createElement("input"),a=document.createElement("button"),c=document.createElement("div");return c.setAttribute("class","actAlerts"),c.setAttribute("id","actAlerts"),a.innerHTML="New Activity",a.setAttribute("class","editBActivities"),a.setAttribute("id","editBActivities"+e),a.addEventListener("click",t),r.setAttribute("id","titleInput"+e),d.setAttribute("id","descriptionAct"+e),s.setAttribute("id","dueDateInput"+e),s.setAttribute("type","date"),o.setAttribute("id","priorityInput"+e),o.setAttribute("type","number"),o.setAttribute("min","1"),o.setAttribute("max","5"),n.setAttribute("class","pAContainer"),n.setAttribute("id","pAContainer"+e),n.innerHTML="This is the activities container",i.setAttribute("class","pActForm hidden"),i.setAttribute("id","pActForm"+e),i.appendChild(r),i.appendChild(d),i.appendChild(s),i.appendChild(o),i.appendChild(a),n.appendChild(i),n.appendChild(c),n})(t,d)),o.appendChild(f),o.appendChild(E),e.appendChild(o)}},s=e=>{const t=e.target.id;document.getElementById("pActForm"+t).classList.remove("hidden")};class o{constructor(e,t){let n=new Date;this.name=e,this.objective=t,this.startDate=n.toISOString(),this.description="Lorem ipsus dolor sit amet",this.completionDate=0,this.activities=[]}get getName(){return this.name}get getObjective(){return this.objective}get getStartDate(){return this.startDate}get getDescription(){return this.description}get getCompletionDate(){return this.completionDate}get getActivities(){return this.activities}set setName(e){this.name=e}set setObjective(e){this.objective=e}set setStartDate(e){this.startDate=e}set setDescription(e){this.description=e}set setCompletionDate(e){this.completionDate=e}set setActivities(e){this.activities.push(e)}}class a{constructor(e,t,n,i){this.title=e,this.description=t,this.dueDate=n,this.priority=i}get getTitle(){return this.title}get getDescription(){return this.description}get getDueDate(){return this.dueDate}get getPriority(){return this.priority}set setTitle(e){this.title=e}set setDescription(e){this.description=e}set setDueDate(e){this.dueDate=e}set setPriority(e){this.priority=e}}let c=[];const l=e=>{let t=e.target.id.replace("subEdit",""),n=document.getElementById("nameInput"+t).value,i=document.getElementById("objInput"+t).value,r=document.getElementById("descInput"+t).value,d=document.getElementById("cDateInput"+t).value;c[t].setName=n,c[t].setDescription=r,c[t].setObjective=i,c[t].setCompletionDate=d,((e,t)=>{let n=document.getElementById(`editForm${e} `),i=document.getElementById("pName"+e),r=document.getElementById("poDisplayer"+e),d=document.getElementById("pDescription"+e),s=document.getElementById("pFDate"+e),o=document.getElementById("pAContainer"+e);const a=document.getElementById("editButton"+e);i.innerHTML=t[e].getName,r.innerHTML=t[e].getObjective,d.innerHTML=t[e].getDescription,s.innerHTML=t[e].getCompletionDate,a.classList.remove("hidden"),o.classList.remove("hidden"),n.className+=" hidden"})(t,c)},p=e=>{let t=e.target.id.replace("editBActivities","");const n=document.getElementById("pActForm"+t),i=document.getElementById("actAlerts"),d=document.getElementById("titleInput"+t).value,s=document.getElementById("descriptionAct"+t).value,o=document.getElementById("dueDateInput"+t).value,l=document.getElementById("priorityInput"+t).value;if(""!=d||""!=s||""!=o||""!=l){let e=new a(d,s,o,l);c[t].setActivities=e,i.innerHTML="",n.className+=" hidden",((e,t)=>{document.getElementById("pAContainer"+e);let n=t[e].getActivities;for(let t=0;t<n.length;t++)r(t,e,n[t])})(t,c)}else i.innerHTML="You must fill the required fields to create a new Activity."},u=e=>{let t=e.target.id.replace("editButton",""),n=document.getElementById(`editForm${t} `),i=document.getElementById("pAContainer"+t);const r=document.getElementById("editButton"+t);n.classList.remove("hidden"),r.className+=" hidden",i.className+=" hidden"};((e,t)=>{const n=document.getElementById("main"),i=document.createElement("div"),r=document.createElement("div"),s=document.createElement("div"),a=document.createElement("div"),m=document.createElement("input"),h=document.createElement("input"),b=document.createElement("input"),g=document.createElement("input"),v=document.createElement("button"),A=document.createElement("button"),f=document.createElement("div");f.setAttribute("class","projectsAlert"),f.setAttribute("id","projectsAlert"),i.setAttribute("class","projectHub"),i.setAttribute("id","projectHub"),r.setAttribute("class","projectFormContainer hidden"),r.setAttribute("id","projectFormContainer"),s.setAttribute("class","projectDisplay"),s.setAttribute("id","projectDisplay"),a.setAttribute("class","projectTitle"),a.setAttribute("id","projectTitle"),a.innerHTML="Projects",m.setAttribute("id","nameInput"),m.setAttribute("class","nameInput"),h.setAttribute("id","objInput"),h.setAttribute("class","objInput"),b.setAttribute("id","descInput"),b.setAttribute("class","descInput"),g.setAttribute("id","cDateInput"),g.setAttribute("class","cDateInput"),g.setAttribute("type","date"),v.innerHTML="submit",v.addEventListener("click",(()=>{const e=document.getElementById("projectsAlert");let t=document.getElementById("projectFormContainer"),n=document.getElementById("nameInput").value,i=document.getElementById("objInput").value,r=document.getElementById("descInput").value,s=document.getElementById("cDateInput").value;if(""!=n||""!=i||""!=r||""!=s){let a=new o(n,i);a.setDescription=r,a.setCompletionDate=s,t.className+=" hidden",e.innerHTML="",c.push(a),(e=>{let t=document.getElementById("projectDisplay");for(let n=0;n<e.length;n++)d(t,n,e,l,u,p)})(c)}else e.innerHTML="You must fill the required fields"})),A.innerHTML="New Project",A.addEventListener("click",(()=>{document.getElementById("projectFormContainer").classList.remove("hidden")})),r.appendChild(m),r.appendChild(h),r.appendChild(b),r.appendChild(g),r.appendChild(v),i.appendChild(a),i.appendChild(s),i.appendChild(r),r.appendChild(f),i.appendChild(A),n.appendChild(i)})()})()})();